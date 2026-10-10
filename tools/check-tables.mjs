// Check that a post's tables fit: for each viewport width, report the text-column width and every table whose scroll box
// overflows (scrollWidth > clientWidth), and whether the page itself scrolls sideways. Run against `hugo server` or a
// served production build (`hugo --gc --minify`). Headless Chrome via the DevTools protocol; Node 22+ (global WebSocket).
// Usage: node tools/check-tables.mjs <post url> [width,width,...] [screenshot-prefix]
// Goal: no table scrolls at 768px and up; on phones a table may scroll inside its box, never the page.
// <details> blocks are opened first. Not detected: a table clipped by a box that hides overflow - look at one.
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const url = process.argv[2];
const widths = (process.argv[3] || "375,1280,1366,1536,1920").split(",").map(Number);
const shot = process.argv[4];
const chrome = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const port = 9333;
const prof = mkdtempSync(join(tmpdir(), "cdp-"));
const proc = spawn(chrome, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`,
  "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let tabs;
for (let i = 0; i < 50; i++) {
  try { tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (tabs.length) break; } catch {}
  await sleep(200);
}
const ws = new WebSocket(tabs.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0;
const pending = new Map();
ws.addEventListener("message", (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
});
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

const probe = `(() => {
  document.querySelectorAll('.post-content details').forEach((d) => { d.open = true; });
  const main = document.querySelector('.main');
  const pc = document.querySelector('.post-content');
  const out = { vw: innerWidth, main: main.getBoundingClientRect().width, content: pc.getBoundingClientRect().width,
    fontPx: parseFloat(getComputedStyle(pc).fontSize), pageOverflow: document.documentElement.scrollWidth > innerWidth,
    tables: [] };
  document.querySelectorAll('.post-content .table-wrap').forEach((tw, i) => { const w = tw.querySelector('.table-scroll') || tw;
    const cap = tw.nextElementSibling ? tw.nextElementSibling.textContent.trim().slice(0, 9) : '';
    out.tables.push({ i: i + 1, cap, scroll: w.scrollWidth, client: w.clientWidth, over: w.scrollWidth - w.clientWidth });
  });
  return JSON.stringify(out);
})()`;

await send("Page.enable");
await send("Runtime.enable");
for (const w of widths) {
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: 900, deviceScaleFactor: 1, mobile: w < 600 });
  await send("Page.navigate", { url });
  await sleep(2500);
  const r = await send("Runtime.evaluate", { expression: probe, returnByValue: true });
  const o = JSON.parse(r.result.result.value);
  const bad = o.tables.filter((t) => t.over > 1);
  console.log(`vw ${o.vw}: main ${o.main.toFixed(0)}px, text ${o.content.toFixed(0)}px, font ${o.fontPx}px, page overflow ${o.pageOverflow}; ` +
    `${bad.length}/${o.tables.length} tables scroll`);
  for (const t of bad) console.log(`   table ${t.i} [${t.cap}] ${t.scroll} > ${t.client} (+${t.over})`);
  if (shot) {
    const s = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    writeFileSync(`${shot}-${w}.png`, Buffer.from(s.result.data, "base64"));
  }
}
ws.close();
proc.kill();

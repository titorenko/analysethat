/* Premium Bonds calculator: the exact distribution of total winnings, worked out in the reader's browser (section 1.3).

Same method as code/engine/pb.py. Every prize is a multiple of £25, so on a £25 grid one £1 bond in one draw has the
characteristic function φ(k) = 1 + Σ_j p_j (e^{-2πi v_j k/N} - 1), p_j = count_j / eligible bonds. B bonds held through
D draws of the same table win a total whose characteristic function is φ^(B·D), so one inverse FFT of exp(B·D·log φ)
gives every probability at once, with no simulation. N = 2^18 cells (£6.55m): ample for £100,000 over 240 draws.
Prizes are paid out (a fixed holding). code/checks/g_calc.py checks this file against the Python engine and against
the numbers the article prints. The page part (bottom) runs only in a browser; Node loads the engine with require().
*/
(function () {
  "use strict";
  const UNIT = 25, N = 1 << 18, HALF = N / 2;
  let trig = null;

  function tables() {                     // cos and sin of 2πm/N, m = 0..N-1, and the FFT's bit-reversal order
    if (!trig) {
      const c = new Float64Array(N), s = new Float64Array(N), rev = new Uint32Array(N);
      for (let m = 0; m < N; m++) {
        c[m] = Math.cos(2 * Math.PI * m / N);
        s[m] = Math.sin(2 * Math.PI * m / N);
      }
      for (let i = 1, j = 0; i < N; i++) {
        let bit = HALF;
        for (; j & bit; bit >>= 1) j ^= bit;
        rev[i] = (j ^= bit);
      }
      trig = { c, s, rev };
    }
    return trig;
  }

  function inverseFFT(re, im) {           // in place, unscaled: x[m] = Σ_k X[k] e^{+2πi mk/N}
    const { c, s, rev } = tables();
    for (let i = 1; i < N; i++) {
      const j = rev[i];
      if (i < j) {
        let t = re[i]; re[i] = re[j]; re[j] = t;
        t = im[i]; im[i] = im[j]; im[j] = t;
      }
    }
    for (let len = 2; len <= N; len <<= 1) {
      const h = len >> 1, step = N / len;
      for (let i = 0; i < N; i += len) {
        for (let k = 0; k < h; k++) {
          const wr = c[k * step], wi = s[k * step], a = i + k, b = a + h;
          const xr = re[b] * wr - im[b] * wi, xi = re[b] * wi + im[b] * wr;
          re[b] = re[a] - xr; im[b] = im[a] - xi;
          re[a] += xr; im[a] += xi;
        }
      }
    }
  }

  /* table: {eligible, prizes: [[value £, count], ...]} for one draw. Returns run(bonds, draws); each run reuses the
     engine's buffers, so read what you need from one result before the next run. */
  function engine(table) {
    const { c, s } = tables();
    const v = table.prizes.map(([value]) => value / UNIT);
    const p = table.prizes.map(([, count]) => count / table.eligible);
    const pAny = p.reduce((a, b) => a + b, 0);
    const meanPerBond = p.reduce((a, pj, j) => a + v[j] * UNIT * pj, 0);
    const Lr = new Float64Array(HALF + 1), Li = new Float64Array(HALF + 1);     // log φ(k), k = 0..N/2
    for (let k = 0; k <= HALF; k++) {
      let dr = 0, di = 0;
      for (let j = 0; j < v.length; j++) {
        const m = (v[j] * k) % N;
        dr += p[j] * (c[m] - 1);
        di -= p[j] * s[m];
      }
      Lr[k] = 0.5 * Math.log1p(2 * dr + dr * dr + di * di);
      Li[k] = Math.atan2(di, 1 + dr);
    }
    const re = new Float64Array(N), im = new Float64Array(N), cum = new Float64Array(N);

    return function run(bonds, draws) {
      const n = bonds * draws;
      for (let k = 0; k <= HALF; k++) {
        const mag = Math.exp(n * Lr[k]), ang = n * Li[k];
        re[k] = mag * Math.cos(ang);
        im[k] = mag * Math.sin(ang);
        if (k > 0 && k < HALF) { re[N - k] = re[k]; im[N - k] = -im[k]; }
      }
      im[0] = 0; im[HALF] = 0;
      inverseFFT(re, im);
      let acc = 0, gridMean = 0;
      for (let i = 0; i < N; i++) {
        const x = Math.max(0, re[i] / N);
        re[i] = x;
        acc += x;
        cum[i] = acc;
        gridMean += x * i * UNIT;
      }
      return {
        bonds, draws, pmf: re, cum, mass: acc, gridMean,
        mean: n * meanPerBond,
        pNothing: Math.exp(n * Math.log1p(-pAny)),                               // closed form, as pb.p_nothing
        quantile(q) {                                                            // as pb.quantile
          let lo = 0, hi = N - 1;
          while (lo < hi) { const mid = (lo + hi) >> 1; if (cum[mid] >= q - 1e-12) hi = mid; else lo = mid + 1; }
          return lo * UNIT;
        },
        pAtLeast(x) {                                                            // P(total ≥ £x), as pb.p_at_least
          let t = 0;
          for (let j = N - 1, i = Math.ceil(x / UNIT - 1e-9); j >= i; j--) t += re[j];
          return t;
        },
        pPrize(min) {                                         // P(at least one prize of £min or more), closed form
          const q = p.reduce((a, pj, j) => a + (v[j] * UNIT >= min ? pj : 0), 0);
          return -Math.expm1(n * Math.log1p(-q));
        },
      };
    };
  }

  // ---- formatting, as the article's (article_values.py): half up, after rounding to 10 places
  function rnd(x, d) {
    const y = Number(x.toFixed(10)), f = 10 ** d;
    return (Math.sign(y) * Math.round(Math.abs(y) * f + 1e-9) / f).toFixed(d);
  }
  const pct = (x, d = 1) => `${rnd(100 * x, d)}%`;
  const gbp = (x) => "£" + Math.round(x).toLocaleString("en-GB");
  function oneIn(p) {
    const n = Number((1 / p).toPrecision(2));
    if (n >= 1e9) return `1 in ${n / 1e9} billion`;
    if (n >= 1e6) return `1 in ${n / 1e6} million`;
    return `1 in ${n.toLocaleString("en-GB")}`;
  }

  const api = { engine, pct, gbp, oneIn, UNIT, N };
  if (typeof module === "object" && module.exports) module.exports = api;
  if (typeof document === "undefined") return;

  // ---------------------------------------------------------------------------------------------- the page
  const SVGNS = "http://www.w3.org/2000/svg";
  const PRESETS = [1_000, 10_000, 25_000, 50_000, 100_000];

  function el(tag, attrs = {}, text) {
    const e = tag.startsWith("svg:") ? document.createElementNS(SVGNS, tag.slice(4)) : document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (text !== undefined) e.textContent = text;
    return e;
  }
  const prob = (x) => x > 0.995 ? "over 99%" : x >= 0.1 ? pct(x, 0) : x >= 0.01 ? pct(x, 1)
    : x > 1e-12 ? oneIn(x) : "virtually none";
  const years = (d) => {
    const y = Math.round(d / 12 * 10) / 10;
    return d < 12 ? `${d} month${d === 1 ? "" : "s"}` : `${y} year${y === 1 ? "" : "s"}`;
  };
  const money = (x) => x < 1000 ? `£${x.toFixed(2)}` : gbp(x);                  // pence for small averages

  async function mount(box) {
    const table = await (await fetch(box.dataset.src)).json();
    const run = engine(table);
    box.append(el("p", { class: "pbc-kicker" }, `Calculator · ${table.draw_month} prize table every draw · prizes paid out`));

    const controls = el("div", { class: "pbc-controls" });
    const amountField = el("label", { class: "pbc-field" });
    const amount = el("input", { type: "number", min: 1, max: 100000, step: 1, value: 10000, inputmode: "numeric" });
    amountField.append(el("span", {}, "Amount held (£)"), amount);
    const drawsField = el("label", { class: "pbc-field" });
    const draws = el("input", { type: "range", min: 1, max: 240, step: 1, value: 12 });
    const drawsOut = el("output");
    const range = el("span", { class: "pbc-range" });
    range.append(draws, drawsOut);
    drawsField.append(el("span", {}, "Draws (months held)"), range);
    const presetField = el("div", { class: "pbc-field" });
    const presets = el("div", { class: "pbc-presets" });
    const buttons = PRESETS.map((a) => {
      const b = el("button", { type: "button", "aria-pressed": "false" }, a > 50_000 ? "£100k couple" : `£${a / 1000}k`);
      b.addEventListener("click", () => { amount.value = a; draws.value = 12; schedule(); });
      presets.append(b);
      return b;
    });
    presetField.append(el("span", {}, "One year of"), presets);
    controls.append(amountField, drawsField, presetField);

    const legend = el("p", { class: "pbc-legend" });
    legend.innerHTML = '<span class="sw bar"></span>chance of each total ' +
      '<span class="sw line"></span>unlucky (1 in 10), typical (thick) and lucky (1 in 10)';
    const chart = el("div", { class: "pbc-chart" });
    const tip = el("div", { class: "pbc-tip", hidden: "" });
    const tiles = el("div", { class: "pbc-tiles" });
    const note = el("p", { class: "pbc-note" });
    box.append(controls, legend, chart, tiles, note);

    let pending = false;
    function schedule() {
      if (!pending) { pending = true; requestAnimationFrame(() => { pending = false; update(); }); }
    }
    amount.addEventListener("input", schedule);
    draws.addEventListener("input", schedule);
    new ResizeObserver(() => last && draw(last)).observe(chart);

    let last = null;
    function update() {
      const a = Math.round(Number(amount.value)), d = Number(draws.value);
      drawsOut.textContent = `${d} (${years(d)})`;
      const ok = Number.isFinite(a) && a >= 1 && a <= 100_000;
      amount.setAttribute("aria-invalid", String(!ok));
      if (!ok) {
        tiles.replaceChildren();
        chart.replaceChildren();
        last = null;
        note.textContent = "Enter an amount from £1 to £100,000 (£50,000 each for a couple).";
        return;
      }
      buttons.forEach((b, i) => b.setAttribute("aria-pressed", String(PRESETS[i] === a && d === 12)));
      const t0 = performance.now();
      const r = run(a, d);
      const ms = performance.now() - t0;
      const yrs = d / 12, rate = (x) => `${pct(x / a / yrs)} a year`;
      const q10 = r.quantile(0.1), q50 = r.quantile(0.5), q90 = r.quantile(0.9);
      // the chart spans the 0.5th to the 99th percentile (from £0 unless that leaves most of it empty), in up to 80 bars
      const low = r.quantile(0.005), upper = Math.max(r.quantile(0.99), low + 10 * UNIT);
      const bin = UNIT * Math.ceil((upper - low) / UNIT / 80);
      const start = low > 0.25 * upper ? Math.floor(low / bin) * bin : 0, nb = Math.floor((upper - start) / bin) + 1;
      const bars = Array.from({ length: nb }, (_, i) => {
        const lo = (start + i * bin) / UNIT, hi = Math.min(N, lo + bin / UNIT);
        return { lo: lo * UNIT, hi: hi * UNIT - UNIT, p: r.cum[hi - 1] - (lo ? r.cum[lo - 1] : 0) };
      });
      const end = start + nb * bin, above = 1 - r.cum[end / UNIT - 1], below = start ? r.cum[start / UNIT - 1] : 0;
      last = { a, d, bars, bin, nb, start, q: [q10, q50, q90] };
      draw(last);
      tiles.replaceChildren(
        tile("Typical (median)", gbp(q50), rate(q50), true),
        tile("Unlucky – lucky (1 in 10 each)", `${gbp(q10)} – ${gbp(q90)}`, `${pct(q10 / a / yrs)} – ${rate(q90)}`),
        tile("Average", money(r.mean), `${pct(r.mean / a / yrs, 2)} a year, the prize fund rate`),
        tile("Win nothing at all", prob(r.pNothing)),
        tile("A prize of £5,000 or more", prob(r.pPrize(5_000))),
        tile("A £100,000 or £1 million prize", oneIn(r.pPrize(100_000))));            // as Table 2
      note.textContent = `${gbp(a)} for ${d} draw${d === 1 ? "" : "s"} is ${(a * d).toLocaleString("en-GB")} bond-draws` +
        (a > 50_000 ? " (two people: the limit is £50,000 each; their bonds are pooled)" : "") + ". " +
        (below > 1e-6 ? `Totals under ${gbp(start)}, off the chart, have a ${prob(below)} chance. ` : "") +
        (above > 1e-6 ? `Totals of ${gbp(end)} or more, off the chart, have a ${prob(above)} chance, mostly the big prizes. ` : "") +
        `Checks: the probabilities add up to ${r.mass.toFixed(10)}, and their average, ${money(r.gridMean)}, ` +
        `matches the exact average. Worked out in ${Math.max(1, Math.round(ms))} ms.`;
    }

    function tile(k, v, s, main) {
      const t = el("div", { class: main ? "pbc-tile pbc-main" : "pbc-tile" });
      t.append(el("div", { class: "k" }, k), el("div", { class: "v" }, v));
      if (s) t.append(el("div", { class: "s" }, s));
      return t;
    }

    function draw({ a, d, bars, bin, nb, start, q }) {
      const W = Math.max(280, chart.clientWidth), small = W < 480;
      const fs = 11, labels = [["unlucky", q[0]], ["typical", q[1]], ["lucky", q[2]]];
      const groups = [];                                         // equal values share one label
      for (const [name, val] of labels) {
        const g = groups.find((x) => x.val === val);
        if (g) g.names.push(name); else groups.push({ names: [name], val });
      }
      const L = 40, R = 8, B = 24, plotW = W - L - R;
      const xs = (t) => L + ((t - start) / (nb * bin)) * plotW;
      const xc = (t) => xs(start + Math.floor((t - start) / bin) * bin + bin / 2);
      const placed = [];
      for (const g of groups) {
        const text = `${g.names.join(", ")} ${gbp(g.val)}`, w = text.length * fs * 0.6, x = xc(g.val);
        let row = 0;
        while (placed.some((o) => o.row === row && Math.abs(o.x - x) < (o.w + w) / 2 + 6)) row++;
        placed.push({ x, w, row, text, val: g.val, median: g.names.includes("typical") });
      }
      const T = 8 + (Math.max(...placed.map((o) => o.row)) + 1) * 15, H = (small ? 190 : 230) + T, bot = H - B;
      const pmax = Math.max(...bars.map((b) => b.p));
      const steps = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.25, 0.5];
      const step = steps.find((s) => pmax / s <= 4) || 0.5, top = Math.max(step, Math.ceil(pmax / step - 1e-9) * step);
      const ys = (p) => bot - (p / top) * (bot - T);
      const svg = el("svg:svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, role: "img",
        "aria-label": `Chance of each total win on ${gbp(a)} over ${d} draws: typical ${gbp(q[1])}, ` +
          `unlucky ${gbp(q[0])}, lucky ${gbp(q[2])}.` });
      for (let p = 0; p <= top + 1e-12; p += step) {
        svg.append(el("svg:line", { class: "grid", x1: L, x2: W - R, y1: ys(p), y2: ys(p) }));
        svg.append(el("svg:text", { x: L - 6, y: ys(p) + 4, "text-anchor": "end" }, pct(p, step < 0.01 ? 1 : 0)));
      }
      const bw = plotW / nb, gap = bw > 3 ? 1 : 0;
      bars.forEach((b, i) => {
        if (b.p > 0) {
          const y = ys(b.p);
          svg.append(el("svg:rect", { class: "bar", x: xs(start + i * bin) + gap / 2, y, width: Math.max(0.5, bw - gap),
            height: Math.max(0, bot - y), "data-i": i }));
        }
      });
      const tickStep = [25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000]
        .find((s) => (nb * bin) / s <= (small ? 4 : 7)) || 100000;
      for (let t = Math.ceil(start / tickStep) * tickStep; t < start + nb * bin; t += tickStep) {
        svg.append(el("svg:text", { x: xc(t), y: bot + 16, "text-anchor": "middle" }, gbp(t)));
      }
      for (const o of placed) {
        const g = el("svg:g", { class: "q" });
        g.append(el("svg:line", { x1: o.x, x2: o.x, y1: 8 + o.row * 15 + 4, y2: bot, "stroke-width": o.median ? 2.5 : 1.2 }));
        g.append(el("svg:text", { x: o.x, y: 8 + o.row * 15, "text-anchor": "middle", class: "halo" }, o.text));
        svg.append(g);
      }
      const hit = el("svg:rect", { x: L, y: T, width: plotW, height: bot - T, fill: "transparent" });
      svg.append(hit);
      let on = null;
      const show = (ev) => {
        const box = svg.getBoundingClientRect(), x = (ev.clientX - box.left) * (W / box.width);
        const i = Math.min(nb - 1, Math.max(0, Math.floor((x - L) / bw))), b = bars[i];
        if (on) on.classList.remove("on");
        on = svg.querySelector(`rect.bar[data-i="${i}"]`);
        if (on) on.classList.add("on");
        tip.hidden = false;
        tip.textContent = `${b.lo === b.hi ? gbp(b.lo) : `${gbp(b.lo)} to ${gbp(b.hi)}`}: ${b.p > 0 ? prob(b.p) : "none"}`;
        tip.style.left = `${(xs(start + i * bin) + bw / 2) * (box.width / W)}px`;
        tip.style.top = `${ys(Math.max(b.p, 0)) * (box.height / H) - 6}px`;
      };
      hit.addEventListener("pointermove", show);
      hit.addEventListener("pointerdown", show);
      hit.addEventListener("pointerleave", () => { tip.hidden = true; if (on) on.classList.remove("on"); });
      chart.replaceChildren(svg, tip);
    }

    update();
  }

  const start = () => document.querySelectorAll(".pb-calc[data-src]").forEach((b) => mount(b).catch((e) => {
    b.append(el("p", { class: "pbc-note" }, "The calculator could not load its prize table."));
    console.error(e);
  }));
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

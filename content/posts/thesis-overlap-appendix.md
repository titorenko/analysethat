---
title: "Appendix: Matched Sentence Pairs - Arday (2015) vs Zwozdiak-Myers (2009)"
description: "185 deduplicated matched sentence pairs in three similarity bands, with cosine, Jaccard and identical-run statistics."
date: 2026-07-24
url: /posts/thesis-overlap-analysis/appendix/
aliases: [/posts/thesis-overlap-appendix/]
build:
  render: always
  list: never
ShowToc: true
ShowReadingTime: false
---
[Back to the analysis]({{< relref "posts/thesis-overlap-analysis/index.md" >}})

Model: sentence-transformers/all-MiniLM-L6-v2 (384-d, cosine on L2-normalised embeddings).
Corpus: 4,259 vs 2,605 sentences after removing front matter, TOC and bibliographies.
11.09M cross-document pairs. Pairs below greedy-deduplicated (each sentence used once).

Columns: cos = cosine similarity; jac = Jaccard on content words; run = longest run of identical consecutive words; Q/C = quoted / carries a citation in Arday.

## BAND 1 - near-verbatim (jac >= 0.80)
n = 32

### 1. cos=1.0000  jac=1.00  [--]
**Arday 2015:** Replication in other subject areas can also add validity to these findings.

**Zwozdiak-Myers 2009:** Replication in other subject areas can also add validity to these findings.

### 2. cos=1.0000  jac=1.00  [-C]
**Arday 2015:** However, an exploration of conceptual and theoretical underpinnings of these terms reveals a number of variations (Calderhead, 1989; Furlong and Maynard, 1995).

**Zwozdiak-Myers 2009:** However, an exploration of conceptual and theoretical underpinnings of these terms reveals a number of variations (Calderhead, 1989; Furlong and Maynard, 1995).

### 3. cos=1.0000  jac=1.00  [--]
**Arday 2015:** This implies that working with peers and fellow practitioners requires sensitivity, trust and a mutual respect for the feelings and expertise of others.

**Zwozdiak-Myers 2009:** This implies that working with peers and fellow practitioners requires sensitivity, trust and a mutual respect for the feelings and expertise of others.

### 4. cos=1.0000  jac=1.00  [--]
**Arday 2015:** A larger sample is suggested so that findings can be generalised.

**Zwozdiak-Myers 2009:** A larger sample is suggested so that findings can be generalised.

### 5. cos=1.0000  jac=1.00  [--]
**Arday 2015:** Student teachers can draw on knowledge from a range of sources as they seek to improve their teaching.

**Zwozdiak-Myers 2009:** Student teachers can draw on knowledge from a range of sources as they seek to improve their teaching.

### 6. cos=1.0000  jac=1.00  [--]
**Arday 2015:** These research findings and their implications are discussed in the next chapter.

**Zwozdiak-Myers 2009:** These research findings and their implications are discussed in the next chapter.

### 7. cos=1.0000  jac=1.00  [--]
**Arday 2015:** A shared understanding and cooperation between universities and schools is necessary for supporting the professional development of student teachers.

**Zwozdiak-Myers 2009:** A shared understanding and cooperation between universities and schools is necessary for supporting the professional development of student teachers.

### 8. cos=1.0000  jac=1.00  [--]
**Arday 2015:** Boud (1999: 125) recognised that the emphasis placed on the need for personal disclosure in discussion forums was often found to be beyond the capacity of some student teachers.

**Zwozdiak-Myers 2009:** Boud (1999: 125) recognised that the emphasis placed on the need for personal disclosure in discussion forums was often found to be beyond the capacity of some student teachers.

### 9. cos=0.9995  jac=1.00  [--]
**Arday 2015:** In this way, student teachers ground theory in their own teaching and build a repertoire of exemplars, images and metaphors that they draw upon to frame each unique teaching situation (Schon 1983, 1987).

**Zwozdiak-Myers 2009:** In this way, student teachers ground theory in their own teaching and build a repertoire of exemplars, images and metaphors they draw upon to frame each unique teaching situation (Schon 1983, 1987).

### 10. cos=0.9968  jac=1.00  [--]
**Arday 2015:** The present chapter provides an overview for the rationale and professional landscape that has guided the direction and purpose of this study.

**Zwozdiak-Myers 2009:** The present chapter provides an overview of the rationale and professional landscape that have guided the direction and purpose of this study.

### 11. cos=0.9955  jac=0.95  [--]
**Arday 2015:** When reflective practice is characterised as a discourse, it becomes evident through the way student teachers use language and frame questions about aspects of their teaching and experience that different kinds of reflection on practice can be identified (Ghaye, 2011).

**Zwozdiak-Myers 2009:** When reflective practice is characterised as a discourse, it becomes evident through the way student teachers use language and frame questions about aspects of their teaching and experience, that different kinds of reflection on practice can be identified.

### 12. cos=0.9943  jac=1.00  [--]
**Arday 2015:** Thus, an important characteristic of the reflective conversation is making sense of specific situations.

**Zwozdiak-Myers 2009:** Thus, an important characteristic of the reflective conversation is that making sense of specific situations.

### 13. cos=0.9925  jac=0.88  [--]
**Arday 2015:** Reflective practice has been defined as: a disposition to enquiry incorporating the process through which student teachers or practitioner's structure or restructure actions, knowledge, theories or beliefs that inform teaching for the purpose of personal professional development (Zwozdiak-Myers, 2012).

**Zwozdiak-Myers 2009:** Reflective practice has been defined as: a disposition to enquiry incorporating the process through which student teachers structure or restructure actions, knowledge, theories or beliefs that inform teaching for the purpose of personal professional development.

### 14. cos=0.9923  jac=0.81  [--]
**Arday 2015:** Student teachers are unique individuals and differ in their personal biographies and prior experiences, disposition to enquiry, cognitive and perceptive abilities, communication, interpersonal skills, adaptability, values and belief systems.

**Zwozdiak-Myers 2009:** Student teachers are unique individuals and differ in their personal biographies and prior experiences, disposition to enquiry, cognitive and perceptive abilities, communication and interpersonal skills, emotional intelligence and sensitivity, adaptability and flexibility, personal theories, values and belief systems.

### 15. cos=0.9890  jac=1.00  [-C]
**Arday 2015:** An issue, which has arisen from Dewey's conceptualisation of reflective action and its subsequent interpretation within initial teacher education concerns whether reflection is limited to thought processes about action, or is more inextricably bound within an action (Noffke and Brennan, 1988; Noffke and Zeichner, 1987; Grant and Zeichner, 1984).

**Zwozdiak-Myers 2009:** An issue, which has arisen from Dewey‟s conceptualisation of reflective action and its subsequent interpretation within initial teacher education concerns whether reflection is limited to thought processes about action, or is more inextricably bound within an action (Noffke and Brennan, 1988; Grant and Zeichner, 1984).

### 16. cos=0.9888  jac=0.89  [--]
**Arday 2015:** These findings could be useful for comparative purposes in relation to assessing the outcomes of this research study.

**Zwozdiak-Myers 2009:** These findings could be useful for comparative purposes in relation to the outcomes of this research study.

### 17. cos=0.9869  jac=0.93  [--]
**Arday 2015:** The student teachers' believed that pupil learning and development was attributable to their personal improvement in five main areas: greater understanding, insight and awareness about the principles and procedures of pedagogy; thinking more about aspects of teaching and their enhanced knowledge of pupil difference and diversity.

**Zwozdiak-Myers 2009:** Student teachers believed that pupil learning and development was attributable to their personal improvement in three main areas: greater understanding, insight and awareness about the principles and procedures of pedagogy; thinking more about aspects of teaching and their enhanced knowledge of pupil difference and diversity.

### 18. cos=0.9857  jac=0.86  [Q-]
**Arday 2015:** McKernan (1996: 29) refers to action research as grounded curriculum theory in that theories are not validated independently of practice and then applied to curriculum, they are validated 'through experimental learning and practice'.

**Zwozdiak-Myers 2009:** McKernan (1996: 29) refers to action research as grounded curriculum theory in that „theories are not validated independently of practice and then applied to curriculum...they are validated through practice‟.

### 19. cos=0.9837  jac=0.87  [--]
**Arday 2015:** Decisions that navigate the selection of research methodology, Bell (2010) argues are dependent upon the nature of the enquiry and kind of information sought.

**Zwozdiak-Myers 2009:** Decisions that guide the selection of research methodology, Bell (2005) argues, are dependent upon the nature of the enquiry and kind of information sought.

### 20. cos=0.9828  jac=0.90  [--]
**Arday 2015:** Habermas' model suggests reflective practice is hierarchical, that knowledge must initially be developed by instrumental or interpretive means before a critical overview of that knowledge or processes that have led to its configuration are possible.

**Zwozdiak-Myers 2009:** Habermas‟ model suggests reflective practice is hierarchical, that knowledge must initially be developed by instrumental or interpretive means before a critical overview of that knowledge or processes that have led to its generation are possible.

### 21. cos=0.9791  jac=0.90  [--]
**Arday 2015:** The main research findings of this study are drawn together in a brief summary, which concludes the chapter.

**Zwozdiak-Myers 2009:** The main research findings of this study are drawn together in a summary, which concludes the chapter.

### 22. cos=0.9776  jac=1.00  [--]
**Arday 2015:** Evidence gathered to inform this study relied upon the research participants' understanding of what information was being asked of them.

**Zwozdiak-Myers 2009:** Evidence gathered to inform this study relied upon the research participants‟ understanding of what information was being asked of them.

### 23. cos=0.9774  jac=0.82  [--]
**Arday 2015:** Barnett applies, interprets and further develops ideas proposed by Habermas regarding emancipatory interests and those associated with critical theory, within the confines of higher education.

**Zwozdiak-Myers 2009:** Barnett applies, interprets and further develops ideas proposed by Habermas of the emancipatory interests and those associated with critical theory to the context of higher education.

### 24. cos=0.9766  jac=1.00  [Q-]
**Arday 2015:** The typology devised by Ghaye and Ghaye (1998: 34) recognises useful qualitative distinctions, which can be drawn between reflective conversations:  Descriptive reflection on practice - is personal and retrospective;  Perceptive reflection on practice - links teaching to feelings;  Receptive reflection on practice - relates personal views to others' views;  Interactive reflection on practice - links learning with future action;  Critical reflection on practice - places individual teaching within a broader 'system'.

**Zwozdiak-Myers 2009:** The typology devised by Ghaye and Ghaye (1998: 34) recognises useful qualitative distinctions, which can be drawn between reflective conversations: Descriptive reflection on practice - is personal and retrospective Perceptive reflection on practice - links teaching to feelings Receptive reflection on practice - relates personal views to others‟ views Interactive reflection on practice - links learning with future action Critical reflection on practice - places individual teaching within a broader „system‟.

### 25. cos=0.9735  jac=0.88  [-C]
**Arday 2015:** It has also been associated with professional accountability (Eraut, 1994), professional development (Day, 1999; Hoyle and John, 1995; Lave and Wenger, 1991) and identified as a key attribute of extended professionals (Stenhouse, 1975).

**Zwozdiak-Myers 2009:** It has also been associated with accountability (Eraut, 1994), professional development (Day, 1999; Hoyle and John, 1995) and identified as a key attribute of extended professionals (Stenhouse, 1975).

### 26. cos=0.9725  jac=0.95  [Q-]
**Arday 2015:** Bernstein (1976: 192) claims the knowledge and constitutive interests reflect Habermas' attempt to go beyond epistemology, in attempting to develop a philosophical anthropology that 'singles out the distinctive characteristics of human social life'.

**Zwozdiak-Myers 2009:** Bernstein (1976: 192) claims the knowledge constitutive interests reflect Habermas‟ attempt to go beyond epistemology, to develop a philosophical anthropology „that singles out the distinctive characteristics of human social life‟.

### 27. cos=0.9695  jac=0.81  [-C]
**Arday 2015:** Within educational discourse, action research has become a recurrent theme, as has the concern to improve and develop professional practice from within the teaching profession (McNiff et al., 2003; Pollard, 2011).

**Zwozdiak-Myers 2009:** Within educational discourse, action research has become a recurrent theme, as has the concern to improve and develop professional practice from within the profession.

### 28. cos=0.9692  jac=0.80  [--]
**Arday 2015:** Van Manen's level of practical reflection is characterised by the process of analysing and clarifying assumptions, experiences, goals, meanings and perceptions which underpin practical actions through dialectical, contextual and technical components.

**Zwozdiak-Myers 2009:** Van Manen‟s level of practical reflection is characterised by the process of analysing and clarifying assumptions, experiences, goals, meanings and perceptions which underpin practical actions.

### 29. cos=0.9660  jac=1.00  [--]
**Arday 2015:** Tinning (1995: 27) draws a parallel between Van Manen's interpretation of technical reflection and the first level of reflective teaching identified by Grimmett et al., (1990), which applies research findings to practice and essentially represents thoughtfulness about action.

**Zwozdiak-Myers 2009:** Tinning (1995: 27) draws a parallel between van Manen‟s interpretation of technical reflection and the first level of reflective teaching identified by Grimmett et al. (1990), which applies research findings to practice and „essentially represents thoughtfulness about action‟.

### 30. cos=0.9654  jac=0.89  [Q-]
**Arday 2015:** Zeichner and Liston (1996) posit that very clear links can be drawn between reflective practice and assuming responsibility for professional development: 'When embracing the concept of reflective teaching, there is often a commitment by teachers to internalise the disposition and skills to study their teaching and become better at teaching over time, a commitment to take responsibility for their own professional development.

**Zwozdiak-Myers 2009:** Very clear links can be drawn between reflective practice and assuming responsibility for professional development: When embracing the concept of reflective teaching, there is often a commitment by teachers to internalise the disposition and skills to study their teaching and become better at teaching over time, a commitment to take responsibility for their own professional development.

### 31. cos=0.9529  jac=0.87  [--]
**Arday 2015:** Thus, possible ways in which school-based and university staff can be included or involved within the action research experience of student teachers could be further explored.

**Zwozdiak-Myers 2009:** Thus, possible ways in which school-based staff can be more involved in the action research experience of student teachers could be explored.

### 32. cos=0.9506  jac=1.00  [--]
**Arday 2015:** Some findings however, which emerged from the student teachers' perceptions raise several anomalies.

**Zwozdiak-Myers 2009:** Some findings however, which emerged from the student teachers‟ perceptions raise several anomalies.

## BAND 2 - lexically altered, semantically near-identical (0.35 <= jac < 0.80)
n = 114

### 1. cos=0.9915  jac=0.78  [--]
**Arday 2015:** The paucity of substantive research studies in initial teacher education and the diverse nature of those studies that have been undertaken to examine the development of student teachers' reflective practice, particularly within physical education initial teacher education, make specific comparisons and contrasting to previous research studies difficult.

**Zwozdiak-Myers 2009:** The paucity of substantive research studies in initial teacher education and the diverse nature of those studies that have been undertaken to examine the development of student teachers‟ reflective practice, particularly within physical education initial teacher education, make direct comparison and contrast to previous research studies difficult.

### 2. cos=0.9861  jac=0.77  [--]
**Arday 2015:** Similarly, MacDonald and Brooker (1999: 59) perceived potential barriers in student teachers' uneasiness in working with the personal.

**Zwozdiak-Myers 2009:** In a similar vein, Macdonald and Brooker (1999: 59) perceived potential barriers in student teachers‟ uneasiness in working with the personal.

### 3. cos=0.9856  jac=0.72  [-C]
**Arday 2015:** However, research studies (Kensington-Miller, 2011; Le Cornu, 2005; Zwozdiak-Myers, 2009) highlighting qualitative distinctions in student teachers' reflective practice have shown critical reflective conversations are far less frequent than descriptive reflective conversations, as their principle concern focuses on the development of subject matter knowledge and pedagogical content knowledge (Hatton and Smith, 1995; Macdonald and Brooker, 1999; Tsangaridou, 2005).

**Zwozdiak-Myers 2009:** However, research studies highlighting qualitative distinctions in student teachers‟ reflective practice have shown critical reflective conversations are far less frequent than descriptive reflective conversations, as their principle concerns focus on the development of subject matter knowledge and pedagogical content knowledge (Hatton and Smith, 1995; Macdonald and Brooker, 1999; Tsangaridou, 2005) (see section 2.10).

### 4. cos=0.9838  jac=0.71  [--]
**Arday 2015:** This research has therefore attempted to contribute to the research currently available in educational literature, which focuses on the impact strategies used to develop reflective practice in student teachers, to inform professional development and pedagogical practice.

**Zwozdiak-Myers 2009:** This research has therefore sought to add to the research currently available in educational literature, which focuses on the impact strategies used to develop reflective practice in student teachers, can make to their professional development.

### 5. cos=0.9803  jac=0.67  [--]
**Arday 2015:** A significant challenge associated with qualitative research studies is that of interpretation.

**Zwozdiak-Myers 2009:** One major challenge associated with qualitative research studies is that of interpretation.

### 6. cos=0.9796  jac=0.74  [--]
**Arday 2015:** Themes common to Dewey and Habermas' conceptualisation of reflective practice are their subjective interpretations relating to the process of reflection, which serves to develop, generate and acquire new knowledge.

**Zwozdiak-Myers 2009:** Themes common to Dewey and Habermas‟ conceptualisation of reflective practice are their interpretations of reflection as a process, which serves both to develop and generate knowledge.

### 7. cos=0.9712  jac=0.70  [--]
**Arday 2015:** Barnett (1997) argues the predominant discourse concerning knowledge and the ill-defined concept of critical thinking, which has been a strong feature in past decades of Western universities, will not support the climate and trends within higher education and more specifically teacher training.

**Zwozdiak-Myers 2009:** Barnett (1997) argues the predominant focus on discourse about knowledge and the illdefined concept of critical thinking, which has been a strong feature in past decades of Western universities, will not support the climate and trends within higher education.

### 8. cos=0.9708  jac=0.60  [--]
**Arday 2015:** The interrelationship between the concepts of professional development proposed by Hoyle and John, of knowledge, autonomy and responsibility have been summarised by Furlong et al (2000: 5), who indicated that due to professionals facing complex and unpredictable situations they require a specialised form of knowledge.

**Zwozdiak-Myers 2009:** The interrelationship between the concepts of professional development proposed by Hoyle and John, of knowledge, autonomy and responsibility have been summarised by Furlong et al (2000: 5): It is because professionals face complex and unpredictable situations that they need a specialised form of knowledge; if they are to apply that knowledge, it is argued that they need the autonomy to make their own judgements.

### 9. cos=0.9666  jac=0.50  [--]
**Arday 2015:** Kolb (1984) explicitly associates reflective practice to his conception and theoretical paradigm of experiential learning, which advocates a four-stage cycle of learning underpinned by four distinct cycles of learning.

**Zwozdiak-Myers 2009:** Kolb (1984) explicitly links reflective practice to his theory of experiential learning, which sets out a 4-stage cycle of learning underpinned by four distinct learning styles.

### 10. cos=0.9654  jac=0.71  [Q-]
**Arday 2015:** Yin (2003: 13) conceptualises the case study as an empirical study, which broadly speaking is used to investigate 'contemporary phenomenon within its real-life context, especially when the boundaries between phenomenon's and context are not clearly and entirely evident'.

**Zwozdiak-Myers 2009:** Yin (2003: 13) in part, defines a case study as an empirical study used to investigate „contemporary phenomenon within its real-life context, especially when the boundaries between phenomenon and context are not clearly evident‟.

### 11. cos=0.9652  jac=0.57  [--]
**Arday 2015:** Further components within the Standards encompass both theoretical and experiential knowledge, in addition with professional values and commitments which draw parallels with accountability in developing professionally as identified by Eraut.

**Zwozdiak-Myers 2009:** Further components within the Standards encompass both theoretical and experiential knowledge along with professional values and commitments which closely parallel elements of accountability in professional development identified by Eraut.

### 12. cos=0.9638  jac=0.69  [--]
**Arday 2015:** Habermas' discourse suggests reflective student teachers are those that stimulate or cultivate particular forms of knowledge.

**Zwozdiak-Myers 2009:** Habermas‟ discourse suggests reflective student teachers are those who generate or develop particular forms of knowledge.

### 13. cos=0.9622  jac=0.72  [--]
**Arday 2015:** It could be argued that the action research experience that the student teachers' engaged in provided these participant's with an invaluable point of departure and means through which this intention might be realised in future teaching experiences.

**Zwozdiak-Myers 2009:** It could be argued that the action research experience provided these student teachers with an invaluable point of departure and means through which this intention might be realised.

### 14. cos=0.9604  jac=0.69  [--]
**Arday 2015:** One study in particular undertaken by Price (2001) has examined the experiences of eleven student teachers enrolled within an action research course on a Master's level programme, to explore ways in which connections could be drawn between research, pedagogy and change.

**Zwozdiak-Myers 2009:** In one study, however, Price (2001) examined the experiences of 11 student teachers enrolled in an action research course on a Master‟s level programme, to identify ways in which they made connections between research, pedagogy and change.

### 15. cos=0.9577  jac=0.71  [--]
**Arday 2015:** Furthermore, McTaggert et al., (1997) found action research, to be considered a difficult process for teachers to learn and sustain due to its complexity and lack of congruence with the chaotic nature of the classroom experience.

**Zwozdiak-Myers 2009:** Also, McTaggert et al, (1997) found action research was a difficult process for teachers to learn and sustain due to its complexity and lack of congruence with the hectic nature of life in the classroom.

### 16. cos=0.9576  jac=0.79  [--]
**Arday 2015:** Conversely, this discourse suggests that some student teachers' school-based teaching experiences could be incongruent, as values expressed in principle might not necessarily be demonstrated in practice (Zwokziak-Myers, 2009).

**Zwozdiak-Myers 2009:** This counter discourse suggests that some student teachers‟ school-based teaching experiences could be incongruent, as values expressed in principle might not necessarily be demonstrated in practice.

### 17. cos=0.9541  jac=0.50  [--]
**Arday 2015:** Moon (1999: 14) argues that the acquisition of knowledge which accommodates emancipatory interests aim to produce transformations in individual behaviour, through personal, social or world constructions of reality.

**Zwozdiak-Myers 2009:** Moon (1999: 14) argues that the acquisition of knowledge which accommodates emancipatory interests aim to bring about a „transformation in the self, or in the personal, social or world situation or any combination of these‟.

### 18. cos=0.9541  jac=0.71  [Q-]
**Arday 2015:** Synonymous with Calderhead's (1989: 43) disposition it has become evident that conceptions of reflective practice very often encompass 'some notion of reflection in the process of professional development, but at the same time, disguise a vast number of conceptual variations, with a range of implications for the organisation and design of teacher education courses'.

**Zwozdiak-Myers 2009:** In line with Calderhead‟s (1989: 43) argument it has become apparent that interpretations of reflective practice all encompass „some notion of reflection in the process of professional development, but at the same time, disguise a vast number of conceptual variations, with a range of implications for the organisation and design of teacher education courses‟.

### 19. cos=0.9539  jac=0.68  [--]
**Arday 2015:** However, Macdonald and Tinning (2003) suggest this proposition represents a claim for what Carr and Kemmis (1986) believe critical reflection should be rather than an assertion for how this transpires within a practical context.

**Zwozdiak-Myers 2009:** However, Macdonald and Tinning (2003) suggest this proposition represents a claim for what Carr and Kemmis (1986) believe critical reflection should be rather than a claim for how it is translated in practice.

### 20. cos=0.9526  jac=0.42  [--]
**Arday 2015:** Dewey (1910, 1933) expands this consideration and positions accountability within his conceptualisation of reflective thinking which encourages student teachers' to consider the pedagogical aspects of their teaching and their school practices, as they query various educational constructs and relationships.

**Zwozdiak-Myers 2009:** Dewey (1910, 1933) extends this interpretation and positions responsibility within his conceptualisation of reflective thinking which can be realised when student teachers‟ consider the consequences of their teaching and school practices and question what is worthwhile in the educational relationships they develop with their pupils.

### 21. cos=0.9522  jac=0.77  [--]
**Arday 2015:** They contend that when student teachers engage in reflective practice, they should probe and explore the following dispositions and questions:  What was the context?

**Zwozdiak-Myers 2009:** They recommend that when student teachers‟ engage in reflective practice, they should probe and explore the following questions: What was the context?

### 22. cos=0.9522  jac=0.58  [--]
**Arday 2015:** Within this study, the student teachers' accountability for maintaining Standards in schools is explicitly stated in terms of the required expectation to satisfy such protocols, in gaining the award of QTS, by demonstrating the enhancement of pupil learning and professional capabilities.

**Zwozdiak-Myers 2009:** In this study, the student teachers‟ accountability for Standards in schools is explicitly stated in terms of the expectation that those awarded QTS are capable of demonstrating the enhancement of pupil learning and development.

### 23. cos=0.9515  jac=0.59  [--]
**Arday 2015:** From an ontological perspective, Grimmett et al, (1990: 30) consider self-reflection to be concerned with ways of being in the world, where human beings acquire an understanding of themselves through self-reflection, with experience being the stimulus for developing understanding.

**Zwozdiak-Myers 2009:** As an ontological phenomenon, Grimmett et al, (1990: 29-30) consider self-reflection: is concerned with ways of being in the world...human beings acquire an understanding of themselves through self-reflection, and it is only through life that one can understand life.

### 24. cos=0.9509  jac=0.74  [--]
**Arday 2015:** Although the fundamental mode of enquiry for the social sciences is interpretation, Habermas suggests this process, requires a critical form of evaluation and enquiry.

**Zwozdiak-Myers 2009:** Although the fundamental mode of enquiry for the social sciences is interpretation, Habermas suggests this process, in and of itself, requires a critical form of evaluation and enquiry so as to scrutinize how and from which viewpoints interpretations have arisen.

### 25. cos=0.9504  jac=0.62  [--]
**Arday 2015:** Although action research has been recognised as a means to develop reflective practice and promote educational change, there still remains a dearth of literature regarding the influence of such practice within student-teacher education (Hickson, 2012).

**Zwozdiak-Myers 2009:** Although action research has been recognised as a means to develop reflective practice and promote educational change, few studies have examined its influence in student teacher education.

### 26. cos=0.9501  jac=0.76  [--]
**Arday 2015:** Importantly, the purpose of this chapter is to examine the key characteristics that practitioners, theorists, commentators and researchers within education and initial teacher education align with reflective practice.

**Zwozdiak-Myers 2009:** The purpose of this chapter is to examine what key characteristics theorists, practitioners and researchers within education and initial teacher education associate with reflective practice.

### 27. cos=0.9496  jac=0.71  [QC]
**Arday 2015:** Professional knowledge and judgement can be developed through reflection and further knowledge acquisition, while critical reflection supported by practitioner engagement in research can provide a catalyst for measuring the quality of teaching and learning within the classroom, which can be 'evaluated and contextualised as a prelude to further improvement' (Bartlett and Burton, 2012; Bartlett and Leask, 2005: 298).

**Zwozdiak-Myers 2009:** Professional knowledge and judgement can be developed through reflection and further development, while critical reflection supported by practitioner research can provide the „means by which the quality of teaching and learning in the classroom can be evaluated as a prelude to improvement‟ (Bartlett and Leask, 2005: 298).

### 28. cos=0.9454  jac=0.44  [--]
**Arday 2015:** The basis for becoming a reflective practitioner is not focused solely on the acquisition or development of a set of prescribed skills and areas of knowledge required for successful teaching, but rather the particular skills set essential for reflecting constructively upon continuous daily experiences as a way of developing teaching proficiency and effectiveness (Pollard, 2011).

**Zwozdiak-Myers 2009:** Becoming a reflective practitioner is not so much about the acquisition or development per se of the skills and areas of knowledge required for successful teaching, but rather concerns „the particular skills needed to reflect constructively upon ongoing experience as a way of developing those skills and knowledge and improving the effectiveness of one‟s work‟ (Moore, 2000: 128).

### 29. cos=0.9450  jac=0.61  [--]
**Arday 2015:** The importance attributed to such approaches, distinguishes a balanced focus on wanting, feeling, thinking, and doing, and differs from contrasting views of reflective practice, which accentuate rational analysis (Dewey, 1910, 1933).

**Zwozdiak-Myers 2009:** The importance placed on this approach, marked by a balanced focus on wanting, feeling, thinking, and doing, distinguishes it from other views of reflective practice, which emphasise rational analysis (Dewey, 1910, 1933).

### 30. cos=0.9441  jac=0.67  [--]
**Arday 2015:** 1.6 Structure of the thesis The thesis is divided into seven chapters.

**Zwozdiak-Myers 2009:** 1.4 Structure of the thesis This thesis is divided into six chapters.

### 31. cos=0.9425  jac=0.65  [QC]
**Arday 2015:** Specifically, a pertinent concern is the inability of Habermas' to demonstrate how theoretical critiques of powerful ideological forces, have distorted and suppressed 'practical reasoning (phronesis) within societal institutions, with regards to justifying social and political action on the part of the enlightened' (Elliott, 2005: 361).

**Zwozdiak-Myers 2009:** Of major concern was Habermas‟ inability to show „how a theoretical critique of the powerful ideological forces that have distorted and suppressed practical reasoning (phronesis) in our institutions can provide reasons for justifying social and political action on the part of the enlightened‟ (Elliott, 2005: 361).

### 32. cos=0.9417  jac=0.45  [--]
**Arday 2015:** To be self-reflective within this context is to be attentive to the relationship between theories and practice (praxis) (Pollard, 2011).

**Zwozdiak-Myers 2009:** To be self-reflective in this sense is to be attentive to the relationship between theory and practice.

### 33. cos=0.9414  jac=0.59  [--]
**Arday 2015:** This conception resonates with Schon's (1983, 1987) discourse about developing a personal epistemology of professional practice guided by theories-in-use.

**Zwozdiak-Myers 2009:** These views clearly have resonance with Schon‟s (1983, 1987) discourse about developing a personal epistemology of professional practice guided by theories in use (see section 2.7).

### 34. cos=0.9413  jac=0.73  [-C]
**Arday 2015:** From this premise, it could be argued that reflective conversations, which value student teachers' lived experiences, authentic concerns, beliefs and practical theories have potential to empower and enlighten aspects of professional dialogue should such endeavour be nurtured and encouraged (Kemmis, 1985; Zwozdiak-Myers, 2009).

**Zwozdiak-Myers 2009:** From this premise, it could be argued that reflective conversations, which value student teachers‟ lived experiences, authentic concerns, beliefs and practical theories have potential to empower and enlighten them and should be nurtured and encouraged.

### 35. cos=0.9411  jac=0.66  [--]
**Arday 2015:** 1.2 Purpose of the thesis Although a number of pre-requisites and standards serve to identify the knowledge, skills and understanding student teachers must obtain to satisfy the programme of study they are enrolled on, to achieve the award of QTS, this cannot be applied in a purely prescriptive and clinical manner to guide teaching development and practice.

**Zwozdiak-Myers 2009:** 1.3 Purpose of the thesis Although a number of Standards serve to identify the knowledge, skills and understanding student teachers must acquire and develop in their own teaching to achieve the award of QTS, these cannot be applied in a purely prescriptive manner to guide practice.

### 36. cos=0.9387  jac=0.48  [--]
**Arday 2015:** Their interpretation of critical reflection resonates with the position advanced by Moon (1999) with regards to attempting to assist the emancipatory interests of individuals by transforming aspects of educational teaching practice.

**Zwozdiak-Myers 2009:** Their interpretation of critical reflection has synergy with that advanced by Moon (1999) in terms of seeking to serve the emancipatory interests of people by transforming aspects of educational practice.

### 37. cos=0.9380  jac=0.40  [--]
**Arday 2015:** To this end, providing student teachers with an opportunity to engage in contextually focused research activity which enables them progressively to become more effective teaching practitioners and pedagogues in being able to accurately assess a situation, select appropriate courses of action, implement a plan of action and professionally develop through reflecting upon practice.

**Zwozdiak-Myers 2009:** Providing student teachers with opportunities to engage in contextually focused research activity should enable them progressively to become more effective in accurately assessing a situation, selecting an appropriate course of action, implementing the plan of action and evaluating the outcome to inform future practice.

### 38. cos=0.9375  jac=0.55  [--]
**Arday 2015:** Price (2001: 44) suggests action research is simultaneously an individual and collaborative project and Kemmis and McTaggart (1982) argue that such engagement allows groups of people to organise the conditions under which they construct learning from their own experiences, and in turn, disseminate these findings to others immersed within this context.

**Zwozdiak-Myers 2009:** Price (2001: 44) suggests action research is simultaneously an individual and collaborative project and Kemmis and McTaggart (1982; 7) argue that „groups of people can organise the conditions under which they can learn from their own experience, and make this experience accessible to others‟.

### 39. cos=0.9374  jac=0.54  [--]
**Arday 2015:** He identifies action, self-reflection and understanding, as three key factors that higher education providers need to focus on, with considerations posited towards enabling student teachers in attempting to make them capable of both critical self-reflection and critical action.

**Zwozdiak-Myers 2009:** He identifies action, self-reflection and understanding, as three key domains that higher education needs to focus on and considers that empowered student teachers to be capable of both critical self-reflection and critical action.

### 40. cos=0.9351  jac=0.52  [--]
**Arday 2015:** Reflective practice, within the confines of this study, has been defined as a disposition to enquiry incorporating the process through which student teachers' structure, or restructure actions informed by their experiences within teaching (Zwozdiak-Myers, 2009).

**Zwozdiak-Myers 2009:** In this study, reflective practice has been defined as: a disposition to enquiry incorporating the process through which student teachers‟ structure or restructure actions, knowledge, theories or beliefs that inform teaching for the purpose of personal professional development.

### 41. cos=0.9331  jac=0.36  [-C]
**Arday 2015:** Thus, aspects of reflective practice have invariably been linked to action research (Pollard, 2002; Reason and Bradbury, 2001), which resists the application of standardised practices within professional contexts.

**Zwozdiak-Myers 2009:** Reflective practice has been explicitly linked to action research (Pollard, 2002; Reason and Bradbury, 2001), which „rejects the mindless application of standardised practices across all settings and contexts, and instead advocates the use of contextually relevant procedures formulated by inquiring and resourceful practitioners‟ (Stringer, 1996: 3).

### 42. cos=0.9323  jac=0.39  [--]
**Arday 2015:** He further contends that this could immerge as an ideology which utilises reflective practice, more specifically at just interpretive levels, rather than recognise the potential for emancipation, autonomy and empowerment among practitioners.

**Zwozdiak-Myers 2009:** He further suggests this could become an ideology that uses reflective practice, solely at interpretive levels rather than acknowledge its potential for emancipation and empowerment.

### 43. cos=0.9320  jac=0.74  [--]
**Arday 2015:** Although, results of this study might be relatable to student teachers following similar courses in initial teacher education, they may be difficult to generalise for a wider specific demographic or context and this must be acknowledged.

**Zwozdiak-Myers 2009:** Although results of this study might be relatable to student teachers following similar courses in initial teacher education, they may be difficult to generalise.

### 44. cos=0.9317  jac=0.77  [--]
**Arday 2015:** Further, the emphasis placed on the need for personal disclosure was often considered to be beyond the capacity of some student teachers (Boud, 1999).

**Zwozdiak-Myers 2009:** Further, the emphasis placed on the need for personal disclosure was often found to be beyond the capacity of some student teachers.

### 45. cos=0.9302  jac=0.41  [-C]
**Arday 2015:** Research has indicated that all teachers utilise personal theories and beliefs to reflect upon themselves as teachers, their teaching, subject matter, pupils, and their roles and responsibilities within the classroom landscape (Clark, 1988; Clarke and Peterson, 1986; Ennis, 1994; FeimanNemser, 1990; Pollard, 2011).

**Zwozdiak-Myers 2009:** Research has shown that all teachers have personal theories and beliefs about themselves as teachers, their teaching, subject matter, pupils, and their roles and responsibilities in the classroom (Clark, 1988; Clark and Peterson, 1986; Ennis, 1994; Feiman-Nemser and Floden, 1986; Fenstermacher, 1986; Kagan, 1992; Lester, 1990; Munby and Russell, 1993; Nespor, 1987; Pajares, 1992; Porter and Freeman, 1986; Tabachnick and Zeichner, 1991).

### 46. cos=0.9274  jac=0.54  [--]
**Arday 2015:** Chapter 2: Review of Literature on Reflective Practice within Education This chapter identifies key characteristics attributed to reflective practice by commentators, eminent scholars, teacher educators, and researchers in the field of teacher education by examining the concept as: a discourse, involving processes of thinking, distinguishable from routine practice and underpinned by the development of practice which informs knowledge.

**Zwozdiak-Myers 2009:** Chapter 2: Review of Literature This chapter identifies key characteristics attributed to reflective practice by scholars, teacher educators and researchers in the field of teacher education by examining the concept as: a discourse, involving different patterns of thinking, distinguishable from routine practice and underpinned by the development of forms of knowledge which serve particular interests; a disposition to enquiry, generating an epistemology of professional practice; an integral part of action research; and, a core component of professional development.

### 47. cos=0.9268  jac=0.62  [--]
**Arday 2015:** Price (2001: 58) reports that the student teachers' encountered several challenges with regards to: finding time to reflect on their lessons; struggling to keep up with data collection; and, receiving support from subject mentors.

**Zwozdiak-Myers 2009:** Price (2001: 58) reports the student teachers‟ encountered several challenges: finding time to reflect on their lessons; struggling to keep up with data collection; and, receiving support from mentors; for example, although mentors could be a tremendous support for student teachers, simultaneously they could also „unwittingly set boundaries upon their experimentation‟.

### 48. cos=0.9251  jac=0.48  [--]
**Arday 2015:** Although, student teachers on one course may experience a common programme, how they engage and learn, will vary dependent upon how they interpret what needs to be learned.

**Zwozdiak-Myers 2009:** Although student teachers on one course, in very large measure, experience a common programme, how they engage and learn from each component will be very different.

### 49. cos=0.9231  jac=0.41  [--]
**Arday 2015:** 2.14 Summary Reflective practice can be defined as a complex, multi-dimensional concept which has invariably underpinned educational practice for a considerable period of time, particularly in educational discourse and research.

**Zwozdiak-Myers 2009:** 2.11 Summary Reflective practice is a complex, multi-dimensional phenomenon and over the past few decades has been at the centre of educational discourse and research.

### 50. cos=0.9228  jac=0.71  [--]
**Arday 2015:** Caution should be exercised concerning the generalisability of these conclusions beyond the student teachers and teacher trainers who were participants in this study.

**Zwozdiak-Myers 2009:** Caution should be exercised concerning the generalisability of these conclusions beyond the student teachers and dissertation supervisors who were participants in this study.

### 51. cos=0.9211  jac=0.37  [--]
**Arday 2015:** While advocating action research as a vehicle to validate teachers' personal, professional and political knowledge, Gore and Zeichner (1995: 209) contest the claim presented that such practice provides a platform for teachers to remain hidden within the confines of action research, which effects and contradicts some aspects of traditional practice.

**Zwozdiak-Myers 2009:** While advocating action research as a vehicle to validate „teachers‟ personal, professional and political knowledge‟ Gore and Zeichner (1995: 209) challenge the claim that it necessarily provides a voice for teachers as there is „a sense in which the „scientific‟ mask of action research, of social research generally, can be seen to devalue what teachers know and ways in which they have traditionally practised their work‟.

### 52. cos=0.9200  jac=0.65  [--]
**Arday 2015:** 2.7 Reflective practice as an integral part of action research Reflective practice underpins many research paradigms, particularly those situated in the hermeneutics, which focus on practitioners learning through experiential learning through authentic lived experiences (Whitehead, 1993).

**Zwozdiak-Myers 2009:** 2.8 Reflective practice as an integral part of action research Reflective practice is at the heart of certain research paradigms, particularly those situated in the hermeneutics, which focus on practitioners learning about the art and craft of their profession through personal „authentic‟ (Whitehead, 1993) lived experiences.

### 53. cos=0.9195  jac=0.45  [Q-]
**Arday 2015:** Barnett concludes that critically reflective practitioners view their professional capacities with regards to what they can do to improve the quality of pupils' educational experiences, as opposed to prescriptive and structured 'safe' practices that may not stimulate productive learning among learners.

**Zwozdiak-Myers 2009:** Barnett concludes that critically reflective practitioners view their professional lives in terms of what they can and want to do in order to improve the quality of pupils‟ educational experiences as opposed to what they are permitted to do.

### 54. cos=0.9185  jac=0.54  [--]
**Arday 2015:** The findings illuminated that nine of the eleven student teachers' embraced the challenge of developing morally and ethically defensible practices, which considered the board range of student experiences internally and externally within the school environment, with some recognition for how classrooms and schools could create and address aspects of social justice (Price, 2001).

**Zwozdiak-Myers 2009:** Findings showed that 9 of the 11 student teachers „embraced the challenge of developing morally and ethically defensible practices...that considered the wide range of student experiences in and out of school, and recognised the ways in which classrooms and schools can both create and address social justice‟ (ibid: 67).

### 55. cos=0.9168  jac=0.67  [-C]
**Arday 2015:** However, this framework has been construed in a reductionistic manner (Boud, 1999: 125), more specifically; this has been regarded as unrecognisable as reflective practice.

**Zwozdiak-Myers 2009:** This framework has however been interpreted „in such a reductionistic manner‟ (Boud, 1999: 125) as to be unrecognisable as reflective practice.

### 56. cos=0.9137  jac=0.67  [--]
**Arday 2015:** Dewey highlighted two other orientations situated within professional growth and enquiry, which resonate with responsible action.

**Zwozdiak-Myers 2009:** Dewey‟s other two orientations to professional growth and enquiry can also be aligned to responsible action.

### 57. cos=0.9134  jac=0.50  [--]
**Arday 2015:** When situated at the centre of professional growth and development, reflective practice can be the catalyst for self-study and research into personal teaching practice.

**Zwozdiak-Myers 2009:** When positioned at the core of professional growth and development, reflective practice is inextricably linked to the art of self-study and research into personal practice.

### 58. cos=0.9133  jac=0.77  [Q-]
**Arday 2015:** Zwozdiak-Myers (2012) utilises Elliott's (2005: 124) conception to assert that through self-study there are 'new possibilities for qualitative research to focus on the everyday practices by which individuals constantly construct and reconstruct their sense of individual identity'.

**Zwozdiak-Myers 2009:** Through self-study there are „new possibilities for qualitative research to focus on the everyday practices by which individuals constantly construct and reconstruct their sense of individual identity‟ (Elliott, 2005: 124).

### 59. cos=0.9104  jac=0.44  [--]
**Arday 2015:** Subsequently, following this exploration of concepts attributed to reflection, a practical definition of reflective practice is introduced, which aims to capture the constituent components of this phenomenon, in attempting to navigate the direction of this research study.

**Zwozdiak-Myers 2009:** From this platform, a working definition of reflective practice is introduced, which has been devised to capture the constituent components of this phenomenon and to guide the direction of this research study.

### 60. cos=0.9065  jac=0.79  [--]
**Arday 2015:** Strauss and Corbin (1998) define the term methodology as a way of rationalising thoughts about and studying social realities and contexts which supports the twin focus to educational research as: attitudinal- a distinctive way of thinking about educational phenomena; and action- a systematic means of investigating educational phenomena proposed by Morrison (2003).

**Zwozdiak-Myers 2009:** Strauss and Corbin (1998: 3) define methodology as „a way of thinking about and studying social reality‟ which supports the twin focus to educational research as: attitudinal - „a distinctive way of thinking about educational phenomena‟ and action - „a systematic means of investigating educational phenomena‟ proposed by Morrison (2002: 3).

### 61. cos=0.9056  jac=0.67  [--]
**Arday 2015:** Interview transcripts were also analysed to identify qualitative distinctions in the types of reflective conversations used by student teachers, to reveal the characterisations of mentoring and reflective practice.

**Zwozdiak-Myers 2009:** Interview transcripts were also analysed to identify qualitative distinctions in the types of reflective conversation used by student teachers within each dimension of reflective practice.

### 62. cos=0.9042  jac=0.45  [--]
**Arday 2015:** Additionally, Usher (1998: 18) highlights that the study of self seems to be ideally suited to revealing experiencebased learning and monitoring the development of self in the construction of knowledge and learning.

**Zwozdiak-Myers 2009:** Usher (1998: 18) adds, the study of self „seems to be ideally suited to revealing experience-based learning and tracking the development of self as learner‟.

### 63. cos=0.9037  jac=0.45  [QC]
**Arday 2015:** The evolvement of reflective practice has become 'a generic pedagogical principle' (Tsangaridou and O'Sullivan, 1997) within initial teacher education, where such procedures are immersed and embedded through initial teacher training (ITT) programmes of study, in attempting to cultivate pedagogical development.

**Zwozdiak-Myers 2009:** The development of reflective practice has become „a generic pedagogical principle‟ (Tsangaridou and O‟Sullivan, 1997) in initial teacher education wherein strategies are woven into programmes from diverse theoretical traditions to nurture and cultivate its development (see Appendix A).

### 64. cos=0.9033  jac=0.41  [-C]
**Arday 2015:** Within this context, it is important to acknowledge that teaching is a highly complex activity and the dynamics operating in any given classroom environment will be determined by a range of contextual and situational factors, that characterise every pupil and teacher in varying situations (Moyles, 1995; Pring, 2000; Pollard, 2011).

**Zwozdiak-Myers 2009:** Teaching is a highly complex activity and the dynamics operating in any given classroom environment will be influenced by a range of contextual and situational factors, the unique blend of qualities, characteristics and experiences that shape each and every pupil, in addition to those which shape the student teachers themselves.

### 65. cos=0.9027  jac=0.53  [-C]
**Arday 2015:** Implications for teacher educators The commitment for student teachers to take professional ownership and responsibility of their own teaching is considered by Government as a requirement to satisfy the Standards for the award of QTS (CfBT, 2010; DfE, 2012; Universities UK, 2014).

**Zwozdiak-Myers 2009:** Implications for teacher educators The commitment of student teachers to continue to improve their own teaching and take increasing responsibility for their own professional development is articulated by government as a requirement in the Standards for the award of QTS (TTA/DfES, 2003; TDA, 2007).

### 66. cos=0.9010  jac=0.70  [--]
**Arday 2015:** Although research instruments designed for use in this study were assessed for fitness for purpose prior to use, potential limitations and disadvantages associated with interpreting the questions in open-ended questionnaires and semistructured focus group interviews, as discussed in chapter 4, may have occurred, although all conscious attempts were made to minimise such limitations.

**Zwozdiak-Myers 2009:** Although research instruments designed for use in this study were assessed for fitness of purpose prior to use, potential limitations associated with interpreting the questions in questionnaires and semistructured interviews, as discussed in chapter 4, might have occurred.

### 67. cos=0.9002  jac=0.54  [--]
**Arday 2015:** 2.2 Defining Reflective Practice Reflective practice can be described as phenomenological, in that a given phenomenon is studied through direct experience, where interpretations are drawn, with the insights gained used to further understanding and modify pedagogical actions (Zwozdiak-Myers, 2012).

**Zwozdiak-Myers 2009:** References Appendices Chapter 2: Review of Literature 2.1 Introduction Reflective practice can be described as phenomenological, in that a given phenomenon is studied through direct experience, interpreted and the insights gained used, to further understanding and modify actions.

### 68. cos=0.8977  jac=0.64  [-C]
**Arday 2015:** In this study, action research provides the stimulus through which student teachers' explore personal practice within a specific context (peer-mentoring) (Le Cornu, 2005) in an attempt to improve the effectiveness of their own teaching practice.

**Zwozdiak-Myers 2009:** In this study, action research provides the vehicle through which student teachers‟ interrogate personal practice in a specific context so as to improve the effectiveness of their own teaching.

### 69. cos=0.8968  jac=0.70  [-C]
**Arday 2015:** Integral to such processes which involve collaborative endeavour are the goals of equity and social justice as existing practices within the school which are examined critically, evaluated and transformed (Carr and Kemmis, 1986; Cochran-Smith and Lytle, 1993; Gore and Zeichner, 1995; Noffke, 2005).

**Zwozdiak-Myers 2009:** Integral to the process are the goals of equity and social justice as existing practices within the school are examined critically and transformed (Carr and Kemmis, 1986; Cochran-Smith and Lytle, 1993; Gore and Zeichner, 1995; Noffke, 1994, 2005; Noordhoff and Kleinfeld, 1990).

### 70. cos=0.8958  jac=0.56  [--]
**Arday 2015:** To support such contexts, Habermas (1971) devised a model of knowledge, which entails the understanding of constitutive interests to distinguish between technical, social science and the emancipatory interests of people, which frame human knowledge, through the implementation of processes of inquiry.

**Zwozdiak-Myers 2009:** The critical theorist Jurgen Habermas (1971) devised a model of knowledge constitutive interests to distinguish between technical, social science and emancipatory interests of people, which guide and shape human knowledge with their characteristic processes of inquiry.

### 71. cos=0.8941  jac=0.72  [--]
**Arday 2015:** As student teachers' engage in reflective practice, the knowledge gained and theories constructed are framed by personal experiences within the context of a specific teaching situation.

**Zwozdiak-Myers 2009:** As they engage in reflective practice, the knowledge gained and theories constructed will, in part, be shaped by personal experiences within the context of a specific teaching situation.

### 72. cos=0.8920  jac=0.38  [--]
**Arday 2015:** Formative evaluation is a fundamental component of teacher research, particularly through interpretivist and action research paradigms, where arguably, the central aim for student teachers' is focused on ways to capture professional experiential learning by conceptualising and reflecting on aspects of their own practice.

**Zwozdiak-Myers 2009:** Formative evaluation is a fundamental component of teacher research and arguably, one goal for student teachers to realise would be to capture „this way of being‟ in their professional lives as they ask searching questions about their own practice.

### 73. cos=0.8918  jac=0.50  [--]
**Arday 2015:** However, Bernstein (1976: 209) queries the lack of synergy and similarity between forms of knowledge and enquiry constructed by emancipatory interests, and those established by technical and practical structures.

**Zwozdiak-Myers 2009:** However, Bernstein (ibid: 209) questions the lack of symmetry between forms of knowledge and enquiry constituted by emancipatory interests, and those constituted by technical and practical interests.

### 74. cos=0.8915  jac=0.54  [-C]
**Arday 2015:** Boud et al., (1985) approach to gaining knowledge from experience, which originates from the description of a particular teaching situation, incorporates the view that reflective practice involves reviewing retrospective experiences to facilitate new forward-facing experiences.

**Zwozdiak-Myers 2009:** Their approach to gaining knowledge from experience, which begins with the description of a particular teaching situation, incorporates the view that reflective practice involves looking back (returning to experience) and looking forward.

### 75. cos=0.8912  jac=0.36  [-C]
**Arday 2015:** Contextually, this concept underpins many ideas focused around teacher development within initial teacher education and classroom contexts, configured on the hypothesis that acquiring skills associated with reflective practice should in theory lead student teachers towards becoming more effective practitioners (Burn, 2006; Feiman-Nemser, 1990; Gore, 1993; Loughran, 2005; Pollard, 2008; Pollard, 2011; Richert, 1991; Rodgers, 2002).

**Zwozdiak-Myers 2009:** Over past decades, terms associated with reflective practice: the reflective practitioner (Schon, 1983, 1987), teacher as researcher (Hopkins, 2002; McKernan, 1996; Ruddock and Hopkins, 1985; Stenhouse, 1975) and reflective teaching (Calderhead, 1989; Cruickshank, 1987; Dewey, 1910, 1933; Grimmett et al, 1990; Smith, 1980; van Manen, 1977; Zeichner and Liston, 1996) have been introduced into initial teacher education and classroom contexts based on the assumption that acquiring skills associated with reflective practice should lead student teachers toward becoming more effective practitioners (Burn et al, 2003; FeimanNemser, 1990; Gore, 1993; Loughran, 2002; Pollard, 2002; Pollard et al, 2005; Richert, 1991; Rodgers, 2002).

### 76. cos=0.8901  jac=0.50  [--]
**Arday 2015:** There are numerous variables and complexities inherent within classroom environments, which require student teachers to demonstrate the capacity and adaptability to respond effectively to situations of uncertainty by evaluating classroom experiences and modifying this for similar future practical teaching situations.

**Zwozdiak-Myers 2009:** Numerous variables and complexities inherent within classroom environments call upon student teachers to demonstrate capacity and commitment in responding effectively to situations of uncertainty and to learn from their experiences.

### 77. cos=0.8900  jac=0.45  [--]
**Arday 2015:** 2.6 Reflective practice underpins the development of forms of knowledge that serve particular interests Reflective practice through various perspectives is generally considered as a purposeful activity which advocates student teachers' concerning themselves with formulating specific goals to improve pedagogical approaches (Pollard, 2011).

**Zwozdiak-Myers 2009:** 2.5 Reflective practice underpins the development of forms of knowledge that serve particular interests Reflective practice can be viewed as a purposeful activity in that questions student teachers‟ raise are formulated with specific goals and needs in mind.

### 78. cos=0.8897  jac=0.48  [Q-]
**Arday 2015:** Kolb (1984) states that this process of learning is 'self-perpetuating' in that the learner changes from direct involvement to analytical detachment, which creates new experiences for practitioners to be able to reflect on and re-conceptualise values and beliefs concerning practice.

**Zwozdiak-Myers 2009:** Kolb describes this process of learning as „self-perpetuating‟ in that the learner shifts from actor to observer, from direct involvement to analytical detachment, which creates a new form of experience to reflect on and conceptualise.

### 79. cos=0.8889  jac=0.58  [--]
**Arday 2015:** These findings would suggest that the student teachers' utilised listed (documented) feedback derived from multiple sources and multiple perspectives effectively to gauge their own practice during their progressive development (Hattie and Timperley, 2007).

**Zwozdiak-Myers 2009:** These findings would suggest a majority of student teachers used feedback derived from multiple sources and multiple perspectives effectively to gauge their own practice during the ongoing development of their research.

### 80. cos=0.8876  jac=0.72  [--]
**Arday 2015:** Emancipatory interests, driven by an individual's concern to understand the self within the human context are negotiated through critical and evaluative modes of thought and inquiry (Bradbury, 2010).

**Zwozdiak-Myers 2009:** Emancipatory interests, driven by a person‟s concern to understand „self‟ and „self within the human context‟ are realised through critical and evaluative modes of thought and inquiry.

### 81. cos=0.8868  jac=0.45  [--]
**Arday 2015:** Essentially, he proposes a system, which embeds both considered action and critique, within a context that focuses on the student teacher progressing and developing as a practitioner (Barnett, 1997).

**Zwozdiak-Myers 2009:** He proposes a system, which includes both action and critique, within a frame of reference that focuses on the student teacher as a developing person.

### 82. cos=0.8842  jac=0.48  [--]
**Arday 2015:** He argues that the former is substantive and normative, with regards to the specific aim of enquiry being pre-judged and to some extents pre-determined, whereas the latter resonates with formal conditions of enquiry and knowledge acquisition, which do not pre-judge or pre-determine specific outcomes.

**Zwozdiak-Myers 2009:** He argues that the former is substantive and normative inasmuch as the specific aim of enquiry is prejudged, whereas the latter are formal conditions of enquiry, which do not prejudge specific outcomes.

### 83. cos=0.8842  jac=0.43  [--]
**Arday 2015:** As this review of literature illustrates, there is various rhetoric concerning the implementation of reflection and reflective practice within education.

**Zwozdiak-Myers 2009:** As this review of literature exemplifies, there has been much rhetoric about reflection and reflective practice in particular.

### 84. cos=0.8841  jac=0.62  [--]
**Arday 2015:** Ultimately, learning about how to become an effective teacher is centred on varying complex, interrelated sets of thoughts and actions, which inform teaching practice.

**Zwozdiak-Myers 2009:** Teaching and learning about how to become an effective teacher centre on complex, interrelated sets of thoughts and actions.

### 85. cos=0.8839  jac=0.44  [Q-]
**Arday 2015:** The interrelatedness between teaching and learning requires student teachers to reflect upon pupil learning and development, specifically, to better understand the rationale concerning conclusions drawn about their own teaching (Loughran, 2010).

**Zwozdiak-Myers 2009:** The interrelationship between teaching and learning necessarily calls upon student teachers to reflect upon pupil learning and development so as to better understand reasons behind the outcomes of their own teaching.

### 86. cos=0.8837  jac=0.47  [--]
**Arday 2015:** His notion concerns itself with the inner self, and more importantly, contends that good teaching comes from the evaluation of selfidentity rather than standardised technique.

**Zwozdiak-Myers 2009:** His notion of the „inner self‟ purports that good teaching comes from identity rather than technique.

### 87. cos=0.8835  jac=0.50  [--]
**Arday 2015:** Zwozdiak-Myers (2009) contends that it is essential to be mindful that such factors may also significantly influence the research experiences of some student teachers featured in such studies.

**Zwozdiak-Myers 2009:** It is important to be mindful that such factors might also influence the research experiences of some student teachers featured in this study.

### 88. cos=0.8820  jac=0.50  [--]
**Arday 2015:** During the developmental process associated with being a student teacher, proficiency is gained in the basic knowledge and skills of teaching; Loughran (1996) argues that the understanding of the relationship between teaching and learning may influence practice.

**Zwozdiak-Myers 2009:** As student teachers‟ gain proficiency in the basic knowledge and skills of teaching, Loughran (1996: 3) argues „the more an understanding of the relationship between teaching and learning may influence practice, and the more deliberately a teacher considers his or her actions the more difficult it is to be sure that there is one right approach to teaching, or teaching about teaching‟.

### 89. cos=0.8818  jac=0.53  [--]
**Arday 2015:** Interests within the social sciences and humanities, the historic hermeneutic disciplines, which have been driven by a concern to comprehend human interaction, behaviours and variances of communications, are acknowledged through the interpretation and integration of ideas in order to unpick meanings associated with human interaction and behaviours (Habermas, 1971).

**Zwozdiak-Myers 2009:** Interests within the social sciences and humanities - the historic hermeneutic disciplines - driven by a person‟s concern to understand human behaviour and forms of communication are realised through the interpretation and integration of ideas in order to understand meanings associated with human behaviour and forms of communication.

### 90. cos=0.8814  jac=0.69  [-C]
**Arday 2015:** When the motivation or underlying purpose which guides reflective practice is considered however, a distinction between their approaches becomes evident (Bradbury, 2010; Ghaye, 2011).

**Zwozdiak-Myers 2009:** When the motivation or underlying driving force which guides reflective practice is considered however, a distinction between their approaches becomes evident.

### 91. cos=0.8804  jac=0.37  [--]
**Arday 2015:** The dimension of feelings which encapsulates reflection is embedded into Boud et al., (1985: 19) approach towards reflective practice as student teachers are encouraged to summarise and capture experiences and utilise this to generate new ways of thinking:  Association - relating new narratives to existing data to formulate new methods of thinking;  Validation - determining the authenticity of the ideas and feelings which have resulted, in implementing new ways of comprehending and interpreting teaching;  Appropriation- creating knowledge, engaging in professional autonomy, taking ownership of new insights and learning to inform future pedagogical and teaching practices.

**Zwozdiak-Myers 2009:** The dimension of feelings and emotions is woven into Boud et al's (1985: 19) approach to reflective practice as student teachers are encouraged to „recapture their experience, think about it, mull it over and evaluate it‟ through: association - relating new data to that which is already known, making links between feelings and ideas we have about teaching; integration - seeking relationships among the data, making sense of associations in some way; validation - determining the authenticity of the ideas and feelings which have resulted, trying out new ways of viewing and understanding teaching; appropriation - making knowledge one‟s own, taking ownership of new insights and learning to inform future teaching.

### 92. cos=0.8792  jac=0.60  [--]
**Arday 2015:** These concerns could be linked and, in part, might explain why some of the student teachers' did not perceive discussions with informed others during school placements as having influenced the on-going development of their teaching practices and experiences.

**Zwozdiak-Myers 2009:** These concerns could be linked and, in part, might explain why some student teachers did not perceive discussions with informed others had influenced the ongoing development of their research.

### 93. cos=0.8785  jac=0.48  [--]
**Arday 2015:** Contrastingly, teachers from varying backgrounds, career aspirations, expectations and priorities, will maintain perspectives with regards to the purposes of education, which may lead to differences in values.

**Zwozdiak-Myers 2009:** This said however, a number of teachers in the same school may have very different backgrounds, career aspirations, expectations and priorities along with divergent perspectives as to the purposes of education, which might lead to differences in values.

### 94. cos=0.8774  jac=0.50  [Q-]
**Arday 2015:** This resonates with Belenky et al., (1986: 227) notion of 'connected teaching' as a means to intrigue the perspectives within each learner.

**Zwozdiak-Myers 2009:** This has synergy with Belenky et al „s (1986 227) notion of „connected teaching‟ as a means to enter into the perspectives of each pupil.

### 95. cos=0.8769  jac=0.43  [--]
**Arday 2015:** Such consideration requires student teachers to critically reflect and engage with what occurs within the classroom and on the periphery of this.

**Zwozdiak-Myers 2009:** This requires student teachers to critically reflect on what they do in relation to what is happening around them in their classroom and school.

### 96. cos=0.8764  jac=0.56  [-C]
**Arday 2015:** A specific purpose of engaging in collaborative action research is to construct and de-construct knowledge about problems inherent from experience, which arise from professional practice to facilitate change and improvement for improved teaching (Carr and Kemmis, 1986; Elliott, 1991; Lewin, 1946; McKernan, 1991).

**Zwozdiak-Myers 2009:** One aim of collaborative action research is to construct knowledge about issues, which arise from professional practice to facilitate change and improvement (Lewin, 1946; Carr and Kemmis, 1986; Elliott, 1991).

### 97. cos=0.8759  jac=0.52  [--]
**Arday 2015:** Importantly, the capacity for student teachers to become reflective practitioners and autonomous teachers that take responsibility for their own professional development is prevalent not only in the governments' agenda but also within teacher training and the professional landscape generally.

**Zwozdiak-Myers 2009:** The notion that student teachers should strive to become reflective practitioners and take responsibility for their own professional development is prevalent not only in the governments‟ agenda but has also been advanced by scholars, teacher educators and practising teachers for many decades.

### 98. cos=0.8748  jac=0.53  [-C]
**Arday 2015:** Such justifications, have led some critics (Bernstein, 1976) to argue that Habermas failed to demonstrate the unity or link between theory and practice (praxis).

**Zwozdiak-Myers 2009:** By not doing so, some critics (Bernstein, 1976) argued that Habermas failed to demonstrate the unity of theory and practice.

### 99. cos=0.8688  jac=0.40  [-C]
**Arday 2015:** Calderhead (1989) notes that some meanings define this discourse as the constructive selfcriticism of one's own actions with the objective of improving these actions through such selfcritique, contrastingly others argue (Gore, 1987; Wildman and Niles, 1987; Zeichner and Liston, 1996) the concept of critical reflection indicates the acceptance of a particular set of beliefs, and in alignment with the epistemological and ontological assumptions that accompany this.

**Zwozdiak-Myers 2009:** Calderhead (1989) notes that some take it to mean no more than constructive self-criticism of one‟s own actions with a view to improvement whereas others‟ argue (Gore, 1987; McNamara, 1990; Wildman and Niles, 1987; Zeichner and Liston, 1996) the concept of critical reflection implies the acceptance of a particular ideology, along with its accompanying epistemology and assumptions.

### 100. cos=0.8684  jac=0.38  [-C]
**Arday 2015:** Importantly, this is distinguished by attending to the organisation and construction of learning through observations gained within some practical situations, so that learning can facilitate improved teaching practices (Bradbury, 2010; Kolb, 1984; Pollard, 2011).

**Zwozdiak-Myers 2009:** It is distinguished by attending to the organisation and construction of learning from observations made in some practical situation so that learning can then lead to improved practice.

### 101. cos=0.8682  jac=0.57  [--]
**Arday 2015:** Pertinently, he considers methods of empirical and analytical enquiry associated with scientific explanation to provide an inadequate base for the social sciences.

**Zwozdiak-Myers 2009:** He considers methods of empirical and analytical enquiry associated with scientific explanation to provide an inadequate base for the social sciences since interpretations, which are essential to the social sciences, are derived from subjective experiences that require continuous evaluation.

### 102. cos=0.8667  jac=0.57  [--]
**Arday 2015:** Importantly, the above narrative facilitates the on-going process of formative evaluation and reflection, which gives rise to modified practice through systematic, self-reflective enquiry, which develops when student teachers' scrutinise teaching approaches and strategies which worked effectively and discard or further refine those practices.

**Zwozdiak-Myers 2009:** The ongoing process of formative evaluation, which gives rise to modified practice through systematic, self-reflective enquiry is brought about when student teachers‟ retain teaching approaches and strategies which worked effectively and discard or further refine those found less effective.

### 103. cos=0.8652  jac=0.35  [--]
**Arday 2015:** Zwokziak-Myers (2009) states that as student teachers' build on experiences and develop confidence to exercise discernment, professional judgements and decisions concerning pedagogical contexts, this can impact personal educational goals and values, which may indicate the type of teacher they intend to become throughout their professional career.

**Zwozdiak-Myers 2009:** As student teachers‟ gain experience and confidence to exercise discernment, the professional judgements and decisions they make will be based on personal educational goals and values, which in turn, can reflect the kind of teacher they aspire to be.

### 104. cos=0.8637  jac=0.47  [--]
**Arday 2015:** Thus, the emergent themes concerning professional dialogue around teaching and learning and reflection embedded within the framework along with the student teachers' descriptive, comparative and critical reflective conversations provided a useful catalyst for this enquiry in the analysis of data.

**Zwozdiak-Myers 2009:** Thus, each dimension of reflective practice embedded within the framework along with the student teachers‟ descriptive, comparative and critical reflective conversations, provided the theoretical lens for this enquiry in the analysis of data (see section 4.7).

### 105. cos=0.8633  jac=0.42  [--]
**Arday 2015:** Within this dimension a number of findings raise the question as to whether some student teachers might have experienced barriers in attempting to gain perspectives and engage experienced teachers' within a community of practice, or even whether such cultures were existent in the first instance during the trainees' school placement experiences.

**Zwozdiak-Myers 2009:** Within this dimension a number of findings raise the question as to whether some student teachers might have experienced barriers in gaining the perspectives of more experienced teachers.

### 106. cos=0.8612  jac=0.62  [--]
**Arday 2015:** Rather, on the contrary, thus, there may be a need for this to be investigated further, in contexts where this does often occur, particularly in relation to creating an environment of trust so that suggestions made by informed others can be perceived as constructive and non-threatening within a community of practice.

**Zwozdiak-Myers 2009:** Thus, reasons behind this finding need to be investigated further, particularly in relation to creating an environment of trust so that suggestions made by informed others can be perceived as constructive and non-threatening.

### 107. cos=0.8587  jac=0.45  [--]
**Arday 2015:** Guiding student teachers' through such a process incorporates a component of Freire's (1972) reflective disposition in that, conversations concerning reflection, should not be isolated only towards previous experience, but should additionally encompass opportunities for considering and improving future practice.

**Zwozdiak-Myers 2009:** Guiding student teachers through this process incorporates the second component of the reflective posture advanced by Freire (1972), in that, reflective conversations should not only explore previous experience they should also focus on the possibilities of future action and practice.

### 108. cos=0.8584  jac=0.63  [--]
**Arday 2015:** While it could be argued that this may have been an implicit or tacit personally driven goal for the student teachers', this finding requires further investigation, to clarify in terms of raising awareness about the implicit personal theories and beliefs that the trainees may hold, and the possible influence and consequences of such beliefs on their own teaching should personal theories and beliefs remain unchallenged, in relation to developing reflective practice.

**Zwozdiak-Myers 2009:** While it can be argued this might have been an implicit or tacit goal for these student teachers, this finding needs further investigation, particularly in terms of raising their awareness about the implicit theories and beliefs they might hold and the possible influences and consequences in their own teaching should personal theories and beliefs remain unchallenged.

### 109. cos=0.8578  jac=0.46  [--]
**Arday 2015:** Essentially, this theory has been constructed on the notion that experiential learning is a process, which involves reinventing professional constructs through personal experiences and social systems rather than the application of standardised techniques towards current practices (Kolb, 1984).

**Zwozdiak-Myers 2009:** His theory is built on the notion that experiential learning is a process, which involves re-creating personal lives and social systems rather than the application of a series of techniques to current practice.

### 110. cos=0.8540  jac=0.50  [--]
**Arday 2015:** Significant, to the considered context, Habermas' technical or instrumental interests, compelled by an individual's concern to understand the environment in which they exist, are realised through empirical and analytical scientific explanations.

**Zwozdiak-Myers 2009:** Habermas‟ technical or instrumental interests, driven by a person‟s concern to understand the environment in which he lives, are realised through empirical and analytical scientific explanation.

### 111. cos=0.8535  jac=0.44  [--]
**Arday 2015:** Importantly, this is also a fundamental aim for the purpose of undertaking this research study.

**Zwozdiak-Myers 2009:** It is also a fundamental goal behind the purpose of undertaking this study.

### 112. cos=0.8523  jac=0.52  [--]
**Arday 2015:** Such terms utilised such as him, his, her, she and first names are used interchangeably throughout this section to sustain and maintain fluency and not interrupt the flow of the student teachers' narratives regarding their experiences.

**Zwozdiak-Myers 2009:** Such terms as he, she, his and hers are used throughout this section to sustain fluency and not interrupt the flow of student teachers‟ narratives of experience.

### 113. cos=0.8514  jac=0.47  [--]
**Arday 2015:** This viewpoint aligns with the position advanced by Schon (1983, 1987) who asserted that student teachers come to develop their personal epistemology of practice, in addition to Boud and Walker (1990) who underline the importance attributed towards the context of the learning environment in framing ideas associated with teaching practice.

**Zwozdiak-Myers 2009:** This viewpoint reinforces the line of argument advanced by Schon (1983, 1987) of how student teachers come to develop their personal epistemology of practice (see section 2.7) in addition to that of Boud and Walker (1990) of the importance placed on the context of the learning milieu (see section 1.2).

### 114. cos=0.8511  jac=0.50  [--]
**Arday 2015:** Such endeavour illustrates a commitment to engage in on-going professional development in order to improve throughout their careers, in addition, to improving teaching effectiveness in the interests of their pupils and personal professional practices.

**Zwozdiak-Myers 2009:** This illustrates commitment to engage in ongoing professional development in order to improve their own effectiveness in the interests of pupils they would be teaching in the future.

## BAND 3 - topical only (jac < 0.35)
n = 39

### 1. cos=0.9566  jac=0.32  [--]
**Arday 2015:** Reflective practice has been conceptualised as a creative process in that student teachers utilise and frame their experiences to generate new ways of knowing, in addition to developing epistemological dispositions, in attempting to evaluate teaching practice.

**Zwozdiak-Myers 2009:** Reflective practice has been conceptualised as a creative process in that student teachers frame each unique teaching situation and begin to generate their own theories-in-use or personal epistemology as to what actually works for them in practice.

### 2. cos=0.9561  jac=0.32  [-C]
**Arday 2015:** Reflective practice has been widely considered as an integral component in the professional development of student teachers and professional educators (Bolton, 2010; Cole and Knowles, 2000; Collin et al., 2013; Ghaye, 2011; Leigh and Bailey, 2013; Nelson and Sadler, 2013).

**Zwozdiak-Myers 2009:** Reflective practice is widely acknowledged as an essential component in the professional development of student teachers (Bartlett and Leask, 2005; Calderhead, 1989; Day, 1999; Ghaye and Ghaye, 1998; Moon, 2005; Pollard et al, 2005).

### 3. cos=0.9195  jac=0.12  [--]
**Arday 2015:** Importantly, this review of literature has considered the impact of reflective practice on developing student teachers pedagogical teaching practice, through positing that such endeavour challenges practitioners' values, beliefs and assumptions.

**Zwozdiak-Myers 2009:** This section reviews a number of research studies, which sought to examine the development of reflective practice in student teachers in different ways and at different stages of their programme of their study.

### 4. cos=0.9124  jac=0.31  [-C]
**Arday 2015:** Commentaries and debates highlight difference regarding claims presented about the benefits of reflective practice in the professional development of student teachers (Galea, 2012; Pollard, 2011).

**Zwozdiak-Myers 2009:** Discussions and debates highlight dissonance between claims made about the benefits of reflective practice in the professional development of student teachers and the lack of systematic research to substantiate those claims, given the absence of an agreed definition of reflection (Korthagen and Kessels ,1999; Rodgers, 2002; Zeichner, 1994).

### 5. cos=0.9119  jac=0.28  [--]
**Arday 2015:** Guba (1996) asserts that teachers perceive action research to be a form of personal enquiry that resonates with their professional ideals.

**Zwozdiak-Myers 2009:** Guba (1996) suggests teachers perceive action research to be a form of personal enquiry that is right for them; a form of professional enquiry carried out by the practitioners themselves (Anderson et al, 1994; Kincheloe, 1991; McNiff, 1993; Stringer, 1996), which is „closer to the kind of knowledge that teachers hold - context-sensitive, particular (and) richly descriptive knowledge‟ (Hiebert et al, 2002: 12).

### 6. cos=0.9018  jac=0.13  [--]
**Arday 2015:** One particular theoretical concept, which permeates throughout teacher training, that heavily underpins this study, is the development of reflective practice.

**Zwozdiak-Myers 2009:** Reflective practice is a complex, multi-dimensional phenomenon, which has become an integral part of initial teacher education.

### 7. cos=0.9014  jac=0.30  [--]
**Arday 2015:** Importantly, educational values are underpinned by socially constructed and critical reflections which are deliberated and validated in student teachers' actions, values and beliefs with colleagues and learners (Kensington-Miller, 2011).

**Zwozdiak-Myers 2009:** Educational values are socially constructed, critically and consciously reflected upon, discussed and demonstrated in student teachers‟ actions, feelings and thoughts with pupils and colleagues.

### 8. cos=0.9000  jac=0.20  [-C]
**Arday 2015:** Importantly, this was in line with the approach adopted in other research studies for developing reflective practice in student teachers (Gore and Zeichner, 1991; Gubacs-Collins, 2007; MacDonald and Brokker, 1999; Le Cornu, 2005).

**Zwozdiak-Myers 2009:** Implications behind the research findings are examined and some suggestions proposed for the development of reflective practice in student teachers.

### 9. cos=0.8968  jac=0.25  [--]
**Arday 2015:** Thus, action research underpinned with components of reflective practice provided the foundation for the methodology utilised within this research study.

**Zwozdiak-Myers 2009:** The purpose of this study was to better understand how reflective practice could be conceptualised and its development nurtured and captured within the context of action research.

### 10. cos=0.8966  jac=0.33  [--]
**Arday 2015:** Additionally, the professional landscape of teaching is continuously evolving and ever-changing in an attempt to reflect the changes of a wider society.

**Zwozdiak-Myers 2009:** Also, the professional landscape of teaching is in a constant state of flux as it responds to changes within the wider context of society.

### 11. cos=0.8952  jac=0.32  [--]
**Arday 2015:** Specifically, he posits fragmented and partial views of reflective practice, which reflect the notions of self-monitoring and reflexive connotations, are superseding of any inherent criticisms.

**Zwozdiak-Myers 2009:** He argues that a fragmented and partial view of reflective practice, one which carries selfmonitoring and reflexive connotations, is superseding that of „criticism‟.

### 12. cos=0.8947  jac=0.18  [--]
**Arday 2015:** The properties attributed to reflective practice, with regards to developing professional learning within teaching became a key feature for the student teachers' immersed within this study.

**Zwozdiak-Myers 2009:** The review of literature in chapter 2 revealed that reflective practice is a complex, multi-faceted phenomenon, which for the purpose of this study has been defined as: a disposition to enquiry incorporating the process through which student teachers' structure or restructure actions, knowledge, theories or beliefs that inform teaching for the purpose of personal professional development.

### 13. cos=0.8943  jac=0.34  [--]
**Arday 2015:** Importantly, Edwards and Nicoll (2006) highlight that it is important for student teachers to clearly express and frequently examine their own educational values, however such values must resonate with aspects of improving ethical, moral and teaching effectiveness.

**Zwozdiak-Myers 2009:** This highlights not only that it is important for student teachers to clearly express and frequently review their own educational values, but also that these values must be derived from what constitutes ethical and effective practice.

### 14. cos=0.8847  jac=0.12  [--]
**Arday 2015:** This is followed by an exploration of how reflective practice has been developed and researched within initial teacher education programmes and discourse, particularly with regards to the variances of how this phenomenon is implemented within pedagogical constructs.

**Zwozdiak-Myers 2009:** The development of reflective practice has been recognised as a vitally important component in initial teacher education in order to prepare student teachers for the challenges and complexities of working within the classroom environment (Borko and Putnam, 1996; Calderhead, 1996; Macdonald and Tinning, 2003; Tsangaridou and Siedentop, 1995) and to become effective decision makers with an understanding of how to translate pedagogical knowledge into their own practice (Berliner, 1985; Siedentop, 1991).

### 15. cos=0.8842  jac=0.15  [-C]
**Arday 2015:** Academic commentaries (El-Dib, 2007; Leijen et al., 2012; Roberts, 2009) on reflective practice abounds advocating for the cognitive development of both student teachers and experienced teachers as reflective practitioners (for example, Calderhead and Gates, 1993; Ramsey, 2010).

**Zwozdiak-Myers 2009:** Although the diverse nature of these research studies limit the potential to generalise findings about the development of reflective practice in student teachers, a number of themes emerge which are worthy of note.

### 16. cos=0.8841  jac=0.25  [--]
**Arday 2015:** Conceptually, throughout the study reflective practice was defined as a course of action designed at developing pedagogical features.

**Zwozdiak-Myers 2009:** Reflective practice, as defined in this study, can be situated at the heart of these learning processes.

### 17. cos=0.8833  jac=0.07  [--]
**Arday 2015:** Such prescriptions of reflective practice render teachers to reflect in particular ways, even at particular times, with some contexts guiding the interpretation of reflection towards further research, to explore varying implementation and conceptions of this phenomenon (Bolton, 2010).

**Zwozdiak-Myers 2009:** Although informed by the theoretical underpinnings, which have been advanced in the field of reflective practice by scholars, teacher educators and practitioners over past decades, in addition to discussions with professional colleagues, the framework of reflective practice designed for use in this study was shaped by the researcher‟s emerging conceptualisation of this phenomenon.

### 18. cos=0.8812  jac=0.12  [-C]
**Arday 2015:** Importantly, during the intervention it was important to recognise that while the necessity of developing reflective practices of student teachers is well documented (Hayden and Chiu, 2012; Bransford et al., 2005; Darling-Hammond, 2006; Hammerness et al., 2005; Porter et al., 2001) reflection as a part of practice once a teaching career evolves and develops is more complex (Loughran, 2010; Nilsson, 2009; Ostorga, 2006).

**Zwozdiak-Myers 2009:** 2.10 Developing reflective practice in student teachers The importance attached to the development of reflective practice in student teachers has been widely recognised by scholars, teacher educators and practising teachers for several decades.

### 19. cos=0.8797  jac=0.14  [--]
**Arday 2015:** Osterman and Kottkamp (2004: 19) state that reflective practice is viewed as a means by which practitioners can develop 'a greater level of self-awareness about the nature and impact of their performance'.

**Zwozdiak-Myers 2009:** This chapter has explored the complex, multi-faceted nature of reflective practice and examined the characteristics which key theorists, researchers and practitioners have attributed to this phenomenon.

### 20. cos=0.8793  jac=0.09  [--]
**Arday 2015:** In conceptualising reflection, Dewey (1933) distinguishes between the origin of thinking and the occurring of general principles which pervade experiences in teaching.

**Zwozdiak-Myers 2009:** The conceptualisation advanced by Dewey (1910, 1933) of reflection as a process captures different phases of thinking (see section 2.3), which student teachers can work through as they question aspects of personal experience, challenge assumptions, beliefs, goals, theories and values, and deliberate over a range of alternative possibilities to inform their future teaching, and was considered appropriate for the context of this particular study.

### 21. cos=0.8788  jac=0.34  [--]
**Arday 2015:** This finding suggested that monitoring changes in pupil behaviour and developing subject knowledge became the yardstick by which the student teachers judged the effectiveness of their teaching, in addition to how they were able to manage the challenge of the perceived lack of time that they thought they had, with regards to completing administrative tasks associated with their teacher training.

**Zwozdiak-Myers 2009:** This finding suggests that monitoring changes in pupil behaviour was the yardstick by which these student teachers‟ judged the effectiveness of their teaching.

### 22. cos=0.8769  jac=0.27  [Q-]
**Arday 2015:** Van Manen's level of technical reflection is characterised by the application of past experiences and existing knowledge, to serve a particular purpose, which is not exempt from reconsideration or modification, with credibility gained from the efficiency of such 'reliable' competencies and practices focused on meeting pedagogical outcomes.

**Zwozdiak-Myers 2009:** Van Manen‟s level of technical reflection is characterised by the application of existing knowledge to reach a given end which is not open to criticism or modification and refers to acting efficiently on an everyday basis.

### 23. cos=0.8721  jac=0.12  [--]
**Arday 2015:** Chapter 2: Review of Literature on Reflective Practice in Education 2.1 Introduction This chapter provides a review of the literature on reflective practice which forms the basis for the conceptual framework of this thesis.

**Zwozdiak-Myers 2009:** The purpose of this study was to analyse and synthesise existing literature and research in order to better understand the multi-faceted nature of reflective practice.

### 24. cos=0.8717  jac=0.15  [--]
**Arday 2015:** 2.3 Thinking and reflective experience Importantly for the development of reflective practice, the writings of John Dewey have significantly influenced educational thinking.

**Zwozdiak-Myers 2009:** 2.3 Reflective practice involves different patterns of thinking John Dewey‟s (1910, 1933) work on the nature, acquisition and use of problem solving skills has been particularly influential within the context of learning how to teach by reflecting on practice (Calderhead and Gates, 1993; Furlong and Maynard, 1995; Pollard et al, 2005; Rodgers, 2002).

### 25. cos=0.8667  jac=0.29  [--]
**Arday 2015:** Chapter 4: Research methodology and design of this study This chapter details the methodological framework that informed the design of the research study.

**Zwozdiak-Myers 2009:** The purpose of this chapter was to provide an overview of methodological approaches to research, which underpin the design and implementation of this study and establish their appropriateness for the purpose of this study.

### 26. cos=0.8655  jac=0.35  [--]
**Arday 2015:** Secondly, an essential requirement for student teachers' is to actively engage with opportunities and experiences provided within the programme of study.

**Zwozdiak-Myers 2009:** Second, student teachers must actively engage with opportunities and experiences presented within the programme of study and, upon completion of the course, successfully demonstrate competence and proficiency in their achievement of each Standard.

### 27. cos=0.8649  jac=0.21  [--]
**Arday 2015:** Student teachers improved and gained knowledge Developing the capacity to through reflective practices.

**Zwozdiak-Myers 2009:** Several constraints in the development of student teachers' reflective practice also emerged.

### 28. cos=0.8632  jac=0.16  [--]
**Arday 2015:** Reflective conversations can thus become a potent facet in attempting to understand personal practice as student teachers recall and verify their emotions, observations in practice, feelings, ideas and thoughts regarding future experiences (Pollard, 2002).

**Zwozdiak-Myers 2009:** This has been realised by framing reflective practice as a discourse, the vehicle through which reflective conversations provide insight as to the assumptions, beliefs, theories and personal values underpinning what student teachers do, or aspire to do, in their own teaching.

### 29. cos=0.8630  jac=0.06  [--]
**Arday 2015:** Within this theoretical context, teaching in a reflective manner becomes the primary context of learning by which teachers develop and improve their pedagogical practices (Galea, 2012).

**Zwozdiak-Myers 2009:** Following this line of argument, there is need to focus on the developmental nature of learning how to engage in reflective practice as soon as student teachers embark upon their initial teacher education course so as to embed and internalise such newly acquired dispositions as: analysing more closely, evaluating more widely and thinking in greater depth, in the student teachers practice before they enter the final year.

### 30. cos=0.8590  jac=0.17  [--]
**Arday 2015:** Action research is considered to be a good reflective tool for examining teaching practices and endorse this process for all teachers who share a commitment to improving pedagogically.

**Zwozdiak-Myers 2009:** This study was guided by two research questions: How can student teachers' develop reflective practice within the context of action research?

### 31. cos=0.8572  jac=0.22  [--]
**Arday 2015:** Secondly, the programme of study should facilitate student teachers towards gaining qualified teacher status (QTS).

**Zwozdiak-Myers 2009:** First, the programme of study must provide appropriate opportunities and relevant experiences within its curriculum design and course content, which enable student teachers to acquire and develop the knowledge, skills and understanding identified within Standards necessary for the award of qualified teacher status (QTS) in England (TTA/DfES, 2003; TDA, 2007).

### 32. cos=0.8568  jac=0.10  [--]
**Arday 2015:** This chapter has explored and considered the varying discourse that accompanies reflective practice, and its implementation within education among student teachers, and in-service teachers as a vehicle to inform professional teaching practice.

**Zwozdiak-Myers 2009:** An analysis of the concept reflective practice and an investigation into the development of student teachers' reflective practice within the context of action research Paula Zwozdiak-Myers A thesis submitted in partial fulfillment of the requirements of Brunel University for the degree in Doctor of Philosophy June 2009 Abstract In recent decades, reflective practice has become a key driver and an increasingly influential referent in the professional development of student teachers.

### 33. cos=0.8559  jac=0.34  [--]
**Arday 2015:** The utilisation of self-reflection as a mirror for personal development is pertinent to the construct of this practice also being used as a methodology for refining practice and gaining insights into the actions of teachers, not only as educators but also as adults, who are part of a lived reality with learners (Loughran, 2010).

**Zwozdiak-Myers 2009:** In using the concepts of self-reflection as a life philosophy and self-reflection as a methodology...(one can)...gain insights into the actions of teachers, not only as educators but also as adults who share a lived reality with children.

### 34. cos=0.8554  jac=0.11  [-C]
**Arday 2015:** The schema for developing a conceptualisation of reflective practice among the student teachers', became evident during focus group discussions where the trainees were able to define reflection in relation to how they have developed and how their teaching had developed in association with such practice (Bolton, 2010; Ghaye, 2011).

**Zwozdiak-Myers 2009:** In this exploration of the student teachers‟ development of reflective practice, a number of patterns and themes emerged both within and across the dimensions of reflective practice used to frame this study.

### 35. cos=0.8553  jac=0.17  [--]
**Arday 2015:** An important observation made by the student teachers, centred on utilising reflection to develop teaching competence and confidence.

**Zwozdiak-Myers 2009:** Findings indicated student teachers considered reflection a necessity in teaching and further that knowledge of content, context, pupils and teaching opportunities were prerequisites for facilitating the process of reflection.

### 36. cos=0.8542  jac=0.10  [-C]
**Arday 2015:** Researchers (Chien, 2013; Edwards and Thomas, 2010, Pollard and Collins, 2005; Pollard and Pollard, 2014) have proposed that reflective practice is the process through which progressive teachers integrate the various dimensions of teaching.

**Zwozdiak-Myers 2009:** Teacher educators have also argued that reflective practice is characteristically associated with teacher autonomy, empowerment and effective teaching (Calderhead, 1996: Macdonald and Brooker, 1999; Macdonald and Tinning, 2003; Tsangaridou and Siedentop, 1995; Tsangaridou, 2005).

### 37. cos=0.8542  jac=0.06  [-C]
**Arday 2015:** The student teachers' were faced with the complexity of knowing the essential characteristics of a reflective practitioner, and essentially, were collectively responsible for implementing effective methods for promoting reflection and stimulating meaningful analysis of outcomes that result from reflection on and for action (Dewey, 1933; LaBoskey, 1994).

**Zwozdiak-Myers 2009:** The research showed although some agreement was evident in preparing student teachers to become thoughtful decision makers (Calderhead, 1989; Clark and Peterson, 1986; Hellison and Templin, 1991; McNamara, 1990; Shulman, 1987; Siedentop, 1991; Zeichner, 1987), there was little consensus on meanings associated with reflective practice, approaches toward its implementation and notions as to what ought to be the object of reflection (Adler, 1991; Calderhead, 1989; Feiman-Nemser, 1990; Gore, 1987; Hatton and Smith, 1995; Tom, 1985; Valli, 1992; Zeichner and Tabachnik, 1991).

### 38. cos=0.8534  jac=0.17  [-C]
**Arday 2015:** It is widely acknowledged that the promotion of reflective practices in teacher education programmes must be considered an essential curriculum component, particularly in the development of student teachers pedagogical practices (Alsup, 2005; Halquist and Novinger, 2009; Zeichner, 1996).

**Zwozdiak-Myers 2009:** Initial teacher education programmes have sought to devise strategies that support the development of student teachers‟ reflective practice, which enables them to critically examine their own teaching (Clandinin, Davies, Hogan and Kernard, 1993; Knowles and Holt-Reynolds, 1991; Zeichner, 1993; Zeichner and Liston, 1996) and, to draw links between theory and their own practice (Calderhead, 1989; Elliott, 2004; Furlong and Maynard, 1995; Pollard, 2002).

### 39. cos=0.8521  jac=0.11  [--]
**Arday 2015:** The underpinning theme for the research study heavily identifies with reflective practice, in particular practice which helps to develop meaningful reflection.

**Zwozdiak-Myers 2009:** The review of literature (see chapter 2) revealed that reflective practice is a complex multi-dimensional phenomenon and section 4.2 explains how reflective practice was defined and captured within a framework designed for this study.

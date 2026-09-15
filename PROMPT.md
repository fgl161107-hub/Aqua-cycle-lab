# MASTER CODING PROMPT — SAGE-AI

You are an expert front-end engineer, educational technology designer, UX designer, and science-learning designer.

Build a complete static web application named:

**SAGE-AI — Smart Adaptive Guide for Environmental Learning**

Tagline:
**Explore. Predict. Experiment. Discover.**

This project is an international education-innovation competition prototype for Grade 5 elementary students.

## 1. NON-NEGOTIABLE PRODUCT GOAL

Do not build a normal educational website, article page, or quiz collection.

Build an **interactive digital science laboratory** in which students investigate the Water Cycle.

The experience must be:

**SEE → TOUCH → WONDER → PREDICT → TEST → OBSERVE → EVIDENCE → EXPLAIN → REFLECT**

The forest/ecosystem concept from previous versions is replaced by an interactive **water-world environment** focused on the Water Cycle.

The prototype must be complete from first screen to final reflection.

## 2. TECHNICAL REQUIREMENTS

Use:
- HTML5
- CSS3
- Vanilla JavaScript ES6+
- SVG/CSS animations where useful
- No framework required
- No build step required
- No server required
- No database required

The website must run directly from `index.html`.

It must work on GitHub Pages.

Do not depend on external APIs for core functionality.

If an AI API is not configured, SAGE must still function through a deterministic contextual guidance engine.

Keep all important application state in JavaScript/localStorage.

## 3. FILE STRUCTURE

Create:

```text
/
├── index.html
├── style.css
├── app.js
├── data.js
├── sage.js
├── simulation.js
├── README.md
├── PROMPT.md
├── CONTENT.md
└── AI_BEHAVIOR.md
```

Do not create unnecessary files.

## 4. VISUAL IDENTITY

Brand:
🌿 SAGE-AI

Theme:
Nature + Science Laboratory.

Use a sophisticated but child-friendly palette:
- sky blue
- water blue
- fresh green
- soft white
- sunlight yellow
- subtle earth tones

The visual quality should be suitable for an international education competition.

It must NOT look babyish.

Use a modern card system, rounded corners, clear typography, subtle shadows, and meaningful animations.

Use relevant emojis sparingly:
🌿 💧 ☀️ ☁️ 🌧️ 🔬 🔎 🧠 🌱

## 5. MAIN APPLICATION

Create these learning areas:

1. 🏠 Beranda
2. 🌎 Dunia Air
3. 🔎 Eksplorasi
4. 🔮 Prediksi
5. 🔬 Laboratorium
6. 📊 Bukti
7. 🧠 Tantangan Sains
8. 🌱 Aksi Lingkungan
9. 🏆 Profil Ilmuwan

The primary journey must remain sequential:

Beranda
→ Dunia Air
→ Eksplorasi
→ Prediksi
→ Laboratorium
→ Observasi
→ Bukti
→ Tantangan
→ Aksi Lingkungan
→ Refleksi
→ Profil Ilmuwan

Navigation may allow revisiting completed sections, but students should always know the recommended next step.

## 6. HOME

Display:

**SAGE-AI**
Smart Adaptive Guide for Environmental Learning

Greeting:
**“Halo, Ilmuwan Muda! 🔬”**

Mission:
**“Ke Mana Perginya Air?”**

Description:
“Setelah hujan turun, beberapa jam kemudian genangan air menghilang. Ke mana perginya air?”

Primary CTA:
**Mulai Investigasi**

Also show:
- current learning progress
- ecosystem/water-world status
- achievements preview
- current mission progress

Do not use a fake student name.

## 7. INTERACTIVE WATER WORLD

Create a visually rich interactive environment containing:

☀️ Matahari
🌊 Laut
💧 Danau
🏞️ Sungai
🏔️ Pegunungan
🌳 Tumbuhan
☁️ Awan
🌧️ Hujan
🌱 Tanah
🏠 Permukaan daratan

These are actual interactive elements, not decorative images only.

When clicked:
- highlight the object
- show a short contextual explanation
- show one question
- let the student investigate
- update discovery progress

Each object must have unique content.

Examples:

Matahari:
“Apa peran panas matahari dalam siklus air?”

Laut:
“Mengapa air laut dapat berubah menjadi uap?”

Awan:
“Bagaimana awan dapat terbentuk?”

Tumbuhan:
“Apakah tumbuhan juga melepaskan air ke udara?”

Tanah:
“Apa yang terjadi pada sebagian air hujan ketika mencapai tanah?”

Sungai:
“Ke mana air mengalir setelah hujan?”

Never use the same question for every object.

## 8. DISCOVERY SYSTEM

Do not reveal the complete water cycle immediately.

Students progressively discover:

☀️ + 🌊 → Evaporasi
🌱 → Transpirasi
☁️ → Kondensasi
☁️ → 🌧️ Presipitasi
🌧️ → 🌱 Infiltrasi
🌧️ → 🏞️ Runoff

When a process is discovered:
- animate the connection
- add it to the student's Water Cycle Map
- store it in localStorage
- keep previous discoveries

## 9. MISSION 01

Title:
**💧 Misi: Ke Mana Perginya Air?**

Scenario:
“Setelah hujan turun, beberapa jam kemudian genangan air menghilang. Ke mana perginya air tersebut?”

Show a puddle.

Allow the student to observe the effect of sunlight.

Question:
**“Apa prediksimu?”**

Options:
- Air menghilang begitu saja
- Air berubah menjadi uap
- Air berubah menjadi tanah
- Belum yakin

Then require:
**“Mengapa kamu memilih jawaban itu?”**

Confidence:
🙂 Belum yakin
😐 Cukup yakin
😄 Sangat yakin

Save prediction, reasoning, and confidence.

## 10. PREDICTION FEEDBACK

Never reveal the answer before experimentation.

If prediction is plausible:
“Menarik! Mari kita uji apakah hasilnya sesuai dengan prediksimu. 🔬”

If uncertain:
“Tidak apa-apa. Ilmuwan juga bisa memulai dari rasa ingin tahu. Mari kita cari buktinya.”

If incorrect:
“Prediksi itu berbeda dari hasil yang mungkin kita temukan. Justru perbedaan itu bisa menjadi petunjuk baru.”

## 11. DIGITAL WATER LAB

Create a functional simulation laboratory.

Variables:

### ☀️ Intensitas panas
Low / Medium / High

### 💧 Jumlah air
Low / Medium / High

### 🌬️ Pergerakan udara
Low / Medium / High

### 🌡️ Suhu
Cool / Normal / Warm

Primary button:
**▶ Jalankan Eksperimen**

The simulation must calculate deterministic results.

## 12. SIMULATION RULES

Use a simple educational model, not fake random numbers.

Example conceptual relationship:

- Higher heat → faster evaporation.
- Higher temperature → faster evaporation.
- Greater air movement → generally faster evaporation.
- More available water → more water can evaporate, while the rate should still depend on conditions.

Use normalized values so results remain easy for Grade 5 students.

Example output:
- evaporation rate: 0–100%
- vapor level: 0–100
- elapsed time: 0–30 minutes

Same settings must produce the same results.

Do not generate random scientific results.

## 13. EXPERIMENT ANIMATION

When running an experiment, show:

1. ☀️ Heat reaches water.
2. 💧 Water surface responds.
3. 💨 Water vapor rises.
4. ☁️ Cooling occurs.
5. 💧 Tiny droplets form.

Use a short animation timeline.

Do not merely show a loading spinner.

## 14. LIVE DATA

Display:
- Temperature
- Heat intensity
- Evaporation rate
- Water vapor
- Time

Use:
- animated counters
- simple line/bar graph
- visual water-level change

Keep the data understandable.

## 15. COMPARE EXPERIMENTS

Allow students to save Experiment A and Experiment B.

Show both conditions and results.

Ask:
**“Percobaan mana yang membuat air lebih cepat menguap?”**

Then ask:
**“Bukti apa yang membuatmu yakin?”**

## 16. EVIDENCE

Create:
**📊 Temukan Buktinya**

Show the student's actual experiment data.

Allow selection of evidence.

Do not use generic evidence unrelated to the student's experiment.

SAGE should refer to the actual values.

Example:
“Pada percobaanmu, laju penguapan lebih tinggi saat panas dinaikkan. Apa yang dapat kamu simpulkan?”

## 17. SCIENTIFIC REASONING

Create:
**🧠 Jelaskan Temuanmu**

Prompt:
“Gunakan hasil eksperimenmu untuk menjelaskan mengapa air dapat berubah menjadi uap.”

Provide an open-response field.

Assess the response with simple keyword/concept detection when no external AI is available.

Relevant concepts:
- panas
- matahari
- suhu
- uap
- evaporasi
- penguapan
- air berubah
- udara

Do not punish grammar errors.

## 18. WATER CYCLE PUZZLE

Create a drag-and-drop or tap-to-connect challenge.

Incomplete cycle:

☀️ → 💧 → ??? → ☁️ → 🌧️ → ???

Available processes:
- Evaporasi
- Transpirasi
- Kondensasi
- Presipitasi
- Infiltrasi
- Runoff

Students complete the cycle.

After completion:
- animate the full cycle
- congratulate the student
- unlock the related achievement

## 19. REAL-WORLD ENVIRONMENTAL CHALLENGE

Title:
**🌱 Bumi Membutuhkan Air**

Scenario:
“Suatu daerah mengalami hujan yang sangat sedikit selama beberapa minggu. Apa yang mungkin terjadi pada lingkungan?”

Students investigate:
- vegetation
- soil
- water availability
- evaporation
- rainfall

Do not reduce this to a one-question quiz.

Ask for prediction and reasoning.

## 20. SAGE MENTOR

Create a visible but non-intrusive mentor panel.

Name:
**🌿 SAGE**

SAGE must be contextual.

SAGE receives:
- current section
- selected object
- student prediction
- experiment settings
- experiment result
- evidence selected
- reasoning
- completed discoveries

SAGE uses progressive scaffolding:

Level 1:
Ask a guiding question.

Level 2:
Give a hint.

Level 3:
Give a stronger hint.

Level 4:
Give a concise explanation only when appropriate.

Never immediately give the answer.

## 21. SAGE CONTEXT MEMORY

Example:

Student predicted:
“Air menghilang begitu saja.”

After experiment:

SAGE:
“Tadi kamu menduga air menghilang begitu saja. Setelah melihat hasil eksperimen, apakah pemikiranmu berubah?”

SAGE must use actual student data where possible.

## 22. SAGE RULE-BASED FALLBACK

If no AI API is available, implement `sage.js` with contextual rules.

For each section, maintain multiple response variants.

SAGE should not repeat exactly the same sentence every time.

Responses should depend on:
- selected object
- student answer
- attempt count
- experiment result
- confidence

## 23. FEEDBACK PHILOSOPHY

Never use harsh:
“Salah!”

Instead:

Correct:
“Bagus! Bukti eksperimenmu mendukung prediksi itu. 🔎”

Partially correct:
“Ada bagian yang sudah tepat. Sekarang perhatikan perubahan suhu dan laju penguapan.”

Incorrect:
“Prediksimu berbeda dari hasil eksperimen. Mari kita cari tahu apa yang menyebabkan perbedaan itu.”

## 24. REFLECTION

Create:

**🧠 Apa yang Kamu Temukan?**

Questions:
1. Apa hal baru yang kamu temukan?
2. Apakah hasil eksperimen sesuai dengan prediksimu?
3. Apa yang akan kamu ubah jika melakukan eksperimen lagi?

Save responses.

## 25. SCIENTIST PROFILE

Title:
**🏆 Profil Ilmuwan**

Display progress based on actual actions:

🔎 Observasi
🔮 Prediksi
🔬 Eksperimen
📊 Bukti
🧠 Penalaran
🌱 Pemecahan Masalah

Do not automatically fill all progress.

## 26. ACHIEVEMENTS

Create:

🔎 Penjelajah Air
First exploration.

💡 Pembuat Prediksi
First prediction.

🔬 Ilmuwan Eksperimen
First completed experiment.

📊 Pemburu Bukti
Evidence identified.

🧠 Pemikir Kritis
Scientific reasoning completed.

💧 Penemu Siklus Air
Water cycle challenge completed.

🌱 Penjaga Lingkungan
Environmental challenge completed.

🏆 SAGE Scientist
Entire learning journey completed.

States:
🔒 Locked
◔ In Progress
✓ Unlocked

## 27. PERSISTENCE

Use localStorage to save:
- current section
- discovered processes
- selected objects
- predictions
- reasoning
- confidence
- experiment A
- experiment B
- evidence
- challenge results
- reflection
- achievements
- scientist profile progress

Provide a safe “Mulai dari Awal” option in a settings area.

Do not erase progress accidentally.

## 28. RESPONSIVE DESIGN

Optimize for:
- mobile
- tablet
- laptop
- desktop

Mobile/tablet must be especially usable.

No:
- horizontal scrolling
- clipped cards
- tiny buttons
- overlapping text
- unreadable charts
- inaccessible drag/drop

Provide an alternative tap-based interaction if drag-and-drop is difficult on mobile.

## 29. ACCESSIBILITY

Use:
- readable font sizes
- high contrast
- large touch targets
- clear labels
- icons + text
- keyboard-friendly controls where possible
- non-color-only feedback

## 30. PERFORMANCE

Keep the site lightweight.

Avoid unnecessary external libraries.

Animations should be smooth but not resource-heavy.

The application must work on ordinary school devices.

## 31. SCIENTIFIC ACCURACY

Use age-appropriate and scientifically correct explanations for:
- evaporation
- transpiration
- condensation
- precipitation
- infiltration
- runoff
- sunlight's role
- continuous movement of water

Do not claim that water “disappears.”
Explain that water changes form or moves to another part of the system.

## 32. INTERNATIONAL COMPETITION POSITIONING

The implementation must clearly demonstrate:
- student-centered learning
- inquiry-based science learning
- adaptive scaffolding
- interactive simulation
- evidence-based reasoning
- environmental literacy
- reflection
- learning analytics/progress

Do not add flashy features merely for appearance.

The innovation should come from the learning experience.

## 33. FINAL UI PRINCIPLE

“Simple to use, rich to explore.”

One screen = one main learning goal.

Avoid:
- excessive menus
- excessive text
- excessive badges
- unnecessary points
- countdown timers
- lives/energy systems
- distracting animations

## 34. FINAL TESTING

Before declaring the project complete, test all of these:

1. Home CTA opens the learning journey.
2. Ocean opens ocean-specific investigation.
3. Sun opens sun-specific investigation.
4. Cloud opens cloud-specific investigation.
5. Plant opens plant-specific investigation.
6. River opens river-specific investigation.
7. Discoveries accumulate instead of replacing each other.
8. Prediction is stored.
9. Reasoning is stored.
10. Confidence is stored.
11. Experiment settings change simulation results.
12. Same settings produce consistent results.
13. Experiment animation visibly represents the process.
14. Experiment data updates.
15. Experiment A and B can be compared.
16. Evidence references actual experiment data.
17. Reasoning can be submitted.
18. Water-cycle puzzle works on mobile and desktop.
19. Environmental challenge works.
20. SAGE responds according to context.
21. SAGE does not reveal answers too early.
22. Achievements unlock only after real completion.
23. Scientist Profile reflects actual progress.
24. Reloading the page preserves progress.
25. Reset option works.
26. No visible placeholder content remains.
27. No dead buttons remain.
28. No console-breaking JavaScript errors remain.
29. Layout works at mobile, tablet, and desktop widths.
30. The entire journey can be completed from start to finish.

## 35. DEFINITION OF DONE

The project is complete only when it feels like:

**a real digital science laboratory for children**

and NOT:

**a website containing science material and quizzes.**

The final experience must make students:
- explore
- wonder
- predict
- experiment
- observe
- use evidence
- explain
- reflect

The core statement of SAGE-AI is:

**“Don't just learn how the water cycle works. Investigate why it happens.”**

Build the complete application accordingly.

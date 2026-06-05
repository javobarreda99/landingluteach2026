# Luteach — Design System

> Warm, minimalist brand system for **Luteach**, a B2B edtech platform that
> **assigns each student their best-fit university-student tutor ("Luteacher") by
> affinity** — by learning profile, subject, schedule, and personality. It is **not a
> marketplace**: students don't browse or pick; Luteach assigns. STEM-focused. Trust is
> the core brand job; warmth is the core brand feeling.

---

## 1. Company & product context

**Luteach** (luteach.com) is an edtech tutoring platform focused on **STEM**
(programming, math, physics, chemistry, biology…). Its differentiator is
**peer-to-peer assignment by affinity**: students learn from **"Luteachers"** — verified
**university students who already excelled in that course** — and Luteach **assigns** the
best-fit tutor by **learning profile, subject, schedule, and personality** (students do
**not** browse a marketplace). The help feels like a knowledgeable friend, not a distant
professor. The brand must **project
trust and credibility** (verified tutors) while staying **warm, human, and
approachable**.

**Language & market:** The live product is in **Spanish**, serving **Latin
American students (Peru-first)** — Luteachers come from universities like **UPC,
PUCP, UPCH, ULIMA, UNI, USIL**, and students have been served across **Perú,
Colombia, España, EE.UU. y México**. Real stats (BBVA pitch deck, 2025): **+40,000
clases dictadas, +300 tutores universitarios, 87% de estudiantes por encima del
promedio, +1,200 estudiantes**. Contact is WhatsApp/Instagram-led. Keep new copy in
Spanish unless asked otherwise.

**Three audiences / surfaces** (the platform now leads **B2B-first**):
1. **Organizations (primary)** — companies investing in personalized STEM education for
   the **children of their collaborators**, and **impact programs / NGOs / foundations**
   running scholarships and social programs. Sold on impact + reporting.
2. **Students** (`learning.luteach.com`) — the beneficiaries: find a Luteacher, book, pass.
3. **Luteachers** (`teaching.luteach.com`) — teach what you aced, earn income.

The org flow: **Diseña el programa → Conectamos a los estudiantes → Mides el impacto.**

**Positioning — "el puente entre educación y talento":** Luteach bridges *young people
who need to learn* and *university students who want to teach*. Organizations delegate
tutoring hours for their people, families, and communities.

**Problems Luteach addresses (deck data):** 3 of 4 LatAm students underperform in
Math/Science (PISA 2022); ~50% university dropout (higher in STEM); 53.5% of firms
can't find young talent with the right soft skills (Arcos Dorados 2025); parents lose
up to 10h/week on homework support. Organizational value: talent retention, wellbeing +
productivity, **ESG/RSC**, +10h/week freed for working parents, 50%-subsidized premium
tutoring. Aligned to **ODS/SDG 4, 5, 8, 10**. The landing's `Impact.jsx` renders all of this.

**Brand pillars**
- **Trust** — vetted tutors, institutional-grade reliability, clear and honest copy.
- **Warmth** — peer-to-peer learning, a friendly orange palette, rounded forms.
- **Momentum** — the walking-student mascot literally moves forward; learning is progress.

### Sources provided
The following were the only inputs (brand assets — **no codebase, Figma, or product
screenshots were provided**):

| File (original) | Stored as | What it is |
|---|---|---|
| `Luteach Icono + texto.png` | `assets/luteach-logo-orange.png` | Primary horizontal logo (orange wordmark + mascot) |
| `Luteach Icono + texto blanco.png` | `assets/luteach-logo-white.png` | White (knockout) logo for dark/photo backgrounds |
| `289459046_..._n.jpg` | `assets/luteach-icon.jpg` | App/profile icon — white mascot on orange gradient |
| `Icono curso programación.png` | `assets/course-icon-programming.png` | Course-category icon (Programming) — code glyph on blue gradient |
| `paleta de colores LUTEACH.jpg` | `assets/reference-nexaverse-dashboard.jpg` | **Mislabeled** — it is a "NexaVerse" SaaS dashboard, not Luteach's palette. Treated as loose inspiration only; the real palette was sampled from the logo + icon. |
| — | live site `luteach.com` | Fetched for real copy, stats, audiences, and the 3-step flow (text only — no design assets pulled). |

> ⚠️ Because no product source (code or Figma) was supplied, the **UI kits in this
> system are brand-grounded recreations**, not replicas of an existing product.
> They faithfully apply Luteach's colors, type, and tone to plausible product
> screens. **Please share real product screens / a codebase / Figma to make these
> pixel-accurate.**

---

## 2. Content fundamentals (voice & tone)

Luteach speaks like **a trustworthy, encouraging peer/mentor** — warm but never
childish, clear but never corporate-cold. It talks to **students** day-to-day and to
**institutions** when selling B2B, balancing **friendliness** with **credibility**.
The live voice is **Spanish, informal-but-respectful (tú)**.

- **Person:** Talk to the reader directly — Spanish **"tú"** (informal) / English **"you"**;
  Luteach is **"nosotros / we"**. ("Te conectamos con el Luteacher ideal.")
- **Bilingual:** Default to **Spanish** for student-facing surfaces (the live market is
  LatAm/Peru). English is fine for international B2B. Keep copy translatable: avoid
  idioms, keep button labels 1–2 words ("Empezar gratis", "Book a demo").
- **Tone:** Confident, supportive, plain-spoken. Lead with the benefit, then the proof.
- **Casing:** **Sentence case** everywhere (buttons, headings, nav). The only
  all-caps element is the **wordmark "LUTEACH"** and small **overline/eyebrow** labels.
- **Sentence length:** Short and active. Verbs up front. ("Find your tutor." not
  "Tutors can be found here.")
- **Numbers as proof:** Use concrete trust signals — "Vetted university tutors",
  "92% of students improve a grade", "Avg. match in under 24h". Never invent vanity stats.
- **Jargon:** Minimal. STEM subject names are fine; avoid edu-tech buzzwords.
- **Emoji:** **Not used** in product or marketing UI. Warmth comes from color, the
  mascot, and rounded forms — not emoji.
- **Bilingual note:** The brand operates in **Spanish & English** (asset names are
  Spanish). Keep copy translatable: avoid idioms, keep button labels 1–2 words.

**Example copy (live, Spanish)**
- Hero: *"Aprende de quienes ya dominan tu curso."* / sub: *"Luteach te conecta con
  Luteachers — estudiantes universitarios verificados que aprobaron tu mismo curso."*
- CTAs: **"Empezar gratis"**, **"Cómo funciona"**, **"Quiero ser Luteacher"**
- Steps: *Elige tu curso · Te asignamos tu Luteacher por afinidad · Aprende y aprueba.*
- B2B (English): *"The right tutor, matched in 24 hours."* / CTA: **"Book a demo"**

---

## 3. Visual foundations

### Color
- **Primary is orange `#F28705`** (sampled from the wordmark). The signature device is
  the **warm diagonal gradient `#F35D06 → #F8A01C`** (135°), taken straight from the app icon.
- **Secondary is a trust blue `#2480C2`** (gradient `#1A5E97 → #2480C2`, token `--grad-trust`).
  Use it specifically on **credibility/B2B moments** — verified badges, the partners/clients
  section, institutional surfaces — as a calm counterweight to the warm orange. Orange stays
  the primary action color; blue signals trust, never competes for the main CTA.
- **Neutrals are warm**, never gray-blue: backgrounds are cream/off-white
  (`#FFF9F3`, `#FDF4EA`), text is a warm near-black (`#2B2520`), borders are sandy (`#F0E4D6`).
- **Minimalist application:** large fields of warm white, orange used **sparingly and
  decisively** — for the primary action, key highlights, and the gradient hero/icon
  moments. Avoid rainbow UIs; one accent does the work.
- **Category gradients:** course categories each get a 2-stop gradient **sampled from the
  brand's real course icons** (`assets/course-icon-*.png`): Programación `#5CBDE7→#324E60`,
  Matemáticas `#FCC714→#F39107`, Física `#03DBBE→#00B3E3`, Química `#58EA39→#E4CB16`
  (Biología derived violet). These vibrant gradients are a core brand device — use them
  boldly on course tiles, hero accents, and section blobs, always on **rounded-square tiles**
  echoing the app icon.

### Type
- **Display/headings:** Poppins (600–800) — geometric, rounded, the nearest match to
  the chunky LUTEACH wordmark. Tight tracking on big sizes (`-0.02em`).
- **Body:** Nunito Sans (400–700) — warm humanist sans, very legible at small sizes.
- **Mono:** JetBrains Mono — for code-course surfaces and snippets only.
- Generous line-height (1.5–1.6 body), `text-wrap: pretty` on paragraphs/headlines.

### Shape, depth & layout
- **Corner radii are generous and friendly:** cards `14–20px`, buttons/pills `999px` or
  `14px`, tiles `20–28px`, inputs `10–14px`. Nothing sharp.
- **Shadows are soft and warm-tinted** (based on `rgba(43,37,32,…)`), never harsh black.
  Cards float on `--shadow-sm/md`; primary CTAs get an **orange glow** (`--shadow-orange`).
- **Cards:** white surface, soft shadow, sandy `1px` border optional, `14–20px` radius,
  comfortable `20–24px` padding. Borders OR shadow — rarely both heavy.
- **Layout:** roomy, single clear focus per view, max content width ~1200px on web,
  consistent 4px spacing scale. Whitespace is a feature (minimalist).
- **Backgrounds:** mostly flat warm white/cream. The gradient appears in **hero panels,
  the icon, category tiles, and accent blobs** — not as a full-page wash. No noisy textures.

### Motion & states
- **Animation:** subtle and quick — fades + small upward slides (8–12px),
  `200–280ms`, ease `cubic-bezier(0.2, 0.8, 0.2, 1)`. The mascot can have a gentle
  "walk/step" micro-motion. No heavy bounces.
- **Hover:** primary buttons darken to `--orange-600` and lift (`translateY(-1px)` +
  stronger glow); cards lift to `--shadow-md`; links go `--orange-700`. Secondary/ghost
  buttons fill with `--orange-100`.
- **Press:** scale `0.98` + drop back to base shadow; primary uses `--orange-600`.
- **Focus:** `2px` orange ring with offset (`box-shadow: 0 0 0 3px rgba(242,135,5,.35)`).
- **Imagery vibe:** warm, bright, natural-light photography of students/tutors; avoid
  cold/blue or heavy grain. Photos pair with the cream canvas. Use the white logo on
  photos via a subtle protection gradient when needed.

---

## 4. Iconography

- **Mascot:** the **walking student with a backpack** is the brand's hero icon. White
  knockout on the orange gradient = app icon; orange on transparent = inline mark.
  Treat it as a logo asset — **do not redraw or recolor** beyond brand orange/white.
- **Course-category icons:** flat, simple glyphs (e.g. `</>` code window) centered on a
  **rounded-square gradient tile** with a subtle drop shadow. Each STEM category owns a
  gradient (see `--cat-*` tokens). Provided: Programming (`assets/course-icon-programming.png`).
  *Other category tiles should follow the same template — please supply originals if they exist.*
- **UI icons:** no brand icon font was provided. The system uses **[Lucide](https://lucide.dev)**
  (via CDN) as the substitution — clean, rounded, `~1.75–2px` stroke, which matches the
  friendly geometric tone. **SUBSTITUTION — flag for review.** Stroke icons, never filled,
  drawn in `currentColor` (usually `--ink-500` / `--ink-900`, orange when active).
- **Emoji / unicode icons:** not used.

---

## 5. Index — what's in this system

| Path | Contents |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography, index |
| `EDITAR.md` | **Guía para editar la landing en VS Code** (Live Server, qué archivo es qué) |
| `SKILL.md` | Agent-Skills front-matter so this kit works in Claude Code |
| `colors_and_type.css` | All design tokens: color, gradients, type scale, radii, shadows, spacing |
| `assets/` | Logos (orange + white), app icon, course-category icons, **real photos from the BBVA deck** (`photo-session`, `photo-impact`, `luteacher-1/2/3` — human faces of Luteachers & impact) |
| `preview/` | Design-system cards rendered in the Design System tab |
| `landing/` | **New high-impact Spanish landing page** (`index.html` + `Hero.jsx`, `Sections.jsx`) — real luteach.com content, elevated visuals & color |
| `ui_kits/kit.css` | Shared UI-kit component styles (buttons, badges, cards, fields) |
| `ui_kits/marketing-site/` | UI kit: B2B/institutions marketing site (English) — affinity hero, logo strip, how-it-works, 4-level vetting, subjects, pricing, footer |
| `ui_kits/platform/` | UI kit: the institution platform / dashboard (login, sidebar, matches, booking) |

### Fonts & substitutions to confirm
- **Logo wordmark font** is custom; **Poppins** is the nearest Google Fonts match used
  for headings. Please share the real font if Luteach has one.
- **UI icon set:** Lucide (CDN) substituted for an unspecified set.
- Reconfirm the exact brand orange if you have official hex values (sampled: `#F28705`).

---
name: luteach-design
description: Use this skill to generate well-branded interfaces and assets for Luteach (luteach.com), a Spanish-language, peer-to-peer STEM tutoring platform that ASSIGNS each student their best-fit university "Luteacher" by affinity (not a marketplace). Use for production UI or throwaway prototypes/mocks/landing pages/decks. Contains essential design guidelines, colors, type, fonts, logos, icons, and ready-made UI-kit components.
user-invocable: true
---

# Luteach design skill

Read `README.md` first — it has the full brand context, voice & tone (Spanish-first,
warm + trustworthy), visual foundations, and iconography. Then explore the other files.

## Key facts
- **Brand:** warm + minimalist. Primary orange **#F28705**; signature gradient
  **#F35D06 → #F8A01C**. Warm cream neutrals, warm near-black text. See `colors_and_type.css`.
- **Type:** Poppins (display/headings), Nunito Sans (body), JetBrains Mono (code).
- **Voice:** Spanish "tú", warm and encouraging; no emoji in UI. CTAs like
  "Empezar gratis", "Quiero ser Luteacher".
- **Mascot:** walking student + backpack (`assets/`). Treat as a logo — don't redraw.
- **Icons:** Lucide (CDN) is the substitution; stroke style, currentColor.

## How to use
- **Visual artifacts** (landing pages, mocks, slides, throwaway prototypes): copy the
  needed assets out of `assets/`, link `colors_and_type.css` + `ui_kits/kit.css`, and
  build static HTML. Reuse patterns from `landing/` and `ui_kits/`.
- **Production code:** read the tokens and rules here to design on-brand; copy assets as needed.
- If invoked with no guidance, ask what they want to build, ask a few sharp questions,
  then act as an expert designer producing HTML artifacts or production code.

## Files
- `README.md` — context, voice, visual foundations, iconography, index
- `colors_and_type.css` — all tokens (color, gradients, type scale, radii, shadows, spacing)
- `assets/` — logos (orange + white), app icon, course-category icon
- `landing/` — high-impact Spanish landing page (best starting reference)
- `ui_kits/kit.css` — shared component styles
- `ui_kits/marketing-site/`, `ui_kits/platform/` — interactive UI-kit recreations
- `preview/` — design-system specimen cards

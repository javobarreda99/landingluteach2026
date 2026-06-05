# Luteach — Marketing Site UI kit

A brand-grounded recreation of Luteach's **B2B marketing website**. Trust-first,
warm, minimalist. Built to apply the design tokens in `../../colors_and_type.css`.

> ⚠️ No product source (code/Figma) was provided. This is an original, on-brand
> construction — replace with real screens when available.

## Run
Open `index.html`. Single scrolling page with interactive nav (smooth-scroll),
subject selector, pricing toggle, and a working "Book a demo" modal.

## Files
| File | Contents |
|---|---|
| `index.html` | Boots React + Babel + Lucide, assembles the page |
| `Shell.jsx` | `Icon` (Lucide wrapper), `Logo`, `NavBar`, `Footer` |
| `Sections.jsx` | `Hero`, `AffinityCard` (assigned-match preview), `LogoStrip`, `HowItWorks`, `Vetting` |
| `Pricing.jsx` | `Subjects`, `Pricing`, `CTA`, `DemoModal` |

## Notes
- Idioma: **español** (sitio B2B para colegios/instituciones).
- Icons: **Lucide** via CDN (substitution — see root README).
- Components export to `window`; each `<script type="text/babel">` shares scope that way.
- Primary CTA = orange with glow; secondary = ghost; dark = `--ink-900`.
- Signature gradient appears in the hero blob, step tiles, and the closing CTA band.

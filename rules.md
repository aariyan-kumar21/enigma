# rules.md — Working Rules for the ENIGMA Website Project

You are building a **single-page website** for ENIGMA, a student tech club. Read `PRD.md` and `SCHEMA.md` before doing anything, and follow these rules on every task.

## 1. Source of truth
- `PRD.md` defines what to build. `SCHEMA.md` defines how content is structured.
- If a request conflicts with the PRD, stop and ask before proceeding.
- The design reference is the uploaded "Hubfolio" screenshot. Copy its **style** (layout rhythm, type pairing, rounded panels, colour usage). Never copy its **text**, brand names, stats, pricing, or testimonials.

## 2. Content rules (strict)
- Use only the copy in `src/content/site.ts`. Do not paraphrase, shorten, or "improve" it.
- **Never invent** names, events, stats, dates, links, testimonials, or emails. If content is missing, use the `TODO` placeholder and a tasteful "coming soon" state.
- No lorem ipsum anywhere.
- Components must not contain hard-coded copy. Add it to `site.ts` and update `types.ts` if needed.
- Keep the terminal-style labels exactly as written (`HOME.EXE`, `SECTOR.ORIGIN`, `[SYSTEM_MANIFESTO]`, etc.), including case and punctuation.

## 3. Tech stack (do not swap without asking)
- Vite + React + TypeScript (strict mode)
- Tailwind CSS (tokens via CSS variables in `src/styles/globals.css`)
- Framer Motion for animation, Lenis for smooth scroll
- lucide-react for icons
- No UI kit libraries (no MUI, Chakra, Bootstrap). Build components by hand.
- Add a new dependency only when truly needed, and tell me why.

## 4. Design rules
- Use only the tokens from PRD §5.2. No hard-coded hex values inside components; use CSS variables or Tailwind theme values.
- **Yellow is allowed only as described in the yellow rules** (accent only, ~5% of visible color: primary CTA button, active nav dot, logo "z", status dots, and tiny details like the short line before eyebrows).
- Headings: bold sans (Inter Tight) with one *italic serif accent word* (Instrument Serif italic), following the `{ plain, accent }` shape in the schema.
- Radii: 12 / 24 / 32px and pill. Borders: 1px, low contrast (`--line`).
- Surfaces: dark palette with `--ink-950` page background, `--ink-900` raised cards/panels, and `--ink-800` tiles.
- Generous whitespace. Large type. No clutter, no drop-shadow-heavy skeuomorphism.
- No emojis in the UI. Icons come from lucide-react only.
- No stock imagery unless I supply it. Use gradients, type, and CSS shapes instead.

## 5. Code rules
- Small, single-purpose components. One component per file, named export matches the filename.
- Sections go in `components/sections/`, shared primitives in `components/ui/`, layout pieces in `components/layout/`.
- Each section root is `<section id="{nav id}">` with `scroll-mt` for the fixed header.
- No `any`. No unused variables or imports. No commented-out code.
- Prefer CSS/Tailwind over JS for hover and layout effects.
- Extract repeated animation into `ui/Reveal.tsx` rather than duplicating variants.
- Keep files under about 200 lines; split if larger.

## 6. Motion rules
- Animate `transform` and `opacity` only. Never animate layout properties like width or height in scroll-triggered effects.
- Scroll-reveals run once.
- Everything must respect `prefers-reduced-motion` (use the `useReducedMotion` hook).
- No autoplaying video, no heavy WebGL or particle effects.

## 7. Accessibility and SEO
- One `<h1>` (the hero headline). Logical heading order after that.
- All interactive elements are reachable by keyboard with a visible focus ring.
- Colour contrast meets WCAG AA, including text on the blue gradient.
- Icon-only buttons have `aria-label`. Decorative elements have `aria-hidden`.
- Mobile menu traps focus and closes on `Esc`.
- SEO tags come from `site.seo`. Use the live domain for the OG image once deployed.

## 8. Responsive rules
- Mobile-first. Verify at 360, 768, 1024, 1440px.
- No horizontal page scroll at any width. Carousels scroll inside their own container.
- Touch targets at least 44×44px.

## 9. Workflow rules
- **Work on one section per task.** Do not touch other sections unless the task says so.
- Before coding, give a short plan (files to create or change). After coding, list what changed.
- Run `npm run build` and fix all TypeScript and lint errors before saying a task is done.
- Check the result in the browser at desktop and mobile widths and report any issues you find.
- If you need content, links, or assets that are not in the repo, **ask me**; do not guess.
- Do not refactor or restyle finished sections unless asked.
- Commit message format: `feat(section): short description` (e.g. `feat(hero): add gradient hero and headline reveal`).

## 10. Per-section "done" checklist
- [ ] Content comes from `site.ts`, unchanged
- [ ] Matches the reference's design language
- [ ] Looks correct at 360 / 768 / 1024 / 1440px
- [ ] Keyboard and screen-reader friendly
- [ ] Motion respects reduced-motion
- [ ] `npm run build` passes
- [ ] No lime colour, no lorem ipsum, no invented content

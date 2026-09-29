# techstack.md — ENIGMA Website Tech Stack

A single-page, static, animation-heavy club site. The stack is chosen to be fast to build with an AI agent, easy to deploy on Vercel, and light enough to hit the Lighthouse targets in `PRD.md`.

## 1. Summary

| Layer | Choice | Why |
|---|---|---|
| Build tool | **Vite** | Fast dev server and builds; no server features needed for one page |
| Framework | **React 18** | Component model fits the section-by-section build |
| Language | **TypeScript (strict)** | Enforces the content schema in `SCHEMA.md` |
| Styling | **Tailwind CSS** + CSS variables | Design tokens in one place; quick iteration |
| Animation | **Framer Motion** | Scroll reveals, text reveals, menu transitions |
| Smooth scroll | **Lenis** | Editorial scroll feel like the reference |
| Icons | **lucide-react** | Already used by the current site's style; tree-shakeable |
| Fonts | **Inter, Inter Tight, Instrument Serif** (Google Fonts) | Sans body and display plus the italic serif accent |
| Hosting | **Vercel** | Current site is already there; zero-config for Vite |
| Package manager | **npm** | Simple; matches the prompts in `rules.md` |

## 2. Core Dependencies

```bash
npm create vite@latest enigma-site -- --template react-ts
cd enigma-site
npm install framer-motion lenis lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

Tailwind is set up through the Vite plugin. Check the current Tailwind docs at install time, since setup steps differ between versions.

## 3. Dev Tooling

| Tool | Purpose |
|---|---|
| **ESLint** (typescript-eslint, react-hooks) | Catch bugs and unused code |
| **Prettier** + `prettier-plugin-tailwindcss` | Consistent formatting and class ordering |
| **TypeScript `strict: true`** | No implicit `any` |
| **Git + GitHub** | Version control; Vercel deploys from the repo |

Scripts expected in `package.json`:

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "lint": "eslint ."
}
```

## 4. Fonts

| Role | Font | Weights |
|---|---|---|
| Display headings | Inter Tight | 600, 700 |
| Body and UI | Inter | 400, 500, 600 |
| Accent word | Instrument Serif | Italic 400 |

Load with `<link rel="preconnect">` and a single Google Fonts request using `display=swap`. Give every font a fallback stack (`system-ui, sans-serif` / `Georgia, serif`).

## 5. Styling Approach
- Design tokens (colours, radii, fonts) are CSS variables in `src/styles/globals.css`, mapped into the Tailwind theme.
- Components use Tailwind utility classes; no CSS-in-JS.
- Hover and layout effects are done in CSS. JavaScript is used only for scroll state, the live clock, the menu and the carousel.

## 6. Animation Approach
- **Framer Motion:** entrance reveals (`whileInView`, run once), hero headline reveal, mobile menu, card hover.
- **Lenis:** global smooth scroll, and anchor navigation with a header offset.
- Animate `transform` and `opacity` only.
- All animation is gated by `useReducedMotion`.

## 7. Custom Hooks and Utilities

| Hook | Purpose |
|---|---|
| `useActiveSection` | IntersectionObserver that highlights the current nav link |
| `useLiveClock` | Live IST time in the header meta strip |
| `useReducedMotion` | Wraps Framer Motion's reduced-motion check |

## 8. Optional Add-ons (only if the content needs them)

| Need | Option |
|---|---|
| Contact/join form without a backend | **Formspree** or an embedded **Google Form** |
| Carousel drag behaviour | Framer Motion `drag="x"` (no extra library) |
| Analytics | **Vercel Analytics** (one line, privacy-friendly) |
| Image optimisation | Pre-compress to WebP/AVIF before adding to `public/` |

## 9. Deliberately Not Used

| Not used | Reason |
|---|---|
| Next.js | No SSR, routing or API needed for one static page |
| GSAP, Three.js, particle libraries | Heavy; would hurt performance and the Lighthouse score |
| Component kits (MUI, Chakra, Bootstrap) | Would fight the custom design; rules.md says build by hand |
| A database or CMS | Content lives in `src/content/site.ts` |
| localStorage-dependent features | Nothing on the page needs stored state |

## 10. Deployment
1. Push the repo to GitHub.
2. Import it into Vercel (framework preset: **Vite**, build command `npm run build`, output `dist`).
3. Set the production domain, then update `seo.ogImage` in `site.ts` to the final absolute URL.
4. Every push to `main` redeploys automatically; pull requests get preview URLs.

## 11. Browser and Performance Targets
- Support the latest two versions of Chrome, Edge, Safari and Firefox, plus iOS Safari and Android Chrome.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- Keep the JS bundle lean: import icons individually, lazy-load anything below the fold that is heavy, and avoid unused dependencies.

## 12. Version Policy
Use the latest stable versions of each package at install time, then commit `package-lock.json`. Do not upgrade major versions mid-project without asking.

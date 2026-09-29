# PRD — ENIGMA Club Website (Redesign)

## 1. Overview
ENIGMA is a student-led technical club. The current site (https://enigma-jain-fet.vercel.app/) uses a dark, neon-lime "hacker terminal" look. This project rebuilds it as a **single-page website** with a **completely new visual style** while keeping the **content the same**.

**Reference for new style:** the "Hubfolio" agency template (uploaded screenshot). We copy its *design language*, not its content.

## 2. Goals
1. One scrolling page, five anchored sections matching the existing nav.
2. Replace the neon-lime terminal aesthetic with the reference style: electric-blue gradient hero, white rounded panels, italic-serif accent words, pill buttons, large editorial type.
3. Keep every piece of existing copy (see §6). Never invent stats, names, events or testimonials.
4. Fast, responsive, accessible, deployable on Vercel.

## 3. Non-goals
- No multi-page routing, no blog, no CMS, no login.
- No pricing table, testimonials, or press sections from the reference (the club has no such content).
- No backend unless the Secure.con section needs a form (see §9).

## 4. Audience
- **Primary:** students of the college who might join the club.
- **Secondary:** faculty, event sponsors, other clubs.

## 5. Design Direction

### 5.1 Style summary (from reference)
- Hero: deep navy → electric-blue gradient that fades into white at the bottom edge.
- Big heading mixing **bold sans** with an *italic serif accent word* (e.g. "Solve the *Unknown.*").
- A **white rounded panel** overlaps the bottom of the hero and holds the next content.
- Below the hero, alternate between **white** sections and **near-black** sections.
- Rounded cards (24–32px radius), pill buttons, circular badges, thin 1px borders.
- Section titles use the pattern: `Section <italic-serif word>` with a small pill link on the right.
- Large typographic list with hover highlight (like the "Services" list: hovered row turns blue).
- Horizontal drag carousel with a circular "HOLD AND DRAG" cursor (like "Featured Works").
- Minimal footer with a wide contact block and social links.

### 5.2 Design tokens (approximate, tune while building)
| Token | Value |
|---|---|
| `--ink-950` (page bg) | `#050507` |
| `--ink-900` (raised surfaces, cards) | `#0C0C12` |
| `--ink-800` (hover surfaces, tiles) | `#15151F` |
| `--violet-950` (deep gradient start) | `#14092E` |
| `--violet-700` (gradient mid) | `#5B21B6` |
| `--violet-600` (filled highlight surfaces) | `#7C3AED` |
| `--violet-500` (primary accent, hover borders) | `#8B5CF6` |
| `--violet-400` (small accent text on dark) | `#A78BFA` |
| `--violet-300` (glow highlight) | `#C4B5FD` |
| `--yellow-400` (hit of yellow accent) | `#FFD60A` |
| `--text-primary` | `#FFFFFF` |
| `--text-muted` | `rgba(255, 255, 255, 0.62)` |
| `--text-faint` | `rgba(255, 255, 255, 0.40)` |
| `--line` | `rgba(167, 139, 250, 0.16)` |
| Display font | Inter Tight (600–700) |
| Accent font | Instrument Serif *italic* |
| Body font | Inter (400–500) |
| Radius | 12 / 24 / 32 px, pill = 999px |

Yellow is allowed only as described in the yellow rules (accent only, ~5% of visible color: primary CTA button, active nav dot, logo "z", status dots, and tiny details like the short line before eyebrows).

## 6. Information Architecture and Content

Nav labels are kept exactly as they are today.

### 6.1 Global header (fixed)
- Logo mark + wordmark **ENIGMA** (small "z" subscript as in current logo) + tag **SECTOR.ALPHA**.
- Centre/left meta strip (reference shows city + time): `LAT: 12.6381° N · LONG: 77.4406° E` plus live local time (IST). These coordinates come from the current site.
- Nav: `HOME.EXE` · `ABOUT.LOG` · `EVENTS.ARC` · `OPERATIVES.LST` · `SECURE.CON`
- Mobile: "Menu" pill opens a full-screen overlay.
- Active link highlights based on scroll position.
- Small floating help button (bottom-right) exists on the current site; keep as a round `?` button, restyled (opens a small popover — content TBD, see §9).

### 6.2 HOME.EXE — Hero
- Eyebrow: **TECHNICAL REBELLION**
- Headline: **SOLVE THE *UNKNOWN.***
- Paragraph: "We are a collective of developers, designers, and innovators unraveling the mysteries of technology through creative destruction."
- Buttons: **ACCESS SOCIALS** (primary, blue pill) and **JOIN NETWORK** (secondary, outlined pill).
- Footnote text kept: `V_ID: 0x88F2A`
- Background: blue gradient + soft grain; the faint giant "ENIGMA" watermark may stay as subtle outlined text.

### 6.3 ABOUT.LOG — About (white rounded panel overlapping hero)
- Eyebrow: **SECTOR.ORIGIN**
- Heading: **ABOUT *ENIGMA.***
- Lead: "ENIGMA is a collective of student innovators dedicated to technical excellence and creative destruction."
- Secondary: "[SYSTEM_MANIFESTO]: We believe in creating an environment where high-intensity technology meets radical creativity, empowering the next generation of builders."
- Four pillars (numbered 01–04):
  1. **TECH INNOVATION** — "Fostering creative solutions and cutting-edge technological advancement in a raw technical environment."
  2. **CORE COMMUNITY** — "Building a collaborative network of passionate tech enthusiasts and technical rebels."
  3. **MISSION EXCELLENCE** — "Striving for technical mastery and professional development through rigorous missions."
  4. **MISSION.LOG** (highlighted card, filled electric blue) — "To empower students with the knowledge and community needed to excel in technical innovation."
- Layout idea: heading + lead on the left, 2×2 rounded card grid on the right; on hover each card lifts and its icon inverts.

### 6.4 EVENTS.ARC — Events
- Horizontal drag carousel of large rounded cards (reference "Featured Works").
- Eyebrow: **EVENTS.ARC**
- Headline: **OUR *EVENTS.***
- Events: "the RACE FOR ROLES" (Auditions 2026), "JAIN’S GOT LATENT" (Event), "BLIND DATE" (Event).

### 6.5 OPERATIVES.LST — Team
**Content: NOT PROVIDED YET.** Layout: grid of rounded cards with circular avatar, name, role, and social icons. Optional "founders" strip with overlapping avatars as in the reference hero panel.

### 6.6 SECURE.CON — Contact / Join
**Content: NOT PROVIDED YET.** Layout: dark section, big "Join the *Network*" style heading, social links (from ACCESS SOCIALS), optional contact form, then footer.

### 6.7 Footer
- Logo, copyright, social links, back-to-top button. Text TBD.

## 7. Interactions and Motion
- Smooth scrolling (Lenis) with anchor navigation offset for the fixed header.
- Hero headline: line-by-line reveal on load; italic word fades in last.
- Sections: fade/translate-up on enter (once).
- Buttons: arrow slides on hover.
- Cards: subtle lift and border colour change on hover.
- Cursor: custom circular "drag" cursor only over carousels (desktop only).
- Respect `prefers-reduced-motion`: disable all non-essential animation.

## 8. Technical Requirements
- **Stack:** Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lenis + lucide-react.
- **Content lives in one file** (`src/content/site.ts`) following `SCHEMA.md`; components contain no hard-coded copy.
- Deploy on Vercel.
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- Responsive: 360px, 768px, 1024px, 1440px checked for every section.
- Keep the existing SEO meta (title, description, OG tags) and fix the OG image URL to the new deployed domain.
- Semantic HTML: one `<h1>`, sections with `id` matching nav anchors, visible focus states, AA colour contrast.

## 9. Open Questions (need answers before those sections are built)
1. Text/screenshots for **OPERATIVES.LST**, **SECURE.CON**, and the footer.
2. Social links (Instagram, LinkedIn, GitHub, Discord, WhatsApp?) for ACCESS SOCIALS.
3. Where does **JOIN NETWORK** go (Google Form, WhatsApp group, etc.)?
4. What does the help `?` button show today?
5. Logo file (SVG/PNG) and any team photos or mission images.
6. Should the contact form exist? If yes: Formspree/Google Forms embed vs. none.

## 10. Build Phases (one prompt each in Antigravity)
| Phase | Deliverable |
|---|---|
| 0 | Project setup, tokens, fonts, folder structure, content file, base layout |
| 1 | Header and mobile menu |
| 2 | Hero (HOME.EXE) |
| 3 | About panel (ABOUT.LOG) |
| 4 | Events (EVENTS.ARC) |
| 5 | Operatives (OPERATIVES.LST) |
| 6 | Secure.con and footer |
| 7 | Global motion, smooth scroll, help button |
| 8 | Responsive, accessibility, SEO, performance pass |
| 9 | Deploy to Vercel |

## 11. Definition of Done
- All copy in §6 present and unchanged.
- No lime colour, no leftover terminal-style UI.
- Every section matches the reference's design language on desktop and mobile.
- `npm run build` passes with no TypeScript or lint errors.
- Lighthouse targets met; deployed on Vercel.

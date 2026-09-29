# SCHEMA — Content and Data Model

The site is static. There is no database. The "schema" is the **typed content model** that every component reads from. This keeps copy separate from styling, so the design can change without touching the text.

- Types live in `src/content/types.ts`
- Data lives in `src/content/site.ts`
- Components import from `site.ts` only. **No hard-coded copy in components.**
- Anything marked `TODO` is content the club owner has not supplied yet. Do not invent it.

---

## 1. Types (`src/content/types.ts`)

```ts
export type NavId = "home" | "about" | "events" | "operatives" | "secure";

export interface NavItem {
  id: NavId;          // matches the <section id="...">
  label: string;      // e.g. "HOME.EXE"
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink extends Link {
  platform: "instagram" | "linkedin" | "github" | "discord" | "whatsapp" | "x" | "youtube" | "email";
}

export interface Brand {
  name: string;         // "ENIGMA"
  suffix?: string;      // "z" (subscript in logo)
  tag: string;          // "SECTOR.ALPHA"
  logoSrc: string;      // /logo.svg
}

export interface MetaStrip {
  lat: string;          // "12.6381° N"
  long: string;         // "77.4406° E"
  timezone: string;     // "Asia/Kolkata" (for the live clock)
  vId: string;          // "0x88F2A"
}

export interface Hero {
  eyebrow: string;
  headline: { plain: string; accent: string };   // accent is rendered in italic serif
  paragraph: string;
  primaryCta: Link;
  secondaryCta: Link;
}

export interface Pillar {
  index: string;        // "01"
  title: string;
  description: string;
  icon: "lightbulb" | "users" | "trophy" | "target";
  highlighted?: boolean; // filled electric-blue card
}

export interface About {
  eyebrow: string;
  headline: { plain: string; accent: string };
  lead: string;
  manifesto: string;
  pillars: Pillar[];    // exactly 4
}

export interface EventItem {
  id: string;
  title: string;
  type: string;            // e.g. "WORKSHOP"
  date: string;            // display string, e.g. "12 MAR 2025"
  venue?: string;
  image?: string;          // path under /events/
  status?: "upcoming" | "past";
  link?: Link;
}

export interface Operative {
  id: string;
  name: string;
  role: string;
  photo?: string;
  socials?: SocialLink[];
  group?: "core" | "lead" | "member";
}

export interface SecureCon {
  eyebrow?: string;
  headline: { plain: string; accent: string };
  description?: string;
  socials: SocialLink[];
  contactEmail?: string;
  form?: { enabled: boolean; action?: string };
}

export interface Footer {
  copyright: string;
  links: Link[];
}

export interface SeoMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterHandle: string;
  author: string;
}

export interface SiteContent {
  seo: SeoMeta;
  brand: Brand;
  meta: MetaStrip;
  nav: NavItem[];
  hero: Hero;
  about: About;
  events: { eyebrow: string; headline: { plain: string; accent: string }; items: EventItem[] };
  operatives: { eyebrow?: string; headline: { plain: string; accent: string }; items: Operative[] };
  secure: SecureCon;
  footer: Footer;
}
```

---

## 2. Data (`src/content/site.ts`)

Verified content from the current site is filled in. Everything else is `TODO`.

```ts
import type { SiteContent } from "./types";

export const site: SiteContent = {
  seo: {
    title: "ENIGMA - Unraveling Technology, Innovation & Creativity",
    description:
      "ENIGMA is a student-led tech club dedicated to fostering innovation, collaboration, and technical excellence among passionate students.",
    ogTitle: "ENIGMA - Student Tech Club",
    ogDescription: "Unraveling the mysteries of technology, innovation, and creativity",
    ogImage: "/og.png",             // TODO: replace with final image on the new domain
    twitterHandle: "@ENIGMA",
    author: "ENIGMA Club",
  },

  brand: { name: "ENIGMA", suffix: "z", tag: "SECTOR.ALPHA", logoSrc: "/logo.svg" }, // TODO: logo file

  meta: { lat: "12.6381° N", long: "77.4406° E", timezone: "Asia/Kolkata", vId: "0x88F2A" },

  nav: [
    { id: "home", label: "HOME.EXE" },
    { id: "about", label: "ABOUT.LOG" },
    { id: "events", label: "EVENTS.ARC" },
    { id: "operatives", label: "OPERATIVES.LST" },
    { id: "secure", label: "SECURE.CON" },
  ],

  hero: {
    eyebrow: "TECHNICAL REBELLION",
    headline: { plain: "SOLVE THE", accent: "UNKNOWN." },
    paragraph:
      "We are a collective of developers, designers, and innovators unraveling the mysteries of technology through creative destruction.",
    primaryCta: { label: "ACCESS SOCIALS", href: "#secure" },
    secondaryCta: { label: "JOIN NETWORK", href: "TODO" }, // TODO: join link
  },

  about: {
    eyebrow: "SECTOR.ORIGIN",
    headline: { plain: "ABOUT", accent: "ENIGMA." },
    lead: "ENIGMA is a collective of student innovators dedicated to technical excellence and creative destruction.",
    manifesto:
      "[SYSTEM_MANIFESTO]: We believe in creating an environment where high-intensity technology meets radical creativity, empowering the next generation of builders.",
    pillars: [
      {
        index: "01",
        title: "TECH INNOVATION",
        description:
          "Fostering creative solutions and cutting-edge technological advancement in a raw technical environment.",
        icon: "lightbulb",
      },
      {
        index: "02",
        title: "CORE COMMUNITY",
        description:
          "Building a collaborative network of passionate tech enthusiasts and technical rebels.",
        icon: "users",
      },
      {
        index: "03",
        title: "MISSION EXCELLENCE",
        description:
          "Striving for technical mastery and professional development through rigorous missions.",
        icon: "trophy",
      },
      {
        index: "04",
        title: "MISSION.LOG",
        description:
          "To empower students with the knowledge and community needed to excel in technical innovation.",
        icon: "target",
        highlighted: true,
      },
    ],
  },

  events: {
    eyebrow: "EVENTS.ARC",
    headline: { plain: "OUR", accent: "EVENTS." },
    items: [
      {
        id: "race-for-roles",
        title: "the RACE FOR ROLES",
        type: "Auditions 2026",
        date: "September 29, 2026",
        venue: "212",
        image: "/events/the-race-for-roles.jpg",
        status: "upcoming",
      },
      {
        id: "jains-got-latent",
        title: "JAIN’S GOT LATENT",
        type: "Event",
        date: "April 28, 2026",
        venue: "002",
        image: "/events/jains-got-latent.jpg",
        status: "past",
      },
      {
        id: "blind-date",
        title: "BLIND DATE",
        type: "Event",
        date: "March 17, 2026",
        venue: "002",
        image: "/events/blind-date.jpg",
        status: "past",
      },
    ],
  },

  operatives: {
    headline: { plain: "OPERATIVES", accent: "LST" }, // TODO: confirm heading from live site
    items: [], // TODO: content not provided
  },

  secure: {
    headline: { plain: "SECURE", accent: "CON" }, // TODO: confirm heading from live site
    socials: [], // TODO: social links
    form: { enabled: false },
  },

  footer: { copyright: "TODO", links: [] },
};
```

---

## 3. Component to Content Map

| Component | Reads from |
|---|---|
| `Header` | `brand`, `meta`, `nav` |
| `Hero` | `hero`, `meta.vId` |
| `About` | `about` |
| `Events` | `events` |
| `Operatives` | `operatives` |
| `SecureCon` | `secure` |
| `Footer` | `footer`, `brand`, `secure.socials` |
| `<head>` / SEO | `seo` |

## 4. Validation Rules
- `about.pillars.length === 4`, exactly one has `highlighted: true`.
- Every `nav[].id` must have a matching `<section id>` in the page.
- Any `href` equal to `"TODO"` must render a disabled button style and log a dev-only console warning.
- Empty arrays (`events.items`, `operatives.items`) render a tasteful "coming soon" card, never a blank gap.

## 5. Suggested Folder Structure

```
enigma-site/
├─ public/            logo.svg, og.png, favicon, events/
├─ src/
│  ├─ content/        types.ts, site.ts
│  ├─ components/
│  │  ├─ layout/      Header.tsx, MobileMenu.tsx, Footer.tsx, HelpButton.tsx
│  │  ├─ sections/    Hero.tsx, About.tsx, Events.tsx, Operatives.tsx, SecureCon.tsx
│  │  └─ ui/          Button.tsx, Pill.tsx, SectionTitle.tsx, Reveal.tsx, DragCursor.tsx, EventCard.tsx, CarouselControls.tsx
│  ├─ hooks/          useActiveSection.ts, useLiveClock.ts, useReducedMotion.ts, useDragScroll.ts
│  ├─ styles/         globals.css (tokens as CSS variables)
│  ├─ App.tsx
│  └─ main.tsx
├─ PRD.md
├─ SCHEMA.md
└─ rules.md
```

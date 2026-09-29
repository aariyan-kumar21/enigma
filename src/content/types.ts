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
  description?: string;
  photo?: string;
  socials?: SocialLink[];
  group?: "core" | "lead" | "member";
}

export interface ContactChannel {
  title: string;
  value: string;
  href: string;
  type: "email" | "phone" | "location";
}

export interface SecureCon {
  eyebrow?: string;
  headline: { plain: string; accent: string };
  description?: string;
  channels: ContactChannel[];
  socials: SocialLink[];
  contactEmail?: string;
  form?: { enabled: boolean; action?: string };
}

export interface Footer {
  tagline: string;
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
  operatives: { eyebrow: string; headline: { plain: string; accent: string }; description?: string; items: Operative[] };
  secure: SecureCon;
  footer: Footer;
}

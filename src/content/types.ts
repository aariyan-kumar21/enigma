export type NavId = "home" | "about" | "missions" | "operatives" | "secure";

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

export interface Mission {
  id: string;
  title: string;
  date?: string;
  category?: string;
  description: string;
  image?: string;
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
  missions: { eyebrow?: string; headline: { plain: string; accent: string }; items: Mission[] };
  operatives: { eyebrow?: string; headline: { plain: string; accent: string }; items: Operative[] };
  secure: SecureCon;
  footer: Footer;
}

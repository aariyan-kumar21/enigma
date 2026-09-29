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
    { id: "missions", label: "MISSIONS.ARC" },
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

  missions: {
    headline: { plain: "MISSIONS", accent: "ARC" }, // TODO: confirm heading from live site
    items: [], // TODO: content not provided
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

import type { SiteContent } from "./types";

export const site: SiteContent = {
  seo: {
    title: "ENIGMA - Unraveling Technology, Innovation & Creativity",
    description:
      "ENIGMA is a student-led tech club dedicated to fostering innovation, collaboration, and technical excellence among passionate students.",
    ogTitle: "ENIGMA - Student Tech Club",
    ogDescription: "Unraveling the mysteries of technology, innovation, and creativity",
    ogImage: "/og.png",
    twitterHandle: "@ENIGMA",
    author: "ENIGMA Club",
  },

  brand: { name: "ENIGMA", suffix: "z", tag: "SECTOR.ALPHA", logoSrc: "/enigma-logo.png" },

  meta: { lat: "12.6381° N", long: "77.4406° E", timezone: "Asia/Kolkata", vId: "0x88F2A" },

  nav: [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "events", label: "EVENTS" },
    { id: "operatives", label: "CORE TEAM" },
    { id: "secure", label: "CONTACT" },
  ],

  hero: {
    eyebrow: "TECHNICAL REBELLION",
    headline: { plain: "SOLVE THE", accent: "UNKNOWN." },
    paragraph:
      "A student-led collective building, experimenting, and deploying ideas that challenge the ordinary and create real-world impact.",
    primaryCta: { label: "Explore Enigma", href: "#about" },
    secondaryCta: { label: "Join Community", href: "https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS" },
  },

  about: {
    eyebrow: "01 / ABOUT",
    headline: { plain: "ABOUT", accent: "ENIGMA" },
    manifesto:
      "We build without limits. We question what exists, create what doesn’t, and empower the next generation of technical minds to make a real impact.",
    pillars: [
      {
        index: "01",
        title: "TECH INNOVATION",
        description:
          "Fostering creative solutions and cutting-edge technological advancement in a raw technical environment.",
      },
      {
        index: "02",
        title: "CORE COMMUNITY",
        description:
          "Building a collaborative network of passionate tech enthusiasts and technical rebels.",
      },
      {
        index: "03",
        title: "MISSION EXCELLENCE",
        description:
          "Striving for technical mastery and professional development through rigorous learning and real-world creation.",
      },
      {
        index: "04",
        title: "MISSION.LOG",
        description:
          "Empowering students with the knowledge and community needed to excel in technical innovation and create lasting impact.",
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
    eyebrow: "SECTOR.ROSTER",
    headline: { plain: "THE", accent: "CORE TEAM." },
    description: "The people shaping ENIGMA, driving its initiatives, and turning ideas into meaningful technical experiences.",
    items: [
      {
        id: "adrija",
        name: "Adrija",
        role: "President",
        description: "Leading ENIGMA towards technical rebellion, fostering innovation, and steering the community forward.",
        photo: "/leads/adrija.jpg",
        group: "lead",
        socials: [
          { platform: "email", label: "Email", href: "#" },
          { platform: "linkedin", label: "LinkedIn", href: "#" },
          { platform: "github", label: "GitHub", href: "#" },
        ],
      },
      {
        id: "srinjay",
        name: "Srinjay",
        role: "Vice President",
        description: "Driving operational excellence, coordinating initiatives, and empowering team execution.",
        photo: "/leads/srinjay.jpg",
        group: "lead",
        socials: [
          { platform: "email", label: "Email", href: "#" },
          { platform: "linkedin", label: "LinkedIn", href: "#" },
          { platform: "github", label: "GitHub", href: "#" },
        ],
      },
      {
        id: "hriddhima",
        name: "Hriddhima",
        role: "Secretary",
        description: "Managing organizational workflows, communications, and aligning club operations.",
        photo: "/leads/hriddhima.jpg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "#" },
          { platform: "linkedin", label: "LinkedIn", href: "#" },
          { platform: "github", label: "GitHub", href: "#" },
        ],
      },
      {
        id: "anchita",
        name: "Anchita",
        role: "Tech Lead",
        description: "Architecting technical builds, leading project development, and mentoring members in cutting-edge tech.",
        photo: "/leads/anchita.jpg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "#" },
          { platform: "linkedin", label: "LinkedIn", href: "#" },
          { platform: "github", label: "GitHub", href: "#" },
        ],
      },
      {
        id: "arpita",
        name: "Arpita",
        role: "Resource Lead",
        description: "Strategizing resource management, optimizing asset allocations, and powering club initiatives.",
        photo: "/leads/arpita.jpg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "#" },
          { platform: "linkedin", label: "LinkedIn", href: "#" },
          { platform: "github", label: "GitHub", href: "#" },
        ],
      },
      {
        id: "disha",
        name: "Disha",
        role: "Social Media Lead",
        description: "Crafting digital narratives, managing media outreach, and amplifying ENIGMA's voice.",
        photo: "/leads/disha.jpg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "#" },
          { platform: "linkedin", label: "LinkedIn", href: "#" },
          { platform: "github", label: "GitHub", href: "#" },
        ],
      },
      {
        id: "akshat",
        name: "Akshat",
        role: "Photography Lead",
        description: "Capturing moments, documenting visual stories, and immortalizing every milestone.",
        photo: "/leads/akshat.jpg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "#" },
          { platform: "linkedin", label: "LinkedIn", href: "#" },
          { platform: "github", label: "GitHub", href: "#" },
        ],
      },
    ],
  },

  secure: {
    eyebrow: "SECTOR.COMMUNICATIONS",
    headline: { plain: "SECURE", accent: "UPLINK." },
    description: "Establish a direct connection for technical inquiries or collaboration requests.",
    channels: [
      {
        title: "UPLINK.EMAIL",
        value: "enigmaclub5@gmail.com",
        href: "mailto:enigmaclub5@gmail.com",
        type: "email",
      },
      {
        title: "COMMS.DIRECT",
        value: "+91 96967 24664",
        href: "tel:+919696724664",
        type: "phone",
      },
      {
        title: "BASE.LOC",
        value: "JAIN (Deemed-to-be-University), Faculty of Engineering and Technology (FET), Bengaluru - Kanakapura Rd, Bengaluru, Karnataka 562112",
        href: "https://maps.app.goo.gl/ayCMZQEgqs1VRjXn9",
        type: "location",
      },
    ],
    socials: [
      {
        platform: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/ju_enigma/?hl=en",
        external: true,
      },
      {
        platform: "whatsapp",
        label: "WhatsApp",
        href: "https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS",
        external: true,
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/enigma-club-ju/posts/?feedView=all",
        external: true,
      },
    ],
    contactEmail: "enigmaclub5@gmail.com",
    form: { enabled: false },
  },

  footer: {
    tagline: "Sector.Alpha // Student-led collective dedicated to technical rebellion and innovative deployment.",
    copyright: "© 2026 // ENIGMA_COLLECTIVE // ALL_MISSIONS_RESERVED",
    links: [
      { label: "HOME", href: "#home" },
      { label: "ABOUT", href: "#about" },
      { label: "EVENTS", href: "#events" },
      { label: "CORE TEAM", href: "#operatives" },
      { label: "CONTACT", href: "#secure" },
    ],
  },
};

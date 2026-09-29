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
    { id: "operatives", label: "OPERATIVES" },
    { id: "secure", label: "SECURE" },
  ],

  hero: {
    eyebrow: "TECHNICAL REBELLION",
    headline: { plain: "SOLVE THE", accent: "UNKNOWN." },
    paragraph:
      "We are a collective of developers, designers, and innovators unraveling the mysteries of technology through creative destruction.",
    primaryCta: { label: "ACCESS SOCIALS", href: "#secure" },
    secondaryCta: { label: "JOIN NETWORK", href: "https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS" },
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
    eyebrow: "SECTOR.ROSTER",
    headline: { plain: "THE", accent: "OPERATIVES." },
    description: "CORE UNIT RESPONSIBLE FOR TECHNICAL REBELLION AND DEPLOYMENT OF INNOVATIVE SOLUTIONS.",
    items: [
      {
        id: "yamuna-sharma",
        name: "Yamuna Sharma D",
        role: "Lead",
        description: "Always drawn to art and creativity, i love finding stories in colors, design and the little details that often go unnoticed",
        photo: "/leads/lead.jpeg",
        group: "lead",
        socials: [
          { platform: "email", label: "Email", href: "mailto:yamusharma529@gmail.com" },
          { platform: "linkedin", label: "LinkedIn", href: "http://linkedin.com/in/yamuna-sharma-192a2029b", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/yamunasharma24", external: true },
        ],
      },
      {
        id: "kshitij-sharma",
        name: "Kshitij Sharma",
        role: "Co-Lead",
        description: "A curious jack of all trades who loves learning, building, and exploring new skills across domains.",
        photo: "/leads/colead.jpg",
        group: "lead",
        socials: [
          { platform: "email", label: "Email", href: "mailto:kshitijsharma.765@gmail.com" },
          { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/kshitijjj", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/kshxiscool", external: true },
        ],
      },
      {
        id: "krishal-karna",
        name: "Krishal Karna",
        role: "Technical Lead",
        description: "Turning data into decisions — one model at a time.",
        photo: "/leads/tech.jpeg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "mailto:karnakreeshal@gmail.com" },
          { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/krishalkarna/", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/kreeshal17", external: true },
        ],
      },
      {
        id: "shaili-srivastava",
        name: "Shaili Srivastava",
        role: "Operation Lead",
        description: "Passionate about technology and problem-solving. I love building efficient systems, optimizing workflows, and constantly learning new stuff to stay ahead.",
        photo: "/leads/operation.jpeg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "mailto:23btrcn026@jainuniversity.ac.in" },
          { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/shaili-srivastava0908/", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/ShailiSrivastava", external: true },
        ],
      },
      {
        id: "aakash-agarwal",
        name: "Aakash Agarwal",
        role: "Resource Lead",
        description: "Passionate technologist solving real-world challenges",
        photo: "/leads/resource.jpeg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "mailto:aakashrkl603@gmail.com" },
          { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/aakashagarwal1609/", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/AaKaShAgArWaLs", external: true },
        ],
      },
      {
        id: "ayadee-aphiwatamorn",
        name: "Ayadee Aphiwatamorn",
        role: "Creative Lead",
        description: "Creativity isn’t just what i do…it’s how i see the world. i love turning ideas into something visual, meaningful and uniquely mine",
        photo: "/leads/creative.jpeg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "mailto:ayadee.aphiwatamorn@gmail.com" },
          { platform: "linkedin", label: "LinkedIn", href: "http://linkedin.com/in/ayadee-aphiwatamorn1878", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/AyadeeAphiwatamorn", external: true },
        ],
      },
      {
        id: "suyog-lal-shrestha",
        name: "Suyog Lal Shrestha",
        role: "Photography Lead",
        description: "Eager and enthusiastic about exploring new things.",
        photo: "/leads/photography.jpeg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "mailto:sathyac2004@gmail.com" },
          { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/", external: true },
        ],
      },
      {
        id: "sworaj-khadka",
        name: "Sworaj Khadka",
        role: "Social Media Lead",
        description: "Crafting our digital presence and keeping the community engaged one post at a time.",
        photo: "/leads/social.jpg",
        group: "core",
        socials: [
          { platform: "email", label: "Email", href: "mailto:sworajkhadka21@gmail.com" },
          { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sworaj-khadka-071a20349", external: true },
          { platform: "github", label: "GitHub", href: "https://github.com/SworajKhadka", external: true },
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
      { label: "OPERATIVES", href: "#operatives" },
    ],
  },
};

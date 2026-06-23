export const siteConfig = {
  name: "Klaus W",
  title: "Product Designer & Developer",
  tagline:
    "I design thoughtful interfaces and build them with a token-driven system — balancing craft, accessibility, and performance.",
  email: "klos.w@gmail.com",
  location: "Melbourne, Australia",

  social: {
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  },

  resume: {
    filename: "resume.pdf",
    year: "2024",
    note: "One page. Updated October 2024.",
    downloadHref: "#",
  },

  site: {
    title: "Klaus W — Portfolio",
    description:
      "Product designer and developer crafting thoughtful interfaces with a token-driven system.",
    url: "https://klausw.dev",
  },

  hero: {
    eyebrow: "Product Designer · Melbourne",
    nameLine1: "Klaus",
    nameLine2: "W",
    role: "Designing with intention & care",
    description:
      "I shape digital experiences that feel considered and alive — grounded in systems thinking, sensitive to the humans who use them.",
    stampLines: [
      "Cercis siliquastrum",
      "Specimen No. 042",
      "Cyanotype · 2024",
    ],
    sectionNumber: "01",
    primaryCta: { label: "View Work", href: "#featured" },
    secondaryCta: { label: "About Me", href: "#about" },
  },
} as const;

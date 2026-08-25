export const siteConfig = {
  name: "Klaus W",
  title: "Product Designer",
  tagline:
    "Product designer in Melbourne who designs and builds — from research and design through to production code.",
  email: "klos.wasa@gmail.com",
  location: "Melbourne, Australia",

  social: {
    github: "https://github.com/kloswasa",
    linkedin: "https://www.linkedin.com/in/klos-wasanapitanon-308a73125/",
  },

  resume: {
    filename: "CV.pdf",
    year: "2026",
    note: "Two pages. Updated August 2026.",
    downloadHref: "https://drive.google.com/file/d/1TWpFRBbxt3xLgA1z6vX0ujAHOse0lwi7/view?usp=sharing",
  },

  site: {
    title: "Klaus W. — Portfolio",
    description:
      "Klaus W. — product designer in Melbourne who designs and builds, from research, design through to production code.",
    url: "https://klausw.com/",
  },

  hero: {
    eyebrow: "Product Designer · Melbourne",
    nameLine1: "Klaus",
    nameLine2: "W.",
    role: "Designing and building with care",
    description:
      "From research and design through to production code. Research decides what ships; craft and engineering keep it holding together.",
    sectionNumber: "01",
    primaryCta: { label: "View Work", href: "#featured" },
    secondaryCta: { label: "About Me", href: "#about" },
  },
} as const;

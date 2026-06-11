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

  about: {
    experience: "8 years",
    storyIntro:
      "I'm a designer and creative technologist working out of Melbourne. Eight years across small studios and large platforms — currently independent, quietly available for product, editorial, and creative-code work.",
    bio: [
      "Multidisciplinary Product Designer focused on the intersection of intuitive UX and refined aesthetics. Drawing on agency and independent experience, I deliver high-impact work with a focus on efficiency and technical feasibility.",
      " I am a dedicated investigator of user behaviour, using research to drive design decisions, and a flexible collaborator who bridges the languages of design and engineering to ensure every product remains high-quality and user-focused.",
    ],
    shortHeading: "I make small, considered tools.",
    shortDescription:
      "Eight years designing for small studios and large platforms. Currently independent — quietly available for product work, editorial, and the occasional creative-code commission.",
    availabilityHeading: "Open to product design contracts.",
    availabilityDescription:
      "Two-week minimums. Melbourne / remote. Email is the best way.",
    skills: [
      "Product design",
      "Identity",
      "Type",
      "Creative code",
      "WebGL",
      "Print",
      "Branding",
    ],
    tools: ["Figma", "React", "Three.js", "p5.js", "InDesign",],
    hobby: ["Woodworking", "Gardening", "Hiking", "Photography", "Traveling", "Reading", "Writing",],
    contactBlurb: "A few sentences is plenty. I usually reply within a day or two.",
    metaDescription: "Bio, skills, and resume.",
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

/** Editorial page copy — types live in `src/lib/about/types.ts`. */
import { siteConfig } from "@/src/lib/config";
import type {
  AboutBlock,

  AboutEndCopy,
  AboutHeroMeta,
  AboutHomeTeaser,
  AboutInstrumentGroup,
  AboutQuote,
  AboutStory,
  AboutTimelineAction,
  AboutTimelineEntry,
} from "@/src/lib/about/types";

export const ABOUT_HERO_META: AboutHeroMeta = {
  watermark: "\u2018 About \u2019",
  eyebrow: "ABOUT \u00b7 THE DESIGNER BEHIND THE ARCHIVE",
  titleLine1: "Klaus",
  titleLine2: "W.",
  description:
    "Melbourne-based product designer, from research to production code.\nFocused on underlying structure and the people it serves.",
  stats: [
    { label: "Status", value: "Open to work" },
    { label: "Based in", value: "Melbourne" },
    { label: "Practising since", value: "2019" },
    { label: "Works in", value: "Design \u00b7 Code" },
  ],
  contacts: [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      variant: "primary",
    },
    {
      label: "CV",
      value: "Download CV",
      href: siteConfig.resume.downloadHref,
      variant: "accent",
      download: siteConfig.resume.filename,
    },
  ],
  contactHeading: "Contact",
  socials: [
    {
      label: "GitHub",
      href: siteConfig.social.github,
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
      icon: "linkedin",
    },
  ],
};

export const ABOUT_STORY_BLOCK: AboutBlock = {
  kicker: "  01",
  title: "In brief",
  infoStrong: "The short version",
  infoDetail: "Who, and how I got here",
};

export const ABOUT_STORY: AboutStory = {
  portrait: {
    image: {
      src: "/images/about/portrait-resize.webp",
      alt: "Portrait of Klaus W.",
    },
    label: "SPECIMEN \u2014 K.W.\nCyanotype \u00b7 2024\nPressed, Melbourne",
    stampValue: "Est.",
    stampLabel: "2019",
  },
  lead: [
    "I design with",
    { em: " care" },
    ", then build what I create, so it carries from design to code.",
  ],
  
  paragraphs: [
    "I came to product through visual and physical crafts: type, grid, form, material, the structure beneath surfaces, and a habit of looking closely. That training never really left. It is still how I read an interface, and how I keep the person on the other side of the screen in view.",
    "Agency and independent practice taught me to ship under real constraint. I use research to decide what gets built, not only how it looks, and I work in both design and engineering so that care survives the handoff.",
  ],
  signature: "\u2014 Klaus",
};


export const ABOUT_TIMELINE_BLOCK: AboutBlock = {
  kicker: "  03",
  title: "Experience record",
  infoStrong: "The path",
  infoDetail: "Newest first \u00b7 full CV below",
};

export const ABOUT_TIMELINE_ACTION: AboutTimelineAction = {
  label: "Download CV \u2193",
  href: siteConfig.resume.downloadHref,
  download: siteConfig.resume.filename,
};

export const ABOUT_TIMELINE: AboutTimelineEntry[] = [
  {
    year: "2025\u20132026",
    role: "Product Designer",
    place: "Vision Verse · Remote (Sydney) · Contract",
    note: "Took a quiz game from research to production including illustration, interface, and front-end code working as one. Shipped to a custom domain within two weeks.",
    tag: "Finished \u00b7 <6 mo",
  },
  {
    year: "2026",
    role: "Productathon — First runner-up",
    place: "Capricorn Tech Connect · Physical AI in Sports",
    note: "Two weeks to build the physical device for a muscle-sensing climbing wearable, in a team of five. First runner-up among 14 teams, with a $2,000 prize.",
    tag: "Award",
  },
  {
    year: "2025",
    role: "Industry Hackathon — Winner",
    place: "Swinburne University x Practera x VirtualCC · Melbourne",
    note: "16 hours to reframe a brief: a 50+ year olds workforce and an underserved patient group, paired by shared experience rather than shared roof. First place among 8 teams.",
    tag: "Award",
  },
  {
    year: "2022\u20132024",
    role: "Freelance Designer",
    place: "Self-employed",
    note:  "2D and 3D work across multiple design fields as a multidisciplinary designer. Research-led design that found the line between what a brand wanted to say and what its market actually needed to hear."
    ,
    tag: "2.5 yrs",
  },
  {
    year: "2019\u20132022",
    role: "Multidisciplinary Designer",
    place: "Yindee Design Co. · Bangkok",
    note: "Sketched, prototyped, and shipped across graphic, packaging, booth, and product work. Learned to read a client's hesitation and answer it with material, not just opinion.",
    tag: "2.5 yrs",
  },
];

export const ABOUT_EDUCATION_BLOCK: AboutBlock = {
  kicker: "  04",
  title: "Study",
  infoStrong: "Education",
  infoDetail: "Degrees and specialisations",
};

export const ABOUT_EDUCATION: AboutTimelineEntry[] = [
  {
    role: "Master of Information Technology",
    specialisation: "Software Development specialisation",
    university: "Swinburne University · Melbourne",
  },
  {
    role: "Bachelor of Decorative Art (Design)",
    specialisation: "Product Design specialisation",
    university: "Silpakorn University · Bangkok",
  },
];

export const ABOUT_INSTRUMENTS_BLOCK: AboutBlock = {
  kicker: "  02",
  title: "Skills",
  infoStrong: "Curated, not exhaustive",
  infoDetail: "How the work gets made",
};

export const ABOUT_INSTRUMENTS: AboutInstrumentGroup[] = [
  {
    label: "Practice",
    tags: [
      { label: "User research"},
      { label: "Prototyping"},
      { label: "Usability testing" },
      { label: "Accessibility" },
      { label: "Design systems" },
      { label: "Interaction design" },
      { label: "Information architecture" },
      { label: "Industrial design" },
      { label: "Packaging design" },
      { label: "Illustration" },
    ],
  },
  {
    label: "Tools",
    tags: [
      { label: "Figma"},
      { label: "Figma Variables" },
      { label: "Procreate" },
      { label: "CAD" },
      { label: "3D printing" },
      { label: "3D rendering" },
      { label: "React" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "Framer Motion" },
      { label: "Prisma" },
      { label: "GitHub" },
      { label: "Adobe Creative Suite" },
      { label: "Illustrator" },
      { label: "Photoshop" },
      { label: "InDesign" },
      { label: "Premiere Pro" },
      { label: "After Effects" },
    ],
  },
  {
    label: "Off the clock",
    tags: [
      { label: "Hiking" },
      { label: "Reading" },
      { label: "Cooking" },
      { label: "Meditation" },
    ],
  },
];

const practiceSkills =
  ABOUT_INSTRUMENTS.find((group) => group.label === "Practice")?.tags.map(
    (tag) => tag.label,
  ) ?? [];

/** Home `#about` section — derived from the full about record where possible. */
export const ABOUT_HOME_TEASER: AboutHomeTeaser = {
  shortHeading: "I make small, considered products.",
  storyIntro:
    "Melbourne-based product designer, from research to production code. Research decides what ships; craft keeps it working for the people who use it.",
  skills: practiceSkills,
  statusLabel: "Open to work. Melbourne / remote. ",
  availabilityHeading: "Open to product designers and related roles.",
  availabilityDescription:
    "Email is the best way to reach me.",
  experience: "Design + Build",
};

export const ABOUT_QUOTE: AboutQuote = {
  watermark: "Look twice",
  quote:
    "\u201cI learned to design by learning to look, carefully, and twice. Everything else followed from that.\u201d",
  source: "On the practice \u00b7 2024",
};



export const ABOUT_END_COPY: AboutEndCopy = {
  kicker: "The end of the record",
  titleLead: "If any of this resonates,",
  titleAccent: "let\u2019s make something.",
  actions: [
    { label: "Get in touch \u2192", href: `mailto:${siteConfig.email}`, variant: "primary" },
    { label: "See the work", href: "/work", variant: "outline" },
    {
      label: "Download CV \u2193",
      href: siteConfig.resume.downloadHref,
      variant: "accent",
      download: siteConfig.resume.filename,
    },
  ],
};

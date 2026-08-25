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
  AboutTimelineEntry,
} from "@/src/lib/about/types";

export const ABOUT_HERO_META: AboutHeroMeta = {
  watermark: "\u2018 About \u2019",
  eyebrow: "ABOUT \u00b7 THE DESIGNER BEHIND THE ARCHIVE",
  titleLine1: "Klaus",
  titleLine2: "W.",
  description:
    "A product designer in Melbourne who designs and builds from research and design through to production code.\nDrawn to the structure beneath an interface, and the person on the other side of the screen.",
  stats: [
    { label: "Based in", value: "Melbourne" },
    { label: "Practising since", value: "2019" },
    { label: "Works in", value: "Design \u00b7 Code" },
    { label: "Status", value: "Open to work" },
  ],
};

export const ABOUT_STORY_BLOCK: AboutBlock = {
  kicker: "\u00a7 01",
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
    { em: " attention" },
    ", then build what I create, so the care carries from design to code.",
  ],
  
  paragraphs: [
    "I came to product through visual craft: type, grid, the structure beneath surfaces, and a habit of looking closely. That training never really left. It is still how I read an interface, and how I keep the person on the other side of the screen in view.",
    "Agency and independent practice taught me to ship under real constraint. I use research to decide what gets built, not only how it looks, and I work in both design and engineering so that care survives the handoff.",
  ],
  signature: "\u2014 Klaus",
};


export const ABOUT_TIMELINE_BLOCK: AboutBlock = {
  kicker: "\u00a7 03",
  title: "A field record",
  infoStrong: "The path",
  infoDetail: "Newest first \u00b7 full CV on request",
};

export const ABOUT_TIMELINE: AboutTimelineEntry[] = [
  {
    year: "2025-2026",
    role: "Product Designer",
    place: "Vision Verse · Remote (Sydney)",
    note: "Took a quiz game from research to production including illustration, interface, and front-end code working as one. Shipped to a custom domain within two weeks.",
    tag: "Present",
  },
  {
    year: "2025",
    role: "Industry Hackathon — Winner",
    place: "Swinburne University x Practera x VirtualCC · Melbourne",
    note: "16 hours to reframe a brief: a 50+ year olds workforce and an underserved patient group, paired by shared experience rather than shared roof. First place among 8 teams.",
    tag: "Award",
  },
  {
    year: "2022-2024",
    role: "Freelance Designer",
    place: "Self-employed",
    note:  "2D and 3D work across multiple design fields as a multidisciplinarian. Research-led design that found the line between what a brand wanted to say and what its market actually needed to hear."
    ,
    tag: "2.5 yrs",
  },
  {
    year: "2019-2022",
    role: "Multidisciplinary Designer",
    place: "Yindee Design Co. · Bangkok",
    note: "Sketched, prototyped, and shipped including graphic, packaging, booths, products. Learned to read a client's hesitation and answer it with material, not just opinion.",
    tag: "2.5 yrs",
  },
];

export const ABOUT_EDUCATION_BLOCK: AboutBlock = {
  kicker: "\u00a7 04",
  title: "Formal study",
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
  kicker: "\u00a7 02",
  title: "Instruments",
  infoStrong: "Curated, not exhaustive",
  infoDetail: "How the work gets made",
};

export const ABOUT_INSTRUMENTS: AboutInstrumentGroup[] = [
  {
    label: "Practice",
    tags: [
      { label: "Product strategy", key: true },
      { label: "Design systems", key: true },
      { label: "User research" },
      { label: "Interaction design" },
      { label: "Information architecture" },
      { label: "Prototyping" },
      { label: "Accessibility" },
      { label: "User-centered design" },
    ],
  },
  {
    label: "Tools",
    tags: [
      { label: "Figma", key: true },
      { label: "Figma Variables" },
      { label: "Tokens Studio" },
      { label: "Procreate" },
      { label: "HTML / CSS / JS" },
      { label: "React" },
      { label: "Next.js" },
      { label: "Tailwind CSS" },
      { label: "TypeScript" },
      { label: "Prisma" },
      { label: "GitHub" },

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
  shortHeading: "I make small, considered tools.",
  storyIntro:
    "I'm a product designer in Melbourne who designs and builds — from research and Figma through to production code. Research decides what ships; craft and engineering keep it holding together for the person on the other side of the screen.",
  skills: practiceSkills,
  statusLabel: "Open to work",
  availabilityHeading: "Open to product related roles.",
  availabilityDescription:
    "Melbourne / remote. Email is the best way to reach me.",
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
      label: "Download Resume \u2193",
      href: siteConfig.resume.downloadHref,
      variant: "accent",
    },
  ],
};

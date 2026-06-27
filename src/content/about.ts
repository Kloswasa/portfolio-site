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
    "A product designer in Melbourne who designs and builds — drawn to the structure beneath an interface, and to the person on the other side of the screen.",
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
    ", then build what created, so the care have been weaved from Figma to code.",
  ],
  paragraphs: [
    "I came to product design through visual craft including type, grid, the structure beneath surfaces, and a habit of looking closely. That training never really left.",
    "I work across design and code, what I created in Figma, can be built in a development environment. I amm after both the precision of a well-built system and the warmth of something made by someone who cares who's on the other side of the screen.",
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
    place: "Company Verse · Remote (Sydney)",
    note: "Took a quiz game from research to production — illustration, interface, and front-end code working as one. Shipped to a custom domain within two weeks.",
    tag: "Present",
  },
  {
    year: "2025",
    role: "Industry Hackathon — Winner",
    place: "Swinburne University x Practera x VirtualCC · Melbourne",
    note: "16 hours to reframe a brief: an underemployed workforce and an underserved patient group, paired by shared experience rather than shared roof. First place among 8 teams.",
    tag: "Award",
  },
  {
    year: "2022-2023",
    role: "Freelance Designer",
    place: "Self-employed",
    note:  "2D and 3D work across packaging, products, booths, and social media — research-led design that found the line between what a brand wanted to say and what its market actually needed to hear."
    ,
    tag: "2.5 yrs",
  },
  {
    year: "2019-2022",
    role: "Multidisciplinary Designer",
    place: "Yindee Design Co. · Bangkok",
    note: "Sketched, prototyped, and shipped — packaging, booths, products. Learned to read a client's hesitation and answer it with material, not just opinion.",
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
    year: "2024-2025",
    role: "Master of Information Technology",
    place: "Swinburne University · Melbourne",
    note: "Specialised in software development — the deliberate decision to learn the other half of the craft, so design ideas would never have to wait for someone else to build them.",
    tag: "2 yrs",
  },
  {
    year: "2015",
    role: "Bachelor of Decorative Art (Design)",
    place: "Silpakorn University · Bangkok",
    note: "Where the eye for form and the instinct for storytelling first met — the roots of everything that came after.",
    tag: "4 yrs",
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
    ],
  },
  {
    label: "Tools",
    tags: [
      { label: "Figma", key: true },
      { label: "Figma Variables" },
      { label: "HTML / CSS / JS" },
      { label: "React" },
      { label: "Three.js" },
      { label: "Tokens Studio" },
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
    "I'm a product designer and creative technologist in Melbourne who designs and builds \u2014 what I design in Figma can be ship in React. I work across product, editorial, and creative-code.",
  skills: practiceSkills,
  statusLabel: "Open to work",
  availabilityHeading: "Open to product design roles.",
  availabilityDescription:
    "Melbourne / remote. Email is the best way to reach me.",
  experience: "Design + Build",
};



export const ABOUT_QUOTE: AboutQuote = {
  watermark: "Look twice",
  quote:
    "\u201cI learned to design by learning to look \u2014 slowly, and twice. Everything else followed from that.\u201d",
  source: "On the practice \u00b7 2024",
};



export const ABOUT_END_COPY: AboutEndCopy = {
  kicker: "The end of the record",
  titleLead: "If any of this resonates,",
  titleAccent: "let\u2019s make something.",
  actions: [
    { label: "Get in touch \u2192", href: `mailto:${siteConfig.email}`, variant: "primary" },
    { label: "See the work", href: "/work", variant: "ghost" },
    {
      label: "Download CV \u2193",
      href: siteConfig.resume.downloadHref,
      variant: "ghost",
    },
  ],
};

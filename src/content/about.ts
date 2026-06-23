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
    "A product designer and creative technologist in Melbourne who came to software the long way round \u2014 and never quite shed the habits of close looking, careful naming, and pressing things flat to understand them.",
  stats: [
    { label: "Based in", value: "Melbourne" },
    { label: "Practising since", value: "2017" },
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
    label: "SPECIMEN \u2014 K.W.\nCyanotype \u00b7 2024\nPressed, Melbourne",
    stampValue: "Est.",
    stampLabel: "2017",
  },
  lead: [
    "I design the way I once ",
    { em: "pressed flowers" },
    " \u2014 slowly, with attention, trying to keep the living thing legible once it\u2019s flattened onto a page.",
  ],
  paragraphs: [
    "Before design there was a long apprenticeship in looking closely at type, at grid, at the structure beneath surfaces. I spent years learning to name what I saw precisely, and to notice the architecture hiding in plain sight. That training never really left.",
    "It shows up now in a fascination with how digital products are structured beneath their interfaces, and in a habit of studying the people who use them as carefully as I once studied a specimen. Eight years in across health, finance, analytics, education and creative tools \u2014 the throughline has never been an industry. It\u2019s a sensibility.",
    "I believe the most considered work holds two things in tension at once: the cool precision of a system that\u2019s genuinely well-built, and the warmth of something made by a person who cares about whoever is on the other side of the screen.",
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
    year: "2024",
    role: "Independent Product Designer",
    place: "Studio practice \u00b7 Melbourne",
    note: "Leading design-systems and complex product work across health, finance, and creative tools. Mentoring, governance, and the quiet infrastructure that lets teams move fast without fracturing.",
    tag: "Present",
  },
  {
    year: "2021",
    role: "Senior Product Designer",
    place: "Platform team \u00b7 Remote",
    note: "Built the design system that unified several merged codebases, and shaped sensitive flows for a product used by millions.",
    tag: "3 yrs",
  },
  {
    year: "2019",
    role: "Product Designer",
    place: "Analytics & finance \u00b7 Melbourne",
    note: "Cut my teeth on dense, high-stakes tools \u2014 learning to make complex information feel calm and navigable.",
    tag: "2 yrs",
  },
  {
    year: "2017",
    role: "Crossed over into design",
    place: "Self-directed \u00b7 Melbourne",
    note: "Traded one craft for another, but kept the magnifying glass and the habit of looking twice.",
    tag: "Pivot",
  },
  {
    year: "2016",
    role: "Visual communication",
    place: "University studies \u00b7 Melbourne",
    note: "Typography, grid systems, and scientific illustration \u2014 where I first fell for cyanotypes and the discipline of precise observation.",
    tag: "Roots",
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
      { label: "Cyanotype printing" },
      { label: "SVG illustration" },
      { label: "Generative sketches" },
      { label: "Woodworking" },
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
    "I'm a designer and creative technologist working out of Melbourne. Eight years across small studios and large platforms — currently independent, quietly available for product, editorial, and creative-code work.",
  skills: practiceSkills,
  statusLabel: "Open to work",
  availabilityHeading: "Open to product design contracts.",
  availabilityDescription:
    "Two-week minimums. Melbourne / remote. Email is the best way.",
  experience: "8 years",
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

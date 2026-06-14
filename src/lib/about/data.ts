import { siteConfig } from "@/src/lib/config";
import type {
  AboutBlock,
  AboutCurrentlyColumn,
  AboutEndCopy,
  AboutHeroMeta,
  AboutInstrumentGroup,
  AboutPrinciple,
  AboutQuote,
  AboutSpecimen,
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
    "Before design there was a long apprenticeship in looking closely \u2014 at type, at grid, at the structure beneath surfaces. I spent years learning to name what I saw precisely, and to notice the architecture hiding in plain sight. That training never really left.",
    "It shows up now in a fascination with how digital products are structured beneath their interfaces, and in a habit of studying the people who use them as carefully as I once studied a specimen. Eight years in \u2014 across health, finance, analytics, education and creative tools \u2014 the throughline has never been an industry. It\u2019s a sensibility.",
    "I believe the most considered work holds two things in tension at once: the cool precision of a system that\u2019s genuinely well-built, and the warmth of something made by a person who cares about whoever is on the other side of the screen.",
  ],
  signature: "\u2014 Klaus",
};

export const ABOUT_PRINCIPLES_BLOCK: AboutBlock = {
  kicker: "\u00a7 02",
  title: "What I believe",
  infoStrong: "Four principles",
  infoDetail: "The practice, distilled",
};

export const ABOUT_PRINCIPLES: AboutPrinciple[] = [
  {
    num: "1.",
    term: ["Observe before solving"],
    body: "Research is a posture, not a phase. I stay close to people, attend to the edge cases, and resist the urge to reach for an answer before I actually understand the question.",
  },
  {
    num: "2.",
    term: ["Structure ", { em: "and" }, " feeling"],
    body: "A system can be rigorous and still be kind. The architecture should be sound; the surface should feel like it was made by a human who cared. Neither alone is enough.",
  },
  {
    num: "3.",
    term: ["Restraint is a decision"],
    body: "The urge to add is powerful; the discipline to remove is rare. Most of my best work is what I chose to leave out \u2014 and learning to tell what\u2019s missing from what\u2019s simply quiet.",
  },
  {
    num: "4.",
    term: ["Ship, then steward"],
    body: "Launch is the beginning, not the end. I stay involved through implementation and care about what happens to a thing after it\u2019s out in the world as much as before.",
  },
];

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
  kicker: "\u00a7 04",
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

export const ABOUT_SPECIMENS_BLOCK: AboutBlock = {
  kicker: "\u00a7 05",
  title: "Specimens collected",
  infoStrong: "Influences",
  infoDetail: "Where the eye was trained",
};

export const ABOUT_SPECIMENS: AboutSpecimen[] = [
  {
    no: "\u2116 01",
    name: "Anna Atkins",
    desc: "The cyanotype mother. Where this whole palette begins.",
    art: "cyanotype",
  },
  {
    no: "\u2116 02",
    name: "Botanical engraving",
    desc: "Haeckel & Redout\u00e9 \u2014 warmth and precision at once.",
    art: "engraving",
  },
  {
    no: "\u2116 03",
    name: "Risograph",
    desc: "Grain, misregistration, the hand left visible.",
    art: "riso",
  },
  {
    no: "\u2116 04",
    name: "Celestial atlases",
    desc: "Old star maps. Wonder, drawn precisely.",
    art: "celestial",
  },
  {
    no: "\u2116 05",
    name: "Japanese indigo",
    desc: "Aizome \u2014 blue as craft, not just colour.",
    art: "indigo",
  },
  {
    no: "\u2116 06",
    name: "New editorial serifs",
    desc: "Garamond\u2019s living descendants. The voice of the type.",
    art: "ampersand",
  },
];

export const ABOUT_QUOTE: AboutQuote = {
  watermark: "Look twice",
  quote:
    "\u201cI learned to design by learning to look \u2014 slowly, and twice. Everything else followed from that.\u201d",
  source: "On the practice \u00b7 2024",
};

export const ABOUT_CURRENTLY_BLOCK: AboutBlock = {
  kicker: "\u00a7 06",
  title: "Currently",
  infoStrong: "Field notes",
  infoDetail: "What\u2019s in rotation",
};

export const ABOUT_CURRENTLY: AboutCurrentlyColumn[] = [
  {
    label: "Reading",
    items: [
      [{ em: "The Nature of Order" }, " \u2014 Christopher Alexander"],
      ["Back issues of herbarium field guides"],
    ],
  },
  {
    label: "Listening",
    items: [
      ["Ambient & modern classical, mostly"],
      [{ em: "Hania Rani" }, " on repeat in the studio"],
    ],
  },
  {
    label: "Looking at",
    items: [
      ["Digitised cyanotype archives"],
      ["Risograph zines & specimen plates"],
    ],
  },
];

export const ABOUT_END_COPY: AboutEndCopy = {
  kicker: "The end of the record",
  titleLead: "If any of this resonates,",
  titleAccent: "let\u2019s make something.",
  actions: [
    { label: "Get in touch \u2192", href: `mailto:${siteConfig.email}`, variant: "solid" },
    { label: "See the work", href: "/gallery", variant: "ghost" },
    {
      label: "Download CV \u2193",
      href: siteConfig.resume.downloadHref,
      variant: "ghost",
    },
  ],
};

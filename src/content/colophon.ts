/** Editorial page copy — types live in `src/lib/colophon/types.ts`. */
import type {
  AboutBlock,
  AboutEndCopy,
  AboutHeroMeta,
  ColophonBrief,
  ColophonIdea,
  ColophonLayer,
  ColophonPipeline,
  ColophonPullquote,
  ColophonStackGroup,
} from "@/src/lib/colophon/types";
import { getVisibleProjects } from "@/src/lib/projects";

export const COLOPHON_HERO_META: AboutHeroMeta = {
  watermark: "\u2018Colophon\u2019",
  titleLine1: "This",
  titleLine2: "Site",
  description:
    "Three ideas from print and cyanotype, woven by eye with AI as a collaborator.",
  stats: [
    { label: "Cursor \u00b7 Figma", value: "80 / 20" },
    { label: "Design tokens", value: "100" },
    { label: "Components", value: "68" },
    { label: "Case studies", value: String(getVisibleProjects().length) },
  ],
};

export const COLOPHON_BRIEF_BLOCK: AboutBlock = {
  title: "The making",
  infoStrong: "How it was made",
  infoDetail: "Cursor ~80 \u00b7 Figma ~20",
};

export const COLOPHON_BRIEF: ColophonBrief = {
  lead: [
    "\u2003Every other project in this archive was for someone else. Here I am designer, engineer, author, and ",
    { em: " client" },
    " at once.",
  ],
  paragraphs: [
    "\u2003Moodboard first, then Claude for a sketch system. Most of the making happened in Cursor; Figma justified layout. A new case study should be authoring, not engineering. AI speeds the start; weaving decides what stays.",
  ],
  specimenLabel: "LIVE TOKENS\nRestyle with the theme",
  stampValue: "v0.1",
  stampLabel: "2026",
};

export const COLOPHON_IDEAS_BLOCK: AboutBlock = {
  title: "The look",
  infoStrong: "Three ideas",
  infoDetail: "Print, touch, cyanotype",
};

export const COLOPHON_IDEAS: ColophonIdea[] = [
  {
    num: "01",
    title: "Editorial",
    source: "Printed monograph",
    from: "Love of print and long-form reading",
    shows: "About, colophon, case studies",
  },
  {
    num: "02",
    title: "Collectible",
    source: "Physical card · stamp · polaroid ",
    from: "Something you could collect",
    shows: "Work and play cards",
  },
  {
    num: "03",
    title: "Botanical",
    source: "Cyanotype · plants",
    from: "Cyanotype printing and botanic looking",
    shows: "Heroes, stamps, chrome marks",
  },
];

export const COLOPHON_STACK_BLOCK: AboutBlock = {
  title: "Inventory",
  infoStrong: "What it runs on",
  infoDetail: "Method, architecture, runtime",
};

export const COLOPHON_STACK: ColophonStackGroup[] = [
  {
    label: "Method",
    items: [
      { label: "Moodboard", key: true },
      { label: "Claude", key: true },
      { label: "Cursor", key: true },
      { label: "Figma" },
    ],
  },
  {
    label: "Architecture",
    items: [
      { label: "Design tokens", key: true },
      { label: "Content compiler", key: true },
      { label: "Component layers", key: true },
      { label: "Server Components" },
      { label: "Generated dark mode" },
      { label: "Framer Motion" },
      { label: "W3C DTCG export" },
    ],
  },
  {
    label: "Runtime",
    items: [
      { label: "Next.js 15", key: true },
      { label: "React 19", key: true },
      { label: "TypeScript", key: true },
      { label: "Tailwind CSS v4" },
      { label: "App Router" },
      { label: "Turbopack" },
    ],
  },
  {
    label: "Browse",
    items: [
      { label: "Component gallery", key: true, href: "/components" },
      { label: "Token reference", key: true, href: "/tokens" },
      { label: "Case study blocks" },
      { label: "AGENTS.md" },
    ],
  },
];

export const COLOPHON_QUOTE: ColophonPullquote = {
  quote: "A generated system is a sketch. Craft is deciding what stays.",
  source: "On making with AI \u00b7 2026",
};

export const COLOPHON_SYSTEM_BLOCK: AboutBlock = {
  title: "The system",
  infoStrong: "Ship content · build UI",
  infoDetail: "Glanceable architecture",
};

/** Authoring lanes — left to right. */
export const COLOPHON_PIPELINES: ColophonPipeline[] = [
  { title: "Tokens", input: "JSON", output: "CSS vars" },
  { title: "Content", input: "Markdown", output: "Typed blocks" },
  { title: "Checks", input: "Slugs · paths", output: "Validated" },
];

/** UI bands — top = page-specific, bottom = shared. */
export const COLOPHON_LAYERS: ColophonLayer[] = [
  { title: "Feature pages", role: "Home, work, play, about, case studies", count: "46" },
  { title: "Motion", role: "Scroll and section reveals", count: "2" },
  { title: "Site chrome", role: "Nav, footer, theme, loaders", count: "7" },
  { title: "Primitives", role: "Shared cards, tabs, filters, ends", count: "13" },
];

export const COLOPHON_END_COPY: AboutEndCopy = {
  titleLead: "Want to see the system",
  titleAccent: "in action?",
  actions: [
    { label: "Browse components \u2192", href: "/components", variant: "primary" },
    { label: "View tokens", href: "/tokens", variant: "outline" },
    { label: "About the designer", href: "/about", variant: "outline" },
  ],
};

/** Editorial page copy — types live in `src/lib/colophon/types.ts`. */
import type {
  AboutBlock,
  AboutEndCopy,
  AboutHeroMeta,
  ColophonBrief,
  ColophonLayer,
  ColophonPipeline,
  ColophonPullquote,
  ColophonStackGroup,
} from "@/src/lib/colophon/types";

export const COLOPHON_HERO_META: AboutHeroMeta = {
  watermark: "\u2018Colophon\u2019",
  eyebrow: "COLOPHON \u00b7 DESIGN SYSTEM \u00b7 DESIGN ENGINEERING",
  titleLine1: "This",
  titleLine2: "Site",
  description:
    "The token pipeline, content compiler, and component architecture behind this portfolio \u2014 built so one person can maintain it over years.",
  stats: [
    { label: "Stack", value: "Next.js 15" },
    { label: "Design tokens", value: "100" },
    { label: "Components", value: "65" },
    { label: "Case studies", value: "12" },
  ],
};

export const COLOPHON_BRIEF_BLOCK: AboutBlock = {
  kicker: "\u00a7 01",
  title: "The brief",
  infoStrong: "Why it exists",
  infoDetail: "Authoring, not engineering",
};

export const COLOPHON_BRIEF: ColophonBrief = {
  lead: [
    "Every other project in this archive was made for someone else. This one is the exception \u2014 I am the designer, the engineer, the author, and the",
    { em: " client" },
    ".",
  ],
  paragraphs: [
    "The brief I set was narrow on purpose: adding a case study should be authoring, not engineering. If publishing a new project meant writing components, the site would rot the moment I got busy, which is exactly how portfolios die.",
    "Two JSON files are the only token source. Markdown compiles to typed TypeScript. Components sit in four layers, generic to specific. The architecture is a single rule \u2014 JSON in, CSS and TypeScript out, never the reverse.",
  ],
  specimenLabel: "Live tokens \u00b7 restyle with the theme",
  stampValue: "v0.1",
  stampLabel: "2026",
};

export const COLOPHON_STACK_BLOCK: AboutBlock = {
  kicker: "\u00a7 02",
  title: "Inventory",
  infoStrong: "What it runs on",
  infoDetail: "Architecture, runtime, browse",
};

export const COLOPHON_STACK: ColophonStackGroup[] = [
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
  quote:
    "A generator does not prevent drift. It makes drift cheap to find and fix in one place.",
  source: "On the token pipeline \u00b7 2026",
};

export const COLOPHON_PIPELINES_BLOCK: AboutBlock = {
  kicker: "\u00a7 03",
  title: "Pipelines",
  infoStrong: "Author \u2192 compile \u2192 validate",
  infoDetail: "One command each",
};

export const COLOPHON_PIPELINES: ColophonPipeline[] = [
  {
    num: "01",
    title: "Tokens",
    command: "npm run tokens:gen",
    source: "design-tokens/tokens.*.json",
    body: "Nine token groups flatten to 100 CSS variables and 80 dark overrides. A second exporter writes W3C DTCG files, keeping tokens portable back to Figma.",
  },
  {
    num: "02",
    title: "Content",
    command: "npm run content:all",
    source: "src/content/case-studies/*.md",
    body: "A compiler turns markdown into a discriminated union of typed content blocks. Every project in the archive is authored the same way.",
  },
  {
    num: "03",
    title: "Data",
    command: "npm run validate:data",
    source: "scripts/validate-data.ts",
    body: "Confirms every case study slug maps to a project record in both directions, and every catalogued component path exists on disk.",
  },
];

export const COLOPHON_LAYERS_BLOCK: AboutBlock = {
  kicker: "\u00a7 04",
  title: "Layers",
  infoStrong: "Generic to specific",
  infoDetail: "Import down, never sideways",
};

export const COLOPHON_LAYERS: ColophonLayer[] = [
  {
    num: "01",
    title: "Primitives",
    path: "src/components/ui/",
    count: "13",
    body: "Badge, TabBar, FilterBar, CopyButton, PageEndSection \u2014 reusable across every feature.",
  },
  {
    num: "02",
    title: "Site chrome",
    path: "src/components/chrome/",
    count: "7",
    body: "Nav, Footer, ThemeToggle, PageLoader \u2014 the shell every page shares.",
  },
  {
    num: "03",
    title: "Motion",
    path: "src/components/motion/",
    count: "2",
    body: "ScrollReveal and SnapSectionReveal. The client boundary is crossed only where a hook or browser API genuinely requires it.",
  },
  {
    num: "04",
    title: "Feature sections",
    path: "home/ \u00b7 work/ \u00b7 play/ \u00b7 about/ \u00b7 case-study/",
    count: "46",
    body: "Page-specific sections. A component may import from its own layer or layers above it, never sideways into another feature.",
  },
];

export const COLOPHON_END_COPY: AboutEndCopy = {
  kicker: "The end of the record",
  titleLead: "Want to see the system",
  titleAccent: "in action?",
  actions: [
    { label: "Browse components \u2192", href: "/components", variant: "primary" },
    { label: "View tokens", href: "/tokens", variant: "outline" },
    { label: "About the designer", href: "/about", variant: "outline" },
  ],
};

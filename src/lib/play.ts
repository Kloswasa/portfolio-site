import type { BadgeTone } from "@/src/components/ui/Badge";

/** Play index tabs — matches Indigo & Gold IA (Illustration · Experiments). */
export type PlayTab = "illustration" | "experiments";

export interface PlayItem {
  title: string;
  /** Line like `Ink · 2024` — shown as card description */
  meta: string;
  tone: BadgeTone;
  /** URL for full-resolution image in the lightbox (e.g. 1920×1080 artwork) */
  imageSrc: string;
  /** Intrinsic width in pixels — layout width for scrollable full-HD view */
  imageWidth?: number;
  /** Intrinsic height in pixels — preserves aspect ratio with width */
  imageHeight?: number;
  /** Short alt for the large image (defaults to title-based description) */
  imageAlt?: string;
}

export const playIllustration: PlayItem[] = [
  {
    title: "Swallow Studies",
    meta: "Ink · 2024",
    tone: "secondary",
    imageSrc: "https://picsum.photos/seed/swallow-studies/1920/1080",
    imageAlt: "Swallow studies illustration",
  },
  {
    title: "Cyanotype #07",
    meta: "Print · 2024",
    tone: "primary",
    imageSrc: "https://picsum.photos/seed/cyanotype-07/1920/1080",
    imageAlt: "Cyanotype print artwork",
  },
  {
    title: "Koi (one perfect)",
    meta: "Ink + gold · 2023",
    tone: "tertiary",
    imageSrc: "https://picsum.photos/seed/koi-gold/1920/1080",
    imageAlt: "Koi ink and gold illustration",
  },
  {
    title: "Bamboo Series",
    meta: "Sumi · 2023",
    tone: "primary",
    imageSrc: "https://picsum.photos/seed/bamboo-sumi/1920/1080",
    imageAlt: "Bamboo sumi ink series",
  },
];

export const playExperiments: PlayItem[] = [
  {
    title: "Tide Tables",
    meta: "Shader · 2024",
    tone: "tertiary",
    imageSrc: "https://picsum.photos/seed/tide-shader/1920/1080",
    imageAlt: "Tide tables shader experiment",
  },
  {
    title: "Ripple Field",
    meta: "Canvas · 2024",
    tone: "primary",
    imageSrc: "https://picsum.photos/seed/ripple-canvas/1920/1080",
    imageAlt: "Ripple field canvas sketch",
  },
  {
    title: "Wave Generator",
    meta: "WebGL · 2023",
    tone: "primary",
    imageSrc: "https://picsum.photos/seed/wave-webgl/1920/1080",
    imageAlt: "Wave generator WebGL output",
  },
  {
    title: "Loom",
    meta: "p5.js · 2022",
    tone: "secondary",
    imageSrc: "https://picsum.photos/seed/loom-p5/1920/1080",
    imageAlt: "Loom creative coding sketch",
  },
];

<<<<<<< Updated upstream
export type { PlayFilterKey, PlayFilterOption, PlayHeroMeta, PlayMedium, PlayMediumSection, PlayWork } from "@/src/lib/play/types";
export {
  PLAY_END_COPY,
  PLAY_FILTER_OPTIONS,
  PLAY_HERO_META,
  PLAY_MEDIUM_SECTIONS,
  PLAY_WORKS,
} from "@/src/lib/play/data";
=======
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
    title: "AU Call",
    meta: "Digital · 2024",
    tone: "primary",
    imageSrc: "https://picsum.photos/seed/au-call/1920/1080",
    imageAlt: "AU Call illustration",
  },
  {
    title: "Ganesha",
    meta: "Ink · 2024",
    tone: "secondary",
    imageSrc: "https://picsum.photos/seed/ganesha/1920/1080",
    imageAlt: "Ganesha illustration",
  },
  {
    title: "Thai Hom",
    meta: "Digital · 2024",
    tone: "tertiary",
    imageSrc: "https://picsum.photos/seed/thai-hom/1920/1080",
    imageAlt: "Thai Hom illustration",
  },
  {
    title: "Compose Zone",
    meta: "Digital · 2023",
    tone: "primary",
    imageSrc: "https://picsum.photos/seed/compose-zone/1920/1080",
    imageAlt: "Compose Zone illustration",
  },
  {
    title: "In the Garden",
    meta: "Watercolor · 2023",
    tone: "secondary",
    imageSrc: "https://picsum.photos/seed/in-the-garden/1920/1080",
    imageAlt: "In the Garden illustration",
  },
  {
    title: "Thai Agriculture",
    meta: "Digital · 2023",
    tone: "tertiary",
    imageSrc: "https://picsum.photos/seed/thai-agriculture/1920/1080",
    imageAlt: "Thai Agriculture illustration",
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
>>>>>>> Stashed changes

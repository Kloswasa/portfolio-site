export type PlayMedium = "illustration" | "code";

export type PlayFilterKey = "all" | PlayMedium;

export interface PlayFilterOption {
  key: PlayFilterKey;
  label: string;
}

import type { WorkHeroMeta } from "@/src/lib/work/types";

export type PlayHeroMeta = WorkHeroMeta;

export interface PlayMediumSection {
  medium: PlayMedium;
  title: string;
  infoStrong: string;
  infoDetail: string;
}

import type { PageEndCopy } from "@/src/lib/page-end/types";

export type PlayEndCopy = PageEndCopy;

export interface PlayImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface PlayWork {
  id: string;
  medium: PlayMedium;
  index: string;
  title: string;
  meta: string;
  dim: string;
  description: string;
  cardDescription: string;
  tools: string[];
  tag: string;
  cardTools: string;
  /** Sketch key for creative-code works */
  sketch?: string;
  /** Illustration component id */
  illustration?: string;
  /** Cover/thumbnail raster artwork — shown on the card and as the single plate image */
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  /**
   * Full image set for the viewer. When present with more than one entry, the
   * plate becomes a vertical scroll-stack. Falls back to `imageSrc` when omitted.
   */
  images?: PlayImage[];
  code?: string;
  /** Portfolio case study slug — shows a link in the viewer when set */
  projectSlug?: string;
}

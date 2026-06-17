export type PlayMedium = "illustration" | "code";

export type PlayFilterKey = "all" | PlayMedium;

export interface PlayFilterOption {
  key: PlayFilterKey;
  label: string;
}

export interface PlayHeroMeta {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  stats: { label: string; value: string }[];
}

export interface PlayMediumSection {
  medium: PlayMedium;
  title: string;
  infoStrong: string;
  infoDetail: string;
}

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
}

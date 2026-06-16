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
  code?: string;
}

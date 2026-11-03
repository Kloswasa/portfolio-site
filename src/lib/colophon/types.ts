import type { AboutBlock, AboutEndCopy, AboutHeroMeta, RichText } from "@/src/lib/about/types";

export type { AboutBlock, AboutEndCopy, AboutHeroMeta };

export interface ColophonBrief {
  lead: RichText;
  paragraphs: string[];
  specimenLabel: string;
  stampValue: string;
  stampLabel: string;
}

export interface ColophonIdea {
  num: string;
  title: string;
  source: string;
  from: string;
  shows: string;
}

export interface ColophonStackItem {
  label: string;
  key?: boolean;
  href?: string;
}

export interface ColophonStackGroup {
  label: string;
  items: ColophonStackItem[];
}

export interface ColophonPullquote {
  quote: string;
  source: string;
}

/** One authoring lane in the system diagram. */
export interface ColophonPipeline {
  title: string;
  input: string;
  output: string;
}

/** One UI band in the system diagram (top = specific). */
export interface ColophonLayer {
  title: string;
  role: string;
  count: string;
}

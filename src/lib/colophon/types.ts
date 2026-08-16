import type { AboutBlock, AboutEndCopy, AboutHeroMeta, RichText } from "@/src/lib/about/types";

export type { AboutBlock, AboutEndCopy, AboutHeroMeta };

export interface ColophonBrief {
  lead: RichText;
  paragraphs: string[];
  specimenLabel: string;
  stampValue: string;
  stampLabel: string;
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

export interface ColophonPipeline {
  num: string;
  title: string;
  command: string;
  source: string;
  body: string;
}

export interface ColophonLayer {
  num: string;
  title: string;
  path: string;
  count: string;
  body: string;
}

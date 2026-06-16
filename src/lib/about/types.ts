import type { GalleryHeroMeta } from "@/src/lib/gallery/types";

/** Inline rich text: plain strings with optional emphasised segments. */
export type RichSegment = string | { em: string };
export type RichText = RichSegment[];

/** Hero reuses the shared gallery hero shape. */
export type AboutHeroMeta = GalleryHeroMeta & { watermark: string };

/** Section header used across the about page (matches the play block-head pattern). */
export interface AboutBlock {
  kicker: string;
  title: string;
  infoStrong: string;
  infoDetail: string;
}

export interface AboutStory {
  portrait: {
    label: string;
    stampValue: string;
    stampLabel: string;
  };
  lead: RichText;
  paragraphs: string[];
  signature: string;
}

export interface AboutPrinciple {
  num: string;
  term: RichText;
  body: string;
}

export interface AboutTimelineEntry {
  year: string;
  role: string;
  place: string;
  note: string;
  tag: string;
}

export interface AboutInstrumentTag {
  label: string;
  key?: boolean;
}

export interface AboutInstrumentGroup {
  label: string;
  tags: AboutInstrumentTag[];
}

export type AboutSpecimenArt =
  | "cyanotype"
  | "engraving"
  | "riso"
  | "celestial"
  | "indigo"
  | "ampersand";

export interface AboutSpecimen {
  no: string;
  name: string;
  desc: string;
  art: AboutSpecimenArt;
}

export interface AboutQuote {
  watermark: string;
  quote: string;
  source: string;
}

export interface AboutCurrentlyColumn {
  label: string;
  items: RichText[];
}

export interface AboutEndAction {
  label: string;
  href: string;
  variant: "solid" | "ghost";
}

export interface AboutEndCopy {
  kicker: string;
  titleLead: string;
  titleAccent: string;
  actions: AboutEndAction[];
}

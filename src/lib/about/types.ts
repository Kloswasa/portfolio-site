import type { WorkHeroMeta } from "@/src/lib/work/types";

/** Inline rich text: plain strings with optional emphasised segments. */
export type RichSegment = string | { em: string };
export type RichText = RichSegment[];

/** Hero reuses the shared work page hero shape. */
export type AboutHeroMeta = WorkHeroMeta & { watermark: string };

/** Section header used across the about page (matches the play block-head pattern). */
export interface AboutBlock {
  kicker: string;
  title: string;
  infoStrong: string;
  infoDetail: string;
}

export interface AboutStory {
  portrait: {
    image: {
      src: string;
      alt: string;
    };
    label: string;
    stampValue: string;
    stampLabel: string;
  };
  lead: RichText;
  paragraphs: string[];
  signature: string;
}


export interface AboutTimelineEntry {
  year: string;
  role: string;
  specialisation?: string;
  place?: string;
  university?: string;
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



export interface AboutQuote {
  watermark: string;
  quote: string;
  source: string;
}


import type { PageEndCopy } from "@/src/lib/page-end/types";

export type AboutEndAction = PageEndCopy["actions"][number];
export type AboutEndCopy = PageEndCopy;

/** Home page about teaser — short slice of the full about record. */
export interface AboutHomeTeaser {
  shortHeading: string;
  storyIntro: string;
  skills: string[];
  statusLabel: string;
  availabilityHeading: string;
  availabilityDescription: string;
  experience: string;
}

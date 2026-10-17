import type { WorkHeroMeta } from "@/src/lib/work/types";

/** Inline rich text: plain strings with optional emphasised segments. */
export type RichSegment = string | { em: string };
export type RichText = RichSegment[];

export type AboutHeroContactVariant = "primary" | "accent" | "secondary";

/** One link in the about heading — email, CV, or another contact. */
export interface AboutHeroContact {
  label: string;
  value: string;
  href: string;
  variant: AboutHeroContactVariant;
  /** Opens in a new tab. Use for the CV file and social profiles. */
  external?: boolean;
}

export type AboutHeroSocialIcon = "github" | "linkedin";

/** Icon link shown beside the contact buttons. */
export interface AboutHeroSocial {
  label: string;
  href: string;
  icon: AboutHeroSocialIcon;
}

/** Hero reuses the shared work page hero shape. */
export type AboutHeroMeta = WorkHeroMeta & {
  watermark: string;
  contactHeading?: string;
  contacts?: AboutHeroContact[];
  socials?: AboutHeroSocial[];
};

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
  year?: string;
  role: string;
  specialisation?: string;
  place?: string;
  university?: string;
  note?: string;
  tag?: string;
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

export type CaseStudyKind = "major" | "minor";

export type ContentBlock =
  | { type: "prose"; paragraphs: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      aspect?: "hero" | "wide" | "square";
    }
  | {
      type: "gallery";
      items: { src: string; alt: string }[];
      columns?: 2 | 3;
    }
  | { type: "callout"; title: string; body: string }
  | { type: "metrics"; items: { label: string; value: string }[] };

export interface CaseStudySectionContent {
  title?: string;
  blocks: ContentBlock[];
}

export interface CaseStudyQuickFacts {
  role: string;
  scope: string;
  timeline?: string;
}

export interface CaseStudyHook {
  heroSrc?: string;
  heroAlt?: string;
  quickFacts: CaseStudyQuickFacts;
}

export type MajorSectionId =
  | "overview"
  | "context"
  | "iterations"
  | "decisions"
  | "outcome"
  | "reflection";

export type MinorSectionId =
  | "brief"
  | "iterations"
  | "outcome"
  | "tradeoffs"
  | "reflection";

export type ChromeSectionId = "hook" | "next";

export type MajorCaseStudySections = Record<MajorSectionId, CaseStudySectionContent>;

export type MinorCaseStudySections = Record<MinorSectionId, CaseStudySectionContent>;

export interface MajorCaseStudy {
  kind: "major";
  slug: string;
  hook: CaseStudyHook;
  sections: MajorCaseStudySections;
}

export interface MinorCaseStudy {
  kind: "minor";
  slug: string;
  hook: CaseStudyHook;
  sections: MinorCaseStudySections;
}

export type CaseStudy = MajorCaseStudy | MinorCaseStudy;

export interface CaseStudyNavItem {
  id: string;
  label: string;
}

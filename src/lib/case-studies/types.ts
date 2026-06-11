export type CaseStudyKind = "major" | "minor" | "designer";

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

export type CaseStudy = MajorCaseStudy | MinorCaseStudy | DesignerCaseStudy;

export interface CaseStudyNavItem {
  id: string;
  label: string;
}

/* ── Designer case study (rich editorial layout) ── */

export type DesignerSectionId =
  | "context"
  | "problem"
  | "research"
  | "process"
  | "foundations"
  | "components"
  | "outcomes"
  | "reflections";

export type DesignerContentBlock =
  | { type: "prose"; paragraphs: string[] }
  | {
      type: "stats";
      items: {
        value: string;
        label: string;
        variant: "dark" | "mid" | "light";
      }[];
    }
  | { type: "pullquote"; text: string; source: string }
  | {
      type: "findings";
      items: {
        num: string;
        label: string;
        title: string;
        body: string;
      }[];
    }
  | { type: "annotation"; text: string }
  | { type: "twoCol"; items: { label: string; body: string }[] }
  | {
      type: "artifact";
      variant: "audit-map" | "token-hierarchy";
      label: string;
      caption: string;
      captionMeta?: string;
    }
  | {
      type: "process";
      items: { num: string; title: string; body: string }[];
    }
  | { type: "callout"; label: string; title: string; body: string }
  | { type: "colorSpecimen" }
  | { type: "typeSpecimen" }
  | { type: "ornament" }
  | {
      type: "componentGrid";
      items: {
        label: string;
        title: string;
        count: string;
        variant: "primary" | "dark" | "mid" | "deepest";
      }[];
    }
  | {
      type: "outcomes";
      items: { value: string; label: string; body: string }[];
    }
  | { type: "reflections"; items: string[] };

export interface DesignerSectionContent {
  eyebrow: string;
  title: string;
  titleEm?: string;
  blocks: DesignerContentBlock[];
}

export interface DesignerCaseStudyHero {
  breadcrumb: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  summary: string;
  meta: { label: string; value: string }[];
}

export interface DesignerCaseStudy {
  kind: "designer";
  slug: string;
  hero: DesignerCaseStudyHero;
  sections: Record<DesignerSectionId, DesignerSectionContent>;
}

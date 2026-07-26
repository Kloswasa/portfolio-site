export type CaseStudyKind = "major" | "minor";

export type ChromeSectionId = "next";

export type CaseStudy = MajorCaseStudy | MinorCaseStudy;

export interface CaseStudyNavItem {
  id: string;
  label: string;
}

/* ── Major case study (full editorial layout) ── */

export type MajorSectionId =
  | "brief"
  | "research"
  | "concept"
  | "craft"
  | "build"
  | "outcome";

export type MinorSectionId = "context" | "approach" | "work" | "outcome";

export type MajorContentBlock =
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
        /** Optional illustration inside the card. Requires imageAlt. */
        image?: string;
        imageAlt?: string;
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
  | {
      type: "button";
      label: string;
      href: string;
      /** Defaults to accent (gold). */
      variant?: "accent" | "primary";
    }
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
  | { type: "reflections"; title?: string; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      /** Attribution label. Pair with creditHref for a link. */
      credit?: string;
      creditHref?: string;
      /** Omit for full content width. */
      size?: "sm" | "md";
    }
  | {
      type: "imagePair";
      items: {
        src: string;
        alt: string;
        caption: string;
        credit?: string;
        creditHref?: string;
      }[];
      /** Omit for full content width. */
      size?: "sm" | "md";
    }
  | {
      type: "imageGrid";
      items: {
        src: string;
        alt: string;
        caption?: string;
        credit?: string;
        creditHref?: string;
      }[];
    }
  | {
      type: "video";
      src: string;
      poster: string;
      alt: string;
      caption: string;
    };

export interface MajorSectionContent {
  eyebrow: string;
  title: string;
  titleEm?: string;
  blocks: MajorContentBlock[];
}

export interface MajorCaseStudyHero {
  breadcrumb: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  summary: string;
  meta: { label: string; value: string }[];
  /** Optional hero background image (path from /public, e.g. /projects/quiz-game/hero.png). */
  image?: { src: string; alt: string };
}

export interface MajorCaseStudy {
  kind: "major";
  slug: string;
  hero: MajorCaseStudyHero;
  sections: Record<MajorSectionId, MajorSectionContent>;
}

export interface MinorSections {
  context: MajorSectionContent;
  work: MajorSectionContent;
  outcome: MajorSectionContent;
  /** Omit for a three-section flow: Context → Work → Outcome. */
  approach?: MajorSectionContent;
}

export interface MinorCaseStudy {
  kind: "minor";
  slug: string;
  hero: MajorCaseStudyHero;
  /**
   * Nav + eyebrow label when `sections.approach` is present (default: "Approach").
   * e.g. "The Decision" for graphic minors, "Process" for a build-heavy piece.
   */
  approachLabel?: string;
  sections: MinorSections;
}

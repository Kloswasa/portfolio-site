import type {
  CaseStudyKind,
  CaseStudyNavItem,
  MajorSectionId,
  MinorSectionId,
} from "@/src/lib/case-studies/types";

const HOOK_NAV: CaseStudyNavItem = { id: "hook", label: "Hook" };
const NEXT_NAV: CaseStudyNavItem = { id: "next", label: "Next" };

const MAJOR_CONTENT_SECTIONS: { id: MajorSectionId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context & Problem" },
  { id: "iterations", label: "Iterations" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

const MINOR_CONTENT_SECTIONS: { id: MinorSectionId; label: string }[] = [
  { id: "brief", label: "Brief" },
  { id: "iterations", label: "Iterations" },
  { id: "outcome", label: "Outcome" },
  { id: "tradeoffs", label: "Tradeoffs" },
  { id: "reflection", label: "Reflection" },
];

/** Default section headings when content omits `title`. */
export const MAJOR_SECTION_DEFAULT_TITLES: Record<MajorSectionId, string> = {
  overview: "Overview",
  context: "Context & Problem",
  iterations: "Iterations",
  decisions: "Decisions",
  outcome: "Outcome",
  reflection: "Reflection",
};

export const MINOR_SECTION_DEFAULT_TITLES: Record<MinorSectionId, string> = {
  brief: "Brief",
  iterations: "Iterations",
  outcome: "Outcome",
  tradeoffs: "Tradeoffs",
  reflection: "Reflection",
};

export function getCaseStudyNav(kind: CaseStudyKind): CaseStudyNavItem[] {
  const content =
    kind === "major" ? MAJOR_CONTENT_SECTIONS : MINOR_CONTENT_SECTIONS;
  return [HOOK_NAV, ...content, NEXT_NAV];
}

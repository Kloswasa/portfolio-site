import type {
  CaseStudy,
  CaseStudyNavItem,
  MajorSectionId,
  MinorSectionId,
  MinorSections,
} from "@/src/lib/case-studies/types";

const NEXT_NAV: CaseStudyNavItem = { id: "next", label: "Next" };

const MAJOR_CONTENT_SECTIONS: { id: MajorSectionId; label: string }[] = [
  { id: "brief", label: "01 · Brief" },
  { id: "research", label: "02 · Research" },
  { id: "concept", label: "03 · Concept" },
  { id: "craft", label: "04 · Craft" },
  { id: "build", label: "05 · Build" },
  { id: "outcome", label: "06 · Outcome" },
];

export const MAJOR_SECTION_ORDER: MajorSectionId[] = [
  "brief",
  "research",
  "concept",
  "craft",
  "build",
  "outcome",
];

/** Section order for a minor case study — omits approach when not in content. */
export function getMinorSectionOrder(
  sections: MinorSections,
): MinorSectionId[] {
  const order: MinorSectionId[] = ["context"];
  if (sections.approach !== undefined) {
    order.push("approach");
  }
  order.push("work", "outcome");
  return order;
}

const MINOR_SECTION_LABELS: Record<
  Exclude<MinorSectionId, "approach">,
  string
> = {
  context: "Context",
  work: "Work",
  outcome: "Outcome",
};

/** Nav + in-page eyebrow label for a minor section (approach is per-project). */
function getMinorSectionLabel(
  id: MinorSectionId,
  approachLabel?: string,
): string {
  if (id === "approach") return approachLabel ?? "Approach";
  return MINOR_SECTION_LABELS[id];
}

export function getMinorSectionEyebrows(
  sectionOrder: MinorSectionId[],
  approachLabel?: string,
): Record<MinorSectionId, string> {
  return Object.fromEntries(
    sectionOrder.map((id, index) => [
      id,
      `${String(index + 1).padStart(2, "0")} — ${getMinorSectionLabel(id, approachLabel)}`,
    ]),
  ) as Record<MinorSectionId, string>;
}

export function getCaseStudyNav(caseStudy: CaseStudy): CaseStudyNavItem[] {
  if (caseStudy.kind === "minor") {
    const sectionOrder = getMinorSectionOrder(caseStudy.sections);
    return [
      ...sectionOrder.map((id, index) => ({
        id,
        label: `${String(index + 1).padStart(2, "0")} · ${getMinorSectionLabel(id, caseStudy.approachLabel)}`,
      })),
      NEXT_NAV,
    ];
  }
  return [...MAJOR_CONTENT_SECTIONS, NEXT_NAV];
}

import { CaseStudySection } from "@/src/components/case-study/CaseStudySection";
import { MAJOR_SECTION_DEFAULT_TITLES } from "@/src/lib/case-studies/sections";
import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const MAJOR_SECTION_ORDER = [
  { id: "overview" as const, eyebrow: "01 Overview" },
  { id: "context" as const, eyebrow: "02 Context & Problem" },
  { id: "iterations" as const, eyebrow: "03 Iterations" },
  { id: "decisions" as const, eyebrow: "04 Decisions" },
  { id: "outcome" as const, eyebrow: "05 Outcome" },
  { id: "reflection" as const, eyebrow: "06 Reflection" },
];

export function MajorCaseStudyView({ caseStudy }: { caseStudy: MajorCaseStudy }) {
  return (
    <>
      {MAJOR_SECTION_ORDER.map(({ id, eyebrow }) => (
        <CaseStudySection
          key={id}
          id={id}
          eyebrow={eyebrow}
          defaultTitle={MAJOR_SECTION_DEFAULT_TITLES[id]}
          section={caseStudy.sections[id]}
        />
      ))}
    </>
  );
}

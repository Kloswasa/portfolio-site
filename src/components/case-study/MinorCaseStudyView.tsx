import { CaseStudySection } from "@/src/components/case-study/CaseStudySection";
import { MINOR_SECTION_DEFAULT_TITLES } from "@/src/lib/case-studies/sections";
import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const MINOR_SECTION_ORDER = [
  { id: "brief" as const, eyebrow: "01 Brief" },
  { id: "iterations" as const, eyebrow: "02 Iterations", dense: true },
  { id: "outcome" as const, eyebrow: "03 Outcome" },
  { id: "tradeoffs" as const, eyebrow: "04 Tradeoffs" },
  { id: "reflection" as const, eyebrow: "05 Reflection" },
];

export function MinorCaseStudyView({ caseStudy }: { caseStudy: MinorCaseStudy }) {
  return (
    <>
      {MINOR_SECTION_ORDER.map(({ id, eyebrow, dense }) => (
        <CaseStudySection
          key={id}
          id={id}
          eyebrow={eyebrow}
          defaultTitle={MINOR_SECTION_DEFAULT_TITLES[id]}
          section={caseStudy.sections[id]}
          dense={dense}
          amount={dense ? 0.2 : 0.3}
        />
      ))}
    </>
  );
}

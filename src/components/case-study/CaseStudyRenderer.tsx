import { MajorCaseStudyView } from "@/src/components/case-study/MajorCaseStudyView";
import { MinorCaseStudyView } from "@/src/components/case-study/MinorCaseStudyView";
import type { CaseStudy } from "@/src/lib/case-studies/types";

export function CaseStudyRenderer({ caseStudy }: { caseStudy: CaseStudy }) {
  if (caseStudy.kind === "major") {
    return <MajorCaseStudyView caseStudy={caseStudy} />;
  }
  return <MinorCaseStudyView caseStudy={caseStudy} />;
}

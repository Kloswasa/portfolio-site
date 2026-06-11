import { DesignerCaseStudyView } from "@/src/components/case-study/designer/DesignerCaseStudyView";
import { MajorCaseStudyView } from "@/src/components/case-study/MajorCaseStudyView";
import { MinorCaseStudyView } from "@/src/components/case-study/MinorCaseStudyView";
import type { CaseStudy } from "@/src/lib/case-studies/types";
import type { Project } from "@/src/lib/projects";

export function CaseStudyRenderer({
  caseStudy,
  nextProject,
  nextIndex,
}: {
  caseStudy: CaseStudy;
  nextProject?: Project;
  nextIndex?: string;
}) {
  if (caseStudy.kind === "designer") {
    if (!nextProject || !nextIndex) return null;
    return (
      <DesignerCaseStudyView
        caseStudy={caseStudy}
        nextProject={nextProject}
        nextIndex={nextIndex}
      />
    );
  }
  if (caseStudy.kind === "major") {
    return <MajorCaseStudyView caseStudy={caseStudy} />;
  }
  return <MinorCaseStudyView caseStudy={caseStudy} />;
}

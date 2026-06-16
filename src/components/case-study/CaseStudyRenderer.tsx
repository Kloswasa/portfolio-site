import { MajorCaseStudyView } from "@/src/components/case-study/major/MajorCaseStudyView";
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
  if (!nextProject || !nextIndex) return null;

  return (
    <MajorCaseStudyView
      caseStudy={caseStudy}
      nextProject={nextProject}
      nextIndex={nextIndex}
    />
  );
}

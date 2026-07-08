import { MajorCaseStudyView } from "@/src/components/case-study/major/MajorCaseStudyView";
import type { CaseStudy } from "@/src/lib/case-studies/types";
import type { Project } from "@/src/lib/projects";

export function CaseStudyRenderer({
  caseStudy,
  project,
  nextProject,
  nextIndex,
}: {
  caseStudy: CaseStudy;
  project: Project;
  nextProject?: Project;
  nextIndex?: string;
}) {
  if (!nextProject || !nextIndex) return null;

  return (
    <MajorCaseStudyView
      caseStudy={caseStudy}
      project={project}
      nextProject={nextProject}
      nextIndex={nextIndex}
    />
  );
}

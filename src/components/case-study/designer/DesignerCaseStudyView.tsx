import { DesignerCaseStudyHero } from "@/src/components/case-study/designer/DesignerCaseStudyHero";
import { DesignerCaseStudyNext } from "@/src/components/case-study/designer/DesignerCaseStudyNext";
import { DesignerCaseStudySection } from "@/src/components/case-study/designer/DesignerCaseStudySection";
import { DesignerChapterNav } from "@/src/components/case-study/designer/DesignerChapterNav";
import { DesignerReadingBar } from "@/src/components/case-study/designer/DesignerReadingBar";
import { getCaseStudyNav } from "@/src/lib/case-studies/sections";
import type {
  DesignerCaseStudy,
  DesignerSectionId,
} from "@/src/lib/case-studies/types";
import type { Project } from "@/src/lib/projects";

const SECTION_ORDER: DesignerSectionId[] = [
  "context",
  "problem",
  "research",
  "process",
  "foundations",
  "components",
  "outcomes",
  "reflections",
];

export function DesignerCaseStudyView({
  caseStudy,
  nextProject,
  nextIndex,
}: {
  caseStudy: DesignerCaseStudy;
  nextProject: Project;
  nextIndex: string;
}) {
  const nav = getCaseStudyNav("designer");

  return (
    <div className="cs-designer -mx-8">
      <DesignerReadingBar />
      <DesignerCaseStudyHero hero={caseStudy.hero} />

      <div className="cs-designer__layout">
        <DesignerChapterNav sections={nav} />

        <article className="cs-designer__main">
          {SECTION_ORDER.map((id) => (
            <DesignerCaseStudySection
              key={id}
              id={id}
              section={caseStudy.sections[id]}
            />
          ))}
        </article>
      </div>

      <DesignerCaseStudyNext nextProject={nextProject} index={nextIndex} />
    </div>
  );
}

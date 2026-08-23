import { MajorCaseStudyHero } from "@/src/components/case-study/major/MajorCaseStudyHero";
import { MajorCaseStudyNext } from "@/src/components/case-study/major/MajorCaseStudyNext";
import { MajorCaseStudySection } from "@/src/components/case-study/major/MajorCaseStudySection";
import { MajorChapterNav } from "@/src/components/case-study/major/MajorChapterNav";
import { MajorReadingBar } from "@/src/components/case-study/major/MajorReadingBar";
import {
  MAJOR_SECTION_ORDER,
  getCaseStudyNav,
  getMinorSectionEyebrows,
  getMinorSectionOrder,
} from "@/src/lib/case-studies/sections";
import type {
  MajorCaseStudy,
  MinorCaseStudy,
} from "@/src/lib/case-studies/types";
import {
  getProjectExperienceLink,
  type Project,
} from "@/src/lib/projects";

export function MajorCaseStudyView({
  caseStudy,
  project,
  nextProject,
  nextIndex,
}: {
  caseStudy: MajorCaseStudy | MinorCaseStudy;
  project: Project;
  nextProject: Project;
  nextIndex: string;
}) {
  const experienceLink = getProjectExperienceLink(project);
  const nav = getCaseStudyNav(caseStudy);
  const minorSectionOrder =
    caseStudy.kind === "minor"
      ? getMinorSectionOrder(caseStudy.sections)
      : null;
  const minorEyebrows =
    caseStudy.kind === "minor"
      ? getMinorSectionEyebrows(
          minorSectionOrder!,
          caseStudy.approachLabel,
        )
      : null;

  return (
    <div className="cs-major -mx-8">
      <MajorReadingBar />
      <MajorCaseStudyHero
        hero={caseStudy.hero}
        experienceLink={experienceLink}
        project={project}
      />

      <div className="cs-major__layout">
        <MajorChapterNav sections={nav} />

        <article className="cs-major__main">
          {caseStudy.kind === "minor"
            ? minorSectionOrder!.map((id) => (
                <MajorCaseStudySection
                  key={id}
                  id={id}
                  section={{
                    ...caseStudy.sections[id]!,
                    eyebrow: minorEyebrows![id],
                  }}
                />
              ))
            : MAJOR_SECTION_ORDER.map((id) => (
                <MajorCaseStudySection
                  key={id}
                  id={id}
                  section={caseStudy.sections[id]}
                />
              ))}
        </article>
      </div>

      <MajorCaseStudyNext nextProject={nextProject} index={nextIndex} />
    </div>
  );
}

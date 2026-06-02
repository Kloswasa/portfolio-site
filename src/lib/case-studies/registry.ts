import dementiaApp from "@/src/content/case-studies/dementia-app";
import editorialZine from "@/src/content/case-studies/editorial-zine";
import festivalPoster from "@/src/content/case-studies/festival-poster";
import quizGame from "@/src/content/case-studies/quiz-game";
import recipe from "@/src/content/case-studies/recipe";
import spiceTin from "@/src/content/case-studies/spice-tin";
import teaGiftBox from "@/src/content/case-studies/tea-gift-box";
import { getProject } from "@/src/lib/projects";
import type { CaseStudy, CaseStudyKind } from "@/src/lib/case-studies/types";

export const caseStudiesBySlug = {
  "quiz-game": quizGame,
  "dementia-app": dementiaApp,
  recipe,
  "tea-gift-box": teaGiftBox,
  "spice-tin": spiceTin,
  "festival-poster": festivalPoster,
  "editorial-zine": editorialZine,
} as const satisfies Record<string, CaseStudy>;

export type CaseStudySlug = keyof typeof caseStudiesBySlug;

export function getCaseStudySlugs(): CaseStudySlug[] {
  return Object.keys(caseStudiesBySlug) as CaseStudySlug[];
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  if (!(slug in caseStudiesBySlug)) return undefined;
  const caseStudy = caseStudiesBySlug[slug as CaseStudySlug];

  if (process.env.NODE_ENV === "development") {
    const project = getProject(slug);
    if (project && project.caseStudyKind !== caseStudy.kind) {
      console.warn(
        `[case-study] slug "${slug}": project.caseStudyKind (${project.caseStudyKind}) !== caseStudy.kind (${caseStudy.kind})`,
      );
    }
    if (caseStudy.slug !== slug) {
      console.warn(
        `[case-study] slug "${slug}": caseStudy.slug (${caseStudy.slug}) mismatch`,
      );
    }
  }

  return caseStudy;
}

export function assertCaseStudyKind(
  slug: string,
  kind: CaseStudyKind,
): CaseStudy | undefined {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy || caseStudy.kind !== kind) return undefined;
  return caseStudy;
}

import bhaesaj from "@/src/content/case-studies/bhae";
import bupha from "@/src/content/case-studies/bhup";
import busaba from "@/src/content/case-studies/busaba";
import cio from "@/src/content/case-studies/cio";
import dementiaApp from "@/src/content/case-studies/dementia-app";
import flomax from "@/src/content/case-studies/flomax";
import homhuan from "@/src/content/case-studies/homhuan";
import jtimber from "@/src/content/case-studies/jtimber";
import kuendee from "@/src/content/case-studies/kuendee";
import quizGame from "@/src/content/case-studies/quiz-game";
import recipe from "@/src/content/case-studies/recipe";
import thaihom from "@/src/content/case-studies/thaihom";
import { getProject } from "@/src/lib/projects";
import type { CaseStudy, CaseStudyKind } from "@/src/lib/case-studies/types";

export const caseStudiesBySlug = {
  homhuan,
  busaba,
  kuendee,
  flomax,
  bhaesaj,
  cio,
  bupha,
  jtimber,
  thaihom,
  "quiz-game": quizGame,
  "dementia-app": dementiaApp,
  recipe,
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

import bhaesaj from "@/src/content/case-studies/bhaesaj";
import blockShowcase from "@/src/content/case-studies/block-showcase";
import bupha from "@/src/content/case-studies/bupha";
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
import { getProjectForCaseStudy } from "@/src/lib/projects";
import type { CaseStudy } from "@/src/lib/case-studies/types";

const caseStudiesBySlug = {
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
  "block-showcase": blockShowcase,
} as const satisfies Record<string, CaseStudy>;

export type CaseStudySlug = keyof typeof caseStudiesBySlug;

export function getRegisteredCaseStudySlugs(): CaseStudySlug[] {
  return Object.keys(caseStudiesBySlug) as CaseStudySlug[];
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  if (!(slug in caseStudiesBySlug)) return undefined;
  const caseStudy = caseStudiesBySlug[slug as CaseStudySlug];

  if (process.env.NODE_ENV === "development") {
    const project = getProjectForCaseStudy(slug);

    if (!project) {
      console.warn(
        `[case-study] registry slug "${slug}" has no matching project`,
      );
    } else if (project.caseStudyKind !== caseStudy.kind) {
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

export type {
  CaseStudy,
  CaseStudyHook,
  CaseStudyKind,
  CaseStudyNavItem,
  CaseStudyQuickFacts,
  CaseStudySectionContent,
  ChromeSectionId,
  ContentBlock,
  MajorCaseStudy,
  MajorSectionId,
  MinorCaseStudy,
  MinorSectionId,
} from "@/src/lib/case-studies/types";

export {
  getCaseStudyNav,
  MAJOR_SECTION_DEFAULT_TITLES,
  MINOR_SECTION_DEFAULT_TITLES,
} from "@/src/lib/case-studies/sections";

export {
  caseStudiesBySlug,
  getCaseStudy,
  getCaseStudySlugs,
} from "@/src/lib/case-studies/registry";

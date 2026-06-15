export type {
  CaseStudy,
  CaseStudyKind,
  CaseStudyNavItem,
  ChromeSectionId,
  MajorCaseStudy,
  MajorCaseStudyHero,
  MajorContentBlock,
  MajorSectionContent,
  MajorSectionId,
  MinorCaseStudy,
  MinorSectionId,
  MinorSections,
} from "@/src/lib/case-studies/types";

export {
  getCaseStudyNav,
  getMinorSectionEyebrows,
  getMinorSectionLabel,
  getMinorSectionOrder,
  MAJOR_SECTION_ORDER,
  MINOR_SECTION_ORDER,
} from "@/src/lib/case-studies/sections";

export {
  caseStudiesBySlug,
  getCaseStudy,
  getCaseStudySlugs,
} from "@/src/lib/case-studies/registry";

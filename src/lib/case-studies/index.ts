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
  getMinorSectionOrder,
  MAJOR_SECTION_ORDER,
} from "@/src/lib/case-studies/sections";

export { getCaseStudy } from "@/src/lib/case-studies/registry";
export { collectCaseStudyImages } from "@/src/lib/case-studies/collect-images";

import type {
  CaseStudy,
  MajorContentBlock,
  MajorSectionContent,
} from "@/src/lib/case-studies/types";
import type { Project } from "@/src/lib/projects";

function collectFromBlock(block: MajorContentBlock, urls: Set<string>): void {
  switch (block.type) {
    case "image":
      urls.add(block.src);
      break;
    case "imagePair":
    case "imageGrid":
      for (const item of block.items) {
        urls.add(item.src);
      }
      break;
    case "findings":
      for (const item of block.items) {
        if (item.image) urls.add(item.image);
      }
      break;
    case "video":
      urls.add(block.poster);
      break;
  }
}

function collectFromSection(section: MajorSectionContent, urls: Set<string>): void {
  for (const block of section.blocks) {
    collectFromBlock(block, urls);
  }
}

function collectFromSections(sections: MajorSectionContent[], urls: Set<string>): void {
  for (const section of sections) {
    collectFromSection(section, urls);
  }
}

/** Collects unique raster image URLs from a case study and optional next-project cover. */
export function collectCaseStudyImages(
  caseStudy: CaseStudy,
  nextProject?: Project,
): string[] {
  const urls = new Set<string>();

  if (caseStudy.hero.image?.src) {
    urls.add(caseStudy.hero.image.src);
  }

  if (caseStudy.kind === "major") {
    collectFromSections(Object.values(caseStudy.sections), urls);
  } else {
    const { context, work, outcome, approach } = caseStudy.sections;
    collectFromSections([context, work, outcome, ...(approach ? [approach] : [])], urls);
  }

  if (nextProject?.coverImage?.src) {
    urls.add(nextProject.coverImage.src);
  }

  return [...urls];
}

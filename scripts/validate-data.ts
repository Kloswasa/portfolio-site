import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { COMPONENT_CATALOG } from "../app/components/catalog";
import {
  getCaseStudySlugForProject,
  projects,
} from "../src/lib/projects";
import {
  getCaseStudy,
  getRegisteredCaseStudySlugs,
} from "../src/lib/case-studies/registry";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function validateCaseStudies(errors: string[]): void {
  for (const project of projects) {
    const registrySlug = getCaseStudySlugForProject(project);
    const caseStudy = getCaseStudy(registrySlug);

    if (!caseStudy) {
      errors.push(
        `Project "${project.slug}" (id ${project.id}) resolves to registry slug "${registrySlug}" but no case study exists`,
      );
      continue;
    }

    if (caseStudy.kind !== project.caseStudyKind) {
      errors.push(
        `Project "${project.slug}": caseStudyKind "${project.caseStudyKind}" !== case study kind "${caseStudy.kind}"`,
      );
    }

    if (caseStudy.slug !== registrySlug) {
      errors.push(
        `Registry slug "${registrySlug}": case study internal slug "${caseStudy.slug}" mismatch`,
      );
    }
  }

  for (const registrySlug of getRegisteredCaseStudySlugs()) {
    const project = projects.find(
      (entry) => getCaseStudySlugForProject(entry) === registrySlug,
    );

    if (!project) {
      errors.push(
        `Registry slug "${registrySlug}" has no matching project`,
      );
    }
  }
}

function validateComponentCatalog(errors: string[]): void {
  for (const entry of COMPONENT_CATALOG) {
    const segments = entry.path.split(" · ");

    for (const segment of segments) {
      const trimmed = segment.trim();
      if (!trimmed.endsWith(".tsx")) continue;

      const absolutePath = resolve(repoRoot, trimmed);
      if (!existsSync(absolutePath)) {
        errors.push(
          `Catalog entry "${entry.id}": path "${trimmed}" does not exist`,
        );
      }
    }
  }
}

function main(): void {
  const errors: string[] = [];

  validateCaseStudies(errors);
  validateComponentCatalog(errors);

  if (errors.length > 0) {
    console.error("Data-layer validation failed:\n");
    for (const error of errors) {
      console.error(`  - ${error}`);
    }
    process.exit(1);
  }

  console.log("Data-layer validation passed.");
}

main();

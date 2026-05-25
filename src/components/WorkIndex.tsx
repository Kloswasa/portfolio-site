"use client";

import { useCallback } from "react";
import { TabbedGridSection } from "@/src/components/TabbedGridSection";
import ProjectCard from "@/src/components/ProjectCard";
import type { Project, WorkTab } from "@/src/lib/projects";

const TABS: { key: WorkTab; label: string }[] = [
  { key: "product", label: "Product" },
  { key: "pack", label: "Pack" },
  { key: "graphic", label: "Graphic" },
];

export default function WorkIndex({ projects }: { projects: Project[] }) {
  const getItems = useCallback(
    (tab: WorkTab) => projects.filter((p) => p.workTab === tab),
    [projects],
  );

  return (
    <TabbedGridSection
      tabs={TABS}
      defaultTab="product"
      tabAriaLabel="Work categories"
      eyebrow="Selected"
      title="Work"
      description="Product, packaging, and graphic work — sorted by how I think about them, not when they shipped."
      getItems={getItems}
      getItemKey={(project) => project.id}
      renderItem={(project) => (
        <ProjectCard
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          tone={project.tone}
          liveUrl={project.liveUrl}
          sourceUrl={project.sourceUrl}
          href={`/work/${project.slug}`}
        />
      )}
    />
  );
}

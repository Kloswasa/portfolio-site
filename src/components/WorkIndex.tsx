"use client";

import { useId, useMemo, useState } from "react";
import ProjectCard from "@/src/components/ProjectCard";
import { TabBar, TabBarTab } from "@/src/components/ui/TabBar";
import type { Project, WorkTab } from "@/src/lib/projects";

const TABS: { key: WorkTab; label: string }[] = [
  { key: "product", label: "Product" },
  { key: "pack", label: "Pack" },
  { key: "graphic", label: "Graphic" },
];

export default function WorkIndex({ projects }: { projects: Project[] }) {
  const baseId = useId();
  const [tab, setTab] = useState<WorkTab>("product");

  const items = useMemo(() => projects.filter((p) => p.workTab === tab), [projects, tab]);

  return (
    <>
      <header className="max-w-xl">
        <span className="eyebrow">
          Selected
        </span>
        <h1 className="text-heading-4xl md:text-heading-5xl">Work</h1>
        <p className="mt-2 max-w-xl font-body text-base font-light leading-relaxed text-text-muted">
          Product, packaging, and graphic work — sorted by how I think about them, not when they
          shipped.
        </p>
      </header>

      <TabBar aria-label="Work categories" className="mt-8 md:mt-10">
        {TABS.map(({ key, label }) => (
          <TabBarTab
            key={key}
            id={`${baseId}-tab-${key}`}
            active={tab === key}
            onClick={() => setTab(key)}
          >
            {label}
          </TabBarTab>
        ))}
      </TabBar>

      <div className="grid gap-4 md:grid-cols-3 md:gap-4" key={tab}>
        {items.length === 0 ? (
          <p className="col-span-full font-body text-text-muted">
            Nothing here yet — I&apos;m still drawing.
          </p>
        ) : (
          items.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              tone={project.tone}
              liveUrl={project.liveUrl}
              sourceUrl={project.sourceUrl}
              href={`/work/${project.slug}`}
            />
          ))
        )}
      </div>
    </>
  );
}

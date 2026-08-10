"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/src/components/ui/FilterBar";
import { ImagePreloader } from "@/src/components/ui/ImagePreloader";
import { PageEndSection } from "@/src/components/ui/PageEndSection";
import { WorkGrid } from "@/src/components/work/WorkGrid";
import { WorkHero } from "@/src/components/work/WorkHero";
import { collectWorkCardImages } from "@/src/lib/collect-card-images";
import type {
  WorkArchiveProject,
  WorkEndCopy,
  WorkFilterKey,
  WorkFilterOption,
  WorkHeroMeta,
} from "@/src/lib/work/types";

const FILTER_MAP: Record<WorkFilterKey, (filters: string[]) => boolean> = {
  all: () => true,
  product: (filters) => filters.includes("product"),
  industrial: (filters) => filters.includes("industrial"),
  pack: (filters) => filters.includes("pack"),
  graphic: (filters) => filters.includes("graphic"),
  major: (filters) => filters.includes("major"),
};

interface WorkViewProps {
  projects: WorkArchiveProject[];
  filterOptions: WorkFilterOption[];
  heroMeta: WorkHeroMeta;
  endCopy: WorkEndCopy;
}

export function WorkView({
  projects,
  filterOptions,
  heroMeta,
  endCopy,
}: WorkViewProps) {
  const [activeFilter, setActiveFilter] = useState<WorkFilterKey>("all");

  const filteredProjects = useMemo(() => {
    const predicate = FILTER_MAP[activeFilter];
    return projects.filter((project) => predicate(project.filters));
  }, [activeFilter, projects]);

  const imageUrls = useMemo(
    () => collectWorkCardImages(projects),
    [projects],
  );

  return (
    <ImagePreloader imageUrls={imageUrls}>
      <div className="work-page">
      <WorkHero meta={heroMeta} />
      <FilterBar
        options={filterOptions}
        active={activeFilter}
        count={filteredProjects.length}
        onFilter={setActiveFilter}
        containerClassName="work-container"
        ariaLabel="Filter work entries"
        tabAriaLabel="Work filters"
      />
      <div className="work-body">
        <WorkGrid projects={filteredProjects} />
        <div className="work-container">
          <PageEndSection copy={endCopy} />
        </div>
      </div>
      </div>
    </ImagePreloader>
  );
}

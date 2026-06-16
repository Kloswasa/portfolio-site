"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/src/components/ui/FilterBar";
import { GalleryGrid } from "@/src/components/gallery/GalleryGrid";
import { GalleryHero } from "@/src/components/gallery/GalleryHero";
import type {
  GalleryFilterKey,
  GalleryFilterOption,
  GalleryHeroMeta,
  GalleryProject,
} from "@/src/lib/gallery/types";

const FILTER_MAP: Record<GalleryFilterKey, (filters: string[]) => boolean> = {
  all: () => true,
  product: (filters) => filters.includes("product"),
  industrial: (filters) => filters.includes("industrial"),
  pack: (filters) => filters.includes("pack"),
  graphic: (filters) => filters.includes("graphic"),
  major: (filters) => filters.includes("major"),
};

interface GalleryViewProps {
  projects: GalleryProject[];
  filterOptions: GalleryFilterOption[];
  heroMeta: GalleryHeroMeta;
}

export function GalleryView({
  projects,
  filterOptions,
  heroMeta,
}: GalleryViewProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterKey>("all");

  const filteredProjects = useMemo(() => {
    const predicate = FILTER_MAP[activeFilter];
    return projects.filter((project) => predicate(project.filters));
  }, [activeFilter, projects]);

  return (
    <div className="gallery-page">
      <GalleryHero meta={heroMeta} />
      <FilterBar
        options={filterOptions}
        active={activeFilter}
        count={filteredProjects.length}
        onFilter={setActiveFilter}
        containerClassName="gallery-container"
        ariaLabel="Filter work entries"
        tabAriaLabel="Work filters"
      />
      <div className="gallery-body">
        <GalleryGrid projects={filteredProjects} />
      </div>
    </div>
  );
}

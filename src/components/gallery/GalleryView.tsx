"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/src/components/ui/FilterBar";
import { GalleryFooter } from "@/src/components/gallery/GalleryFooter";
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
  pack: (filters) => filters.includes("pack"),
  graphic: (filters) => filters.includes("graphic"),
  major: (filters) => filters.includes("major"),
};

interface GalleryViewProps {
  projects: GalleryProject[];
  filterOptions: GalleryFilterOption[];
  heroMeta: GalleryHeroMeta;
  footer: {
    name: string;
    note: string;
  };
}

export function GalleryView({
  projects,
  filterOptions,
  heroMeta,
  footer,
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
        ariaLabel="Filter gallery entries"
        tabAriaLabel="Gallery filters"
      />
      <div className="gallery-body">
        <GalleryGrid projects={filteredProjects} />
      </div>
      <GalleryFooter name={footer.name} note={footer.note} />
    </div>
  );
}

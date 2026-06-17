"use client";

import { FilterBar, FilterBarAction } from "@/src/components/ui/FilterBar";
import { PlayEndMark } from "@/src/components/play/PlayEndMark";
import { PlayHero } from "@/src/components/play/PlayHero";
import { PlayMediumBlock } from "@/src/components/play/PlayMediumBlock";
import { PlayViewer } from "@/src/components/play/PlayViewer";
import type {
  PlayFilterKey,
  PlayFilterOption,
  PlayHeroMeta,
  PlayMediumSection,
  PlayWork,
} from "@/src/lib/play/types";
import { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface PlayViewProps {
  works: PlayWork[];
  filterOptions: PlayFilterOption[];
  heroMeta: PlayHeroMeta;
  mediumSections: PlayMediumSection[];
  endCopy: {
    label: string;
    cta: { label: string; href: string };
  };
}

export function PlayView({
  works,
  filterOptions,
  heroMeta,
  mediumSections,
  endCopy,
}: PlayViewProps) {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<PlayFilterKey>("all");
  const [motionPaused, setMotionPaused] = useState(reduceMotion === true);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const visibleWorks = useMemo(() => {
    if (activeFilter === "all") return works;
    return works.filter((work) => work.medium === activeFilter);
  }, [activeFilter, works]);

  const worksByMedium = useMemo(() => {
    const illustration = visibleWorks.filter((w) => w.medium === "illustration");
    const code = visibleWorks.filter((w) => w.medium === "code");
    return { illustration, code };
  }, [visibleWorks]);

  const openWork = (work: PlayWork) => {
    const index = visibleWorks.findIndex((w) => w.id === work.id);
    if (index === -1) return;
    setViewerIndex(index);
    setViewerOpen(true);
  };

  return (
    <div className="play-page">
      <PlayHero meta={heroMeta} />

      <FilterBar
        options={filterOptions}
        active={activeFilter}
        count={visibleWorks.length}
        onFilter={setActiveFilter}
        containerClassName="play-container"
        ariaLabel="Filter play entries"
        tabAriaLabel="Play filters"

        
      />

      <div className="play-gallery play-container">
        {mediumSections.map((section) => (
          <PlayMediumBlock
            key={section.medium}
            section={section}
            works={worksByMedium[section.medium]}
            hidden={activeFilter !== "all" && activeFilter !== section.medium}
            motionPaused={motionPaused}
            onOpen={openWork}
          />
        ))}

        <PlayEndMark label={endCopy.label} cta={endCopy.cta} />
      </div>

      <PlayViewer
        works={visibleWorks}
        currentIndex={viewerIndex}
        open={viewerOpen}
        motionPaused={motionPaused}
        onClose={() => setViewerOpen(false)}
        onNavigate={setViewerIndex}
      />
    </div>
  );
}

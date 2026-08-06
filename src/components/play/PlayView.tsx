"use client";

import { FilterBar, FilterBarAction } from "@/src/components/ui/FilterBar";
import { PageEndSection } from "@/src/components/ui/PageEndSection";
import { PlayHero } from "@/src/components/play/PlayHero";
import { PlayMediumBlock } from "@/src/components/play/PlayMediumBlock";
import { PlayViewer } from "@/src/components/play/PlayViewer";
import { PlayEndCopy } from "@/src/lib/play/types";
import type {
  PlayFilterKey,
  PlayFilterOption,
  PlayHeroMeta,
  PlayMediumSection,
  PlayWork,
} from "@/src/lib/play/types";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface PlayViewProps {
  works: PlayWork[];
  filterOptions: PlayFilterOption[];
  heroMeta: PlayHeroMeta;
  mediumSections: PlayMediumSection[];
  endCopy: PlayEndCopy;
  /** Open this work in the viewer on load (e.g. from `/play?work=compose-zone`). */
  initialWorkId?: string;
}


export function PlayView({
  works,
  filterOptions,
  heroMeta,
  mediumSections,
  endCopy,
  initialWorkId,
}: PlayViewProps) {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<PlayFilterKey>("all");
  const [motionPaused, setMotionPaused] = useState(reduceMotion === true);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  useEffect(() => {
    if (!initialWorkId) return;
    const index = works.findIndex((w) => w.id === initialWorkId);
    if (index === -1) return;
    setActiveFilter("all");
    setViewerIndex(index);
    setViewerOpen(true);
  }, [initialWorkId, works]);

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

      <div className="play-body play-container">
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

        <PageEndSection copy={endCopy} showOrnament />
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

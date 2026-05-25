"use client";

import { useCallback, useState } from "react";
import { PlayImageLightbox } from "@/src/components/PlayImageLightbox";
import { TabbedGridSection } from "@/src/components/TabbedGridSection";
import ProjectCard from "@/src/components/ProjectCard";
import type { PlayItem, PlayTab } from "@/src/lib/play";

const TABS: { key: PlayTab; label: string }[] = [
  { key: "illustration", label: "Illustration" },
  { key: "experiments", label: "Experiments" },
];

export default function PlayIndex({
  illustration,
  experiments,
}: {
  illustration: PlayItem[];
  experiments: PlayItem[];
}) {
  const [lightboxItem, setLightboxItem] = useState<PlayItem | null>(null);

  const getItems = useCallback(
    (tab: PlayTab) => (tab === "illustration" ? illustration : experiments),
    [illustration, experiments],
  );

  return (
    <TabbedGridSection
      before={
        <PlayImageLightbox
          item={lightboxItem}
          open={lightboxItem !== null}
          onClose={() => setLightboxItem(null)}
        />
      }
      tabs={TABS}
      defaultTab="illustration"
      tabAriaLabel="Play categories"
      eyebrow="The other half"
      title="Play"
      description="Drawings, prints, and creative-code sketches — the things I make when nobody asked for them."
      getItems={getItems}
      getItemKey={(item) => item.title}
      renderItem={(item) => (
        <div className="group/play relative">
          <ProjectCard
            title={item.title}
            description={item.meta}
            technologies={[]}
            tone={item.tone}
            overlayInteraction
          />
          <button
            type="button"
            className="absolute inset-0 z-[25] cursor-pointer rounded-none bg-transparent p-0"
            aria-label={`Open full image: ${item.title}`}
            onClick={() => setLightboxItem(item)}
          />
        </div>
      )}
    />
  );
}

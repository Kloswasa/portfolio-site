"use client";

import { useId, useMemo, useState } from "react";
import { PlayImageLightbox } from "@/src/components/PlayImageLightbox";
import ProjectCard from "@/src/components/ProjectCard";
import { TabBar, TabBarTab } from "@/src/components/ui/TabBar";
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
  const baseId = useId();
  const [tab, setTab] = useState<PlayTab>("illustration");
  const [lightboxItem, setLightboxItem] = useState<PlayItem | null>(null);

  const items = useMemo(
    () => (tab === "illustration" ? illustration : experiments),
    [tab, illustration, experiments],
  );

  return (
    <>
      <PlayImageLightbox
        item={lightboxItem}
        open={lightboxItem !== null}
        onClose={() => setLightboxItem(null)}
      />

      <header className="max-w-xl">
        <span className="eyebrow">
          The other half
        </span>
        <h1 className="text-heading-4xl md:text-heading-5xl">Play</h1>
        <p className="mt-2 max-w-xl font-body text-base font-light leading-relaxed text-text-muted">
          Drawings, prints, and creative-code sketches — the things I make when nobody asked for
          them.
        </p>
      </header>

      <TabBar aria-label="Play categories" className="mt-8 md:mt-10">
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
          items.map((item) => (
            <div key={item.title} className="group/play relative">
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
          ))
        )}
      </div>
    </>
  );
}

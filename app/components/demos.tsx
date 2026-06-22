"use client";

import { useState } from "react";
import Link from "next/link";
import { PlayCard } from "@/src/components/play/PlayCard";
import { PlayEndMark } from "@/src/components/play/PlayEndMark";
import { FilterBar } from "@/src/components/ui/FilterBar";
import { HoverRippleLayer, useHoverRipple } from "@/src/components/ui/HoverRipple";
import NavRippleLink from "@/src/components/ui/NavRippleLink";
import { TabbedGridSection } from "@/src/components/TabbedGridSection";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import { FeaturedProjectStagger } from "@/src/components/FeaturedProjectStagger";
import { MenuButton } from "@/src/components/MenuButton";
import { NavProvider } from "@/src/context/NavContext";
import { PLAY_WORKS } from "@/src/lib/play/data";
import type { WorkCardProject } from "@/src/lib/work/types";

const FILTER_OPTIONS = [
  { key: "all", label: "All work" },
  { key: "product", label: "Product" },
  { key: "graphic", label: "Graphic" },
] as const;

type FilterKey = (typeof FILTER_OPTIONS)[number]["key"];

export function FilterBarDemo() {
  const [active, setActive] = useState<FilterKey>("all");
  const count = active === "all" ? 12 : 4;

  return (
    <FilterBar
      options={[...FILTER_OPTIONS]}
      active={active}
      count={count}
      onFilter={setActive}
      containerClassName="gallery-container"
    />
  );
}

export function PlayCardDemo() {
  const work = PLAY_WORKS[0]!;

  return (
    <div className="max-w-sm">
      <PlayCard work={work} motionPaused onOpen={() => {}} />
    </div>
  );
}

export function HoverRippleDemo() {
  const { onMouseEnter, onClick, ripples, duration, startOpacity } =
    useHoverRipple<HTMLButtonElement>();

  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className="btn btn-outline relative overflow-hidden"
    >
      <HoverRippleLayer
        ripples={ripples}
        duration={duration}
        startOpacity={startOpacity}
        color="var(--color-primary)"
      />
      <span className="relative">Hover or click</span>
    </button>
  );
}

export function NavRippleLinkDemo() {
  return (
    <div className="inline-flex rounded-none border border-border-subtle bg-bg">
      <NavRippleLink href="/work">Work</NavRippleLink>
      <NavRippleLink href="/play">Play</NavRippleLink>
      <NavRippleLink href="/about">About</NavRippleLink>
    </div>
  );
}

export function SnapSectionRevealDemo() {
  return (
    <div className="rounded-none border border-dashed border-border-subtle p-4">
      <SnapSectionReveal immediate className="grid gap-4">
        <SnapItem className="bg-surface p-4 font-body text-sm text-text">
          First item in the stagger cascade.
        </SnapItem>
        <SnapItem className="bg-surface p-4 font-body text-sm text-text">
          Second item — delayed by the parent coordinator.
        </SnapItem>
        <SnapItem className="bg-surface p-4 font-body text-sm text-text">
          Third item completes the sequence.
        </SnapItem>
      </SnapSectionReveal>
    </div>
  );
}

type DemoTab = "alpha" | "beta" | "gamma";

const DEMO_ITEMS: Record<DemoTab, { id: string; label: string }[]> = {
  alpha: [
    { id: "a1", label: "Alpha one" },
    { id: "a2", label: "Alpha two" },
    { id: "a3", label: "Alpha three" },
  ],
  beta: [{ id: "b1", label: "Beta one" }],
  gamma: [],
};

export function TabbedGridSectionDemo() {
  return (
    <TabbedGridSection<DemoTab, { id: string; label: string }>
      tabs={[
        { key: "alpha", label: "Alpha" },
        { key: "beta", label: "Beta" },
        { key: "gamma", label: "Gamma" },
      ]}
      defaultTab="alpha"
      tabAriaLabel="Demo categories"
      eyebrow="Composition"
      title="Tabbed grid shell"
      description="Shared header, TabBar, and responsive grid used on Work and Play index pages."
      getItems={(tab) => DEMO_ITEMS[tab]}
      getItemKey={(item) => item.id}
      renderItem={(item) => (
        <div className="card p-5 font-body text-sm text-text">{item.label}</div>
      )}
      emptyMessage="Nothing in this tab yet."
    />
  );
}

export function FeaturedProjectStaggerDemo({
  projects,
}: {
  projects: WorkCardProject[];
}) {
  return (
    <div className="featured-mosaic h-[28rem] max-w-4xl">
      <FeaturedProjectStagger projects={projects} />
    </div>
  );
}

export function MenuButtonDemo() {
  return (
    <NavProvider>
      <div className="inline-flex items-center gap-4 rounded-none border border-border-subtle bg-bg p-4">
        <MenuButton />
        <p className="font-body text-sm text-text-muted">
          Toggles nav state locally — open the site menu from the header for the
          full overlay.
        </p>
      </div>
    </NavProvider>
  );
}

export function PlayEndMarkDemo() {
  return (
    <PlayEndMark
      label="End of the play index"
      cta={{ label: "Back to home", href: "/" }}
    />
  );
}

export function CatalogNav({ sections }: { sections: { id: string; label: string }[] }) {
  return (
    <nav
      aria-label="Component sections"
      className="sticky top-20 z-10 hidden max-h-[calc(100dvh-6rem)] overflow-y-auto lg:block"
    >
      <p className="section-label">On this page</p>
      <ul className="flex flex-col gap-1 border-l border-border-subtle pl-4">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="font-body text-sm text-text-muted transition-colors hover:text-primary"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { PlayCard } from "@/src/components/play/PlayCard";
import { PLAY_END_COPY } from "@/src/content/play";
import { PageEndSection } from "@/src/components/ui/PageEndSection";
import { FilterBar } from "@/src/components/ui/FilterBar";
import { HoverRippleLayer, useHoverRipple } from "@/src/components/ui/HoverRipple";
import { NavRippleLink } from "@/src/components/ui/NavRippleLink";
import { TabBar, TabBarTab } from "@/src/components/ui/TabBar";
import { TabbedGridSection } from "@/src/components/ui/TabbedGridSection";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import { FeaturedProjectStagger } from "@/src/components/home/FeaturedProjectStagger";
import { MenuButton } from "@/src/components/chrome/MenuButton";
import { NavProvider } from "@/src/context/NavContext";
import { PLAY_WORKS } from "@/src/lib/play";
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
      containerClassName="work-container"
    />
  );
}

const WORK_TABS = [
  { key: "product" as const, label: "Product" },
  { key: "pack" as const, label: "Pack" },
  { key: "graphic" as const, label: "Graphic" },
];

export function TabBarDemo() {
  const baseId = useId();
  const [tab, setTab] = useState<(typeof WORK_TABS)[number]["key"]>("product");
  const panelId = `${baseId}-panel`;

  const copy: Record<(typeof WORK_TABS)[number]["key"], string> = {
    product: "Hero case studies and flagship product work.",
    pack: "Mid-tier packaging and brand extensions.",
    graphic: "Graphic design, print, and accessories.",
  };

  return (
    <div className="max-w-xl">
      <TabBar aria-label="Work categories">
        {WORK_TABS.map(({ key, label }) => (
          <TabBarTab
            key={key}
            id={`${baseId}-tab-${key}`}
            active={tab === key}
            onClick={() => setTab(key)}
            ariaControls={panelId}
          >
            {label}
          </TabBarTab>
        ))}
      </TabBar>
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tab}`}
        className="rounded-none border border-border-subtle bg-surface px-5 py-4 font-body text-sm text-text-muted"
      >
        {copy[tab]}
      </div>
    </div>
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

export function PageEndSectionDemo() {
  return <PageEndSection copy={PLAY_END_COPY} showOrnament />;
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

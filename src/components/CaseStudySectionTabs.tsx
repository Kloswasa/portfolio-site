"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { TabBar, TabBarTab } from "@/src/components/ui/TabBar";

const SECTIONS = [
  { id: "hook", label: "01 Hook" },
  { id: "context", label: "02 Context" },
  { id: "process", label: "03 Process" },
  { id: "solution", label: "04 Solution" },
  { id: "outcome", label: "05 Outcome" },
  { id: "next", label: "Next" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

/** Viewport line (px from top) used to pick the “current” section while scrolling */
const ACTIVATION_LINE_PX = 140;

function isSectionId(hash: string): hash is SectionId {
  return SECTIONS.some((s) => s.id === hash);
}

export function CaseStudySectionTabs() {
  const baseId = useId();
  const [active, setActive] = useState<SectionId>("hook");

  const syncFromHash = useCallback(() => {
    const raw = window.location.hash.replace(/^#/, "");
    if (raw && isSectionId(raw)) setActive(raw);
  }, []);

  const pickActiveFromScroll = useCallback(() => {
    let current: SectionId = SECTIONS[0].id;
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= ACTIVATION_LINE_PX) current = id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  useEffect(() => {
    pickActiveFromScroll();
    window.addEventListener("scroll", pickActiveFromScroll, { passive: true });
    window.addEventListener("resize", pickActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", pickActiveFromScroll);
      window.removeEventListener("resize", pickActiveFromScroll);
    };
  }, [pickActiveFromScroll]);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="sticky top-16 z-10 -mx-6 border-t border-border-subtle bg-bg/90 px-6 py-3 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <span className="shrink-0 pt-0.5 font-mono text-xs text-text-muted">Case study</span>
        <TabBar aria-label="Case study sections" className="mb-0 min-w-0 flex-1 flex-wrap sm:justify-end">
          {SECTIONS.map(({ id, label }) => (
            <TabBarTab
              key={id}
              id={`${baseId}-tab-${id}`}
              active={active === id}
              onClick={() => scrollToSection(id)}
              ariaControls={id}
            >
              {label}
            </TabBarTab>
          ))}
        </TabBar>
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { TabBar, TabBarTab } from "@/src/components/ui/TabBar";
import type { CaseStudyNavItem } from "@/src/lib/case-studies/types";

/** Viewport line (px from top) used to pick the “current” section while scrolling */
const ACTIVATION_LINE_PX = 140;

function isNavSectionId(
  sections: readonly CaseStudyNavItem[],
  hash: string,
): hash is string {
  return sections.some((s) => s.id === hash);
}

export function CaseStudySectionTabs({
  sections,
}: {
  sections: readonly CaseStudyNavItem[];
}) {
  const baseId = useId();
  const firstId = sections[0]?.id ?? "hook";
  const [active, setActive] = useState(firstId);

  const syncFromHash = useCallback(() => {
    const raw = window.location.hash.replace(/^#/, "");
    if (raw && isNavSectionId(sections, raw)) setActive(raw);
  }, [sections]);

  const pickActiveFromScroll = useCallback(() => {
    let current = firstId;
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= ACTIVATION_LINE_PX) current = id;
    }
    setActive(current);
  }, [sections, firstId]);

  useEffect(() => {
    setActive(firstId);
  }, [firstId, sections]);

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="sticky top-16 z-10 -mx-6 border-t border-border-subtle bg-bg/90 px-6 py-3 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <span className="shrink-0 pt-0.5 font-mono text-xs text-text-muted pl-8">
          Case study
        </span>
        <TabBar
          aria-label="Case study sections"
          className="mb-0 min-w-0 flex-1 flex-wrap sm:justify-end"
        >
          {sections.map(({ id, label }) => (
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

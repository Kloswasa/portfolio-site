"use client";

import { useCallback, useEffect, useState } from "react";
import type { CaseStudyNavItem } from "@/src/lib/case-studies/types";

const ACTIVATION_LINE_PX = 120;

export function MajorChapterNav({
  sections,
}: {
  sections: readonly CaseStudyNavItem[];
}) {
  const contentSections = sections.filter((s) => s.id !== "next");
  const [active, setActive] = useState(contentSections[0]?.id ?? "brief");

  const pickActive = useCallback(() => {
    let current = contentSections[0]?.id ?? "brief";
    for (const { id } of contentSections) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= ACTIVATION_LINE_PX) current = id;
    }
    setActive(current);
  }, [contentSections]);

  useEffect(() => {
    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, [pickActive]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="cs-major__chapter-nav-shell">
      <nav className="cs-major__chapter-nav" aria-label="Chapter navigation">
        <p className="cs-major__chapter-label">Contents</p>
        <div className="cs-major__chapter-list">
          {contentSections.map(({ id, label }) => {
            const selected = active === id;
            return (
              <button
                key={id}
                type="button"
                className="cs-major__chapter-link"
                data-active={selected ? "true" : undefined}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

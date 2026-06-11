"use client";

import { useCallback, useEffect, useState } from "react";
import type { CaseStudyNavItem } from "@/src/lib/case-studies/types";

const ACTIVATION_LINE_PX = 120;

export function DesignerChapterNav({
  sections,
}: {
  sections: readonly CaseStudyNavItem[];
}) {
  const contentSections = sections.filter((s) => s.id !== "next");
  const [active, setActive] = useState(contentSections[0]?.id ?? "context");

  const pickActive = useCallback(() => {
    let current = contentSections[0]?.id ?? "context";
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
    <nav className="cs-designer__chapter-nav" aria-label="Chapter navigation">
      <div className="cs-designer__chapter-label">Contents</div>
      {contentSections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className="cs-designer__chapter-link"
          data-active={active === id}
          onClick={() => scrollTo(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

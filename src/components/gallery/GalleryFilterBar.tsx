"use client";

import type { GalleryFilterKey, GalleryFilterOption } from "@/src/lib/gallery/types";

interface GalleryFilterBarProps {
  options: GalleryFilterOption[];
  active: GalleryFilterKey;
  count: number;
  onFilter: (key: GalleryFilterKey) => void;
}

export function GalleryFilterBar({
  options,
  active,
  count,
  onFilter,
}: GalleryFilterBarProps) {
  return (
    <div className="gallery-filter-shell">
      <div className="gallery-filter gallery-container" aria-label="Filter gallery entries">
      <div className="gallery-filter__left" role="tablist" aria-label="Gallery filters">
        {options.map((option) => {
          const selected = option.key === active;
          return (
            <button
              key={option.key}
              type="button"
              role="tab"
              aria-selected={selected}
              className="gallery-filter__option"
              data-active={selected ? "true" : undefined}
              onClick={() => onFilter(option.key)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p className="gallery-filter__count" aria-live="polite">
        <span className="gallery-filter__count-value">
          {String(count).padStart(2, "0")}
        </span>
        <span className="gallery-filter__count-label">showing</span>
      </p>
      </div>
    </div>
  );
}

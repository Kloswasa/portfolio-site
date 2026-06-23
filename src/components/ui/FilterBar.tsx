"use client";

import type { ReactNode } from "react";

export interface FilterBarOption<T extends string = string> {
  key: T;
  label: string;
}

export interface FilterBarProps<T extends string> {
  options: FilterBarOption<T>[];
  active: T;
  count: number;
  onFilter: (key: T) => void;
  /** Page layout container class (e.g. `work-container`, `play-container`). */
  containerClassName: string;
  ariaLabel?: string;
  tabAriaLabel?: string;
  /** Optional controls after the count (e.g. motion toggle on Play). */
  trailing?: ReactNode;
}

export function FilterBar<T extends string>({
  options,
  active,
  count,
  onFilter,
  containerClassName,
  ariaLabel = "Filter entries",
  tabAriaLabel = "Filters",
  trailing,
}: FilterBarProps<T>) {
  return (
    <div className="filter-bar-shell">
      <div
        className={`filter-bar ${containerClassName}`}
        aria-label={ariaLabel}
      >
        <div className="filter-bar__left" role="tablist" aria-label={tabAriaLabel}>
          {options.map((option) => {
            const selected = option.key === active;
            return (
              <button
                key={option.key}
                type="button"
                role="tab"
                aria-selected={selected}
                className="filter-bar__option"
                data-active={selected ? "true" : undefined}
                onClick={() => onFilter(option.key)}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="filter-bar__right">
          <p className="filter-bar__count" aria-live="polite">
            <span className="filter-bar__count-value">
              {String(count).padStart(2, "0")}
            </span>
            <span className="filter-bar__count-label">showing</span>
          </p>
          {trailing ? <div className="filter-bar__trailing">{trailing}</div> : null}
        </div>
      </div>
    </div>
  );
}

interface FilterBarActionProps {
  pressed?: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

/** Secondary control slot for filter bars (e.g. pause/resume motion). */
export function FilterBarAction({
  pressed = false,
  onClick,
  icon,
  label,
}: FilterBarActionProps) {
  return (
    <button
      type="button"
      className="filter-bar__action"
      aria-pressed={pressed}
      onClick={onClick}
    >
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

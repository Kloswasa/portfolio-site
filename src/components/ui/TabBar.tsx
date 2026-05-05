import type { ReactNode } from "react";

export function TabBar({
  children,
  className,
  "aria-label": ariaLabel = "Tabs",
}: {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={["tab-bar", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

export function TabBarTab({
  id,
  active,
  onClick,
  children,
  ariaControls,
}: {
  id: string;
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  /** Optional id of the controlled `tabpanel` for accessibility */
  ariaControls?: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      aria-controls={ariaControls}
      className={active ? "tab tab-active" : "tab"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

"use client";

import * as React from "react";

type Theme = "light" | "dark";
type ThemeToggleTone = "default" | "inverse";

function getThemeFromDom(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle({
  tone = "default",
  className,
}: {
  tone?: ThemeToggleTone;
  className?: string;
}) {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    setTheme(getThemeFromDom());
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const base =
    "rounded-none px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.12em] transition";
  const defaultClasses =
    "border border-border-subtle bg-bg text-text-muted hover:border-border hover:text-text";
  const inverseClasses =
    "border border-text-inverse/25 bg-transparent text-text-inverse/70 hover:border-text-inverse/45 hover:text-text-inverse";

  return (
    <button
      type="button"
      className={[base, tone === "inverse" ? inverseClasses : defaultClasses, className]
        .filter(Boolean)
        .join(" ")}
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => {
        const next = getThemeFromDom() === "dark" ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem("theme", next);
        } catch {}
        setTheme(next);
      }}
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}


"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

type Theme = "light" | "dark";
type ThemeToggleTone = "default" | "inverse";

function getThemeFromDom(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function ThemeToggle({
  tone = "default",
  className,
}: {
  tone?: ThemeToggleTone;
  className?: string;
}) {
  const [theme, setTheme] = React.useState<Theme>("dark");
  const reduceMotion = useReducedMotion();

  React.useLayoutEffect(() => {
    setTheme(getThemeFromDom());
  }, []);

  const isDark = theme === "dark";
  const nextTheme: Theme = isDark ? "light" : "dark";
  const label = isDark ? "Dark" : "Light";

  const trackDefault =
    "border-border-subtle bg-surface text-text hover:border-border";
  const trackInverse =
    "border-text-inverse/25 bg-transparent text-text-inverse hover:border-text-inverse/45";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={[
        "relative inline-flex h-7 w-20 shrink-0 items-center border p-0.5 transition",
        tone === "inverse" ? trackInverse : trackDefault,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => {
        const next = getThemeFromDom() === "dark" ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem("theme", next);
        } catch {}
        setTheme(next);
      }}
    >
      <span
        aria-hidden
        className={[
          "absolute inset-y-0 flex items-center px-2 font-body text-xs font-semibold uppercase tracking-label-lg",
          isDark ? "left-0" : "right-0",
        ].join(" ")}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={[
          "relative z-10 block h-5 w-5 bg-current",
          isDark ? "translate-x-14" : "translate-x-0",
        ].join(" ")}
        style={{
          transition: reduceMotion
            ? undefined
            : "transform var(--duration-slow) var(--ease)",
        }}
      />
    </button>
  );
}

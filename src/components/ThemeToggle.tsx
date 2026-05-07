"use client";

import * as React from "react";

type Theme = "light" | "dark";

function getThemeFromDom(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    setTheme(getThemeFromDom());
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="rounded-none border border-border-subtle bg-bg px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.12em] text-text-muted transition hover:border-border hover:text-text"
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


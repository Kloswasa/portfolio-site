"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-3.5 w-3.5">
      <path
        fill="currentColor"
        d="M12 5.32C11.1228 5.32 10.2541 5.49278 9.44368 5.82849C8.63322 6.16419 7.89682 6.65623 7.27653 7.27653C6.65623 7.89682 6.16419 8.63322 5.82849 9.44368C5.49278 10.2541 5.32 11.1228 5.32 12C5.32 12.8772 5.49278 13.7459 5.82849 14.5563C6.16419 15.3668 6.65623 16.1032 7.27653 16.7235C7.89682 17.3438 8.63322 17.8358 9.44368 18.1715C10.2541 18.5072 11.1228 18.68 12 18.68C13.7716 18.68 15.4707 17.9762 16.7235 16.7235C17.9762 15.4707 18.68 13.7716 18.68 12C18.68 10.2284 17.9762 8.52927 16.7235 7.27653C15.4707 6.02378 13.7716 5.32 12 5.32ZM13.3333 21.3333H10.6667V24H13.3333V21.3333ZM10.6667 2.66667H13.3333V0H10.6667V2.66667ZM0 10.6667H2.66667V13.3333H0V10.6667ZM21.3333 10.6667H24V13.3333H21.3333V10.6667ZM4.45333 21.4267L5.4 20.48L6.34667 19.5467L5.4 18.6L4.45333 17.6533L3.52 18.6L2.57333 19.5467L3.52 20.48L4.45333 21.4267ZM19.5467 2.57333L18.6 3.52L17.6533 4.45333L18.6 5.4L19.5467 6.34667L20.48 5.4L21.4267 4.45333L20.48 3.52L19.5467 2.57333ZM4.45333 2.57333L3.52 3.52L2.57333 4.45333L3.52 5.4L4.45333 6.34667L5.4 5.4L6.34667 4.45333L5.4 3.52L4.45333 2.57333ZM19.5467 21.4267L20.48 20.48L21.4267 19.5467L20.48 18.6L19.5467 17.6533L18.6 18.6L17.6533 19.5467L18.6 20.48L19.5467 21.4267Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-3.5 w-3.5">
      <path
        fill="currentColor"
        d="M21.9535 15.6946C22.1802 15.1546 21.5324 14.6946 20.9891 14.9346C19.9029 15.4109 18.7295 15.6561 17.5435 15.6546C12.8934 15.6546 9.12451 11.9613 9.12451 7.40456C9.12404 5.86622 9.56104 4.35945 10.3845 3.06008C10.7001 2.56229 10.3212 1.8734 9.74341 2.02007C5.28892 3.15674 2 7.12567 2 11.8468C2 17.4547 6.63893 22.0003 12.3623 22.0003C16.6957 22.0003 20.4068 19.3947 21.9535 15.6946Z"
      />
      <path
        fill="currentColor"
        d="M16.0122 2.11452C15.4233 1.72118 14.7211 2.42341 15.1133 3.01231L15.8133 4.06232C16.0976 4.48795 16.2493 4.98829 16.2493 5.50011C16.2493 6.01193 16.0976 6.51227 15.8133 6.9379L15.1133 7.98791C14.7211 8.57681 15.4244 9.27904 16.0133 8.8857L17.0622 8.18569C17.4878 7.90145 17.9882 7.74974 18.5 7.74974C19.0118 7.74974 19.5122 7.90145 19.9378 8.18569L20.9878 8.8857C21.5767 9.27904 22.2789 8.57681 21.8856 7.98791L21.1856 6.9379C20.9013 6.51227 20.7496 6.01193 20.7496 5.50011C20.7496 4.98829 20.9013 4.48795 21.1856 4.06232L21.8856 3.01231C22.2789 2.42341 21.5767 1.72118 20.9867 2.11452L19.9378 2.81453C19.5122 3.09878 19.0118 3.25048 18.5 3.25048C17.9882 3.25048 17.4878 3.09878 17.0622 2.81453L16.0122 2.11452Z"
      />
    </svg>
  );
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
  const trackDefault =
    "border-border-subtle bg-surface hover:border-border";
  const trackInverse =
    "border-text-inverse/25 bg-transparent hover:border-text-inverse/45";
  const thumb = tone === "inverse" ? "bg-text-inverse" : "bg-text";
  const icon = tone === "inverse" ? "text-text dark:text-bg" : "text-bg";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={[
        "relative inline-flex h-7 w-12 shrink-0 items-center border p-0.5 transition",
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
          "relative flex h-6 w-6 items-center justify-center",
          thumb,
          isDark ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
        style={{
          transition: reduceMotion
            ? undefined
            : "transform var(--duration-slow) var(--ease)",
        }}
      >
        <span className={["relative block h-3.5 w-3.5", icon].join(" ")}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              className="absolute inset-0 flex items-center justify-center"
              initial={reduceMotion ? false : { opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.28, ease: [0.4, 0, 0.2, 1] }
              }
            >
              {isDark ? <MoonIcon /> : <SunIcon />}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </button>
  );
}

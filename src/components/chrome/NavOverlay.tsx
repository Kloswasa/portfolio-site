'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useNav } from "@/src/context/NavContext";
import { ThemeToggle } from "@/src/components/chrome/ThemeToggle";
import {
  HoverRippleLayer,
  NAV_RIPPLE_DURATION,
  useHoverRipple,
} from "@/src/components/ui/HoverRipple";

const links = [
  { href: "/", label: "Home", num: "01" },
  { href: "/work", label: "Works", num: "02" },
  { href: "/play", label: "Play", num: "03" },
  { href: "/about", label: "About", num: "04" },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;
const easeInExpo = [0.55, 0, 1, 0.45] as const;

/** Panel open / fold durations (explicit sequencing — don't rely on exit `delay`). */
const OPEN_PANEL_DURATION = 0.6;
const FOLD_PANEL_DURATION = 0.45;

/** Nav rows + footer fade out together before the sheet folds. */
const EXIT_CONTENT_DURATION = 0.30;
const EXIT_PAUSE_BEFORE_FOLD = 0.08;

type ClosingPhase = null | "contentFade" | "panelFold";

const linkVariants: Variants = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

const containerVariants: Variants = {
  closed: {},
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const reducedLinkVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0 } },
};

const reducedContainerVariants: Variants = {
  closed: {},
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

export function NavOverlay() {
  const { navOpen, setNavOpen, setLoading } = useNav();
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  /** Overlay stays mounted through the staged close; `navOpen` can false before unmount. */
  const [mounted, setMounted] = React.useState(false);
  const [closingPhase, setClosingPhase] = React.useState<ClosingPhase>(null);

  const timeouts = React.useRef<number[]>([]);
  /** Bumps when menu opens — stale close timeouts must not unmount mid-reopen. */
  const overlayEpoch = React.useRef(0);

  React.useEffect(() => {
    return () => {
      timeouts.current.forEach((t) => window.clearTimeout(t));
      timeouts.current = [];
    };
  }, []);

  React.useEffect(() => {
    if (navOpen) {
      overlayEpoch.current += 1;
      setMounted(true);
      setClosingPhase(null);
    }
  }, [navOpen]);

  React.useLayoutEffect(() => {
    if (!navOpen && mounted && !reduceMotion && closingPhase === null) {
      setClosingPhase("contentFade");
    }
  }, [navOpen, mounted, reduceMotion, closingPhase]);

  React.useEffect(() => {
    if (!navOpen && mounted && reduceMotion) {
      setMounted(false);
      setClosingPhase(null);
    }
  }, [navOpen, mounted, reduceMotion]);

  React.useEffect(() => {
    if (closingPhase !== "contentFade" || reduceMotion) return undefined;
    const epoch = overlayEpoch.current;
    const ms = (EXIT_CONTENT_DURATION + EXIT_PAUSE_BEFORE_FOLD) * 1000;
    const id = window.setTimeout(() => {
      if (overlayEpoch.current === epoch) setClosingPhase("panelFold");
    }, ms);
    return () => window.clearTimeout(id);
  }, [closingPhase, reduceMotion]);

  React.useEffect(() => {
    if (closingPhase !== "panelFold" || reduceMotion) return undefined;
    const epoch = overlayEpoch.current;
    const ms = FOLD_PANEL_DURATION * 1000;
    const id = window.setTimeout(() => {
      if (overlayEpoch.current !== epoch) return;
      setMounted(false);
      setClosingPhase(null);
    }, ms);
    return () => window.clearTimeout(id);
  }, [closingPhase, reduceMotion]);

  function navigate(href: string) {
    // Same-route click: just close the overlay. Skipping the loader avoids a
    // hang since the pathname-watching effect in NavContext won't fire.
    if (href === pathname) {
      setNavOpen(false);
      return;
    }

    setNavOpen(false);
    setLoading(true);

    if (reduceMotion) {
      router.push(href);
      // loading is cleared by NavContext when pathname changes
      return;
    }

    // Push the route after the loader's fade-in completes (200 ms) so the
    // page-transition animations are fully hidden beneath the loader.
    timeouts.current.push(window.setTimeout(() => router.push(href), 280));
    // loading is cleared by NavContext when pathname changes
  }

  const contentInvisible = closingPhase === "contentFade" || closingPhase === "panelFold";

  function scheduleContentTransition(): {
    duration: number;
    ease: typeof easeInExpo | "easeOut";
  } {
    if (closingPhase === "panelFold") return { duration: 0, ease: "easeOut" };
    if (contentInvisible)
      return { duration: EXIT_CONTENT_DURATION, ease: easeInExpo };
    return { duration: 0, ease: "easeOut" };
  }

  function schedulePanelScaleTransition(): {
    duration: number;
    ease: typeof easeOutExpo | typeof easeInExpo;
  } {
    if (closingPhase === "panelFold") {
      return { duration: FOLD_PANEL_DURATION, ease: easeInExpo };
    }
    if (closingPhase === "contentFade") {
      return { duration: 0, ease: easeOutExpo };
    }
    return { duration: OPEN_PANEL_DURATION, ease: easeOutExpo };
  }

  /** Sheet stays expanded while links fade (`contentFade`). */
  const panelExpanded = closingPhase !== "panelFold";

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col justify-center bg-bg px-8 pb-8 pt-20 text-info-text"
      initial={
        reduceMotion ? { opacity: 0 } : { scaleY: 0, transformOrigin: "top center" }
      }
      animate={
        reduceMotion
          ? {
              opacity: mounted && navOpen ? 1 : 0,
            }
          : {
              scaleY: panelExpanded ? 1 : 0,
              transformOrigin: "top center",
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              scaleY: schedulePanelScaleTransition(),
            }
      }
    >
      {/* Hidden prefetch hints so transitions stay instant */}
      {links.map(({ href }) => (
        <Link key={`prefetch:${href}`} href={href} prefetch className="hidden">
          {href}
        </Link>
      ))}

      <motion.div
        initial={false}
        animate={
          reduceMotion
            ? { opacity: 1 }
            : {
                opacity: contentInvisible ? 0 : 1,
                y: contentInvisible ? 12 : 0,
              }
        }
        transition={reduceMotion ? { duration: 0 } : scheduleContentTransition()}
        className="flex min-h-0 flex-1 flex-col"
      >
        <motion.ul
          className="flex flex-col"
          variants={reduceMotion ? reducedContainerVariants : containerVariants}
          initial="closed"
          animate="open"
        >
          {links.map(({ href, label, num }) => (
            <motion.li
              key={href}
              className="border-t border-info-text/10 last:border-b last:border-info-text/10"
              variants={reduceMotion ? reducedLinkVariants : linkVariants}
            >
              <NavRippleRow
                label={label}
                num={num}
                disabled={closingPhase !== null}
                onSelect={() => navigate(href)}
              />
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-auto flex items-center justify-between pt-6"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.4, ease: "easeOut" },
                }
          }
        >
          <span className="font-mono text-label-lg uppercase tracking-stamp text-info-text/35">
            Portfolio · 2026
          </span>
          <span className="font-mono text-label-lg uppercase tracking-stamp text-info-text/35">
            <ThemeToggle tone="default" />
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

type NavRippleRowProps = {
  label: string;
  num: string;
  disabled: boolean;
  onSelect: () => void;
};

function NavRippleRow({ label, num, disabled, onSelect }: NavRippleRowProps) {
  const reduceMotion = useReducedMotion();
  const pendingClose = React.useRef(false);
  const closeTimer = React.useRef<number | undefined>(undefined);
  const [selected, setSelected] = React.useState(false);

  const { onMouseEnter, onClick, ripples, duration, startOpacity, closeDelayMs } =
    useHoverRipple<HTMLButtonElement>({
      duration: NAV_RIPPLE_DURATION,
      startOpacity: 0.55,
      hoverRingCount: 2,
      clickRingCount: 1,
      clickOrigin: "pointer",
      hoverOrigin: "pointer",
    });

  React.useEffect(() => {
    return () => {
      if (closeTimer.current !== undefined) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={(event) => {
        if (disabled || pendingClose.current) return;
        setSelected(true);
        onClick(event);
        if (reduceMotion) {
          onSelect();
          return;
        }
        pendingClose.current = true;
        closeTimer.current = window.setTimeout(() => {
          pendingClose.current = false;
          onSelect();
        }, closeDelayMs);
      }}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
      className={[
        "group relative flex w-full items-center justify-between overflow-hidden py-5 transition-colors duration-300 disabled:pointer-events-none",
        selected
          ? "text-accent"
          : "text-info/75 hover:text-info-text",
      ].join(" ")}
    >
      <HoverRippleLayer
        ripples={ripples}
        duration={duration}
        startOpacity={startOpacity}
        color="var(--color-info-text)"
        clickColor="var(--color-accent)"
      />
      <span className="relative text-heading-4xl leading-none tracking-tight">
        {label}
      </span>
      <span className="relative flex shrink-0 items-center gap-4 pl-2 pr-4">
        <span
          className={[
            "font-mono text-label-lg uppercase tracking-stamp transition-colors duration-300",
            selected ? "text-accent/60" : "text-info-text/35",
          ].join(" ")}
        >
          {num}
        </span>
        <span
          className={[
            "inline-flex min-w-[1.25em] items-center justify-center text-lg transition-all duration-200",
            selected
              ? "translate-x-1.5 text-accent"
              : "text-info-text/50 group-hover:translate-x-1.5 group-hover:text-info",
          ].join(" ")}
        >
          →
        </span>
      </span>
    </button>
  );
}

'use client';

import { motion, useReducedMotion } from "framer-motion";
import { useNav } from "@/src/context/NavContext";

export function MenuButton() {
  const { navOpen, setNavOpen } = useNav();
  const reduceMotion = useReducedMotion();

  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 400, damping: 30 } as const;

  const fade = reduceMotion ? { duration: 0 } : { duration: 0.2 } as const;

  return (
    <button
      type="button"
      onClick={() => setNavOpen(!navOpen)}
      aria-label={navOpen ? "Close menu" : "Open menu"}
      aria-expanded={navOpen}
      className={[
        "relative z-[500] flex h-10 w-10 flex-col items-center justify-center gap-[5px] pointer-events-auto",
        navOpen ? "text-info-text" : "text-text",
      ].join(" ")}
    >
      <motion.span
        className="block h-px w-6 origin-center rounded-none bg-current"
        animate={navOpen ? { y: 6.5, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={spring}
      />

      <motion.span
        className="block h-px origin-center rounded-none bg-current"
        animate={navOpen ? { width: 0, opacity: 0 } : { width: 24, opacity: 1 }}
        transition={fade}
      />

      <motion.span
        className="block h-px w-6 origin-center rounded-none bg-current"
        animate={navOpen ? { y: -6.5, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={spring}
      />
    </button>
  );
}


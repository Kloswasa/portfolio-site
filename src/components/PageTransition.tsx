'use client';

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const easeOutExpo = [0.22, 1, 0.36, 1] as const;

  const variants: Variants = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 1.1, ease: easeOutExpo },
    },
    // In-page `<Link>` navigations do not use the overlay loader, so a long exit + long enter
    // reads as two eases in a row (`mode="wait"`). Keep exit effectively instant; the enter
    // above is the single visible route transition (menu navigations stay loader-masked).
    exit: {
      opacity: 0,
      y: 0,
      transition: { duration: 0 },
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div key={pathname} variants={variants} initial="initial" animate="animate" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


'use client';

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeDuration = reduceMotion ? 0 : 0.4;

  const variants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: fadeDuration, ease },
    },
    exit: {
      opacity: 0,
      transition: { duration: reduceMotion ? 0 : 0.32, ease },
    },
  };

  /** `mode="sync"` + grid stack: outgoing and incoming crossfade with no empty frame. */
  return (
    <div className="isolate grid grid-cols-1 grid-rows-[auto] [&>*]:col-start-1 [&>*]:row-start-1">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div key={pathname} variants={variants} initial="initial" animate="animate" exit="exit">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


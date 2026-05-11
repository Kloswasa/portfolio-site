'use client';

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const easeOutExpo = [0.22, 1, 0.36, 1] as const;
  const easeInExpo = [0.55, 0, 1, 0.45] as const;

  const variants: Variants = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 1.1, ease: easeOutExpo },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -16,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.3, ease: easeInExpo },
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


'use client';

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useNav } from "@/src/context/NavContext";

function RotatingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="44 44"
        strokeDashoffset="22"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      <line x1="24" y1="2" x2="24" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="42" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="24" x2="6" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="42" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PageLoader() {
  const { loading } = useNav();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg text-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: reduceMotion ? 0 : 0.2, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.1, ease: "easeInOut" } }}
        >
          <motion.div
            className="h-12 w-12"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={reduceMotion ? undefined : { duration: 1, ease: "linear", repeat: Infinity }}
          >
            <RotatingIcon />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


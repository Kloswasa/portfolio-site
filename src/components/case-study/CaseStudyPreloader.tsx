"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { CaseStudySkeleton } from "@/src/components/case-study/CaseStudySkeleton";
import { preloadImages } from "@/src/lib/preload-images";

export function CaseStudyPreloader({
  imageUrls,
  children,
}: {
  imageUrls: string[];
  children: ReactNode;
}) {
  const [ready, setReady] = useState(imageUrls.length === 0);
  const reduceMotion = useReducedMotion();
  const fadeMs = reduceMotion ? 0 : 0.4;

  useEffect(() => {
    if (imageUrls.length === 0) return;

    let cancelled = false;

    preloadImages(imageUrls).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [imageUrls]);

  useEffect(() => {
    if (ready) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [ready]);

  return (
    <AnimatePresence mode="wait">
      {!ready ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: fadeMs, ease: "easeInOut" },
          }}
        >
          <CaseStudySkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{
            opacity: 1,
            transition: { duration: fadeMs, ease: "easeOut" },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

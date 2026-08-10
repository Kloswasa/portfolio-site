"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { WorkHeroBotanical } from "@/src/components/work/WorkHeroBotanical";
import { preloadImages } from "@/src/lib/case-studies/preload-images";

function BotanicalLoader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key="case-study-loader"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-bg text-text-muted"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: reduceMotion ? 0 : 0.2, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: reduceMotion ? 0 : 0.4,
          delay: reduceMotion ? 0 : 0.1,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        className="h-48 w-32"
        style={{ perspective: 900 }}
        animate={
          reduceMotion
            ? undefined
            : { rotateY: [-6, 6, -6] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 3, ease: "easeInOut", repeat: Infinity }
        }
      >
        <WorkHeroBotanical />
      </motion.div>
    </motion.div>
  );
}

export function CaseStudyPreloader({
  imageUrls,
  children,
}: {
  imageUrls: string[];
  children: ReactNode;
}) {
  const [ready, setReady] = useState(imageUrls.length === 0);

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
    <>
      <AnimatePresence>{!ready && <BotanicalLoader />}</AnimatePresence>
      {children}
    </>
  );
}

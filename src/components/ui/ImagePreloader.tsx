"use client";

import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { BotanicalLoader } from "@/src/components/ui/BotanicalLoader";
import { preloadImages } from "@/src/lib/preload-images";

/** Minimum time the botanical entrance stays up when motion is allowed. */
const LOADER_FLOOR_MS = 600;

function waitForPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export function ImagePreloader({
  imageUrls,
  children,
}: {
  imageUrls: string[];
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const [loaderVisible, setLoaderVisible] = useState(true);

  // Warm the cache in the background; never gate the entrance on it.
  useEffect(() => {
    if (imageUrls.length === 0) return;
    void preloadImages(imageUrls);
  }, [imageUrls]);

  // Reveal once the hero has painted (plus a short floor so the sway reads).
  useEffect(() => {
    // Wait until the reduced-motion preference is known (null on first SSR/hydrate).
    if (reduceMotion === null) return;

    let cancelled = false;
    const startedAt = performance.now();

    void (async () => {
      await waitForPaint();
      if (cancelled) return;

      if (!reduceMotion) {
        const elapsed = performance.now() - startedAt;
        const remaining = LOADER_FLOOR_MS - elapsed;
        if (remaining > 0) {
          await new Promise<void>((resolve) => {
            window.setTimeout(resolve, remaining);
          });
        }
      }

      if (!cancelled) setLoaderVisible(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!loaderVisible) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [loaderVisible]);

  return (
    <>
      <AnimatePresence>
        {loaderVisible && <BotanicalLoader />}
      </AnimatePresence>
      {children}
    </>
  );
}

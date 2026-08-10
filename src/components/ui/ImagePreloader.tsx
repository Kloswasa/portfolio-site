"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { BotanicalLoader } from "@/src/components/ui/BotanicalLoader";
import { preloadImages } from "@/src/lib/preload-images";

export function ImagePreloader({
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

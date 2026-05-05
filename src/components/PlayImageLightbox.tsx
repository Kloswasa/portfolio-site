"use client";

import { fadeIn } from "@/animation/variants";
import type { PlayItem } from "@/src/lib/play";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";

export function PlayImageLightbox({
  item,
  open,
  onClose,
}: {
  item: PlayItem | null;
  open: boolean;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  if (!mounted) return null;

  const transition = reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] as const };

  const node = (
    <AnimatePresence>
      {open && item && (
        <motion.div
          key={item.title}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          role="presentation"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <button
            type="button"
            aria-label="Dismiss artwork viewer"
            className="absolute inset-0 z-[1] bg-bg/85 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[90vh] w-full max-w-[min(95vw,1920px)] flex-col overflow-hidden border border-border-subtle bg-surface"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border-subtle px-4 py-3 md:px-5">
              <h2 id={titleId} className="text-heading-xl text-text">
                {item.title}
              </h2>
              <button
                ref={closeRef}
                type="button"
                className="btn btn-ghost shrink-0"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto overscroll-contain">
              <PlayLightboxImage item={item} />
            </div>

            <p className="shrink-0 border-t border-border-subtle px-4 py-2 font-body text-xs text-text-muted md:px-5">
              {item.meta} · Scroll to view full resolution.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(node, document.body);
}

function PlayLightboxImage({ item }: { item: PlayItem }) {
  const w = item.imageWidth ?? 1920;
  const h = item.imageHeight ?? 1080;
  const alt = item.imageAlt ?? `Full-size artwork: ${item.title}`;

  return (
    // Native <img> keeps intrinsic 1920px layout for two-axis scrolling; next/image would fight overflow sizing.
    // eslint-disable-next-line @next/next/no-img-element -- full-bleed scrollable lightbox, not LCP hero
    <img
      src={item.imageSrc}
      alt={alt}
      width={w}
      height={h}
      className="block h-auto max-w-none bg-elevated"
      style={{ width: w }}
      decoding="async"
    />
  );
}

"use client";

import Link from "next/link";
import type { PlayCanvasHandle } from "@/src/components/play/PlayCanvas";
import { PlayViewerPlate } from "@/src/components/play/PlayViewerPlate";
import type { PlayZoomableImageHandle } from "@/src/components/play/PlayZoomableImage";
import type { PlayWork } from "@/src/lib/play/types";
import { playImageSrc, playWorkImages } from "@/src/lib/play/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, useReducedMotion } from "framer-motion";

interface PlayViewerProps {
  works: PlayWork[];
  currentIndex: number;
  open: boolean;
  motionPaused: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function PlayViewer({
  works,
  currentIndex,
  open,
  motionPaused,
  onClose,
  onNavigate,
}: PlayViewerProps) {
  const reduceMotion = useReducedMotion();
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  /** 1 = next, -1 = previous, 0 = opened from the grid. */
  const [direction, setDirection] = useState(0);
  const canvasHandleRef = useRef<PlayCanvasHandle | null>(null);
  const activeZoomRef = useRef<PlayZoomableImageHandle | null>(null);

  const work = works[currentIndex];
  const hasRasterImages = work ? playWorkImages(work).length > 0 : false;

  const go = useCallback(
    (step: 1 | -1) => {
      setDirection(step);
      onNavigate((currentIndex + step + works.length) % works.length);
    },
    [currentIndex, onNavigate, works.length],
  );

  const handleZoomIn = useCallback(() => {
    activeZoomRef.current?.zoomIn();
  }, []);

  const handleZoomOut = useCallback(() => {
    activeZoomRef.current?.zoomOut();
  }, []);

  const handleZoomReset = useCallback(() => {
    activeZoomRef.current?.reset();
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) {
      setDetailsOpen(true);
      setDirection(0);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open || works.length < 2) return;
    const neighbours = [
      works[(currentIndex + 1) % works.length],
      works[(currentIndex - 1 + works.length) % works.length],
    ];
    for (const neighbour of neighbours) {
      const cover = playWorkImages(neighbour)[0];
      if (!cover) continue;
      const img = new Image();
      img.decoding = "async";
      img.src = playImageSrc(cover.src);
    }
  }, [open, currentIndex, works]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (detailsOpen) setDetailsOpen(false);
        else onClose();
      }
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "i" || e.key === "I") setDetailsOpen((v) => !v);
      if (hasRasterImages && (e.key === "+" || e.key === "=")) {
        e.preventDefault();
        handleZoomIn();
      }
      if (hasRasterImages && e.key === "-") {
        e.preventDefault();
        handleZoomOut();
      }
      if (hasRasterImages && e.key === "0") {
        e.preventDefault();
        handleZoomReset();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, detailsOpen, go, onClose, hasRasterImages, handleZoomIn, handleZoomOut, handleZoomReset]);

  if (!mounted || !work) return null;

  const effectivePaused = motionPaused || reduceMotion === true;

  const node = (
    <div
      className="play-viewer"
      data-open={open ? "true" : "false"}
      data-details={detailsOpen ? "true" : "false"}
      role="dialog"
      aria-modal="true"
      aria-label="Work detail"
      aria-hidden={!open}
    >
      <button
        type="button"
        className="play-viewer__backdrop"
        aria-label="Close viewer"
        onClick={onClose}
      />

      <div className="play-viewer__top">
        <button type="button" className="play-viewer__close" onClick={onClose}>
          Close <span aria-hidden="true">✕</span>
        </button>
      </div>

      <div className="play-viewer__stage">
        <div className="play-viewer__plate-wrap">
          <AnimatePresence mode="wait" custom={direction}>
            {open ? (
              <PlayViewerPlate
                key={work.id}
                work={work}
                direction={direction}
                paused={effectivePaused}
                zoomTargetRef={activeZoomRef}
                canvasHandleRef={canvasHandleRef}
              />
            ) : null}
          </AnimatePresence>
        </div>

        <aside className="play-viewer__label">
          <div className="play-viewer__label-inner">
            <button
              type="button"
              className="play-viewer__back"
              onClick={() => setDetailsOpen(false)}
            >
              <span className="play-viewer__back-line" aria-hidden="true" />
              Back to work
            </button>

            <p className="play-viewer__idx">{work.index}</p>
            <h2 className="play-viewer__title">{work.title}</h2>
            <p className="play-viewer__meta">{work.meta}</p>
            <p className="play-viewer__dim">{work.dim}</p>
            <div className="play-viewer__rule" aria-hidden="true" />
            <p className="play-viewer__note">{work.description}</p>

            {work.projectSlug ? (
              <Link
                href={`/work/${work.projectSlug}`}
                className="btn btn-secondary play-viewer__project-cta"
              >
                Check the project <span aria-hidden="true">→</span>
              </Link>
            ) : null}

            {work.medium === "code" && work.code ? (
              <>
                <p className="play-viewer__codehead">The idea</p>
                <pre className="play-viewer__code">{work.code}</pre>
                <button
                  type="button"
                  className="play-viewer__restart"
                  onClick={() => canvasHandleRef.current?.restart()}
                >
                  <span aria-hidden="true">↻</span> Restart sketch
                </button>
              </>
            ) : null}

            <div className="play-viewer__tools">
              {work.tools.map((tool) => (
                <span key={tool} className="play-viewer__tool">
                  {tool}
                </span>
              ))}
            </div>

            <nav className="play-viewer__nav-group" aria-label="Browse works">
              <button
                type="button"
                className="play-viewer__nav"
                data-dir="prev"
                aria-label="Previous work"
                title="Previous work (←)"
                onClick={() => go(-1)}
              >
                <span className="play-viewer__nav-arrow" aria-hidden="true">‹</span>
                Prev
              </button>
              <span className="play-viewer__counter">
                {String(currentIndex + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="play-viewer__nav"
                data-dir="next"
                aria-label="Next work"
                title="Next work (→)"
                onClick={() => go(1)}
              >
                Next
                <span className="play-viewer__nav-arrow" aria-hidden="true">›</span>
              </button>
            </nav>
          </div>
        </aside>
      </div>

      <div className="play-viewer__hint">
      {hasRasterImages ? (
          <div className="play-viewer__zoom" role="toolbar" aria-label="Image zoom controls">
            <button
              type="button"
              className="play-viewer__zoom-btn"
              aria-label="Zoom out"
              onClick={handleZoomOut}
            >
              −
            </button>
            <button
              type="button"
              className="play-viewer__zoom-btn"
              aria-label="Zoom in"
              onClick={handleZoomIn}
            >
              +
            </button>
          </div>
        ) : null}
        <span className="play-viewer__hint-frame">{work.index}</span>
        <span className="play-viewer__hint-sep" aria-hidden="true">
          ·
        </span>
        <span className="play-viewer__hint-title">{work.title}</span>
        <span className="play-viewer__hint-sep" aria-hidden="true">
          ·
        </span>
       
        <button
          type="button"
          className="play-viewer__details-btn"
          aria-expanded={detailsOpen}
          onClick={() => setDetailsOpen(true)}
        >
          Details <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );

  return createPortal(node, document.body);
}

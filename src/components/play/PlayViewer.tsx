"use client";

import { PlayCanvas, type PlayCanvasHandle } from "@/src/components/play/PlayCanvas";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import type { PlayWork } from "@/src/lib/play/types";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";

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
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [developing, setDeveloping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const canvasHandleRef = useRef<PlayCanvasHandle | null>(null);

  const work = works[currentIndex];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) {
      setDetailsOpen(false);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setDeveloping(true);
    const timer = setTimeout(() => setDeveloping(false), 650);
    return () => clearTimeout(timer);
  }, [open, currentIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (detailsOpen) setDetailsOpen(false);
        else onClose();
      }
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + works.length) % works.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % works.length);
      if (e.key === "i" || e.key === "I") setDetailsOpen((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, detailsOpen, currentIndex, works.length, onClose, onNavigate]);

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
        <div className="play-viewer__nav-group">
          <button
            type="button"
            className="play-viewer__nav"
            aria-label="Previous work"
            onClick={() => {
              setDetailsOpen(false);
              onNavigate((currentIndex - 1 + works.length) % works.length);
            }}
          >
            ‹
          </button>
          <span className="play-viewer__counter">
            {String(currentIndex + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="play-viewer__nav"
            aria-label="Next work"
            onClick={() => {
              setDetailsOpen(false);
              onNavigate((currentIndex + 1) % works.length);
            }}
          >
            ›
          </button>
        </div>

        <button type="button" className="play-viewer__close" onClick={onClose}>
          Close <span aria-hidden="true">✕</span>
        </button>
      </div>

      <div className="play-viewer__stage">
        <div className="play-viewer__plate-wrap">
          <div
            className="play-viewer__plate"
            data-developing={developing && !reduceMotion ? "true" : undefined}
          >
            <div className="play-viewer__media">
              {work.medium === "code" && work.sketch ? (
                <PlayCanvas
                  key={`${work.id}-${open}`}
                  sketch={work.sketch}
                  paused={effectivePaused}
                  onReady={(handle) => {
                    canvasHandleRef.current = handle;
                  }}
                />
              ) : work.illustration ? (
                <PlayIllustration name={work.illustration} />
              ) : null}
            </div>
            <div className="play-viewer__mat" aria-hidden="true" />
          </div>
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
          </div>
        </aside>
      </div>

      <div className="play-viewer__hint">
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

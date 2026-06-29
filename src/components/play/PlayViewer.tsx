"use client";

import Link from "next/link";
import { PlayCanvas, type PlayCanvasHandle } from "@/src/components/play/PlayCanvas";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import {
  PlayZoomableImage,
  type PlayZoomableImageHandle,
} from "@/src/components/play/PlayZoomableImage";
import type { PlayImage, PlayWork } from "@/src/lib/play/types";
import { plateAspectRatio, playImageSrc } from "@/src/lib/play/utils";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
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
  const [stackZoomed, setStackZoomed] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<Record<number, { width: number; height: number }>>({});
  const canvasHandleRef = useRef<PlayCanvasHandle | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const activeZoomRef = useRef<PlayZoomableImageHandle | null>(null);
  const zoomRefs = useRef<(PlayZoomableImageHandle | null)[]>([]);
  const scalesRef = useRef<number[]>([]);

  const work = works[currentIndex];

  const images: PlayImage[] = useMemo(() => {
    if (!work) return [];
    if (work.images && work.images.length > 0) return work.images;
    if (work.imageSrc) {
      return [
        {
          src: work.imageSrc,
          alt: work.imageAlt,
          width: work.imageWidth,
          height: work.imageHeight,
        },
      ];
    }
    return [];
  }, [work]);

  const isStack = images.length > 1;
  const hasRasterImages = images.length > 0;

  const plateAspect = useMemo(() => {
    const dims = imageDimensions[activeImageIndex];
    if (dims) return plateAspectRatio(dims.width, dims.height);

    const image = images[activeImageIndex];
    if (image?.width && image?.height) {
      return plateAspectRatio(image.width, image.height);
    }

    return 1;
  }, [activeImageIndex, imageDimensions, images]);

  const plateStyle = useMemo(
    (): CSSProperties & Record<"--play-plate-aspect", string> => ({
      "--play-plate-aspect": String(plateAspect),
    }),
    [plateAspect],
  );

  const handleImageNaturalSize = useCallback((index: number, width: number, height: number) => {
    setImageDimensions((prev) => {
      const existing = prev[index];
      if (existing?.width === width && existing?.height === height) return prev;
      return { ...prev, [index]: { width, height } };
    });
  }, []);

  const handleZoomChange = useCallback((index: number, _zoomed: boolean, scale: number) => {
    scalesRef.current[index] = scale;
    setStackZoomed(scalesRef.current.some((s) => s > 1));
  }, []);

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
    const stack = stackRef.current;
    if (!stack) return;
    stack.scrollTop = 0;
    stack.scrollLeft = 0;
    setStackZoomed(false);
    setActiveImageIndex(0);
    scalesRef.current = [];
    activeZoomRef.current = zoomRefs.current[0] ?? null;
  }, [currentIndex]);

  useEffect(() => {
    setImageDimensions(() => {
      const seeded: Record<number, { width: number; height: number }> = {};
      images.forEach((image, index) => {
        if (image.width && image.height) {
          seeded[index] = { width: image.width, height: image.height };
        }
      });
      return seeded;
    });
  }, [images]);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack || !isStack || stackZoomed) return;

    const items = stack.querySelectorAll<HTMLElement>(".play-viewer__stack-img");
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = 0;
        let bestRatio = 0;

        for (const entry of entries) {
          const index = Array.from(items).indexOf(entry.target as HTMLElement);
          if (index < 0) continue;
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = index;
          }
        }

        if (bestRatio > 0) setActiveImageIndex(bestIndex);
      },
      { root: stack, threshold: [0, 0.35, 0.55, 0.75, 1] },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [isStack, stackZoomed, images, currentIndex]);

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
  }, [open, detailsOpen, currentIndex, works.length, onClose, onNavigate, hasRasterImages, handleZoomIn, handleZoomOut, handleZoomReset]);

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
            data-adaptive={hasRasterImages ? "true" : undefined}
            data-developing={developing && !reduceMotion ? "true" : undefined}
            style={hasRasterImages ? plateStyle : undefined}
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
              ) : images.length > 0 ? (
                <div
                  ref={stackRef}
                  className="play-viewer__stack"
                  data-single={isStack ? undefined : "true"}
                  data-stack={isStack ? "true" : undefined}
                  data-has-zoom={stackZoomed ? "true" : undefined}
                  tabIndex={isStack ? 0 : undefined}
                  onWheel={
                    isStack && !stackZoomed
                      ? (e) => {
                          e.stopPropagation();
                        }
                      : undefined
                  }
                >
                  {images.map((image, i) => (
                    <PlayZoomableImage
                      key={image.src}
                      ref={(handle) => {
                        zoomRefs.current[i] = handle;
                        if (i === 0 && handle) activeZoomRef.current = handle;
                      }}
                      src={playImageSrc(image.src)}
                      alt={image.alt ?? `${work.title} — ${i + 1} of ${images.length}`}
                      width={image.width}
                      height={image.height}
                      className="play-viewer__stack-img"
                      loading={i === 0 ? "eager" : "lazy"}
                      onNaturalSize={(width, height) => handleImageNaturalSize(i, width, height)}
                      onZoomChange={(zoomed, scale) => handleZoomChange(i, zoomed, scale)}
                      onActivate={() => {
                        activeZoomRef.current = zoomRefs.current[i] ?? null;
                        setActiveImageIndex(i);
                      }}
                      wheelZoom={!isStack}
                    />
                  ))}
                </div>
              ) : work.illustration ? (
                <PlayIllustration name={work.illustration} />
              ) : null}
            </div>
            {isStack ? (
              <>
                <span className="play-viewer__stack-cue play-viewer__stack-cue--desktop" aria-hidden="true">
                  ↓ {images.length} images
                </span>
                <span className="play-viewer__stack-cue play-viewer__stack-cue--mobile" aria-hidden="true">
                  ‹ › swipe · {images.length}
                </span>
              </>
            ) : null}
            {/* <div className="play-viewer__mat" aria-hidden="true" /> */}
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

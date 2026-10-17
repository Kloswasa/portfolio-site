"use client";

import { playPlate, playPlateReduced } from "@/animation/variants";
import { PlayCanvas, type PlayCanvasHandle } from "@/src/components/play/PlayCanvas";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import {
  PlayZoomableImage,
  type PlayZoomableImageHandle,
} from "@/src/components/play/PlayZoomableImage";
import type { PlayWork } from "@/src/lib/play/types";
import { plateAspectRatio, playImageSrc, playWorkImages } from "@/src/lib/play/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MutableRefObject,
} from "react";

/** Reveal anyway if the first image is slow, so the plate never sits invisible. */
const REVEAL_FALLBACK_MS = 1200;

interface PlayViewerPlateProps {
  work: PlayWork;
  /** 1 = next, -1 = previous, 0 = opened from the grid. */
  direction: number;
  paused: boolean;
  /** Receives the handle of the image currently in view (for zoom controls). */
  zoomTargetRef: MutableRefObject<PlayZoomableImageHandle | null>;
  canvasHandleRef: MutableRefObject<PlayCanvasHandle | null>;
}

export function PlayViewerPlate({
  work,
  direction,
  paused,
  zoomTargetRef,
  canvasHandleRef,
}: PlayViewerPlateProps) {
  const reduceMotion = useReducedMotion();
  const images = useMemo(() => playWorkImages(work), [work]);
  const isStack = images.length > 1;
  const hasRasterImages = images.length > 0;

  const [ready, setReady] = useState(!hasRasterImages);
  const [stackZoomed, setStackZoomed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [naturalSizes, setNaturalSizes] = useState<Record<number, { width: number; height: number }>>({});
  const stackRef = useRef<HTMLDivElement | null>(null);
  const zoomRefs = useRef<(PlayZoomableImageHandle | null)[]>([]);
  const scalesRef = useRef<number[]>([]);

  const imageAspects = useMemo(
    () =>
      images.map((image, i) => {
        const width = image.width ?? naturalSizes[i]?.width;
        const height = image.height ?? naturalSizes[i]?.height;
        return width && height ? width / height : 1;
      }),
    [images, naturalSizes],
  );

  /* Single image: the plate takes the image's shape. Multi-image: each box in the column does. */
  const plateStyle = useMemo((): (CSSProperties & Record<"--play-plate-aspect", string>) | undefined => {
    if (!hasRasterImages || isStack) return undefined;
    const cover = images[0];
    const width = cover.width ?? naturalSizes[0]?.width;
    const height = cover.height ?? naturalSizes[0]?.height;
    const aspect = width && height ? plateAspectRatio(width, height) : 1;
    return { "--play-plate-aspect": String(aspect) };
  }, [hasRasterImages, images, isStack, naturalSizes]);

  const handleNaturalSize = useCallback((index: number, width: number, height: number) => {
    setNaturalSizes((prev) => {
      const existing = prev[index];
      if (existing?.width === width && existing?.height === height) return prev;
      return { ...prev, [index]: { width, height } };
    });
  }, []);

  useEffect(() => {
    return () => {
      zoomTargetRef.current = null;
    };
  }, [zoomTargetRef]);

  useEffect(() => {
    if (ready) return;
    const timer = setTimeout(() => setReady(true), REVEAL_FALLBACK_MS);
    return () => clearTimeout(timer);
  }, [ready]);

  const handleZoomChange = useCallback((index: number, _zoomed: boolean, scale: number) => {
    scalesRef.current[index] = scale;
    setStackZoomed(scalesRef.current.some((s) => s > 1));
  }, []);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack || !isStack || stackZoomed) return;

    const items = Array.from(stack.querySelectorAll<HTMLElement>(".play-viewer__stack-img"));
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = -1;
        let bestRatio = 0;

        for (const entry of entries) {
          const index = items.indexOf(entry.target as HTMLElement);
          if (index >= 0 && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = index;
          }
        }

        if (bestIndex >= 0) zoomTargetRef.current = zoomRefs.current[bestIndex] ?? null;
      },
      { root: stack, threshold: [0, 0.35, 0.55, 0.75, 1] },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [isStack, stackZoomed, images, zoomTargetRef]);

  return (
    <motion.div
      className="play-viewer__plate"
      data-layout={isStack ? "column" : undefined}
      style={plateStyle}
      variants={reduceMotion ? playPlateReduced : playPlate}
      custom={direction}
      initial="hidden"
      animate={ready ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="play-viewer__media">
        {work.medium === "code" && work.sketch ? (
          <PlayCanvas
            sketch={work.sketch}
            paused={paused}
            onReady={(handle) => {
              canvasHandleRef.current = handle;
            }}
          />
        ) : hasRasterImages ? (
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
            onScroll={
              isStack && !scrolled
                ? (e) => {
                    if (e.currentTarget.scrollTop > 24) setScrolled(true);
                  }
                : undefined
            }
          >
            {images.map((image, i) => (
              <PlayZoomableImage
                key={image.src}
                ref={(handle) => {
                  zoomRefs.current[i] = handle;
                  if (i === 0 && handle && !zoomTargetRef.current) zoomTargetRef.current = handle;
                }}
                src={playImageSrc(image.src)}
                alt={image.alt ?? `${work.title} — ${i + 1} of ${images.length}`}
                width={image.width}
                height={image.height}
                className="play-viewer__stack-img"
                style={
                  isStack
                    ? ({ "--play-img-aspect": String(imageAspects[i]) } as CSSProperties)
                    : undefined
                }
                loading={i === 0 ? "eager" : "lazy"}
                onNaturalSize={(width, height) => handleNaturalSize(i, width, height)}
                onSettled={i === 0 ? () => setReady(true) : undefined}
                onZoomChange={(zoomed, scale) => handleZoomChange(i, zoomed, scale)}
                onActivate={() => {
                  zoomTargetRef.current = zoomRefs.current[i] ?? null;
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
        <span
          className="play-viewer__stack-cue"
          data-hidden={scrolled ? "true" : undefined}
          aria-hidden="true"
        >
          ↓ {images.length} images
        </span>
      ) : null}
    </motion.div>
  );
}

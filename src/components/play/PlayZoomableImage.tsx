"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.35;

export interface PlayZoomableImageHandle {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  getScale: () => number;
}

interface PlayZoomableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  onZoomChange?: (zoomed: boolean, scale: number) => void;
  onActivate?: () => void;
  onNaturalSize?: (width: number, height: number) => void;
  /** Allow wheel zoom without ctrl/meta (single-image mode). */
  wheelZoom?: boolean;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function clampTranslate(
  x: number,
  y: number,
  scale: number,
  frameW: number,
  frameH: number,
) {
  if (scale <= 1) return { x: 0, y: 0 };

  const maxX = Math.max(0, (frameW * scale - frameW) / 2);
  const maxY = Math.max(0, (frameH * scale - frameH) / 2);

  return {
    x: clamp(x, -maxX, maxX),
    y: clamp(y, -maxY, maxY),
  };
}

export const PlayZoomableImage = forwardRef<PlayZoomableImageHandle, PlayZoomableImageProps>(
  function PlayZoomableImage(
    {
      src,
      alt,
      width,
      height,
      className,
      loading = "lazy",
      onZoomChange,
      onActivate,
      onNaturalSize,
      wheelZoom = false,
    },
    ref,
  ) {
    const frameRef = useRef<HTMLDivElement | null>(null);
    const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
    const pinchRef = useRef<{ distance: number; scale: number } | null>(null);
    const dragRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

    const [scale, setScale] = useState(1);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    const applyScale = useCallback(
      (nextScale: number, originX?: number, originY?: number) => {
        const frame = frameRef.current;
        if (!frame) return;

        const rect = frame.getBoundingClientRect();
        const clamped = clamp(nextScale, MIN_SCALE, MAX_SCALE);

        setScale((prevScale) => {
          setTranslate((prevTranslate) => {
            if (clamped <= 1) return { x: 0, y: 0 };

            const cx = originX ?? rect.left + rect.width / 2;
            const cy = originY ?? rect.top + rect.height / 2;
            const dx = cx - rect.left - rect.width / 2;
            const dy = cy - rect.top - rect.height / 2;
            const ratio = clamped / prevScale;

            const next = clampTranslate(
              dx - (dx - prevTranslate.x) * ratio,
              dy - (dy - prevTranslate.y) * ratio,
              clamped,
              rect.width,
              rect.height,
            );

            return next;
          });

          return clamped;
        });
      },
      [],
    );

    const reset = useCallback(() => {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }, []);

    const zoomIn = useCallback(() => {
      applyScale(scale + ZOOM_STEP);
    }, [applyScale, scale]);

    const zoomOut = useCallback(() => {
      applyScale(scale - ZOOM_STEP);
    }, [applyScale, scale]);

    useImperativeHandle(
      ref,
      () => ({
        zoomIn,
        zoomOut,
        reset,
        getScale: () => scale,
      }),
      [zoomIn, zoomOut, reset, scale],
    );

    useEffect(() => {
      onZoomChange?.(scale > 1, scale);
    }, [scale, onZoomChange]);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
      const shouldZoom = e.ctrlKey || e.metaKey || scale > 1 || wheelZoom;
      if (!shouldZoom) return;

      e.preventDefault();
      e.stopPropagation();

      if (e.ctrlKey || e.metaKey || scale > 1) {
        const factor = e.deltaY < 0 ? 1 + ZOOM_STEP : 1 - ZOOM_STEP;
        applyScale(scale * factor, e.clientX, e.clientY);
        return;
      }
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      onActivate?.();

      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (pointersRef.current.size === 2) {
        const frame = frameRef.current;
        if (!frame) return;

        frame.setPointerCapture(e.pointerId);
        const pts = [...pointersRef.current.values()];
        const distance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        pinchRef.current = { distance, scale };
        dragRef.current = null;
        return;
      }

      if (scale <= 1) return;

      const frame = frameRef.current;
      if (!frame) return;

      frame.setPointerCapture(e.pointerId);
      dragRef.current = {
        x: e.clientX,
        y: e.clientY,
        tx: translate.x,
        ty: translate.y,
      };
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (!pointersRef.current.has(e.pointerId)) return;

      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const frame = frameRef.current;
      if (!frame) return;

      const rect = frame.getBoundingClientRect();

      if (pointersRef.current.size === 2 && pinchRef.current) {
        const pts = [...pointersRef.current.values()];
        const distance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const nextScale = pinchRef.current.scale * (distance / pinchRef.current.distance);
        const midX = (pts[0].x + pts[1].x) / 2;
        const midY = (pts[0].y + pts[1].y) / 2;
        applyScale(nextScale, midX, midY);
        return;
      }

      if (dragRef.current && scale > 1) {
        const dx = e.clientX - dragRef.current.x;
        const dy = e.clientY - dragRef.current.y;
        setTranslate(
          clampTranslate(
            dragRef.current.tx + dx,
            dragRef.current.ty + dy,
            scale,
            rect.width,
            rect.height,
          ),
        );
      }
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
      pointersRef.current.delete(e.pointerId);
      if (pointersRef.current.size < 2) pinchRef.current = null;
      if (pointersRef.current.size === 0) dragRef.current = null;

      const frame = frameRef.current;
      if (frame?.hasPointerCapture(e.pointerId)) {
        frame.releasePointerCapture(e.pointerId);
      }
    };

    const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (scale > 1) {
        reset();
        return;
      }

      applyScale(2, e.clientX, e.clientY);
    };

    return (
      <div
        ref={frameRef}
        className={`play-zoomable${className ? ` ${className}` : ""}`}
        data-zoomed={scale > 1 ? "true" : undefined}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="play-zoomable__stage"
          style={{
            transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
          }}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="play-zoomable__img"
            decoding="async"
            loading={loading}
            draggable={false}
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                onNaturalSize?.(img.naturalWidth, img.naturalHeight);
              }
            }}
          />
        </div>
      </div>
    );
  },
);

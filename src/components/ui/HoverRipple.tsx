'use client';

import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
  /** Stagger before this ring animates (seconds). */
  delay: number;
};

type RippleOrigin = 'pointer' | 'center';

/** Default ripple length (seconds). Used by `useHoverRipple()` and `HoverRippleLayer` unless a `duration` override is passed. */
export const RIPPLE_DURATION = 20;

/** Nav overlay: long enough to read, short enough that the menu can close after a visible beat. */
export const NAV_RIPPLE_DURATION = 2.2;

const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

/** Gap between hover rings (seconds). */
const HOVER_RING_STAGGER = 0.12;

/** Wait this long after a nav click before starting the overlay close (ms). */
export function rippleLeadBeforeCloseMs(durationSeconds: number): number {
  return Math.round(Math.max(500, durationSeconds * 1000 * 0.45));
}

type UseHoverRippleOptions = {
  /** Override the default animation duration (seconds). */
  duration?: number;
  /** Starting opacity of the ripple. */
  startOpacity?: number;
  /** Rings on hover (default 2). */
  hoverRingCount?: number;
  /** Delay between hover rings (seconds). */
  hoverRingStagger?: number;
  /** Rings on click (default 1). */
  clickRingCount?: number;
  /** Where click ripples originate (nav rows use `center`). */
  clickOrigin?: RippleOrigin;
  /** Where hover ripples originate. */
  hoverOrigin?: RippleOrigin;
};

type UseHoverRippleResult<T extends HTMLElement> = {
  onMouseEnter: (event: React.MouseEvent<T>) => void;
  onClick: (event: React.MouseEvent<T>) => void;
  ripples: Ripple[];
  duration: number;
  startOpacity: number;
  /** Ms to wait after click before calling navigation / closing the menu. */
  closeDelayMs: number;
};

function ripplePoint(
  target: HTMLElement,
  event: React.MouseEvent | null,
  origin: RippleOrigin,
): { x: number; y: number; width: number; height: number } {
  const rect = target.getBoundingClientRect();
  if (origin === 'center') {
    return { x: rect.width / 2, y: rect.height / 2, width: rect.width, height: rect.height };
  }
  if (!event) {
    return { x: rect.width / 2, y: rect.height / 2, width: rect.width, height: rect.height };
  }
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    width: rect.width,
    height: rect.height,
  };
}

export function useHoverRipple<T extends HTMLElement>(
  options: UseHoverRippleOptions = {},
): UseHoverRippleResult<T> {
  const duration = options.duration ?? RIPPLE_DURATION;
  const startOpacity = options.startOpacity ?? 0.6;
  const hoverRingCount = options.hoverRingCount ?? 2;
  const hoverRingStagger = options.hoverRingStagger ?? HOVER_RING_STAGGER;
  const clickRingCount = options.clickRingCount ?? 1;
  const clickOrigin = options.clickOrigin ?? 'pointer';
  const hoverOrigin = options.hoverOrigin ?? 'pointer';
  const closeDelayMs = rippleLeadBeforeCloseMs(duration);

  const reduceMotion = useReducedMotion();
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const idRef = React.useRef(0);
  const timers = React.useRef<number[]>([]);

  React.useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, []);

  const scheduleRemoval = React.useCallback(
    (id: number, ringDelay: number) => {
      const ms = (ringDelay + duration) * 1000 + 60;
      const timerId = window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
        timers.current = timers.current.filter((t) => t !== timerId);
      }, ms);
      timers.current.push(timerId);
    },
    [duration],
  );

  const spawnRipples = React.useCallback(
    (
      target: HTMLElement,
      event: React.MouseEvent<T> | null,
      count: number,
      origin: RippleOrigin,
      stagger: number,
    ) => {
      if (reduceMotion || count < 1) return;
      const { x, y, width, height } = ripplePoint(target, event, origin);

      const maxX = Math.max(x, width - x);
      const maxY = Math.max(y, height - y);
      const size = Math.hypot(maxX, maxY) * 2;

      const batch: Ripple[] = [];
      for (let i = 0; i < count; i += 1) {
        idRef.current += 1;
        const delay = i * stagger;
        const ripple: Ripple = {
          id: idRef.current,
          x,
          y,
          size,
          delay,
        };
        batch.push(ripple);
        scheduleRemoval(ripple.id, delay);
      }

      setRipples((prev) => [...prev, ...batch]);
    },
    [reduceMotion, scheduleRemoval],
  );

  const onMouseEnter = React.useCallback(
    (event: React.MouseEvent<T>) => {
      spawnRipples(
        event.currentTarget,
        event,
        hoverRingCount,
        hoverOrigin,
        hoverRingStagger,
      );
    },
    [spawnRipples, hoverRingCount, hoverOrigin, hoverRingStagger],
  );

  const onClick = React.useCallback(
    (event: React.MouseEvent<T>) => {
      spawnRipples(event.currentTarget, event, clickRingCount, clickOrigin, 0);
    },
    [spawnRipples, clickRingCount, clickOrigin],
  );

  return {
    onMouseEnter,
    onClick,
    ripples,
    duration,
    startOpacity,
    closeDelayMs,
  };
}

type HoverRippleLayerProps = {
  ripples: Ripple[];
  duration?: number;
  startOpacity?: number;
  /** Optional CSS color for the ripple (defaults to `currentColor`). */
  color?: string;
};

export function HoverRippleLayer({
  ripples,
  duration = RIPPLE_DURATION,
  startOpacity = 0.6,
  color = 'currentColor',
}: HoverRippleLayerProps) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: startOpacity }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration, ease: EASE, delay: ripple.delay }}
            style={{
              position: 'absolute',
              top: ripple.y - ripple.size / 2,
              left: ripple.x - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              borderRadius: '9999px',
              border: `3px solid ${color}`,
              background: 'transparent',
              boxSizing: 'border-box',
              transition: 'none',
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </AnimatePresence>
    </span>
  );
}

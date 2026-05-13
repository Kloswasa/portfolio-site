'use client';

import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

/** Default ripple length (seconds). Used by `useHoverRipple()` and `HoverRippleLayer` unless a `duration` override is passed. */
export const RIPPLE_DURATION = 10;
const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

type UseHoverRippleOptions = {
  /** Override the default animation duration (seconds). */
  duration?: number;
  /** Starting opacity of the ripple. */
  startOpacity?: number;
};

type UseHoverRippleResult<T extends HTMLElement> = {
  onMouseEnter: (event: React.MouseEvent<T>) => void;
  ripples: Ripple[];
  duration: number;
  startOpacity: number;
};

export function useHoverRipple<T extends HTMLElement>(
  options: UseHoverRippleOptions = {},
): UseHoverRippleResult<T> {
  const duration = options.duration ?? RIPPLE_DURATION;
  const startOpacity = options.startOpacity ?? 0.6;

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

  const onMouseEnter = React.useCallback(
    (event: React.MouseEvent<T>) => {
      if (reduceMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Diameter that fully covers the container from the spawn point.
      const maxX = Math.max(x, rect.width - x);
      const maxY = Math.max(y, rect.height - y);
      const size = Math.hypot(maxX, maxY) * 2;

      idRef.current += 1;
      const id = idRef.current;
      setRipples((prev) => [...prev, { id, x, y, size }]);

      const timerId = window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
        timers.current = timers.current.filter((t) => t !== timerId);
      }, duration * 1000 + 60);
      timers.current.push(timerId);
    },
    [reduceMotion, duration],
  );

  return { onMouseEnter, ripples, duration, startOpacity };
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
            transition={{ duration, ease: EASE }}
            style={{
              position: 'absolute',
              top: ripple.y - ripple.size / 2,
              left: ripple.x - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              borderRadius: '9999px',
              border: `2px solid ${color}`,
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

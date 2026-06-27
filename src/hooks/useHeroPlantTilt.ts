"use client";

import { useEffect, useRef } from "react";

const MAX_DEG = 8;
const EASE = 0.1;

/**
 * Horizontal hover tilt for the home hero plant.
 * Runs a rAF loop only while the pointer is over the element.
 */
export function useHeroPlantTilt(enabled = true) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let targetY = 0;
    let currentY = 0;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      targetY = ((event.clientX - rect.left) / rect.width - 0.5) * MAX_DEG * 2;
    };

    const tiltLoop = () => {
      currentY += (targetY - currentY) * EASE;
      el.style.transform = `perspective(900px) rotateY(${currentY}deg)`;
      rafId = requestAnimationFrame(tiltLoop);
    };

    const onEnter = () => {
      rafId = requestAnimationFrame(tiltLoop);
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      targetY = 0;

      const resetLoop = () => {
        currentY += (0 - currentY) * EASE;
        el.style.transform = `perspective(900px) rotateY(${currentY}deg)`;

        if (Math.abs(currentY) > 0.02) {
          rafId = requestAnimationFrame(resetLoop);
          return;
        }

        el.style.transform = "";
      };

      rafId = requestAnimationFrame(resetLoop);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  return ref;
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches a 3D tilt + inner-parallax effect to a card element.
 * Disabled when the user prefers reduced motion.
 */
export function useTilt<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const card = ref.current;
    if (!card) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    };

    const tiltLoop = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      card.style.transform = `perspective(900px) rotateX(${currentY}deg) rotateY(${currentX}deg) scale(1.015)`;

      const photo = card.querySelector<HTMLElement>("[data-photo]");
      if (photo) {
        photo.style.transform = `translateX(${currentX * 0.8}px) translateY(${currentY * 0.8}px) scale(1.04)`;
      }

      rafId = requestAnimationFrame(tiltLoop);
    };

    const onEnter = () => {
      rafId = requestAnimationFrame(tiltLoop);
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      targetX = 0;
      targetY = 0;

      const resetLoop = () => {
        currentX += (0 - currentX) * 0.1;
        currentY += (0 - currentY) * 0.1;
        card.style.transform = `perspective(900px) rotateX(${currentY}deg) rotateY(${currentX}deg) scale(1)`;

        const photo = card.querySelector<HTMLElement>("[data-photo]");
        if (photo) {
          photo.style.transform = `translateX(${currentX * 0.8}px) translateY(${currentY * 0.8}px) scale(1)`;
        }

        if (Math.abs(currentX) > 0.02 || Math.abs(currentY) > 0.02) {
          rafId = requestAnimationFrame(resetLoop);
          return;
        }

        card.style.transform = "";
        if (photo) photo.style.transform = "";
      };

      rafId = requestAnimationFrame(resetLoop);
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  return ref;
}

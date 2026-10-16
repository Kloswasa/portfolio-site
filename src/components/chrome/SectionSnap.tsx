"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** How close (ahead) a scroll can stop and still get pulled onto the section. */
const APPROACH_RATIO = 0.25;
const APPROACH_MAX = 250;
/** How far past a section start we'll still ease back to the aligned position. */
const OVERSHOOT_RATIO = 0.15;
const OVERSHOOT_MAX = 150;
/** Wait until the wheel or touch gesture has paused, while the coast is still moving. */
const INPUT_IDLE_MS = 120;
const NATIVE_IDLE_MS = 180;
const MIN_GESTURE_PX = 10;

function cssLengthToPx(value: string): number {
  const raw = value.trim();
  if (!raw || raw === "auto") return 0;
  const amount = Number.parseFloat(raw);
  if (!Number.isFinite(amount)) return 0;
  if (raw.endsWith("rem")) {
    const root = Number.parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    return amount * (Number.isFinite(root) ? root : 16);
  }
  return amount;
}

/**
 * Clearance so a section title sits under the fixed header.
 * `scroll-margin` and `scroll-padding` both describe that gap; the larger
 * one wins so they are not stacked on top of each other.
 */
function alignmentOffset(element: HTMLElement): number {
  const margin = cssLengthToPx(getComputedStyle(element).scrollMarginTop);
  const padding = cssLengthToPx(
    getComputedStyle(document.documentElement).scrollPaddingTop,
  );
  return Math.max(margin, padding);
}

function sectionStops(scroll: number, limit: number): number[] {
  const stops = new Set<number>();
  const nodes = document.querySelectorAll<HTMLElement>("[data-snap-section]");

  for (const element of nodes) {
    if (element.hidden || element.getClientRects().length === 0) continue;
    const top =
      element.getBoundingClientRect().top + scroll - alignmentOffset(element);
    stops.add(Math.min(limit, Math.max(0, Math.round(top))));
  }

  return [...stops].sort((a, b) => a - b);
}

function pickStop(
  start: number,
  end: number,
  direction: 1 | -1,
  stops: readonly number[],
): number | undefined {
  const approach = Math.min(window.innerHeight * APPROACH_RATIO, APPROACH_MAX);
  const overshoot = Math.min(
    window.innerHeight * OVERSHOOT_RATIO,
    OVERSHOOT_MAX,
  );
  let best: number | undefined;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const stop of stops) {
    const ahead = direction === 1 ? stop > start + 4 : stop < start - 4;
    if (!ahead) continue;

    const landing = end - stop;
    const inRange =
      direction === 1
        ? landing >= -approach && landing <= overshoot
        : landing <= approach && landing >= -overshoot;
    if (!inRange) continue;

    const distance = Math.abs(landing);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = stop;
    }
  }

  return best;
}

/**
 * While a scroll is still coasting, bend it onto a nearby section start.
 * Only sections marked `data-snap-section` participate. A gesture that
 * is heading for the middle of a section is left alone.
 */
export function SectionSnap() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    let gestureStart: number | null = null;
    let fromInput = false;
    let assisting = false;
    let generation = 0;
    let timer = 0;
    let active = true;

    const glide = () => {
      if (!active || assisting || lenis.isLocked) return;

      const start = gestureStart ?? lenis.scroll;
      const end = lenis.targetScroll;
      gestureStart = null;
      fromInput = false;
      if (Math.abs(end - start) < MIN_GESTURE_PX) return;

      const stops = sectionStops(lenis.scroll, lenis.limit);
      if (stops.length < 2) return;

      const direction: 1 | -1 = end >= start ? 1 : -1;
      const target = pickStop(start, end, direction, stops);
      if (target === undefined || Math.abs(target - end) < 4) return;

      const token = generation + 1;
      generation = token;
      assisting = true;

      lenis.scrollTo(target, {
        programmatic: false,
        lerp: lenis.options.lerp,
        lock: false,
        force: true,
        userData: { initiator: "section-snap" },
        onComplete: () => {
          if (!active || token !== generation) return;
          assisting = false;
        },
      });

      window.setTimeout(() => {
        if (!active || token !== generation) return;
        assisting = false;
      }, 4000);
    };

    const schedule = (delay: number) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(glide, delay);
    };

    const onScroll = () => {
      if (!active || assisting || fromInput) return;
      if (gestureStart === null) gestureStart = lenis.scroll;
      schedule(NATIVE_IDLE_MS);
    };

    const onVirtualScroll = () => {
      if (!active) return;
      if (assisting) {
        generation += 1;
        assisting = false;
        gestureStart = lenis.scroll;
      } else if (gestureStart === null) {
        gestureStart = lenis.scroll;
      }
      fromInput = true;
      schedule(INPUT_IDLE_MS);
    };

    const unsubscribeScroll = lenis.on("scroll", onScroll);
    const unsubscribeVirtual = lenis.on("virtual-scroll", onVirtualScroll);

    return () => {
      active = false;
      generation += 1;
      window.clearTimeout(timer);
      unsubscribeScroll();
      unsubscribeVirtual();
    };
  }, [lenis, pathname]);

  return null;
}

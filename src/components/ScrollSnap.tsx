"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import type Snap from "lenis/snap";

const SECTION_SELECTOR = "[data-scroll-snap-section]";
const ROOT_SELECTOR = "[data-scroll-snap-root]";

/**
 * Matches fixed header (`h-16`) and `<html className="scroll-pt-16">`.
 * Lenis Snap ignores CSS scroll-padding / scroll-margin, so we apply this offset
 * explicitly so sections snap flush to the top of the content area, not centered.
 */
const HEADER_SCROLL_OFFSET_PX = 64;

type SnapType = "mandatory" | "proximity";

function snapScrollYForSection(el: HTMLElement, lenisScroll: number): number {
  const rect = el.getBoundingClientRect();
  const documentTop = rect.top + lenisScroll;
  return Math.max(0, Math.ceil(documentTop - HEADER_SCROLL_OFFSET_PX));
}

function readSnapType(root: HTMLElement | null): SnapType {
  return root?.dataset.snapType === "proximity" ? "proximity" : "mandatory";
}

/**
 * Route-agnostic section snapping.
 *
 * Activates on any route that has 2+ `[data-scroll-snap-section]` elements.
 * Snap strength is read from an ancestor `[data-scroll-snap-root]`'s
 * `data-snap-type` attribute (defaults to `"mandatory"`; use `"proximity"`
 * for pages whose sections may exceed the viewport height).
 *
 * - With Lenis: uses `lenis/snap` with top-aligned targets (header offset).
 * - With reduced motion (no Lenis): applies CSS `snap-y snap-mandatory` on `<html>`.
 */
export function ScrollSnap() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // CSS scroll-snap fallback when motion is reduced.
  React.useEffect(() => {
    if (!reducedMotion) return;
    const hasSections =
      document.querySelectorAll(SECTION_SELECTOR).length > 1;
    if (!hasSections) return;

    const root = document.documentElement;
    root.classList.add("snap-y", "snap-mandatory");
    return () => {
      root.classList.remove("snap-y", "snap-mandatory");
    };
  }, [pathname, reducedMotion]);

  // Lenis-driven snap.
  React.useEffect(() => {
    if (reducedMotion || !lenis) return;

    let cancelled = false;
    let snapInstance: Snap | null = null;
    const snapPointRemovals: (() => void)[] = [];
    let resizeObserver: ResizeObserver | null = null;
    let resizeDebounce: ReturnType<typeof setTimeout> | undefined;

    const clearSnapPoints = () => {
      while (snapPointRemovals.length > 0) {
        const remove = snapPointRemovals.pop();
        remove?.();
      }
    };

    const refreshSnapPoints = () => {
      if (cancelled || !snapInstance) return;
      clearSnapPoints();
      const nodes = document.querySelectorAll<HTMLElement>(SECTION_SELECTOR);
      nodes.forEach((el) => {
        snapPointRemovals.push(
          snapInstance!.add(snapScrollYForSection(el, lenis.actualScroll)),
        );
      });
    };

    const scheduleRefresh = () => {
      clearTimeout(resizeDebounce);
      resizeDebounce = setTimeout(refreshSnapPoints, 100);
    };

    const sections = document.querySelectorAll(SECTION_SELECTOR);
    if (sections.length < 2) return;

    const root = document.querySelector<HTMLElement>(ROOT_SELECTOR);
    const type = readSnapType(root);

    void import("lenis/snap").then(({ default: SnapCtor }) => {
      if (cancelled || !lenis) return;
      snapInstance = new SnapCtor(lenis, { type });
      requestAnimationFrame(() => {
        requestAnimationFrame(refreshSnapPoints);
      });
      resizeObserver = new ResizeObserver(scheduleRefresh);
      resizeObserver.observe(document.documentElement);
    });

    return () => {
      cancelled = true;
      clearTimeout(resizeDebounce);
      resizeObserver?.disconnect();
      clearSnapPoints();
      snapInstance?.destroy();
    };
  }, [pathname, reducedMotion, lenis]);

  return null;
}

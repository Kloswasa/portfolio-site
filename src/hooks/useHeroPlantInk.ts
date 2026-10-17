"use client";

import { useEffect, useState, type RefObject } from "react";

const SHAPE_SELECTOR = "path, line, polyline, polygon, circle, ellipse, rect";
const STROKE_MS = 2600;
const FILL_DELAY_MS = 2100;
const FILL_MS = 1000;
const FALLBACK_EASE = "cubic-bezier(0, 0, 0.2, 1)";

type ShapeEl = SVGGeometryElement | SVGElement;

function readEase(): string {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--ease-out")
    .trim();
  return value || FALLBACK_EASE;
}

function hasVisibleStroke(el: Element): boolean {
  const stroke = getComputedStyle(el).stroke;
  return Boolean(stroke && stroke !== "none" && stroke !== "transparent");
}

function hasVisibleFill(el: Element): boolean {
  const fill = getComputedStyle(el).fill;
  return Boolean(fill && fill !== "none" && fill !== "transparent");
}

/**
 * Draws the hero plant SVG once: strokes ink in together, then fills fade up.
 * No-ops when `enabled` is false (reduced motion). Cancels on cleanup.
 */
export function useHeroPlantInk(
  ref: RefObject<HTMLDivElement | null>,
  plantId: string | null,
  enabled = true,
): boolean {
  const [complete, setComplete] = useState(() => !enabled && plantId !== null);

  useEffect(() => {
    if (!plantId) {
      setComplete(false);
      return;
    }

    if (!enabled) {
      setComplete(true);
      return;
    }

    setComplete(false);

    const ease = readEase();
    const animations: Animation[] = [];
    const stroked: ShapeEl[] = [];
    const filled: { el: ShapeEl; fillOpacity: number }[] = [];

    let finished = false;
    let frameId = 0;
    let settleId = 0;
    let attempts = 0;

    const finish = () => {
      if (finished) return;
      finished = true;
      setComplete(true);
    };

    const clearStrokeStyles = (el: ShapeEl) => {
      el.removeAttribute("pathLength");
      el.style.removeProperty("stroke-dasharray");
      el.style.removeProperty("stroke-dashoffset");
    };

    const clearFillStyles = (el: ShapeEl) => {
      el.style.removeProperty("fill-opacity");
    };

    const run = () => {
      const root = ref.current;
      if (!root) {
        if (attempts < 10) {
          attempts += 1;
          frameId = requestAnimationFrame(run);
        } else {
          finish();
        }
        return;
      }

      const shapes = root.querySelectorAll(SHAPE_SELECTOR);

      shapes.forEach((node) => {
        const el = node as ShapeEl;
        if (hasVisibleStroke(el)) stroked.push(el);
        if (hasVisibleFill(el)) {
          const raw = getComputedStyle(el).fillOpacity;
          const fillOpacity = raw === "" ? 1 : Number(raw);
          filled.push({
            el,
            fillOpacity: Number.isFinite(fillOpacity) ? fillOpacity : 1,
          });
        }
      });

      if (stroked.length === 0 && filled.length === 0) {
        finish();
        return;
      }

      stroked.forEach((el) => {
        el.setAttribute("pathLength", "1");
        el.style.strokeDasharray = "1";
        el.style.strokeDashoffset = "1";

        const animation = el.animate(
          [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
          { duration: STROKE_MS, easing: ease, fill: "forwards" },
        );
        animations.push(animation);

        animation.finished
          .then(() => {
            clearStrokeStyles(el);
          })
          .catch(() => {
            /* cancelled */
          });
      });

      // fill-opacity keeps stroked outlines visible while washes fade in.
      filled.forEach(({ el, fillOpacity }) => {
        el.style.fillOpacity = "0";

        const animation = el.animate(
          [{ fillOpacity: 0 }, { fillOpacity }],
          {
            duration: FILL_MS,
            delay: FILL_DELAY_MS,
            easing: ease,
            fill: "forwards",
          },
        );
        animations.push(animation);

        animation.finished
          .then(() => {
            clearFillStyles(el);
          })
          .catch(() => {
            /* cancelled */
          });
      });

      const waitFor =
        animations.length > 0
          ? Promise.all(animations.map((a) => a.finished.catch(() => undefined)))
          : Promise.resolve([]);

      waitFor.then(() => {
        if (!finished) finish();
      });
    };

    // Wait two frames so the freshly mounted SVG is queryable.
    frameId = requestAnimationFrame(() => {
      settleId = requestAnimationFrame(run);
    });

    return () => {
      finished = true;
      cancelAnimationFrame(frameId);
      cancelAnimationFrame(settleId);
      animations.forEach((animation) => animation.cancel());
      stroked.forEach(clearStrokeStyles);
      filled.forEach(({ el }) => clearFillStyles(el));
    };
  }, [ref, plantId, enabled]);

  return complete;
}

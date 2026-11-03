"use client";

import { useId, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/** Filled loop from `public/images/home/cuida_loop-outline.svg`. */
const LOOP_FILL =
  "M2 11.946C2 9.19302 4.276 7.00002 7.035 7.00002C7.83906 6.99828 8.632 7.1878 9.34837 7.55294C10.0647 7.91808 10.684 8.44836 11.155 9.10002L12 10.283L12.846 9.10202C13.3161 8.44954 13.935 7.91851 14.6513 7.55295C15.3677 7.1874 16.1608 6.99785 16.965 7.00002C19.725 7.00002 22 9.19302 22 11.946V12.054C22 14.807 19.724 17 16.965 17C16.1608 17.0026 15.3676 16.8134 14.6511 16.4482C13.9346 16.083 13.3154 15.5523 12.845 14.9L12 13.717L11.154 14.898C10.6839 15.5505 10.065 16.0815 9.34867 16.4471C8.63235 16.8126 7.83921 17.0022 7.035 17C4.275 17 2 14.807 2 12.054V11.946ZM10.77 12L9.528 10.265C9.24283 9.87129 8.86794 9.55117 8.4344 9.33118C8.00087 9.1112 7.52115 8.99767 7.035 9.00002C5.338 9.00002 4 10.34 4 11.946V12.054C4 13.66 5.338 15 7.035 15C8.035 15 8.965 14.523 9.528 13.735L10.77 12ZM13.23 12L14.472 13.735C14.7572 14.1287 15.1321 14.4489 15.5656 14.6689C15.9991 14.8888 16.4788 15.0024 16.965 15C18.662 15 20 13.66 20 12.054V11.946C20 10.34 18.662 9.00002 16.965 9.00002C15.965 9.00002 15.035 9.47702 14.472 10.265L13.23 12Z";

/** Outer contour. A thick stroke along it reveals the filled band as it travels. */
const LOOP_DRAW =
  "M2 11.946C2 9.19302 4.276 7.00002 7.035 7.00002C7.83906 6.99828 8.632 7.1878 9.34837 7.55294C10.0647 7.91808 10.684 8.44836 11.155 9.10002L12 10.283L12.846 9.10202C13.3161 8.44954 13.935 7.91851 14.6513 7.55295C15.3677 7.1874 16.1608 6.99785 16.965 7.00002C19.725 7.00002 22 9.19302 22 11.946V12.054C22 14.807 19.724 17 16.965 17C16.1608 17.0026 15.3676 16.8134 14.6511 16.4482C13.9346 16.083 13.3154 15.5523 12.845 14.9L12 13.717L11.154 14.898C10.6839 15.5505 10.065 16.0815 9.34867 16.4471C8.63235 16.8126 7.83921 17.0022 7.035 17C4.275 17 2 14.807 2 12.054V11.946Z";

const DRAW_EASE = [0, 0, 0.2, 1] as const;

export function HomeAboutLoop() {
  const ref = useRef<SVGSVGElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const maskId = `home-about-loop-${useId().replace(/:/g, "")}`;
  const drawn = Boolean(reduceMotion) || inView;

  return (
    <svg
      ref={ref}
      className="home-about__loop"
      viewBox="1.5 6.4 21 11.2"
      aria-hidden="true"
    >
      <mask
        id={maskId}
        maskUnits="userSpaceOnUse"
        x="-8"
        y="-8"
        width="40"
        height="40"
      >
        <motion.path
          d={LOOP_DRAW}
          fill="none"
          stroke="white"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          initial={{ strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: drawn ? 0 : 1 }}
          transition={{
            duration: reduceMotion ? 0 : 2.1,
            ease: DRAW_EASE,
            delay: reduceMotion ? 0 : 0.2,
          }}
        />
      </mask>
      <path
        d={LOOP_FILL}
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}

"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const easeDefault = [0.25, 0.1, 0.25, 1] as const;

/**
 * Container variants — drives children stagger.
 * Children opt in via `<SnapItem>` (or `motion.*` using `itemVariants`).
 */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeDefault },
  },
};

const reducedContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

type SnapSectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * If true, content is shown immediately at mount (no entry animation).
   * Otherwise the reveal fires once when enough of the wrapper enters the viewport.
   */
  immediate?: boolean;
  /**
   * Fraction of the wrapper that must intersect the viewport (0–1).
   * Avoid `1` on mobile: tall stacked content is often taller than the viewport, so
   * the observer never reaches “fully visible” and children stay hidden.
   */
  amount?: number;
  /** Optional extra delay (s) before the stagger starts. */
  delay?: number;
};

/**
 * Section-level reveal coordinator for snapped sections on the home page.
 *
 * Fires **once** per section when the section snaps into view (uses
 * `IntersectionObserver` via `useInView`, so it works equally well with
 * Lenis snap and the reduced-motion CSS-snap fallback).
 *
 * Wrap individual blocks inside with `<SnapItem>` to get a staggered cascade.
 */
export function SnapSectionReveal({
  children,
  className,
  style,
  immediate = false,
  amount = 0.2,
  delay = 0,
}: SnapSectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount,
    once: true,
    margin: "-64px 0px 0px 0px",
  });

  const visible = immediate || inView;

  const variants = reduceMotion ? reducedContainerVariants : containerVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      transition={delay > 0 ? { delayChildren: delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

type SnapItemAs = "div" | "section" | "header" | "article" | "li";

type SnapItemProps = {
  children: React.ReactNode;
  as?: SnapItemAs;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Direct child of `<SnapSectionReveal>` — participates in the section's staggered reveal.
 */
export function SnapItem({
  children,
  as = "div",
  className,
  style,
}: SnapItemProps) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? reducedItemVariants : itemVariants;

  const props = { variants, className, style };

  switch (as) {
    case "section":
      return <motion.section {...props}>{children}</motion.section>;
    case "header":
      return <motion.header {...props}>{children}</motion.header>;
    case "article":
      return <motion.article {...props}>{children}</motion.article>;
    case "li":
      return <motion.li {...props}>{children}</motion.li>;
    default:
      return <motion.div {...props}>{children}</motion.div>;
  }
}

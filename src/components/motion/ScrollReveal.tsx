"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { revealReduced } from "@/animation/variants";

/** Subset of Framer Motion `whileInView` viewport options used by this site. */
export type ScrollRevealViewport = {
  once?: boolean;
  margin?: string;
  amount?: "some" | "all" | number;
};

const defaultViewport: ScrollRevealViewport = {
  once: true,
  amount: 0.15,
  margin: "-80px 0px 0px 0px",
};

const easeDefault = [0.25, 0.1, 0.25, 1] as const;

type ScrollRevealAs = "section" | "div" | "article" | "header";

export type ScrollRevealProps = {
  as?: ScrollRevealAs;
  children: React.ReactNode;
  /** Seconds — applied to the reveal transition when motion is allowed. */
  delay?: number;
  viewport?: ScrollRevealViewport;
  /**
   * When false, skips the in-view fade/lift so only a parent route transition (e.g.
   * PageTransition) animates the block. Use for the top section of a page; scroll reveals
   * still apply to sections below.
   */
  revealOnScroll?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "viewport">;

function buildVariants(reduceMotion: boolean | null, delay: number): Variants {
  if (reduceMotion) return revealReduced;
  return {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeDefault, delay },
    },
  };
}

function StaticReveal({
  as,
  className,
  style,
  id,
  children,
}: {
  as: ScrollRevealAs;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;
}) {
  switch (as) {
    case "div":
      return (
        <div className={className} style={style} id={id}>
          {children}
        </div>
      );
    case "article":
      return (
        <article className={className} style={style} id={id}>
          {children}
        </article>
      );
    case "header":
      return (
        <header className={className} style={style} id={id}>
          {children}
        </header>
      );
    default:
      return (
        <section className={className} style={style} id={id}>
          {children}
        </section>
      );
  }
}

export function ScrollReveal({
  as = "section",
  children,
  className,
  style,
  id,
  delay = 0,
  viewport: viewportFromProps,
  revealOnScroll = true,
  ...rest
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const variants = React.useMemo(
    () => buildVariants(reduceMotion, delay),
    [reduceMotion, delay],
  );
  const viewport = React.useMemo(
    () => ({ ...defaultViewport, ...viewportFromProps }),
    [viewportFromProps],
  );

  if (!revealOnScroll) {
    return (
      <StaticReveal
        as={as}
        className={className}
        style={style as React.CSSProperties | undefined}
        id={id}
      >
        {children}
      </StaticReveal>
    );
  }

  const motionProps = {
    ...rest,
    className,
    style,
    id,
    variants,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport,
  };

  switch (as) {
    case "div":
      return <motion.div {...motionProps}>{children}</motion.div>;
    case "article":
      return <motion.article {...motionProps}>{children}</motion.article>;
    case "header":
      return <motion.header {...motionProps}>{children}</motion.header>;
    default:
      return <motion.section {...motionProps}>{children}</motion.section>;
  }
}

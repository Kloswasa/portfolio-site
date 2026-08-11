"use client";

import { motion, useReducedMotion } from "framer-motion";

const pulseTransition = {
  duration: 1.6,
  ease: "easeInOut" as const,
  repeat: Infinity,
};

function Bone({
  className,
  tone,
  reduceMotion,
}: {
  className?: string;
  tone: "hero" | "body";
  reduceMotion: boolean | null;
}) {
  const fill = tone === "hero" ? "bg-text-inverse/15" : "bg-border-subtle";

  return (
    <motion.div
      className={`${fill} ${className ?? ""}`}
      animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
      transition={reduceMotion ? undefined : pulseTransition}
    />
  );
}

/** Layout-matched placeholder shown while a case study’s images preload. */
export function CaseStudySkeleton() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="cs-major -mx-8" aria-busy="true" aria-hidden="true">
      <div className="cs-major__reading-bar" />

      <section className="cs-major__hero">
        <div className="cs-major__hero-dots" />
        <div className="cs-major__hero-gradient" />

        <div className="cs-major__hero-content">
          <div className="cs-major__breadcrumb">
            <Bone className="h-3 w-12" tone="hero" reduceMotion={reduceMotion} />
            <Bone className="h-3 w-20" tone="hero" reduceMotion={reduceMotion} />
          </div>

          <div className="eyebrow mb-3">
            <Bone className="h-3 w-48" tone="hero" reduceMotion={reduceMotion} />
          </div>

          <div className="cs-major__hero-title flex flex-col gap-3">
            <Bone className="h-16 w-80" tone="hero" reduceMotion={reduceMotion} />
            <Bone className="h-16 w-64" tone="hero" reduceMotion={reduceMotion} />
          </div>

          <div className="cs-major__hero-summary flex flex-col gap-2">
            <Bone className="h-4 w-full" tone="hero" reduceMotion={reduceMotion} />
            <Bone className="h-4 w-4/5" tone="hero" reduceMotion={reduceMotion} />
          </div>

          <div className="cs-major__meta-strip">
            {["w-28", "w-32", "w-16", "w-36"].map((width) => (
              <div key={width} className="cs-major__meta-item flex flex-col gap-2">
                <Bone
                  className="h-2 w-14"
                  tone="hero"
                  reduceMotion={reduceMotion}
                />
                <Bone
                  className={`h-4 ${width}`}
                  tone="hero"
                  reduceMotion={reduceMotion}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cs-major__layout">
        <div className="cs-major__chapter-nav-shell">
          <nav className="cs-major__chapter-nav">
            <div className="cs-major__chapter-label">
              <Bone className="h-3 w-16" tone="body" reduceMotion={reduceMotion} />
            </div>
            <div className="cs-major__chapter-list">
              {["w-20", "w-16", "w-24", "w-14"].map((width) => (
                <div key={width} className="cs-major__chapter-link">
                  <Bone
                    className={`h-2 ${width}`}
                    tone="body"
                    reduceMotion={reduceMotion}
                  />
                </div>
              ))}
            </div>
          </nav>
        </div>

        <article className="cs-major__main">
          <section className="cs-major__section">
            <div className="eyebrow mb-3">
              <Bone className="h-3 w-24" tone="body" reduceMotion={reduceMotion} />
            </div>
            <div className="cs-major__section-title flex flex-col gap-3">
              <Bone className="h-10 w-64" tone="body" reduceMotion={reduceMotion} />
              <Bone className="h-10 w-48" tone="body" reduceMotion={reduceMotion} />
            </div>
            <figure className="cs-major__image">
              <Bone
                className="aspect-video w-full"
                tone="body"
                reduceMotion={reduceMotion}
              />
            </figure>
            <div className="cs-major__body flex flex-col gap-2">
              <Bone className="h-4 w-full" tone="body" reduceMotion={reduceMotion} />
              <Bone className="h-4 w-full" tone="body" reduceMotion={reduceMotion} />
              <Bone className="h-4 w-3/4" tone="body" reduceMotion={reduceMotion} />
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

"use client";

import { PlayCanvas } from "@/src/components/play/PlayCanvas";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import type { PlayWork } from "@/src/lib/play/types";

interface PlayCardProps {
  work: PlayWork;
  motionPaused: boolean;
  onOpen: (work: PlayWork) => void;
}

export function PlayCard({ work, motionPaused, onOpen }: PlayCardProps) {
  const isCode = work.medium === "code";

  return (
    <article
      className="play-card"
      data-medium={work.medium}
      onClick={() => onOpen(work)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(work);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${work.title}`}
    >
      <div className="play-card__media">
        {isCode && work.sketch ? (
          <PlayCanvas sketch={work.sketch} paused={motionPaused} />
        ) : work.imageSrc ? (
          <img
            src={work.imageSrc}
            alt={work.imageAlt ?? work.title}
            width={work.imageWidth}
            height={work.imageHeight}
            className="play-card__image"
            loading="lazy"
            decoding="async"
          />
        ) : work.illustration ? (
          <PlayIllustration name={work.illustration} />
        ) : null}
      </div>

      <div className="play-card__grad" aria-hidden="true" />
      <div className="play-card__mat" aria-hidden="true" />

      <span className="play-card__frame">{work.index}</span>

      {isCode ? (
        <span
          className={`play-card__badge${motionPaused ? " play-card__badge--paused" : ""}`}
        >
          <span className="play-card__live-dot" aria-hidden="true" />
          Live
        </span>
      ) : (
        <span className="play-card__badge play-card__badge--medium">{work.tag}</span>
      )}

      <div className="play-card__info">
        <p className="play-card__tools">
          <span className="play-card__tools-line" aria-hidden="true" />
          {work.cardTools}
        </p>
        <h3 className="play-card__title">{work.title}</h3>
        <p className="play-card__desc">{work.cardDescription}</p>
      </div>
    </article>
  );
}

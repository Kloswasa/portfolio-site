"use client";

import { useReducedMotion } from "framer-motion";
import { PlayCanvas } from "@/src/components/play/PlayCanvas";
import { PlayIllustration } from "@/src/components/play/PlayIllustrations";
import { SpecimenCard } from "@/src/components/ui/SpecimenCard";
import { useTilt } from "@/src/hooks/useTilt";
import type { PlayWork } from "@/src/lib/play/types";
import { playImageSrc } from "@/src/lib/play/utils";

interface PlayCardProps {
  work: PlayWork;
  motionPaused: boolean;
  onOpen: (work: PlayWork) => void;
}

export function PlayCard({ work, motionPaused, onOpen }: PlayCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useTilt<HTMLElement>(!reduceMotion);
  const isCode = work.medium === "code";
  const [stampValue, stampLabel = ""] = work.cardTools.split(" · ");

  return (
    <article
      className="specimen-card specimen-card--button"
      data-medium={work.medium}
      ref={cardRef}
      data-tilt={reduceMotion ? undefined : ""}
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
      <SpecimenCard
        media={
          isCode && work.sketch ? (
            <PlayCanvas sketch={work.sketch} paused={motionPaused} />
          ) : work.imageSrc ? (
            <img
              src={playImageSrc(work.imageSrc)}
              alt={work.imageAlt ?? work.title}
              width={work.imageWidth}
              height={work.imageHeight}
              className="specimen-card__cover"
              loading="lazy"
              decoding="async"
            />
          ) : work.illustration ? (
            <PlayIllustration name={work.illustration} />
          ) : null
        }
        mediaProps={{ "data-photo": "" }}
        frame={work.index}
        stampValue={stampValue}
        stampLabel={stampLabel}
        classification={
          isCode ? (
            <span className="specimen-card__live-label">
              {motionPaused ? "Paused" : "Live"}
              {!motionPaused ? (
                <span className="specimen-card__live-dot" aria-hidden="true" />
              ) : null}
            </span>
          ) : (
            work.tag
          )
        }
        title={work.title}
        tags={work.tools}
      />
    </article>
  );
}

import { PlayCard } from "@/src/components/play/PlayCard";
import type { PlayMediumSection, PlayWork } from "@/src/lib/play/types";

interface PlayMediumBlockProps {
  section: PlayMediumSection;
  works: PlayWork[];
  hidden: boolean;
  motionPaused: boolean;
  onOpen: (work: PlayWork) => void;
}

export function PlayMediumBlock({
  section,
  works,
  hidden,
  motionPaused,
  onOpen,
}: PlayMediumBlockProps) {
  if (works.length === 0) return null;

  return (
    <section className="play-block" data-medium={section.medium} hidden={hidden || undefined}>
      <div className="play-block__head">
        <h2 className="play-block__title">{section.title}</h2>
        <p className="play-block__info">
          <strong>{section.infoStrong}</strong>
          {section.infoDetail}
        </p>
      </div>

      <div className="play-grid">
        {works.map((work) => (
          <PlayCard
            key={work.id}
            work={work}
            motionPaused={motionPaused}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}

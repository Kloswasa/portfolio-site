import { PlayCard } from "@/src/components/play/PlayCard";
import { SectionBlockHead } from "@/src/components/ui/SectionBlockHead";
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
      <SectionBlockHead
        title={section.title}
        infoStrong={section.infoStrong}
        infoDetail={section.infoDetail}
        hideInfoOnMobile
      />

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

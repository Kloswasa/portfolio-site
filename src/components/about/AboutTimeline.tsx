import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { AboutBlock, AboutTimelineEntry } from "@/src/lib/about/types";

interface AboutTimelineProps {
  block: AboutBlock;
  entries: AboutTimelineEntry[];
}

export function AboutTimeline({ block, entries }: AboutTimelineProps) {
  return (
    <ScrollReveal as="section" className="about-block">
      <AboutBlockHead block={block} />

      <ol className="about-record">
        {entries.map((entry) => (
          <li
            className={[
              "about-record__row",
              entry.year ? null : "about-record__row--no-year",
              entry.tag ? null : "about-record__row--no-tag",
            ]
              .filter(Boolean)
              .join(" ")}
            key={`${entry.year ?? ""}-${entry.role}`}
          >
            {entry.year ? (
              <span className="about-record__year">{entry.year}</span>
            ) : null}
            <div className="about-record__body">
              <h3 className="about-record__role">{entry.role}</h3>
              {entry.specialisation ? (
                <p className="about-record__specialisation">{entry.specialisation}</p>
              ) : null}
              <p className="about-record__place">{entry.university ?? entry.place}</p>
              {entry.note ? (
                <p className="about-record__note">{entry.note}</p>
              ) : null}
            </div>
            {entry.tag ? (
              <span className="about-record__tag">{entry.tag}</span>
            ) : null}
          </li>
        ))}
      </ol>
    </ScrollReveal>
  );
}

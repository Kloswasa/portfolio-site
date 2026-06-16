import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import type { AboutBlock, AboutInstrumentGroup } from "@/src/lib/about/types";

interface AboutInstrumentsProps {
  block: AboutBlock;
  groups: AboutInstrumentGroup[];
}

export function AboutInstruments({ block, groups }: AboutInstrumentsProps) {
  return (
    <ScrollReveal as="section" className="about-block">
      <AboutBlockHead block={block} />

      <div className="about-instruments">
        {groups.map((group) => (
          <div className="about-instruments__group" key={group.label}>
            <p className="about-instruments__label">{group.label}</p>
            <ul className="about-instruments__tags">
              {group.tags.map((tag) => (
                <li
                  key={tag.label}
                  className={
                    tag.key
                      ? "about-instruments__tag about-instruments__tag--key"
                      : "about-instruments__tag"
                  }
                >
                  {tag.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { RichText } from "@/src/components/about/RichText";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import type { AboutBlock, AboutCurrentlyColumn } from "@/src/lib/about/types";

interface AboutCurrentlyProps {
  block: AboutBlock;
  columns: AboutCurrentlyColumn[];
}

export function AboutCurrently({ block, columns }: AboutCurrentlyProps) {
  return (
    <ScrollReveal as="section" className="about-block">
      <AboutBlockHead block={block} />

      <div className="about-currently">
        {columns.map((column) => (
          <div className="about-currently__col" key={column.label}>
            <p className="about-currently__label">{column.label}</p>
            {column.items.map((item, index) => (
              <p className="about-currently__item" key={index}>
                <RichText value={item} />
              </p>
            ))}
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

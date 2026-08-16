import Link from "next/link";

import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { AboutBlock, ColophonStackGroup } from "@/src/lib/colophon/types";

interface ColophonStackProps {
  block: AboutBlock;
  groups: ColophonStackGroup[];
}

export function ColophonStack({ block, groups }: ColophonStackProps) {
  return (
    <ScrollReveal as="section" className="colophon-block">
      <AboutBlockHead block={block} />

      <ul className="colophon-stack">
        {groups.map((group) => (
          <li className="colophon-stack__row" key={group.label}>
            <p className="colophon-stack__label">{group.label}</p>
            <ul className="colophon-stack__items">
              {group.items.map((item) => {
                const className = item.key
                  ? "colophon-stack__item colophon-stack__item--key"
                  : "colophon-stack__item";

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <Link className={className} href={item.href}>
                        {item.label}
                      </Link>
                    ) : (
                      <span className={className}>{item.label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

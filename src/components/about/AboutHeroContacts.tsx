import type { AboutHeroContact } from "@/src/lib/about/types";

interface AboutHeroContactsProps {
  links: AboutHeroContact[];
}

export function AboutHeroContacts({ links }: AboutHeroContactsProps) {
  if (links.length === 0) return null;

  return (
    <ul className="about-hero__contacts" aria-label="Contact">
      {links.map((link) => (
        <li key={link.label}>
          <a
            className="about-hero__contact"
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className="about-hero__contact-label">{link.label}</span>
            <span className="about-hero__contact-value">{link.value}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

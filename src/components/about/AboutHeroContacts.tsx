import type {
  AboutHeroContact,
  AboutHeroContactVariant,
  AboutHeroSocial,
  AboutHeroSocialIcon,
} from "@/src/lib/about/types";

const CONTACT_CLASS: Record<AboutHeroContactVariant, string> = {
  primary: "btn btn-primary",
  accent: "btn btn-gold",
  secondary: "btn btn-secondary",
};

function SocialIcon({ icon }: { icon: AboutHeroSocialIcon }) {
  return <span className={`about-hero__icon about-hero__icon--${icon}`} />;
}

interface AboutHeroContactsProps {
  heading: string;
  links: AboutHeroContact[];
  socials: AboutHeroSocial[];
}

export function AboutHeroContacts({
  heading,
  links,
  socials,
}: AboutHeroContactsProps) {
  if (links.length === 0 && socials.length === 0) return null;

  return (
    <div className="about-hero__contact">
      <h2 className="about-hero__contact-heading">{heading}</h2>
      <div className="about-hero__contact-row">
        {links.length > 0 ? (
          <ul className="about-hero__contacts">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className={CONTACT_CLASS[link.variant]}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        {socials.length > 0 ? (
          <ul className="about-hero__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="about-hero__icon-link"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

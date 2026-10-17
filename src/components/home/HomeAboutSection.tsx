import Link from "next/link";
import { HomeAboutBotanical } from "@/src/components/home/HomeAboutBotanical";
import { HomeAboutSkills } from "@/src/components/home/HomeAboutSkills";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import { ABOUT_HOME_TEASER } from "@/src/lib/about";
import { siteConfig } from "@/src/lib/config";

const SECTION_NUMBER = "03";

const PANEL_SOCIALS = [
  { label: "LinkedIn", icon: "linkedin", href: siteConfig.social.linkedin },
  { label: "GitHub", icon: "github", href: siteConfig.social.github },
] as const;

function AboutHeading({ text }: { text: string }) {
  const emphasis = "considered";
  const index = text.indexOf(emphasis);

  if (index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <em>{emphasis}</em>
      {text.slice(index + emphasis.length)}
    </>
  );
}

export function HomeAboutSection() {
  const { email, location } = siteConfig;
  const teaser = ABOUT_HOME_TEASER;

  return (
    <section id="about" data-snap-section="" className="home-about">
      <SnapSectionReveal className="home-about__inner">
        <p className="home-section__watermark" aria-hidden="true">
          {SECTION_NUMBER}
        </p>

        <div className="home-about__grid">
          <SnapItem className="home-about__main">
            <p className="eyebrow home-about__eyebrow">About</p>
            <h2 className="home-section__heading">
              <AboutHeading text={teaser.shortHeading} />
            </h2>

            <p className="home-about__lead">{teaser.storyIntro}</p>

            <HomeAboutSkills skills={teaser.skills} />

            <div className="home-about__actions">
              <Link className="btn btn-secondary" href="/about">
                Read the full story
              </Link>
              
            </div>
          </SnapItem>

          <SnapItem className="home-about__panel">
            <HomeAboutBotanical />

            <div className="home-about__panel-inner">
              <p className="home-about__status">
                <span className="home-about__status-dot" aria-hidden="true" />
                {teaser.statusLabel}
              </p>

              <h3 className="home-about__panel-heading">
                {teaser.availabilityHeading}
              </h3>
              <dl className="home-about__stats">
                <div>
                  <dt className="home-about__stat-label">Experience</dt>
                  <dd className="home-about__stat-value">{teaser.experience}</dd>
                </div>
                <div>
                  <dt className="home-about__stat-label">Based in</dt>
                  <dd className="home-about__stat-value">{location}</dd>
                </div>
              </dl>
              <div className="home-about__panel-cta">
                <a className="btn btn-gold" href={`mailto:${email}`}>
                  {email}
                </a>
                <div className="home-about__socials">
                  {PANEL_SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      className="home-about__social"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <span
                        className={`home-about__social-icon home-about__social-icon--${social.icon}`}
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <p className="home-about__panel-copy">
                {teaser.availabilityDescription}
              </p>
            </div>

            <div className="home-about__stamp" aria-hidden="true">
              
             
            </div>
          </SnapItem>
        </div>
      </SnapSectionReveal>
    </section>
  );
}

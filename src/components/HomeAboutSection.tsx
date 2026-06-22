import Link from "next/link";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import { siteConfig } from "@/src/lib/config";

const SECTION_NUMBER = "03";
const VISIBLE_SKILLS = 5;

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

function HomeAboutBotanical() {
  return (
    <div className="home-about__botanical" aria-hidden="true">
      <svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60 170 C58 130, 60 90, 60 50 C60 30, 58 14, 56 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M60 120 C44 108, 28 98, 14 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.8"
        />
        <path
          d="M60 120 C76 108, 92 98, 106 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.8"
        />
        <ellipse
          cx="38"
          cy="72"
          rx="14"
          ry="8"
          transform="rotate(-24 38 72)"
          fill="currentColor"
          opacity="0.12"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <ellipse
          cx="78"
          cy="58"
          rx="12"
          ry="7"
          transform="rotate(18 78 58)"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <circle cx="56" cy="8" r="4" fill="currentColor" opacity="0.2" />
      </svg>
    </div>
  );
}

export function HomeAboutSection() {
  const { about, email, location } = siteConfig;
  const skills = about.skills.slice(0, VISIBLE_SKILLS);
  const remainingSkills = about.skills.length - VISIBLE_SKILLS;

  return (
    <section id="about" className="home-about">
      <SnapSectionReveal className="home-about__inner">
        <p className="home-about__watermark" aria-hidden="true">
          {SECTION_NUMBER}
        </p>

        <SnapItem as="header" className="home-about__header">
          <p className="eyebrow font-bold text-accent">About</p>
        </SnapItem>

        <div className="home-about__grid">
          <SnapItem className="home-about__main">
            <h2 className="home-about__heading">
              <AboutHeading text={about.shortHeading} />
            </h2>

            <p className="home-about__lead">{about.storyIntro}</p>

            <div className="home-about__skills" aria-label="Focus areas">
              {skills.map((skill) => (
                <span className="home-about__skill" key={skill}>
                  {skill}
                </span>
              ))}
              {remainingSkills > 0 ? (
                <span className="home-about__skill">+{remainingSkills} more</span>
              ) : null}
            </div>

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
                Open for work
              </p>

              <h3 className="home-about__panel-heading">
                {about.availabilityHeading}
              </h3>

              <p className="home-about__panel-copy">
                {about.availabilityDescription}
              </p>

              <dl className="home-about__stats">
                <div>
                  <dt className="home-about__stat-label">Experience</dt>
                  <dd className="home-about__stat-value">{about.experience}</dd>
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
              </div>
            </div>

            <div className="home-about__stamp" aria-hidden="true">
              <strong>{about.experience}</strong>
              <span>Field record · {SECTION_NUMBER}</span>
            </div>
          </SnapItem>
        </div>
      </SnapSectionReveal>
    </section>
  );
}

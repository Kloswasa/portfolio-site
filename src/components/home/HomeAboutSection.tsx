import Link from "next/link";
import { HomeAboutBotanical } from "@/src/components/home/HomeAboutBotanical";
import { HomeAboutLoop } from "@/src/components/home/HomeAboutLoop";
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

function withEmphasis(chunk: string) {
  const emphasis = "considered";
  const at = chunk.indexOf(emphasis);
  if (at === -1) return chunk;

  return (
    <>
      {chunk.slice(0, at)}
      <em>{emphasis}</em>
      {chunk.slice(at + emphasis.length)}
    </>
  );
}

const LOOP_MARK = "\u221e";
const OPEN_WORD = "Open";

function withOpenAccent(text: string) {
  if (!text.startsWith(OPEN_WORD)) return text;

  return (
    <>
      <em>{OPEN_WORD}</em>
      {text.slice(OPEN_WORD.length)}
    </>
  );
}

function withLoopMark(text: string) {
  if (!text.includes(LOOP_MARK)) return withEmphasis(text);

  const spoken = text.replaceAll(LOOP_MARK, "oo");
  const parts = text.split(LOOP_MARK);

  return (
    <>
      <span className="sr-only">{spoken}</span>
      <span aria-hidden="true">
        {parts.map((part, index) => (
          <span key={`${part}-${index}`}>
            {withEmphasis(part)}
            {index < parts.length - 1 ? <HomeAboutLoop /> : null}
          </span>
        ))}
      </span>
    </>
  );
}

function AboutHeading({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, lineIndex) => {
        const isLast = lineIndex === lines.length - 1;
        const lastSpace = line.lastIndexOf(" ");
        const lead = isLast && lastSpace !== -1 ? line.slice(0, lastSpace) : line;
        const end = isLast && lastSpace !== -1 ? line.slice(lastSpace + 1) : "";

        return (
          <span key={`${lineIndex}-${line}`}>
            {lineIndex > 0 ? <br /> : null}
            {isLast && end ? (
              <>
                {withEmphasis(lead)}{" "}
                <span className="home-about__heading-end">{withLoopMark(end)}</span>
              </>
            ) : (
              withLoopMark(line)
            )}
          </span>
        );
      })}
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
            <h2 className="home-section__heading">
              <AboutHeading text={teaser.shortHeading} />
            </h2>

            <p className="home-about__lead">{teaser.storyIntro}</p>

            <HomeAboutSkills groups={teaser.skillGroups} />

            <div className="home-about__actions">
              <Link className="btn btn-secondary" href="/about">
                Read the full story
              </Link>
              <a
                className="btn btn-primary"
                href={siteConfig.resume.downloadHref}
                download={siteConfig.resume.filename}
              >
                Download CV ↓
              </a>
            </div>
          </SnapItem>

          <SnapItem className="home-about__panel">
            <HomeAboutBotanical />

            <div className="home-about__panel-inner">
              <h3 className="home-about__panel-heading">
                {withOpenAccent(teaser.availabilityHeading)}
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

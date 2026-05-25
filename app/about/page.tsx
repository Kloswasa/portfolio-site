import Link from "next/link";
import ContactForm from "@/src/components/ContactForm";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import { Badge } from "@/src/components/ui/Badge";
import { siteConfig } from "@/src/lib/config";

export const metadata = {
  title: "About",
  description: siteConfig.about.metaDescription,
};

export default function AboutPage() {
  const { about, resume } = siteConfig;

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-14">
      <ScrollReveal as="header" className="max-w-xl" revealOnScroll={false}>
        <span className="eyebrow">About</span>
        <h1 className="text-heading-4xl md:text-heading-5xl">Story</h1>
        <p className="mt-3 max-w-xl font-body text-base font-light leading-relaxed text-text-muted">
          {about.storyIntro}
        </p>
      </ScrollReveal>

      <ScrollReveal as="section" className="mt-12 grid gap-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-heading-xl text-text">Bio</h2>
          {about.bio.map((paragraph, index) => (
            <p key={index} className="mt-4 font-body text-sm leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-heading-xl text-text">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <Badge key={skill} tone="primary">
                {skill}
              </Badge>
            ))}
          </div>

          <h2 className="mt-8 text-heading-xl text-text">Tools</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.tools.map((tool) => (
              <Badge key={tool} tone="secondary">
                {tool}
              </Badge>
            ))}
          </div>

          <h2 className="mt-8 text-heading-xl text-text">Hobby</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.hobby.map((hobby) => (
              <Badge key={hobby} tone="tertiary">
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="mt-14">
        <div className="flex items-center gap-4">
          <hr className="divider flex-1" />
          <span className="section-label m-0">Resume</span>
          <hr className="divider flex-1" />
        </div>

        <div className="mt-6 panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="mb-2 block font-body text-xs font-medium uppercase tracking-widest text-accent">
              ↳ Download
            </span>
            <h3 className="text-heading-xl text-text">
              {resume.filename} · {resume.year}
            </h3>
            <p className="mt-1 font-body text-sm text-text-muted">{resume.note}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="btn btn-gold"
              href={resume.downloadHref}
              aria-disabled={resume.downloadHref === "#"}
              tabIndex={resume.downloadHref === "#" ? -1 : undefined}
            >
              ↓ Download PDF
            </Link>
            <Link className="btn btn-outline" href="#contact">
              Get in touch
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" id="contact" className="mt-14 scroll-mt-24">
        <h2 className="text-heading-2xl text-text">Get in touch</h2>
        <p className="mt-3 max-w-2xl font-body text-text-muted">{about.contactBlurb}</p>
        <div className="mt-8 max-w-2xl">
          <ContactForm />
        </div>
      </ScrollReveal>
    </main>
  );
}

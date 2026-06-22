import Link from "next/link";
import ProjectCard from "@/src/components/ProjectCard";
import { CopyButton } from "@/src/components/ui/CopyButton";
import { Badge } from "@/src/components/ui/Badge";
import { TabBarDemo } from "@/src/components/ui/TabBarDemo";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import { WorkCard } from "@/src/components/WorkCard";
import ThemeToggle from "@/src/components/ThemeToggle";
import { Footer } from "@/src/components/Footer";
import ContactForm from "@/src/components/ContactForm";
import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { AboutQuote } from "@/src/components/about/AboutQuote";
import { AboutEnd } from "@/src/components/about/AboutEnd";
import {
  ABOUT_END_COPY,
  ABOUT_QUOTE,
  ABOUT_STORY_BLOCK,
} from "@/src/lib/about";
import { getFeaturedWorkCards } from "@/src/lib/work/data";
import {
  CATALOG_CATEGORIES,
  COMPONENT_CATALOG,
  type CatalogCategory,
} from "./catalog";
import {
  CatalogNav,
  FeaturedProjectStaggerDemo,
  FilterBarDemo,
  HoverRippleDemo,
  MenuButtonDemo,
  NavRippleLinkDemo,
  PlayCardDemo,
  PlayEndMarkDemo,
  SnapSectionRevealDemo,
  TabbedGridSectionDemo,
} from "./demos";

export const metadata = {
  title: "Components",
  description: "UI component gallery for the portfolio site.",
};

const DEMO_SECTIONS = [
  { id: "inventory", label: "Inventory" },
  { id: "typography", label: "Typography" },
  { id: "utilities", label: "CSS utilities" },
  { id: "hover-ripple", label: "HoverRipple" },
  { id: "nav-ripple-link", label: "NavRippleLink" },
  { id: "filter-bar", label: "FilterBar" },
  { id: "tab-bar", label: "TabBar" },
  { id: "copy-button", label: "CopyButton" },
  { id: "scroll-reveal", label: "ScrollReveal" },
  { id: "snap-section", label: "SnapSectionReveal" },
  { id: "work-card", label: "WorkCard" },
  { id: "project-card", label: "ProjectCard" },
  { id: "featured-stagger", label: "FeaturedProjectStagger" },
  { id: "play-card", label: "PlayCard" },
  { id: "site-chrome", label: "Site chrome" },
  { id: "contact-form", label: "ContactForm" },
  { id: "tabbed-grid", label: "TabbedGridSection" },
  { id: "about-blocks", label: "About blocks" },
  { id: "play-end-mark", label: "PlayEndMark" },
  { id: "page-sections", label: "Page sections" },
] as const;

function SectionShell({
  id,
  title,
  filePath,
  children,
}: {
  id: string;
  title: string;
  filePath: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal as="section" id={id} className="card scroll-mt-24 p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-heading-2xl">{title}</h2>
        <span className="font-mono text-xs text-text-muted">{filePath}</span>
      </div>
      <div className="mt-8">{children}</div>
    </ScrollReveal>
  );
}

function InventoryTable({ category }: { category: CatalogCategory }) {
  const rows = COMPONENT_CATALOG.filter((entry) => entry.category === category);

  if (rows.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse font-body text-sm">
        <thead>
          <tr className="border-b border-border-subtle text-left text-text-muted">
            <th className="py-2 pr-4 font-medium">Component</th>
            <th className="py-2 pr-4 font-medium">Path</th>
            <th className="py-2 font-medium">Used on</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-border-subtle/60">
              <td className="py-3 pr-4 align-top">
                {DEMO_SECTIONS.some((s) => s.id === row.id) ? (
                  <a href={`#${row.id}`} className="text-text hover:text-primary">
                    {row.name}
                  </a>
                ) : (
                  <span className="text-text">{row.name}</span>
                )}
                <p className="mt-1 text-xs text-text-muted">{row.description}</p>
              </td>
              <td className="py-3 pr-4 align-top font-mono text-xs text-text-muted">
                {row.path}
              </td>
              <td className="py-3 align-top text-text-muted">
                {row.usedOn ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComponentsPage() {
  const featured = getFeaturedWorkCards(3);
  const [sampleWorkCard] = featured;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
        <CatalogNav sections={[...DEMO_SECTIONS]} />

        <div>
          <ScrollReveal
            as="header"
            className="max-w-3xl scroll-mt-24"
            revealOnScroll={false}
          >
            <span className="eyebrow">UI catalog</span>
            <h1 className="mt-4 text-heading-4xl md:text-heading-5xl">
              Components
            </h1>
            <p className="mt-4 font-body text-lg font-light text-text-muted">
              Every reusable piece in this repo — primitives, cards, motion
              wrappers, and page sections. Live demos below; the inventory table
              links to routes and source paths across the whole project.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link className="btn btn-primary" href="/">
                Home
              </Link>
              <Link className="btn btn-outline" href="/tokens">
                Design tokens
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-10">
            <SectionShell
              id="inventory"
              title="Component inventory"
              filePath="app/components/catalog.ts"
            >
              <div className="grid gap-10">
                {CATALOG_CATEGORIES.map(({ key, label }) => (
                  <section key={key}>
                    <h3 className="text-heading-xl text-text">{label}</h3>
                    <div className="mt-4">
                      <InventoryTable category={key} />
                    </div>
                  </section>
                ))}
              </div>
            </SectionShell>

            <SectionShell
              id="typography"
              title="Typography"
              filePath="app/globals.css · src/styles/theme.css"
            >
              <div className="grid gap-8">
                <p className="font-body text-text-muted">
                  <span className="font-mono text-text">font-heading</span>{" "}
                  (Fraunces) applies to headings and{" "}
                  <span className="font-mono text-text">text-heading-*</span>{" "}
                  utilities.{" "}
                  <span className="font-mono text-text">font-body</span> (DM
                  Sans) is the default for everything else. Mono labels use{" "}
                  <span className="font-mono text-text">font-mono</span> (Syne).
                </p>
                <div className="grid gap-4 border border-border-subtle bg-bg p-6">
                  <p className="text-heading-5xl">Heading 5xl</p>
                  <p className="text-heading-4xl">Heading 4xl</p>
                  <p className="text-heading-3xl">Heading 3xl</p>
                  <p className="text-heading-2xl">Heading 2xl</p>
                  <p className="text-heading-xl">Heading xl</p>
                  <p className="font-body text-lg text-text-muted">
                    Body lg — light weight for intros and descriptions.
                  </p>
                  <p className="font-body text-base text-text">
                    Body base — default paragraph size.
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-subtle">
                    Mono xs — eyebrows and stamps
                  </p>
                </div>
              </div>
            </SectionShell>

            <SectionShell
              id="utilities"
              title="CSS utilities (@utility)"
              filePath="app/globals.css"
            >
              <div className="grid gap-10">
                <section>
                  <h3 className="text-heading-xl text-text">Buttons</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-gold">
                      Gold
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-outline">
                      Outline
                    </button>
                    <button type="button" className="btn btn-ghost">
                      Ghost
                    </button>
                    <button type="button" className="btn-text">
                      Text <span aria-hidden>›</span>
                    </button>
                  </div>
                </section>

                <section>
                  <h3 className="text-heading-xl text-text">Card & panel</h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="card p-6">
                      <p className="font-body text-text">
                        Card — surface, border, hover shadow.
                      </p>
                    </div>
                    <div className="panel rounded-none border border-border-subtle p-6">
                      <p className="font-body text-text">
                        Panel — page-background fill for nested blocks.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-heading-xl text-text">Input</h3>
                  <div className="mt-4 grid max-w-md gap-4">
                    <input className="input" placeholder="Input utility" />
                    <textarea
                      className="input resize-y"
                      rows={3}
                      placeholder="Textarea utility"
                    />
                  </div>
                </section>

                <section>
                  <h3 className="text-heading-xl text-text">Badges</h3>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Badge tone="primary">Primary</Badge>
                    <Badge tone="secondary">Secondary</Badge>
                    <Badge tone="tertiary">Tertiary</Badge>
                  </div>
                </section>

                <section>
                  <h3 className="text-heading-xl text-text">
                    Section label · divider · eyebrow · clamp-2
                  </h3>
                  <div className="mt-4 max-w-xl grid gap-6">
                    <div>
                      <span className="section-label">Section label</span>
                      <hr className="divider" />
                    </div>
                    <div>
                      <span className="eyebrow">Eyebrow / kicker</span>
                      <p className="font-body text-text">
                        Leading accent dash via{" "}
                        <span className="font-mono text-xs">::before</span>.
                      </p>
                    </div>
                    <p className="clamp-2 max-w-md text-sm text-text-muted">
                      Clamp-2 truncates long copy to two lines — useful on card
                      descriptions and list previews without fixed heights.
                    </p>
                  </div>
                </section>
              </div>
            </SectionShell>

            <SectionShell
              id="hover-ripple"
              title="HoverRipple"
              filePath="src/components/ui/HoverRipple.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Concentric rings on hover and click. Powers nav rows in{" "}
                <span className="font-mono text-text">NavOverlay</span> with a
                shorter duration constant.
              </p>
              <HoverRippleDemo />
            </SectionShell>

            <SectionShell
              id="nav-ripple-link"
              title="NavRippleLink"
              filePath="src/components/ui/NavRippleLink.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Link wrapper composing{" "}
                <span className="font-mono text-text">useHoverRipple</span> and{" "}
                <span className="font-mono text-text">HoverRippleLayer</span>.
              </p>
              <NavRippleLinkDemo />
            </SectionShell>

            <SectionShell
              id="filter-bar"
              title="FilterBar"
              filePath="src/components/ui/FilterBar.tsx · src/styles/filter-bar.css"
            >
              <p className="mb-6 font-body text-text-muted">
                Sticky filter strip on Work and Play. Active tab gets a gold
                underline; count updates on the right.
              </p>
              <FilterBarDemo />
            </SectionShell>

            <SectionShell
              id="tab-bar"
              title="TabBar"
              filePath="src/components/ui/TabBar.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Accessible tab list with gold active underline. Pairs with{" "}
                <span className="font-mono text-text">tab-bar</span> /{" "}
                <span className="font-mono text-text">tab</span> utilities.
              </p>
              <TabBarDemo />
            </SectionShell>

            <SectionShell
              id="copy-button"
              title="CopyButton"
              filePath="src/components/ui/CopyButton.tsx"
            >
              <div className="flex flex-wrap items-center gap-4 rounded-none border border-border-subtle bg-bg p-5">
                <p className="font-mono text-sm text-text">
                  var(--color-accent)
                </p>
                <CopyButton text="var(--color-accent)" />
              </div>
            </SectionShell>

            <SectionShell
              id="scroll-reveal"
              title="ScrollReveal"
              filePath="src/components/ScrollReveal.tsx · AnimatedSection.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Framer Motion fade + lift on scroll.{" "}
                <span className="font-mono text-text">AnimatedSection</span> is
                a thin alias with optional delay. Respects{" "}
                <span className="font-mono text-text">prefers-reduced-motion</span>.
              </p>
              <div className="rounded-none border border-dashed border-border-subtle p-2">
                <ScrollReveal>
                  <div className="bg-surface p-8 text-center">
                    <p className="font-body text-text">
                      This block animates in on first view.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </SectionShell>

            <SectionShell
              id="snap-section"
              title="SnapSectionReveal"
              filePath="src/components/SnapSectionReveal.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Section-level stagger coordinator. Wrap children in{" "}
                <span className="font-mono text-text">SnapItem</span> for the
                cascade — used on the home hero and featured section.
              </p>
              <SnapSectionRevealDemo />
            </SectionShell>

            <SectionShell
              id="work-card"
              title="WorkCard"
              filePath="src/components/WorkCard.tsx · WorkCardSvg.tsx · src/styles/work-card.css"
            >
              <p className="mb-6 font-body text-text-muted">
                Polaroid project card with tilt, year stamp, and classification.
                Default and featured layouts for mosaic grids.
              </p>
              {sampleWorkCard ? (
                <div className="max-w-xs">
                  <WorkCard project={sampleWorkCard} />
                </div>
              ) : null}
            </SectionShell>

            <SectionShell
              id="project-card"
              title="ProjectCard"
              filePath="src/components/ProjectCard.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Compact card with optional cover, tech badges, and external
                links. Supports overlay interaction when wrapped by a lightbox
                trigger.
              </p>
              <div className="max-w-sm">
                <ProjectCard
                  title="Australia Call"
                  description="A personality quiz that helps newcomers find a travel style suited to them."
                  technologies={["Next.js", "Figma", "Prisma"]}
                  tone="primary"
                  href="/work/quiz-game"
                />
              </div>
            </SectionShell>

            <SectionShell
              id="featured-stagger"
              title="FeaturedProjectStagger"
              filePath="src/components/FeaturedProjectStagger.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Home featured mosaic — first card spans two rows on desktop with
                staggered motion reveals.
              </p>
              <FeaturedProjectStaggerDemo projects={featured} />
            </SectionShell>

            <SectionShell
              id="play-card"
              title="PlayCard"
              filePath="src/components/play/PlayCard.tsx · src/styles/play.css"
            >
              <p className="mb-6 font-body text-text-muted">
                Play index card with medium badge, frame index, and gradient mat.
              </p>
              <PlayCardDemo />
            </SectionShell>

            <SectionShell
              id="site-chrome"
              title="Site chrome"
              filePath="app/layout.tsx · MenuButton · NavOverlay · Footer"
            >
              <div className="grid gap-10">
                <p className="font-body text-text-muted">
                  Fixed header, full-screen{" "}
                  <span className="font-mono text-text">NavOverlay</span>, route{" "}
                  <span className="font-mono text-text">PageTransition</span>,
                  and <span className="font-mono text-text">SmoothScroll</span>{" "}
                  mount globally in the root layout. Use the header menu on any
                  page to preview the overlay.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-3 font-body text-sm font-medium text-text">
                      ThemeToggle
                    </p>
                    <ThemeToggle />
                  </div>
                  <div>
                    <p className="mb-3 font-body text-sm font-medium text-text">
                      MenuButton
                    </p>
                    <MenuButtonDemo />
                  </div>
                </div>

                <div>
                  <p className="mb-3 font-body text-sm font-medium text-text">
                    Footer
                  </p>
                  <div className="overflow-hidden rounded-none border border-border-subtle">
                    <Footer />
                  </div>
                </div>
              </div>
            </SectionShell>

            <SectionShell
              id="contact-form"
              title="ContactForm"
              filePath="src/components/ContactForm.tsx"
            >
              <p className="mb-6 font-body text-text-muted">
                Client form with input utilities and simulated submit feedback.
              </p>
              <ContactForm />
            </SectionShell>

            <SectionShell
              id="tabbed-grid"
              title="TabbedGridSection"
              filePath="src/components/TabbedGridSection.tsx"
            >
              <TabbedGridSectionDemo />
            </SectionShell>

            <SectionShell
              id="about-blocks"
              title="About page blocks"
              filePath="src/components/about/*"
            >
              <div className="grid gap-12">
                <div>
                  <p className="mb-4 font-body text-sm font-medium text-text">
                    AboutBlockHead
                  </p>
                  <AboutBlockHead block={ABOUT_STORY_BLOCK} />
                </div>
                <div>
                  <p className="mb-4 font-body text-sm font-medium text-text">
                    AboutQuote
                  </p>
                  <AboutQuote quote={ABOUT_QUOTE} />
                </div>
                <div>
                  <p className="mb-4 font-body text-sm font-medium text-text">
                    AboutEnd
                  </p>
                  <AboutEnd copy={ABOUT_END_COPY} />
                </div>
              </div>
            </SectionShell>

            <SectionShell
              id="play-end-mark"
              title="PlayEndMark"
              filePath="src/components/play/PlayEndMark.tsx"
            >
              <PlayEndMarkDemo />
            </SectionShell>

            <SectionShell
              id="page-sections"
              title="Full-page sections"
              filePath="src/components/HeroSection.tsx · HomeAboutSection.tsx · case-study/ · gallery/"
            >
              <div className="grid gap-6 font-body text-text-muted">
                <p>
                  These sections are composed for specific routes. Preview them
                  in context rather than isolated demos.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="card p-4">
                    <p className="font-medium text-text">HeroSection</p>
                    <p className="mt-1 text-sm">Home split hero with botanical art.</p>
                    <Link href="/" className="btn-text mt-3">
                      View on home <span aria-hidden>→</span>
                    </Link>
                  </li>
                  <li className="card p-4">
                    <p className="font-medium text-text">HomeAboutSection</p>
                    <p className="mt-1 text-sm">About teaser with portrait and principles.</p>
                    <Link href="/#about" className="btn-text mt-3">
                      View on home <span aria-hidden>→</span>
                    </Link>
                  </li>
                  <li className="card p-4">
                    <p className="font-medium text-text">Major case study</p>
                    <p className="mt-1 text-sm">Hero, chapters, reading bar, artifacts.</p>
                    <Link href="/work/quiz-game" className="btn-text mt-3">
                      Open case study <span aria-hidden>→</span>
                    </Link>
                  </li>
                  <li className="card p-4">
                    <p className="font-medium text-text">AboutView</p>
                    <p className="mt-1 text-sm">Timeline, instruments, story blocks.</p>
                    <Link href="/about" className="btn-text mt-3">
                      Open about <span aria-hidden>→</span>
                    </Link>
                  </li>
                  <li className="card p-4">
                    <p className="font-medium text-text">PlayView</p>
                    <p className="mt-1 text-sm">Hero, medium blocks, canvas viewer.</p>
                    <Link href="/play" className="btn-text mt-3">
                      Open play <span aria-hidden>→</span>
                    </Link>
                  </li>
                  <li className="card p-4">
                    <p className="font-medium text-text">GalleryView</p>
                    <p className="mt-1 text-sm">Filter bar, hero, and image grid.</p>
                    <Link href="/work" className="btn-text mt-3">
                      Open work index <span aria-hidden>→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </SectionShell>
          </div>
        </div>
      </div>
    </main>
  );
}

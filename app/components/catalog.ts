export type CatalogCategory =
  | "foundation"
  | "ui"
  | "chrome"
  | "cards"
  | "motion"
  | "sections"
  | "about"
  | "play"
  | "case-study"
  | "work";

export type CatalogEntry = {
  id: string;
  name: string;
  path: string;
  category: CatalogCategory;
  description: string;
  usedOn?: string;
};

export const CATALOG_CATEGORIES: { key: CatalogCategory; label: string }[] = [
  { key: "foundation", label: "Foundation" },
  { key: "ui", label: "UI primitives" },
  { key: "chrome", label: "Site chrome" },
  { key: "cards", label: "Cards" },
  { key: "motion", label: "Motion" },
  { key: "sections", label: "Page sections" },
  { key: "about", label: "About page" },
  { key: "play", label: "Play page" },
  { key: "case-study", label: "Case studies" },
  { key: "work", label: "Work" },
];

export const COMPONENT_CATALOG: CatalogEntry[] = [
  {
    id: "typography",
    name: "Typography scale",
    path: "app/globals.css · src/styles/theme.css",
    category: "foundation",
    description: "Heading utilities and body/heading font stacks from design tokens.",
  },
  {
    id: "utilities",
    name: "CSS utilities",
    path: "app/globals.css",
    category: "foundation",
    description: "Buttons, card, panel, input, eyebrow, badges, tabs, and layout helpers.",
  },
  {
    id: "badge",
    name: "Badge",
    path: "src/components/ui/Badge.tsx",
    category: "ui",
    description: "Token-driven pill labels with primary, secondary, and tertiary tones.",
  },
  {
    id: "copy-button",
    name: "CopyButton",
    path: "src/components/ui/CopyButton.tsx",
    category: "ui",
    description: "Clipboard copy with success feedback.",
    usedOn: "/tokens",
  },
  {
    id: "filter-bar",
    name: "FilterBar",
    path: "src/components/ui/FilterBar.tsx",
    category: "ui",
    description: "Sticky category filter strip with count.",
    usedOn: "/work · /play",
  },
  {
    id: "tab-bar",
    name: "TabBar",
    path: "src/components/ui/TabBar.tsx",
    category: "ui",
    description: "Accessible tab list with gold active underline.",
    usedOn: "/work · /play",
  },
  {
    id: "hover-ripple",
    name: "HoverRipple",
    path: "src/components/ui/HoverRipple.tsx",
    category: "ui",
    description: "Framer Motion ripple rings on hover and click.",
    usedOn: "NavOverlay",
  },
  {
    id: "nav-ripple-link",
    name: "NavRippleLink",
    path: "src/components/ui/NavRippleLink.tsx",
    category: "ui",
    description: "Link wrapper that composes HoverRipple for nav rows.",
  },
  {
    id: "tabbed-grid",
    name: "TabbedGridSection",
    path: "src/components/ui/TabbedGridSection.tsx",
    category: "ui",
    description: "Reusable tabbed page header + grid shell.",
    usedOn: "/work · /play",
  },
  {
    id: "menu-button",
    name: "MenuButton",
    path: "src/components/chrome/MenuButton.tsx",
    category: "chrome",
    description: "Animated hamburger / close icon tied to NavContext.",
    usedOn: "app/layout.tsx",
  },
  {
    id: "nav-overlay",
    name: "NavOverlay",
    path: "src/components/chrome/NavOverlay.tsx",
    category: "chrome",
    description: "Full-screen nav sheet with staggered links and theme toggle.",
    usedOn: "app/layout.tsx",
  },
  {
    id: "theme-toggle",
    name: "ThemeToggle",
    path: "src/components/chrome/ThemeToggle.tsx",
    category: "chrome",
    description: "Light / dark mode switch persisted to localStorage.",
  },
  {
    id: "footer",
    name: "Footer",
    path: "src/components/chrome/Footer.tsx",
    category: "chrome",
    description: "Site-wide footer bar with name and note.",
    usedOn: "app/layout.tsx",
  },
  {
    id: "page-loader",
    name: "PageLoader",
    path: "src/components/chrome/PageLoader.tsx",
    category: "chrome",
    description: "Initial route-load curtain animation.",
    usedOn: "app/layout.tsx",
  },
  {
    id: "page-transition",
    name: "PageTransition",
    path: "src/components/chrome/PageTransition.tsx",
    category: "chrome",
    description: "Route-level enter / exit fade wrapper.",
    usedOn: "app/layout.tsx",
  },
  {
    id: "smooth-scroll",
    name: "SmoothScroll",
    path: "src/components/chrome/SmoothScroll.tsx",
    category: "chrome",
    description: "Lenis smooth-scroll provider for the document.",
    usedOn: "app/layout.tsx",
  },
  {
    id: "work-card",
    name: "WorkCard",
    path: "src/components/work/WorkCard.tsx",
    category: "cards",
    description: "Polaroid-style project card with tilt and classification stamp.",
    usedOn: "/ · /work",
  },
  {
    id: "play-card",
    name: "PlayCard",
    path: "src/components/play/PlayCard.tsx",
    category: "cards",
    description: "Play index card with medium badge and gradient mat.",
    usedOn: "/play",
  },
  {
    id: "featured-stagger",
    name: "FeaturedProjectStagger",
    path: "src/components/home/FeaturedProjectStagger.tsx",
    category: "cards",
    description: "Home featured mosaic with staggered WorkCard reveals.",
    usedOn: "/",
  },
  {
    id: "scroll-reveal",
    name: "ScrollReveal",
    path: "src/components/motion/ScrollReveal.tsx",
    category: "motion",
    description: "Framer Motion fade + lift on scroll; respects reduced motion.",
  },
  {
    id: "snap-section",
    name: "SnapSectionReveal",
    path: "src/components/motion/SnapSectionReveal.tsx",
    category: "motion",
    description: "Section coordinator with staggered SnapItem children.",
    usedOn: "/",
  },
  {
    id: "hero-section",
    name: "HeroSection",
    path: "src/components/home/HeroSection.tsx",
    category: "sections",
    description: "Home hero split layout with botanical art and CTAs.",
    usedOn: "/",
  },
  {
    id: "home-about",
    name: "HomeAboutSection",
    path: "src/components/home/HomeAboutSection.tsx",
    category: "sections",
    description: "Home about teaser with portrait and principle list.",
    usedOn: "/",
  },
  {
    id: "contact-form",
    name: "ContactForm",
    path: "src/components/home/ContactForm.tsx",
    category: "sections",
    description: "Name / email / message form with submit states.",
  },
  {
    id: "about-block-head",
    name: "AboutBlockHead",
    path: "src/components/about/AboutBlockHead.tsx",
    category: "about",
    description: "Section kicker, title, and info column for about blocks.",
    usedOn: "/about",
  },
  {
    id: "about-quote",
    name: "AboutQuote",
    path: "src/components/about/AboutQuote.tsx",
    category: "about",
    description: "Full-bleed interstitial quote with watermark.",
    usedOn: "/about",
  },
  {
    id: "colophon-view",
    name: "ColophonView",
    path: "src/components/about/ColophonView.tsx",
    category: "about",
    description: "About-this-site page: brief, inventory, pipelines, and layer bands.",
    usedOn: "/colophon",
  },
  {
    id: "colophon-specimen",
    name: "ColophonSpecimen",
    path: "src/components/about/ColophonSpecimen.tsx",
    category: "about",
    description: "Live token colour plate for the colophon brief, laid out like the about portrait.",
    usedOn: "/colophon",
  },
  {
    id: "page-end-section",
    name: "PageEndSection",
    path: "src/components/ui/PageEndSection.tsx",
    category: "sections",
    description: "Shared end-of-page CTA with kicker, title, and actions.",
    usedOn: "/play, /work, /about, /colophon",
  },
  {
    id: "major-hero",
    name: "MajorCaseStudyHero",
    path: "src/components/case-study/major/MajorCaseStudyHero.tsx",
    category: "case-study",
    description: "Split editorial hero with image overlay when a cover is present; full-bleed overlay when it is not.",
    usedOn: "/work/[slug]",
  },
  {
    id: "major-section",
    name: "MajorCaseStudySection",
    path: "src/components/case-study/major/MajorCaseStudySection.tsx",
    category: "case-study",
    description: "Numbered chapter section with optional artifacts.",
    usedOn: "/work/[slug]",
  },
  {
    id: "case-renderer",
    name: "CaseStudyRenderer",
    path: "src/components/case-study/CaseStudyRenderer.tsx",
    category: "case-study",
    description: "Routes major vs minor case study layouts.",
    usedOn: "/work/[slug]",
  },
  {
    id: "case-skeleton",
    name: "CaseStudySkeleton",
    path: "src/components/case-study/CaseStudySkeleton.tsx",
    category: "case-study",
    description: "Layout-matched skeleton shown while case study images preload.",
    usedOn: "/work/[slug]",
  },
  {
    id: "work-hero",
    name: "WorkHero",
    path: "src/components/work/WorkHero.tsx",
    category: "work",
    description: "Work page hero with botanical accent.",
    usedOn: "/work · /about · /play · /colophon",
  },
  {
    id: "work-grid",
    name: "WorkGrid",
    path: "src/components/work/WorkGrid.tsx",
    category: "work",
    description: "Responsive archive grid for work entries.",
    usedOn: "/work",
  },
];

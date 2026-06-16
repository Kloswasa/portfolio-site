import type { Metadata } from "next";
import { DM_Sans, Fraunces, Syne } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavProvider } from "@/src/context/NavContext";
import { MenuButton } from "@/src/components/MenuButton";
import { NavOverlay } from "@/src/components/NavOverlay";
import { PageLoader } from "@/src/components/PageLoader";
import { PageTransition } from "@/src/components/PageTransition";
import { SmoothScroll } from "@/src/components/SmoothScroll";
import { Footer } from "@/src/components/Footer";
import { siteConfig } from "@/src/lib/config";


const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const monoFont = Syne({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.site.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.site.description,
  metadataBase: siteConfig.site.url ? new URL(siteConfig.site.url) : undefined,
};

function ThemeScript() {
  const code = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  } catch {}
})();`.trim();

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} scroll-pt-16`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh bg-bg text-text antialiased">
        <SmoothScroll>
        <NavProvider>
          <header className="fixed inset-x-0 top-0 z-[400] flex h-16 items-center justify-between border-b border-border-subtle bg-bg/85 px-8 backdrop-blur-md pointer-events-none">
            <Link
              href="/"
              className="pointer-events-auto text-sm font-semibold uppercase tracking-[0.12em] text-text"
            >
              {siteConfig.name}
            </Link>
            <div className="pointer-events-auto flex items-center gap-3">
              
              <MenuButton />
            </div>
          </header>

          <NavOverlay />
          <PageLoader />

          <div className="pt-16">
            <PageTransition>{children}</PageTransition>
          </div>

          <Footer />
        </NavProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}


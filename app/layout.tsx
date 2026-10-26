import type { Metadata } from "next";
import { Fraunces, Asul  , Lato } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavProvider } from "@/src/context/NavContext";
import { MenuButton } from "@/src/components/chrome/MenuButton";
import { NavOverlay } from "@/src/components/chrome/NavOverlay";
import { ThemeToggle } from "@/src/components/chrome/ThemeToggle";
import { PageLoader } from "@/src/components/chrome/PageLoader";
import { PageTransition } from "@/src/components/chrome/PageTransition";
import { SmoothScroll } from "@/src/components/chrome/SmoothScroll";
import { Footer } from "@/src/components/chrome/Footer";
import { siteConfig } from "@/src/lib/config";


const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const bodyFont = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["100","300", "400", "700","900"],
  style: ["normal", "italic"],
});

const monoFont = Asul({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
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
    const root = document.documentElement;
    if (stored === "light") root.classList.remove("dark");
    else root.classList.add("dark");
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
              className="pointer-events-auto font-heading text-base font-semibold uppercase tracking-label-lg text-text"
            >
              {siteConfig.name}
            </Link>
            <div className="pointer-events-auto flex items-center gap-3">
              <ThemeToggle />
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


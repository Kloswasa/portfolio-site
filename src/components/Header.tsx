import Link from "next/link";
import ThemeToggle from "@/src/components/ThemeToggle";
import NavRippleLink from "@/src/components/ui/NavRippleLink";
import { siteConfig } from "@/src/lib/config";

export default function Header() {
  return (
    <header className="nav">  
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-heading-xl text-text transition-colors hover:text-primary"
          >
            {siteConfig.name}
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex items-baseline gap-1">
              <NavRippleLink href="/work">Work</NavRippleLink>
              <NavRippleLink href="/play">Play</NavRippleLink>
              <NavRippleLink href="/about">About</NavRippleLink>
              <NavRippleLink href="/tokens">Design Tokens</NavRippleLink>
              <NavRippleLink href="/components">Components</NavRippleLink>
            </nav>
            <ThemeToggle />
          </div>

          <button
            className="p-2 text-text-muted transition-colors hover:text-text md:hidden"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

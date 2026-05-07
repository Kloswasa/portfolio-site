import Link from "next/link";
import ThemeToggle from "@/src/components/ThemeToggle";

export default function Header() {
  return (
    <header className="nav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-heading-xl text-text transition-colors hover:text-primary"
          >
            Your Name
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex items-baseline gap-1">
              <Link
                href="/work"
                className="nav-ripple px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                Work
              </Link>
              <Link
                href="/play"
                className="nav-ripple px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                Play
              </Link>
              <Link
                href="/about"
                className="nav-ripple px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                About
              </Link>
              <Link
                href="/tokens"
                className="nav-ripple px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                Design Tokens
              </Link>
              <Link
                href="/components"
                className="nav-ripple px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                Components
              </Link>
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

'use client';

import * as React from "react";
import { usePathname } from "next/navigation";

interface NavContextValue {
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
}

const NavContext = React.createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const pathname = usePathname();
  const hasMounted = React.useRef(false);

  // Auto-clear loading when navigation completes (pathname changes).
  // Delay 600 ms so the loader stays up long enough to cover the page-transition
  // exit+enter animations (300 ms + 500 ms) before it fades away.
  React.useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    const t = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(t);
  }, [pathname]);

  const value = React.useMemo(
    () => ({ navOpen, loading, setNavOpen, setLoading }),
    [navOpen, loading],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav(): NavContextValue {
  const ctx = React.useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used inside NavProvider");
  return ctx;
}


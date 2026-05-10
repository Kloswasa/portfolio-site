'use client';

import * as React from "react";

interface NavContextValue {
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
}

const NavContext = React.createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = React.useState(false);

  const value = React.useMemo(() => ({ navOpen, setNavOpen }), [navOpen]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav(): NavContextValue {
  const ctx = React.useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used inside NavProvider");
  return ctx;
}


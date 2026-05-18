'use client';

import * as React from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisOptions } from 'lenis';

/** Slightly lower lerp = longer ease-out (more “coast” / inertia). */
const lenisOptions: LenisOptions = {
  lerp: 0.056,
  smoothWheel: true,
  syncTouch: true,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  autoRaf: true,
  stopInertiaOnNavigate: true,
};

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [allowSmooth, setAllowSmooth] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAllowSmooth(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  if (!allowSmooth) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

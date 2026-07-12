'use client';

import * as React from 'react';
import Link from 'next/link';
import { HoverRippleLayer, useHoverRipple } from './HoverRipple';

type NavRippleLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavRippleLink({
  href,
  children,
  className = '',
}: NavRippleLinkProps) {
  const { onMouseEnter, onClick, ripples, duration, startOpacity } =
    useHoverRipple<HTMLAnchorElement>();

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`relative inline-flex items-center overflow-hidden px-3 py-2 text-sm text-text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${className}`}
    >
      <HoverRippleLayer
        ripples={ripples}
        duration={duration}
        startOpacity={startOpacity}
      />
      <span className="relative">{children}</span>
    </Link>
  );
}

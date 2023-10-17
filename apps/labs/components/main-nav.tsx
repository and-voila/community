'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@ui/lib/utils';

import { MainNavItem } from 'types';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = () => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('click', closeMobileMenuOnClickOutside);

    return () => {
      document.removeEventListener('click', closeMobileMenuOnClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-display uppercase text-xl sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex" aria-label="Main navigation">
          {items?.map((item) => (
            <Link
              key={item.id}
              href={item.disabled ? '#' : item.href}
              aria-label={`Navigate to ${item.title}`}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-base',
                item.href.startsWith(`/${segment}`)
                  ? 'text-alternate underline underline-offset-4'
                  : 'text-muted-foreground',
                item.disabled && 'cursor-not-allowed opacity-80',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {showMobileMenu ? (
          <Icons.close className="text-brand" />
        ) : (
          <Icons.logo />
        )}
        <span className="font-bold uppercase">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}

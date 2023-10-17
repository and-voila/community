import * as React from 'react';
import Link from 'next/link';
import { cn } from '@ui/lib/utils';

import { MainNavItem } from 'types';
import { siteConfig } from '@/config/site';
import { useLockBody } from '@/hooks/use-lock-body';

import { Icons } from './icons';

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden',
      )}
    >
      <div className="relative z-20 grid gap-6 bg-primary-foreground p-4 text-popover-foreground shadow-md border-b-8 border-alternate">
        <Link
          href="/"
          className="flex space-x-2 items-center"
          aria-label="Logo for And Voila"
        >
          <Icons.logo />
          <span className="font-display uppercase text-xl">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.disabled ? '#' : item.href}
              aria-label={`Navigate to ${item.title}`}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-lg font-medium hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}

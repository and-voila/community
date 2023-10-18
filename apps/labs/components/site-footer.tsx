import * as React from 'react';
import Link from 'next/link';

import { footerConfig } from '@/config/footer';
import { socialConfig } from '@/config/social';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerConfig.footerNav.map((item) => (
            <div key={item.id} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socialConfig.social.map((item) => {
            const IconComponent = Icons[item.icon];
            return (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="no-opener no-referrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <IconComponent className="h-6 w-6" aria-hidden="true" />{' '}
              </Link>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
        <ModeToggle />
      </div>
    </footer>
  );
}

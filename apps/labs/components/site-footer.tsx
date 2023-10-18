import * as React from 'react';
import Link from 'next/link';

import { footerConfig } from '@/config/footer';
import { siteConfig } from '@/config/site';
import { socialConfig } from '@/config/social';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';

import { Logo, Logomark } from './logo-square';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const copyrightName = siteConfig.company || siteConfig.name || '';

  return (
    <footer className={cn(className)}>
      <div className="mx-auto overflow-hidden px-6 py-8 sm:pt-24 lg:px-8 border-t border-brand/70">
        <div className="flex justify-center mb-10" aria-label="Company Logo">
          <Logomark className="h-12 sm:hidden" aria-label="Logo Icon" />
          <Logo
            className="hidden h-12 sm:block"
            fillOnHover
            aria-label="Logo Text"
          />
        </div>
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerConfig.footerNav.map((item) => (
            <div key={item.id} className="pb-6">
              <Link
                href={item.href}
                aria-label={`Navigate to ${item.title} page.`}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground/80 md:text-lg"
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
                aria-label={`Navigate to our ${item.name} profile.`}
                href={item.href}
                target="_blank"
                rel="no-opener no-referrer"
                className="text-muted-foreground transition-colors hover:text-alternate sm:text-base"
              >
                <span className="sr-only">{item.name}</span>
                <IconComponent className="h-6 w-6" aria-hidden="true" />{' '}
              </Link>
            );
          })}
        </div>
        <div className="mt-8 md:mt-16 mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0 text-sm text-muted-foreground">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.')
              ? '.'
              : ''}{' '}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-brand md:inline-block" />
          <p>
            Forked in California by{' '}
            <Link
              href="https://bril.la"
              target="_blank"
              rel="noopener"
              className="font-medium text-brand transition-colors hover:text-foreground/80"
            >
              {' '}
              BRIL.LA
            </Link>
          </p>
          <p />
          <p className="mr-4 md:ml-auto">
            Mad props to{' '}
            <Link
              href="https://github.com/shadcn-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand transition-colors hover:text-foreground/80"
            >
              shadcn-ui
            </Link>
          </p>
          <div className="my-4 md:my-0">
            <ModeToggle aria-label="Switch between light and dark mode" />
          </div>
        </div>
      </div>
    </footer>
  );
}

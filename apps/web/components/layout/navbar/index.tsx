import { Suspense } from 'react';
import Link from 'next/link';
import { Logo, Logomark } from 'ui';

import { getMenu } from '@/lib/shopify';
import { Menu } from '@/lib/shopify/types';
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import { Icons } from '@/components/icons';
import MobileMenu from '@/components/layout/navbar/mobile-menu';
import Search from '@/components/layout/navbar/search';

export default async function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full">
          <Link
            href="/"
            aria-label="Home"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Logomark className="relative h-10 sm:hidden" />
            <Logo
              className="ml-2 hidden h-10 flex-none pb-2 font-display text-lg sm:block md:hidden lg:block"
              fillOnHover
            />
          </Link>
        </div>
        <div className="hidden md:flex md:justify-end md:gap-x-6 pr-6">
          <Link
            href="https://discord.com/servers/and-voila-1151749282806910976"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Navigate to And Voila Discord Community"
          >
            <div className="flex items-center">
              <Icons.discord className="h-6 w-6 text-brand" />
              <span className="ml-2 text-sm text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4 lg:text-base">
                Community
              </span>
            </div>
          </Link>
          <Link
            href="https://labs.andvoila.gg"
            target="_blank"
            aria-label="Navigate to And Voila Labs platform"
          >
            <div className="flex items-center">
              <Icons.magic className="h-6 w-6 text-brand" />
              <span className="ml-2 text-sm leading-6 text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4 lg:text-base">
                Labs
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export async function ShopNavbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            aria-label="Home"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Logomark className="h-10 sm:hidden" />
            <Logo
              className="ml-2 hidden h-10 flex-none pb-2 font-display text-lg sm:block md:hidden lg:block"
              fillOnHover
            />
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-base text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}

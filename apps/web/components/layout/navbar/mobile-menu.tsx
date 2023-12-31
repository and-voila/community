'use client';

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';

import { Icons } from '@/components/icons';

const menu = [
  { name: 'Home', href: '/' },
  {
    name: 'Community',
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
  },
  {
    name: 'Labs',
    href: 'https://labs.andvoila.gg',
  },
  { name: 'Roasts', href: '/roasts' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground transition-colors md:hidden"
      >
        <Icons.hamburger className="h-4 w-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-brand">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-white text-foreground transition-colors dark:border-black"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <Icons.crossLarge className="h-6 w-6 text-white dark:text-black" />
                </button>

                {menu.length ? (
                  <ul className="mt-16 flex w-full flex-col">
                    {menu.map((item) => (
                      <li
                        className="py-2 font-display text-3xl text-white transition hover:text-black dark:text-black dark:hover:text-white"
                        key={item.name}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          aria-label={`Navigate to ${item.name}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li className="py-4 font-display text-3xl text-white transition hover:text-black dark:text-black dark:hover:text-white">
                      <Link
                        href="https://discord.com/servers/and-voila-1151749282806910976"
                        onClick={closeMobileMenu}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Navigate to And Voila Discord server"
                      >
                        <Icons.discord className="h-12 w-12" />
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

import Link from 'next/link';
import { JSX } from 'react';
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  Logo,
  Logomark,
  ModeToggle,
  NotionLogoIcon,
  PlayIcon,
} from 'ui';

const { COMPANY_NAME, SITE_NAME } = process.env;

interface NavigationItem {
  name: string;
  href: string;
  icon?: JSX.Element;
}

interface Navigation {
  solutions: NavigationItem[];
  support: NavigationItem[];
  company: NavigationItem[];
  legal: NavigationItem[];
  social: NavigationItem[];
}

const navigation: Navigation = {
  solutions: [
    { name: 'Community', href: '/' },
    { name: 'Roasts', href: '/roasts' },
    { name: 'Shop', href: '/shop' },
    { name: 'Unlimited', href: '/unlimited' },
  ],
  support: [
    {
      name: 'Discord',
      href: 'https://discord.com/servers/and-voila-1151749282806910976',
    },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Slant', href: '/slant' },
    {
      name: 'Acquire us',
      href: 'mailto:hi@bril.la?subject=I%20want%20to%20buy%20your%20company&body=Hey%20there%2C%0A%0AI%20think%20you%27re%20amazing%20and%20I%20want%20to%20buy%20your%20company%20for%20boat%20loads%20of%20money.%20What%20d%27ya%20say%3F',
    },
  ],
  legal: [
    { name: 'Guarantee', href: '/guarantee' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    {
      name: 'Discord',
      href: 'https://discord.com/servers/and-voila-1151749282806910976',
      icon: <DiscordLogoIcon className="h-5 w-5" aria-hidden="true" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rebekahradice/',
      icon: <LinkedInLogoIcon className="h-5 w-5" aria-hidden="true" />,
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/c/RebekahradiceLLC/videos',
      icon: <PlayIcon className="h-5 w-5" aria-hidden="true" />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/rebekahradice',
      icon: (
        <svg fill="currentColor" height="1em" viewBox="0 0 512 512">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/and-voila',
      icon: <GitHubLogoIcon className="h-5 w-5" aria-hidden="true" />,
    },
    {
      name: 'Notion',
      href: 'https://brilla.notion.site/Launchpad-5d74390176c843a589b04ffaa683ad43?pvs=4',
      icon: <NotionLogoIcon className="h-5 w-5" aria-hidden="true" />,
    },
  ],
};

const Footer: React.FC = async () => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="mt-4 border-t border-brand/50 text-sm text-muted-foreground md:mt-8 md:text-base lg:mt-12">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-8">
            <Link href="/" aria-label="Home">
              <Logomark className="h-16 sm:hidden" />
              <Logo className="hidden h-16 sm:block" fillOnHover />
            </Link>
            <p className="text-base leading-6 text-muted-foreground">
              Helping marketers achieve magical performance.
            </p>
            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition duration-200 hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground lg:text-base">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4 lg:text-base"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground lg:text-base">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4 lg:text-base"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground lg:text-base">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4 lg:text-base"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground lg:text-base">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4 lg:text-base"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-brand/50 py-6 text-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.')
              ? '.'
              : ''}{' '}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-border md:inline-block" />
          <p>
            Designed in California by{' '}
            <Link
              href="https://bril.la"
              target="_blank"
              rel="noopener"
              className="font-medium text-brand hover:underline hover:underline-offset-4"
            >
              {' '}
              BRIL.LA
            </Link>
          </p>
          <p />
          <p className="mr-4 md:ml-auto">
            Powered by{' '}
            <Link
              href="https://vercel.com/brilla"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline hover:underline-offset-4"
            >
              Vercel
            </Link>
          </p>
          <div className="my-4 md:my-0">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

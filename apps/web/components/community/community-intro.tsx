import Link from 'next/link';
import React, { FC } from 'react';
import { ArrowRightIcon, DiscordLogoIcon, RocketIcon, StarIcon } from 'ui';

import { FadeIn } from '@/components/fade-in';
import Highlighter, { HighlighterItem } from '@/components/highlighter';
import SectionIntro from '@/components/section-intro';

interface Reason {
  name: string;
  description: string;
  href: string;
  icon: JSX.Element;
  cta: string;
}

const reasons: Reason[] = [
  {
    name: 'Direct access to experts',
    description:
      'Enjoy personalized Q&A sessions, weekly masterclasses, and one-on-one consultations with industry leaders like Rebekah Radice.',
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
    icon: <StarIcon className="h-8 w-8" />,
    cta: 'Unlock Advice',
  },
  {
    name: 'Tools that get results',
    description:
      "From conversions to cache, our expert marketing mods have you covered. We'll help you get to a whole new level of spectacular.",
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
    icon: <RocketIcon className="h-8 w-8" />,
    cta: 'Boost Results',
  },
  {
    name: 'Join a growing community',
    description:
      'Share insights, celebrate wins, and even find your next opportunity. Connect and grow in a community built from the ground up.',
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
    icon: <DiscordLogoIcon className="h-8 w-8" />,
    cta: 'Start celebrating',
  },
];

const CommunityIntro: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <FadeIn>
        <Highlighter>
          <div className="group">
            <HighlighterItem>
              <FadeIn className="relative z-20 mx-auto overflow-hidden rounded-[inherit] bg-primary-foreground p-6 lg:p-12">
                <SectionIntro
                  eyebrow="Premier Marketing Community"
                  heading="Your path to exceptional results"
                  description="Join the definitive Discord server for marketers, led by Rebekah Radice. Get immediate access to top-tier resources, insights, and most importantly, action."
                />

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {reasons.map((reason) => (
                      <div key={reason.name} className="flex flex-col">
                        <dt className="font-display text-xl text-foreground">
                          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-background p-2 text-brand">
                            {React.cloneElement(reason.icon, {
                              'aria-hidden': 'true',
                            })}
                          </div>
                          {reason.name}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground lg:text-lg">
                          <p className="flex-auto">{reason.description}</p>
                          <div className="mt-6 flex items-center justify-end">
                            <Link
                              href={reason.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Click to ${reason.cta}`}
                              className="group mt-4 flex items-center text-base font-medium text-foreground transition duration-150 ease-in-out hover:text-muted-foreground"
                            >
                              {reason.cta}{' '}
                              <p className="ml-2 text-brand transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 dark:text-brand">
                                <ArrowRightIcon aria-hidden="true" />
                              </p>
                            </Link>
                          </div>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeIn>
            </HighlighterItem>
          </div>
        </Highlighter>
      </FadeIn>
    </section>
  );
};

export default CommunityIntro;

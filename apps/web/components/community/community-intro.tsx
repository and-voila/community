import React, { FC } from 'react';
import Link from 'next/link';
import { FadeIn } from '@ui/index';

import Highlighter, { HighlighterItem } from '@/components/highlighter';
import { Icons } from '@/components/icons';
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
    name: 'Premium Community',
    description:
      'Direct Q&A with experts like Rebekah Radice, weekly insights, and a network purpose built for marketers.',
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
    icon: <Icons.star className="h-8 w-8" />,
    cta: 'Join Now',
  },
  {
    name: 'Expert Playbooks',
    description:
      'Actionable micro-courses that turn marketing professionals into ninjas. Released daily.',
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
    icon: <Icons.rocket className="h-8 w-8" />,
    cta: 'Learn More',
  },
  {
    name: 'AI-Assist Tools',
    description:
      'Apps that make you a better marketer, not replace you. AI-tools dropping soon to elevate your results.',
    href: 'https://discord.com/servers/and-voila-1151749282806910976',
    icon: <Icons.magic className="h-8 w-8" />,
    cta: 'Coming Soon',
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
                  eyebrow="The ultimate digital marketing ecosystem"
                  heading="Digital marketing superpowers"
                  description="More than a community—it's your fast track to marketing ROI. Gain immediate access to curated expertise, Playbooks for instant skill upgrades, and upcoming AI tools that redefine efficiency."
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
                                <Icons.arrowright aria-hidden="true" />
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

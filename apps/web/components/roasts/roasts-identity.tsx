import React, { FC } from 'react';
import Link from 'next/link';
import { FadeIn } from '@ui/index';
import { ArrowRightIcon, BarChartIcon, MagicWandIcon, StarIcon } from 'ui';

import Highlighter, { HighlighterItem } from '@/components/highlighter';
import SectionIntro from '@/components/section-intro';

interface Feature {
  name: string;
  description: string;
  href: string;
  icon: JSX.Element;
  cta: string;
}

const features: Feature[] = [
  {
    name: 'Be the Trendsetter',
    description:
      'Set the pace in your industry with campaigns that not only resonate but also lead the conversation. Because followers never make history.',
    href: '/shop',
    icon: <BarChartIcon className="h-8 w-8" />,
    cta: 'Start trending',
  },
  {
    name: 'Master of Strategy',
    description:
      'Move beyond tactical execution to strategic brilliance. With our insights, you’ll be the mastermind behind every successful campaign.',
    href: '/shop',
    icon: <MagicWandIcon className="h-8 w-8" />,
    cta: 'Begin planning',
  },
  {
    name: 'The Influencer',
    description:
      'Convert your insights into actions that influence behavior. Be the change agent, not just another cog in the wheel.',
    href: '/shop',
    icon: <StarIcon className="h-8 w-8" />,
    cta: 'Get converting',
  },
];

const LandingIdentity: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <FadeIn>
        <Highlighter>
          <div className="group">
            <HighlighterItem>
              <FadeIn className="relative z-20 mx-auto overflow-hidden rounded-[inherit] bg-primary-foreground p-6 lg:p-12">
                <SectionIntro
                  eyebrow="Be unforgettable"
                  heading="Forge your legacy"
                  description="Turn every campaign into your magnum opus. Be the pro who sets the bar high, commands respect, and leaves a lasting impact."
                />
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                      <div key={feature.name} className="flex flex-col">
                        <dt className="font-display text-xl text-foreground">
                          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-background p-2 text-brand">
                            {React.cloneElement(feature.icon, {
                              'aria-hidden': 'true',
                            })}
                          </div>
                          {feature.name}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground lg:text-lg">
                          <p className="flex-auto">{feature.description}</p>
                          <div className="mt-6 flex items-center justify-end">
                            <Link
                              href={feature.href}
                              aria-label={`Click to ${feature.cta}`}
                              className="group mt-4 flex items-center text-base font-medium text-foreground transition duration-150 ease-in-out hover:text-muted-foreground"
                            >
                              {feature.cta}{' '}
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

export default LandingIdentity;

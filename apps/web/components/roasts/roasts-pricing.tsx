import Link from 'next/link';
import { FadeIn, GradientHeading } from '@ui/index';
import { Button, CheckIcon } from 'ui';

interface Tier {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  featured: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Spark',
    id: 'tier-spark',
    href: '#',
    priceMonthly: '$1,995',
    description:
      "Ignite your marketing dreams into reality. Spark isn't just tactical; it's your first step toward endless possibilities.",
    features: [
      'One request at a time',
      '2 business day turnaround',
      'As many brands as you can bring',
      'Bring the whole team',
      'Access to premium assets',
      'Convenient credit card payments',
      'Pause or cancel anytime',
      '100% Delight guaranteed',
    ],
    featured: false,
  },
  {
    name: 'Blaze',
    id: 'tier-blaze',
    href: '#',
    priceMonthly: '$3,995',
    description:
      'Transform your marketing game with Blaze. A dedicated team that brings strategy, execution, and limitless possibilities to your doorstep.',
    features: [
      'Skip the line with priority queue',
      'Two requests at a time',
      '2 business day turnaround',
      'As many brands as you can bring',
      'Bring the whole team',
      'Access to premium assets',
      'Convenient credit card payments',
      'Pause or cancel anytime',
      '100% Delight guaranteed',
    ],
    featured: true,
  },
];

function classNames(...classes: (string | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function LandingPricing() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider  text-brand dark:text-brand">
          Membership levels
        </p>
        <GradientHeading level="h2">Dazzle on demand</GradientHeading>
        <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
          When you need marketing firepower but don&apos;t want the hassle of
          hiring an in-house team, we&apos;ve got you covered. Get an
          award-winning, full-stack digital marketing team without the long-term
          commitment. From quick fixes to full campaigns, we&apos;re your
          plug-and-play marketing department.
        </p>
      </FadeIn>
      <FadeIn className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative scale-110 bg-primary-foreground shadow-2xl'
                : 'border bg-background sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className="text-base font-semibold leading-7 text-brand"
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-foreground' : 'text-muted-foreground',
                  'font-display text-5xl tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? 'text-foreground' : 'text-muted-foreground',
                  'text-base',
                )}
              >
                /month
              </span>
            </p>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 sm:mt-10">
              <Link href={tier.href} aria-describedby={tier.id}>
                <Button
                  variant={tier.featured ? 'custom' : 'outline'}
                  aria-describedby={tier.id}
                  className="w-full"
                >
                  Get started today
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </FadeIn>
    </div>
  );
}

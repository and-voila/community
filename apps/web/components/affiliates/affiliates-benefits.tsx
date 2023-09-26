import { FC, ReactElement } from 'react';
import {
  BarChartIcon,
  HeartIcon,
  MagicWandIcon,
  QuestionMarkCircledIcon,
  RulerSquareIcon,
  SunIcon,
} from 'ui';

import { FadeIn, FadeInStagger } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';

const benefits = [
  {
    name: 'Elevate Earnings',
    description:
      'Take your earnings to the next level with our generous commission tiers. The more you refer, the more you earn.',
    icon: BarChartIcon,
  },
  {
    name: 'Glowing Growth',
    description:
      'Get access to premium resources that enhance your marketing skills. Turn your strategies from lukewarm to sizzling.',
    icon: SunIcon,
  },
  {
    name: 'Blazing Support',
    description:
      'From our expert team to our vibrant community, get the support you need to fan the flames of your affiliate efforts.',
    icon: QuestionMarkCircledIcon,
  },
  {
    name: 'Perpetual Payouts',
    description:
      'Enjoy a 40% lifetime commission on all referrals. Your earnings keep growing, even when you’re not looking.',
    icon: MagicWandIcon,
  },
  {
    name: 'Hot Tools',
    description:
      'Utilize cutting-edge affiliate tools designed for optimum performance. Make each campaign a roaring success.',
    icon: RulerSquareIcon,
  },
  {
    name: 'Total Transparency',
    description:
      'Keep track of your success with real-time analytics. No smoke and mirrors, just clear, actionable data.',
    icon: HeartIcon,
  },
];

const AffiliatesBenefits: FC = (): ReactElement => {
  return (
    <section className="mx-auto mt-32 max-w-7xl sm:mt-40">
      <FadeInStagger className="max-w-4xl lg:mx-0">
        <FadeIn>
          <p className="font-display text-sm font-medium uppercase tracking-widest text-brand">
            All about you
          </p>
        </FadeIn>
        <FadeIn>
          <GradientHeading level="h2">Program benefits</GradientHeading>
        </FadeIn>
        <FadeIn>
          <p className="mt-6 text-lg text-muted-foreground">
            As part of our affiliate program, we offer a range of benefits
            designed to help you succeed. Here&apos;s what you can expect:
          </p>
        </FadeIn>
      </FadeInStagger>
      <FadeInStagger className="mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-muted-foreground sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        {benefits.map((benefit) => (
          <FadeIn key={benefit.name} className="relative pl-9">
            <dt className="inline font-semibold text-foreground lg:text-lg">
              <benefit.icon
                className="absolute left-1 top-2 h-5 w-5 text-brand"
                aria-hidden="true"
              />
              {benefit.name}
            </dt>{' '}
            <dd className="inline lg:text-lg">{benefit.description}</dd>
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  );
};

export default AffiliatesBenefits;

import { FC, ReactElement } from 'react';

import { FadeIn, FadeInStagger } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';

const stats = [
  { label: 'Commission on first signup', value: '50%' },
  { label: 'Lifetime earnings', value: '40%' },
  { label: 'Cookie lifetime', value: '120D' },
  { label: 'Automated payouts', value: '30D' },
];

const AffiliatesContent: FC = (): ReactElement => {
  return (
    <section className="mx-auto mt-14 py-1 sm:py-32 md:mt-0">
      <div className="max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid max-w-xl grid-cols-1 gap-8 text-base text-muted-foreground lg:max-w-none lg:grid-cols-2">
          <FadeInStagger>
            <FadeIn>
              <GradientHeading level="h4" as="h2">
                Killer commissions
              </GradientHeading>
            </FadeIn>
            <FadeIn>
              <p className="mt-6 text-base lg:text-lg">
                Are you a digital marketer, entrepreneur, or creator looking to
                fire up your revenue? Join the brand that&apos;s blazing a trail
                in digital marketing. If you&apos;re passionate about helping
                businesses sizzle with explosive growth, the RoastMy.xyz
                affiliate program is for you.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="mt-8 text-base lg:text-lg">
                We fuel startups to established brands, giving them the spark to
                capture more customers and skyrocket their profits with our
                targeted roasts. With RoastMy.xyz, you&apos;re not just
                referring a service, you&apos;re introducing them to a team of
                seasoned experts ready to fan the flames of success.
              </p>
            </FadeIn>
          </FadeInStagger>
          <FadeInStagger>
            <FadeIn>
              <GradientHeading level="h4" as="h2">
                Refer and earn
              </GradientHeading>
            </FadeIn>
            <FadeIn>
              <p className="mt-6 text-base lg:text-lg">
                Your bank account is about to bask in a warm glow, starting with
                a hefty 50% commission on your first referral. The benefits
                don&apos;t end there. Continue sending hot leads our way and
                watch your commission soar. It&apos;s the partnership that keeps
                on rewarding!
              </p>
            </FadeIn>
            <FadeIn>
              <ul className="mt-8 list-inside list-disc text-base lg:text-lg">
                <li>Up to 40% recurring commission</li>
                <li>Tiered payouts</li>
                <li>120-day cookie window</li>
              </ul>
            </FadeIn>
          </FadeInStagger>
        </div>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
          {stats.map((stat, statIdx) => (
            <FadeIn
              key={statIdx}
              className="flex flex-col-reverse gap-y-3 border-l pl-6"
            >
              <dt className="text-base leading-7 text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="font-display text-5xl text-brand">{stat.value}</dd>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};

export default AffiliatesContent;

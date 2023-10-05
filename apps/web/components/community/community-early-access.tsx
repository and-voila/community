import { FadeIn, FadeInStagger } from '@ui/index';
import { FC } from 'react';
import { PlusIcon } from 'ui';

import SectionIntro from '@/components/section-intro';

interface Feature {
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    name: 'Get early access',
    description:
      'Earn exclusive benefits from the get-go—first dibs on new features, members-only masterclasses, and a touch of behind-the-scenes hilarity.',
  },
  {
    name: 'Founding membership',
    description:
      'Join the first 500 members and carve your path in a community focused on solving your marketing puzzles.',
  },
  {
    name: 'Fixed membership rate',
    description:
      "Take advantage of our $7.99/month early-bird rate, protected from future price increases. It's your lifetime ticket to unmatched value.",
  },
  {
    name: 'Unique Discord perks',
    description:
      "Stand out with special badges and roles on our Discord server. It's your VIP pass to digital recognition.",
  },
  {
    name: 'Insider influence',
    description:
      "Your ideas and feedback aren't just welcome—they'll help define the future of AndVoila.gg.",
  },
  {
    name: 'First-to-know privileges',
    description:
      'Stay ahead of the curve with exclusive invites to launch events and masterclasses.',
  },
  {
    name: 'Backstage glimpses',
    description:
      "Get an unfiltered look at our journey, bumps and all. We make all the mistakes so you don't have to.",
  },
  {
    name: 'Influence our growth',
    description:
      'Your insights will directly shape our evolving feature set and community offerings.',
  },
  {
    name: 'Beta access',
    description:
      'Be the first to test new tools and features before they hit the mainstream. Your feedback will refine our innovations.',
  },
  {
    name: 'Resource advantage',
    description:
      'Kick off your journey with a hand-picked selection of premium marketing resources. Get a leg up, the magical way.',
  },
];

const CommunityEarlyAccess: FC = () => {
  return (
    <div className="mx-auto py-24 sm:py-32">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <SectionIntro
          eyebrow="Exclusive Benefits"
          heading="Get early access"
          level="h4"
          as="h2"
          description="Earn exclusive benefits from the get-go—first dibs on new features, members-only masterclasses, and a touch of behind-the-scenes hilarity."
        />
        <FadeInStagger className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base text-muted-foreground sm:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <div className="font-display text-lg text-foreground lg:text-xl">
                <PlusIcon
                  className="absolute left-0 top-1 h-5 w-5 text-brand/70"
                  aria-hidden="true"
                />
                {feature.name}
              </div>
              <div className="mt-2 lg:text-lg">{feature.description}</div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
};

export default CommunityEarlyAccess;

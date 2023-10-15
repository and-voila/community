import { FC } from 'react';
import { FadeIn, FadeInStagger, GradientHeading } from '@ui/index';
import {
  Crosshair2Icon,
  HeartIcon,
  LightningBoltIcon,
  RocketIcon,
  RulerSquareIcon,
  TimerIcon,
} from 'ui';

const LandingProgress: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <GradientHeading level="h4" as="h2">
          Up your game
        </GradientHeading>
        <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <FadeInStagger key={feature.name}>
              <FadeIn className="rounded-xl bg-primary-foreground p-6">
                <div
                  id={`term-${index}`}
                  className="font-display text-lg text-foreground lg:text-xl"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                    <feature.icon
                      className="h-6 w-6 text-brand"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </div>
                <div
                  id={`desc-${index}`}
                  className="mt-4 max-w-xs text-base text-muted-foreground lg:text-lg"
                  aria-labelledby={`term-${index}`}
                >
                  {feature.description}
                </div>
              </FadeIn>
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingProgress;

const features = [
  {
    name: 'Next-Level Growth',
    description:
      'Advance your skills and business through meaningful interactions and curated content. Take your game to the next level.',
    icon: RocketIcon,
  },
  {
    name: 'Real Talk',
    description:
      'Gain access to unfiltered feedback from pros who’ve been in the trenches. No sugar-coating—just the truth you need to excel.',
    icon: Crosshair2Icon,
  },
  {
    name: 'Fast & Easy',
    description:
      'Achieve your marketing goals with our straightforward, no-nonsense approach. No fluff, no jargon—just actionable insights.',
    icon: TimerIcon,
  },
  {
    name: 'Your Blueprint',
    description:
      'Receive a personalized roadmap tailored to your specific needs. Implement our feedback and watch your marketing transform.',
    icon: RulerSquareIcon,
  },
  {
    name: 'Instant Networking',
    description:
      'Break the ice with marketing pros who’ve been in your shoes and can guide you to success.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Community Support',
    description:
      'Stuck with a challenge? Post it in the community and get multiple perspectives to solve it.',
    icon: HeartIcon,
  },
];

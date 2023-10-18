import { FC } from 'react';
import Image from 'next/image';
import { FadeIn, FadeInStagger } from '@ui/index';
import { CheckIcon } from 'ui';

import SectionIntro from '@/components/section-intro';

const LandingCommunity: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <SectionIntro
        eyebrow="Fire Up Your Network"
        heading="Hot connections"
        description="Every roast comes with a 90 day membership to our premium Discord community. You'll get instant access to a network of digital marketers who can help you succeed."
      />
      <FadeIn className="relative overflow-hidden pt-16">
        <Image
          src="/images/shared/community.jpg"
          alt="A screenshot of the Sizzle Squad community Discord welcome screen, established by Rebekah Radice."
          className="mb-[-12%] rounded-xl shadow-2xl md:grayscale md:hover:grayscale-0"
          width={2432}
          height={1442}
        />
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
        </div>
      </FadeIn>
      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeInStagger className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <div className="inline font-display text-base text-foreground lg:text-lg">
                <CheckIcon
                  className="absolute left-1 top-1 h-5 w-5 text-brand"
                  aria-hidden="true"
                />
                {feature.name}
              </div>{' '}
              <div className="inline text-base text-muted-foreground lg:text-lg">
                {feature.description}
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};

export default LandingCommunity;

type Feature = {
  name: string;
  description: string;
};

const features: Feature[] = [
  {
    name: 'Instant networking',
    description:
      'Break the ice with marketing pros who’ve been in your shoes and can guide you to success.',
  },
  {
    name: 'Diverse community',
    description:
      'Rub elbows with digital marketers from various niches, skill sets, and experience levels.',
  },
  {
    name: 'Exclusive content',
    description:
      'Get early access to webinars, courses, and articles exclusively curated for community members.',
  },
  {
    name: 'Job opportunities',
    description:
      'Stay ahead of the curve with exclusive job postings and freelance opportunities.',
  },
  {
    name: 'AMA sessions',
    description:
      'Attend Ask-Me-Anything sessions with industry experts and get the answers you need.',
  },
  {
    name: 'Community support',
    description:
      'Stuck with a challenge? Post it in the community and get multiple perspectives to solve it.',
  },
];

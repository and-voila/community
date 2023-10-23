import { FC } from 'react';
import Image from 'next/image';
import { FadeIn, FadeInStagger } from '@ui/index';

import { Icons } from '@/components/icons';
import SectionIntro from '@/components/section-intro';

type Feature = {
  name: string;
  description: string;
};

const features: Feature[] = [
  {
    name: 'Immediate insights',
    description:
      'No more wading through the chaos; get straight to the experts and actionable strategies that match your unique challenges.',
  },
  {
    name: 'Curated expertise',
    description:
      'This isn’t a numbers game; it’s about quality. We offer distilled wisdom, not chatter. Quality over quantity, always.',
  },
  {
    name: 'Metrics that matter',
    description:
      'Go beyond vanity metrics; focus on the KPIs that genuinely drive growth and build your brand.',
  },
  {
    name: 'AI deconstructed',
    description:
      'AI is not a black box here. Gain clear, actionable advice on integrating AI into your marketing stack.',
  },
  {
    name: 'Real-time revelations',
    description:
      'Keep your finger on the pulse with insights that matter, right when they happen. No more FOMO.',
  },
  {
    name: 'Community compassion',
    description:
      'You’re never alone in your marketing struggles. Get tailored solutions from a community that cares.',
  },
  // New entries below
  {
    name: 'Precision playbooks',
    description:
      'Transform theoretical knowledge into concrete actions. Our playbooks are your tactical game plans for marketing success.',
  },
  {
    name: 'AI-enabled tools',
    description:
      'Our tools don’t replace you, they amplify you. Take the grunt work out of marketing with AI that assists, not automates.',
  },
  {
    name: 'The full enchilada',
    description:
      'Community, playbooks, and tools. And Voila is a complete ecosystem designed to deliver results.',
  },
];

const CommunitySummary: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <SectionIntro
        eyebrow="Your Network, Amplified"
        heading="Full-stack marketing arsenal"
        level="h3"
        as="h2"
        description="Welcome to a full-spectrum marketing experience. Tap into a premium Discord community, actionable Playbooks, and AI-assisted Tools. This isn't another marketing Discord, it's your one-stop-shop for marketing brilliance."
      />
      <FadeIn className="relative overflow-hidden pt-16">
        <Image
          src="/images/community/summary.jpg"
          alt="A screenshot of the And Voila community Discord welcome screen, established by Rebekah Radice."
          className="mb-[-12%] rounded-xl shadow-2xl md:grayscale md:hover:grayscale-0"
          width={2432}
          height={1442}
        />
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
        </div>
      </FadeIn>
      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeInStagger className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-foreground sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <div className="inline font-display text-base text-foreground lg:text-lg">
                <Icons.heart
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

export default CommunitySummary;

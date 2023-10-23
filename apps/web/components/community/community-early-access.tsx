import { FC } from 'react';
import { FadeIn, FadeInStagger } from '@ui/index';

import SectionIntro from '@/components/section-intro';

import { Icons } from '../icons';

interface Feature {
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    name: 'Immediate insights',
    description:
      'Dive into a community that offers real-time advice from pros familiar with your marketing challenges.',
  },
  {
    name: 'Curated expertise',
    description:
      'Join a handpicked circle focused on results, not chatter. Expert-vetted insights only.',
  },
  {
    name: 'Metrics that matter',
    description:
      'Learn to focus on actionable metrics through our Playbooks, setting you on the path to impressive ROI.',
  },
  {
    name: 'AI deconstructed',
    description:
      'Demystify AI in marketing through our Playbooks and AI-assisted tools. Practical advice, zero jargon.',
  },
  {
    name: 'Real-time revelations',
    description:
      'Receive timely updates on must-know tools and techniques via our community channels.',
  },
  {
    name: 'Community compassion',
    description:
      'Post your challenges, get immediate solutions. A community that’s got your back.',
  },
  {
    name: 'Playbook pioneer',
    description:
      'Get privileged access to our Playbooks. Master the art of marketing, one playbook at a time.',
  },
  {
    name: 'AI tool tester',
    description:
      'Early access to AI-assisted tools. Your feedback shapes the tools that shape your campaigns.',
  },
  {
    name: 'Ecosystem synergy',
    description:
      'From community wisdom to Playbooks and AI tools, experience a unified ecosystem that amplifies your marketing.',
  },
];

const CommunityEarlyAccess: FC = () => {
  return (
    <div className="mx-auto py-24 sm:py-32">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <SectionIntro
          eyebrow="Exclusive Benefits"
          heading="Enjoy early access"
          level="h4"
          as="h2"
          description="Be among the first to take advantage of the And Voila marketing experience. From our exclusive community to next-gen tools. Early access means you don't just witness the evolution, you're part of it."
        />
        <FadeInStagger className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base text-muted-foreground sm:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <div className="font-display text-lg text-foreground lg:text-xl">
                <Icons.plus
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

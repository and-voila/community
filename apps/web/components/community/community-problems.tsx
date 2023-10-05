import { FadeIn, FadeInStagger } from '@ui/index';
import { FC } from 'react';
import { LightningBoltIcon } from 'ui';

import SectionIntro from '@/components/section-intro';

interface Problem {
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    title: 'AI unveiled',
    description:
      'Confused about integrating AI? We simplify it with step-by-step, actionable advice.',
  },
  {
    title: 'Real-time updates',
    description:
      'Stay ahead with timely insights on tools, techniques, and pivotal industry shifts.',
  },
  {
    title: 'ROI alignment',
    description:
      'Struggling to quantify your marketing value? We help you align your actions with measurable business goals.',
  },
  {
    title: 'Evergreen learning',
    description:
      'Feel like your skills are starting to rust? Our community fosters ongoing, adaptive learning.',
  },
  {
    title: 'Kondo the clutter',
    description:
      'Overwhelmed by trends and buzzwords? We sift through the noise to deliver insights that matter.',
  },
  {
    title: 'Community support',
    description:
      'Need more than just articles? Get well-rounded solutions from seasoned experts and community peers.',
  },
  {
    title: 'Streamlined productivity',
    description:
      "Drowning in tasks? We'll show you focused strategies to optimize your workflow.",
  },
  {
    title: 'Building confidence',
    description:
      'Second-guessing your decisions? Gain the skills and support to act decisively.',
  },
  {
    title: 'Future-proof skills',
    description:
      'Concerned about keeping up with rapid industry changes? We offer foresight on emerging trends to keep you ahead of the curve.',
  },
  {
    title: 'Climb the ladder',
    description:
      'Stuck in your career? We provide the network and know-how to boost your professional growth.',
  },
];

const CommunityProblems: FC = () => {
  return (
    <div className="mx-auto py-24 sm:py-32">
      <SectionIntro
        eyebrow="Time for Transformation?"
        heading="Escape the labyrinth"
        description="Feeling stuck with outdated tactics and lackluster results? We're your north star in the complex world of digital marketing."
      />
      <FadeInStagger className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {problems.map((problem) => (
            <FadeIn
              key={problem.title}
              className="flex flex-col rounded-lg bg-primary-foreground p-6"
            >
              <div className="font-display text-lg text-foreground lg:text-xl">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-background">
                  <LightningBoltIcon
                    className="h-6 w-6 text-brand"
                    aria-hidden="true"
                  />
                </div>
                {problem.title}
              </div>
              <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">{problem.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
};

export default CommunityProblems;

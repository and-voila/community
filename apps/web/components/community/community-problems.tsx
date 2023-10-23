import { FC } from 'react';
import { FadeIn, FadeInStagger } from '@ui/index';

import SectionIntro from '@/components/section-intro';

import { Icons } from '../icons';

interface Problem {
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    title: 'AI unveiled',
    description:
      'Confused about integrating AI? Our Community and Playbooks simplify it with step-by-step, actionable advice.',
  },
  {
    title: 'Real-time updates',
    description:
      'Stay ahead with timely insights from our Community on tools, techniques, and pivotal industry shifts.',
  },
  {
    title: 'ROI alignment',
    description:
      'Struggling to quantify your marketing value? Our Playbooks align your actions with measurable business goals.',
  },
  {
    title: 'Evergreen learning',
    description:
      'Feel like your skills are starting to rust? Our Playbooks offer quick, comprehensive updates to keep you in the game.',
  },
  {
    title: 'Kondo the clutter',
    description:
      'Overwhelmed by trends and buzzwords? Our Community delivers insights that cut through the noise.',
  },
  {
    title: 'Community support',
    description:
      'Need more than just articles? Get well-rounded solutions from seasoned experts and community peers.',
  },
  {
    title: 'Streamlined productivity',
    description:
      'Drowning in tasks? Our Community will show you focused strategies to optimize your workflow.',
  },
  {
    title: 'Building confidence',
    description:
      'Second-guessing your decisions? Our Playbooks give you the confidence and the skills to act decisively.',
  },
  {
    title: 'Future-proof skills',
    description:
      'Concerned about keeping up? Our Playbooks offer foresight on emerging trends.',
  },
  {
    title: 'Climb the ladder',
    description:
      'Stuck in your career? Our Community provides the network to boost your professional growth.',
  },
  {
    title: 'Rapid learning with Playbooks',
    description:
      'Want to learn fast and effectively? Our Playbooks offer micro-courses that deliver the expertise you need in no time.',
  },
  {
    title: 'AI-enhanced Tools',
    description:
      'Looking for smarter workflows? Our Tools offer AI-assisted features to supercharge your marketing tasks.',
  },
];

const CommunityProblems: FC = () => {
  return (
    <div className="mx-auto py-24 sm:py-32">
      <SectionIntro
        eyebrow="Time for Transformation"
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
                  <Icons.magic
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

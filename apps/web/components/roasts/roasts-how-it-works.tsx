import Image from 'next/image';
import { FC } from 'react';
import { BackpackIcon, BarChartIcon, Crosshair1Icon } from 'ui';

import { FadeIn } from '@/components/fade-in';
import SectionIntro from '@/components/section-intro';

interface Item {
  name: string;
  description: string;
  icon: (props: { className?: string }) => JSX.Element;
}

const items: Item[] = [
  {
    name: 'Pick your roast',
    description:
      'Pinpoint your marketing pain points—your website, SEO, social media, etc. Our roasts target the areas you want to improve.',
    icon: (props) => <BackpackIcon {...props} />,
  },
  {
    name: 'Get roasted',
    description:
      'Our team fires up in 48 hours, scrutinizing your selected area and crafting a detailed roast packed with insights and strategic fixes.',
    icon: (props) => <Crosshair1Icon {...props} />,
  },
  {
    name: 'Ignite results',
    description:
      'We deliver a step-by-step playbook and shareable digital report. Implement it to spark measurable improvements across your marketing.',
    icon: (props) => <BarChartIcon {...props} />,
  },
];

const LandingHowItWorks: FC = () => {
  return (
    <section className="relative isolate py-24 sm:py-32">
      <FadeIn>
        <SectionIntro
          eyebrow="Roasting in three steps"
          heading="Pick. Roast. Ignite."
          level="h2"
          description="Stop the guesswork. Pick your ideal roast, then our experts analyze and deliver actionable insights, usually within 48 hours. The result? A tailored playbook to spark measurable marketing
            improvements."
        />
      </FadeIn>
      <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-8">
          <div className="lg:max-w-lg">
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-relaxed text-muted-foreground lg:max-w-none lg:text-lg">
              {items.map((item) => (
                <FadeIn key={item.name} className="relative pl-9">
                  <dt className="inline font-display text-foreground">
                    <item.icon
                      className="absolute left-1 top-2 h-5 w-5 text-brand"
                      aria-hidden="true"
                    />
                    {item.name}
                  </dt>{' '}
                  <dd className="inline">{item.description}</dd>
                </FadeIn>
              ))}
            </dl>
          </div>
        </div>
        <FadeIn>
          <Image
            src="/images/roasts/roast-report-mock.jpg"
            alt="A screenshot of a RoastMy.xyz report with mock data."
            className="w-[48rem] max-w-none rounded-2xl shadow-xl transition-all duration-300 ease-in-out sm:w-[57rem] md:-ml-4 md:grayscale md:hover:grayscale-0 lg:-ml-0 lg:mt-10"
            width={2432}
            height={1442}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default LandingHowItWorks;

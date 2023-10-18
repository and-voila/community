import { FC } from 'react';
import Link from 'next/link';
import { cn, FadeIn } from '@ui/index';
import { buttonVariants } from 'ui';

import PageIntro from '@/components/page-intro';
import Particles from '@/components/particles';

const LandingHero: FC = () => {
  return (
    <section className="relative isolate h-screen py-24 sm:py-48">
      <Particles className="absolute inset-0 -z-10" />
      <PageIntro
        eyebrow="Killer results"
        heading="Roasts that sizzle"
        level="h1"
        description="Marketing efforts leaving you cold? Our targeted roasts will light up your campaigns with measurable results. No smoke, no mirrors, no upsells, just fire."
      />
      <FadeIn className="mt-10 flex justify-center">
        <Link
          href="/shop"
          className={cn(buttonVariants({ variant: 'custom', size: 'lg' }))}
          aria-label="Get roasted and improve your marketing campaigns"
        >
          Get roasted{' '}
          <span role="img" aria-label="Fire emoji" aria-hidden="true">
            🔥
          </span>
        </Link>
      </FadeIn>
    </section>
  );
};

export default LandingHero;

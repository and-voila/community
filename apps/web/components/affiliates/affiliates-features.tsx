import { cn } from '@ui/index';
import { FadeIn } from '@ui/index';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { buttonVariants } from 'ui';

import SectionIntro from '@/components/section-intro';

const AffiliatesFeatures: FC = (): ReactElement => {
  return (
    <div className="mx-auto py-24 sm:py-32">
      <FadeIn className="relative isolate overflow-hidden border border-brand/70 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <SectionIntro
          centered={true}
          eyebrow="Get started today"
          heading="Ready for some heat?"
          level="h1"
          as="h2"
          description="You're one minute away from adding some fire to your earnings.
          Start earning up to 50% commissions."
        />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="https://affiliates.roastmy.xyz/register"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'custom', size: 'lg' }))}
            aria-label="Become a RoastMy.xyz affiliate today."
          >
            Start earning{' '}
            <span role="img" aria-label="Fire emoji" aria-hidden="true">
              🔥
            </span>
          </Link>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.5"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#2cb67d" />
              <stop offset={1} stopColor="#7f5af0" />
            </radialGradient>
          </defs>
        </svg>
      </FadeIn>
    </div>
  );
};

export default AffiliatesFeatures;

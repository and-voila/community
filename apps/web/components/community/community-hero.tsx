import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn, FadeIn } from '@ui/index';
import { buttonVariants, MagicWandIcon } from 'ui';

import SectionIntro from '@/components/section-intro';

const CommunityHero: FC = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <FadeIn className="mx-auto max-w-3xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <SectionIntro
              eyebrow="Early Access for only $7.99/MO"
              heading="Magical marketing"
              level="h2"
              as="h1"
              description="Scoop up early access and mingle with mods Rebekah Radice and her full-stack crew. Watch your campaigns go magical with game-changing strategies. We're your go-to premium Discord hub for marketing zen—no fluff, all wow."
            />
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="https://discord.com/servers/and-voila-1151749282806910976"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'custom', size: 'lg' }))}
              aria-label="Join the Sizzle Squad premium Discord server for digital marketing professionals"
            >
              Join the magic
              <div className="ml-2">
                <span
                  role="img"
                  aria-label="Magic wand icon"
                  aria-hidden="true"
                >
                  <MagicWandIcon />
                </span>
              </div>
            </Link>
          </div>
        </FadeIn>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <FadeIn className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              priority
              src="/images/shared/community.jpg"
              alt="A partial screenshot of the Sizzling Squad Discord community welcome screen."
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md shadow-2xl md:grayscale md:hover:grayscale-0"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;

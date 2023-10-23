import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn, FadeIn, GradientHeading } from '@ui/index';
import { buttonVariants } from 'ui';

import { Icons } from '../icons';

const CommunityLargeCta: FC = () => {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl lg:flex">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 rounded-2xl bg-primary-foreground p-6 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 lg:p-12">
          <FadeIn className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <GradientHeading level="h3" as="h2">
              Unlock your marketing mojo
            </GradientHeading>
            <p className="mt-6 text-lg text-muted-foreground">
              Mediocrity isn&apos;t your style. So why settle? Dive into an
              ecosystem designed for marketers who aim higher.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Community wisdom, Playbooks for quick wins, and AI Tools for the
              edge.
            </p>
            <div className="mt-10 flex">
              <Link
                href="https://discord.com/servers/and-voila-1151749282806910976"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'custom', size: 'lg' }),
                )}
                aria-label="Join the And Voila premium Discord server for digital marketing professionals"
              >
                Aim higher{' '}
                <div className="ml-2">
                  <span
                    role="img"
                    aria-label="Magic wand icon"
                    aria-hidden="true"
                  >
                    <Icons.rocket />
                  </span>
                </div>
              </Link>
            </div>
          </FadeIn>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <FadeIn className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="/images/community/maze.jpg"
                width={1152}
                height={842}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
              />
            </FadeIn>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <FadeIn className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src="/images/community/hallway.jpg"
                  width={1152}
                  height={842}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
                />
              </FadeIn>
              <FadeIn className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src="/images/community/penguins.jpg"
                  width={1152}
                  height={842}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
                />
              </FadeIn>
              <FadeIn className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="/images/community/rebekah-beer.jpg"
                  width={1152}
                  height={842}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityLargeCta;

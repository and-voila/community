'use client';

import Link from 'next/link';
import { buttonVariants } from 'ui';

import { FadeIn } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';
import Highlighter, { HighlighterItem } from '@/components/highlighter';
import { cn } from '@/lib/utils';

export default function LandingCta() {
  return (
    <FadeIn className="relative py-24 sm:py-32">
      <Highlighter>
        <div className="group relative mx-auto">
          <HighlighterItem>
            <div className="relative z-20 overflow-hidden rounded-[inherit] bg-primary-foreground px-4 py-16 sm:py-24 md:px-12">
              <div>
                <div className="mx-auto flex flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20">
                  <div className="order-1 max-md:text-center md:order-none md:w-7/12 lg:w-1/2">
                    <div>
                      <GradientHeading level="h3" as="h2">
                        Ready to light it up?
                      </GradientHeading>
                    </div>
                    <p className="mt-6 text-lg text-muted-foreground">
                      Whether you&apos;re just getting started, in the middle of
                      a project, or ready for a change. Get a roast and make the
                      most of your marketing dollars.
                    </p>
                    <div className="mt-8 max-w-xs space-y-2 max-md:mx-auto">
                      <Link
                        href="/shop"
                        className={cn(
                          buttonVariants({ variant: 'custom', size: 'lg' }),
                        )}
                        aria-label="Get roasted and improve your marketing campaigns"
                      >
                        Start shining{' '}
                        <span
                          role="img"
                          aria-label="Sparkle emoji"
                          aria-hidden="true"
                        >
                          ✨
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-5/12 lg:w-1/2">
                    <div className="relative -mt-12 py-24">
                      <div className="flex items-center justify-center">
                        <div className="relative flex h-48 w-48 items-center justify-center">
                          <svg
                            role="img"
                            aria-label="Pulse animation"
                            className="pointer-events-none absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform blur-md will-change-transform"
                            width="480"
                            height="480"
                            viewBox="0 0 480 480"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id="pulse-a"
                                x1="50%"
                                x2="50%"
                                y1="100%"
                                y2="0%"
                              >
                                <stop offset="0%" stopColor="#521fea" />
                                <stop offset="76.382%" stopColor="#2cb67d" />
                                <stop offset="100%" stopColor="#6847C2" />
                              </linearGradient>
                            </defs>
                            <g fillRule="evenodd">
                              <path
                                className="pulse"
                                fill="url(#pulse-a)"
                                fillRule="evenodd"
                                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                              />
                              <path
                                className="pulse pulse-1"
                                fill="url(#pulse-a)"
                                fillRule="evenodd"
                                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                              />
                              <path
                                className="pulse pulse-2"
                                fill="url(#pulse-a)"
                                fillRule="evenodd"
                                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                              />
                            </g>
                          </svg>
                          <div className="pointer-events-none absolute inset-0 left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-full [mask-image:_radial-gradient(black,_transparent_60%)]">
                            <div className="h-[200%] animate-endless">
                              <div className="absolute inset-0 opacity-20 blur-[2px] [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)]" />
                              <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.gray.400)_48px,_theme(colors.gray.400)_49px)]" />
                              <div className="absolute inset-0 opacity-20 blur-[2px] [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)]" />
                              <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.gray.500)_48px,_theme(colors.gray.500)_49px)]" />
                            </div>
                          </div>
                          <div className="absolute">
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border bg-primary-foreground text-2xl shadow-2xl">
                              <span
                                role="img"
                                aria-label="Fire emoji"
                                aria-hidden="true"
                              >
                                🔥
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </Highlighter>
    </FadeIn>
  );
}

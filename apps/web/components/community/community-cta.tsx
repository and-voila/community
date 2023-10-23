import Link from 'next/link';
import { cn, FadeIn, H5 } from '@ui/index';
import { buttonVariants } from 'ui';

import Highlighter, { HighlighterItem } from '@/components/highlighter';

import { Icons } from '../icons';

const includedFeatures = [
  'Round-the-clock Discord engagement',
  'Tailored daily insights to your inbox',
  'Instant access to fresh Playbooks',
  'Hands-on with next-gen AI tools',
  'Rate lock: $25/month for one year',
  'Unique Discord flair and statuses',
  'Your voice, amplified in our roadmap',
  'Be the first to test and tweak',
];

export default function CommunityCta() {
  return (
    <section className="py-24 sm:py-32">
      <FadeIn>
        <Highlighter>
          <div className="group">
            <HighlighterItem>
              <FadeIn className="relative z-20 overflow-hidden rounded-[inherit] bg-primary-foreground">
                <div className="mt-8 max-w-2xl lg:flex lg:max-w-none">
                  <div className="p-8 sm:p-10 lg:flex-auto">
                    <H5
                      as="h2"
                      className="font-display text-2xl tracking-tight text-foreground"
                    >
                      Become a founding member of And Voila
                    </H5>
                    <p className="mt-6 text-base text-muted-foreground">
                      Jumpstart your marketing mastery. Early Access gives you a
                      tactical edge, our Playbooks, AI tools, and a community
                      that&apos;s ahead of the curve.
                    </p>

                    <div className="mt-10 flex items-center gap-x-4">
                      <h3 className="flex-none text-sm font-semibold leading-6 text-brand lg:text-base">
                        What&apos;s included
                      </h3>
                      <div className="h-px flex-auto bg-border" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6 lg:text-base"
                    >
                      {includedFeatures.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Icons.check
                            className="h-6 w-5 flex-none text-brand/70"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-2 p-8 sm:mt-4 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl border bg-background py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-20">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="font-display text-sm uppercase tracking-wider text-brand">
                          Early Access Pricing
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="font-display text-7xl text-foreground">
                            $25
                          </span>
                          <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                            / month
                          </span>
                        </p>
                        <Link
                          href="https://discord.com/servers/and-voila-1151749282806910976"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: 'custom' }),
                            'mt-10 block w-full',
                          )}
                          aria-label="Join the Sizzle Squad community and set your marketing campaigns on fire"
                        >
                          Get early access{' '}
                          <span
                            role="img"
                            aria-label="Fire emoji"
                            aria-hidden="true"
                          >
                            🔥
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </HighlighterItem>
          </div>
        </Highlighter>
      </FadeIn>
    </section>
  );
}

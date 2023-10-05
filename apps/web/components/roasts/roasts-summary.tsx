import { cn } from '@ui/index';
import { FadeIn } from '@ui/index';
import { GradientHeading } from '@ui/index';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from 'ui';

import Highlighter, { HighlighterItem } from '@/components/highlighter';
import SectionIntro from '@/components/section-intro';
import ChartImg from '@/public/images/roasts/chart.png';
import GrillImg from '@/public/images/roasts/grill.png';
import TeamImg from '@/public/images/roasts/team-brilla.png';

export default function LandingSummary() {
  return (
    <section className="relative py-24 sm:py-32">
      <SectionIntro
        centered={true}
        eyebrow="We bring the heat"
        heading="From flicker to flame"
        level="h2"
        description="We're not just experts at roasting—we're the accelerant
            your marketing needs. Let our battle-tested human firestarters
            ignite your campaigns, turning sparks into wildfires."
      />
      <FadeIn className="relative py-12 md:pb-20">
        {/* Box #1 */}
        <Highlighter className="group grid gap-6 sm:mx-0 md:grid-cols-12">
          <div className="md:col-span-12">
            <HighlighterItem>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-primary-foreground">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="order-1 shrink-0 p-6 pt-0 md:order-none md:max-w-xl md:p-8 md:pr-0">
                    <div className="mb-5">
                      <GradientHeading level="h4" as="h3">
                        Recipe for success
                      </GradientHeading>
                      <p className="mt-4 text-base text-muted-foreground lg:text-lg">
                        We don&apos;t deal in random sparks. Our roasts deliver
                        a concrete plan to ignite growth. With all human
                        firepower assisted by AI, your marketing will blaze.
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/shop"
                        className={cn(
                          buttonVariants({ variant: 'custom' }),
                          'mt-4',
                        )}
                        aria-label="Get roasted and improve your marketing campaigns"
                      >
                        Get roasted{' '}
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
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden md:h-auto">
                    <Image
                      className="md:left-0{md}transla{}-x-0 absolute bottom-0 left-1/2 mx-auto max-w-none -translate-x-1/2 md:relative md:grayscale md:hover:grayscale-0"
                      src={GrillImg}
                      width="504"
                      height="400"
                      alt="A charcoal grill with flames"
                    />
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
          {/* Box #2 */}
          <FadeIn className="md:col-span-7">
            <HighlighterItem>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-primary-foreground">
                <div className="flex flex-col">
                  <div className="order-1 shrink-0 p-6 pt-0 md:order-none md:max-w-xl md:p-8">
                    <div>
                      <GradientHeading level="h4" as="h3">
                        The roasting forge
                      </GradientHeading>
                      <p className="mt-4 text-base text-muted-foreground lg:text-lg">
                        Our decades of marketing experience make us more than an
                        agency—we&apos;re the crucible where strategies
                        transform into unstoppable results.
                      </p>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden md:h-auto md:pb-8">
                    <Image
                      className="absolute bottom-0 left-1/2 mx-auto max-w-none -translate-x-1/2 md:relative md:left-0 md:max-w-full md:translate-x-0 md:grayscale md:hover:grayscale-0"
                      src={ChartImg}
                      width={536}
                      height={230}
                      alt="A decorative graph showing growth"
                    />
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </FadeIn>
          {/* Box #3 */}
          <FadeIn className="md:col-span-5">
            <HighlighterItem>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-primary-foreground">
                <div className="flex flex-col">
                  <div className="order-1 shrink-0 p-6 pt-0 md:order-none md:max-w-[480px] md:p-8">
                    <div>
                      <GradientHeading level="h4" as="h3">
                        The roast crew
                      </GradientHeading>
                      <p className="mt-4 text-base text-muted-foreground lg:text-lg">
                        Our secret sauce combines decades of expertise from
                        Rebekah Radice, award-winning creative Ambreen, and
                        technical cat herder Sam.
                      </p>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden md:h-auto md:p-4">
                    <Image
                      className="absolute bottom-0 left-1/2 mx-auto max-w-none -translate-x-1/2 md:relative md:left-0 md:max-w-full md:translate-x-0 md:grayscale md:hover:grayscale-0"
                      src={TeamImg}
                      width={285}
                      height={285}
                      alt="A graphic showing avatars of Ambreen, Rebekah, and Sam, the team behind RoastMy.xyz"
                    />
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </FadeIn>
        </Highlighter>
      </FadeIn>
    </section>
  );
}

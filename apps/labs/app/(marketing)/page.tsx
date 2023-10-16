import Link from 'next/link';
import { cn } from '@ui/lib/utils';

import { env } from '@/env.mjs';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/and-voila/community',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response?.ok) {
      return null;
    }

    const json = await response.json();

    return parseInt(json['stargazers_count']).toLocaleString();
  } catch (error) {
    return null;
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars();

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Discover the alchemy of digital marketing
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Real-time guidance, micro courses, and AI-powered tools await. No
            fluff, just actionable insights that drive results.
          </p>

          <div className="space-x-4">
            <Link
              href="/register"
              className={cn(buttonVariants({ variant: 'custom', size: 'lg' }))}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section
        id="benefits"
        className="container space-y-6 bg-muted py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-display text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Why you&apos;ll love going premium
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Say goodbye to marketing overwhelm and missed KPIs. As a premium
            member, you&apos;ll gain the clarity and expertise you need to
            execute top-notch campaigns and drive ROI through the roof.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* Instant Expertise */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="magic-wand"
                className="h-12 w-12 text-4xl"
              >
                ✨
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">Instant Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Elevate your marketing game overnight. Get real answers, no
                  fluff, just results.
                </p>
              </div>
            </div>
          </div>

          {/* Focused Micro Courses */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="books"
                className="h-12 w-12 text-4xl"
              >
                📚
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">Micro Mastery</h3>
                <p className="text-sm">
                  Laser-focused micro courses. Crush it with new skills in under
                  5 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* AI-Assisted Tools */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span role="img" aria-label="AI" className="h-12 w-12 text-4xl">
                🤖
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">AI-Boosted Strategies</h3>
                <p className="text-sm text-muted-foreground">
                  Leverage cutting-edge, AI-assisted tools to supercharge your
                  campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* Holistic Solutions */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="complete"
                className="h-12 w-12 text-4xl"
              >
                🌐
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">Holistic Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  One-stop shop for your marketing needs. From concept to
                  completion.
                </p>
              </div>
            </div>
          </div>

          {/* Network Benefits */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="network"
                className="h-12 w-12 text-4xl"
              >
                🔗
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">Elite Networking</h3>
                <p className="text-sm text-muted-foreground">
                  Rub elbows with industry leaders. Get insights from the best
                  in the business.
                </p>
              </div>
            </div>
          </div>
          {/* Real-Time Support */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="clock"
                className="h-12 w-12 text-4xl"
              >
                ⏰
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">Timely Wisdom</h3>
                <p className="text-sm text-muted-foreground">
                  Your marketing questions answered. Same-day replies from our
                  global team.
                </p>
              </div>
            </div>
          </div>
          {/* ROI Boost */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="chart"
                className="h-12 w-12 text-4xl"
              >
                📈
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">ROI Unleashed</h3>
                <p className="text-sm text-muted-foreground">
                  No guesswork. Achieve unparalleled ROI with data-driven
                  strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Confidence and Credibility */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="trophy"
                className="h-12 w-12 text-4xl"
              >
                🏆
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">Build Credibility</h3>
                <p className="text-sm text-muted-foreground">
                  Enhance your industry standing. Become the marketer everyone
                  turns to.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Evolution */}
          <div className="relative overflow-hidden rounded-lg border bg-primary-foreground p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <span
                role="img"
                aria-label="magic-wand"
                className="h-12 w-12 text-4xl"
              >
                🪄
              </span>
              <div className="space-y-2">
                <h3 className="font-bold">Skill Evolution</h3>
                <p className="text-sm text-muted-foreground">
                  Outgrow your limitations. Master new marketing skills and
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Unlock the future of digital marketing with And Voila. Dive into our
            insightful blog and in-depth documentation—your toolkit for becoming
            the go-to marketing pro.
          </p>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-display text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Embrace the &lsquo;Steal Like an Artist&lsquo; mantra with And
            Voila. We&apos;re not just open source, we&apos;re an open book. Our
            code&apos;s ready for you to swipe, tweak, and make your own on{' '}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex mt-4"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent" />
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

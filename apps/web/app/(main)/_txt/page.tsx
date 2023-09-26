// eslint-disable-next-line simple-import-sort/imports
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { Metadata } from 'next';
import Link from 'next/link';

import { FadeIn, FadeInStagger } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';
import { SITE_URL, formatDate } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'Blog';
  const description =
    "Looking for some magic for your marketing? You're in the right place. The And Voila blog serves up epic insights. Want more? Join our premium Discord server.";

  const url = `${SITE_URL}/txt`;

  const metadata = {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
      url,
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
    },
  };

  return metadata;
}

export default async function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl">
          <GradientHeading level="h1">The blog</GradientHeading>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ready for hot takes and sizzling insights? You&apos;re in the right
            place. We&apos;re serving up piping hot takes, sizzling strategies,
            and fiery insights. Pure marketing heat.
          </p>
          <FadeInStagger className="mt-10 space-y-16 border-t pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <FadeIn key={post._id}>
                <article
                  key={post._id}
                  className="flex max-w-4xl flex-col items-start justify-between"
                >
                  <div className="mb-4 flex max-w-lg items-center gap-x-4 text-base">
                    <div className="relative z-10 rounded-md bg-brand px-3 text-base font-semibold uppercase text-primary-foreground hover:bg-gray-100">
                      {post.topic}
                    </div>
                    <time
                      dateTime={post.date}
                      className="text-muted-foreground"
                    >
                      {formatDate(post.date)}
                    </time>
                    <div className="text-muted-foreground">
                      By {post.author}
                    </div>
                  </div>
                  <div className="group relative">
                    <GradientHeading level="h3" as="h2">
                      <Link href={post.slug}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </GradientHeading>
                    <p className="mt-5 line-clamp-3 text-lg text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="my-10 border " />
                  </div>
                </article>
              </FadeIn>
            ))}
          </FadeInStagger>
        </FadeIn>
      </div>
    </div>
  );
}

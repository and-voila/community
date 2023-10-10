import { Container, FadeIn } from '@ui/index';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { allPages } from '@/.contentlayer/generated';
import PageIntro from '@/components/page-intro';
import { SITE_URL } from '@/lib/utils';

import { PostMdx } from '../_blog/_components/mdx/post-mdx';

export function generateMetadata(): Metadata {
  const title = 'About';
  const description =
    'Curious about And Voila? Meet the mavericks of digital marketing, serving up roasts hotter than your morning coffee. Get the backstory and get roasted.';

  const url = `${SITE_URL}/about`;

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };

  return metadata;
}

function About() {
  const about = allPages.find((doc) => doc.slug === 'about');
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Container as="article" className="py-24 lg:py-32">
          <FadeIn>
            <PageIntro
              level="h1"
              eyebrow="Who are these people?"
              heading={about?.title ?? ''}
              description={about?.description ?? ''}
            />
            <div className="mx-auto max-w-4xl border-b border-brand/70 py-12" />
          </FadeIn>
          <FadeIn>
            <div className="prose mx-auto mt-16 dark:prose-invert md:prose-lg">
              <PostMdx code={about?.body.code ?? ''} />
            </div>
          </FadeIn>
        </Container>
      </Suspense>
    </main>
  );
}

export default About;

import { Container, FadeIn } from '@ui/index';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { allPages } from '@/.contentlayer/generated';
import PageIntro from '@/components/page-intro';
import { SITE_URL } from '@/lib/utils';

import { PostMdx } from '../_blog/_components/mdx/post-mdx';

export function generateMetadata(): Metadata {
  const title = 'Privacy Policy';
  const description =
    "We're a privacy-first company. What does that mean? We embed privacy into everything we do, from data minimization to transparency, to keep your data safe.";

  const url = `${SITE_URL}/privacy`;

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

function Privacy() {
  const privacy = allPages.find((doc) => doc.slug === 'privacy');
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Container as="article" className="py-24 lg:py-32">
          <FadeIn>
            <PageIntro
              level="h1"
              eyebrow="Using And Voila"
              heading={privacy?.title ?? ''}
              description={privacy?.description ?? ''}
            />
            <div className="mx-auto max-w-4xl border-b border-brand/70 py-12" />
          </FadeIn>
          <FadeIn>
            <div className="prose mx-auto mt-16 dark:prose-invert md:prose-lg">
              <PostMdx code={privacy?.body.code ?? ''} />
            </div>
          </FadeIn>
        </Container>
      </Suspense>
    </main>
  );
}

export default Privacy;

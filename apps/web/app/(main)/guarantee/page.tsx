import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { allPages } from '@/.contentlayer/generated';
import { Container, FadeIn } from '@ui/index';

import { SITE_URL } from '@/lib/utils';
import PageIntro from '@/components/page-intro';

import { PostMdx } from '../_blog/_components/mdx/post-mdx';

export function generateMetadata(): Metadata {
  const title = 'Guarantee';
  const description =
    'Ready to get roasted? We fine-tune your strategy with premium insights, Collaborating with our team should feel as delightful as the results we deliver.';

  const url = `${SITE_URL}/guarantee`;

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

function Guarantee() {
  const guarantee = allPages.find((doc) => doc.slug === 'guarantee');
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Container as="article" className="py-24 lg:py-32">
          <FadeIn>
            <PageIntro
              level="h1"
              eyebrow="Who are these people?"
              heading={guarantee?.title ?? ''}
              description={guarantee?.description ?? ''}
            />
            <div className="mx-auto max-w-4xl border-b border-brand/70 py-12" />
          </FadeIn>
          <FadeIn>
            <div className="prose mx-auto mt-16 dark:prose-invert md:prose-lg">
              <PostMdx code={guarantee?.body.code ?? ''} />
            </div>
          </FadeIn>
        </Container>
      </Suspense>
    </main>
  );
}

export default Guarantee;

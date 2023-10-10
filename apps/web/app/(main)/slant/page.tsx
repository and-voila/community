import { Container, FadeIn } from '@ui/index';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { allPages } from '@/.contentlayer/generated';
import PageIntro from '@/components/page-intro';
import { SITE_URL } from '@/lib/utils';

import { PostMdx } from '../_blog/_components/mdx/post-mdx';

export function generateMetadata(): Metadata {
  const title = 'Our Slant';
  const description =
    'Uncover the Slant behind And Voila. Our unique philosophy is marinated in 70+ years of experience, radical candor, and a ton of failures that you can avoid.';

  const url = `${SITE_URL}/slant`;

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

function Slant() {
  const slant = allPages.find((doc) => doc.slug === 'slant');
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Container as="article" className="py-24 lg:py-32">
          <FadeIn>
            <PageIntro
              level="h1"
              eyebrow="Opinionated but Informed"
              heading={slant?.title ?? ''}
              description={slant?.description ?? ''}
            />
            <div className="mx-auto max-w-4xl border-b border-brand/70 py-12" />
          </FadeIn>
          <FadeIn>
            <div className="prose mx-auto mt-16 dark:prose-invert md:prose-lg">
              <PostMdx code={slant?.body.code ?? ''} />
            </div>
          </FadeIn>
        </Container>
      </Suspense>
    </main>
  );
}

export default Slant;

import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { allPages } from '@/.contentlayer/generated';
import { Container, FadeIn } from '@ui/index';

import { SITE_URL } from '@/lib/utils';
import PageIntro from '@/components/page-intro';

import { PostMdx } from '../_blog/_components/mdx/post-mdx';

export function generateMetadata(): Metadata {
  const title = 'Accessibility';
  const description =
    "We're all in on accessibility. From WCAG 2.1 AA standards to dynamic text resizing, we aim for inclusivity. Your feedback truly helps us.";

  const url = `${SITE_URL}/accessibility`;

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

function Accessibility() {
  const accessibility = allPages.find((doc) => doc.slug === 'accessibility');
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Container as="article" className="py-24 lg:py-32">
          <FadeIn>
            <PageIntro
              level="h1"
              eyebrow="Committed to removing barriers"
              heading={accessibility?.title ?? ''}
              description={accessibility?.description ?? ''}
            />
            <div className="mx-auto max-w-4xl border-b border-brand/70 py-12" />
          </FadeIn>
          <FadeIn>
            <div className="prose mx-auto mt-16 dark:prose-invert md:prose-lg">
              <PostMdx code={accessibility?.body.code ?? ''} />
            </div>
          </FadeIn>
        </Container>
      </Suspense>
    </main>
  );
}

export default Accessibility;

import { Container, FadeIn } from '@ui/index';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { allPages } from '@/.contentlayer/generated';
import PageIntro from '@/components/page-intro';
import { SITE_URL } from '@/lib/utils';

import { PostMdx } from '../_blog/_components/mdx/post-mdx';

export function generateMetadata(): Metadata {
  const title = 'Terms of Service';
  const description =
    'Our Terms of Service outline fair rules of the road for using our services. We aim to be transparent about our practices and expectations to earn your trust.';

  const url = `${SITE_URL}/terms`;

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

function Terms() {
  const terms = allPages.find((doc) => doc.slug === 'terms');
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Container as="article" className="py-24 lg:py-32">
          <FadeIn>
            <PageIntro
              level="h1"
              eyebrow="Using And Voila"
              heading={terms?.title ?? ''}
              description={terms?.description ?? ''}
            />
            <div className="mx-auto max-w-4xl border-b border-brand/70 py-12" />
          </FadeIn>
          <FadeIn>
            <div className="prose mx-auto mt-16 dark:prose-invert md:prose-lg">
              <PostMdx code={terms?.body.code ?? ''} />
            </div>
          </FadeIn>
        </Container>
      </Suspense>
    </main>
  );
}

export default Terms;

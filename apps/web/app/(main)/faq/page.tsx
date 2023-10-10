import { Container, FadeIn } from '@ui/index';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { allPages } from '@/.contentlayer/generated';
import PageIntro from '@/components/page-intro';
import { SITE_URL } from '@/lib/utils';

import { PostMdx } from '../_blog/_components/mdx/post-mdx';

export function generateMetadata(): Metadata {
  const title = 'FAQ';
  const description =
    "Questions? We've got answers. Dive into the And Voila FAQs for the scoop on top-notch security, unique roasting process, and more. Get all the deets.";

  const url = `${SITE_URL}/faq`;

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

function Faq() {
  const faq = allPages.find((doc) => doc.slug === 'faq');
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Container as="article" className="py-24 lg:py-32">
          <FadeIn>
            <PageIntro
              level="h1"
              eyebrow="Got questions?"
              heading={faq?.title ?? ''}
              description={faq?.description ?? ''}
            />
            <div className="mx-auto max-w-4xl border-b border-brand/70 py-12" />
          </FadeIn>
          <FadeIn>
            <div className="prose mx-auto mt-16 dark:prose-invert md:prose-lg">
              <PostMdx code={faq?.body.code ?? ''} />
            </div>
          </FadeIn>
        </Container>
      </Suspense>
    </main>
  );
}

export default Faq;

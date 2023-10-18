import React from 'react';
import { Metadata } from 'next';
import { Container } from '@ui/index';
import { allPosts } from 'contentlayer/generated';

import { SITE_URL } from '@/lib/utils';
import SectionIntro from '@/components/section-intro';

import FeaturedPost from './_components/featured-post';
import LoadMoreButton from './_components/load-more';

export function generateMetadata(): Metadata {
  const title = 'Blog';
  const description =
    "Looking for some magic for your marketing? You're in the right place. The And Voila blog serves up epic insights. Want more? Join our premium Discord server.";

  const url = `${SITE_URL}/blog`;

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

export default function Blog() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  const featuredPost = sortedPosts[0];
  const posts = sortedPosts.slice(1);

  return (
    <div>
      <Container>
        <section className="relative">
          <div className="mx-auto">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
              <SectionIntro
                eyebrow="Welcome to the Community"
                heading="And Voila Blog"
                level="h1"
                description="We share insights, advice, and practical tips to get killer digital marketing results."
              />
              <FeaturedPost featuredPost={featuredPost} />
              <LoadMoreButton posts={posts} />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

'use client';

import { Container } from '@ui/index';
import { allPosts } from 'contentlayer/generated';
import React, { useState } from 'react';

import SectionIntro from '@/components/section-intro';

import FeaturedPost from './_components/featured-post';
import LoadMoreButton from './_components/load-more';
import PostItem from './_components/post-item';

export default function Blog() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  const featuredPost = sortedPosts[0];
  const posts = sortedPosts.slice(1);

  const [postCount, setPostCount] = useState(9);

  return (
    <div>
      <Container>
        <section className="relative">
          <div className="mx-auto">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
              {/*  Page header */}
              <SectionIntro
                eyebrow="Welcome to the Commmunity"
                heading="And Voila Blog"
                level="h1"
                description="We share insights, advice, and practical tips to get killer digital marketing results."
              />
              {/*  Featured article */}
              <FeaturedPost featuredPost={featuredPost} />

              {/*  Articles list */}
              <div className="mx-auto md:max-w-none">
                {/*  Section title */}
                <h4 className="h4 mb-10 border-b pb-6 font-display text-sm uppercase tracking-widest text-brand">
                  Latest articles
                </h4>

                {/*  Articles container */}
                <div className="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
                  {posts.slice(0, postCount).map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>
              </div>

              {/* Load more button */}
              <LoadMoreButton
                postCount={postCount}
                setPostCount={setPostCount}
                totalPosts={posts.length}
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

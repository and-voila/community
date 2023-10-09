import {
  Button,
  CaretLeftIcon,
  Container,
  FadeIn,
  GradientHeading,
} from '@ui/index';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { SITE_URL } from '@/lib/utils';

import { Author } from '../_components/author';
import { PostMdx } from '../_components/mdx/post-mdx';
import RelatedPosts from '../_components/related-posts';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Error('Post not found');
  }

  const seoTitle = post.title;
  const seoMetaDescription = post.summary;
  const postUrl = `${SITE_URL}/blog/${params.slug}`;

  return {
    title: seoTitle,
    description: seoMetaDescription,
    openGraph: {
      type: 'article',
      title: seoTitle,
      description: seoMetaDescription,
      url: postUrl,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
    },
    twitter: {
      title: seoTitle,
      description: seoMetaDescription,
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
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      {/* Background image */}
      {post.image && (
        <div className="absolute inset-0 box-content h-128 pt-16">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            src={post.image}
            width={1440}
            height={577}
            priority
            alt={post.title}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 lg:px-8 lg:pt-24 xl:px-10">
        <Link href="/blog">
          {' '}
          <Button variant="link">
            <CaretLeftIcon className="mr-2 h-4 w-4" /> Back to blog
          </Button>
        </Link>
        <FadeIn className="text-center [text-wrap:balance]">
          <GradientHeading level="h1">{post.title}</GradientHeading>
        </FadeIn>
      </div>

      <Container>
        <section className="relative">
          <div className="relative mx-auto">
            <div className="pb-12 pt-4 md:pb-20 md:pt-8">
              <div className="mx-auto max-w-3xl">
                <article>
                  <header className="mb-8">
                    <div className="mt-8 md:flex md:items-center md:justify-between">
                      <FadeIn className="mx-auto flex items-center justify-center border-y py-2">
                        <Author
                          img={post.authorImg}
                          name={post.author}
                          date={post.publishedAt}
                        />
                      </FadeIn>
                    </div>
                  </header>
                  <div className="py-8">
                    <PostMdx code={post.body.code} />
                  </div>
                  <footer />
                </article>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <RelatedPosts />
    </>
  );
}

import { Button, CaretLeftIcon, Container } from '@ui/index';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Author } from '../_components/author';
import { PostMdx } from '../_components/mdx/post-mdx';
import RelatedPosts02 from '../_components/related-posts';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary: description } = post;

  return {
    title,
    description,
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
        <div className="h-128 absolute inset-0 box-content pt-16">
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
      <Container>
        <section className="relative">
          <div className="relative mx-auto">
            <div className="pb-12 pt-16 md:pb-20 md:pt-32">
              <Link href="/blog">
                {' '}
                <Button variant="link">
                  <CaretLeftIcon className="mr-2 h-4 w-4" /> Back to blog
                </Button>
              </Link>
              <div className="text-center">
                <h1 className="py-6 font-display text-7xl [text-wrap:balance] md:text-8xl">
                  {post.title}
                </h1>
              </div>
              <div className="mx-auto max-w-3xl">
                <article>
                  {/* Article header */}
                  <header className="mb-8">
                    {/* Title and excerpt */}

                    {/* Article meta */}
                    <div className="mt-8 md:flex md:items-center md:justify-between">
                      {/* Author meta */}
                      <div className="mx-auto flex items-center justify-center border-y py-2">
                        <Author
                          img={post.authorImg}
                          name={post.author}
                          date={post.publishedAt}
                        />
                      </div>
                    </div>
                  </header>

                  {/* Article content */}
                  <div className="py-8">
                    <PostMdx code={post.body.code} />
                  </div>

                  {/* Article footer */}
                  <footer />
                </article>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <RelatedPosts02 />
    </>
  );
}

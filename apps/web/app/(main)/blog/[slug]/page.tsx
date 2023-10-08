import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { PostMdx } from '../_components/mdx/post-mdx';
import PostDate from '../_components/post-date';
import RelatedPosts02 from '../_components/related-posts-02';

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
      <section className="relative">
        {/* Background image */}
        {post.image && (
          <div className="absolute inset-0 box-content h-96 pt-16">
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
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="text-center md:text-left">
              <h1 className="py-6 font-display text-7xl md:text-9xl">
                {post.title}
              </h1>
            </div>
            <div className="mx-auto max-w-3xl">
              <article>
                {/* Article header */}
                <header className="mb-8">
                  {/* Title and excerpt */}

                  {/* Article meta */}
                  <div className="mt-5 md:flex md:items-center md:justify-between">
                    {/* Author meta */}
                    <div className="flex items-center justify-center">
                      <div className="rounded-full bg-background">
                        <Image
                          className="mr-3 shrink-0 rounded-full"
                          src={post.authorImg}
                          width={32}
                          height={32}
                          alt={post.author}
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 dark:text-gray-400">
                          By{' '}
                        </span>
                        <div className="font-medium text-gray-800 hover:underline dark:text-gray-300">
                          {post.author}
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {' '}
                          · <PostDate dateString={post.publishedAt} />
                        </span>
                      </div>
                    </div>
                  </div>
                </header>
                <hr className="mb-8 h-px w-5 border-0 bg-gray-400 pt-px dark:bg-gray-500" />

                {/* Article content */}
                <div className="mb-8">
                  <PostMdx code={post.body.code} />
                </div>

                {/* Article footer */}
                <footer />
              </article>
            </div>
          </div>
        </div>
      </section>
      <RelatedPosts02 />
    </>
  );
}

import { Container, H3 } from '@ui/index';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import PostDate from './_components/post-date';
import PostItem from './_components/post-item';
import PostTags from './_components/post-tags';

export const metadata = {
  title: 'Blog - Open PRO',
  description: 'Page description',
};

export default function Blog() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  const featuredPost = allPosts[0];
  const posts = allPosts.slice(1);

  return (
    <div>
      <Container>
        <section className="relative">
          <div className="mx-auto">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
              {/*  Page header */}
              <div className="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
                <h1 className="font-display text-sm uppercase tracking-widest text-brand">
                  Welcome to the And Voila Community Blog
                </h1>
              </div>

              {/*  Featured article */}
              <div className="pb-12 md:pb-20">
                <article className="mx-auto grid items-center gap-6 rounded-xl bg-primary-foreground px-6 py-6 md:max-w-none md:grid-cols-2 md:gap-8 lg:gap-12 lg:px-8 lg:py-16 xl:gap-16">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group relative block"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 hidden transform bg-secondary transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 md:block md:translate-x-4 md:translate-y-2"
                      aria-hidden="true"
                    />
                    {featuredPost.image && (
                      <figure className="relative transform overflow-hidden pb-[56.25%] grayscale transition duration-700 ease-out hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 md:-translate-y-2">
                        <Image
                          priority
                          className="absolute inset-0 transform object-cover transition duration-700 ease-out hover:scale-105"
                          src={featuredPost.image}
                          width={540}
                          height={303}
                          alt={featuredPost.title}
                        />
                      </figure>
                    )}
                  </Link>
                  <div>
                    <header>
                      <div className="mb-3">
                        {featuredPost.tags && (
                          <div className="mb-3">
                            <PostTags tags={featuredPost.tags} />
                          </div>
                        )}
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="transition duration-150 ease-in-out hover:text-brand"
                      >
                        <H3 as="h2">{featuredPost.title}</H3>
                      </Link>
                    </header>
                    <p className="mt-6 grow text-lg text-muted-foreground">
                      {featuredPost.summary}
                    </p>
                    <footer className="mt-4 flex items-center text-sm lg:text-base">
                      <div className="mr-4 rounded-full bg-background">
                        <Image
                          className="mx-auto p-1"
                          src={featuredPost.authorImg}
                          width={40}
                          height={40}
                          alt={featuredPost.author}
                        />
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          By {featuredPost.author}
                        </span>
                        <span className="text-brand"> - </span>
                        <span className="text-muted-foreground">
                          <PostDate dateString={featuredPost.publishedAt} />
                        </span>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>

              {/*  Articles list */}
              <div className="mx-auto md:max-w-none">
                {/*  Section title */}
                <h4 className="h4 mb-10 border-b border-gray-700 pb-6">
                  Latest articles
                </h4>

                {/*  Articles container */}
                <div className="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
                  {posts.map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>
              </div>

              {/*  Pagination */}
              <nav
                className="flex justify-center pt-16"
                role="navigation"
                aria-label="Pagination Navigation"
              >
                <ul className="-m-1 inline-flex flex-wrap text-sm font-medium">
                  <li className="m-1">
                    <span className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-4 text-gray-500">
                      Prev
                    </span>
                  </li>
                  <li className="m-1">
                    <Link
                      href="#"
                      className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
                    >
                      1
                    </Link>
                  </li>
                  <li className="m-1">
                    <Link
                      href="#"
                      className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
                    >
                      2
                    </Link>
                  </li>
                  <li className="m-1">
                    <Link
                      href="#"
                      className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
                    >
                      3
                    </Link>
                  </li>
                  <li className="m-1">
                    <span className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-500">
                      ...
                    </span>
                  </li>
                  <li className="m-1">
                    <Link
                      href="#"
                      className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
                    >
                      12
                    </Link>
                  </li>
                  <li className="m-1">
                    <Link
                      href="#"
                      className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-4 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

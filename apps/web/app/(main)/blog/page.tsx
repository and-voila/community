import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import Newsletter from './_components/newsletter';
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
    <>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/*  Page header */}
            <div className="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
              <h1 className="h1" data-aos="fade-up">
                Refreshing news for developers and designers
              </h1>
            </div>

            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <article className="mx-auto grid max-w-sm items-center gap-6 md:max-w-none md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group relative block"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div
                    className="pointer-events-none absolute inset-0 hidden transform bg-gray-800 transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 md:block md:translate-x-4 md:translate-y-2 xl:translate-x-8 xl:translate-y-4"
                    aria-hidden="true"
                  />
                  {featuredPost.image && (
                    <figure className="pb-9/16 md:pb-3/4 lg:pb-9/16 relative h-0 transform overflow-hidden transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 md:-translate-y-2 xl:-translate-y-4">
                      <Image
                        className="absolute inset-0 h-full w-full transform object-cover transition duration-700 ease-out hover:scale-105"
                        src={featuredPost.image}
                        width="540"
                        height="303"
                        alt={featuredPost.title}
                      />
                    </figure>
                  )}
                </Link>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    <div className="mb-3">
                      {featuredPost.tags && (
                        <div className="mb-3">
                          <PostTags tags={featuredPost.tags} />
                        </div>
                      )}
                    </div>
                    <h3 className="h3 mb-2 text-2xl lg:text-3xl">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="transition duration-150 ease-in-out hover:text-gray-100"
                      >
                        {featuredPost.title}
                      </Link>
                    </h3>
                  </header>
                  <p className="grow text-lg text-gray-400">
                    {featuredPost.summary}
                  </p>
                  <footer className="mt-4 flex items-center">
                    <Link href="#">
                      <Image
                        className="mr-4 shrink-0 rounded-full"
                        src={featuredPost.authorImg}
                        width={40}
                        height={40}
                        alt={featuredPost.author}
                      />
                    </Link>
                    <div>
                      <Link
                        href="#"
                        className="font-medium text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                      >
                        {featuredPost.author}
                      </Link>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500">
                        <PostDate dateString={featuredPost.publishedAt} />
                      </span>
                    </div>
                  </footer>
                </div>
              </article>
            </div>

            {/*  Articles list */}
            <div className="mx-auto max-w-sm md:max-w-none">
              {/*  Section title */}
              <h4
                className="h4 mb-10 border-b border-gray-700 pb-6"
                data-aos="fade-up"
              >
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
      <Newsletter />
    </>
  );
}

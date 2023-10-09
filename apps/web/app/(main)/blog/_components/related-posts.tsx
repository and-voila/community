import { FadeIn, FadeInStagger } from '@ui/index';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

const Article = ({ post, color }) => (
  <article className="group relative p-6 text-white">
    <figure>
      <Image
        className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-30 transition duration-700 ease-out group-hover:opacity-75"
        src={post.image}
        alt={post.title}
        width={600}
        height={400}
      />
      <div
        className={`absolute inset-0 ${color} rounded-xl opacity-75 transition duration-700 ease-out group-hover:opacity-50`}
        aria-hidden="true"
      />
    </figure>
    <div className="relative flex h-full flex-col py-4">
      <header className="grow">
        <Link className="hover:underline" href={`/${post.slug}`}>
          <h2 className="mb-2 text-center font-display text-3xl tracking-tight">
            {post.title}
          </h2>
        </Link>
      </header>
    </div>
  </article>
);

export default function RelatedPosts() {
  const posts = allPosts.slice(0, 2);

  return (
    <aside>
      <div className="pb-12 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <h3 className="h4 mb-10 border-b pb-6 font-display text-sm uppercase tracking-widest text-brand">
            Recommended reading
          </h3>

          {/* Articles container */}
          <FadeInStagger className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {posts.map((post, index) => (
              <FadeIn key={post.slug}>
                <Article
                  post={post}
                  color={index % 2 === 0 ? 'bg-brand' : 'bg-alternate'}
                />
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </aside>
  );
}

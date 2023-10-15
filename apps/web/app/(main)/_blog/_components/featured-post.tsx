import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, FadeInStagger, H3 } from '@ui/index';

import { Author } from './author';
import PostTags from './post-tags';

interface FeaturedPostProps {
  featuredPost: {
    slug: string;
    image: string;
    title: string;
    tags?: string[];
    summary: string;
    authorImg: string;
    author: string;
    publishedAt: string;
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ featuredPost }) => {
  const { slug, image, title, tags, summary, authorImg, author, publishedAt } =
    featuredPost;
  return (
    <FadeInStagger className="py-12 md:py-20">
      <article className="mx-auto grid items-center gap-6 rounded-xl bg-primary-foreground p-6 md:max-w-none md:grid-cols-2 md:gap-8 lg:gap-12 lg:px-8 lg:py-16 xl:gap-16">
        <FadeIn>
          <Link href={`/blog/${slug}`} className="group relative block">
            <div
              className="pointer-events-none absolute inset-0 hidden transform rounded-xl bg-secondary transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 md:block md:translate-x-4 md:translate-y-2"
              aria-hidden="true"
            />
            {image && (
              <figure className="relative transform overflow-hidden rounded-xl pb-[56.25%] grayscale transition duration-700 ease-out hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 md:-translate-y-2">
                <Image
                  priority
                  className="absolute inset-0 transform object-cover transition duration-700 ease-out hover:scale-105"
                  src={image}
                  width={540}
                  height={303}
                  alt={title}
                />
              </figure>
            )}
          </Link>
        </FadeIn>
        <FadeIn>
          <header>
            <div className="mb-3">
              {tags && (
                <div className="mb-3">
                  <PostTags tags={tags} />
                </div>
              )}
            </div>
            <Link
              href={`/blog/${slug}`}
              className="line-clamp-2 transition duration-150 ease-in-out hover:text-brand"
            >
              <H3 as="h2">{title}</H3>
            </Link>
          </header>
          <p className="mb-4 mt-6 line-clamp-2 grow text-lg text-muted-foreground">
            {summary}
          </p>
          <Author img={authorImg} name={author} date={publishedAt} />
        </FadeIn>
      </article>
    </FadeInStagger>
  );
};

export default FeaturedPost;

import { FadeIn } from '@ui/index';
import Image from 'next/image';
import Link from 'next/link';

import { Author } from './author';
import PostTags from './post-tags';

export default function PostItem({ ...props }) {
  return (
    <FadeIn>
      <article className="flex h-full flex-col rounded-xl bg-primary-foreground p-4">
        <header>
          {props.image && (
            <Link href={`/blog/${props.slug}`} className="mb-6 block">
              <figure className="pb-9/16 relative -mx-4 -mt-4 overflow-hidden pb-[56.25%]">
                <Image
                  className="absolute inset-0 h-full w-full transform rounded-t-lg object-cover grayscale transition duration-700 ease-out hover:scale-105 hover:grayscale-0"
                  src={props.image}
                  width={352}
                  height={198}
                  alt={props.title}
                />
              </figure>
            </Link>
          )}
          {props.tags && (
            <div className="mb-4">
              <PostTags tags={props.tags} />
            </div>
          )}
          <h2 className="h4 mb-4 line-clamp-2 h-14 font-display text-xl">
            <Link
              href={`/blog/${props.slug}`}
              className="transition duration-150 ease-in-out hover:text-brand"
            >
              {props.title}
            </Link>
          </h2>
        </header>
        <p className="mb-3 line-clamp-3 grow text-base text-muted-foreground">
          {props.summary}
        </p>
        <Author
          img={props.authorImg}
          name={props.author}
          date={props.publishedAt}
        />
      </article>
    </FadeIn>
  );
}

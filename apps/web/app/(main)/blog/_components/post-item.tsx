import Image from 'next/image';
import Link from 'next/link';

import PostDate from './post-date';
import PostTags from './post-tags';

export default function PostItem({ ...props }) {
  return (
    <article className="flex h-full flex-col">
      <header>
        {props.image && (
          <Link href={`/blog/${props.slug}`} className="mb-6 block">
            <figure className="pb-9/16 relative overflow-hidden rounded-sm pb-[56.25%]">
              <Image
                className="absolute inset-0 transform object-cover transition duration-700 ease-out hover:scale-105"
                src={props.image}
                width={352}
                height={198}
                alt={props.title}
              />
            </figure>
          </Link>
        )}
        {props.tags && (
          <div className="mb-3">
            <PostTags tags={props.tags} />
          </div>
        )}
        <h3 className="h4 mb-2">
          <Link
            href={`/blog/${props.slug}`}
            className="transition duration-150 ease-in-out hover:text-gray-100"
          >
            {props.title}
          </Link>
        </h3>
      </header>
      <p className="grow text-lg text-gray-400">{props.summary}</p>
      <footer className="mt-4 flex items-center">
        <Link href="#">
          <Image
            className="mr-4 shrink-0 rounded-full"
            src={props.authorImg}
            width={40}
            height={40}
            alt={props.author}
          />
        </Link>
        <div className="font-medium">
          <Link
            href="#"
            className="text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
          >
            {props.author}
          </Link>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500">
            <PostDate dateString={props.publishedAt} />
          </span>
        </div>
      </footer>
    </article>
  );
}

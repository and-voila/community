import { useMDXComponent } from 'next-contentlayer/hooks';

import PostImage from './image';
import PostLink from './link';

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
};

interface PostMdxProps {
  code: string;
}

export function PostMdx({ code }: PostMdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-lg prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-p:leading-normal prose-a:font-normal prose-a:text-brand prose-a:underline hover:prose-a:no-underline prose-blockquote:border-l-2 prose-blockquote:border-brand prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-muted-foreground prose-strong:font-medium prose-strong:text-foreground">
      <Component components={{ ...mdxComponents }} />
    </article>
  );
}

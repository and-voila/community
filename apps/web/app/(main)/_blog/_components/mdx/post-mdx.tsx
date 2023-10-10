import { FadeIn } from '@ui/index';
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
    <article className="prose prose-lg prose-invert mx-auto text-muted-foreground prose-headings:text-foreground prose-h2:text-5xl prose-h3:text-4xl prose-h4:text-3xl prose-h5:text-2xl prose-h6:text-xl prose-p:leading-relaxed prose-a:font-bold prose-a:text-brand prose-a:underline prose-a:underline-offset-4 hover:prose-a:no-underline prose-blockquote:border-l-2 prose-blockquote:border-brand prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-muted-foreground prose-strong:font-bold prose-strong:text-foreground">
      <FadeIn>
        <Component components={{ ...mdxComponents }} />
      </FadeIn>
    </article>
  );
}

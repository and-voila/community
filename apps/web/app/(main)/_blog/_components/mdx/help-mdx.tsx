import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {};

interface HelpMdxProps {
  code: string;
}

export function HelpMdx({ code }: HelpMdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-lg prose-invert max-w-none text-gray-400 prose-headings:text-gray-200 prose-p:leading-normal prose-a:font-normal prose-a:text-gray-200 prose-a:underline hover:prose-a:no-underline prose-blockquote:border-l-2 prose-blockquote:border-gray-200 prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-gray-400 prose-strong:font-medium prose-strong:text-gray-200 prose-ul:list-none prose-ul:pl-0 prose-li:pl-0">
      <Component components={{ ...mdxComponents }} />
    </article>
  );
}

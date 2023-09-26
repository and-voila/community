import { useMDXComponent } from 'next-contentlayer/hooks';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-gray mb-20 dark:prose-invert lg:prose-lg">
      <Component />
    </div>
  );
}

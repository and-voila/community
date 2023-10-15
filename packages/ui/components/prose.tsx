import type { FunctionComponent } from 'react';
import clsx from 'clsx';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <div
      className={clsx(
        'prose prose-gray dark:prose-invert lg:prose-lg prose-headings:font-display prose-p:leading-normal prose-table:mt-6',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;

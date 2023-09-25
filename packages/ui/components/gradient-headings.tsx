import { FC, ReactNode } from 'react';

interface GradientHeadingProps {
  children: ReactNode;
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  as?: keyof JSX.IntrinsicElements;
}

const sizeMap = {
  h1: 'text-3xl sm:text-5xl',
  h2: 'text-2xl sm:text-4xl',
  h3: 'text-2xl sm:text-3xl',
  h4: 'text-xl sm:text-2xl',
  h5: 'text-lg sm:text-xl',
};

export const GradientHeading: FC<GradientHeadingProps> = ({
  children,
  level = 'h2',
  as,
}) => {
  const HeadingTag = as || level;

  return (
    <HeadingTag
      className={`my-2 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text font-display leading-snug text-transparent dark:bg-gradient-to-r dark:from-muted-foreground dark:via-foreground dark:to-muted-foreground sm:leading-normal ${sizeMap[level]}`}
    >
      {children}
    </HeadingTag>
  );
};

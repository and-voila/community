import { FC, ReactNode } from 'react';

interface GradientHeadingProps {
  children: ReactNode;
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  as?: keyof JSX.IntrinsicElements;
}

const sizeMap = {
  h1: 'text-7xl sm:text-8xl',
  h2: 'text-6xl sm:text-7xl',
  h3: 'text-5xl sm:text-6xl',
  h4: 'text-4xl sm:text-5xl',
  h5: 'text-3xl sm:text-4xl',
  h6: 'text-2xl sm:text-3xl',
};

export const GradientHeading: FC<GradientHeadingProps> = ({
  children,
  level = 'h2',
  as,
}) => {
  const HeadingTag = as || level;

  return (
    <HeadingTag
      className={`bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text font-display leading-tight text-transparent dark:bg-gradient-to-r dark:from-muted-foreground dark:via-foreground dark:to-muted-foreground lg:py-3 lg:leading-tighter ${sizeMap[level]}`}
    >
      {children}
    </HeadingTag>
  );
};

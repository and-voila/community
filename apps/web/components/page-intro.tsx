import { FC, ReactNode } from 'react';

import { FadeIn } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';

interface PageIntroProps {
  heading: ReactNode;
  eyebrow: ReactNode;
  description: ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  as?: keyof JSX.IntrinsicElements;
}

const PageIntro: FC<PageIntroProps> = ({
  heading,
  eyebrow,
  description,
  level = 'h2',
  as,
}) => {
  return (
    <FadeIn className="mx-auto max-w-4xl text-center">
      <p className="font-display text-sm uppercase tracking-widest text-brand">
        {eyebrow}
      </p>
      <GradientHeading level={level} as={as}>
        {heading}
      </GradientHeading>
      <p className="mx-auto mt-6 max-w-3xl space-y-6 text-base text-muted-foreground lg:text-lg">
        {description}
      </p>
    </FadeIn>
  );
};

export default PageIntro;

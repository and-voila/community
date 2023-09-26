import { FC, ReactNode } from 'react';

import { FadeIn } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';

interface SectionIntroProps {
  centered?: boolean;
  eyebrow: ReactNode;
  heading: ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  as?: keyof JSX.IntrinsicElements;
  description: ReactNode;
}

const SectionIntro: FC<SectionIntroProps> = ({
  centered = false,
  eyebrow,
  heading,
  level = 'h2',
  as,
  description,
}) => {
  return (
    <FadeIn className={`max-w-5xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="font-display text-sm uppercase tracking-widest text-brand">
        {eyebrow}
      </p>
      <GradientHeading level={level} as={as}>
        {heading}
      </GradientHeading>
      <p
        className={`mt-6 max-w-3xl space-y-6 text-base text-muted-foreground lg:text-lg ${
          centered ? 'mx-auto text-center' : ''
        }`}
      >
        {description}
      </p>
    </FadeIn>
  );
};

export default SectionIntro;

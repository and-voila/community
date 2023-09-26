import Link from 'next/link';
import React from 'react';

import { FadeIn, FadeInStagger } from '@/components/fade-in';
import { GradientHeading } from '@/components/gradient-headings';

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqComponentProps {
  faqs: Faq[];
}

const FaqComponent: React.FC<FaqComponentProps> = ({ faqs }) => {
  return (
    <div className="mx-auto py-16 sm:py-24">
      <FadeIn>
        <GradientHeading level="h2">Frequently asked questions</GradientHeading>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg">
          Have a question that&apos;s not covered here? No problem, reach out
          via our Contact page or just{' '}
          <Link
            href="/contact"
            className="font-medium text-brand hover:underline hover:underline-offset-4"
            aria-label="Contact us"
          >
            send us an email
          </Link>{' '}
          and we’ll get back to you.
        </p>
      </FadeIn>
      <div className="mt-20">
        <FadeInStagger className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map((faq) => (
            <FadeIn key={faq.id}>
              <div className="font-display text-lg text-foreground">
                {faq.question}
              </div>
              <div className="mt-2 text-base text-muted-foreground">
                {faq.answer}
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
};

export default FaqComponent;

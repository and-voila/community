import { Metadata } from 'next';
import { Suspense } from 'react';

import { Carousel } from '@/components/carousel';
import { ThreeItemGrid } from '@/components/grid/three-items';
import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'Roast Shop';
  const description =
    'Our roasts will give you some much needed firepower to supercharge your digital marketing. Fun, fast, and friggin fabulous! No gimmicks or upsells, just heat.';

  const url = `${SITE_URL}/shop`;

  const metadata = {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
      url,
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
    },
  };

  return metadata;
}

export default async function ShopPage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
      </Suspense>
    </>
  );
}

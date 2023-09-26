import { Metadata } from 'next';

import { Container } from '@/components/container';
import Unlimited from '@/components/unlimited/unlimited';
import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'Unlimited Design';
  const description =
    'What could you achieve if an award-winning digital marketing agency had your back? Get an unlimited package from And Voila today and get the results you need.';

  const url = `${SITE_URL}/unlimited`;

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

export default async function UnlimitedPage() {
  return (
    <Container>
      <Unlimited />
    </Container>
  );
}

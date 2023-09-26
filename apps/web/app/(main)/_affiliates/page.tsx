import { Metadata } from 'next';

import AffiliatesHero from '@/components/affiliates/affilates-hero';
import AffiliatesBenefits from '@/components/affiliates/affiliates-benefits';
import AffiliatesContent from '@/components/affiliates/affiliates-content';
import AffiliatesFeatures from '@/components/affiliates/affiliates-features';
import { Container } from '@/components/container';
import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'Affiliate Program';
  const description =
    'Earn up to 50% commission on your first roast and up to 40% for lifetime roasts. And Voila is the hottest affiliate program on the web with 120 day cookies.';

  const url = `${SITE_URL}/affiliates`;

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

export default async function AffiliatesPage() {
  return (
    <Container>
      <AffiliatesHero />
      <AffiliatesContent />
      <AffiliatesBenefits />
      <AffiliatesFeatures />
    </Container>
  );
}

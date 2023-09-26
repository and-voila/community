import { Metadata } from 'next';

import { Container } from '@/components/container';
import LandingCarousel from '@/components/roasts/roasts-carousel';
import LandingClients from '@/components/roasts/roasts-clients';
import Collections from '@/components/roasts/roasts-collections';
import LandingCommunity from '@/components/roasts/roasts-community';
import LandingCta from '@/components/roasts/roasts-cta';
import LandingHero from '@/components/roasts/roasts-hero';
import LandingHowItWorks from '@/components/roasts/roasts-how-it-works';
import LandingIdentity from '@/components/roasts/roasts-identity';
import LandingProgress from '@/components/roasts/roasts-progress';
import LandingRelief from '@/components/roasts/roasts-relief';
import LandingSummary from '@/components/roasts/roasts-summary';
import { SITE_URL } from '@/lib/utils';

export function generateMetadata(): Metadata {
  const title = 'Roasts';
  const description =
    "Want to improve your marketing performance? Check out our roasts, they're like digital marketing audits. Get one to turn things around and light up your ROI.";

  const url = `${SITE_URL}/roasts`;

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

export default async function HomePage() {
  return (
    <Container>
      <LandingHero />
      <LandingHowItWorks />
      <LandingClients />
      <LandingSummary />
      <LandingRelief />
      <LandingCarousel />
      <LandingIdentity />
      <Collections />
      <LandingCommunity />
      <LandingProgress />
      <LandingCta />
    </Container>
  );
}

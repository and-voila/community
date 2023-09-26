import { Metadata } from 'next';

import ContactDetails from '@/components/contact/contact-details';
import { Container } from '@/components/container';
import { SITE_URL } from '@/lib/utils';

export function generateMetadata(): Metadata {
  const title = 'Contact';
  const description =
    "Looking to contact And Voila? Drop us a line or hit us up on Discord. We're here to help and look forward to hearing from you. We respond in a day or so. 👋🏾";

  const url = `${SITE_URL}/contact`;

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

export default async function ContactPage() {
  return (
    <div>
      <Container>
        <ContactDetails />
      </Container>
    </div>
  );
}

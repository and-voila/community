import 'ui/styles/globals.css';

import { cn } from '@ui/index';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

import { cal, inter } from '@/styles/fonts';

import { Providers } from './providers';

const title = 'Write by And Voila';
const description =
  'The Platforms Starter Kit is a full-stack Next.js app with multi-tenancy and custom domain support. Built with Next.js App Router, Vercel Postgres and the Vercel Domains API.';
const image = '/images/open-graph.gif';

export const metadata: Metadata = {
  title,
  description,
  icons: ['https://vercel.pub/favicon.ico'],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
    creator: '@vercel',
  },
  metadataBase: new URL('https://vercel.pub'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(cal.variable, inter.variable)}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

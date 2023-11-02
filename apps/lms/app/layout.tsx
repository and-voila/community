import 'ui/styles/globals.css';

import type { Metadata } from 'next';
import { GeistMono, GeistSans } from 'geist/font';

import { Providers } from './ui/providers/providers';

export const metadata: Metadata = {
  title: 'And Voila Labs',
  description:
    'Learn everything there is to know about digital marketing. A members-only LMS for the And Voila Discord community.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple',
      url: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-194x194.png',
      sizes: '194x194',
    },
    {
      rel: 'icon',
      url: '/icons/android-chrome-192x192.png',
      sizes: '194x194',
    },
    {
      rel: 'mask-icon',
      url: '/icons/safari-pinned-tab.svg',
    },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} text-base antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background dark:bg-[#242629]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

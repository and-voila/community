import 'ui/styles/globals.css';

import { ReactNode } from 'react';
import localFont from 'next/font/local';
import Script from 'next/script';
import { ThemeProvider } from '@ui/index';

import { ensureStartsWith } from '@/lib/utils';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';

const monaSans = localFont({
  src: '../../../../public/fonts/mona-sans.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const calSans = localFont({
  src: '../../../../public/fonts/cal-sans.woff2',
  display: 'swap',
  variable: '--font-cal-sans',
});

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, '@')
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, 'https://')
  : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Want to up your marketing game? Join And Voila, a premium digital marketing community on Discord by Rebekah Radice. Get direct access to experts and crush it.',
  keywords: [
    'Exclusive Digital Marketing Community',
    'Digital Marketing Community',
    'Discord Server for Digital Marketers',
    'Digital Marketing Optimization',
    'Rebekah Radice',
  ],
  openGraph: {
    type: 'website',
    title: SITE_NAME!,
    description:
      'Want to up your marketing game? Join And Voila, a premium digital marketing community on Discord by Rebekah Radice. Get direct access to experts and crush it.',
    images: [
      {
        url: '/open-graph.gif',
        width: 1200,
        height: 630,
        alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
      },
    ],
    siteName: SITE_NAME!,
  },
  category: 'digital marketing community',
  robots: {
    follow: false,
    index: false,
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        title: SITE_NAME!,
        description:
          'Want to up your marketing game? Join And Voila, a premium digital marketing community on Discord by Rebekah Radice. Get direct access to experts and crush it.',
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite,
        images: [
          {
            url: '/open-graph.gif',
            alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
          },
        ],
      },
    }),
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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${calSans.variable} text-base antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full">
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
      <Script id="rewardful-script-1">
        {
          "(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');"
        }
      </Script>
      <Script
        id="rewardful-script-2"
        src="https://r.wdfl.co/rw.js"
        data-rewardful="4f2b8a"
        strategy="afterInteractive"
        async
      />
      <Script
        id="rewardful-jquery"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        strategy="afterInteractive"
      />
    </html>
  );
}

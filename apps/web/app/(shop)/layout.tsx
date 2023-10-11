import '@/styles/base.css';

import { ThemeProvider } from '@ui/index';
import localFont from 'next/font/local';
import Script from 'next/script';
import { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import { ShopNavbar } from '@/components/layout/navbar';

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

export default async function ShopLayout({
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
        <ShopNavbar />
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

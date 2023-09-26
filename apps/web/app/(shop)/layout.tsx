import '@/styles/base.css';

import localFont from 'next/font/local';
import { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import { ShopNavbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const monaSans = localFont({
  src: '../fonts/mona-sans.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const calSans = localFont({
  src: '../fonts/cal-sans.woff2',
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
    </html>
  );
}

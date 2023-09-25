import '../../../packages/ui/styles/globals.css';

import localFont from 'next/font/local';

const monaSans = localFont({
  src: '../../../public/fonts/mona-sans.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const calSans = localFont({
  src: '../../../public/fonts/cal-sans.woff2',
  display: 'swap',
  variable: '--font-cal-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${calSans.variable} text-base antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}

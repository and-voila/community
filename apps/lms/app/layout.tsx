import 'ui/styles/globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@ui/index';

import { ModalProvider } from '@/components/modal-provider';
import { ConfettiProvider } from '@/components/providers/confetti-provider';
import { ToastProvider } from '@/components/providers/toaster-provider';

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

export const metadata: Metadata = {
  title: 'Oh And Voila',
  description:
    'Learn everything there is to know about digital marketing. A members-only LMS for the And Voila Discord community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${monaSans.variable} ${calSans.variable} text-base antialiased`}
        suppressHydrationWarning
      >
        <body className="bg-background dark:bg-[#242629]">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ModalProvider />
            <ConfettiProvider />
            <ToastProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

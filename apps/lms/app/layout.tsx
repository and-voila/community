import 'ui/styles/globals.css';

import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@ui/index';
import { GeistMono, GeistSans } from 'geist/font';

import { ModalProvider } from '@/components/modal-provider';
import { ConfettiProvider } from '@/components/providers/confetti-provider';
import { ToastProvider } from '@/components/providers/toaster-provider';

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
        className={`${GeistSans.variable} ${GeistMono.variable} text-base antialiased`}
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

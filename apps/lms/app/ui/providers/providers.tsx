'use client';

import { ReactNode } from 'react';
import { ThemeProvider, Toaster } from '@ui/index';

import { SessionInfo } from '../session-info';
import { TailwindIndicator } from '../tailwind-indicator';
import { ConfettiProvider } from './confetti-provider';
import { ModalProvider } from './modal-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ModalProvider />
      <ConfettiProvider />
      <Toaster />
      <SessionInfo />
      <TailwindIndicator />
      {children}
    </ThemeProvider>
  );
}

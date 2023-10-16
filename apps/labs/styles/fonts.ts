import localFont from 'next/font/local';

export const monaSans = localFont({
  src: '../../../public/fonts/mona-sans.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  preload: true,
});

export const calSans = localFont({
  src: '../../../public/fonts/cal-sans.woff2',
  display: 'swap',
  variable: '--font-cal-sans',
  preload: true,
});

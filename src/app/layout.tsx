import type { Metadata } from 'next';
import './globals.css';

import { Noto_Sans } from 'next/font/google';
import Navbar from '~/components/Navbar';
import ThemeProvider from '~/providers/theme';

const noto_sans = Noto_Sans({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'nua',
  description:
    'Utility applications for everything you need; PDF editing, image modification, writing, and more!',

  metadataBase: new URL('https://nua.vercel.app'),

  icons: [
    {
      url: '/logo/dark/favicon.ico',
      type: 'image/x-icon',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/logo/light/favicon.ico',
      type: 'image/x-icon',
      media: '(prefers-color-scheme: dark)',
    },
  ],

  openGraph: {
    type: 'website',
    images: ['/logo/light/logo1200x628.png'],
  },

  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={noto_sans.className}>
        <ThemeProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex flex-col flex-1 items-center'>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

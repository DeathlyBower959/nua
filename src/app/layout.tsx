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
  title: 'NUA',
  description:
    'Utility applications for everything you need; PDF editing, image modification, writing, and more!',
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
          <div className='flex min-h-screen'>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

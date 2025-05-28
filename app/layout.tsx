import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/theme-context';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ParallaxProviderWrapper from '@/components/providers/parallax-provider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Portfolio - Lionel Rakotomalala',
  description: 'Portfolio de Lionel Rakotomalala - Développeur Fullstack',
  metadataBase: new URL('https://lionel-portfolio.com'),
  openGraph: {
    title: 'Lionel Rakotomalala | Fullstack Developer',
    description: 'Portfolio website of Lionel Rakotomalala, a Fullstack Developer specializing in modern web technologies.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ParallaxProviderWrapper>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ParallaxProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
// Import Google Analytics wrapper with Suspense boundary (required for useSearchParams in Next.js 14)
import GoogleAnalyticsWrapper from '@/components/GoogleAnalyticsWrapper';
import SmoothScroll from '@/components/SmoothScroll';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'myDesigner - Visual Campaign & Branding Studio',
  description: 'Premium visual branding and campaign studio serving businesses, events, and startups. Brand identity, campaign design, and creative services.',
  keywords: 'branding, design, campaign, visual identity, agency, studio',
  icons: {
    icon: '/favicon.png', // Change to favicon.ico if you convert your PNG to ICO format
  },
  openGraph: {
    title: 'myDesigner - Visual Campaign & Branding Studio',
    description: 'Premium visual branding and campaign studio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 - Initializes GA tracking globally with Suspense boundary */}
        <GoogleAnalyticsWrapper />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white">
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen pt-24 md:pt-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

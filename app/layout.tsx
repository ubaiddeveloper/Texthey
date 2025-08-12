import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Text Hey - Booking Appointments Just Got Texty | SMS Appointment Booking',
  description: 'Clients book, reschedule, and pay by text message. No apps needed. Trusted by spas, salons, barbers, and service providers worldwide. Start your free trial today.',
  keywords: 'spa booking software, SMS appointment booking, salon scheduling software, text message booking, appointment management, service business software',
  authors: [{ name: 'Text Hey' }],
  creator: 'Text Hey',
  publisher: 'Text Hey',
  metadataBase: new URL('https://texthey.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://texthey.com',
    siteName: 'Text Hey',
    title: 'Text Hey - Booking Appointments Just Got Texty',
    description: 'Clients book, reschedule, and pay by text message. No apps needed. Trusted by spas, salons, barbers, and service providers worldwide.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Text Hey - SMS Appointment Booking Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@texthey',
    creator: '@texthey',
    title: 'Text Hey - Booking Appointments Just Got Texty',
    description: 'Clients book, reschedule, and pay by text message. No apps needed.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Text Hey',
              url: 'https://texthey.com',
              logo: 'https://texthey.com/logo.png',
              description: 'SMS appointment booking platform for service businesses',
              foundingDate: '2024',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'go@texthey.com',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://twitter.com/texthey',
                'https://linkedin.com/company/texthey',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Text Hey',
              operatingSystem: 'Web-based',
              applicationCategory: 'BusinessApplication',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '127',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                priceValidUntil: '2025-12-31',
                description: 'Free trial available',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
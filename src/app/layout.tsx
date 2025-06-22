import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { PRIMARY_DOMAIN, getOgImageUrl, generateOrganizationSchema } from '@/lib/seo-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'StellarMVP - Transform Ideas into Products | MVP Development Agency',
    template: '%s | StellarMVP'
  },
  description: 'We craft beautiful MVPs that validate your ideas and accelerate your startup journey. Expert web development, landing pages, and full-stack applications delivered in 2-14 days.',
  keywords: [
    'MVP development',
    'startup development',
    'web development',
    'landing pages',
    'product validation',
    'rapid prototyping',
    'full-stack development',
    'startup MVP',
    'web applications',
    'product launch',
    'StellarMVP',
    'idea validation',
    'startup services',
    'fast development'
  ],
  authors: [{ name: 'StellarMVP Team' }],
  creator: 'StellarMVP',
  publisher: 'StellarMVP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(PRIMARY_DOMAIN),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PRIMARY_DOMAIN,
    title: 'StellarMVP - Transform Ideas into Products | MVP Development Agency',
    description: 'We craft beautiful MVPs that validate your ideas and accelerate your startup journey. Expert web development, landing pages, and full-stack applications delivered in 2-14 days.',
    siteName: 'StellarMVP',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'StellarMVP - MVP Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StellarMVP - Transform Ideas into Products',
    description: 'We craft beautiful MVPs that validate your ideas and accelerate your startup journey. From landing pages to full applications in record time.',
    images: [getOgImageUrl('/og-image.png')],
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
    yandex: 'your-yandex-verification-code',
  },
}

// JSON-LD Structured Data with enhanced service catalog
const jsonLd = {
  ...generateOrganizationSchema(),
  offers: {
    '@type': 'Service',
    name: 'MVP Development Services',
    description: 'Landing pages, MVP development, product launch, and continuous development services',
    provider: {
      '@type': 'Organization',
      name: 'StellarMVP'
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'MVP Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Pages',
            description: 'High-converting landing pages delivered in 2 days'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Development',
            description: 'Full-stack web applications delivered in 14 days'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Product Launch',
            description: 'End-to-end product development with deployment and launch support'
          }
        }
      ]
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 
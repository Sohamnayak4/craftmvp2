'use client';

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Additional structured data for the homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'StellarMVP - MVP Development Agency',
            description: 'Transform your ideas into market-ready products with beautiful MVPs delivered in 2-14 days',
            url: 'https://www.stellarmvp.xyz',
            mainEntity: {
              '@type': 'Organization',
              name: 'StellarMVP',
              description: 'MVP development agency specializing in rapid product development'
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.stellarmvp.xyz'
                }
              ]
            }
          })
        }}
      />
      
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  )
} 
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'MVP Development Services',
            description: 'Turn your idea into a market-ready MVP with beautiful design and powerful functionality',
            provider: {
              '@type': 'Organization',
              name: 'StellarMVP'
            },
            serviceType: 'Web Development',
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'MVP Development Timeline',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Landing Pages',
                    description: 'Professional landing pages delivered in 2 days'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Full MVPs',
                    description: 'Complete MVP development delivered in 14 days'
                  }
                }
              ]
            }
          })
        }}
      />
      
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden flex items-center" itemScope itemType="https://schema.org/Organization">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-blue-200 font-medium text-sm mb-8 shadow-lg"
            >
              ⚡ Ship Your MVP in 14 Days
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              itemProp="name"
            >
              Build. Launch.
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Validate.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
              itemProp="description"
            >
              Turn your idea into a market-ready MVP with beautiful design and powerful functionality.
            </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="https://cal.com/soham-nayak-04/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 shadow-2xl hover:shadow-blue-500/25 px-8 py-4"
            >
              Start Your Project
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-all duration-300 bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 px-8 py-4"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-12 lg:gap-16 mt-20 pt-20 pb-20 border-t border-white/20"
          >
            <div className="text-center flex-1 max-w-xs">
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                2 Days
              </div>
              <div className="text-lg text-gray-300 font-medium">
                Landing Pages
              </div>
            </div>
            <div className="text-center flex-1 max-w-xs">
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                14 Days
              </div>
              <div className="text-lg text-gray-300 font-medium">
                Full MVPs
              </div>
            </div>
            <div className="text-center flex-1 max-w-xs">
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-lg text-gray-300 font-medium">
                Client Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
};

export default Hero; 
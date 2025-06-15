'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Brand */}
            <Link href="/" className="inline-flex items-center space-x-2 mb-4" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <div className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">StellarMVP</span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Transforming innovative ideas into market-ready products with speed and precision.
            </p>
            
            {/* Social Link */}
            <div className="flex justify-center mb-6">
              <a
                href="https://x.com/soham_nayak04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} StellarMVP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
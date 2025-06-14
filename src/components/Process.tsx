'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Palette, Code, Rocket } from 'lucide-react'
import Link from 'next/link'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Discovery Call',
      description: 'We start with a detailed consultation to understand your vision, goals, and requirements. No sales pitch - just understanding your needs.',
      duration: '30 minutes'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Planning',
      description: 'We create wireframes, user flows, and technical architecture. You\'ll see exactly what we\'re building before we start coding.',
      duration: '1-2 days'
    },
    {
      number: '03',
      icon: Code,
      title: 'Development',
      description: 'Daily progress updates as we build your product using modern technologies. Regular check-ins ensure we\'re on the right track.',
      duration: '2-14 days'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your product, handle all technical setup, and provide ongoing support to ensure everything runs smoothly.',
      duration: 'Ongoing'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-950 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that gets your product from idea to market with maximum efficiency and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 z-10" />
              )}
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <div className="p-3 bg-blue-500/20 rounded-lg mb-4 inline-block border border-blue-400/20">
                    <step.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">
                    <span className="text-blue-300 text-sm font-medium">{step.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to get started?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your idea to life.
          </p>
          <Link
            href="https://cal.com/soham-nayak-04/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 shadow-xl hover:shadow-blue-500/25 hover:scale-105 px-8 py-4"
          >
            Schedule Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Process 
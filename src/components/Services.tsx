'use client'

import { motion } from 'framer-motion'
import { Rocket, Palette, Code, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Landing Pages',
      description: 'Convert visitors into customers with stunning, high-converting landing pages designed to showcase your product perfectly.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Conversion Focused'],
      timeline: '2 Days'
    },
    {
      icon: Code,
      title: 'MVP Development',
      description: 'Full-stack web applications built with modern technologies. Perfect for validating your ideas and getting to market fast.',
      features: ['Full-Stack Development', 'Database Integration', 'User Authentication', 'Admin Dashboard'],
      timeline: '2 Weeks'
    },
    {
      icon: Rocket,
      title: 'Product Launch',
      description: 'End-to-end product development with deployment, monitoring, and launch support to ensure your success.',
      features: ['Production Deployment', 'Performance Monitoring', 'Bug Fixes', 'Launch Support'],
      timeline: '3 Weeks'
    },
    {
      icon: Zap,
      title: 'Continuous Development',
      description: 'Ongoing development and feature additions to scale your product based on user feedback and market demands.',
      features: ['Feature Development', 'Performance Optimization', 'Regular Updates', 'Priority Support'],
      timeline: 'Ongoing'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What We <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Craft</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial concept to market-ready product, we handle every step of your journey with precision and speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors border border-blue-400/20">
                  <service.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <span className="text-sm text-blue-300 font-medium px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">
                      {service.timeline}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 
'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'
import { Button } from './ui/Button'

const Pricing = () => {
  const plans = [
    {
      name: 'Landing Page',
      originalPrice: 299,
      price: 99,
      savings: 67,
      timeline: '2 Days',
      description: 'Perfect for validating your idea with a stunning landing page',
      features: [
        'Custom responsive design',
        'Mobile-first approach',
        'SEO optimization',
        'Contact form integration',
        'Analytics setup',
        'Fast loading performance',
        '1 revision round',
        'Domain setup assistance'
      ],
      popular: false,
      icon: Star
    },
    {
      name: 'Standard MVP',
      originalPrice: 1999,
      price: 999,
      savings: 50,
      timeline: '2 Weeks',
      description: 'Full-featured MVP to test your concept with real users',
      features: [
        'Custom web application',
        'User authentication',
        'Database integration',
        'Admin dashboard',
        'Payment integration',
        'Email notifications',
        'Responsive design',
        'API development',
        '3 revision rounds',
        'Deployment & hosting setup',
        '30 days bug fixes',
        'Technical documentation'
      ],
      popular: true,
      icon: Zap
    },
    {
      name: 'Continuous Development',
      originalPrice: 1599,
      price: 499,
      savings: 69,
      timeline: 'Monthly',
      description: 'Ongoing development to scale your product based on feedback',
      features: [
        'Feature development',
        'Performance optimization',
        'Bug fixes & maintenance',
        'Weekly progress calls',
        'Priority support',
        'Analytics & monitoring',
        'A/B testing setup',
        'SEO improvements',
        'Security updates',
        'Backup & recovery',
        'Technical consulting',
        'Unlimited revisions'
      ],
      popular: false,
      icon: Zap,
      isMonthly: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="text-primary-400">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the package that fits your needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-card p-8 ${
                plan.popular 
                  ? 'ring-2 ring-primary-500 bg-gradient-to-b from-primary-500/10 to-transparent' 
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  <plan.icon className="h-8 w-8 text-primary-400" />
                </div>
              </div>

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                
                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    {plan.isMonthly && <span className="text-gray-400">/month</span>}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gray-500 line-through text-lg">
                      ${plan.originalPrice}{plan.isMonthly ? '/month' : ''}
                    </span>
                    <span className="text-green-400 text-sm font-medium">
                      Save {plan.savings}%
                    </span>
                  </div>
                  <div className="text-primary-400 font-medium">
                    Delivery: {plan.timeline}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                className={`w-full ${plan.popular ? 'bg-primary-600 hover:bg-primary-700' : ''}`}
              >
                <a
                  href="https://cal.com/soham-nayak-04/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's have a quick call to discuss your project and recommend the best approach.
            </p>
            <Button asChild size="lg">
              <a
                href="https://cal.com/soham-nayak-04/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 
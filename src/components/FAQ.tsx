'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What technologies do you use to build MVPs?',
      answer: 'We use modern, proven technologies including Next.js, React, TypeScript, Tailwind CSS, Prisma, and various databases like PostgreSQL and Supabase. For hosting, we typically use Vercel or AWS. All our tech choices prioritize speed, scalability, and maintainability.'
    },
    {
      question: 'Can I request changes during development?',
      answer: 'Absolutely! We include revision rounds in all our packages and provide daily progress updates. For Landing Pages, you get 1 revision round. For Standard MVP, you get 3 revision rounds. For Continuous Development, revisions are unlimited. We want to ensure you\'re completely satisfied with the final product.'
    },
    {
      question: 'Do you provide hosting and domain setup?',
      answer: 'Yes, we handle the complete technical setup including hosting deployment, domain configuration, SSL certificates, and CDN setup. We typically use Vercel for frontend hosting and AWS or Supabase for backend services. We\'ll also provide documentation for managing your hosting account.'
    },
    {
      question: 'What if I\'m not satisfied with the final product?',
      answer: 'Your satisfaction is our priority. We provide regular check-ins during development to ensure we\'re meeting your expectations. If you\'re not satisfied, we offer revision rounds to address any concerns. For Standard MVP packages, we also include 30 days of bug fixes to ensure everything works perfectly.'
    },
    {
      question: 'How do we communicate during the project?',
      answer: 'We maintain transparent communication throughout the project. You\'ll receive daily progress updates via email or Slack, with screenshots and live preview links. We schedule weekly calls for larger projects and are always available for quick questions. You\'ll have direct access to the development team.'
    },
    {
      question: 'Can you integrate with third-party services?',
      answer: 'Yes, we can integrate with most popular third-party services including payment processors (Stripe, PayPal), email services (SendGrid, Mailgun), CRM systems, analytics tools, social media APIs, and more. We\'ll discuss your specific integration needs during the discovery call.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes, we offer different levels of post-launch support. Standard MVP includes 30 days of bug fixes. Our Continuous Development package provides ongoing feature development, maintenance, and priority support. We can also arrange custom support packages based on your specific needs.'
    },
    {
      question: 'What\'s the difference between an MVP and a landing page?',
      answer: 'A landing page is a static website designed to showcase your product and collect leads - perfect for idea validation. An MVP (Minimum Viable Product) is a functional web application with user accounts, databases, and core features that users can actually use. MVPs are ideal for testing your business model with real users.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-primary-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our process, technology, or pricing? We've got answers.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-primary-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              We're here to help! Schedule a free consultation to discuss your project and get all your questions answered.
            </p>
            <a
              href="https://cal.com/soham-nayak-04/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Schedule Free Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 
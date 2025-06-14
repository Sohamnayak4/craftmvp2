'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Play, ExternalLink, Code, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/Button'

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'BookVault',
      category: 'MVP',
      description: 'A used book reselling platform that allows users to buy and sell used books.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      timeline: '10 days',
      type: 'MVP',
      videoUrl: '/Recording 2025-06-14 190001.mp4',
      posterImage: 'https://via.placeholder.com/800x450/1e40af/ffffff?text=BookVault+Demo',
      features: ['Dashboard Analytics', 'Real-time Updates', 'Book Management', 'User Management']
    },
    {
      id: 2,
      title: 'LuxeDrive',
      category: 'MVP',
      description: 'A car rental platform that allows users to rent cars for a day, week, or month.',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'PayPal'],
      timeline: '10 days',
      type: 'MVP',
      videoUrl: '/Screen Recording 2025-06-13 110055.mp4',
      posterImage: 'https://via.placeholder.com/800x450/059669/ffffff?text=LuxeDrive+Demo',
      features: ['Product Catalog', 'Vendor Management', 'Order Tracking', 'Payment Integration', 'Real-time Updates']
    },
    {
      id: 3,
      title: 'Clipper',
      category: 'MVP',
      description: 'A smart clipboard which saves everything you copy to a database and allows you to search for it and use it later.',
      tech: ['Next.js', 'Supabase', 'Tailwind'],
      timeline: '1 week',
      type: 'SaaS',
      videoUrl: '/Recording 2025-06-14 224435.mp4',
      posterImage: 'https://via.placeholder.com/800x450/7c3aed/ffffff?text=Clipper+Landing',
      features: ['Smart Clipboard', 'Searchable Database', 'AI-powered Search', 'User Management']
    },
    {
      id: 4,
      title: 'ModernUI',
      category: 'UI Library',
      description: 'A modern UI library for React, Vue, and Angular.',
      tech: ['React', 'Tailwind', 'Shadcn'],
      timeline: '1 week',
      type: 'UI Library',
      videoUrl: '/Screen Recording 2025-06-13 111403.mp4',
      posterImage: 'https://via.placeholder.com/800x450/dc2626/ffffff?text=ModernUI+Demo',
      features: ['Course Management', 'Video Streaming', 'Certificates', 'Student Analytics']
    },
    // {
    //   id: 5,
    //   title: 'TaskMaster',
    //   category: 'Productivity',
    //   description: 'Advanced project management tool with team collaboration, time tracking, and automated workflows.',
    //   tech: ['React', 'Express.js', 'PostgreSQL', 'Socket.io'],
    //   timeline: '10 days',
    //   type: 'MVP',
    //   videoUrl: '/videos/taskmaster-demo.mp4',
    //   posterImage: 'https://via.placeholder.com/800x450/0891b2/ffffff?text=TaskMaster+Demo',
    //   features: ['Project Planning', 'Team Chat', 'Time Tracking', 'File Sharing']
    // }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  return (
    <section id="portfolio" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects, real results. See how we've helped founders and startups bring their ideas to life.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Project Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Project</span>
              <span className="text-white font-medium">{currentProject + 1} of {projects.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={prevProject}
                className="p-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={nextProject}
                className="p-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Main Project Display */}
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Video */}
            <div className="relative group">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <AnimatePresence initial={false}>
                  <motion.video
                    key={currentProject}
                    src={project.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onError={(e) => {
                      // Fallback to poster image if video fails to load
                      const target = e.target as HTMLVideoElement
                      target.style.display = 'none'
                      const img = document.createElement('img')
                      img.src = project.posterImage
                      img.alt = `${project.title} Demo`
                      img.className = 'w-full h-full object-cover'
                      target.parentNode?.appendChild(img)
                    }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Project type badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full shadow-lg">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <span className="text-blue-300 text-sm font-medium px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">
                    {project.timeline}
                  </span>
                </div>
                <p className="text-blue-300 font-medium mb-4">{project.category}</p>
                <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-white font-semibold mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="flex items-center space-x-4 pt-4">
                <Button className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>View Live</span>
                </Button>
                <Button variant="secondary" className="flex items-center space-x-2">
                  <Code className="h-4 w-4" />
                  <span>Case Study</span>
                </Button>
              </div> */}
            </div>
          </motion.div>

          {/* Project Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio 
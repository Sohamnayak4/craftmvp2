import { MetadataRoute } from 'next'
import { PRIMARY_DOMAIN } from '@/lib/seo-utils'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = PRIMARY_DOMAIN
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 
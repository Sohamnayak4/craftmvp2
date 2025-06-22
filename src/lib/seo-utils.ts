// Primary domain configuration
export const PRIMARY_DOMAIN = 'https://www.stellarmvp.xyz'

// Alternative domains that should redirect
export const ALTERNATIVE_DOMAINS = [
  'https://craftmvp.xyz',
  'https://www.craftmvp.xyz',
  'https://stellarmvp.xyz'
]

/**
 * Get the canonical URL for a given path
 * Always returns the primary domain version
 */
export function getCanonicalUrl(path: string = ''): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  return cleanPath 
    ? `${PRIMARY_DOMAIN}/${cleanPath}` 
    : PRIMARY_DOMAIN
}

/**
 * Get Open Graph image URL with correct domain
 */
export function getOgImageUrl(imagePath: string = '/og-image.png'): string {
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  return `${PRIMARY_DOMAIN}/${cleanPath}`
}

/**
 * Check if the current request is from the primary domain
 * Useful for server-side redirects
 */
export function isPrimaryDomain(host: string): boolean {
  const primaryHost = PRIMARY_DOMAIN.replace('https://', '').replace('http://', '')
  return host === primaryHost
}

/**
 * Generate structured data with correct URLs
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StellarMVP',
    url: PRIMARY_DOMAIN,
    logo: getOgImageUrl('/og-image.png'),
    description: 'MVP development agency that transforms ideas into market-ready products',
    foundingDate: '2023',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://cal.com/soham-nayak-04/30min'
    },
    sameAs: [
      'https://twitter.com/stellarmvp',
      'https://linkedin.com/company/stellarmvp'
    ]
  }
}

/**
 * SEO metadata generator with consistent URLs
 */
export function generateSEOMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.png'
}: {
  title?: string
  description?: string
  path?: string
  ogImage?: string
}) {
  const canonicalUrl = getCanonicalUrl(path)
  const ogImageUrl = getOgImageUrl(ogImage)
  
  return {
    title: title || 'StellarMVP - Transform Ideas into Products | MVP Development Agency',
    description: description || 'We craft beautiful MVPs that validate your ideas and accelerate your startup journey. Expert web development, landing pages, and full-stack applications delivered in 2-14 days.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title || 'StellarMVP - Transform Ideas into Products | MVP Development Agency',
      description: description || 'We craft beautiful MVPs that validate your ideas and accelerate your startup journey.',
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'StellarMVP - MVP Development Agency',
        },
      ],
    },
    twitter: {
      images: [ogImageUrl],
    },
  }
} 
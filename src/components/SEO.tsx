interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
  structuredData?: object
}

export default function SEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.png',
  canonicalUrl,
  structuredData
}: SEOProps) {
  return (
    <>
      {title && (
        <title>{title} | StellarMVP</title>
      )}
      
      {description && (
        <meta name="description" content={description} />
      )}
      
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}
      
      {/* Open Graph */}
      {title && (
        <meta property="og:title" content={`${title} | StellarMVP`} />
      )}
      
      {description && (
        <meta property="og:description" content={description} />
      )}
      
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {canonicalUrl && (
        <meta property="og:url" content={canonicalUrl} />
      )}
      
      {/* Twitter */}
      {title && (
        <meta name="twitter:title" content={`${title} | StellarMVP`} />
      )}
      
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </>
  )
} 
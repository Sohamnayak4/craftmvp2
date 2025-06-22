# SEO Domain Issues - Debug & Testing Guide

## 🚨 **Problem Identified**
Having multiple domains (`craftmvp.xyz` and `stellarmvp.xyz`) pointing to the same site causes:
- Open Graph image loading issues
- Duplicate content penalties
- Search engine confusion
- Inconsistent canonical URLs

## ✅ **Solutions Implemented**

### 1. **301 Redirects (next.config.js)**
All alternative domains now redirect to `https://www.stellarmvp.xyz`:
- `craftmvp.xyz` → `https://www.stellarmvp.xyz`
- `www.craftmvp.xyz` → `https://www.stellarmvp.xyz`
- `stellarmvp.xyz` → `https://www.stellarmvp.xyz`

### 2. **Centralized Domain Management**
Created `/src/lib/seo-utils.ts` with:
- Single source of truth for primary domain
- Consistent URL generation functions
- Dynamic canonical URL handling
- Open Graph image URL standardization

### 3. **Updated All References**
- Metadata base URL
- Open Graph URLs
- Twitter card images
- Structured data URLs
- Sitemap URLs
- Canonical URLs

## 🧪 **Testing Your Fixes**

### 1. **Test Domain Redirects**
```bash
# Test redirects (should all go to www.stellarmvp.xyz)
curl -I https://craftmvp.xyz
curl -I https://www.craftmvp.xyz  
curl -I https://stellarmvp.xyz
```

### 2. **Test Open Graph Images**
Use these tools to verify OG images load correctly:

**Facebook Debugger:**
- URL: https://developers.facebook.com/tools/debug/
- Test: `https://www.stellarmvp.xyz`
- Should show: `https://www.stellarmvp.xyz/og-image.png`

**Twitter Card Validator:**
- URL: https://cards-dev.twitter.com/validator
- Test: `https://www.stellarmvp.xyz`

**LinkedIn Post Inspector:**
- URL: https://www.linkedin.com/post-inspector/
- Test: `https://www.stellarmvp.xyz`

### 3. **Test Search Console**
```
1. Add www.stellarmvp.xyz to Google Search Console
2. Submit sitemap: https://www.stellarmvp.xyz/sitemap.xml
3. Test robots.txt: https://www.stellarmvp.xyz/robots.txt
4. Monitor for crawl errors
```

### 4. **Verify Canonical URLs**
Check page source for:
```html
<link rel="canonical" href="https://www.stellarmvp.xyz/" />
<meta property="og:url" content="https://www.stellarmvp.xyz" />
<meta property="og:image" content="https://www.stellarmvp.xyz/og-image.png" />
```

## 🔧 **Manual Testing Steps**

### 1. **Deploy Changes**
```bash
npm run build
npm run start
# or deploy to your hosting platform
```

### 2. **Clear Social Media Caches**
After deployment, force refresh social media caches:

**Facebook:**
1. Go to https://developers.facebook.com/tools/debug/
2. Enter: `https://www.stellarmvp.xyz`
3. Click "Scrape Again" to refresh cache

**Twitter:**
1. Tweet/share your URL
2. Check if card displays correctly

**LinkedIn:**
1. Create a test post with your URL
2. Verify preview shows correct image

### 3. **Test Different Browsers**
- Chrome (check OG preview in DevTools)
- Firefox
- Safari
- Mobile browsers

## 📊 **Expected Results**

### ✅ **Working Correctly:**
- All domains redirect to `www.stellarmvp.xyz`
- OG images load from `https://www.stellarmvp.xyz/og-image.png`
- Social sharing shows correct preview
- No duplicate content warnings in Search Console
- Consistent canonical URLs across all pages

### ❌ **Still Issues? Check:**
- DNS propagation (can take 24-48 hours)
- CDN/hosting cache clearing
- Social media cache refresh
- Browser cache clearing

## 🚀 **Next Steps**

1. **Monitor Search Console** for crawl errors
2. **Set up Google Analytics** with proper domain tracking
3. **Update social media profiles** to use primary domain
4. **Monitor rankings** for target keywords
5. **Submit updated sitemap** to search engines

## 📱 **Additional Recommendations**

### Domain Strategy:
- **Primary:** `www.stellarmvp.xyz` (keep this)
- **Redirect:** All other variations
- **Consider:** If you prefer `craftmvp.xyz`, swap the primary domain in `/src/lib/seo-utils.ts`

### Monitoring:
- Set up uptime monitoring for redirects
- Monitor Core Web Vitals
- Track organic search traffic
- Watch for 404 errors from old domain references

---

**Important:** After deploying these changes, allow 24-48 hours for full DNS propagation and search engine cache updates. 
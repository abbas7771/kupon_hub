// SEO Metadata for Hostinger Coupons
const SEO_DESCRIPTIONS = {
  PREMIUM20: {
    title: 'Hostinger Premium Web Hosting 20% Off - KuponHub Coupon',
    description: 'Save 20% on Hostinger Premium Web Hosting. Get 3 websites, 25GB SSD, 25,000 visitors/month. Use coupon code PREMIUM20 at checkout.',
    keywords: 'Hostinger coupon, web hosting discount, Hostinger Premium, 20% off hosting'
  },
  BUSINESS20: {
    title: 'Hostinger Business Web Hosting 20% Discount - KuponHub',
    description: 'Hostinger Business hosting 20% off coupon. 50 websites, 50GB NVMe, 100,000 visitors/month. Code: BUSINESS20',
    keywords: 'Hostinger Business hosting, business web hosting coupon, Hostinger discount'
  },
  CLOUD20: {
    title: 'Hostinger Cloud Startup VPS 20% Off - KuponHub Coupon Code',
    description: 'Get 20% discount on Hostinger Cloud Startup. 100 websites, 100GB NVMe, 4GB RAM. Perfect for growing businesses. Coupon: CLOUD20',
    keywords: 'Hostinger Cloud Startup, VPS hosting coupon, cloud hosting discount, Hostinger VPS'
  },
  CLOUDPRO20: {
    title: 'Hostinger Cloud Professional 20% Discount - KuponHub',
    description: 'Save 20% on Hostinger Cloud Professional hosting. 100 websites, 200GB NVMe, 6GB RAM, 5 CPU. Ideal for enterprise. Code: CLOUDPRO20',
    keywords: 'Hostinger Cloud Professional, enterprise hosting, cloud server coupon, professional hosting'
  },
  CLOUDBIZ20: {
    title: 'Hostinger Cloud Enterprise 20% Off - Premium Cloud Hosting Coupon',
    description: 'Hostinger Cloud Enterprise 20% discount. 100 websites, 300GB NVMe, 12GB RAM, unlimited visitors. Enterprise-grade solution. CLOUDBIZ20',
    keywords: 'Hostinger Cloud Enterprise, enterprise hosting, unlimited bandwidth, high-performance cloud'
  },
  AGENCY20: {
    title: 'Hostinger Agency Startup 20% Coupon - White Label Hosting',
    description: 'Save 20% on Hostinger Agency Startup. 100 websites, 300GB NVMe, 10 email per site, 1 year free. Reseller hosting coupon. AGENCY20',
    keywords: 'Hostinger Agency hosting, white label hosting, reseller hosting coupon, agency plan'
  },
  AGENCYPR20: {
    title: 'Hostinger Agency Professional 20% Off - Reseller Hosting Discount',
    description: 'Hostinger Agency Professional 20% discount coupon. 200 websites, 500GB NVMe, 20 email/site. Perfect for agencies. Code: AGENCYPR20',
    keywords: 'Hostinger Agency Professional, reseller hosting, agency web hosting, white label'
  },
  AGENCYGRO20: {
    title: 'Hostinger Agency Growth 20% Coupon - Premium Reseller Plan',
    description: 'Get 20% off Hostinger Agency Growth hosting. 300 websites, 700GB NVMe, 30 email/site. Enterprise reseller solution. AGENCYGRO20',
    keywords: 'Hostinger Agency Growth, large reseller hosting, multi-account hosting, agency growth'
  },
  VPS120: {
    title: 'Hostinger VPS KVM 1 20% Off - Affordable VPS Hosting Coupon',
    description: 'Save 20% on Hostinger VPS KVM 1. 1 vCPU, 4GB RAM, 50GB NVMe, 4TB bandwidth. Entry-level VPS. Code: VPS120',
    keywords: 'Hostinger VPS, VPS hosting coupon, affordable VPS, VPS server'
  },
  VPS220: {
    title: 'Hostinger VPS KVM 2 20% Discount - Mid-Range VPS Hosting',
    description: 'Hostinger VPS KVM 2 20% off coupon. 2 vCPU, 8GB RAM, 100GB NVMe. Ideal for medium websites. VPS220',
    keywords: 'Hostinger VPS KVM 2, VPS hosting, managed VPS, VPS discount'
  },
  VPS420: {
    title: 'Hostinger VPS KVM 4 20% Off - High-Performance VPS Hosting',
    description: 'Get 20% discount on Hostinger VPS KVM 4. 4 vCPU, 16GB RAM, 200GB NVMe. High-performance VPS. Code: VPS420',
    keywords: 'Hostinger VPS KVM 4, high-performance VPS, powerful VPS hosting, dedicated server'
  },
  VPS820: {
    title: 'Hostinger VPS KVM 8 20% Coupon - Enterprise VPS Hosting',
    description: 'Save 20% on Hostinger VPS KVM 8. 8 vCPU, 32GB RAM, 400GB NVMe, 32TB bandwidth. Enterprise VPS. VPS820',
    keywords: 'Hostinger VPS KVM 8, enterprise VPS, high-end VPS, enterprise hosting'
  },
  BUILD20: {
    title: 'Hostinger Premium Website Builder 20% Off - AI Builder Coupon',
    description: 'Hostinger Premium Website Builder 20% discount. AI website builder, free domain, 3 sites, SSL. Coupon: BUILD20',
    keywords: 'Hostinger website builder, AI website builder, website builder coupon, free website'
  },
  BUILDBIZ20: {
    title: 'Hostinger Business Website Builder 20% Discount - AI Creator',
    description: 'Get 20% off Hostinger Business Website Builder. 50 websites, AI creator, free domain. Perfect for businesses. BUILDBIZ20',
    keywords: 'website builder, Hostinger AI builder, no-code website builder, business website'
  },
  HORIZON20: {
    title: 'Hostinger Horizons Explorer 20% Off - AI-Powered Hosting',
    description: 'Save 20% on Hostinger Horizons Explorer. 30 AI credits/month, 30-day money back, 24/7 support. Code: HORIZON20',
    keywords: 'Hostinger Horizons, AI hosting, Hostinger AI, creative hosting'
  },
  HORIZONS20: {
    title: 'Hostinger Horizons Starter 20% Coupon - AI Creator Plan',
    description: 'Hostinger Horizons Starter 20% discount. 70 AI credits/month, 30-day guarantee, 24/7 support. HORIZONS20',
    keywords: 'Hostinger Horizons Starter, AI creator, content creation hosting'
  },
  HORIZONH20: {
    title: 'Hostinger Horizons Hobbyist 20% Off - Advanced AI Hosting',
    description: 'Get 20% off Hostinger Horizons Hobbyist. 200 AI credits/month, 30-day money back, 24/7 support. HORIZONH20',
    keywords: 'Hostinger Horizons Hobbyist, AI hosting plan, creative hosting'
  },
  HORIZONT20: {
    title: 'Hostinger Horizons Hustler 20% Discount - Premium AI Plan',
    description: 'Save 20% on Hostinger Horizons Hustler. 400 AI credits/month, unlimited support. Pro-level AI hosting. HORIZONT20',
    keywords: 'Hostinger Horizons Hustler, premium AI hosting, professional creator'
  },
  EMAIL20: {
    title: 'Hostinger Starter Business Email 20% Off - Professional Email Coupon',
    description: 'Get 20% discount on Hostinger Starter Business Email. 10GB storage, 10 redirects, IMAP/POP3. Code: EMAIL20',
    keywords: 'Hostinger business email, professional email, email hosting coupon'
  },
  EMAILPRE20: {
    title: 'Hostinger Premium Business Email 20% Coupon - Email Hosting',
    description: 'Save 20% on Hostinger Premium Business Email. 50GB storage, 50 redirects, collaboration tools. EMAILPRE20',
    keywords: 'Hostinger email hosting, premium business email, email forwarding'
  },
  REACH50020: {
    title: 'Hostinger Reach Email Marketing 500 20% Off - Email Campaign Tool',
    description: 'Get 20% discount on Hostinger Reach 500. 500 subscribers/month, 3500 emails/month, 5 AI credits. Code: REACH50020',
    keywords: 'Hostinger email marketing, email campaign tool, newsletter software'
  },
  REACH100020: {
    title: 'Hostinger Reach Email Marketing 1000 20% Coupon - Marketing Automation',
    description: 'Save 20% on Hostinger Reach 1000. 1000 subscribers/month, 7000 emails/month, email marketing tool. REACH100020',
    keywords: 'Hostinger Reach, email marketing software, marketing automation, newsletter'
  },
  REACH250020: {
    title: 'Hostinger Reach Email Marketing 2500 20% Off - Professional Email Tool',
    description: 'Hostinger Reach 2500 20% discount. 2500 subscribers/month, 17500 emails/month. Professional email marketing. REACH250020',
    keywords: 'Hostinger Reach 2500, professional email marketing, mass email tool'
  }
};

// Function to get SEO metadata for a coupon
function getSEOMetadata(couponCode) {
  return SEO_DESCRIPTIONS[couponCode] || {
    title: 'Hostinger Web Hosting - 20% Discount Coupon | KuponHub',
    description: 'Find the best Hostinger hosting coupons and discounts. Save up to 20% on web hosting, VPS, email, and more at KuponHub.',
    keywords: 'Hostinger coupon, hosting discount, web hosting deal'
  };
}

// Update page meta tags dynamically
function updateSEOMeta(couponCode) {
  const meta = getSEOMetadata(couponCode);
  
  // Update title
  document.title = meta.title;
  
  // Update or create meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.name = 'description';
    document.head.appendChild(descMeta);
  }
  descMeta.content = meta.description;
  
  // Update or create meta keywords
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (!keywordsMeta) {
    keywordsMeta = document.createElement('meta');
    keywordsMeta.name = 'keywords';
    document.head.appendChild(keywordsMeta);
  }
  keywordsMeta.content = meta.keywords;
}

// Structured data (JSON-LD) for coupons
function generateStructuredData() {
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Hostinger Coupons & Discounts - KuponHub',
    'description': 'Get exclusive Hostinger coupons with up to 20% discount on web hosting, VPS, email, and cloud solutions.',
    'url': 'https://kuponhub.world',
    'image': 'https://kuponhub.world/favicon.ico',
    'mainEntity': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://kuponhub.world'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Hosting',
          'item': 'https://kuponhub.world#hosting'
        }
      ]
    }
  };
  
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(structured, null, 2);
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', generateStructuredData);
} else {
  generateStructuredData();
}

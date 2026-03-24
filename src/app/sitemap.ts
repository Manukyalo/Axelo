import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

const SERVICE_SLUGS = [
  'web-application-development',
  'ai-machine-learning-africa',
  'saas-platform-development',
  'erp-crm-systems',
  'mobile-app-development',
  'brand-motion-design',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://novatechafrica.com'
  const now = new Date()

  // Core pages
  const coreRoutes = [
    { route: '', priority: 1.0, changeFreq: 'weekly' as const },
    { route: '/services', priority: 0.9, changeFreq: 'monthly' as const },
    { route: '/work', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/blog', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/contact', priority: 0.85, changeFreq: 'monthly' as const },
  ].map(({ route, priority, changeFreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }))

  // Individual service pages
  const serviceRoutes = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Blog posts
  const posts = getAllPosts()
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...coreRoutes, ...serviceRoutes, ...blogRoutes]
}

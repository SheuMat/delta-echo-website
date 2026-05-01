export const dynamic = "force-static";

import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const now = new Date()

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/areas-we-cover`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const servicePages = [
    '/services/personal-care',
    '/services/live-in-care',
    '/services/dementia-care',
    '/services/respite-care',
    '/services/end-of-life-care',
    '/services/hospital-discharge-support',
    '/services/companionship-domestic-support',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...servicePages].map((page) => ({
    ...page,
    lastModified: now,
  }))
}
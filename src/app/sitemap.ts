import { MetadataRoute } from 'next';
import { getAllPages } from '@/data/pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.parvinfosoft.com';
  
  // Get all dynamic pages from the data source
  const pagesData = getAllPages();
  const dynamicRoutes = Object.keys(pagesData).map((slug) => ({
    url: `${baseUrl}/${pagesData[slug].category}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...dynamicRoutes,
  ];
}

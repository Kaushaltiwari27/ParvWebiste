import { MetadataRoute } from 'next';
import { servicesData, trainingData, solutionsData, resourcesData } from '@/data/pages';
import { caseStudiesData } from '@/data/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.parvinfosoft.com';
  
  // Create mapping of slug to category
  const allPages: Record<string, string> = {
    ...Object.keys(servicesData).reduce((acc, key) => ({ ...acc, [key]: 'services' }), {}),
    ...Object.keys(trainingData).reduce((acc, key) => ({ ...acc, [key]: 'training' }), {}),
    ...Object.keys(solutionsData).reduce((acc, key) => ({ ...acc, [key]: 'solutions' }), {}),
    ...Object.keys(resourcesData).reduce((acc, key) => ({ ...acc, [key]: 'resources' }), {}),
    ...Object.keys(caseStudiesData).reduce((acc, key) => ({ ...acc, [key]: 'resources/case-studies' }), {}),
  };

  const dynamicRoutes = Object.keys(allPages).map((slug) => ({
    url: `${baseUrl}/${allPages[slug]}/${slug}`,
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

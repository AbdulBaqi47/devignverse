import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/lib/data";

const baseUrl = "https://devignverse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = portfolioProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    ...projectEntries
  ];
}

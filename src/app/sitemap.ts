import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { blogsData } from "@/data/blogs";
import { caseStudiesData } from "@/data/caseStudies";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://arrowcybertech.com";

  const routes = ["", "/about", "/services", "/blogs", "/case-studies", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePaths: MetadataRoute.Sitemap = [];
  servicesData.forEach((cat) => {
    servicePaths.push({
      url: `${baseUrl}/services/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
    cat.subServices.forEach((sub) => {
      servicePaths.push({
        url: `${baseUrl}/services/${cat.slug}/${sub.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  const blogPaths = blogsData.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const studyPaths = caseStudiesData.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...routes, ...servicePaths, ...blogPaths, ...studyPaths];
}

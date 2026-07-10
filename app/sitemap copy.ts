import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calculix-sage.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/bmi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/age`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/percentage`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/emi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/loan`,
      lastModified: new Date(),
    },
  ];
}
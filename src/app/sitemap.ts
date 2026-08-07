import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nickels.vc",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://nickels.vc/learn-more",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

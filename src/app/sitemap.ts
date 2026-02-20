import type { MetadataRoute } from "next";
import { getListingSlugs } from "@/mock-data/listings";

const BASE_URL = "https://stevendpark.com";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/listings",
  "/investor",
  "/art-design",
  "/transactions",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const listingEntries: MetadataRoute.Sitemap = getListingSlugs().map((slug) => ({
    url: `${BASE_URL}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...listingEntries];
}

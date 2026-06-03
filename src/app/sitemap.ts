import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const ROUTES = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/drivers", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}/ar${r.path}`, // Arabic is the canonical primary
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: {
        "ar-SA": `${SITE_URL}/ar${r.path}`,
        en: `${SITE_URL}/en${r.path}`,
        "x-default": `${SITE_URL}/ar${r.path}`,
      },
    },
  }));
}

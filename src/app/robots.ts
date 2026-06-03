import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/record", "/whatsapp"],
    },
    sitemap: "https://sathtek.app/sitemap.xml",
    host: "https://sathtek.app",
  };
}

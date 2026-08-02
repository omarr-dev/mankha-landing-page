import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const DISALLOW = ["/api/", "/_next/", "/whatsapp", "/driver-app", "/app"];

/**
 * Crawlers that feed AI answer engines. They are already covered by the `*`
 * rule, but naming them is deliberate: it documents that answer/training
 * crawling is welcome, and a future tightening of `*` then can't silently lock
 * the brand out of ChatGPT, Claude, Perplexity, Gemini, and Copilot answers.
 */
const AI_AGENTS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT browsing on a user's behalf
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews grounding
  "Applebot-Extended",
  "Bingbot", // Copilot answers ride the Bing index
  "Amazonbot",
  "meta-externalagent",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_AGENTS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

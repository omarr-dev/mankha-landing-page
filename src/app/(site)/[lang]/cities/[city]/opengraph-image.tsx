import { cityBySlug } from "@/content/cities";
import { ogContentType, ogSize, renderSectionCard } from "@/lib/og";

export const alt = "Wire — towing in your city";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}) {
  const { lang, city } = await params;
  // schemaName is the Latin city name — safe on the card, unlike the Arabic
  // one (see the bidi note in lib/og.tsx).
  const entry = cityBySlug(city);
  const section = entry ? `TOWING IN ${entry.schemaName.toUpperCase()}` : "CITIES";
  return renderSectionCard({ section, lang });
}

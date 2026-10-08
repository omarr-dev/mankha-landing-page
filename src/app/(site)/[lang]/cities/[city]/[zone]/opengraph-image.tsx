import { zoneBySlug } from "@/content/riyadhZones";
import { ogContentType, ogSize, renderSectionCard } from "@/lib/og";

export const alt = "Wire — towing in Riyadh";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; city: string; zone: string }>;
}) {
  const { lang, zone } = await params;
  const entry = zoneBySlug(zone);
  const section = entry ? `TOWING IN ${entry.ogLabel}` : "TOWING IN RIYADH";
  return renderSectionCard({ section, lang });
}

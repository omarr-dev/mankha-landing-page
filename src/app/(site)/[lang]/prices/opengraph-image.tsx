import { ogContentType, ogSize, renderSectionCard } from "@/lib/og";

export const alt = "Wire — real tow truck prices";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return renderSectionCard({ section: "TOW TRUCK PRICES", lang });
}

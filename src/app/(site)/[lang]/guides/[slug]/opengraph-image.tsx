import { ogContentType, ogSize, renderSectionCard } from "@/lib/og";

export const alt = "Wire — roadside guide";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return renderSectionCard({ section: "ROADSIDE GUIDE", lang });
}

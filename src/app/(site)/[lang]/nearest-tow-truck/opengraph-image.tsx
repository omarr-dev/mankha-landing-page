import { ogContentType, ogSize, renderSectionCard } from "@/lib/og";

export const alt = "Wire — nearest tow truck";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return renderSectionCard({ section: "NEAREST TOW TRUCK", lang });
}

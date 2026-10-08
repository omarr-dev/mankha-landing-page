import type { Metadata } from "next";
import { BRAND_NAME_AR } from "@/brand";
import { goPlayStoreUrl, goWebAppUrl, userAppStoreUrl } from "@/lib/links";
import { GoRedirect } from "./GoRedirect";

export const metadata: Metadata = {
  title: `حمّل تطبيق ${BRAND_NAME_AR}`,
  description: `حمّل تطبيق ${BRAND_NAME_AR} واطلب سطحة بضغطة واحدة.`,
  robots: { index: false, follow: false },
};

// Tracked marketing entry: wire.sa/go/<channel> (tiktok, instagram, snap,
// google, …). Counts the tap server-side, then sends the visitor to the right
// store — with UTM attribution riding the Play referrer and the web-app URL.
export default async function GoPage({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel: rawChannel } = await params;
  // Same slug rules the API enforces; anything odd degrades to "unknown".
  const channel = /^[a-z0-9_-]{1,40}$/.test(rawChannel.toLowerCase())
    ? rawChannel.toLowerCase()
    : "unknown";

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold text-near-black">
          حمّل تطبيق {BRAND_NAME_AR}
        </h1>
        <p className="text-near-black/70">
          جاري تحويلك… إذا لم يتم التحويل تلقائياً، اختر من الأسفل:
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href={userAppStoreUrl(channel)}
            className="inline-flex w-64 items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
          >
            حمّله من App Store
          </a>
          <a
            href={goPlayStoreUrl(channel)}
            className="inline-flex w-64 items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
          >
            احصل عليه من Google Play
          </a>
          <a
            href={goWebAppUrl(channel)}
            className="inline-flex w-64 items-center justify-center rounded-xl border border-near-black/20 px-6 py-3 text-near-black font-medium hover:bg-near-black/5 transition"
          >
            اطلب من الويب
          </a>
        </div>
        <GoRedirect channel={channel} />
      </div>
    </main>
  );
}

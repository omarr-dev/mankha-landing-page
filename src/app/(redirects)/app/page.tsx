import type { Metadata } from "next";
import { BRAND_NAME_AR } from "@/brand";
import { APP_URL, USER_APP_STORE_URL, USER_PLAY_STORE_URL } from "@/lib/links";
import { AppRedirect } from "./AppRedirect";

export const metadata: Metadata = {
  title: `حمّل تطبيق ${BRAND_NAME_AR}`,
  description: `حمّل تطبيق ${BRAND_NAME_AR} واطلب سطحة بضغطة واحدة.`,
  alternates: { canonical: "/app" },
  robots: { index: false, follow: false },
};

export default function AppPage() {
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
            href={USER_APP_STORE_URL}
            className="inline-flex w-64 items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
          >
            حمّله من App Store
          </a>
          <a
            href={USER_PLAY_STORE_URL}
            className="inline-flex w-64 items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
          >
            احصل عليه من Google Play
          </a>
          <a
            href={APP_URL}
            className="inline-flex w-64 items-center justify-center rounded-xl border border-near-black/20 px-6 py-3 text-near-black font-medium hover:bg-near-black/5 transition"
          >
            اطلب من الويب
          </a>
        </div>
        <AppRedirect />
      </div>
    </main>
  );
}

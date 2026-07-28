import type { Metadata } from "next";
import { BRAND_NAME_AR } from "@/brand";
import { DRIVER_APP_STORE_URL, DRIVER_PLAY_STORE_URL } from "@/lib/links";
import { DriverAppRedirect } from "./DriverAppRedirect";

export const metadata: Metadata = {
  title: `حمّل تطبيق كابتن ${BRAND_NAME_AR}`,
  description: `حمّل تطبيق كابتن ${BRAND_NAME_AR} من App Store أو Google Play واستقبل الطلبات مباشرة.`,
  alternates: { canonical: "/driver-app" },
  robots: { index: false, follow: false },
};

export default function DriverAppPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold text-near-black">
          حمّل تطبيق كابتن {BRAND_NAME_AR}
        </h1>
        <p className="text-near-black/70">
          جاري تحويلك إلى المتجر… إذا لم يتم التحويل تلقائياً، اختر متجرك:
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href={DRIVER_APP_STORE_URL}
            className="inline-flex w-64 items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
          >
            حمّله من App Store
          </a>
          <a
            href={DRIVER_PLAY_STORE_URL}
            className="inline-flex w-64 items-center justify-center rounded-xl bg-[#111] px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
          >
            احصل عليه من Google Play
          </a>
        </div>
        <DriverAppRedirect />
      </div>
    </main>
  );
}

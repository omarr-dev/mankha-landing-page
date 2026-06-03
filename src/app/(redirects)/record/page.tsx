import type { Metadata } from "next";
import { BRAND_NAME_AR } from "@/brand";
import { APP_URL } from "@/lib/links";
import { RecordRedirect } from "./RecordRedirect";

export const metadata: Metadata = {
  title: `جاري تحويلك إلى التطبيق — ${BRAND_NAME_AR}`,
  description: `سيتم تحويلك خلال لحظات إلى تطبيق ${BRAND_NAME_AR} لإنشاء طلب سطحة.`,
  alternates: { canonical: "/record" },
  robots: { index: false, follow: false },
};

export default function RecordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold text-near-black">
          جاري تحويلك إلى التطبيق…
        </h1>
        <p className="text-near-black/70">
          إذا لم يتم التحويل تلقائياً، اضغط على الزر بالأسفل.
        </p>
        <a
          href={APP_URL}
          className="inline-flex items-center justify-center rounded-xl bg-terracotta px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
        >
          فتح التطبيق
        </a>
        <RecordRedirect href={APP_URL} />
      </div>
    </main>
  );
}

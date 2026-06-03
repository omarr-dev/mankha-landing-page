import type { Metadata } from "next";
import { BRAND_NAME_AR } from "@/brand";
import { WhatsAppRedirect } from "./WhatsAppRedirect";

const WHATSAPP_NUMBER = "966553640317";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const metadata: Metadata = {
  title: `تواصل معنا عبر واتساب — ${BRAND_NAME_AR}`,
  description: `تواصل مع فريق ${BRAND_NAME_AR} مباشرة عبر واتساب للاستفسارات والدعم.`,
  alternates: { canonical: "/whatsapp" },
  robots: { index: false, follow: false },
};

export default function WhatsAppPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold text-near-black">
          جاري تحويلك إلى واتساب…
        </h1>
        <p className="text-near-black/70">
          إذا لم يتم التحويل تلقائياً، اضغط على الزر بالأسفل.
        </p>
        <a
          href={WHATSAPP_URL}
          className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-3 text-white font-medium shadow hover:opacity-90 transition"
        >
          فتح واتساب
        </a>
        <WhatsAppRedirect href={WHATSAPP_URL} />
      </div>
    </main>
  );
}

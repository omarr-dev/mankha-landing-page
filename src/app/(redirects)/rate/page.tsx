import type { Metadata } from "next";
import { BRAND_NAME_AR, BRAND_NAME_EN } from "@/brand";
import {
  USER_APP_STORE_REVIEW_URL,
  USER_PLAY_STORE_REVIEW_URL,
} from "@/lib/links";
import { RateRedirect } from "./RateRedirect";

export const metadata: Metadata = {
  title: `قيّم تطبيق ${BRAND_NAME_AR}`,
  description: `شاركنا رأيك في تطبيق ${BRAND_NAME_AR} — تقييمك يساعدنا نطوّر الخدمة.`,
  alternates: { canonical: "/rate" },
  robots: { index: false, follow: false },
};

function Star({ delay }: { delay: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="w-9 h-9 text-terracotta animate-in fade-in zoom-in-50 duration-500 fill-mode-backwards"
      style={{ animationDelay: `${delay}ms` }}
    >
      <path d="M12 2.5l2.9 5.88 6.5.95-4.7 4.58 1.1 6.47L12 17.33l-5.8 3.05 1.1-6.47L2.6 9.33l6.5-.95L12 2.5z" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className="w-[22px] h-[26px] shrink-0" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 140.3 4 184.8 4 275.5c0 26.8 4.9 54.5 14.7 83.1 13.1 37.6 60.4 129.7 109.7 128.2 25.8-.6 44-18.3 77.5-18.3 32.5 0 49.3 18.3 78 18.3 49.7-.7 92.5-84.4 105-122.1-66.7-31.4-70.2-92.1-70.2-96zM255.5 96.2c26.1 2 49.9-11.4 69.5-34.3 27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] shrink-0" aria-hidden>
      <path fill="#00C3FF" d="M4 2.5 13.5 12 4 21.5Z" />
      <path fill="#00DE76" d="M4 2.5 17 9.7 13.5 12Z" />
      <path fill="#FFCF00" d="M13.5 12 17 9.7 21 12l-4 2.3Z" />
      <path fill="#FF3A44" d="M4 21.5 13.5 12l3.5 2.3Z" />
    </svg>
  );
}

function StoreButton({
  href,
  top,
  name,
  children,
}: {
  href: string;
  top: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center gap-3 rounded-[14px] bg-[#111] px-5 py-3 text-white border border-white/15 hover:bg-black transition-colors"
    >
      {children}
      <span className="flex flex-col text-start leading-tight">
        <span className="text-[11px] opacity-75">{top}</span>
        <span className="text-[17px] font-semibold -mt-0.5">{name}</span>
      </span>
    </a>
  );
}

export default function RatePage() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-[24px] bg-ivory border border-border-warm shadow-[0_1px_2px_rgba(20,20,19,0.04),0_12px_40px_-12px_rgba(20,20,19,0.12)] px-7 py-9 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
          <img
            src="/logo.svg"
            alt={BRAND_NAME_EN}
            className="w-14 h-14 mx-auto rounded-[16px]"
          />

          <div className="mt-6 flex items-center justify-center gap-1.5" dir="ltr">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} delay={220 + i * 110} />
            ))}
          </div>

          <h1 className="mt-6 text-[22px] font-semibold text-near-black leading-snug">
            قيّم تجربتك مع {BRAND_NAME_AR}
          </h1>
          <p className="mt-2.5 text-[15px] text-olive leading-relaxed">
            رأيك يساعدنا نطوّر الخدمة ونوصل لعملاء أكثر.
            <br />
            ما يأخذ إلا ثواني 🤍
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <StoreButton href={USER_APP_STORE_REVIEW_URL} top="قيّمنا على" name="App Store">
              <AppleLogo />
            </StoreButton>
            <StoreButton href={USER_PLAY_STORE_REVIEW_URL} top="قيّمنا على" name="Google Play">
              <PlayLogo />
            </StoreButton>
          </div>

          <p className="mt-6 text-[13px] text-stone">
            جاري تحويلك تلقائياً… إذا ما تحوّلت، اختر متجرك من فوق.
          </p>
        </div>

        <p className="mt-5 text-center text-[13px] text-stone">
          واجهت مشكلة؟{" "}
          <a
            href="/whatsapp"
            className="text-terracotta font-medium underline underline-offset-4 hover:text-terracotta-hover"
          >
            راسلنا واتساب
          </a>{" "}
          ونحلها لك.
        </p>

        <RateRedirect />
      </div>
    </main>
  );
}

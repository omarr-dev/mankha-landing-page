import type { Locale } from "@/lib/seo";

// Above-the-fold-adjacent, self-contained answer block + visible coverage facts.
// Gives crawlers and AI answer engines an extractable canonical passage with
// concrete entities (cities, 24/7, electronic payment) rather than only JSON-LD.
const COPY: Record<
  Locale,
  {
    answer: string;
    facts: { value: string; label: string }[];
    citiesLabel: string;
    cities: string[];
  }
> = {
  ar: {
    answer:
      "سطحتك هو تطبيق سعودي لطلب السطحة والمساعدة على الطريق. بدل ما تدق على عشر سطحات، طلب واحد يوصل لكل الكباتن الموثقين القريبين منك، تجيك عروضهم، وتختار الأنسب وتتابع رحلتك مباشرة على الخريطة — ٢٤ ساعة في جميع أنحاء المملكة.",
    facts: [
      { value: "٢٤/٧", label: "متوفر طوال الأسبوع" },
      { value: "+٩", label: "مدن مغطاة" },
      { value: "٠ ريال", label: "بدون رسوم خفية" },
    ],
    citiesLabel: "نخدم في",
    cities: ["الرياض", "جدة", "الدمام", "الخبر", "مكة", "المدينة", "الطائف", "أبها", "بريدة"],
  },
  en: {
    answer:
      "Sathtek is a Saudi app for tow trucks and roadside assistance. Instead of calling ten tow trucks, one request reaches every verified driver near you, their offers come back, and you pick the best and track your tow live on the map — 24/7 across the Kingdom.",
    facts: [
      { value: "24/7", label: "Available every day" },
      { value: "9+", label: "Cities covered" },
      { value: "0 SAR", label: "No hidden fees" },
    ],
    citiesLabel: "We serve",
    cities: [
      "Riyadh",
      "Jeddah",
      "Dammam",
      "Khobar",
      "Makkah",
      "Madinah",
      "Taif",
      "Abha",
      "Buraidah",
    ],
  },
};

export function ServiceSummary({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <section className="bg-parchment border-y border-border-warm py-14 lg:py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-near-black text-lg sm:text-xl lg:text-2xl leading-[1.7] font-medium max-w-4xl">
          {c.answer}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          {c.facts.map((f) => (
            <div key={f.label}>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-terracotta leading-none">
                {f.value}
              </div>
              <div className="mt-2 text-olive text-sm">{f.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="text-olive text-sm font-medium me-1">
            {c.citiesLabel}:
          </span>
          {c.cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center rounded-full bg-sand px-3 py-1 text-[13px] text-charcoal"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

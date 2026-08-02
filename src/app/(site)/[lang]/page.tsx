import { AppPreview } from "@/components/AppPreview";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ServiceSummary } from "@/components/ServiceSummary";
import { TrustBlock } from "@/components/TrustBlock";
import { homeFaq } from "@/i18n/faq";
import { isLocale } from "@/lib/seo";
import {
  faqSchema,
  localBusinessSchema,
  mobileAppSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/schema";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const faq = homeFaq[lang];

  return (
    <main>
      <JsonLd
        data={[
          organizationSchema,
          websiteSchema,
          localBusinessSchema,
          serviceSchema,
          mobileAppSchema,
          faqSchema(faq.items),
        ]}
      />
      <Header />
      <Hero />
      <ServiceSummary locale={lang} />
      <AppPreview />
      <Faq title={faq.title} items={faq.items} />
      <TrustBlock />
      <Footer />
    </main>
  );
}

import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * "واير للأعمال" — workshops, dealers, rental companies.
 *
 * Retail towing has almost no repeat customers; businesses that move cars
 * every week do (our most frequent real customer is a workshop). This page is
 * the link the founder sends in outreach, and it targets the B2B queries
 * ("سطحات للشركات", "نقل سيارات معارض"). The CTA is a WhatsApp chat because
 * onboarding is done by hand for now — there is no business account feature.
 */

export type BusinessContent = {
  question: string;
  metaTitle: string;
  description: string;
  label: string;
  answer: string;
  ctaLabel: string;
  ctaNote: string;
  whatsappText: string;
  segmentsTitle: string;
  segments: { name: string; text: string }[];
  whyTitle: string;
  why: string[];
  stepsTitle: string;
  steps: { name: string; text: string }[];
  faqTitle: string;
  faq: FaqItem[];
};

export const business: Record<Locale, BusinessContent> = {
  ar: {
    question: "واير للأعمال — سطحات للورش ومعارض السيارات وشركات التأجير",
    metaTitle: "واير للأعمال — سطحات لورش ومعارض السيارات وشركات التأجير",
    description:
      "تنقل سيارات عملائك أو أسطولك باستمرار؟ طلب واحد من واير يوصل لكل كباتن السطحات القريبين، تجيك ٧ عروض في المتوسط خلال ثواني، وتتابع كل نقلة على الخريطة. بدون اشتراك.",
    label: "واير للأعمال",
    answer:
      "واير للأعمال للورش ومعارض السيارات وشركات التأجير اللي تنقل سيارات كل أسبوع. بدل ما تحفظ أرقام سطحات وتنتظر ردهم، ترسل طلب واحد يوصل لكل الكباتن الموثقين القريبين، يجيك ٧ عروض في المتوسط وأول عرض خلال ثواني، تختار الأنسب وتتابع النقلة على الخريطة — بدون اشتراك ولا رسوم شهرية.",
    ctaLabel: "كلّمنا على واتساب",
    ctaNote: "نجهز حسابك ونوريك الطريقة في نفس اليوم",
    whatsappText:
      "السلام عليكم، أبي أستخدم واير لنقل السيارات في منشأتي. النوع: (ورشة / معرض / تأجير / غيره) — المدينة: — عدد النقلات تقريبًا بالشهر:",
    segmentsTitle: "مين يستفيد من واير للأعمال؟",
    segments: [
      {
        name: "ورش الصيانة",
        text: "عميلك تعطلت سيارته؟ اطلب سطحة توصلها لورشتك مباشرة بدل ما تدور له على رقم — أو أرسل له رابط واير يطلب بنفسه.",
      },
      {
        name: "معارض السيارات",
        text: "نقل بين الفروع، للعميل، أو للفحص — بسعر واضح قبل ما توافق، وتتابع كل نقلة على الخريطة.",
      },
      {
        name: "شركات تأجير السيارات",
        text: "سيارة متعطلة عند عميل؟ سطحة لأقرب فرع أو ورشة بدون اتصالات ولا انتظار على الخط.",
      },
      {
        name: "مراكز الفحص والتقدير والوكالات",
        text: "ذهاب وعودة للفحص الدوري أو تقدير الحوادث، أو نقل سيارات العملاء من وإلى مركز الخدمة.",
      },
    ],
    whyTitle: "ليش واير؟",
    why: [
      "+٢٦٠ كابتن سطحة موثق — هوية ورخصة واستمارة مراجعة قبل التفعيل.",
      "٧ عروض في المتوسط لكل طلب، وأول عرض غالبًا خلال أقل من ٣٠ ثانية.",
      "سعر واضح قبل الموافقة — وسيط رحلاتنا داخل الرياض ١٤٠ ريال.",
      "تتبع مباشر لكل نقلة على الخريطة مع وقت الوصول المتوقع.",
      "٢٤ ساعة في الرياض وجدة والدمام والخبر والظهران والأحساء، والتوصيل لأي مدينة.",
      "بدون اشتراك ولا رسوم شهرية — تدفع لكل نقلة للكابتن مباشرة.",
    ],
    stepsTitle: "كيف تبدأ",
    steps: [
      {
        name: "كلّمنا على واتساب",
        text: "أرسل اسم المنشأة والمدينة وعدد النقلات التقريبي بالشهر.",
      },
      {
        name: "نجهز حسابك",
        text: "نفعّل حساب المنشأة في تطبيق واير ونوريك كيف تطلب وتتابع وتقارن العروض.",
      },
      {
        name: "اطلب أول نقلة",
        text: "حدد موقع السيارة والوجهة ونوع السطحة، وتجيك عروض الكباتن القريبين خلال ثواني.",
      },
    ],
    faqTitle: "أسئلة الأعمال",
    faq: [
      {
        q: "هل في عقد أو اشتراك شهري؟",
        a: "لا. ما في اشتراك ولا رسوم شهرية ولا حد أدنى للطلبات. كل نقلة لها سعرها من عرض الكابتن اللي تختاره، وتدفعه للكابتن مباشرة عند التسليم.",
      },
      {
        q: "أقدر أطلب أكثر من سطحة بنفس الوقت؟",
        a: "نعم. كل طلب لسيارة وحدة، وتقدر ترسل أكثر من طلب بنفس الوقت لأكثر من سيارة، وكل طلب يوصل لكل الكباتن القريبين من موقع سيارته.",
      },
      {
        q: "وش المدن اللي تشتغلون فيها؟",
        a: "الاستلام داخل الرياض وجدة والدمام والخبر والظهران والأحساء، والتوصيل لأي مكان حتى لو مدينة ثانية. والتغطية تتوسع باستمرار.",
      },
      {
        q: "كم سعر النقلة داخل المدينة؟",
        a: "حسب المسافة ونوع السطحة. داخل الرياض، من ١٦٩ رحلة منفذة كان نصف الرحلات بين ١١٠ و١٥٠ ريال والوسيط ١٤٠ ريال. تشوف كل الأسعار قبل ما توافق على أي عرض.",
      },
    ],
  },
  en: {
    question: "Wire for Business — tow trucks for workshops, dealers and rental companies",
    metaTitle: "Wire for Business — tow trucks for workshops, car dealers and rentals",
    description:
      "Moving customer or fleet cars every week? One Wire request reaches every nearby tow truck driver — 7 offers on average within seconds — and you track every move on the map. No subscription.",
    label: "Wire for Business",
    answer:
      "Wire for Business is for workshops, car dealers and rental companies that move cars every week. Instead of keeping a list of tow truck numbers and waiting for replies, you send one request that reaches every verified driver nearby, get 7 offers on average with the first in seconds, pick one and track the move on the map — no subscription or monthly fee.",
    ctaLabel: "Message us on WhatsApp",
    ctaNote: "We set up your account and walk you through it the same day",
    whatsappText:
      "Hi, I'd like to use Wire to move cars for my business. Type: (workshop / dealer / rental / other) — City: — Moves per month (approx.):",
    segmentsTitle: "Who is Wire for Business for?",
    segments: [
      {
        name: "Repair workshops",
        text: "A customer's car broke down? Send a flatbed straight to your workshop instead of hunting for a number — or send them a Wire link to request it themselves.",
      },
      {
        name: "Car dealers",
        text: "Between branches, to a customer, or to inspection — with a clear price before you accept and every move tracked on the map.",
      },
      {
        name: "Car rental companies",
        text: "A car broke down with a customer? A flatbed to the nearest branch or workshop, with no phone calls and no waiting on the line.",
      },
      {
        name: "Inspection, valuation and service centres",
        text: "Round trips to periodic inspection or accident valuation, or moving customer cars to and from the service centre.",
      },
    ],
    whyTitle: "Why Wire?",
    why: [
      "260+ verified tow truck drivers — ID, licence and registration checked before activation.",
      "7 offers per request on average, the first usually in under 30 seconds.",
      "A clear price before you accept — our median tow inside Riyadh is 140 SAR.",
      "Live map tracking of every move with an estimated arrival.",
      "24/7 in Riyadh, Jeddah, Dammam, Khobar, Dhahran and Al-Ahsa, delivering to any city.",
      "No subscription or monthly fee — you pay the driver per move, directly.",
    ],
    stepsTitle: "How to start",
    steps: [
      {
        name: "Message us on WhatsApp",
        text: "Send your business name, city and roughly how many moves a month.",
      },
      {
        name: "We set up your account",
        text: "We activate your business on the Wire app and show you how to request, track and compare offers.",
      },
      {
        name: "Request your first move",
        text: "Set the car's location, the destination and the truck type, and nearby drivers' offers arrive within seconds.",
      },
    ],
    faqTitle: "Business questions",
    faq: [
      {
        q: "Is there a contract or monthly subscription?",
        a: "No. There is no subscription, monthly fee or minimum volume. Each move is priced by the driver offer you choose, paid to the driver directly at drop-off.",
      },
      {
        q: "Can I request several tow trucks at once?",
        a: "Yes. Each request is for one car, and you can send several requests at the same time for several cars; each reaches every driver near that car's location.",
      },
      {
        q: "Which cities do you cover?",
        a: "Pickups inside Riyadh, Jeddah, Dammam, Khobar, Dhahran and Al-Ahsa, with drop-off anywhere, even another city. Coverage keeps expanding.",
      },
      {
        q: "How much is an in-city move?",
        a: "It depends on distance and truck type. Inside Riyadh, across 169 completed tows, the middle half cost 110–150 SAR and the median was 140 SAR. You see every price before accepting an offer.",
      },
    ],
  },
};

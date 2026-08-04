import type { FaqItem } from "@/i18n/faq";
import type { Locale } from "@/lib/seo";

/**
 * The "nearest tow truck" landing page.
 *
 * Search Console showed this query cluster generating ~1,800 impressions a
 * month at an average position of 8–9.5, converting almost nothing:
 *
 *   أقرب سطحة من موقعي   306 impressions   0 clicks   pos 9.5
 *   اقرب سطحه            615 impressions   3 clicks   pos 8.4
 *   سطحه قريب من موقعي   324 impressions   3 clicks   pos 9.0
 *
 * The home page was answering it, and it is not built for that intent: it
 * describes what Wire is, while this searcher is stopped on a road and wants
 * the next tap. The city pages don't fit either — "سطحة الرياض" is a place
 * query, "أقرب سطحة مني" is a proximity query, and they deserve different
 * pages. Hence a dedicated one, written for a phone (91% of this traffic) with
 * the action above everything else.
 */

export type NearestContent = {
  question: string;
  metaTitle: string;
  description: string;
  label: string;
  /** The extractable canonical answer: 40–60 words, names Wire. */
  answer: string;
  ctaLabel: string;
  ctaNote: string;
  stepsTitle: string;
  steps: { name: string; text: string }[];
  /** Why "nearest" is not automatically "best" — the real differentiator. */
  insightTitle: string;
  insightBody: string;
  insightPoints: string[];
  faqTitle: string;
  faq: FaqItem[];
};

export const nearest: Record<Locale, NearestContent> = {
  ar: {
    question: "أقرب سطحة من موقعي — كيف أطلبها الحين؟",
    metaTitle: "أقرب سطحة من موقعي — اطلب أقرب سطحة لك ٢٤ ساعة",
    description:
      "محتاج أقرب سطحة من موقعك؟ طلب واحد من واير يوصل لكل الكباتن القريبين منك في نفس اللحظة، تجيك عروضهم بأسعارها خلال دقائق، وتتابع الكابتن على الخريطة حتى يوصلك.",
    label: "أقرب سطحة",
    answer:
      "لطلب أقرب سطحة من موقعك: افتح تطبيق واير وخل الـ GPS يحدد موقعك، ووصّف حالتك. طلبك يوصل في نفس اللحظة لكل كباتن السطحات الموثقين القريبين منك — ما تحتاج تدق على أحد ولا تدور أرقام. تجيك عروضهم بأسعارها خلال دقائق، تختار الأنسب، وتتابعه على الخريطة لين يوصل.",
    ctaLabel: "اطلب سطحة الحين",
    ctaNote: "متاح ٢٤ ساعة · بدون اتصال ولا انتظار على الخط",
    stepsTitle: "أربع خطوات، أقل من دقيقة",
    steps: [
      {
        name: "حدد موقعك",
        text: "خل الـ GPS يحدده تلقائيًا، أو حرّك الدبوس على الخريطة إذا كنت تعرف مكانك بدقة أكثر.",
      },
      {
        name: "وصّف حالتك",
        text: "تعطلت؟ بنشر؟ بطارية؟ حادث؟ الوصف يخلي الكباتن اللي عندهم المعدات المناسبة هم اللي يرسلون لك عروض.",
      },
      {
        name: "قارن العروض",
        text: "الكباتن القريبون يرسلون أسعارهم. تشوف السعر والمسافة قبل ما توافق على أي عرض.",
      },
      {
        name: "تابع على الخريطة",
        text: "بعد ما تقبل، تشوف الكابتن يتحرك نحوك لحظة بلحظة مع وقت الوصول المتوقع.",
      },
    ],
    insightTitle: "الأقرب مو دائمًا الأفضل",
    insightBody:
      "أغلب الناس تدور «الأقرب» وهي تقصد «الأسرع وصولًا وبسعر معقول». وهذول ثلاثة أشياء مختلفة — والكابتن الأقرب جغرافيًا قد يكون أبعدها فعليًا:",
    insightPoints: [
      "كابتن على بعد ٣ كم خلف ازدحام قد يوصلك متأخرًا عن كابتن على بعد ٧ كم على طريق سالك.",
      "الأقرب قد يكون مشغولًا في رحلة أخرى، فيقبل طلبك ثم يتأخر.",
      "الأقرب قد ما تكون عنده السطحة المناسبة لحالتك — سيارة متضررة تحتاج هيدروليك.",
      "ولذلك واير يرسل طلبك للجميع بدل ما يختار لك واحدًا: تشوف السعر ووقت الوصول المتوقع لكل عرض، وتقرر أنت.",
    ],
    faqTitle: "أسئلة عن أقرب سطحة",
    faq: [
      {
        q: "كيف ألقى أقرب سطحة من موقعي؟",
        a: "افتح تطبيق واير وخل الـ GPS يحدد موقعك ووصّف حالتك. طلبك يوصل فورًا لكل كباتن السطحات القريبين منك دفعة وحدة، فما تحتاج تبحث عن أرقام ولا تتصل بواحد واحد — العروض تجيك أنت.",
      },
      {
        q: "كم تاخذ أقرب سطحة عشان توصلني؟",
        a: "يعتمد على موقعك وحالة الطريق. داخل المدن غالبًا العروض توصلك خلال دقائق والكابتن يصل بعدها بوقت قصير. تشوف وقت الوصول المتوقع على الخريطة لحظة بلحظة بعد ما تقبل العرض.",
      },
      {
        q: "كم سعر أقرب سطحة؟",
        a: "ما في تسعيرة ثابتة. كل كابتن قريب يرسل عرضه لرحلتك حسب المسافة وحالة السيارة، وأنت تقارن وتختار. تشوف السعر قبل ما توافق، فما في مساومة على الطريق ولا زيادات مفاجئة.",
      },
      {
        q: "هل في سطحة قريبة مني ٢٤ ساعة؟",
        a: "نعم. واير تشتغل ٢٤ ساعة طوال أيام الأسبوع بما فيها العطلات في جميع أنحاء السعودية، فتقدر تطلب أقرب سطحة في أي وقت من الليل أو النهار.",
      },
      {
        q: "وش أسوي إذا ما جاني أي عرض؟",
        a: "غالبًا يعني أنك في منطقة بعيدة عن تجمّع الكباتن. تأكد أن موقعك محدد بدقة على الخريطة، وأعد إرسال الطلب. في الطرق البرية شارك إحداثياتك بدقة لأن أغلب التأخير سببه وصف الموقع لا المسافة.",
      },
    ],
  },
  en: {
    question: "Tow truck near me — how do I get the closest one?",
    metaTitle: "Tow truck near me — request the nearest driver, 24/7",
    description:
      "Need a tow truck near you? One request on Wire reaches every nearby verified driver at the same moment, their quotes arrive within minutes, and you track your driver live on the map until they reach you.",
    label: "Tow truck near me",
    answer:
      "To get the nearest tow truck: open the Wire app, let GPS set your location, and describe the problem. Your request reaches every verified tow truck driver near you at the same moment — no calling around, no hunting for numbers. Their quotes come back within minutes, you pick one, and you track them live on the map.",
    ctaLabel: "Request a tow now",
    ctaNote: "Available 24/7 · no phone calls, no hold music",
    stepsTitle: "Four steps, under a minute",
    steps: [
      {
        name: "Set your location",
        text: "Let GPS place it automatically, or drag the pin on the map if you know exactly where you are.",
      },
      {
        name: "Describe the problem",
        text: "Broken down? Flat tire? Dead battery? Accident? The description means the drivers with the right equipment are the ones who quote.",
      },
      {
        name: "Compare the offers",
        text: "Nearby drivers send their prices. You see the price and the distance before you accept anything.",
      },
      {
        name: "Track on the map",
        text: "Once you accept, watch your driver move toward you in real time with an estimated arrival.",
      },
    ],
    insightTitle: "Nearest isn't always best",
    insightBody:
      "Most people search for \"nearest\" but mean \"fastest to arrive at a fair price\" — three different things, and the geographically closest driver is often not the quickest:",
    insightPoints: [
      "A driver 3 km away behind traffic can reach you later than one 7 km away on a clear road.",
      "The closest driver may already be on another job, accept, and then run late.",
      "The closest may not have the right truck — a damaged car needs a hydraulic flatbed.",
      "So Wire sends your request to all of them instead of picking one for you: you see each offer's price and estimated arrival, and you decide.",
    ],
    faqTitle: "Questions about finding the nearest tow",
    faq: [
      {
        q: "How do I find a tow truck near me?",
        a: "Open the Wire app, let GPS set your location, and describe the problem. Your request reaches every nearby tow truck driver at once, so you never search for numbers or call around one by one — the offers come to you.",
      },
      {
        q: "How long does the nearest tow truck take?",
        a: "It depends on your location and traffic. Inside cities, offers usually arrive within minutes and the driver follows shortly after. You see the live estimated arrival on the map once you accept an offer.",
      },
      {
        q: "How much does the nearest tow truck cost?",
        a: "There is no fixed rate. Each nearby driver quotes your trip based on distance and the car's condition, and you compare and choose. You see the price before accepting, so there is no roadside haggling and no surprise surcharges.",
      },
      {
        q: "Is there a tow truck near me at any hour?",
        a: "Yes. Wire operates 24 hours a day, 7 days a week including holidays across Saudi Arabia, so you can request the nearest tow at any time of day or night.",
      },
      {
        q: "What if no offers come in?",
        a: "It usually means you're far from where drivers are concentrated. Check that your location is placed accurately on the map and send the request again. On open roads, share precise coordinates — most delays come from a vague location, not the distance.",
      },
    ],
  },
};

import type { Locale } from "@/lib/seo";

export type FaqItem = { q: string; a: string };
export type FaqContent = { title: string; items: FaqItem[] };

// Answers are kept self-contained (~40–60 words) with a concrete entity or
// number so AI answer engines (ChatGPT / Perplexity / AI Overviews) can extract
// them. Questions match the visible <h3> text character-for-character.
export const homeFaq: Record<Locale, FaqContent> = {
  ar: {
    title: "الأسئلة الشائعة",
    items: [
      {
        q: "كم تكلفة السطحة في الرياض؟",
        a: "ما في سعر ثابت — طلبك في واير يوصل لكل الكباتن القريبين، وكل كابتن يرسل عرضه وأنت تختار. وللمرجع من الأسعار اللي وافق عليها عملاء واير داخل الرياض في آخر ٩٠ يوم: المشوار القصير (أقل من ١٠ كم) أغلبه بين ١٠٠ و١٢٠ ريال، والطويل داخل المدينة (٢٠–٤٠ كم) بين ١٥٠ و١٧٠. تشوف السعر قبل ما توافق، بدون مساومة على الطريق.",
      },
      {
        q: "كيف أطلب سطحة قريبة مني؟",
        a: "افتح تطبيق واير، حدد موقعك على الخريطة أو خل الـ GPS يحدده، ووصّف حالتك. طلبك يوصل فورًا لكل كباتن السطحات حولك، وأول عرض يجيك عادةً خلال ثواني، فتقارن وتختار الأقرب والأنسب لك.",
      },
      {
        q: "هل خدمة واير متوفرة ٢٤ ساعة؟",
        a: "نعم. واير تعمل ٢٤ ساعة طوال أيام الأسبوع، بما فيها العطلات. سواء تعطلت ليلًا أو نهارًا، تقدر تطلب سطحة أو مساعدة على الطريق في أي وقت وتحصل على كباتن موثقين قريبين منك.",
      },
      {
        q: "ما المدن التي تغطيها واير؟",
        a: "تخدم واير حاليًا الرياض وجدة والدمام والخبر والظهران والأحساء (الهفوف والمبرز). نقطة الاستلام لازم تكون داخل هذي المدن، والتوصيل لأي مكان — حتى لمدينة ثانية. والتغطية تتوسع لمدن جديدة باستمرار.",
      },
      {
        q: "كيف أتابع السطحة مباشرة؟",
        a: "بعد ما تقبل عرض الكابتن، تشوف موقعه على الخريطة لحظة بلحظة وهو جاي لك، مع وقت الوصول المتوقع. تبقى على اطلاع بكل خطوة من التحميل حتى التسليم، وكل لحظة موثقة داخل التطبيق.",
      },
    ],
  },
  en: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does a tow truck cost in Riyadh?",
        a: "There is no fixed price — your Wire request reaches every nearby driver, each sends an offer, and you choose. For reference, from prices Wire customers accepted inside Riyadh in the last 90 days: a short tow (under 10 km) is mostly 100–120 SAR, and a long one inside the city (20–40 km) 150–170 SAR. You see the price before accepting — no roadside haggling.",
      },
      {
        q: "How do I request a tow truck near me?",
        a: "Open the Wire app, drop a pin on the map or let GPS set your location, and describe the problem. Your request instantly reaches every nearby tow truck driver, and the first offer usually lands within seconds, so you compare and choose the closest, best fit.",
      },
      {
        q: "Is Wire available 24 hours?",
        a: "Yes. Wire operates 24 hours a day, 7 days a week, including holidays. Whether you break down at night or midday, you can request a tow or roadside assistance any time and reach verified drivers near you.",
      },
      {
        q: "Which cities does Wire cover?",
        a: "Wire currently serves Riyadh, Jeddah, Dammam, Khobar, Dhahran and Al-Ahsa (Hofuf and Mubarraz). The pickup must be inside one of these cities; the drop-off can be anywhere, even another city. Coverage keeps expanding to new cities.",
      },
      {
        q: "How do I track the tow truck live?",
        a: "Once you accept a driver's offer, you see their location move on the map in real time as they approach, with an estimated arrival time. You stay informed at every step from pickup to dropoff, and each moment is documented in the app.",
      },
    ],
  },
};

export const driverFaq: Record<Locale, FaqContent> = {
  ar: {
    title: "أسئلة السواقين الشائعة",
    items: [
      {
        q: "كيف أسجل كسائق سطحة في واير؟",
        a: "اضغط على «سجّل كسايق»، ارفع هويتك ورخصتك وأوراق السطحة، ونراجع طلبك خلال ٢٤ ساعة. بعد الموافقة تبدأ تستقبل طلبات السطحات القريبة منك مباشرة وتربح بشروطك.",
      },
      {
        q: "هل في رسوم تسجيل في واير؟",
        a: "لا. التسجيل في واير مجاني تمامًا بدون أي رسوم مقدمة (٠ ريال). تنشئ حسابك وترفع أوراقك وتبدأ تستقبل الطلبات بدون اشتراكات أو تكاليف خفية.",
      },
      {
        q: "كيف توصلني طلبات السطحات؟",
        a: "الطلبات الجديدة القريبة منك توصلك على واتساب فورًا، بدون ما تراقب التطبيق طول اليوم. تشوف موقع الاستلام والتفاصيل، وترسل عرضك إذا كان الطلب يناسبك.",
      },
      {
        q: "من يحدد سعر الرحلة؟",
        a: "أنت تحدد سعرك. على كل طلب ترسل عرضك بنفسك، والعميل يختار. تبقى متحكم بأسعارك بالكامل بدون تسعيرة مفروضة عليك من المنصة.",
      },
      {
        q: "كم تستغرق الموافقة على التسجيل؟",
        a: "نراجع مستنداتك خلال ٢٤ ساعة من رفعها. بمجرد قبول طلبك يصير حسابك فعّال وتبدأ تستقبل طلبات السطحات القريبة منك في نفس اليوم غالبًا.",
      },
      {
        q: "ما المستندات المطلوبة للتسجيل؟",
        a: "تحتاج هوية سارية، ورخصة قيادة، وأوراق السطحة (الاستمارة). ترفعها من خلال التطبيق، ونتحقق منها خلال ٢٤ ساعة قبل تفعيل حسابك للعمل.",
      },
    ],
  },
  en: {
    title: "Driver FAQ",
    items: [
      {
        q: "How do I register as a tow truck driver on Wire?",
        a: "Tap “Register as a driver”, upload your ID, driving licence and tow truck papers, and we review your application within 24 hours. Once approved, you start receiving nearby tow requests directly and earn on your own terms.",
      },
      {
        q: "Are there registration fees on Wire?",
        a: "No. Registering on Wire is completely free with zero upfront cost (0 SAR). You create your account, upload your documents and start receiving requests — no subscriptions and no hidden fees.",
      },
      {
        q: "How do tow requests reach me?",
        a: "New nearby requests arrive on your WhatsApp instantly, so you don't have to watch the app all day. You see the pickup location and details, then send your offer if the request suits you.",
      },
      {
        q: "Who sets the price for a trip?",
        a: "You set your own price. On every request you send your own offer and the customer chooses. You stay fully in control of your rates — there is no pricing forced on you by the platform.",
      },
      {
        q: "How long does approval take?",
        a: "We review your documents within 24 hours of upload. As soon as your application is accepted, your account goes live and you start receiving nearby tow requests, often the same day.",
      },
      {
        q: "What documents do I need to register?",
        a: "You need a valid ID, a driving licence, and your tow truck registration papers. You upload them through the app, and we verify them within 24 hours before activating your account.",
      },
    ],
  },
};

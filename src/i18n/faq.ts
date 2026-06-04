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
        a: "ما في سعر ثابت. ترسل طلب واحد عبر سطحتك فيوصل لكل الكباتن القريبين منك، وكل كابتن يرسل لك عرضه، وأنت تختار الأنسب. تقارن الأسعار قبل ما تقبل، بدون زيادات مفاجئة وبدون مساومة على الطريق.",
      },
      {
        q: "كيف أطلب سطحة قريبة مني؟",
        a: "افتح تطبيق سطحتك، حدد موقعك على الخريطة أو خل الـ GPS يحدده، ووصّف حالتك. طلبك يوصل فورًا لكل كباتن السطحات حولك في الرياض، وتجيك عروضهم خلال دقائق لتختار الأقرب والأنسب لك.",
      },
      {
        q: "هل خدمة سطحتك متوفرة ٢٤ ساعة؟",
        a: "نعم. سطحتك تعمل ٢٤ ساعة طوال أيام الأسبوع، بما فيها العطلات. سواء تعطلت ليلًا أو نهارًا، تقدر تطلب سطحة أو مساعدة على الطريق في أي وقت وتحصل على كباتن موثقين قريبين منك.",
      },
      {
        q: "ما المدن التي تغطيها سطحتك؟",
        a: "تغطي سطحتك مدن المملكة الرئيسية ومنها الرياض وجدة والدمام والخبر ومكة والمدينة والطائف وأبها وبريدة. الطلبات الحالية تبدأ من الرياض، والتغطية تتوسع باستمرار لمدن جديدة في جميع أنحاء السعودية.",
      },
      {
        q: "كيف أتابع السطحة مباشرة؟",
        a: "بعد ما تقبل عرض الكابتن، تشوف موقعه على الخريطة لحظة بلحظة وهو جاي لك، مع وقت الوصول المتوقع. تبقى على اطلاع بكل خطوة من التحميل حتى التسليم، وكل لحظة موثقة داخل التطبيق.",
      },
      {
        q: "كيف أدفع في سطحتك؟",
        a: "تختار الطريقة اللي تريحك: كاش مباشرة للكابتن، أو دفع إلكتروني آمن داخل التطبيق بالفيزا وكل وسائل الدفع. وفي كل الأحوال السعر اللي وافقت عليه هو اللي تدفعه، واضح ومتفق عليه من البداية.",
      },
    ],
  },
  en: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does a tow truck cost in Riyadh?",
        a: "There is no fixed price. With Sathtek you send one request, it reaches every nearby driver, and each one sends you an offer. You compare quotes and pick the best — no surge pricing and no haggling on the roadside.",
      },
      {
        q: "How do I request a tow truck near me?",
        a: "Open the Sathtek app, drop a pin on the map or let GPS set your location, and describe the problem. Your request instantly reaches every nearby tow truck driver, and their offers arrive within minutes so you choose the closest, best fit.",
      },
      {
        q: "Is Sathtek available 24 hours?",
        a: "Yes. Sathtek operates 24 hours a day, 7 days a week, including holidays. Whether you break down at night or midday, you can request a tow or roadside assistance any time and reach verified drivers near you.",
      },
      {
        q: "Which cities does Sathtek cover?",
        a: "Sathtek covers major Saudi cities including Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, Taif, Abha and Buraidah. Requests currently start from Riyadh, and coverage keeps expanding to new cities across Saudi Arabia.",
      },
      {
        q: "How do I track the tow truck live?",
        a: "Once you accept a driver's offer, you see their location move on the map in real time as they approach, with an estimated arrival time. You stay informed at every step from pickup to dropoff, and each moment is documented in the app.",
      },
      {
        q: "How do I pay on Sathtek?",
        a: "Choose whatever suits you: pay the driver in cash, or pay securely inside the app with Visa and all major payment methods. Either way, the price you agreed to is exactly what you pay, clear and settled from the start.",
      },
    ],
  },
};

export const driverFaq: Record<Locale, FaqContent> = {
  ar: {
    title: "أسئلة السواقين الشائعة",
    items: [
      {
        q: "كيف أسجل كسائق سطحة في سطحتك؟",
        a: "اضغط على «سجّل كسايق»، ارفع هويتك ورخصتك وأوراق السطحة، ونراجع طلبك خلال ٢٤ ساعة. بعد الموافقة تبدأ تستقبل طلبات السطحات القريبة منك مباشرة وتربح بشروطك.",
      },
      {
        q: "هل في رسوم تسجيل في سطحتك؟",
        a: "لا. التسجيل في سطحتك مجاني تمامًا بدون أي رسوم مقدمة (٠ ريال). تنشئ حسابك وترفع أوراقك وتبدأ تستقبل الطلبات بدون اشتراكات أو تكاليف خفية.",
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
        q: "How do I register as a tow truck driver on Sathtek?",
        a: "Tap “Register as a driver”, upload your ID, driving licence and tow truck papers, and we review your application within 24 hours. Once approved, you start receiving nearby tow requests directly and earn on your own terms.",
      },
      {
        q: "Are there registration fees on Sathtek?",
        a: "No. Registering on Sathtek is completely free with zero upfront cost (0 SAR). You create your account, upload your documents and start receiving requests — no subscriptions and no hidden fees.",
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

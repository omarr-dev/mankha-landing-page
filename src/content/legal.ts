// Legal copy for Sathtak (operated by Satha / the Company).
// Jurisdiction: Kingdom of Saudi Arabia. Reviewed by counsel before publication.
// Last updated: keep in sync with LEGAL_LAST_UPDATED below.

import { BRAND_NAME_EN } from "@/brand";

export const LEGAL_LAST_UPDATED = "2026-04-14";
export const LEGAL_COMPANY_DISPLAY = BRAND_NAME_EN;
export const LEGAL_CONTACT_EMAIL = "support@mankha.sa";

export type LegalSection = {
  id: string;
  heading: string;
  body: string[];
};

export type LegalContent = {
  title: string;
  intro: string;
  lastUpdatedLabel: string;
  backToHome: string;
  contactHeading: string;
  contactBody: string;
  sections: LegalSection[];
};

// ---------- TERMS OF SERVICE ----------

export const TERMS_EN: LegalContent = {
  title: "Terms of Service",
  intro:
    "These Terms of Service (the \"Terms\") govern your use of the Sathtak platform, mobile applications, and related services (collectively, the \"Platform\") operated from the Kingdom of Saudi Arabia. By creating an account, requesting a tow, or accepting a trip, you agree to these Terms. If you do not agree, do not use the Platform.",
  lastUpdatedLabel: "Last updated",
  backToHome: "Back to home",
  contactHeading: "Contact us",
  contactBody:
    "Questions about these Terms can be directed to support@mankha.sa. We will respond within a reasonable time.",
  sections: [
    {
      id: "platform-role",
      heading: "1. Nature of the Platform",
      body: [
        "Sathtak is a technology platform that connects customers seeking roadside towing with independent, verified tow truck drivers. We are not a transportation carrier. We do not own, operate, or dispatch tow trucks. All towing services are performed by independent drivers who are solely responsible for the service, their vehicles, and compliance with applicable traffic, licensing, and insurance regulations.",
        "By using the Platform, you acknowledge that Sathtak acts only as an intermediary that facilitates matching, pricing, and payment between customers and drivers.",
      ],
    },
    {
      id: "eligibility",
      heading: "2. Eligibility",
      body: [
        "You must be at least 18 years old and legally able to enter binding contracts under Saudi law to use the Platform.",
        "Drivers must additionally hold a valid Saudi driving license for the vehicle class they operate, a valid vehicle registration (Istimara), and any authorizations required to transport another person's vehicle. Drivers warrant that all documents uploaded during registration are genuine, current, and belong to the driver or the vehicle they operate.",
        "Providing false identification, impersonating another person, or uploading documents you are not entitled to use is grounds for immediate termination and may be reported to the competent authorities.",
      ],
    },
    {
      id: "accounts",
      heading: "3. Accounts and Verification",
      body: [
        "Accounts are created using your mobile number and verified via one-time password (OTP). You are responsible for keeping access to your phone number secure; activity performed through a verified account is deemed to be performed by the account holder.",
        "Driver accounts are subject to manual review. Approval is discretionary and may be delayed, refused, or revoked at any time, including where a driver's documents expire, where safety concerns arise, or where a pattern of poor service is observed.",
      ],
    },
    {
      id: "requests-offers",
      heading: "4. Service Requests and Offers",
      body: [
        "A customer may publish a service request describing the pickup location, destination, vehicle type, and relevant details. Drivers may respond with price offers in Saudi Riyal (SAR).",
        "Accepting an offer does not by itself create a binding trip. A trip is created only after the customer's payment is successfully authorized (see Section 5).",
        "Both parties agree to treat each other respectfully, to share accurate information, and to follow the Platform's in-app workflow (arrival confirmation, photo capture, trip completion, etc.).",
      ],
    },
    {
      id: "payment",
      heading: "5. Payments, Authorization and Capture",
      body: [
        "Payments are processed by Tap Payments, our third-party payment service provider. Sathtak does not store card details.",
        "When a customer accepts an offer, the total price shown at acceptance is authorized (held) on the customer's card. This total is inclusive of the driver's fare and Sathtak's platform service fee (see Section 7). No further amount will be charged for the trip. No funds are transferred at authorization; capture occurs only when the trip is completed. The amount captured is always exactly equal to the total price shown at acceptance.",
        "If the trip is cancelled before capture, the authorization is voided and the held amount is released by the customer's bank. Release timing depends on the bank and is typically 1–10 business days.",
        "Customers are responsible for any fees their own bank or card issuer may charge (e.g. foreign-currency conversion). Sathtak does not add surcharges to the price shown at acceptance.",
      ],
    },
    {
      id: "cancellation",
      heading: "6. Cancellation",
      body: [
        "Either party may cancel a trip before the driver completes the service. Cancellations performed through the Platform are recorded and may affect account standing.",
        "Repeated or abusive cancellations (such as a driver cancelling after accepting to secure a better request, or a customer cancelling after the driver has travelled a significant distance) may result in warnings, temporary suspension, or termination of the account. Where permitted by law, Sathtak may also charge a cancellation fee to cover reasonable costs incurred.",
      ],
    },
    {
      id: "driver-obligations",
      heading: "7. Driver Obligations, Supplier Identity and Platform Fee",
      body: [
        "The driver is the supplier of the towing services to the customer. Sathtak acts as the driver's limited agent solely for the purpose of matching, invoicing, and collecting the trip price through the Platform, and remitting the driver's fare to the driver. Sathtak is not a party to the contract of carriage between the customer and the driver.",
        "Sathtak charges a platform service fee equal to fifteen per cent (15%) of the driver's quoted fare. This fee is paid by the customer in addition to the driver's quoted fare. The total price shown to the customer at offer acceptance is the driver's fare plus the platform service fee. The driver receives one hundred per cent (100%) of the driver's quoted fare; Sathtak does not deduct any amount from the driver's fare. Value added tax on the platform service fee is borne by Sathtak in accordance with Saudi tax law. The platform service fee rate may change from time to time; any change will be communicated in advance and will not apply to trips already booked.",
        "Sathtak does not charge drivers a monthly subscription, a registration fee, or any other fee beyond the platform service fee described above.",
        "Drivers are solely responsible for: maintaining their vehicle in safe working order, holding valid third-party liability insurance, complying with traffic and loading regulations, and delivering the towed vehicle to the customer's stated destination without unreasonable deviation.",
        "Drivers must not solicit payment outside the Platform, offer a lower off-platform price to complete a Platform-originated request, or share customer contact details with third parties.",
      ],
    },
    {
      id: "taxes",
      heading: "8. Taxes",
      body: [
        "Each party is responsible for its own taxes. The driver is solely liable for Value Added Tax (VAT), Zakat, and income tax on the trip fare, including any obligation to register for VAT once the driver's taxable supplies exceed the ZATCA registration threshold.",
        "Any service fee that Sathtak charges the driver (including any future commission) will be stated separately and is subject to VAT per Saudi law. VAT on the Sathtak service fee is charged on that fee only, not on the full trip fare.",
        "Sathtak does not collect or remit VAT on behalf of the driver unless a separate written collection-and-remittance agreement is entered into with that driver. Invoices and receipts issued through the Platform identify the driver as the supplier of the towing service.",
        "If a tax authority reclassifies the supply for any reason and issues an assessment against Sathtak for tax that is economically owed by the driver, the driver will indemnify Sathtak for that amount and any related penalties.",
      ],
    },
    {
      id: "customer-obligations",
      heading: "9. Customer Obligations",
      body: [
        "The customer warrants that the vehicle to be towed is their property or that they are authorized by the owner to request towing.",
        "The customer must disclose any condition of the vehicle that materially affects the tow (e.g. parked in a basement, immobilized wheels, oversize load). Non-disclosure that causes the driver to refuse the job on arrival may result in a cancellation fee.",
        "Abusive, threatening, or unlawful behaviour toward a driver is grounds for immediate termination and may be reported to the authorities.",
      ],
    },
    {
      id: "conduct",
      heading: "10. Prohibited Conduct",
      body: [
        "You agree not to: (a) use the Platform for any unlawful purpose; (b) attempt to bypass the Platform to avoid fees or tracking; (c) upload malicious code or interfere with the Platform's operation; (d) reverse-engineer the Platform except as permitted by law; (e) use another person's account without authorization; or (f) harvest data about other users.",
      ],
    },
    {
      id: "ip",
      heading: "11. Intellectual Property",
      body: [
        "All content, trademarks, software, designs, and compilations on the Platform are owned by Sathtak or its licensors and are protected by Saudi and international intellectual property law. You are granted a limited, revocable, non-exclusive licence to use the Platform for its intended purpose. No rights are granted by implication.",
      ],
    },
    {
      id: "disclaimer",
      heading: "12. Disclaimers",
      body: [
        "The Platform is provided \"as is\" and \"as available\". To the maximum extent permitted by law, Sathtak disclaims all warranties, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement.",
        "Sathtak does not warrant that any particular driver will be available at any particular time, that arrival times will be exact, or that the Platform will be uninterrupted or error-free.",
      ],
    },
    {
      id: "liability",
      heading: "13. Limitation of Liability",
      body: [
        "Because Sathtak is a matching platform and not the carrier, Sathtak is not responsible for damage, loss, injury, or delay caused during the towing service itself. Any claim for damage to the vehicle or property during the tow is between the customer and the driver and, where applicable, the driver's insurer.",
        "To the maximum extent permitted by law, Sathtak's aggregate liability arising from or related to your use of the Platform is limited to the total fees Sathtak has actually collected from you in the twelve (12) months preceding the event giving rise to the claim, or SAR 1,000 — whichever is greater.",
        "Nothing in these Terms excludes liability that cannot be excluded under Saudi law.",
      ],
    },
    {
      id: "indemnity",
      heading: "14. Indemnification",
      body: [
        "You will defend and indemnify Sathtak, its officers, employees, and agents against any claim, loss, or expense (including reasonable legal fees) arising out of: your breach of these Terms; your violation of applicable law; or, for drivers, any incident occurring during the delivery of towing services you perform.",
      ],
    },
    {
      id: "termination",
      heading: "15. Suspension and Termination",
      body: [
        "Sathtak may suspend or terminate your access to the Platform at any time, with or without notice, where we reasonably believe you have breached these Terms, created a safety risk, or engaged in fraud. You may close your account at any time through the app or by writing to support@mankha.sa.",
        "Termination does not release either party from obligations already accrued, including payment of any amounts owed.",
      ],
    },
    {
      id: "changes",
      heading: "16. Changes to these Terms",
      body: [
        "We may amend these Terms from time to time. Material changes will be notified through the Platform or by email at least seven (7) days before they take effect. Continued use of the Platform after the effective date constitutes acceptance of the updated Terms.",
      ],
    },
    {
      id: "law",
      heading: "17. Governing Law and Dispute Resolution",
      body: [
        "These Terms and any dispute arising from them are governed by the laws and regulations of the Kingdom of Saudi Arabia. The parties agree to submit to the exclusive jurisdiction of the competent courts of Riyadh, Saudi Arabia.",
        "Where a dispute can be resolved informally, the parties agree to attempt good-faith resolution before commencing proceedings.",
      ],
    },
    {
      id: "misc",
      heading: "18. Miscellaneous",
      body: [
        "If any provision of these Terms is held unenforceable, the remaining provisions remain in full force. Failure to enforce a right is not a waiver. These Terms are the entire agreement between you and Sathtak regarding the Platform and supersede any prior agreement on the same subject.",
        "These Terms are published in English and Arabic. In the event of a conflict between the two versions, the Arabic version prevails for matters governed by Saudi law.",
      ],
    },
  ],
};

export const TERMS_AR: LegalContent = {
  title: "شروط الخدمة",
  intro:
    "تحكم شروط الخدمة هذه (\"الشروط\") استخدامك لمنصة سطحتك وتطبيقاتها وخدماتها ذات الصلة (\"المنصة\") المُشغّلة من داخل المملكة العربية السعودية. بإنشائك حسابًا أو طلبك سطحة أو قبولك رحلة فإنك توافق على هذه الشروط. إذا لم تكن موافقًا فلا تستخدم المنصة.",
  lastUpdatedLabel: "آخر تحديث",
  backToHome: "رجوع للرئيسية",
  contactHeading: "تواصل معنا",
  contactBody:
    "لأي استفسار عن هذه الشروط راسلنا على support@mankha.sa وسنرد خلال مدة معقولة.",
  sections: [
    {
      id: "platform-role",
      heading: "١. طبيعة المنصة",
      body: [
        "سطحتك منصة تقنية تربط بين العملاء الذين يحتاجون خدمة سحب مركبات وبين سائقي سطحات مستقلين ومعتمدين. نحن لسنا ناقلًا ولا نملك أو نُشغّل السطحات بأنفسنا. تُقدَّم خدمة السحب من قِبل سائقين مستقلين وهم وحدهم المسؤولون عن الخدمة ومركباتهم والالتزام بالأنظمة واللوائح السارية.",
        "باستخدامك المنصة فإنك تُقرّ بأن سطحتك تعمل فقط كوسيط يُيسّر عملية المطابقة والتسعير والدفع بين العميل والسائق.",
      ],
    },
    {
      id: "eligibility",
      heading: "٢. الأهلية",
      body: [
        "يجب ألا يقل عمرك عن ١٨ سنة وأن تكون مؤهلًا قانونيًا لإبرام العقود وفق أنظمة المملكة العربية السعودية.",
        "يجب على السائق أن يحمل رخصة قيادة سارية مناسبة لفئة المركبة، واستمارة سارية، وأي تفاويض لازمة لنقل مركبة شخص آخر. يُقرّ السائق بأن كل الوثائق المرفوعة أثناء التسجيل صحيحة وسارية وتعود له أو للمركبة التي يُشغّلها.",
        "تقديم وثائق مزوّرة أو انتحال شخصية أو رفع مستندات لا تحق لك استخدامها يُعدّ سببًا لإنهاء الخدمة فورًا وقد يُبلَّغ عنه للجهات المختصة.",
      ],
    },
    {
      id: "accounts",
      heading: "٣. الحسابات والتحقق",
      body: [
        "تُنشأ الحسابات برقم الجوال ويتم التحقق عبر رمز لمرة واحدة (OTP). أنت المسؤول عن حماية رقم جوالك، وما يُنجَز عبر الحساب المُتحقَّق منه يُعدّ صادرًا عنك.",
        "تخضع حسابات السائقين لمراجعة يدوية. الموافقة تقديرية وقد تتأخر أو تُرفض أو تُلغى في أي وقت، بما في ذلك حالات انتهاء الوثائق أو المخاوف الأمنية أو تكرار سوء الخدمة.",
      ],
    },
    {
      id: "requests-offers",
      heading: "٤. الطلبات والعروض",
      body: [
        "يستطيع العميل نشر طلب يصف فيه موقع الاستلام والوجهة ونوع المركبة والتفاصيل اللازمة. يرسل السائقون عروض أسعار بالريال السعودي.",
        "قبول العرض لا يُنشئ رحلة بحد ذاته. تُنشأ الرحلة فقط بعد نجاح تفويض الدفع (انظر المادة ٥).",
        "يتعهد الطرفان بالتعامل باحترام وتبادل معلومات صحيحة واتباع تدفق العمل داخل التطبيق (تأكيد الوصول، التقاط الصور، إنهاء الرحلة، ...).",
      ],
    },
    {
      id: "payment",
      heading: "٥. الدفع والتفويض والاستقطاع",
      body: [
        "تُعالج المدفوعات عبر مزود خدمة الدفع Tap Payments. لا تُخزّن سطحتك بيانات البطاقات.",
        "عند قبول العرض يُحجز السعر الإجمالي الظاهر عند القبول على بطاقة العميل. يشمل هذا الإجمالي أجرة السائق ورسم خدمة سطحتك (انظر المادة ٧)، ولن يُستحصل أي مبلغ إضافي مقابل الرحلة. لا يتم أي تحويل فعلي عند التفويض، ويتم الاستقطاع الفعلي فقط عند إتمام الرحلة. والمبلغ المستقطَع يساوي تمامًا السعر الإجمالي الظاهر عند القبول.",
        "إذا أُلغيت الرحلة قبل الاستقطاع فإن التفويض يُلغى ويُفرَج عن المبلغ المحجوز عبر بنك العميل. توقيت الإفراج يعتمد على البنك ويكون عادةً بين ١ و١٠ أيام عمل.",
        "يتحمل العميل أي رسوم يفرضها بنكه أو مُصدِر بطاقته (كرسوم تحويل العملة). لا تُضيف سطحتك أي رسوم على السعر الظاهر عند القبول.",
      ],
    },
    {
      id: "cancellation",
      heading: "٦. الإلغاء",
      body: [
        "يحق لكل طرف إلغاء الرحلة قبل أن يُكمل السائق الخدمة. تُسجَّل الإلغاءات التي تتم داخل المنصة وقد تؤثر على تصنيف الحساب.",
        "الإلغاءات المتكررة أو غير المبررة (مثل إلغاء السائق بعد القبول للبحث عن طلب أفضل، أو إلغاء العميل بعد قطع السائق مسافة كبيرة) قد ينتج عنها تحذيرات أو إيقاف مؤقت أو إنهاء للحساب. ويجوز لسطحتك، ضمن ما يسمح به النظام، فرض رسم إلغاء لتغطية التكاليف المعقولة.",
      ],
    },
    {
      id: "driver-obligations",
      heading: "٧. التزامات السائق وتحديد مُقدِّم الخدمة ورسم المنصة",
      body: [
        "السائق هو مُقدِّم خدمة السحب للعميل. وتعمل سطحتك بصفتها وكيلًا محدود الصلاحيات عن السائق لغرض وحيد هو المطابقة وإصدار الفواتير وتحصيل ثمن الرحلة عبر المنصة وتحويل أجرة السائق إليه. وسطحتك ليست طرفًا في عقد النقل بين العميل والسائق.",
        "تفرض سطحتك رسم خدمة منصة يعادل خمسة عشر بالمئة (١٥٪) من الأجرة التي يعرضها السائق. يُسدّد هذا الرسم من العميل علاوة على أجرة السائق. ويمثّل السعر الإجمالي الظاهر للعميل عند قبول العرض مجموع أجرة السائق ورسم خدمة المنصة. ويستلم السائق مئة بالمئة (١٠٠٪) من الأجرة التي عرضها، ولا تقتطع سطحتك أي مبلغ منها. وتتحمّل سطحتك ضريبة القيمة المضافة على رسم خدمة المنصة وفق النظام السعودي. وقد يتغيّر رسم الخدمة من وقت لآخر؛ ويُبلَّغ عن أي تغيير مسبقًا ولا يسري على الرحلات المحجوزة.",
        "لا تفرض سطحتك على السائق اشتراكًا شهريًا ولا رسوم تسجيل ولا أي رسم آخر يتجاوز رسم خدمة المنصة المذكور أعلاه.",
        "السائق وحده مسؤول عن: سلامة مركبته، وحمل تأمين ضد الغير ساري، والالتزام بأنظمة المرور والحمولة، وإيصال المركبة المسحوبة إلى الوجهة المحددة دون انحراف غير مبرر.",
        "يُمنع على السائق طلب أي دفعة خارج المنصة أو عرض سعر أقل خارجها لإتمام طلب صادر عبرها أو مشاركة بيانات العميل مع أي طرف ثالث.",
      ],
    },
    {
      id: "taxes",
      heading: "٨. الضرائب والزكاة",
      body: [
        "كل طرف مسؤول عن ضرائبه. السائق وحده مسؤول عن ضريبة القيمة المضافة والزكاة وضريبة الدخل على أجرة الرحلة، بما في ذلك التزامه بالتسجيل في ضريبة القيمة المضافة متى تجاوزت مبيعاته الخاضعة للضريبة الحد المقرر من هيئة الزكاة والضريبة والجمارك.",
        "أي رسم خدمة تفرضه سطحتك على السائق (بما في ذلك أي عمولة مستقبلية) يُبيَّن بشكل منفصل ويخضع لضريبة القيمة المضافة وفق النظام السعودي. وتُحتسب ضريبة القيمة المضافة على رسم خدمة سطحتك فقط، لا على كامل أجرة الرحلة.",
        "لا تُحصّل سطحتك ضريبة القيمة المضافة ولا تُورّدها نيابةً عن السائق ما لم يُبرَم اتفاق خطي مستقل للتحصيل والتوريد مع ذلك السائق. وتُصدر الفواتير والإيصالات عبر المنصة مبينةً السائق بوصفه مُقدِّم خدمة السحب.",
        "إذا أعادت أي جهة ضريبية تصنيف التوريد لأي سبب وأصدرت ربطًا ضريبيًا على سطحتك عن ضريبة يتحملها السائق اقتصاديًا، فإن السائق يُعوّض سطحتك عن ذلك المبلغ وأي غرامات مرتبطة به.",
      ],
    },
    {
      id: "customer-obligations",
      heading: "٩. التزامات العميل",
      body: [
        "يُقرّ العميل بأن المركبة المطلوب سحبها تعود له أو أنه مُخوَّل من مالكها لطلب السحب.",
        "يجب على العميل الإفصاح عن أي ظرف يؤثر جوهريًا على السحب (كوجود المركبة في قبو، أو عجلات مُعطَّلة، أو حمولة زائدة). الإخفاء الذي يضطر السائق لرفض العمل عند الوصول قد يترتب عليه رسم إلغاء.",
        "أي سلوك مسيء أو تهديد أو غير مشروع تجاه السائق يُعدّ سببًا لإنهاء الحساب فورًا وقد يُبلَّغ للجهات المختصة.",
      ],
    },
    {
      id: "conduct",
      heading: "١٠. السلوك المحظور",
      body: [
        "توافق على ألا: (أ) تستخدم المنصة لأي غرض غير مشروع؛ (ب) تتحايل على المنصة لتفادي الرسوم أو التتبع؛ (ج) ترفع برمجيات ضارة أو تُعطّل عمل المنصة؛ (د) تُعيد هندسة المنصة إلا في حدود ما يسمح به النظام؛ (هـ) تستخدم حساب غيرك دون إذن؛ (و) تجمع بيانات المستخدمين الآخرين.",
      ],
    },
    {
      id: "ip",
      heading: "١١. الملكية الفكرية",
      body: [
        "جميع المحتويات والعلامات التجارية والبرمجيات والتصاميم الخاصة بالمنصة مملوكة لسطحتك أو لمرخِّصيها ومحمية بموجب أنظمة الملكية الفكرية السعودية والدولية. يُمنح لك ترخيص محدود غير حصري وقابل للإلغاء لاستخدام المنصة للغرض المقصود منها.",
      ],
    },
    {
      id: "disclaimer",
      heading: "١٢. إخلاء المسؤولية",
      body: [
        "تُقدَّم المنصة \"كما هي\" و\"حسب التوفر\". في أقصى حد يسمح به النظام، تُخلي سطحتك مسؤوليتها عن جميع الضمانات الصريحة والضمنية بما في ذلك التسويق وملاءمة غرض معين وعدم التعدي.",
        "لا تضمن سطحتك توفر سائق معين في وقت معين، ولا دقة أوقات الوصول، ولا استمرارية المنصة دون انقطاع أو أخطاء.",
      ],
    },
    {
      id: "liability",
      heading: "١٣. تحديد المسؤولية",
      body: [
        "بما أن سطحتك منصة ربط وليست ناقلًا، فلن تكون مسؤولة عن الأضرار أو الخسائر أو الإصابات أو التأخيرات الناشئة أثناء تقديم خدمة السحب نفسها. أي مطالبة عن تلف المركبة أو الممتلكات أثناء السحب تكون بين العميل والسائق، ومُؤمِّن السائق إن وُجد.",
        "في أقصى حد يسمح به النظام، تقتصر مسؤولية سطحتك الإجمالية الناشئة عن أو المتعلقة باستخدامك للمنصة على إجمالي الرسوم التي حصّلتها سطحتك منك فعليًا خلال اثني عشر (١٢) شهرًا السابقة للحدث، أو ١٬٠٠٠ ريال سعودي، أيهما أكبر.",
        "لا شيء في هذه الشروط يستثني مسؤولية لا يمكن استثناؤها بموجب الأنظمة السعودية.",
      ],
    },
    {
      id: "indemnity",
      heading: "١٤. التعويض",
      body: [
        "توافق على الدفاع عن سطحتك ومسؤوليها وموظفيها ووكلائها وتعويضهم عن أي مطالبة أو خسارة أو نفقة (بما فيها أتعاب المحاماة المعقولة) ناشئة عن: إخلالك بهذه الشروط؛ أو مخالفتك للأنظمة السارية؛ أو بالنسبة للسائق، أي حادث يقع أثناء تقديمك لخدمة السحب.",
      ],
    },
    {
      id: "termination",
      heading: "١٥. الإيقاف والإنهاء",
      body: [
        "يحق لسطحتك إيقاف وصولك للمنصة أو إنهاؤه في أي وقت، بإشعار أو دونه، إذا رأت بشكل معقول أنك أخللت بالشروط أو أحدثت خطرًا على السلامة أو مارست احتيالًا. ويحق لك إغلاق حسابك في أي وقت من داخل التطبيق أو بمراسلة support@mankha.sa.",
        "لا يُعفي الإنهاء أيًا من الطرفين من الالتزامات القائمة، بما فيها أي مبالغ مستحقة.",
      ],
    },
    {
      id: "changes",
      heading: "١٦. تعديل هذه الشروط",
      body: [
        "قد نُعدّل هذه الشروط من وقت لآخر. يُبلَّغ عن التعديلات الجوهرية عبر المنصة أو البريد الإلكتروني قبل سريانها بسبعة (٧) أيام على الأقل. استمرار استخدامك للمنصة بعد تاريخ السريان يُعدّ قبولًا للتعديلات.",
      ],
    },
    {
      id: "law",
      heading: "١٧. النظام المُطبَّق وتسوية النزاعات",
      body: [
        "تخضع هذه الشروط وأي نزاع ناشئ عنها لأنظمة المملكة العربية السعودية. يتفق الطرفان على الاختصاص الحصري للمحاكم المختصة في مدينة الرياض.",
        "متى كان الحل الودي ممكنًا يسعى الطرفان له بحسن نية قبل اللجوء للقضاء.",
      ],
    },
    {
      id: "misc",
      heading: "١٨. أحكام عامة",
      body: [
        "إذا تعذّر تنفيذ أي بند من هذه الشروط تبقى بقية البنود سارية. عدم ممارسة حق لا يُعدّ تنازلًا عنه. تُمثّل هذه الشروط الاتفاق الكامل بينك وبين سطحتك وتلغي أي اتفاق سابق في الموضوع ذاته.",
        "تُنشر هذه الشروط بالعربية والإنجليزية. عند أي تعارض، تسود النسخة العربية في المسائل الخاضعة للنظام السعودي.",
      ],
    },
  ],
};

// ---------- PRIVACY POLICY ----------

export const PRIVACY_EN: LegalContent = {
  title: "Privacy Policy",
  intro:
    "This Privacy Policy explains how Sathtak (the \"Company\", \"we\", \"us\") collects, uses, discloses, and protects personal data when you use our platform, mobile applications, and related services in the Kingdom of Saudi Arabia. This Policy is written in line with the Saudi Personal Data Protection Law (PDPL) and its implementing regulations.",
  lastUpdatedLabel: "Last updated",
  backToHome: "Back to home",
  contactHeading: "Contact the Data Controller",
  contactBody:
    "For questions about your personal data or to exercise your rights, email support@mankha.sa. We reply within the statutory period set by the PDPL.",
  sections: [
    {
      id: "controller",
      heading: "1. Who we are",
      body: [
        "Sathtak is a technology platform that matches customers with independent tow truck drivers across Saudi Arabia. For the purposes of the PDPL we are the controller of the personal data we collect from customers and drivers through our apps and website.",
      ],
    },
    {
      id: "data-collected",
      heading: "2. Personal data we collect",
      body: [
        "Account data: phone number, display name, preferred language, and the role you register under (customer or driver).",
        "Driver verification data: national ID number, driving licence, vehicle registration, vehicle photos, optional authorization letter, and the truck type you operate. We rely on this data to meet our lawful obligation to verify operators on the Platform.",
        "Trip and location data: pickup and destination coordinates, addresses, route information, and live GPS position while a trip is active. Live position is collected only while you are actively using the relevant trip.",
        "Photo evidence: photos captured at pickup, loading, delivery, and completion, which are used to document the service.",
        "Payment data: the agreed trip price, payment identifiers, authorization and capture status. Card numbers and CVV are collected and processed directly by our payment service provider (Tap Payments) and are not stored by Sathtak.",
        "Device and diagnostics: IP address, device model, operating system, approximate location from network signals, crash reports, and basic analytics.",
        "Communications: messages sent to support, notifications delivered via SMS or WhatsApp, and records of in-app actions.",
      ],
    },
    {
      id: "purposes",
      heading: "3. Why we use your data",
      body: [
        "To operate the Platform: create and authenticate accounts, match customers with nearby drivers, show offers, compute trip progress, deliver notifications, and display ratings.",
        "To process payments: authorize the agreed amount, capture on trip completion, void authorizations on cancellation, and handle refunds where applicable.",
        "To protect safety and prevent fraud: verify driver documents, detect suspicious patterns, investigate incidents, and enforce these Terms and our internal safety policies.",
        "To comply with legal obligations, including requests from competent authorities and tax, consumer protection, and transport regulations.",
        "To improve the service: aggregated and de-identified analysis of usage patterns and service performance.",
      ],
    },
    {
      id: "legal-basis",
      heading: "4. Legal basis for processing",
      body: [
        "We process personal data on the following bases, as permitted by the PDPL: (a) performance of the contract you entered with us when you accepted the Terms; (b) compliance with legal obligations; (c) protection of vital interests (for example, sharing location with emergency services in a safety incident); and (d) our legitimate interests in operating and securing the Platform, where these are not overridden by your rights.",
      ],
    },
    {
      id: "sharing",
      heading: "5. Who we share data with",
      body: [
        "The other party to your trip: customers see the driver's name, truck type, plate, rating, and live location while the trip is active; drivers see the customer's pickup and destination and the agreed price. We do not share your phone number with the other party by default.",
        "Tap Payments: payment service provider that processes card data and authorizations.",
        "Cloud storage: we use Cloudflare R2 (S3-compatible object storage) to host uploaded photos and documents under secure URLs.",
        "Messaging providers: SMS and WhatsApp providers used to deliver OTPs and trip notifications.",
        "Law enforcement and regulators, where we are required by law or compelled by a valid order to disclose data.",
        "Professional advisors (legal, accounting, auditors) bound by duties of confidentiality.",
        "We do not sell personal data. We do not use your personal data for third-party advertising.",
      ],
    },
    {
      id: "retention",
      heading: "6. Retention",
      body: [
        "Account data: retained while your account is active and for a reasonable period after closure to support dispute resolution, legal obligations, and anti-fraud analysis.",
        "Driver KYC documents: retained for the period required by Saudi law and internal risk policy, and for the duration of the driver's relationship with Sathtak.",
        "Trip records and location traces: retained to support customer support, audits, and legal claims. Raw high-frequency location points may be aggregated or deleted after a shorter period.",
        "Payment records: retained for the period required by tax and accounting law.",
        "We delete or anonymize personal data when the retention period ends and there is no other lawful ground to keep it.",
      ],
    },
    {
      id: "cross-border",
      heading: "7. Cross-border transfers",
      body: [
        "Our primary infrastructure is hosted in the Kingdom of Saudi Arabia or in regions permitted under the PDPL. Where a service provider processes data outside the Kingdom, we rely on the PDPL's conditions for cross-border transfers and require the provider to apply safeguards equivalent to those we apply ourselves.",
      ],
    },
    {
      id: "rights",
      heading: "8. Your rights",
      body: [
        "Subject to the PDPL you have the right to: be informed of how your data is processed; access your data; request correction of inaccurate data; request deletion where processing is no longer necessary and no other lawful ground applies; and object to processing for specific purposes.",
        "To exercise a right, write to support@mankha.sa from the phone number or email linked to your account. We may ask you to verify your identity. We respond within the period required by the PDPL.",
        "You also have the right to file a complaint with the competent Saudi authority supervising personal data protection.",
      ],
    },
    {
      id: "security",
      heading: "9. Security",
      body: [
        "We use industry-standard technical and organizational measures to protect personal data, including encryption in transit (HTTPS/TLS), authenticated object-storage URLs, JWT-based access control, role separation, and logging. No system is entirely secure; we continually improve our controls and promptly notify affected users of any breach that poses material risk, as required by law.",
      ],
    },
    {
      id: "children",
      heading: "10. Children",
      body: [
        "The Platform is not directed to persons under the age of 18. We do not knowingly collect data from minors. If you believe a minor has created an account, contact us and we will remove the account.",
      ],
    },
    {
      id: "cookies",
      heading: "11. Cookies and similar technologies",
      body: [
        "Our websites and apps use strictly necessary cookies and local storage to keep you signed in, remember your language preference, and secure sessions. We do not use third-party advertising cookies. You can clear cookies from your device at any time, but doing so may log you out.",
      ],
    },
    {
      id: "changes",
      heading: "12. Changes to this Policy",
      body: [
        "We may update this Policy to reflect changes in law, technology, or our operations. We will notify you of material changes through the Platform or by email at least seven (7) days before they take effect.",
      ],
    },
  ],
};

export const PRIVACY_AR: LegalContent = {
  title: "سياسة الخصوصية",
  intro:
    "توضح سياسة الخصوصية هذه كيف تجمع سطحتك (\"الشركة\"، \"نحن\") بياناتك الشخصية وتستخدمها وتُفصح عنها وتحميها أثناء استخدامك لمنصتنا وتطبيقاتنا وخدماتها ذات الصلة داخل المملكة العربية السعودية. وقد صيغت هذه السياسة بما يتوافق مع نظام حماية البيانات الشخصية السعودي (PDPL) ولوائحه التنفيذية.",
  lastUpdatedLabel: "آخر تحديث",
  backToHome: "رجوع للرئيسية",
  contactHeading: "التواصل مع صاحب الصلاحية على البيانات",
  contactBody:
    "لأي استفسار حول بياناتك الشخصية أو لممارسة حقوقك راسلنا على support@mankha.sa وسنرد خلال المدة التي يحددها النظام.",
  sections: [
    {
      id: "controller",
      heading: "١. من نحن",
      body: [
        "سطحتك منصة تقنية تربط العملاء بسائقي سطحات مستقلين في المملكة العربية السعودية. لأغراض نظام حماية البيانات الشخصية نحن صاحب الصلاحية على البيانات التي نجمعها من العملاء والسائقين عبر تطبيقاتنا وموقعنا.",
      ],
    },
    {
      id: "data-collected",
      heading: "٢. البيانات التي نجمعها",
      body: [
        "بيانات الحساب: رقم الجوال، الاسم الظاهر، اللغة المفضلة، والدور الذي تسجّل به (عميل أو سائق).",
        "بيانات التحقق للسائق: رقم الهوية الوطنية، رخصة القيادة، استمارة المركبة، صور المركبة، تفويض اختياري، ونوع السطحة. نجمع هذه البيانات التزامًا بواجب التحقق من مشغّلي المنصة.",
        "بيانات الرحلة والموقع: إحداثيات نقطة الاستلام والوجهة، العناوين، معلومات المسار، والموقع الحي أثناء تنفيذ الرحلة. يُجمع الموقع الحي فقط خلال الرحلة النشطة.",
        "الصور التوثيقية: الصور المُلتقطة عند الاستلام والتحميل والتسليم والإنهاء لتوثيق الخدمة.",
        "بيانات الدفع: السعر المتفق عليه، معرّفات العملية، حالة التفويض والاستقطاع. أما أرقام البطاقات ورمز CVV فيُعالَجها مزود الدفع (Tap Payments) مباشرة ولا تُخزَّن لدى سطحتك.",
        "بيانات الجهاز والتشخيص: عنوان IP، طراز الجهاز، نظام التشغيل، الموقع التقريبي من إشارات الشبكة، تقارير الأعطال، والتحليلات الأساسية.",
        "المراسلات: الرسائل المُرسَلة للدعم، التنبيهات عبر SMS أو واتساب، وسجلات الإجراءات داخل التطبيق.",
      ],
    },
    {
      id: "purposes",
      heading: "٣. لماذا نستخدم بياناتك",
      body: [
        "لتشغيل المنصة: إنشاء الحسابات والتحقق منها، ومطابقة العملاء بالسائقين القريبين، وعرض العروض، وتتبع سير الرحلة، وإرسال التنبيهات، وعرض التقييمات.",
        "لمعالجة المدفوعات: تفويض المبلغ المتفق عليه، واستقطاعه عند إنهاء الرحلة، وإلغاء التفويض عند الإلغاء، ومعالجة المبالغ المستردة عند اللزوم.",
        "لحماية السلامة ومنع الاحتيال: التحقق من وثائق السائقين، ورصد الأنماط المشبوهة، والتحقيق في الحوادث، وتطبيق الشروط وسياسات السلامة الداخلية.",
        "للالتزام بالواجبات النظامية، بما فيها طلبات الجهات المختصة وأنظمة الضريبة وحماية المستهلك والنقل.",
        "لتحسين الخدمة: تحليل إجمالي ومجهول الهوية لأنماط الاستخدام وأداء الخدمة.",
      ],
    },
    {
      id: "legal-basis",
      heading: "٤. الأساس النظامي للمعالجة",
      body: [
        "نُعالج بياناتك الشخصية استنادًا إلى ما يُجيزه نظام حماية البيانات الشخصية: (أ) تنفيذ العقد الذي أبرمته معنا بقبول الشروط؛ (ب) الالتزام بالواجبات النظامية؛ (ج) حماية المصالح الحيوية (كمشاركة الموقع مع جهات الطوارئ في حوادث السلامة)؛ (د) مصالحنا المشروعة في تشغيل المنصة وتأمينها بما لا يطغى على حقوقك.",
      ],
    },
    {
      id: "sharing",
      heading: "٥. مع من نشارك بياناتك",
      body: [
        "الطرف الآخر في الرحلة: يرى العميل اسم السائق ونوع السطحة ورقم اللوحة وتقييمه وموقعه الحي أثناء الرحلة؛ ويرى السائق نقطة الاستلام والوجهة والسعر المتفق عليه. لا نُشارك رقم جوالك مع الطرف الآخر افتراضيًا.",
        "Tap Payments: مزود خدمة الدفع الذي يُعالج بيانات البطاقات والتفويضات.",
        "التخزين السحابي: نستخدم Cloudflare R2 (تخزين كائنات متوافق مع S3) لاستضافة الصور والوثائق المرفوعة عبر روابط مؤمَّنة.",
        "مزودو الرسائل: مزودو SMS وواتساب لإرسال رموز التحقق وإشعارات الرحلة.",
        "الجهات الأمنية والجهات التنظيمية عند اشتراط النظام الإفصاح أو صدور أمر صحيح.",
        "المستشارون المهنيون (قانونيون، محاسبون، مراجعون) المُلتزمون بالسرية.",
        "لا نبيع البيانات الشخصية. ولا نستخدمها للإعلان لدى أطراف ثالثة.",
      ],
    },
    {
      id: "retention",
      heading: "٦. فترة الاحتفاظ",
      body: [
        "بيانات الحساب: تُحفظ ما دام حسابك نشطًا ولمدة معقولة بعد إغلاقه دعمًا لتسوية النزاعات والواجبات النظامية وتحليل الاحتيال.",
        "وثائق اعرف عميلك للسائق: تُحفظ للمدة المطلوبة نظامًا ووفق سياسة المخاطر الداخلية وطوال فترة علاقة السائق بسطحتك.",
        "سجلات الرحلات والمواقع: تُحفظ لدعم الدعم الفني والمراجعات والمطالبات. وقد تُجمع نقاط الموقع عالية التردد أو تُحذف بعد فترة أقصر.",
        "سجلات الدفع: تُحفظ للمدة المطلوبة نظامًا لأغراض الضريبة والمحاسبة.",
        "نحذف البيانات الشخصية أو نجهّلها عند انتهاء فترة الاحتفاظ وعدم وجود أساس نظامي آخر للاحتفاظ بها.",
      ],
    },
    {
      id: "cross-border",
      heading: "٧. نقل البيانات عبر الحدود",
      body: [
        "البنية التحتية الأساسية مستضافة داخل المملكة العربية السعودية أو في مناطق مسموح بها وفق نظام حماية البيانات. وعند معالجة البيانات من قِبل مزود خارج المملكة، نلتزم بالشروط النظامية للنقل عبر الحدود ونشترط على المزود ضمانات مماثلة لما نعتمده.",
      ],
    },
    {
      id: "rights",
      heading: "٨. حقوقك",
      body: [
        "وفق نظام حماية البيانات الشخصية يحق لك: معرفة كيفية معالجة بياناتك، والاطلاع عليها، وطلب تصحيح غير الصحيح منها، وطلب حذفها عند عدم الحاجة لمعالجتها وعدم وجود أساس نظامي آخر، والاعتراض على المعالجة لأغراض معينة.",
        "لممارسة أي حق راسلنا على support@mankha.sa من رقم الجوال أو البريد المرتبط بحسابك. قد نطلب التحقق من هويتك، ونرد خلال المدة التي يحددها النظام.",
        "كما يحق لك تقديم شكوى للجهة المختصة في المملكة بالإشراف على حماية البيانات الشخصية.",
      ],
    },
    {
      id: "security",
      heading: "٩. الأمان",
      body: [
        "نطبّق تدابير تقنية وتنظيمية وفق أفضل الممارسات لحماية البيانات، منها التشفير أثناء النقل (HTTPS/TLS)، وروابط تخزين موقعة، وضبط الوصول عبر JWT، وفصل الأدوار، والتسجيل. لا يوجد نظام آمن تمامًا، ونُحسّن ضوابطنا باستمرار، ونُبلغ المستخدمين المتأثرين بأي اختراق جوهري بحسب ما يشترطه النظام.",
      ],
    },
    {
      id: "children",
      heading: "١٠. القاصرون",
      body: [
        "المنصة غير موجّهة لمن هم دون الثامنة عشرة، ولا نجمع بيانات القاصرين عن علم. إذا رأيت أن قاصرًا أنشأ حسابًا فأبلغنا وسنُلغي الحساب.",
      ],
    },
    {
      id: "cookies",
      heading: "١١. ملفات الارتباط والتقنيات المشابهة",
      body: [
        "تستخدم مواقعنا وتطبيقاتنا ملفات ارتباط ضرورية وتخزينًا محليًا لإبقائك مسجّل الدخول وتذكّر لغتك المفضلة وتأمين الجلسات. لا نستخدم ملفات ارتباط إعلانية لأطراف ثالثة. ويمكنك مسحها في أي وقت، وقد يُسجِّلك ذلك للخروج.",
      ],
    },
    {
      id: "changes",
      heading: "١٢. تعديل هذه السياسة",
      body: [
        "قد نُحدّث هذه السياسة لمواكبة تغيّر الأنظمة أو التقنية أو عملياتنا، ونُشعرك بالتعديلات الجوهرية عبر المنصة أو البريد الإلكتروني قبل سريانها بسبعة (٧) أيام على الأقل.",
      ],
    },
  ],
};

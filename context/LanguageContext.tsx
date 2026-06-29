"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Translation dictionary
const translations = {
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.why": "لماذا فولتكس",
    "nav.how": "كيف نعمل",
    "nav.portfolio": "أعمالنا",
    "nav.pricing": "الأسعار",
    "nav.faq": "الأسئلة الشائعة",
    "nav.cta": "اطلب صفحتك",
    // Hero
    "hero.tagline": "نعزز المبيعات. ونقوّي العلامات التجارية.",
    "hero.sub": "نصمم ونبني صفحات هبوط خارجية فائقة السرعة للـ COD مع ربط مباشر لـ Google Sheets. حلول رقمية تدفع نمو تجارتك للأمام في الجزائر.",
    "hero.ctaPrimary": "اطلب صفحتك الآن",
    "hero.ctaSecondary": "تصفح أعمالنا",
    // Why Voltix
    "why.title": "لماذا تختار فولتكس ديجيتال؟",
    "why.sub": "كل ما تحتاجه لمضاعفة نسبة التحويل (Conversion Rate) ومضاعفة مبيعات متجرك الإلكتروني.",
    "why.card1.title": "أقل من 2 ثانية تحميل",
    "why.card1.desc": "صفحات هبوط شديدة السرعة وخفيفة الحجم لضمان عدم ضياع أي زائر وضمان بقائهم في موقعك.",
    "why.card2.title": "69 ولاية + البلديات",
    "why.card2.desc": "تغطية كاملة تدعم الولايات الـ 69 الجديدة والبلديات مدمجة تلقائياً لتسهيل ملء بيانات الشحن للزبون.",
    "why.card3.title": "Google Sheets تلقائي",
    "why.card3.desc": "وصول فوري وتلقائي لطلبات الزبائن في ملف إكسل خاص بك بدون تعقيدات لوحة التحكم.",
    "why.card4.title": "تصميم متجاوب",
    "why.card4.desc": "تجربة تصفح مثالية وسلسة مصممة للهواتف الذكية أولاً كونها مصدر 90% من زوار الدفع عند الاستلام.",
    "why.card5.title": "تصميم مخصص 100%",
    "why.card5.desc": "لا نستخدم قوالب جاهزة أو ووردبريس. نصمم ونبرمج صفحتك من الصفر لتناسب هوية منتجك وتتميز عن المنافسين.",
    "why.card6.title": "ربط مباشر مع WhatsApp",
    "why.card6.desc": "توجيه تلقائي ومباشر لمعلومات الزبون إلى حساب الواتساب الخاص بك لتسهيل تأكيد الطلبات فوراً.",
    // How It Works
    "how.title": "كيف نعمل؟",
    "how.sub": "خطوات بسيطة ومدروسة للحصول على صفحة هبوط احترافية عالية التحويل في 48 ساعة فقط.",
    "how.step1.title": "تواصل معنا",
    "how.step1.desc": "املأ استمارة الطلب بالمعلومات الأساسية لمنتجك، وسنتواصل معك فوراً لمناقشة أهدافك وهويتك البصرية.",
    "how.step2.title": "نصمم صفحتك",
    "how.step2.desc": "نقوم بكتابة نصوص مقنعة ودراسة زوايا البيع لمنتجك، ثم نصمم واجهة مخصصة 100% لتحفيز الزوار على الشراء.",
    "how.step3.title": "تراجع وتوافق",
    "how.step3.desc": "نرسل لك رابطاً تجريبياً حياً لصفحتك لتراجع الألوان، النصوص والسرعة، ونعدل عليها حتى ترضى تماماً.",
    "how.step4.title": "ننشر الصفحة",
    "how.step4.desc": "نقوم برفع الصفحة على استضافتنا السريعة وربطها بملف Google Sheets الخاص بك لتبدأ استقبال الطلبات مباشرة.",
    // Portfolio
    "portfolio.title": "أحدث أعمالنا",
    "portfolio.sub": "تصفح عينات حية من صفحات الهبوط السريعة التي صممناها لشركائنا وحققت مبيعات قياسية.",
    "portfolio.badge": "مستضافة على Netlify ⚡",
    "portfolio.view": "شوف الصفحة",
    // Pricing
    "pricing.title": "استثمار بسيط، عائد مالي ضخم",
    "pricing.sub": "باقة انطلاق شاملة وشفافة لأول 3 عملاء فقط (متبقي مقعد واحد فقط بسعر العرض!).",
    "pricing.badge": "عرض الانطلاق",
    "pricing.plan": "باقة الانطلاق / Launch Plan",
    "pricing.priceLabel": "السعر الحالي:",
    "pricing.futurePrice": "يرتفع السعر إلى 5,000 دج بعد اكتمال أول 3 عملاء.",
    "pricing.cta": "احجز صفحتك الآن",
    "pricing.payment": "طرق دفع مرنة: بريدي موب BaridiMob أو CCP",
    "pricing.titleCard": "احجز مقعدك اليوم",
    "pricing.descCard": "ابدأ فوراً واستفد من أسرع استضافة ونظام ربط تلقائي للطلبات في الجزائر.",
    // FAQ
    "faq.title": "الأسئلة الشائعة",
    "faq.sub": "إليك الإجابات على أكثر الأسئلة طرحاً من قبل شركائنا.",
    "faq.q1": "كم يستغرق وقت تسليم الصفحة؟",
    "faq.a1": "يستغرق العمل 48 ساعة كحد أقصى من تاريخ استلام محتوى المنتج (الصور والنصوص والأسعار).",
    "faq.q2": "كم عدد التعديلات المجانية المتاحة؟",
    "faq.a2": "نقدم 3 جولات تعديل ومراجعة مجانية بالكامل بعد تسليم الصفحة الأولى، لضمان توافق التصميم، الألوان، والنصوص مع رؤيتك وهويتك البصرية.",
    "faq.q3": "كيف تصلني طلبات الزبائن (Leads)؟",
    "faq.a3": "بمجرد أن يقوم الزبون بملء معلوماته (الاسم والولاية والبلدية والهاتف) والضغط على زر الطلب، تظهر بياناته فوراً وتلقائياً في ملف Google Sheets (إكسل أونلاين) الخاص بك بشكل منظم وثنائي الاتجاه بدون أي تأخير.",
    "faq.q4": "هل الصفحة تشتغل بشكل مثالي على الموبايل؟",
    "faq.a4": "نعم، جميع صفحاتنا مصممة ومنسقة بمبدأ (Mobile-First) لتكون سريعة جداً ومتجاوبة 100% مع الهواتف واللوحات الرقمية كونها مصدر 90% إلى 95% من الزوار الفعليين في سوق الدفع عند الاستلام (COD) في الجزائر.",
    // Contact
    "contact.title": "ابدأ مشروعك اليوم",
    "contact.sub": "دعنا نصمم صفحة هبوط احترافية تضاعف مبيعاتك في التجارة الإلكترونية.",
    "contact.form.name": "الاسم الكامل",
    "contact.form.phone": "رقم الهاتف (الجزائر)",
    "contact.form.desc": "وصف المنتج وملاحظاتك",
    "contact.form.placeholderName": "محمد بلقاسم",
    "contact.form.placeholderPhone": "06XXXXXXXX",
    "contact.form.placeholderDesc": "أريد صفحة هبوط لمنتج سماعات رأس بلوتوث بلونين أسود وأبيض...",
    "contact.form.btn": "إرسال الطلب والبدء",
    "contact.form.success": "تم تحويلك إلى واتساب لإتمام الطلب، سنتواصل معك فوراً!",
    "contact.wa.title": "راسلنا مباشرة على واتساب",
    "contact.wa.desc": "إذا كان لديك أي استفسار أو تفضل النقاش عبر محادثة مباشرة وسريعة، اضغط على الزر أدناه وسنجيبك في الحين!",
    "contact.wa.btn": "راسلنا الآن",
    "contact.wa.orEmail": "أو عبر البريد الإلكتروني / Email",
    // Footer
    "footer.sub": "نعزز المبيعات ونقوّي العلامات التجارية. صفحات هبوط سريعة جداً تزيد مبيعاتك في الجزائر.",
    "footer.copyright": "حقوق الطبع محفوظة. صنع بحب في الجزائر 🇩🇿",
    "footer.privacy": "سياسة الخصوصية / Privacy Policy",
    "footer.terms": "شروط الخدمة / Terms of Service",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.why": "Why Voltix",
    "nav.how": "How It Works",
    "nav.portfolio": "Portfolio",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.cta": "Order Page",
    // Hero
    "hero.tagline": "Powering Sales. Empowering Brands.",
    "hero.sub": "We design and build custom, ultra-fast landing pages optimized for COD conversions in Algeria. Integrated directly with Google Sheets for smooth order tracking.",
    "hero.ctaPrimary": "Order Your Page Now",
    "hero.ctaSecondary": "Browse Portfolio",
    // Why Voltix
    "why.title": "Why Choose Voltix?",
    "why.sub": "Everything you need to double your conversion rate and maximize your e-commerce sales.",
    "why.card1.title": "Under 2s Load Time",
    "why.card1.desc": "Lightning fast page loading speeds to ensure you never lose a potential customer.",
    "why.card2.title": "69 Wilayas & Communes",
    "why.card2.desc": "Built-in dropdown codes for all 69 Algerian provinces and municipalities to make shipping info entry easy.",
    "why.card3.title": "Auto Google Sheets",
    "why.card3.desc": "Instant automated syncing of incoming customer leads directly to your custom Excel spreadsheet.",
    "why.card4.title": "Responsive Layout",
    "why.card4.desc": "Optimized design tailored for smartphones, which drive 90%+ of Algerian COD buyer traffic.",
    "why.card5.title": "100% Custom Built",
    "why.card5.desc": "No pre-built generic templates or slow WordPress sites. Coded from scratch to fit your product.",
    "why.card6.title": "WhatsApp Integration",
    "why.card6.desc": "Automated redirection sending user order details directly to your WhatsApp to close sales faster.",
    // How It Works
    "how.title": "How It Works",
    "how.sub": "Simple, structured steps to get a high-converting landing page in under 48 hours.",
    "how.step1.title": "Contact Us",
    "how.step1.desc": "Fill in the order form with your product details, and we will contact you immediately to discuss.",
    "how.step2.title": "We Design Page",
    "how.step2.desc": "We write compelling copy and design custom interfaces tailored to convert your visitors.",
    "how.step3.title": "Review & Approve",
    "how.step3.desc": "We send you a live preview link to review, tweak, and approve the copy, colors, and layout.",
    "how.step4.title": "Launch & Sync",
    "how.step4.desc": "We host your page on high-speed servers and connect it directly to your custom Google Sheet.",
    // Portfolio
    "portfolio.title": "Our Latest Work",
    "portfolio.sub": "Browse live landing pages we designed for our partners that generated high sales records.",
    "portfolio.badge": "Hosted on Netlify ⚡",
    "portfolio.view": "View Page",
    // Pricing
    "pricing.title": "Low Investment, High Returns",
    "pricing.sub": "Launch package offer. Limited spaces available for the first 3 clients (1 slot left!).",
    "pricing.badge": "Launch Deal",
    "pricing.plan": "Launch Plan",
    "pricing.priceLabel": "Current Price:",
    "pricing.futurePrice": "Price increases to 5,000 DZD after the first 3 clients are filled.",
    "pricing.cta": "Book Your Page Now",
    "pricing.payment": "Flexible Payment: BaridiMob or CCP bank transfer",
    "pricing.titleCard": "Reserve Your Seat Today",
    "pricing.descCard": "Get started instantly and benefit from the fastest hosting and auto-sync order pipeline in Algeria.",
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.sub": "Here are the answers to the most common questions from our clients.",
    "faq.q1": "How long does page delivery take?",
    "faq.a1": "The work takes a maximum of 48 hours from the date of receiving the product content.",
    "faq.q2": "How many free revisions are included?",
    "faq.a2": "We offer 3 complete free rounds of edits and revisions after delivery to ensure the design matches your exact vision.",
    "faq.q3": "How do I receive customer leads?",
    "faq.a3": "As soon as the customer fills in their details and clicks submit, their data is instantly auto-populated directly into your private Google Sheet.",
    "faq.q4": "Is the page mobile responsive?",
    "faq.a4": "Yes, all our pages are built using mobile-first principles to ensure they are 100% responsive on smartphones, which drive 90%+ of COD traffic.",
    // Contact
    "contact.title": "Start Your Project Today",
    "contact.sub": "Let us design a premium landing page to double your e-commerce sales.",
    "contact.form.name": "Full Name",
    "contact.form.phone": "Phone Number (Algeria)",
    "contact.form.desc": "Product Description & Notes",
    "contact.form.placeholderName": "Mohamed Belkacem",
    "contact.form.placeholderPhone": "06XXXXXXXX",
    "contact.form.placeholderDesc": "I want a landing page for wireless bluetooth headphones in black and white colors...",
    "contact.form.btn": "Submit Order & Start",
    "contact.form.success": "Redirecting to WhatsApp to complete your order, we will reach out shortly!",
    "contact.wa.title": "Chat Directly on WhatsApp",
    "contact.wa.desc": "Have any questions or prefer a live chat? Click below to start a WhatsApp conversation with our team.",
    "contact.wa.btn": "Chat Now",
    "contact.wa.orEmail": "Or via Support Email",
    // Footer
    "footer.sub": "Powering Sales. Empowering Brands. Premium fast landing pages to boost your retail sales in Algeria.",
    "footer.copyright": "All rights reserved. Made with ❤️ in Algeria 🇩🇿",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  useEffect(() => {
    // Check saved language
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) {
      setLang(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    } else {
      localStorage.setItem("lang", "ar");
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const t = (key: string): string => {
    const dict = translations[lang];
    return (dict as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { lang, t } = useLanguage();

  const inclusions = lang === "ar" ? [
    "تصميم مخصص 100% لمنتجك (لا نستخدم قوالب جاهزة)",
    "ربط تلقائي ومباشر بـ Google Sheets لاستقبال الطلبات فوراً",
    "استمارة دفع ذكية تدعم كود الولايات الـ 69 والبلديات مدمجة",
    "3 جولات مراجعة وتعديل مجانية بالكامل لضمان رضاك التام",
    "تسليم سريع خلال 48 ساعة أو تسترجع أموالك وتأخذ الصفحة مجاناً",
  ] : [
    "100% custom design built for your product (no generic templates)",
    "Direct auto-integration with Google Sheets to collect orders instantly",
    "Smart shipping form with built-in 69 Wilayas & communes dropdowns",
    "3 complete rounds of revisions and edits for 100% satisfaction",
    "48-hour rapid delivery or your money back and get the page for free",
  ];

  return (
    <section id="pricing" className="py-14 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-10 md:space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          {lang === "ar" ? (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              استثمار بسيط، <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">عائد مالي ضخم</span>
            </h2>
          ) : (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              Low Investment, <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">High Returns</span>
            </h2>
          )}
          <p className="text-textSecondary text-sm sm:text-base md:text-lg">
            {t("pricing.sub")}
          </p>
        </div>

        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-14 relative overflow-hidden border-cyanAccent/20 hover:border-cyanAccent/40 transition-all duration-300"
        >
          {/* Badge */}
          <div className="absolute top-0 right-0 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-cyanAccent text-background font-black text-[10px] sm:text-xs tracking-widest rounded-bl-2xl sm:rounded-bl-3xl uppercase">
            {t("pricing.badge")}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch mt-4 sm:mt-0">
            {/* Left side: Price & Info */}
            <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-black text-primary tracking-wider uppercase block">{t("pricing.plan")}</span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold text-textSecondary">{t("pricing.priceLabel")}</span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-textPrimary">
                      {lang === "ar" ? "3,000 دج" : "3,000 DZD"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-cyanAccent font-bold">
                    {t("pricing.futurePrice")}
                  </p>
                </div>
              </div>

              {/* Inclusions */}
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-textSecondary">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg sm:text-xl flex-shrink-0 mt-0.5">check_circle</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: Action block */}
            <div className="md:col-span-5 flex flex-col justify-center items-center text-center space-y-6 pt-8 md:pt-0 border-t md:border-t-0 md:border-r border-borderColor/20 md:border-borderColor md:pl-12 md:mr-4">
              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-textPrimary">{t("pricing.titleCard")}</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  {t("pricing.descCard")}
                </p>
              </div>

              <a 
                href="#contact" 
                className="w-full bg-textPrimary text-background hover:bg-primary hover:text-white py-3.5 sm:py-4 rounded-2xl font-black text-base sm:text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(0,86,246,0.3)] transition-all duration-300 transform active:scale-95"
              >
                {t("pricing.cta")}
              </a>
              
              <div className="flex items-center gap-2 text-[10px] text-textSecondary/40">
                <span className="material-symbols-outlined text-xs">payments</span>
                <span>{t("pricing.payment")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
} as const;

export default function WhyVoltix() {
  const { lang, t } = useLanguage();

  const features = [
    {
      icon: "bolt",
      title: t("why.card1.title"),
      englishTitle: "Under 2s Load Time",
      desc: t("why.card1.desc"),
      color: "text-primary border-primary/20 bg-primary/5",
    },
    {
      icon: "map",
      title: t("why.card2.title"),
      englishTitle: "Full Algeria Coverage",
      desc: t("why.card2.desc"),
      color: "text-cyanAccent border-cyanAccent/20 bg-cyanAccent/5",
    },
    {
      icon: "table_chart",
      title: t("why.card3.title"),
      englishTitle: "Auto Google Sheets",
      desc: t("why.card3.desc"),
      color: "text-green-500 border-green-500/20 bg-green-500/5",
    },
    {
      icon: "chat",
      title: t("why.card6.title"),
      englishTitle: "WhatsApp Integration",
      desc: t("why.card6.desc"),
      color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
    },
    {
      icon: "devices",
      title: t("why.card4.title"),
      englishTitle: "Fully Responsive",
      desc: t("why.card4.desc"),
      color: "text-secondary border-secondary/20 bg-secondary/5",
    },
    {
      icon: "palette",
      title: t("why.card5.title"),
      englishTitle: "100% Custom Design",
      desc: t("why.card5.desc"),
      color: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    },
  ];

  return (
    <section id="why" className="py-14 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          {lang === "ar" ? (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              لماذا تختار <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">فولتكس ديجيتال</span>؟
            </h2>
          ) : (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              Why Choose <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">Voltix Digital</span>?
            </h2>
          )}
          <p className="text-textSecondary text-sm sm:text-base md:text-lg">
            {t("why.sub")}
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="glass p-6 sm:p-8 rounded-3xl flex flex-col gap-5 text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(0,86,246,0.15)] group"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto border transition-transform duration-300 group-hover:scale-110 ${feat.color}`}>
                <span className="material-symbols-outlined text-3xl font-bold">{feat.icon}</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-textPrimary">{feat.title}</h3>
                <span className="text-[10px] text-textSecondary/40 font-bold uppercase tracking-wider block" dir="ltr">
                  {feat.englishTitle}
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed flex-grow">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

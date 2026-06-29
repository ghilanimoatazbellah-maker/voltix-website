"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
} as const;

export default function HowItWorks() {
  const { lang, t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t("how.step1.title"),
      englishTitle: "Contact Us",
      desc: t("how.step1.desc"),
      color: "text-primary border-primary/20",
    },
    {
      num: "02",
      title: t("how.step2.title"),
      englishTitle: "We Design Your Page",
      desc: t("how.step2.desc"),
      color: "text-secondary border-secondary/20",
    },
    {
      num: "03",
      title: t("how.step3.title"),
      englishTitle: "You Review & Approve",
      desc: t("how.step3.desc"),
      color: "text-cyanAccent border-cyanAccent/20",
    },
    {
      num: "04",
      title: t("how.step4.title"),
      englishTitle: "We Launch It",
      desc: t("how.step4.desc"),
      color: "text-green-500 border-green-500/20",
    },
  ];

  return (
    <section id="how" className="py-24 bg-surface/30 px-4 md:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -left-1/4 top-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          {lang === "ar" ? (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              كيف <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">نعمل</span>؟
            </h2>
          ) : (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              How We <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Work</span>
            </h2>
          )}
          <p className="text-textSecondary text-sm sm:text-base md:text-lg font-medium">
            {t("how.sub")}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Horizontal line for desktop (hidden on tablet/mobile) */}
          <div className="hidden lg:block absolute top-[48px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-borderColor to-transparent -z-10"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={stepVariants}
                className="glass md:bg-transparent md:border-transparent md:glass-none p-5 sm:p-6 md:p-0 rounded-[2rem] md:rounded-none border border-borderColor/20 md:border-transparent flex flex-row md:flex-col items-center md:items-center text-start md:text-center gap-5 sm:gap-6 relative group shadow-xl md:shadow-none"
              >
                {/* Circle Column */}
                <div className="flex flex-col items-center flex-shrink-0 relative">
                  {/* Circle */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full glass border flex items-center justify-center font-heading font-black text-xl sm:text-2xl md:text-3xl bg-background shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,86,246,0.15)] ${step.color} flex-shrink-0`}>
                    {step.num}
                  </div>
                </div>

                {/* Text details next to circle on mobile, below circle on desktop */}
                <div className="space-y-2 flex-grow text-textPrimary">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-textPrimary">{step.title}</h3>
                    <span className="text-[10px] text-textSecondary/40 font-bold uppercase tracking-wider block" dir="ltr">
                      {step.englishTitle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

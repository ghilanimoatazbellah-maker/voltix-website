"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { lang, t } = useLanguage();

  const faqs = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 md:py-24 px-4 md:px-8 max-w-4xl mx-auto relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="space-y-10 md:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          {lang === "ar" ? (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              الأسئلة <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">الشائعة</span>
            </h2>
          ) : (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Questions</span>
            </h2>
          )}
          <p className="text-textSecondary md:text-lg font-medium">
            {t("faq.sub")}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="glass rounded-2xl overflow-hidden border border-borderColor transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-6 text-start flex justify-between items-center font-bold text-base sm:text-lg text-textPrimary hover:text-primary transition-colors gap-4"
                >
                  <span className="font-heading">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 text-textSecondary ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}>
                    expand_more
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-4 sm:p-6 pt-0 text-textSecondary text-sm leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-extrabold text-textSecondary/50 uppercase tracking-widest text-sm">
            {lang === "ar" ? "ماذا يقول عملاؤنا / Testimonials" : "What Our Clients Say / Testimonials"}
          </h2>
          <p className="text-textSecondary/40 text-sm font-medium">
            {lang === "ar" ? "آراء وتجارب التجار الذين وثقوا بنا لمضاعفة مبيعاتهم." : "Feedback and stories from merchants who trusted us to scale their sales."}
          </p>
        </div>

        {/* Empty state designs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border-dashed border-2 px-12 py-10 rounded-[2rem] max-w-sm w-full space-y-4 relative overflow-hidden"
          >
            <span className="material-symbols-outlined text-textSecondary/20 text-4xl block">format_quote</span>
            <p className="italic text-lg text-textSecondary/30">{lang === "ar" ? "قريباً — Coming Soon" : "Coming Soon"}</p>
            <p className="text-xs text-textSecondary/20 leading-relaxed">
              {lang === "ar" 
                ? "نحن نطلق خدماتنا للتو! آراء عملائنا الأوائل وقصص نجاحهم ستظهر هنا قريباً." 
                : "We are just launching our services! Feedback from our early clients will appear here shortly."}
            </p>
            <div className="pt-2 flex justify-center items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-borderColor flex-shrink-0"></div>
              <div className="w-24 h-4 bg-white/5 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass border-dashed border-2 px-12 py-10 rounded-[2rem] max-w-sm w-full space-y-4 relative overflow-hidden hidden md:block"
          >
            <span className="material-symbols-outlined text-textSecondary/20 text-4xl block">format_quote</span>
            <p className="italic text-lg text-textSecondary/30">{lang === "ar" ? "قريباً — Coming Soon" : "Coming Soon"}</p>
            <p className="text-xs text-textSecondary/20 leading-relaxed">
              {lang === "ar" 
                ? "انضم إلينا اليوم لتكون من أوائل المستفيدين وتوثق نجاح مبيعاتك معنا." 
                : "Join us today to be among the first beneficiaries and record your sales success with us."}
            </p>
            <div className="pt-2 flex justify-center items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-borderColor flex-shrink-0"></div>
              <div className="w-20 h-4 bg-white/5 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const { lang, t } = useLanguage();
  const [time, setTime] = useState({ h: "02", m: "14", s: "59" });

  useEffect(() => {
    let totalSeconds = 2 * 3600 + 14 * 60 + 59;
    const interval = setInterval(() => {
      if (totalSeconds <= 0) { totalSeconds = 2 * 3600; }
      totalSeconds--;
      const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const s = String(totalSeconds % 60).padStart(2, "0");
      setTime({ h, m, s });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-8 pt-28 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-start"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Digital Powerhouse</span>
          </div>

          <div className="space-y-5 w-full">
            {lang === "ar" ? (
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black leading-[1.1] text-textPrimary tracking-tight">
                نعزز المبيعات. <br />
                <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">
                  ونقوّي العلامات التجارية.
                </span>
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black leading-[1.1] text-textPrimary tracking-tight">
                Powering Sales. <br />
                <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">
                  Empowering Brands.
                </span>
              </h1>
            )}
            <p className="text-base sm:text-lg md:text-xl text-textSecondary font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("hero.sub")}
            </p>
            <p className="text-[10px] sm:text-xs font-medium text-textSecondary/40 tracking-widest uppercase" dir="ltr">
              Powering Sales. Empowering Brands. Ultra-fast landing pages optimized for conversions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center bg-primary hover:bg-primary/95 text-white font-bold text-lg px-8 py-4 rounded-xl active:scale-95 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(0,86,246,0.3)] duration-300 hover:translate-y-[-2px]"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto text-center glass hover:bg-white/5 text-textPrimary border border-borderColor font-bold text-lg px-8 py-4 rounded-xl active:scale-95 transition-all duration-300 hover:translate-y-[-2px]"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </motion.div>

        {/* Right Column: Floating Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" as const, delay: 0.2 }}
          className="relative flex justify-center items-center w-full"
        >
          {/* Layered Neon Glow */}
          <div className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] bg-primary/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          <div className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] bg-secondary/20 rounded-full blur-[70px] -z-10"></div>
          <div className="absolute w-[150px] h-[150px] bg-cyanAccent/10 rounded-full blur-[50px] -z-10 translate-y-12"></div>

          {/* Floating Phone Container */}
          <motion.div 
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
            className="relative max-w-[260px] sm:max-w-[300px] w-full mx-auto"
            style={{
              filter: "drop-shadow(0 0 40px rgba(0,86,246,0.35)) drop-shadow(0 0 80px rgba(139,92,246,0.2)) drop-shadow(0 30px 60px rgba(0,0,0,0.6))"
            }}
          >
            {/* Shimmer border ring */}
            <div className="absolute inset-0 rounded-[2.5rem] z-20 pointer-events-none" style={{background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,86,246,0.1) 40%, rgba(139,92,246,0.1) 70%, rgba(255,255,255,0.05) 100%)", padding: "1px"}}>
              <div className="w-full h-full rounded-[2.5rem] bg-transparent"></div>
            </div>
            <div className="glass p-3 rounded-[2.5rem] border overflow-hidden" style={{borderColor: "rgba(255,255,255,0.12)"}}>
            {/* Phone screen */}
            <div className="rounded-[2rem] bg-[#111111] relative overflow-hidden flex flex-col" style={{aspectRatio: "9/19"}}>
              
              {/* Status Bar */}
              <div className="flex justify-between items-center px-4 pt-3 pb-1 text-[9px] text-white/40 flex-shrink-0" dir="ltr">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{fontSize:"10px"}}>signal_cellular_alt</span>
                  <span className="material-symbols-outlined" style={{fontSize:"10px"}}>wifi</span>
                  <span className="material-symbols-outlined" style={{fontSize:"10px"}}>battery_full</span>
                </div>
              </div>

              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-[4px] bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{fontSize:"9px"}}>bolt</span>
                  </div>
                  <span className="text-[10px] font-black text-white">Volt<span className="text-blue-400">ix</span></span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-[8px] text-green-400 font-semibold">
                    {lang === "ar" ? "متاح" : "Live"}
                  </span>
                </div>
              </div>

              {/* Product Image Area */}
              <div className="relative bg-[#161616] mx-3 mt-2 rounded-xl overflow-hidden flex-shrink-0" style={{height:"38%"}}>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">-38%</div>
                <Image
                  src="/images/headphone-hero.webp"
                  alt="VoltixProX Headphones"
                  fill
                  className="object-contain p-2"
                  sizes="300px"
                />
              </div>

              {/* Product Info */}
              <div className="px-3 pt-2 space-y-1.5 flex-shrink-0">
                <h3 className="text-[11px] font-black text-white leading-tight">
                  {lang === "ar" ? "سماعة Voltix Pro X" : "Voltix Pro X"}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-yellow-400">★★★★★</span>
                  <span className="text-[8px] text-white/40">4.8 ({lang === "ar" ? "203 تقييم" : "203 reviews"})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-black text-yellow-400">4,900 {lang === "ar" ? "دج" : "DZD"}</span>
                  <span className="text-[9px] text-white/30 line-through">7,900</span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="mx-3 mt-1.5 bg-[#1a1a1a] border border-white/5 rounded-lg px-2 py-1.5 flex items-center justify-between flex-shrink-0">
                <span className="text-[8px] text-white/40">
                  {lang === "ar" ? "⏳ ينتهي العرض:" : "⏳ Offer ends:"}
                </span>
                <div className="flex gap-1" dir="ltr">
                  <span className="text-[10px] font-black text-yellow-400">{time.h}</span>
                  <span className="text-[10px] text-white/30">:</span>
                  <span className="text-[10px] font-black text-yellow-400">{time.m}</span>
                  <span className="text-[10px] text-white/30">:</span>
                  <span className="text-[10px] font-black text-yellow-400">{time.s}</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="px-3 mt-2 space-y-1.5 flex-grow flex flex-col justify-end pb-3">
                <div className="h-7 rounded-lg bg-white/5 border border-white/10 flex items-center px-2.5 text-[8px] text-white/30">
                  {lang === "ar" ? "الاسم الكامل" : "Full Name"}
                </div>
                <div className="h-7 rounded-lg bg-white/5 border border-white/10 flex items-center px-2.5 text-[8px] text-white/30">
                  {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                </div>
                <button className="w-full h-8 rounded-lg bg-yellow-400 text-[#111] font-black text-[9px] flex items-center justify-center gap-1 shadow-lg">
                  <span className="material-symbols-outlined" style={{fontSize:"11px"}}>shopping_cart</span>
                  <span>{lang === "ar" ? "اطلب الآن" : "Order Now"}</span>
                </button>
              </div>

              {/* Screen reflection overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-[2rem] z-10" style={{background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)"}}></div>
            </div>
            </div>
          </motion.div>

          {/* Floating Neon Elements */}
          <div className="absolute -right-2 top-1/4 glass p-2 rounded-xl shadow-xl border border-borderColor animate-bounce hidden sm:block">
            <span className="material-symbols-outlined text-cyanAccent text-xl sm:text-2xl">flash_on</span>
          </div>
          <div className="absolute -left-2 bottom-1/4 glass p-2 rounded-xl shadow-xl border border-borderColor animate-pulse hidden sm:block">
            <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">trending_up</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

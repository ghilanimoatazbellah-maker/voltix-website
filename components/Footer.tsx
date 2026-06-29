"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { lang, t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-surface border-t border-borderColor px-4 md:px-8 pt-16 pb-8 relative overflow-hidden text-center lg:text-start">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Fat Footer (Top Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-borderColor/40">
          
          {/* Column 1: Brand & Contact Info (span 4) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center lg:items-start">
            <a href="#" className="flex items-center gap-2 group justify-center lg:justify-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-primary text-xl font-bold">bolt</span>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-textPrimary">
                Voltix<span className="text-secondary">Digital</span>
              </span>
            </a>
            <p className="text-sm text-textSecondary leading-relaxed max-w-sm">
              {t("footer.sub")}
            </p>
            
            {/* Contact details */}
            <div className="space-y-3 text-xs text-textSecondary/80 w-full flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <a href="mailto:voltix.work@gmail.com" className="hover:text-primary hover:underline underline-offset-2 transition-all">
                  voltix.work@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>{lang === "ar" ? "الجزائر / Algeria" : "Algeria"}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services (span 2) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center lg:items-start">
            <h4 className="font-heading font-bold text-textPrimary text-lg">{lang === "ar" ? "الخدمات / Services" : "Services"}</h4>
            <ul className="space-y-3 text-sm text-textSecondary font-medium">
              <li>{lang === "ar" ? "صفحات هبوط COD" : "COD Landing Pages"}</li>
              <li>{lang === "ar" ? "مواقع تعريفية للشركات" : "Agency & Corporate Sites"}</li>
              <li>{lang === "ar" ? "ربط مباشر مع الإكسل" : "Google Sheets Auto-Sync"}</li>
              <li>{lang === "ar" ? "برمجة أنظمة مخصصة" : "Custom Software Dev"}</li>
            </ul>
          </div>

          {/* Column 3: Company (span 2) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center lg:items-start">
            <h4 className="font-heading font-bold text-textPrimary text-lg">{lang === "ar" ? "الشركة / Company" : "Company"}</h4>
            <ul className="space-y-3 text-sm text-textSecondary font-medium">
              <li><a href="#" className="hover:text-primary hover:underline underline-offset-4 transition-all">{t("nav.home")}</a></li>
              <li><a href="#why" className="hover:text-primary hover:underline underline-offset-4 transition-all">{t("nav.why")}</a></li>
              <li><a href="#portfolio" className="hover:text-primary hover:underline underline-offset-4 transition-all">{t("nav.portfolio")}</a></li>
              <li><a href="#pricing" className="hover:text-primary hover:underline underline-offset-4 transition-all">{t("nav.pricing")}</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter CTA (span 4) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-center lg:items-start w-full">
            <h4 className="font-heading font-bold text-textPrimary text-lg">{lang === "ar" ? "القائمة البريدية / Newsletter" : "Newsletter"}</h4>
            <p className="text-sm text-textSecondary leading-relaxed max-w-sm">
              {lang === "ar" 
                ? "اشترك في قائمتنا البريدية لتصلك أحدث نصائح مضاعفة نسبة التحويل (CRO) وتحديثات خدماتنا في الجزائر." 
                : "Subscribe to our newsletter to receive the latest conversion rate optimization (CRO) tips and updates."}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full pt-2 max-w-sm justify-center">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === "ar" ? "بريدك الإلكتروني" : "Your Email Address"}
                className="flex-grow h-11 rounded-lg bg-white/5 border border-borderColor px-3 text-xs text-textPrimary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-center lg:text-start"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors flex-shrink-0"
              >
                {lang === "ar" ? "اشترك" : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <p className="text-green-500 text-xs mt-1">
                {lang === "ar" ? "تم اشتراكك بنجاح، شكراً لك!" : "Subscribed successfully, thank you!"}
              </p>
            )}
          </div>

        </div>

        {/* Micro Footer (Bottom Section) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-4 text-xs text-textSecondary/60 text-center">
          {/* Left: Copyright */}
          <div className="flex items-center gap-1 font-semibold justify-center" dir="ltr">
            <span>© {new Date().getFullYear()} Voltix Digital. {t("footer.copyright")}</span>
          </div>

          {/* Center: Legal compliance links */}
          <div className="flex items-center gap-6 font-medium justify-center">
            <a href="#privacy" className="hover:text-primary hover:underline underline-offset-4 transition-all">{t("footer.privacy")}</a>
            <span className="text-borderColor">|</span>
            <a href="#terms" className="hover:text-primary hover:underline underline-offset-4 transition-all">{t("footer.terms")}</a>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-6 text-sm justify-center">
            <a 
              href="https://www.instagram.com/voltix.dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:underline underline-offset-4 transition-all"
            >
              {lang === "ar" ? "إنستغرام" : "Instagram"}
            </a>
            <a 
              href="https://www.facebook.com/share/18iPaVtUa5/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:underline underline-offset-4 transition-all"
            >
              {lang === "ar" ? "فيسبوك" : "Facebook"}
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

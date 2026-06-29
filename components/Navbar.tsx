"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Theme Initializer
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      setTheme(prefersLight ? "light" : "dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // 1. Close the menu immediately to stabilize the layout
    setMenuOpen(false);
    
    // 2. Wait for the closing drawer animation (300ms) to complete, then scroll smoothly
    setTimeout(() => {
      if (targetId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || menuOpen
        ? "glass border-x-0 border-t-0 py-3 shadow-lg shadow-black/20" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center relative z-50">
        {/* Logo left */}
        <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 group">
          <Image 
            src="/logo-icon.webp" 
            alt="Voltix Digital Logo" 
            width={44} 
            height={44} 
            className="object-contain rounded-lg"
          />
        </a>

        {/* Links center (Desktop only) */}
        <div className="desktop-nav hidden lg:flex items-center gap-8 font-medium text-textSecondary text-sm">
          <a href="#" className="text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-all">
            {t("nav.home")}
          </a>
          <a href="#why" className="hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-all">
            {t("nav.why")}
          </a>
          <a href="#how" className="hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-all">
            {t("nav.how")}
          </a>
          <a href="#portfolio" className="hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-all">
            {t("nav.portfolio")}
          </a>
          <a href="#pricing" className="hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-all">
            {t("nav.pricing")}
          </a>
          <a href="#faq" className="hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-all">
            {t("nav.faq")}
          </a>
        </div>

        {/* Right action (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            suppressHydrationWarning
            className="w-12 h-12 rounded-lg glass border border-borderColor flex items-center justify-center text-textPrimary hover:text-primary transition-colors active:scale-95"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-xl" suppressHydrationWarning>
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="h-12 px-4 rounded-lg glass border border-borderColor text-xs font-bold text-textPrimary hover:text-primary transition-colors active:scale-95 flex items-center justify-center gap-1.5"
            dir="ltr"
          >
            <span className="material-symbols-outlined text-sm">language</span>
            <span>{lang === "ar" ? "EN" : "العربية"}</span>
          </button>
          
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 h-12 flex items-center justify-center rounded-lg active:scale-95 transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_0_20px_rgba(0,86,246,0.4)]"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          suppressHydrationWarning
          className="mobile-menu-btn lg:hidden w-12 h-12 rounded-lg glass border border-borderColor flex items-center justify-center text-textPrimary hover:text-primary transition-colors active:scale-95"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl font-bold" suppressHydrationWarning>
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-surface border-b border-borderColor overflow-hidden shadow-2xl z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-6 font-medium text-textSecondary text-base">
              <a 
                href="#" 
                onClick={(e) => handleMobileLinkClick(e, "#")}
                className="text-primary hover:text-primary transition-colors py-1 border-b border-borderColor/10"
              >
                {t("nav.home")}
              </a>
              <a 
                href="#why" 
                onClick={(e) => handleMobileLinkClick(e, "#why")}
                className="hover:text-primary transition-colors py-1 border-b border-borderColor/10"
              >
                {t("nav.why")}
              </a>
              <a 
                href="#how" 
                onClick={(e) => handleMobileLinkClick(e, "#how")}
                className="hover:text-primary transition-colors py-1 border-b border-borderColor/10"
              >
                {t("nav.how")}
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => handleMobileLinkClick(e, "#portfolio")}
                className="hover:text-primary transition-colors py-1 border-b border-borderColor/10"
              >
                {t("nav.portfolio")}
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleMobileLinkClick(e, "#pricing")}
                className="hover:text-primary transition-colors py-1 border-b border-borderColor/10"
              >
                {t("nav.pricing")}
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleMobileLinkClick(e, "#faq")}
                className="hover:text-primary transition-colors py-1"
              >
                {t("nav.faq")}
              </a>

              {/* Actions bottom */}
              <div className="pt-6 border-t border-borderColor/40 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Theme Toggle */}
                  <button 
                    onClick={toggleTheme}
                    suppressHydrationWarning
                    className="w-12 h-12 rounded-lg glass border border-borderColor flex items-center justify-center text-textPrimary hover:text-primary transition-colors active:scale-95"
                    aria-label="Toggle Theme"
                  >
                    <span className="material-symbols-outlined text-xl" suppressHydrationWarning>
                      {theme === "dark" ? "light_mode" : "dark_mode"}
                    </span>
                  </button>
                  
                  {/* Language Switcher */}
                  <button
                    onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                    className="h-12 px-4 rounded-lg glass border border-borderColor text-xs font-bold text-textPrimary hover:text-primary transition-colors active:scale-95 flex items-center justify-center gap-1.5"
                    dir="ltr"
                  >
                    <span className="material-symbols-outlined text-sm">language</span>
                    <span>{lang === "ar" ? "EN" : "العربية"}</span>
                  </button>
                </div>

                <a 
                  href="#contact" 
                  onClick={(e) => handleMobileLinkClick(e, "#contact")}
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 h-12 flex items-center justify-center rounded-lg active:scale-95 transition-all duration-300"
                >
                  {t("nav.cta")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

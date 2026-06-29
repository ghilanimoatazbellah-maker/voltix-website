"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { lang, t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    desc: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const nameRegex = /^[\u0600-\u06FFa-zA-Z\s\-]{3,}$/;
  const phoneRegex = /^0[2567]\d{8}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // Clear errors when user types
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (form.honeypot !== "") {
      return; // Silent reject
    }

    // Validation
    let nameError = "";
    let phoneError = "";
    let hasError = false;

    if (!nameRegex.test(form.name)) {
      nameError = lang === "ar" 
        ? "الرجاء إدخال اسم ثلاثي الحروف على الأقل (أحرف فقط)." 
        : "Please enter a valid name with at least 3 characters (letters only).";
      hasError = true;
    }

    if (!phoneRegex.test(form.phone)) {
      phoneError = lang === "ar" 
        ? "رقم الهاتف غير صحيح. يجب أن يبدأ بـ 05 أو 06 أو 07 أو 02 ويتكون من 10 أرقام." 
        : "Invalid phone number. Must start with 05, 06, 07, or 02 and consist of 10 digits.";
      hasError = true;
    }

    if (hasError) {
      setErrors({
        name: nameError,
        phone: phoneError,
      });
      return;
    }

    // Format Whatsapp Message URL
    const whatsappNumber = "213672099942"; // Voltix Digital Business WhatsApp
    const message = encodeURIComponent(
      lang === "ar"
        ? `مرحباً Voltix Digital،\nأود طلب صفحة هبوط مخصصة لمشروعي.\n\n*الاسم:* ${form.name}\n*الهاتف:* ${form.phone}\n*وصف المنتج:* ${form.desc}`
        : `Hello Voltix Digital,\nI would like to order a custom landing page for my project.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Product description:* ${form.desc}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow circles */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="space-y-10 md:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          {lang === "ar" ? (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              ابدأ مشروعك <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">اليوم</span>
            </h2>
          ) : (
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
              Start Your Project <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">Today</span>
            </h2>
          )}
          <p className="text-textSecondary text-sm sm:text-base md:text-lg">
            {t("contact.sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field (anti-spam) */}
              <input
                type="text"
                name="honeypot"
                id="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                autoComplete="off"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 0,
                  height: 0,
                  padding: 0,
                  margin: 0,
                  border: 0,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />

              <div className="space-y-2">
                <label className="text-sm font-bold text-textPrimary flex justify-between">
                  <span>{t("contact.form.name")}</span>
                  <span className="text-textSecondary/40 text-xs">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.placeholderName")}
                  required
                  className={`w-full h-14 rounded-xl bg-white/5 border px-4 text-textPrimary text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 ${
                    errors.name ? "border-rose-500 focus:ring-rose-500/20" : "border-borderColor"
                  }`}
                />
                {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-textPrimary flex justify-between">
                  <span>{t("contact.form.phone")}</span>
                  <span className="text-textSecondary/40 text-xs">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t("contact.form.placeholderPhone")}
                  required
                  className={`w-full h-14 rounded-xl bg-white/5 border px-4 text-textPrimary text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 ${
                    errors.phone ? "border-rose-500 focus:ring-rose-500/20" : "border-borderColor"
                  }`}
                />
                {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-textPrimary flex justify-between">
                  <span>{t("contact.form.desc")}</span>
                  <span className="text-textSecondary/40 text-xs">Product Description</span>
                </label>
                <textarea
                  name="desc"
                  value={form.desc}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t("contact.form.placeholderDesc")}
                  className="w-full rounded-xl bg-white/5 border border-borderColor p-4 text-textPrimary text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg active:scale-95 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,86,246,0.3)] hover:translate-y-[-2px]"
              >
                {t("contact.form.btn")}
              </button>

              {submitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center text-sm font-semibold"
                >
                  {t("contact.form.success")}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right Column: WhatsApp Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 glass p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-between text-center relative overflow-hidden group"
          >
            {/* WhatsApp radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[60px] -z-10 transition-all duration-500 group-hover:scale-110"></div>

            <div className="space-y-6 py-6">
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-500 transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl">chat</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-textPrimary">{t("contact.wa.title")}</h3>
                <span className="text-xs font-black text-emerald-500 tracking-widest uppercase block" dir="ltr">
                  Chat on WhatsApp
                </span>
              </div>

              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed max-w-xs mx-auto">
                {t("contact.wa.desc")}
              </p>
            </div>

            <div className="space-y-4 w-full pt-4 border-t border-borderColor/30">
              <a
                href="https://wa.me/213672099942"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 active:scale-95 hover:translate-y-[-2px] flex items-center justify-center gap-2"
              >
                <span className="font-heading">{t("contact.wa.btn")}</span>
                <span className="material-symbols-outlined text-xl">send</span>
              </a>

              <div className="pt-4 flex flex-col items-center gap-1">
                <span className="text-[10px] text-textSecondary/50 font-bold block" dir="ltr">{t("contact.wa.orEmail")}</span>
                <a href="mailto:voltix.dz.studio@gmail.com" className="text-primary hover:text-cyanAccent hover:underline underline-offset-2 transition-colors text-sm font-bold">
                  voltix.dz.studio@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

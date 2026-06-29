"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
} as const;

export default function Portfolio() {
  const { lang, t } = useLanguage();

  const projects = [
    {
      title: "Nour Bijoux",
      category: lang === "ar" ? "مجوهرات / Jewelry" : "Jewelry",
      desc: lang === "ar"
        ? "صفحة هبوط للمجوهرات الفاخرة، تتميز بتصميم داكن فخم يعرض تفاصيل القطع الذهبية بدقة متناهية وسرعة فائقة."
        : "A high-end luxury jewelry landing page with a deep elegant design presenting gold pieces details with lightning load speed.",
      url: "https://nourbijoux-jewelry.netlify.app",
      img: "/images/nourbijoux.webp",
      borderColor: "border-primary/20 hover:border-primary/50",
    },
    {
      title: "DZSport Shoes",
      category: lang === "ar" ? "أزياء / Fashion" : "Fashion & Shoes",
      desc: lang === "ar"
        ? "واجهة تسوق مخصصة للأحذية الرياضية، تدعم التبديل السريع للمقاسات والألوان مع ربط فوري لإدارة مخزون الطلبات."
        : "E-commerce landing page optimized for sports sneakers, supporting instant color/size switching and automated sheet synchronization.",
      url: "https://dzsport-shoes.netlify.app",
      img: "/images/dzsport.webp",
      borderColor: "border-cyanAccent/20 hover:border-cyanAccent/50",
    },
    {
      title: "SerumAraqi",
      category: lang === "ar" ? "تجميل / Cosmetics" : "Beauty & Cosmetics",
      desc: lang === "ar"
        ? "صفحة ترويجية لسيروم عرق السوس الطبيعي، مصممة بهوية بصرية طبية وألوان هادئة جذابة لرفع ثقة الزبون وزيادة الطلب."
        : "A clean promo page for Licorice Serum, styled with a clinical visual identity and soft aesthetic tones to build trust and boost orders.",
      url: "https://serumaraqi-cosmetics.netlify.app",
      img: "/images/serumaraqi.webp",
      borderColor: "border-purple-500/20 hover:border-purple-500/50",
    },
    {
      title: "VoltixProX",
      category: lang === "ar" ? "إلكترونيات / Tech" : "Electronics & Tech",
      desc: lang === "ar"
        ? "صفحة مبيعات تفاعلية لسماعات الرأس اللاسلكية، تقدم عرضاً تفاعلياً ومميزات تقنية متقدمة مع خريطة توزيع وتوصيل الولايات."
        : "An interactive sales layout for bluetooth headphones, providing advanced tech showcases and responsive shipping/wilaya delivery details.",
      url: "https://voltix-pro-x.netlify.app",
      img: "/images/voltixprox.webp",
      borderColor: "border-primary/20 hover:border-primary/50",
    },
    {
      title: "CleanX Pro",
      category: lang === "ar" ? "أدوات منزلية / Home" : "Home Appliances",
      desc: lang === "ar"
        ? "صفحة هبوط للمكنسة الكهربائية الذكية، تستخدم رسومات بيانية توضيحية لشرح قوة الشفط والتقنية المستخدمة لجذب الزبائن."
        : "Clean vacuum cleaner presentation page, using schematic diagrams and performance matrices to explain technical details and attract buyers.",
      url: "https://cleanx-pro.netlify.app",
      img: "/images/cleanxpro.webp",
      borderColor: "border-green-500/20 hover:border-green-500/50",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            {lang === "ar" ? (
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
                أحدث <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">أعمالنا</span>
              </h2>
            ) : (
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-textPrimary leading-tight">
                Our Latest <span className="bg-gradient-to-r from-primary to-cyanAccent bg-clip-text text-transparent">Work</span>
              </h2>
            )}
            <p className="text-textSecondary text-sm sm:text-base md:text-lg max-w-xl">
              {t("portfolio.sub")}
            </p>
          </div>
          <div className="text-xs font-semibold text-textSecondary px-3 py-1.5 rounded-full bg-white/5 border border-borderColor select-none">
            {t("portfolio.badge")}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className={`glass rounded-[2rem] overflow-hidden flex flex-col group border transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_15px_35px_rgba(0,86,246,0.15)] ${project.borderColor}`}
            >
              {/* Image Showcase */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-surface">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx < 3}
                />
                {/* Subtle overlay that fades out completely on hover to ensure maximum clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold tracking-tight text-textPrimary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 glass border border-borderColor rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  <span>{t("portfolio.view")}</span>
                  <span className="material-symbols-outlined text-sm font-bold transition-transform group-hover:translate-x-[-2px] rtl-flip">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

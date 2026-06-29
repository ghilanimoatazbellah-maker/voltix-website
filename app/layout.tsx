import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voltix Digital | وكالة تصميم صفحات الهبوط للـ COD في الجزائر",
  description: "نصمم ونبني صفحات هبوط خارجية فائقة السرعة ومتجاوبة بالكامل للتجارة الإلكترونية والدفع عند الاستلام في الجزائر، مربوطة تلقائياً بـ Google Sheets.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                document.documentElement.classList.add('light');
              } else {
                document.documentElement.classList.remove('light');
              }
              
              // Language sync
              const savedLang = localStorage.getItem('lang');
              if (savedLang) {
                document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.lang = savedLang;
              }
            } catch (e) {}
          })()
        ` }} />
      </head>
      <body className="font-body antialiased bg-background text-textPrimary selection:bg-primary selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

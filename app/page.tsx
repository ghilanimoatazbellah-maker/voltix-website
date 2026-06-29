import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyVoltix from "@/components/WhyVoltix";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Top Navbar */}
      <Navbar />

      <main className="space-y-16">
        {/* Sections in order */}
        <Hero />
        <WhyVoltix />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

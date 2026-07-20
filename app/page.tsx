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
        {/* Hero renders immediately — above the fold */}
        <Hero />

        {/* All sections below the fold — use content-visibility:auto to skip off-screen rendering */}
        <div className="section-lazy"><WhyVoltix /></div>
        <div className="section-lazy"><HowItWorks /></div>
        <div className="section-lazy"><Portfolio /></div>
        <div className="section-lazy"><Pricing /></div>
        <div className="section-lazy"><Testimonials /></div>
        <div className="section-lazy"><FAQ /></div>
        <div className="section-lazy"><Contact /></div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

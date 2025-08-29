import Image from "next/image";
import MegaMenuNavbar from "./components/layout/Navbar";
import HeroSection from "./components/Hero-section";
import Footer from "./components/layout/Footer";
import LogosMarquee from "./components/Trusted-Companies";
import FeaturesSection from "./components/Features";
import WhyChoose from "./components/WhyChose";
import Features from "./components/Features2";
import BusinessSection from "./components/Business";
import SupportSection from "./components/Support";
import IntegrationsSection from "./components/Integration";
import FreeTrial from "./components/Trial";
export default function Home() {
  return (
    <div className="2xl:container mx-auto px-4 md:px-8">
      <HeroSection />
      <LogosMarquee />
      <FeaturesSection />
      <WhyChoose />
      <Features />
      <BusinessSection />
      <SupportSection />
      <IntegrationsSection />
      <FreeTrial />
      <Footer />
    </div>
  );
}

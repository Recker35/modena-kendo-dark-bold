import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KendoSection from "@/components/KendoSection";
import DojoSection from "@/components/DojoSection";
import SenseiSection from "@/components/SenseiSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <KendoSection />
      <DojoSection />
      <SenseiSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

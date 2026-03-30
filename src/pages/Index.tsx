import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KendoSection from "@/components/KendoSection";
import SenseiSection from "@/components/SenseiSection";
import ResultsSection from "@/components/ResultsSection";
import JunioresSection from "@/components/JunioresSection";
import KendoValuesSection from "@/components/KendoValuesSection";
import ShuhariSection from "@/components/ShuhariSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <KendoSection />
      <SenseiSection />
      <ResultsSection />
      <JunioresSection />
      <KendoValuesSection />
      <ShuhariSection />
      <Footer />
    </div>
  );
};

export default Index;

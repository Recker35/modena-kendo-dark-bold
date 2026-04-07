import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IaidoHeroSection from "@/components/IaidoHeroSection";
import IaidoSection from "@/components/IaidoSection";
import IaidoPeopleSection from "@/components/IaidoPeopleSection";
import IaidoValuesSection from "@/components/IaidoValuesSection";

export default function Iaido() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <IaidoHeroSection />
      <IaidoSection />
      <IaidoPeopleSection />
      <IaidoValuesSection />
      <Footer />
    </div>
  );
}

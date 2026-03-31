import Navbar from "@/components/Navbar";
import DojoSection from "@/components/DojoSection";
import Footer from "@/components/Footer";
import SimpleTopHeroSection from "@/components/SimpleTopHeroSection";

export default function DojoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SimpleTopHeroSection />
      <DojoSection />
      <Footer />
    </div>
  );
}

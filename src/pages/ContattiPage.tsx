import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SimpleTopHeroSection from "@/components/SimpleTopHeroSection";

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SimpleTopHeroSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

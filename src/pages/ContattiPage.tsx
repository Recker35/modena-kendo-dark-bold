import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
}

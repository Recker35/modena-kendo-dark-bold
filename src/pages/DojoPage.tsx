import Navbar from "@/components/Navbar";
import DojoSection from "@/components/DojoSection";
import Footer from "@/components/Footer";

export default function DojoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <DojoSection />
      <Footer />
    </div>
  );
}

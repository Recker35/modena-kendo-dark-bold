import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SimpleTopHeroSection from "@/components/SimpleTopHeroSection";

export default function Merch() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SimpleTopHeroSection />
      <main className="section-padding">
        <div className="max-w-7xl mx-auto pt-16" />
      </main>
      <Footer />
    </div>
  );
}

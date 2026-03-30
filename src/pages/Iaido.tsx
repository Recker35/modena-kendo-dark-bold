import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Iaido() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="section-padding">
        <div className="max-w-7xl mx-auto pt-16" />
      </main>
      <Footer />
    </div>
  );
}

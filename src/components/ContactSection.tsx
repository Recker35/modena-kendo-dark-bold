import { AnimatedSection } from "./AnimatedSection";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Messaggio inviato! Ti ricontatteremo presto.");
    setForm({ nome: "", email: "", messaggio: "" });
  };

  return (
    <AnimatedSection id="contatti" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-12">
          CONTATTI & LOCATION
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Form */}
          <div>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Via Isaac Newton 150, 41126 Modena (MO)</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+393318585877" className="text-muted-foreground hover:text-primary transition-colors">
                  331 858 5877
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:modenakendo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  modenakendo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://instagram.com/modenakendo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @modenakendo
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                required
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Messaggio"
                rows={4}
                value={form.messaggio}
                onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                required
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Invia
              </button>
            </form>
          </div>

          {/* Right: Map */}
          <div className="h-80 lg:h-auto min-h-[400px]">
            <iframe
              title="Modena Kendo Club Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.0!2d10.9!3d44.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDM4JzA5LjUiTiAxMMKwNTQnMDcuMiJF!5e0!3m2!1sit!2sit!4v1234567890"
              className="w-full h-full border border-border"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{}}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

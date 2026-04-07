import { AnimatedSection } from "./AnimatedSection";
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";
import HoverableTitleDivider from "./HoverableTitleDivider";

export default function ContactSection() {
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const subject = `Richiesta informazioni di "${form.nome}"`;
    const body = `${form.messaggio}\n\nEmail mittente: ${form.email}`;

    try {
      const response = await fetch("https://formsubmit.co/ajax/modenakendo@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.nome,
          email: form.email,
          message: body,
          _subject: subject,
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Invio non riuscito");
      }

      setFeedback("Messaggio inviato correttamente.");
      setForm({ nome: "", email: "", messaggio: "" });
    } catch {
      const mailtoUrl = `mailto:modenakendo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      setFeedback("Invio tramite client email avviato.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contatti" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <HoverableTitleDivider title="CONTATTI & LOCATION" className="mb-12" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Form */}
          <div>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Polisportiva Alfeo Corassori, Via Isaac Newton 150, 41126 Modena (MO)</span>
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
              <div className="flex items-center gap-4">
                <Facebook className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://www.facebook.com/ModenaKendoClub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Modena Kendo Club
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
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Invio..." : "Invia"}
              </button>
              {feedback ? (
                <p className="text-sm text-muted-foreground">{feedback}</p>
              ) : null}
            </form>
          </div>

          {/* Right: Map */}
          <div className="h-80 lg:h-auto min-h-[400px]">
            <iframe
              title="Modena Kendo Club Location"
              src="https://www.google.com/maps?q=Polisportiva+Alfeo+Corassori+Via+Isaac+Newton+150+41126+Modena&output=embed"
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

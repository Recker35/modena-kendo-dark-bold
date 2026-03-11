import { AnimatedSection } from "./AnimatedSection";
import { Clock, MapPin } from "lucide-react";

export default function DojoSection() {
  return (
    <AnimatedSection id="dojo" className="section-padding relative overflow-hidden">
      <span className="kanji-watermark -left-10 top-10 text-foreground">道場</span>

      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-6">IL DOJO</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Il Modena Kendo Club è un punto di riferimento per la pratica del Kendo in Emilia-Romagna.
          La nostra comunità accoglie principianti e praticanti esperti, offrendo un ambiente di
          crescita basato sui valori tradizionali delle arti marziali giapponesi.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Schedule */}
          <div className="bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                Orari Allenamento
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-foreground font-medium">Lunedì</span>
                <span className="text-primary font-heading tracking-wider">19:30 – 21:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Mercoledì</span>
                <span className="text-primary font-heading tracking-wider">20:15 – 21:45</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                Dove Siamo
              </h3>
            </div>
            <p className="text-muted-foreground">
              Via Isaac Newton 150<br />
              41126 Modena (MO)<br />
              Italia
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center border-t border-border pt-12">
          <p className="font-heading text-3xl md:text-4xl text-foreground/10 mb-2">交剣知愛</p>
          <p className="text-muted-foreground italic text-lg">
            "Attraverso l'incrocio delle spade, conosciamo l'amore"
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

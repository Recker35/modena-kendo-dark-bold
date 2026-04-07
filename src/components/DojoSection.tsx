import { AnimatedSection } from "./AnimatedSection";
import { Clock, MapPin } from "lucide-react";
import { useState } from "react";
import HoverableTitleDivider from "./HoverableTitleDivider";

export default function DojoSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <AnimatedSection id="dojo" className="section-padding pt-8 md:pt-10 pb-20 md:pb-28 relative overflow-hidden">
      <span className="kanji-watermark -left-10 top-10 text-foreground">道場</span>

      <div className="max-w-7xl mx-auto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <HoverableTitleDivider title="IL DOJO" className="mb-6" isExternalHovering={isHovering} />
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Il Modena Kendo Club è un punto di riferimento per la pratica del Kendo in Emilia-Romagna.
          La nostra comunità accoglie principianti e praticanti esperti, offrendo un ambiente di
          crescita basato sui valori tradizionali delle arti marziali giapponesi.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Location */}
          <div className="bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                Dove Siamo
              </h3>
            </div>
            <p className="text-muted-foreground">
              Polisportiva Alfeo Corassori<br />
              Via Isaac Newton 150<br />
              41126 Modena (MO)<br />
              Italia
            </p>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
            Orari Allenamento
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border p-6">
            <h4 className="font-heading text-lg uppercase tracking-wider text-foreground mb-4">
              Kendo Adulti
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-foreground font-medium">Lunedì</span>
                <span className="text-primary font-heading tracking-wider">19:30 – 21:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Mercoledì</span>
                <span className="text-primary font-heading tracking-wider">20:15 – 21:45</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-6">
            <h4 className="font-heading text-lg uppercase tracking-wider text-foreground mb-4">
              Kendo Juniores
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-foreground font-medium">Lunedì</span>
                <span className="text-muted-foreground">Orario in definizione</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Mercoledì</span>
                <span className="text-muted-foreground">Orario in definizione</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-6">
            <h4 className="font-heading text-lg uppercase tracking-wider text-foreground mb-4">
              Iaido
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-foreground font-medium">Lunedì</span>
                <span className="text-muted-foreground">Orario in definizione</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Mercoledì</span>
                <span className="text-muted-foreground">Orario in definizione</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

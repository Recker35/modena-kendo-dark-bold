import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import kendoImg from "@/assets/kendo-atmosphere.jpg";
import HoverableTitleDivider from "./HoverableTitleDivider";

export default function IaidoSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <AnimatedSection id="iaido" className="section-padding pt-6 md:pt-10 pb-2 md:pb-4 relative overflow-hidden">
      <span className="kanji-watermark -right-20 top-0 text-foreground">居</span>

      <div className="max-w-7xl mx-auto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <HoverableTitleDivider title="LO IAIDO" isExternalHovering={isHovering} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo Iaido e la via dell'estrazione della spada: una pratica che unisce tecnica, controllo e lucidita
              mentale in un unico gesto essenziale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ogni kata sviluppa attenzione, postura e precisione, coltivando disciplina interiore e rispetto
              attraverso uno studio rigoroso ma accessibile a tutte le eta.
            </p>
          </div>
          <div className="relative">
            <img
              src={kendoImg}
              alt="Iaido practice"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
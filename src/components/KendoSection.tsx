import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import kendoImg from "@/assets/kendo-atmosphere.jpg";
import HoverableTitleDivider from "./HoverableTitleDivider";

export default function KendoSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <AnimatedSection id="storia" className="section-padding pt-6 md:pt-10 pb-2 md:pb-4 relative overflow-hidden">
      <span className="kanji-watermark -right-20 top-0 text-foreground">武</span>

      <div className="max-w-7xl mx-auto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <HoverableTitleDivider title="IL KENDO" isExternalHovering={isHovering} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il Kendo, "la via della spada", è un'arte marziale giapponese che affonda le sue radici
              nelle tecniche dei samurai. Più di uno sport, è una disciplina che forgia corpo e mente
              attraverso il rigore, la concentrazione e il rispetto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Praticato con armatura protettiva (bogu) e spada di bambù (shinai), il Kendo insegna
              a superare i propri limiti e a trovare l'equilibrio interiore attraverso il confronto leale.
            </p>
          </div>
          <div className="relative">
            <img
              src={kendoImg}
              alt="Kendo practice"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

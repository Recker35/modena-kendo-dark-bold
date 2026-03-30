import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import heroImg from "@/assets/hero-kendo.jpg";
import HoverableTitleDivider from "./HoverableTitleDivider";

export default function JunioresSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <AnimatedSection id="juniores" className="section-padding pt-8 md:pt-10 pb-10 md:pb-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={heroImg}
              alt="Juniores kendo"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <HoverableTitleDivider title="JUNIORES" isExternalHovering={isHovering} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Spazio dedicato ai praticanti piu giovani del club, dove disciplina, crescita tecnica e
              spirito di gruppo si sviluppano passo dopo passo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Questa sezione puo essere aggiornata con programma, obiettivi stagionali e risultati
              specifici del gruppo Juniores.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

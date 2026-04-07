import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

export default function IaidoValuesSection() {
  const [isHovering, setIsHovering] = useState(false);
  const labelsRef = useRef<HTMLDivElement>(null);
  const [labelsWidth, setLabelsWidth] = useState(208); // fallback 13rem

  useEffect(() => {
    const updateLabelsWidth = () => {
      if (labelsRef.current) {
        setLabelsWidth(labelsRef.current.offsetWidth);
      }
    };

    updateLabelsWidth();
    window.addEventListener("resize", updateLabelsWidth);
    return () => window.removeEventListener("resize", updateLabelsWidth);
  }, []);

  return (
    <AnimatedSection id="iaido-valori" className="section-padding pt-8 md:pt-10">
      <div className="max-w-7xl mx-auto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <div className="text-center border-t border-border pt-8">
          <div className="flex justify-center">
            <div className="w-fit">
              <div
                className="h-0.5 bg-primary mb-6 transition-all duration-500 -ml-8"
                style={{ width: isHovering ? `${labelsWidth + 32}px` : "4rem" }}
              />
              <div ref={labelsRef} className="flex items-end justify-center gap-4 mb-10 w-fit mx-auto">
                <h2 className="heading-display text-4xl md:text-5xl text-foreground leading-none">Valori dello Iaido</h2>
                <p className="font-heading text-4xl md:text-5xl text-foreground leading-none">居合道</p>
              </div>
            </div>
          </div>
          <p className="text-primary italic text-lg mb-10">
            "I principi che guidano ogni kata"
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { kanji: "礼", title: "Reiho", desc: "Etichetta e rispetto.\nOgni pratica inizia e termina con il saluto: disciplina esteriore che forma il carattere interiore." },
              { kanji: "間", title: "Maai", desc: "Distanza e tempo corretti.\nPercepire lo spazio, il ritmo e l'intenzione per agire con precisione essenziale." },
              { kanji: "残", title: "Zanshin", desc: "Presenza che continua.\nAnche dopo il taglio, mente e corpo restano vigili: attenzione piena, calma e controllo." },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border-t-2 border-primary border-b border-l border-r border-b-border border-l-border border-r-border p-8 text-center transition-all duration-300 hover:border-t-8"
              >
                <span className="block font-heading text-5xl text-primary mb-3">{card.kanji}</span>
                <h4 className="font-heading text-xl text-foreground uppercase tracking-wider mb-4">
                  {card.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
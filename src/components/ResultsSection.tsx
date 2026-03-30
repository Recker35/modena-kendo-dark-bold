import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import HoverableTitleDivider from "./HoverableTitleDivider";

const results = [
  { emoji: "🥉", title: "3° posto — Gara Individuale Maschile", athlete: "Samuele Petraz" },
  { emoji: "🥉", title: "3° posto — Gara Individuale Femminile", athlete: "Beatrice Muscio" },
  { emoji: "⚔️", title: "Fighting Spirit — Gara Individuale", athlete: "Beatrice Muscio" },
  { emoji: "⚔️", title: "Fighting Spirit — Gara a Squadre", athlete: "Samuele Petraz" },
];

export default function ResultsSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <AnimatedSection id="risultati" className="section-padding py-8 md:py-10 relative overflow-hidden bg-muted">
      <span className="kanji-watermark right-0 bottom-0 text-foreground">勝</span>

      <div className="max-w-7xl mx-auto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <HoverableTitleDivider title="RISULTATI SPORTIVI" isExternalHovering={isHovering} />
        <p className="text-primary font-heading text-sm md:text-base tracking-wider uppercase mb-8">
          Campionati Italiani di Kendo — Modena 2026
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border p-6 flex gap-6 items-start group hover:border-primary/40 transition-colors"
            >
              <div className="text-5xl">{r.emoji}</div>
              <div>
                <h3 className="font-heading text-lg md:text-xl text-primary uppercase tracking-wider mb-1">
                  {r.title}
                </h3>
                <p className="text-lg md:text-xl text-foreground font-medium">{r.athlete}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

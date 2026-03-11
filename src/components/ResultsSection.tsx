import { AnimatedSection } from "./AnimatedSection";
import { Trophy, Medal } from "lucide-react";

const results = [
  {
    icon: Medal,
    emoji: "🥉",
    title: "3° Posto",
    event: "Campionati Italiani Kendo Individuale",
    location: "Modena 2026",
  },
  {
    icon: Trophy,
    emoji: "🏆",
    title: "Fighting Spirit Award",
    event: "Gare a Squadre",
    location: "Modena 2026",
  },
];

export default function ResultsSection() {
  return (
    <AnimatedSection id="risultati" className="section-padding relative overflow-hidden">
      <span className="kanji-watermark right-0 bottom-0 text-foreground">勝</span>

      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-12">
          RISULTATI SPORTIVI
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((r) => (
            <div
              key={r.title}
              className="bg-card border border-border p-8 flex gap-6 items-start group hover:border-primary/40 transition-colors"
            >
              <div className="text-5xl">{r.emoji}</div>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl text-primary uppercase tracking-wider mb-1">
                  {r.title}
                </h3>
                <p className="text-foreground font-medium mb-1">{r.event}</p>
                <p className="text-muted-foreground text-sm">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

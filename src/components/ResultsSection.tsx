import { AnimatedSection } from "./AnimatedSection";

const results = [
  { emoji: "🥉", title: "3° posto — Gara Individuale Maschile", athlete: "Samuele Petraz" },
  { emoji: "🥉", title: "3° posto — Gara Individuale Femminile", athlete: "Beatrice Muscio" },
  { emoji: "⚔️", title: "Fighting Spirit — Gara Individuale", athlete: "Beatrice Muscio" },
  { emoji: "⚔️", title: "Fighting Spirit — Gara a Squadre", athlete: "Samuele Petraz" },
];

export default function ResultsSection() {
  return (
    <AnimatedSection id="risultati" className="section-padding relative overflow-hidden bg-muted">
      <span className="kanji-watermark right-0 bottom-0 text-foreground">勝</span>

      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
          RISULTATI SPORTIVI
        </h2>
        <p className="text-primary font-heading text-lg md:text-xl tracking-wider uppercase mb-12">
          Campionati Italiani di Kendo — Modena 2026
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border p-8 flex gap-6 items-start group hover:border-primary/40 transition-colors"
            >
              <div className="text-5xl">{r.emoji}</div>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl text-primary uppercase tracking-wider mb-1">
                  {r.title}
                </h3>
                <p className="text-foreground font-medium">{r.athlete}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import { AnimatedSection } from "./AnimatedSection";

const cards = [
  {
    kanji: "守",
    romaji: "Shu",
    description:
      "Seguire le regole. Imparare la forma tradizionale con disciplina e rispetto.",
  },
  {
    kanji: "破",
    romaji: "Ha",
    description:
      "Rompere le regole. Comprendere il principio dietro la forma e iniziare a trovare la propria via.",
  },
  {
    kanji: "離",
    romaji: "Ri",
    description:
      "Trascendere. Creare il proprio stile, abbandonare le forme apprese e agire liberamente.",
  },
];

export default function ShuhariSection() {
  return (
    <AnimatedSection className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-heading text-6xl md:text-7xl text-foreground mb-2">守破離</p>
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-3">SHUHARI</h2>
        <p className="text-primary italic text-lg mb-12">Il percorso del praticante</p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.romaji}
              className="bg-card border border-border p-8 text-center"
            >
              <span className="block font-heading text-5xl text-primary mb-3">{c.kanji}</span>
              <h3 className="font-heading text-2xl text-foreground uppercase tracking-wider mb-4">
                {c.romaji}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

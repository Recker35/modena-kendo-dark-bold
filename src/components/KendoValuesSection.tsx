import { AnimatedSection } from "./AnimatedSection";
import { Shield, Zap, Swords, Heart } from "lucide-react";

const values = [
  { icon: Heart, kanji: "礼", title: "Rei", subtitle: "Rispetto" },
  { icon: Zap, kanji: "気", title: "Ki", subtitle: "Spirito" },
  { icon: Swords, kanji: "剣", title: "Ken", subtitle: "Spada" },
  { icon: Shield, kanji: "体", title: "Tai", subtitle: "Corpo" },
];

export default function KendoValuesSection() {
  return (
    <AnimatedSection id="kendo-values" className="section-padding pt-8 md:pt-10 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card border border-border p-6 text-center group hover:border-primary/50 transition-colors"
            >
              <span className="block font-heading text-4xl text-primary/30 mb-2">{v.kanji}</span>
              <v.icon className="w-6 h-6 mx-auto text-primary mb-3" />
              <h3 className="font-heading text-xl text-foreground uppercase tracking-wider">{v.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{v.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

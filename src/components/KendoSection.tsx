import { AnimatedSection } from "./AnimatedSection";
import kendoImg from "@/assets/kendo-atmosphere.jpg";
import { Shield, Zap, Swords, Heart } from "lucide-react";

const values = [
  { icon: Heart, kanji: "礼", title: "Rei", subtitle: "Rispetto" },
  { icon: Zap, kanji: "気", title: "Ki", subtitle: "Energia" },
  { icon: Swords, kanji: "剣", title: "Ken", subtitle: "Tecnica" },
  { icon: Shield, kanji: "体", title: "Tai", subtitle: "Corpo" },
];

export default function KendoSection() {
  return (
    <AnimatedSection id="storia" className="section-padding relative overflow-hidden">
      <span className="kanji-watermark -right-20 top-0 text-foreground">武</span>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="red-divider mb-6" />
            <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-6">
              IL KENDO
            </h2>
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
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>
        </div>

        {/* Values */}
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

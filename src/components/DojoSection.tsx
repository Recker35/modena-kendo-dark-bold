import { AnimatedSection } from "./AnimatedSection";
import { Clock, MapPin } from "lucide-react";

export default function DojoSection() {
  return (
    <AnimatedSection id="dojo" className="section-padding relative overflow-hidden">
      <span className="kanji-watermark -left-10 top-10 text-foreground">道場</span>

      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-6">IL DOJO</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Il Modena Kendo Club è un punto di riferimento per la pratica del Kendo in Emilia-Romagna.
          La nostra comunità accoglie principianti e praticanti esperti, offrendo un ambiente di
          crescita basato sui valori tradizionali delle arti marziali giapponesi.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Schedule */}
          <div className="bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                Orari Allenamento
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-foreground font-medium">Lunedì</span>
                <span className="text-primary font-heading tracking-wider">19:30 – 21:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Mercoledì</span>
                <span className="text-primary font-heading tracking-wider">20:15 – 21:45</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl uppercase tracking-wider text-foreground">
                Dove Siamo
              </h3>
            </div>
            <p className="text-muted-foreground">
              Via Isaac Newton 150<br />
              41126 Modena (MO)<br />
              Italia
            </p>
          </div>
        </div>

        {/* Shuhari */}
        <div className="text-center border-t border-border pt-12">
          <p className="font-heading text-5xl md:text-6xl text-foreground mb-2">守破離</p>
          <h3 className="font-heading text-2xl md:text-3xl text-foreground uppercase tracking-widest mb-3">
            Shuhari
          </h3>
          <p className="text-primary italic text-lg mb-10">
            "Il percorso del praticante"
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { kanji: "守", title: "Shu", desc: "Seguire le regole.\nImparare la forma tradizionale con disciplina e rispetto." },
              { kanji: "破", title: "Ha", desc: "Rompere le regole.\nComprendere il principio dietro la forma e iniziare a trovare la propria via." },
              { kanji: "離", title: "Ri", desc: "Trascendere le regole.\nLa tecnica diventa istinto. La forma e il praticante sono una cosa sola." },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border-t-2 border-primary border-b border-l border-r border-b-border border-l-border border-r-border p-8 text-center"
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

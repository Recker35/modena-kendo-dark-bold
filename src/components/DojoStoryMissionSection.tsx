import { AnimatedSection } from "./AnimatedSection";
import dojoStoryImg from "@/assets/hero-kendo.jpg";
import missionImg from "@/assets/kendo-atmosphere.jpg";
import HoverableTitleDivider from "./HoverableTitleDivider";

export default function DojoStoryMissionSection() {
  return (
    <AnimatedSection className="section-padding pt-8 md:pt-12 pb-2 md:pb-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14 md:space-y-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-1">
            <img
              src={dojoStoryImg}
              alt="Allenamento storico nel dojo"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
          <div className="order-2">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il nostro dojo nasce dal desiderio di portare a Modena una pratica autentica del Kendo,
              fondata su disciplina, rispetto e crescita personale. Negli anni, da piccolo gruppo di
              appassionati, siamo diventati una realta consolidata capace di accogliere persone di ogni eta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ogni allenamento custodisce questa storia: l'impegno dei senpai, l'entusiasmo dei nuovi
              praticanti e la volonta comune di migliorarsi insieme, dentro e fuori dallo shiaijo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <HoverableTitleDivider title="MISSION" className="text-3xl md:text-4xl mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              La nostra missione e formare praticanti consapevoli, trasmettendo il Kendo come via educativa
              prima ancora che agonistica. Curare tecnica e spirito significa costruire carattere, autocontrollo
              e rispetto reciproco in ogni fase del percorso.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vogliamo essere un punto di riferimento aperto e inclusivo, dove ogni persona possa trovare
              una guida competente e una comunita pronta a sostenere il proprio cammino.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <img
              src={missionImg}
              alt="Praticanti del dojo durante un allenamento"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
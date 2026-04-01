import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SimpleTopHeroSection from "@/components/SimpleTopHeroSection";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroKendo from "@/assets/hero-kendo.jpg";
import kendoAtmosphere from "@/assets/kendo-atmosphere.jpg";
import mkcLogo from "@/assets/mkc-logo.jpeg";

type MerchItem = {
  name: string;
  note: string;
  image: string;
};

type MerchCategory = {
  title: string;
  subtitle: string;
  items: MerchItem[];
};

const merchCategories: MerchCategory[] = [
  {
    title: "Magliette",
    subtitle: "Linea training e linea evento con grafiche MKC.",
    items: [
      { name: "Training Tee", note: "Cotone tecnico, stampa frontale", image: heroKendo },
      { name: "Dojo Classic", note: "Versione nera con logo piccolo", image: kendoAtmosphere },
      { name: "Edition Team", note: "Patch celebrativa stagione", image: heroKendo },
    ],
  },
  {
    title: "Felpe",
    subtitle: "Vestibilita comoda, ideali per trasferte e seminari.",
    items: [
      { name: "Hoodie MKC", note: "Cappuccio e logo ricamato", image: kendoAtmosphere },
      { name: "Zip Club", note: "Felpa zip con dettaglio manica", image: heroKendo },
      { name: "Heavy Winter", note: "Versione pesante premium", image: kendoAtmosphere },
    ],
  },
  {
    title: "Tenugui",
    subtitle: "Design tradizionali e grafiche dedicate al dojo.",
    items: [
      { name: "Tenugui Aka", note: "Motivo rosso MKC", image: mkcLogo },
      { name: "Tenugui Kuro", note: "Motivo nero minimal", image: mkcLogo },
      { name: "Tenugui Event", note: "Serie limitata seminario", image: mkcLogo },
    ],
  },
  {
    title: "Accessori",
    subtitle: "Borse, patch, adesivi e piccoli extra da dojo.",
    items: [
      { name: "Borsa Shinai", note: "Versione club con tracolla", image: heroKendo },
      { name: "Patch MKC", note: "Patch tessuta per giacca", image: mkcLogo },
      { name: "Sticker Pack", note: "Set adesivi dojo", image: kendoAtmosphere },
    ],
  },
];

export default function Merch() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SimpleTopHeroSection />
      <main>
        <AnimatedSection className="section-padding pt-12 md:pt-16 pb-8 md:pb-12 relative overflow-hidden">
          <span className="kanji-watermark -right-20 top-6 text-foreground">商</span>
          <div className="max-w-7xl mx-auto">
            <div className="red-divider mb-6" />
            <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-5">MERCH MKC</h1>
            <p className="max-w-3xl text-muted-foreground leading-relaxed mb-6">
              Una vetrina delle proposte club: capi e accessori pensati per la vita di dojo e gli eventi.
              Questa pagina e solo espositiva: non e uno shop online e non prevede acquisti dal sito.
            </p>
            <div className="inline-flex items-center border border-primary/50 bg-primary/10 px-4 py-2">
              <span className="font-heading tracking-wider text-xs md:text-sm uppercase text-primary">
                Solo vetrina - Non acquistabile online
              </span>
            </div>
          </div>
        </AnimatedSection>

        {merchCategories.map((category, idx) => (
          <AnimatedSection
            key={category.title}
            className={`section-padding ${idx % 2 === 0 ? "pt-8 md:pt-10" : "pt-6 md:pt-8"} pb-10 md:pb-12`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-2">{category.title}</h2>
                  <p className="text-muted-foreground">{category.subtitle}</p>
                </div>
                <span className="hidden md:inline-block text-xs uppercase tracking-widest text-primary border border-primary/40 px-3 py-2">
                  Preview
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.items.map((item) => (
                  <article
                    key={`${category.title}-${item.name}`}
                    className="group border border-border bg-card overflow-hidden"
                  >
                    <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest bg-background/90 text-foreground px-2 py-1 border border-border">
                        Provvisorio
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-2xl leading-none uppercase tracking-wide text-foreground mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.note}</p>
                      <p className="text-xs uppercase tracking-widest text-primary">Non in vendita online</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection className="section-padding pt-4 md:pt-6 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto border border-border bg-muted/40 p-8 md:p-10">
            <h2 className="heading-display text-2xl md:text-3xl text-foreground mb-3">COME FUNZIONA</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Le grafiche e i modelli mostrati qui servono come anteprima del materiale club. Per disponibilita,
              taglie e nuove uscite, fai riferimento agli annunci interni e alle comunicazioni durante gli allenamenti.
            </p>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

import { AnimatedSection } from "./AnimatedSection";
import { User } from "lucide-react";

const members = [
  {
    name: "Marco Rossi",
    role: "Sensei · 5° Dan",
    bio: "Oltre 20 anni di esperienza nel Kendo. Istruttore certificato CIK e punto di riferimento per il club.",
  },
  {
    name: "Alessandro Bianchi",
    role: "Sempai · 3° Dan",
    bio: "Praticante dal 2010, guida i nuovi membri con passione e dedizione nel percorso marziale.",
  },
  {
    name: "Giulia Ferri",
    role: "Sempai · 2° Dan",
    bio: "Atleta competitiva e allenatrice, porta energia e precisione tecnica in ogni allenamento.",
  },
];

export default function SenseiSection() {
  return (
    <AnimatedSection id="sensei" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-12">
          SENSEI & SEMPAI
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-card border border-border border-t-2 border-t-primary p-8 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-xl text-foreground uppercase tracking-wider mb-1">
                {m.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

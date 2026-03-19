import { AnimatedSection } from "./AnimatedSection";
import { User } from "lucide-react";

const sensei = {
  name: "Stefano Verrina",
  role: "Sensei",
  detail: "6° Dan Renshi\ncon oltre 40 anni di esperienza",
};

const senpai = [
  { name: "Luca Arletti", role: "Senpai", detail: "6° Dan" },
  { name: "Danilo Zaccarelli", role: "Senpai — Presidente della Società", detail: "4° Dan" },
  { name: "Manuela Dondi", role: "Senpai", detail: "4° Dan" },
  { name: "Andrea Bennici", role: "Senpai", detail: "4° Dan" },
  { name: "Luca Sandri", role: "Senpai", detail: "4° Dan" },
];

export default function SenseiSection() {
  return (
    <AnimatedSection id="sensei" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-12">
          SENSEI & SENPAI
        </h2>

        {/* Sensei — prominent card */}
        <div className="flex justify-center mb-10">
          <div className="bg-card border border-border border-t-4 border-t-primary p-10 text-center max-w-md w-full">
            <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <User className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground uppercase tracking-wider mb-1">
              {sensei.name}
            </h3>
            <p className="text-primary text-sm font-medium mb-2">{sensei.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{sensei.detail}</p>
          </div>
        </div>

        {/* Senpai grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {senpai.map((m) => (
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
              <p className="text-primary text-sm font-medium mb-2">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

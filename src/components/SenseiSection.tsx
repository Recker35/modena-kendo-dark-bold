import { AnimatedSection } from "./AnimatedSection";
import { User } from "lucide-react";

const sensei = {
  name: "Stefano Verrina",
  role: "Sensei",
  bio: "6° Dan — 30 anni di esperienza",
};

const sempai = [
  { name: "Luca Arletti", role: "Sempai", bio: "6° Dan" },
  { name: "Danilo Zaccarelli", role: "Sempai, Presidente della Società", bio: "4° Dan" },
  { name: "Manuela Dondi", role: "Sempai", bio: "4° Dan" },
  { name: "Andrea Benni", role: "Sempai", bio: "4° Dan" },
];

function MemberCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="bg-card border border-border border-t-2 border-t-primary p-8 text-center">
      <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
        <User className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="font-heading text-xl text-foreground uppercase tracking-wider mb-1">
        {name}
      </h3>
      <p className="text-primary text-sm font-medium mb-2">{role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

export default function SenseiSection() {
  return (
    <AnimatedSection id="sensei" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="red-divider mb-6" />
        <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-12">
          SENSEI & SEMPAI
        </h2>

        {/* Sensei */}
        <div className="max-w-sm mx-auto mb-8">
          <MemberCard {...sensei} />
        </div>

        {/* Sempai */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sempai.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import heroImg from "@/assets/hero-kendo.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero" className="relative mt-[72px] h-[620px] md:h-[680px] lg:h-[720px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center bg-background">
        <img src={heroImg} alt="Kendo action" className="w-full h-full object-contain sm:object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Kanji watermark */}
      <span className="kanji-watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        剣道
      </span>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="red-divider-wide mx-auto mb-8" />
        <h1 className="heading-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-6">
          MODENA<br />KENDO CLUB
        </h1>
        <p className="font-body text-lg md:text-xl text-white/80 mb-10 tracking-wide italic">
          La Via della Spada Giapponese a Modena
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contatti"
            className="inline-block bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase px-8 py-4 border-2 border-primary transition-all duration-300 hover:bg-white hover:text-primary hover:border-white"
          >
            Inizia ad allenarti
          </Link>
          <a
            href="#storia"
            className="inline-block border border-white/30 text-white font-heading text-sm tracking-widest uppercase px-8 py-4 hover:border-primary hover:text-primary transition-colors"
          >
            Scopri il Kendo
          </a>
        </div>
      </div>
    </section>
  );
}

import heroImg from "@/assets/hero-kendo.jpg";

export default function SimpleTopHeroSection() {
  return (
    <section className="relative mt-[72px] h-[620px] md:h-[680px] lg:h-[720px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-background">
        <img src={heroImg} alt="Modena Kendo Club" className="w-full h-full object-contain sm:object-cover" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="heading-display text-4xl sm:text-6xl md:text-7xl text-white leading-none">
          MODENA
          <br />
          KENDO CLUB
        </h1>
        <p className="font-body text-lg md:text-xl text-white/80 mt-6 tracking-wide italic">
          La Via della Spada Giapponese a Modena
        </p>
      </div>
    </section>
  );
}
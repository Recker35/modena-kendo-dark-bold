import { type RefObject, useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronLeft, ChevronRight, User, Instagram } from "lucide-react";
import HoverableTitleDivider from "./HoverableTitleDivider";

const sensei = {
  name: "Stefano Verrina",
  katakana: "ステファノ・ヴェッリーナ",
  role: "Sensei",
  detail: "6° Dan Renshi\ncon oltre 40 anni di esperienza",
};

const senpai = [
  { name: "Luca Arletti", katakana: "ルカ・アルレッティ", role: "Senpai", detail: "6° Dan", showInstagram: false },
  { name: "Danilo Zaccarelli", katakana: "ダニーロ・ザッカレッリ", role: "Senpai — Presidente della Società", detail: "4° Dan", showInstagram: true },
  { name: "Manuela Dondi", katakana: "マヌエラ・ドンディ", role: "Senpai", detail: "4° Dan", showInstagram: true },
  { name: "Andrea Bennici", katakana: "アンドレア・ベンニチ", role: "Senpai", detail: "4° Dan", showInstagram: true },
  { name: "Luca Sandri", katakana: "ルカ・サンドリ", role: "Senpai", detail: "4° Dan", showInstagram: true },
];

const competitors = [
  { name: "Luca Arletti", katakana: "ルカ・アルレッティ", grade: "6° Dan", results: "", showInstagram: false },
  { name: "Samuele Petraz", katakana: "サムエレ・ペトラズ", grade: "2° Dan", results: "3° posto Campionati italiani maschili 🥉", showInstagram: true },
  { name: "Beatrice Muscio", katakana: "ベアトリーチェ・ムーショ", grade: "2° Dan", results: "3° posto Campionati italiani femminili 🥉", showInstagram: true },
  { name: "Matteo Galanti", katakana: "マッテオ・ガランティ", grade: "1° Dan", results: "", showInstagram: true },
  { name: "Giorgio Ongaro", katakana: "ジョルジョ・オンガロ", grade: "2° Kyu", results: "", showInstagram: true },
  { name: "Andrea Bennici", katakana: "アンドレア・ベンニチ", grade: "4° Dan", results: "", showInstagram: true },
  { name: "Francesca Carboni", katakana: "フランチェスカ・カルボーニ", grade: "3° Dan", results: "", showInstagram: true },
  { name: "Giovanni Faraguti", katakana: "ジョヴァンニ・ファラグーティ", grade: "2° Dan", results: "", showInstagram: true },
  { name: "Riccardo Mazzi", katakana: "リッカルド・マッツィ", grade: "1° Dan", results: "", showInstagram: true },
];

export default function SenseiSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const competitorsScrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [senseiArrows, setSenseiArrows] = useState({ canLeft: false, canRight: true });
  const [competitorsArrows, setCompetitorsArrows] = useState({ canLeft: false, canRight: true });

  const updateArrowState = (
    targetRef: RefObject<HTMLDivElement | null>,
    setState: (value: { canLeft: boolean; canRight: boolean }) => void,
  ) => {
    if (!targetRef.current) return;

    const { scrollLeft, clientWidth, scrollWidth } = targetRef.current;
    const canLeft = scrollLeft > 1;
    const canRight = scrollLeft + clientWidth < scrollWidth - 1;
    setState({ canLeft, canRight });
  };

  const scrollCards = (targetRef: RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (!targetRef.current) return;

    const amount = Math.round(targetRef.current.clientWidth * 0.75);
    targetRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const updateAll = () => {
      updateArrowState(scrollRef, setSenseiArrows);
      updateArrowState(competitorsScrollRef, setCompetitorsArrows);
    };

    updateAll();
    window.addEventListener("resize", updateAll);
    return () => window.removeEventListener("resize", updateAll);
  }, []);

  return (
    <AnimatedSection id="sensei" className="section-padding pt-2 md:pt-4 pb-10 md:pb-14">
      <div className="max-w-7xl mx-auto" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <HoverableTitleDivider title="SENSEI & SENPAI" isExternalHovering={isHovering} />

        <div className="relative">
          {senseiArrows.canLeft && (
            <button
              type="button"
              onClick={() => scrollCards(scrollRef, "left")}
              aria-label="Scorri a sinistra"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur-sm transition hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={() => updateArrowState(scrollRef, setSenseiArrows)}
            className="hide-scrollbar overflow-x-auto scroll-smooth"
          >
            <div className="flex w-max gap-6 px-10">
              <div className="group w-64 min-h-[430px] overflow-hidden border border-border border-t-2 border-t-primary bg-card transition-all duration-300 hover:border-primary hover:border-t-4">
                <div className="relative flex h-[330px] w-full items-center justify-center bg-secondary text-muted-foreground">
                  <div className="absolute right-0 top-0 z-10 inline-flex items-center justify-center bg-white px-1.5 py-1 shadow-sm">
                    <span className="whitespace-nowrap text-[15px] font-semibold tracking-[0.04em] leading-none text-black transition-colors duration-300 group-hover:text-red-600 [writing-mode:vertical-rl] [text-orientation:upright]">
                      {sensei.katakana}
                    </span>
                  </div>
                  <User className="h-16 w-16" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="flex h-9 items-start justify-center overflow-hidden break-words font-heading text-xl uppercase tracking-wider leading-tight text-foreground">
                    {sensei.name}
                  </h3>
                  <p className="flex h-7 items-start justify-center overflow-hidden whitespace-nowrap px-0 text-[13px] font-bold leading-tight text-primary">
                    {sensei.role}
                  </p>
                  <p className="flex h-9 items-start justify-center overflow-hidden whitespace-pre-line text-sm leading-tight text-muted-foreground">
                    {sensei.detail}
                  </p>
                </div>
              </div>

              {senpai.map((m) => (
                <div
                  key={m.name}
                  className="group w-64 min-h-[430px] overflow-hidden border border-border border-t-2 border-t-primary bg-card transition-all duration-300 hover:border-primary hover:border-t-4 relative"
                >
                  <div className="flex h-[330px] w-full items-center justify-center bg-secondary text-muted-foreground relative">
                    <div className="absolute right-0 top-0 z-10 inline-flex items-center justify-center bg-white px-1.5 py-1 shadow-sm">
                      <span className="whitespace-nowrap text-[15px] font-semibold tracking-[0.04em] leading-none text-black transition-colors duration-300 group-hover:text-red-600 [writing-mode:vertical-rl] [text-orientation:upright]">
                        {m.katakana}
                      </span>
                    </div>
                    {m.showInstagram && (
                      <a
                        href="https://instagram.com/modenakendo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 left-3 z-10 text-white/60 hover:text-white transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    <User className="h-16 w-16" />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="flex h-9 items-start justify-center overflow-hidden break-words font-heading text-xl uppercase tracking-wider leading-tight text-foreground">
                      {m.name}
                    </h3>
                    <p className="flex h-7 items-start justify-center overflow-hidden whitespace-nowrap px-0 text-[13px] font-medium leading-tight text-primary">
                      {m.role}
                    </p>
                    <p className="flex h-9 items-start justify-center overflow-hidden whitespace-pre-line text-sm leading-tight text-muted-foreground">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {senseiArrows.canRight && (
            <button
              type="button"
              onClick={() => scrollCards(scrollRef, "right")}
              aria-label="Scorri a destra"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur-sm transition hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="mt-20">
          <HoverableTitleDivider title="COMPETITORS" isExternalHovering={isHovering} />

          <div className="relative">
            {competitorsArrows.canLeft && (
              <button
                type="button"
                onClick={() => scrollCards(competitorsScrollRef, "left")}
                aria-label="Scorri competitors a sinistra"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur-sm transition hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            <div
              ref={competitorsScrollRef}
              onScroll={() => updateArrowState(competitorsScrollRef, setCompetitorsArrows)}
              className="hide-scrollbar overflow-x-auto scroll-smooth"
            >
              <div className="flex w-max gap-6 px-10">
                {competitors.map((c, index) => (
                  <div
                    key={`${c.name}-${index}`}
                    className="group w-64 min-h-[430px] overflow-hidden border border-border border-t-2 border-t-primary bg-card transition-all duration-300 hover:border-primary hover:border-t-4 relative"
                  >
                    <div className="flex h-[330px] w-full items-center justify-center bg-secondary text-muted-foreground relative">
                      <div className="absolute right-0 top-0 z-10 inline-flex items-center justify-center bg-white px-1.5 py-1 shadow-sm">
                        <span className="whitespace-nowrap text-[15px] font-semibold tracking-[0.04em] leading-none text-black transition-colors duration-300 group-hover:text-red-600 [writing-mode:vertical-rl] [text-orientation:upright]">
                          {c.katakana}
                        </span>
                      </div>
                      {c.showInstagram && (
                        <a
                          href="https://instagram.com/modenakendo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-3 left-3 z-10 text-white/60 hover:text-white transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      <User className="h-16 w-16" />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="flex h-9 items-start justify-center overflow-hidden break-words font-heading text-xl uppercase tracking-wider leading-tight text-foreground">
                        {c.name}
                      </h3>
                      <p className="flex h-7 items-start justify-center overflow-hidden whitespace-nowrap px-0 text-[13px] font-medium leading-tight text-primary">
                        {c.grade}
                      </p>
                      <p className="flex h-9 items-start justify-center overflow-hidden whitespace-pre-line text-sm leading-tight text-muted-foreground">
                        {c.results}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {competitorsArrows.canRight && (
              <button
                type="button"
                onClick={() => scrollCards(competitorsScrollRef, "right")}
                aria-label="Scorri competitors a destra"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur-sm transition hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

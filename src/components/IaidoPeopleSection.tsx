import { type RefObject, useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import HoverableTitleDivider from "./HoverableTitleDivider";

const emptySenseiSenpaiCards = Array.from({ length: 4 });
const emptyCompetitorCards = Array.from({ length: 4 });

export default function IaidoPeopleSection() {
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
              {emptySenseiSenpaiCards.map((_, index) => (
                <div
                  key={`iaido-sensei-empty-${index}`}
                  className="w-64 min-h-[430px] overflow-hidden border border-border border-t-2 border-t-primary bg-card transition-all duration-300 hover:border-primary hover:border-t-4"
                >
                  <div className="flex h-[342px] w-full items-center justify-center bg-secondary text-muted-foreground">
                    <User className="h-16 w-16" />
                  </div>
                  <div className="px-3 py-2 text-center">
                    <h3 className="flex h-8 items-start justify-center overflow-hidden break-words font-heading text-xl uppercase tracking-wider leading-tight text-foreground">
                      &nbsp;
                    </h3>
                    <p className="flex h-6 items-start justify-center overflow-hidden whitespace-nowrap px-0 text-[13px] font-medium leading-tight text-primary">
                      &nbsp;
                    </p>
                    <p className="flex h-8 items-start justify-center overflow-hidden whitespace-pre-line text-sm leading-tight text-muted-foreground">
                      &nbsp;
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
                {emptyCompetitorCards.map((_, index) => (
                  <div
                    key={`iaido-competitor-empty-${index}`}
                    className="w-64 min-h-[430px] overflow-hidden border border-border border-t-2 border-t-primary bg-card transition-all duration-300 hover:border-primary hover:border-t-4"
                  >
                    <div className="flex h-[342px] w-full items-center justify-center bg-secondary text-muted-foreground">
                      <User className="h-16 w-16" />
                    </div>
                    <div className="px-3 py-2 text-center">
                      <h3 className="flex h-8 items-start justify-center overflow-hidden break-words font-heading text-xl uppercase tracking-wider leading-tight text-foreground">
                        &nbsp;
                      </h3>
                      <p className="flex h-6 items-start justify-center overflow-hidden whitespace-nowrap px-0 text-[13px] font-medium leading-tight text-primary">
                        &nbsp;
                      </p>
                      <p className="flex h-8 items-start justify-center overflow-hidden whitespace-pre-line text-sm leading-tight text-muted-foreground">
                        &nbsp;
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
import { useEffect, useState } from "react";
import breadmascot1 from "@/assets/breadmascot1.png";
import breadmascot2 from "@/assets/breadmascot2.png";
import breadmascot3 from "@/assets/breadmascot3.png";
import breadmascot4 from "@/assets/breadmascot4.png";

const slides = [
  { src: breadmascot1, alt: "Bread Pakodawala mascot presenting freshly prepared Bread Pakoda" },
  { src: breadmascot2, alt: "Bread Pakodawala mascot preparing fresh Bread Pakoda in a hot kadhai" },
  { src: breadmascot3, alt: "Bread Pakodawala mascot welcoming customers with fresh Bread Pakoda" },
  { src: breadmascot4, alt: "Bread Pakodawala mascot serving hot chai and crispy Bread Pakoda" },
];

export function HeroMascotCarousel() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setActive((p) => (p + 1) % slides.length), 4500);
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="relative w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[28rem] lg:max-w-[31rem] xl:max-w-[33rem]">
        <div className="relative mx-auto aspect-[4/5] max-h-[20rem] sm:max-h-[22rem] md:max-h-[32rem] lg:max-h-[36rem] w-full overflow-hidden">
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                width={660}
                height={825}
                fetchPriority={i === 0 ? "high" : "low"}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full object-contain object-bottom"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.985)",
                  transition: reduced ? "none" : "opacity 750ms ease-in-out, transform 750ms ease-in-out",
                  willChange: "opacity, transform",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 md:mt-4" role="tablist" aria-label="Mascot slides">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={
              i === active
                ? "h-2 w-6 rounded-full bg-brand-red transition-all duration-300"
                : "h-2 w-2 rounded-full bg-charcoal/20 transition-all duration-300 hover:bg-charcoal/35"
            }
          />
        ))}
      </div>
    </div>
  );
}

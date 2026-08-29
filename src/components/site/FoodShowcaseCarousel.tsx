import { useEffect, useState } from "react";
import { itemPhotos } from "@/lib/brand";

const slides = [
  { src: itemPhotos.alooPakoda, label: "Bread Pakoda", sub: "Signature" },
  { src: itemPhotos.batakaBhajiya, label: "Batata Na Bhajiya", sub: null },
  { src: itemPhotos.paneerBhurji, label: "Paneer Bhurji Pakoda", sub: null },
  { src: itemPhotos.cheeseBurst, label: "Cheese Burst Pakoda", sub: null },
  { src: itemPhotos.periPeriPakoda, label: "Peri Peri Pakoda", sub: null },
];

export function FoodShowcaseCarousel() {
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
    const id = window.setInterval(() => setActive((p) => (p + 1) % slides.length), 3500);
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[32rem]">
        <div className="relative mx-auto aspect-square max-h-[22rem] sm:max-h-[26rem] md:max-h-[28rem] lg:max-h-[32rem] w-full overflow-hidden rounded-[2rem]">
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <img
                key={s.label}
                src={s.src}
                alt={s.label}
                width={640}
                height={640}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.97)",
                  transition: reduced ? "none" : "opacity 700ms ease-in-out, transform 700ms ease-in-out",
                  willChange: "opacity, transform",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-5 text-center">
        <p className="font-display text-sm tracking-[0.18em] uppercase text-brand-yellow">
          {slides[active].label}
        </p>
        {slides[active].sub ? (
          <p className="mt-1 font-display text-xs tracking-[0.2em] uppercase opacity-60">{slides[active].sub}</p>
        ) : null}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Food showcase">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show ${slides[i].label}`}
            onClick={() => setActive(i)}
            className={
              i === active
                ? "h-2 w-6 rounded-full bg-brand-yellow transition-all duration-300"
                : "h-2 w-2 rounded-full bg-on-dark/25 transition-all duration-300 hover:bg-on-dark/50"
            }
          />
        ))}
      </div>
    </div>
  );
}

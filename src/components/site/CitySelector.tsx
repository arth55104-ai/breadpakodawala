import { MapPin, Phone, Clock, Navigation, ArrowRight } from "lucide-react";
import { assets, cities, locations } from "@/lib/brand";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const flagship = locations[0]!;

export function CitySelector() {
  return (
    <section className="grain relative overflow-hidden bg-cream-deep px-4 py-20 md:px-8 md:py-28">
      <img
        src={assets.skyline}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-[90rem]">
        <p className="font-display text-sm tracking-[0.3em] text-primary uppercase">
          Where are we?
        </p>
        <h2 className="mt-4 display-tight text-[clamp(2.5rem,7vw,5rem)]">
          Find your
          <br />
          <span className="text-brand-red">craving.</span>
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed opacity-75">
          From Vadodara to more cities — the craving is growing.
        </p>

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pt-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pt-0 sm:pb-0 sm:scroll-px-0 lg:grid-cols-3">
          {cities.map((c) => {
            const available = c.status === "available";
            return (
              <div key={c.id} className="w-[min(22rem,calc(100vw-64px))] shrink-0 snap-start sm:w-auto">
                <button
                  type="button"
                  disabled={!available}
                  aria-pressed={available}
                  className={cn(
                    "group relative flex h-full w-full cursor-pointer flex-col items-start gap-3 overflow-hidden rounded-3xl border-2 px-7 pb-7 pt-9 text-left transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none md:px-9 md:pb-9 md:pt-11",
                    available
                      ? "border-brand-red bg-charcoal text-on-dark shadow-lift"
                      : "cursor-not-allowed border-charcoal/15 bg-card opacity-70 grayscale-[0.2]",
                  )}
                >
                  <span className="display-tight text-[clamp(2rem,5vw,3.25rem)] leading-none uppercase">
                    {c.name}
                  </span>
                  {available ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3 py-1 font-display text-xs tracking-widest text-charcoal uppercase">
                      <span className="size-2 rounded-full bg-brand-red" aria-hidden="true" />
                      Available
                    </span>
                  ) : (
                    <span className="rounded-full border border-brand-red/50 px-3 py-1 font-display text-xs tracking-widest text-brand-red uppercase">
                      Coming Soon
                    </span>
                  )}
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 font-display text-sm tracking-widest uppercase opacity-70 transition-opacity group-hover:opacity-100">
                    {available ? "Explore location" : "Coming soon"}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <Reveal delay={240}>
          <div className="mt-4 rounded-3xl border-2 border-dashed border-charcoal/25 px-6 py-5 text-center font-display text-sm tracking-[0.25em] uppercase opacity-70">
            More cities coming soon
          </div>
        </Reveal>

        {/* Active city details */}
        <div className="anim-rise mt-12">
          <article className="grid gap-8 rounded-3xl border-2 border-charcoal/10 bg-card p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <span className="rounded-full bg-brand-red px-3 py-1 font-display text-xs tracking-widest text-primary-foreground uppercase">
                Flagship
              </span>
              <h3 className="mt-4 display-tight text-3xl md:text-5xl">{flagship.name}</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="opacity-80">{flagship.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a href={flagship.phoneHref} className="opacity-80 hover:text-primary">
                    {flagship.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="opacity-80">{flagship.hours}</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="order" size="pill">
                  <a href={flagship.phoneHref}>Call Now</a>
                </Button>
                <Button asChild variant="cream" size="pill">
                  <a href={flagship.mapsUrl} target="_blank" rel="noreferrer noopener">
                    <Navigation aria-hidden="true" /> Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={assets.pakodaPlate}
              alt="Hot bread pakoda served at Chokhandi, Vadodara"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[20rem] self-center object-contain drop-shadow-2xl"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

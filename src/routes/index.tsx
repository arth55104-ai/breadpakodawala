import { createFileRoute, Link } from "@tanstack/react-router";

import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { Sticker } from "@/components/site/Sticker";
import { SectionHeader, Eyebrow } from "@/components/site/SectionHeader";
import { FoodCard } from "@/components/site/FoodCard";
import { Button } from "@/components/ui/button";
import {
  assets,
  brand,
  cravingWords,
  cravingPoints,
  menuItems,
  story,
} from "@/lib/brand";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bread Pakodawala — Vadodara's Legendary Bread Pakoda Since 1987" },
      {
        name: "description",
        content:
          "Crispy, hot and unforgettable. Jalaram Nasta House in Chokhandi, Vadodara has been serving the city's most famous Bread Pakoda since 1987.",
      },
      { property: "og:title", content: "Bread Pakodawala — Crispy. Hot. Unforgettable." },
      {
        property: "og:description",
        content:
          "Vadodara's legendary Bread Pakoda, serving the craving since 1987. Order hot from Chokhandi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const featured = menuItems.filter((i) => !i.placeholder).slice(0, 3);

function Index() {
  return (
    <main>
        {/* 1. HERO */}
        <section className="grain relative overflow-hidden bg-cream pt-32 pb-16 md:pt-44 md:pb-24">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-28 h-[28rem] w-[28rem] rounded-full bg-brand-yellow/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-brand-red/15 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-6">
            {/* FOOD first on mobile */}
            <div className="relative order-1 md:order-2">
              <img
                src={assets.pakodaPlate}
                alt="A plate of hot, crispy Bread Pakoda from Bread Pakodawala, Vadodara"
                width={900}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="mx-auto w-full max-w-[24rem] drop-shadow-2xl md:max-w-[34rem]"
                style={{ animation: "bp-hero-food 0.9s cubic-bezier(0.22,1,0.36,1) both" }}
              />
              <Sticker
                src={assets.badgeTasty}
                alt="Tasty"
                tilt={-10}
                className="absolute -bottom-2 left-2 w-16 md:-left-6 md:w-28"
              />
              <Sticker
                src={assets.chilli}
                alt=""
                tilt={12}
                className="absolute right-0 -bottom-4 w-16 md:w-24"
              />
            </div>

            <div className="order-2 md:order-1">
              <Eyebrow className="text-primary">Chokhandi, Vadodara · Since {brand.since}</Eyebrow>
              <h1 className="mt-5 display-tight text-[clamp(1.75rem,5vw,3.75rem)] break-words">
                Crispy.
                <br />
                <span className="text-brand-red">Hot.</span>
                <br />
                Unforgettable.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed opacity-80 md:text-lg">
                Vadodara&rsquo;s legendary Bread Pakoda, serving the craving since {brand.since}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="order" size="pillLg">
                  <a href={brand.phoneHref}>Order Now</a>
                </Button>
                <Button asChild variant="cream" size="pillLg">
                  <Link to="/menu">Explore Menu</Link>
                </Button>
              </div>
              <p className="mt-6 font-display text-sm tracking-[0.2em] uppercase opacity-60">
                {brand.hours}
              </p>
            </div>
          </div>
        </section>

        {/* 2. CRAVING MARQUEE */}
        <Marquee words={cravingWords} tone="red" />

        {/* 3. WHY BREAD PAKODAWALA */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeader
            eyebrow="Why Bread Pakodawala"
            title={
              <>
                Not just a snack.
                <br />
                <span className="text-brand-red">It&rsquo;s a craving.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cravingPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-3xl border-2 border-charcoal/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                  <span className="font-display text-4xl text-brand-yellow-deep">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 display-tight text-3xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. SIGNATURE MENU PREVIEW */}
        <section className="bg-cream-deep py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              eyebrow="The Menu"
              align="center"
              title="What's your craving?"
              sub="Freshly fried through the day at Jalaram Nasta House, Chokhandi."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((item, i) => (
                <FoodCard key={item.id} item={item} delay={i * 90} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="order" size="pillLg">
                <Link to="/menu">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 5. FEATURED BREAD PAKODA */}
        <section className="grain relative overflow-hidden bg-charcoal py-20 text-on-dark md:py-28">
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <Reveal>
              <h2 className="display-tight text-[clamp(2.75rem,9vw,6rem)]">
                The crunch
                <br />
                <span className="text-brand-yellow">you crave.</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed opacity-80">
                Golden on the outside, soft and spiced inside — fried to order and handed over
                still steaming. One is never enough.
              </p>
              <div className="mt-8">
                <Button asChild variant="yellow" size="pillLg">
                  <a href={brand.phoneHref}>Order Now</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <img
                src={assets.pakodaPieces}
                alt="Close-up of crispy golden bread pakoda pieces"
                loading="lazy"
                decoding="async"
                className="mx-auto w-full max-w-[22rem] drop-shadow-2xl md:max-w-[30rem]"
              />
              <Sticker
                src={assets.badgeDelicious}
                alt="Delicious"
                tilt={9}
                className="absolute -top-4 right-2 w-20 md:w-28"
              />
            </Reveal>
          </div>
        </section>


      {/* HOW IT'S MADE */}
      <section className="bg-cream px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="How it's made"
            align="center"
            title={<>Made hot.<br /><span className="text-brand-red">Served crispy.</span></>}
            sub="Nothing sits around. Every pakoda is built, battered and fried the moment it's ordered."
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { t: "Bread", c: "Fresh slices, cut and kept ready through the day." },
              { t: "Stuffing", c: "Spiced potato masala, packed in generously." },
              { t: "Besan Batter", c: "A smooth gram-flour coat, seasoned the Chokhandi way." },
              { t: "Hot Oil", c: "Straight into the kadhai, bubbling and golden." },
              { t: "Golden Crunch", c: "Out hot, on the plate, chutney on the side." },
            ].map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 80}>
                <div className="h-full rounded-3xl border-2 border-charcoal/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                  <span className="font-display text-3xl text-brand-yellow-deep">0{i + 1}</span>
                  <h3 className="mt-2 display-tight text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-75">{s.c}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* HEAR THAT CRUNCH */}
      <section className="grain relative overflow-hidden bg-brand-yellow py-20 text-charcoal md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <Reveal>
            <h2 className="display-tight text-[clamp(2.75rem,9vw,6rem)]">Hear that crunch?</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed opacity-80">
              Crispy outside. Delicious inside. That first bite is the whole reason Vadodara keeps
              coming back to Chokhandi.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <img
              src={assets.pakodaPieces}
              alt="Extreme close-up of crispy golden bread pakoda"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[26rem] drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
        </div>
      </section>
        {/* 6. STORY PREVIEW */}
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <SectionHeader
              eyebrow={`Since ${brand.since}`}
              title="A craving with a story."
              sub={story.intro}
            />
            <Reveal delay={100}>
              <div className="rounded-3xl border-2 border-charcoal/10 bg-brand-yellow p-8 text-charcoal">
                <span className="display-tight block text-[clamp(3.5rem,12vw,6rem)]">
                  Since {brand.since}
                </span>
                <p className="mt-4 text-sm leading-relaxed opacity-80">
                  {story.timeline[1]?.copy}
                </p>
                <div className="mt-7">
                  <Button asChild variant="order" size="pill">
                    <a href="/our-story">Read Our Story</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. VADODARA */}
        <section className="relative overflow-hidden bg-brand-yellow py-20 text-charcoal md:py-24">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <Reveal>
              <h2 className="display-tight text-[clamp(2.75rem,10vw,7rem)]">Born in Vadodara.</h2>
              <p className="mx-auto mt-5 max-w-lg leading-relaxed opacity-80">
                {brand.tagline} — {brand.address}.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <img
              src={assets.skyline}
              alt="Illustrated Vadodara skyline"
              loading="lazy"
              decoding="async"
              className="mt-10 w-full max-w-5xl mx-auto opacity-90"
            />
          </Reveal>
        </section>

        {/* 7b. FIND US */}
        <section className="bg-cream px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[90rem] items-center gap-10 md:grid-cols-2">
            <Reveal>
              <Eyebrow className="text-primary">Find Us</Eyebrow>
              <h2 className="mt-4 display-tight text-[clamp(2.25rem,7vw,4.5rem)]">
                Vadodara first.
                <br />
                <span className="text-brand-red">More cities loading.</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed opacity-80">
                {brand.address}. Open {brand.hours} — fried fresh, never pre-made.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 font-display text-sm tracking-widest uppercase">
                <span className="rounded-full bg-brand-red px-4 py-2 text-on-dark">
                  Vadodara — Open
                </span>
                <span className="rounded-full border border-charcoal/25 px-4 py-2 opacity-70">
                  Surat — Coming Soon
                </span>
                <span className="rounded-full border border-charcoal/25 px-4 py-2 opacity-70">
                  Ahmedabad — Coming Soon
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="order" size="pillLg">
                  <Link to="/locations">See Locations</Link>
                </Button>
                <Button asChild variant="cream" size="pillLg">
                  <a href={brand.mapsUrl} target="_blank" rel="noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120} className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-[22rem] md:max-w-[30rem] lg:max-w-[34rem] md:translate-x-[8%]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/35 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[4%] left-1/2 h-6 w-[55%] -translate-x-1/2 rounded-[50%] bg-charcoal/20 blur-2xl"
                />
                <img
                  src={assets.mascot}
                  alt="Bread Pakodawala mascot holding a plate of hot bread pakoda"
                  loading="lazy"
                  decoding="async"
                  className="relative mx-auto block h-auto w-full object-contain float-slow"
                />
              </div>
            </Reveal>

          </div>
        </section>


        <section className="grain relative overflow-hidden bg-brand-red py-20 text-on-dark md:py-28">
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
            <Reveal>
              <img
                src={assets.pakodaPlate}
                alt="Hot bread pakoda ready to order"
                loading="lazy"
                decoding="async"
                className="mx-auto w-44 drop-shadow-2xl md:w-60"
              />
            </Reveal>
            <Reveal delay={90} className="w-full">
              <h2 className="mt-6 display-tight text-[clamp(2.5rem,9vw,5.5rem)]">
                Still thinking about it?
              </h2>
              <p className="mt-4 text-lg opacity-85">You know you want one.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="cream" size="pillLg">
                  <a href={brand.phoneHref}>Order Now</a>
                </Button>
                <Button asChild variant="outlineDark" size="pillLg">
                  <a href={brand.whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </Reveal>
            <Sticker
              src={assets.badgeYummy}
              alt="Yummy"
              tilt={-12}
              className="pointer-events-none absolute -top-2 right-0 w-20 md:right-6 md:w-28"
            />
          </div>
        </section>
    </main>
  );
}

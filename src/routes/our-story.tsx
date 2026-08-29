import { createFileRoute, Link } from "@tanstack/react-router";
import { assets, brand, story } from "@/lib/brand";
import { SectionHeader, Eyebrow } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Sticker } from "@/components/site/Sticker";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Bread Pakodawala, Vadodara Since 1987" },
      {
        name: "description",
        content:
          "How Jalaram Nasta House brought the bread pakoda to Chokhandi, Vadodara in 1987 — and why the city still queues for it.",
      },
      { property: "og:title", content: "Our Story — Bread Pakodawala" },
      {
        property: "og:description",
        content: "A craving with a story: the Bread Pakodawala journey since 1987.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breadpakodawala.com/our-story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <main>
      <section className="grain relative overflow-hidden bg-cream px-4 pt-32 pb-16 md:px-8 md:pt-44">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow className="text-primary">Since {brand.since}</Eyebrow>
            <h1 className="mt-5 display-tight text-[clamp(2.5rem,8vw,6rem)]">
              A craving
              <br />
              <span className="text-brand-red">with a story.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-80 md:text-lg">
              {story.intro}
            </p>
          </div>
          <Reveal delay={100} className="relative">
            <img
              src={assets.pakodaPlate}
              alt="A plate of hot bread pakoda from Jalaram Nasta House, Chokhandi"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[26rem] drop-shadow-2xl"
            />
            <Sticker
              src={assets.badgeDelicious}
              alt="Delicious"
              tilt={10}
              className="absolute -top-4 right-2 w-20 md:w-28"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="The Timeline" title="How it happened." />
          <ol className="mt-14 space-y-0 border-l-2 border-charcoal/15 pl-6 md:pl-10">
            {story.timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 90} className="relative pb-14 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[calc(1.5rem+7px)] h-3 w-3 rounded-full bg-brand-red md:-left-[calc(2.5rem+7px)]"
                />
                <span className="font-display text-4xl text-brand-yellow-deep md:text-5xl">
                  {t.year}
                </span>
                <h3 className="mt-2 display-tight text-3xl md:text-4xl">{t.title}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed opacity-75">{t.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-yellow py-20 text-charcoal md:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <h2 className="display-tight text-[clamp(2.75rem,10vw,6.5rem)]">Born in Vadodara.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed opacity-80">
            Chokhandi&rsquo;s famous bread pakodawala — a neighbourhood counter that became a city
            habit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="order" size="pillLg">
              <a href={brand.whatsappHref} target="_blank" rel="noreferrer noopener">
                Order Now
              </a>
            </Button>
            <Button asChild variant="cream" size="pillLg">
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>
        <img
          src={assets.skyline}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none mt-12 w-full opacity-90"
        />
      </section>
    </main>
  );
}

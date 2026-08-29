import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { assets, brand, foodImages, menuCategories, menuItems } from "@/lib/brand";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FoodCard } from "@/components/site/FoodCard";
import { Sticker } from "@/components/site/Sticker";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Bread Pakodawala, Chokhandi Vadodara" },
      {
        name: "description",
        content:
          "Pakoda, bhajiya, vadapav, sandwiches, mojitos and shakes at Jalaram Nasta House, Chokhandi, Vadodara. Fried hot to order since 1987.",
      },
      { property: "og:title", content: "Menu — Bread Pakodawala" },
      {
        property: "og:description",
        content: "Crispy, hot bread pakoda and street-food favourites from Chokhandi, Vadodara.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breadpakodawala.com/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState("all");
  const items = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <main>
      <section className="relative overflow-hidden bg-cream px-4 pt-28 pb-8 md:px-8 md:pt-36 md:pb-10">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeader
            eyebrow="The Pakodawala's Menu"
            title={
              <>
                What&apos;s your
                <br />
                <span className="text-primary">craving?</span>
              </>
            }
            sub="Fried to order, hot off the kadhai — from Chokhandi, Vadodara."
          />
          <Sticker
            src={assets.badgeTasty}
            alt="Tasty"
            tilt={10}
            className="absolute top-28 right-4 hidden w-24 sm:block md:top-36 md:right-16 md:w-36"
          />
        </div>
      </section>

      <section className="bg-cream px-4 pb-24 md:px-8" aria-label="Menu items">
        <div className="mx-auto max-w-[90rem]">
          <div
            className="sticky top-[72px] z-30 -mx-4 flex snap-x gap-3 overflow-x-auto bg-cream/95 px-4 py-3 backdrop-blur md:mx-0 md:flex-wrap md:px-0"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "shrink-0 snap-start cursor-pointer rounded-full border-2 px-5 py-2.5 font-display text-sm tracking-widest uppercase transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                  active === c.id
                    ? "border-charcoal bg-charcoal text-on-dark"
                    : "border-charcoal/25 hover:border-charcoal",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div key={active} className="anim-rise mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <FoodCard key={item.id} item={item} delay={Math.min(i, 6) * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Food story */}
      <section className="bg-charcoal px-4 py-20 text-on-dark md:px-8">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="display-tight text-5xl uppercase md:text-7xl">
              Made hot.
              <br />
              <span className="text-brand-yellow">Served crispy.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed opacity-80">
              Nothing sits under a lamp. Every batch goes into the kadhai when you order it, and
              comes out golden — the way Chokhandi has eaten it since {brand.since}.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={foodImages.frying}
              alt="Pakoda frying in hot oil"
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-food"
            />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cream px-4 py-20 text-center md:px-8">
        <h2 className="display-tight mx-auto max-w-3xl text-5xl uppercase md:text-7xl">
          Found your <span className="text-primary">craving?</span>
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="order" size="pillLg">
            <a href={brand.phoneHref}>Order Now</a>
          </Button>
          <Button asChild variant="outline" size="pillLg">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

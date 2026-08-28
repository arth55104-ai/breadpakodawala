import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { assets, brand, locations } from "@/lib/brand";
import { Eyebrow } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Sticker } from "@/components/site/Sticker";
import { CitySelector } from "@/components/site/CitySelector";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Bread Pakodawala, Chokhandi Vadodara" },
      {
        name: "description",
        content:
          "Find Bread Pakodawala at Jalaram Nasta House, Chokhandi, Vadodara. Open everyday 8:00 am – 10:00 pm. Call +91 81281 93143.",
      },
      { property: "og:title", content: "Locations — Bread Pakodawala" },
      {
        property: "og:description",
        content: "Come get your craving at Jalaram Nasta House, Chokhandi, Vadodara.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pakoda-paradise.lovable.app/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <main>
      <section className="grain relative overflow-hidden bg-cream px-4 pt-32 pb-14 md:px-8 md:pt-44">
        <div className="mx-auto max-w-[90rem]">
          <Eyebrow className="text-primary">{brand.city}</Eyebrow>
          <h1 className="mt-5 display-tight text-[clamp(2.5rem,8vw,6rem)]">
            Come get
            <br />
            <span className="text-brand-red">your craving.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed opacity-80">
            One counter, one legendary snack. Walk into Chokhandi or call ahead — it&rsquo;s fried
            to order.
          </p>
          <Sticker
            src={assets.badgeYummy}
            alt="Yummy"
            tilt={-10}
            className="absolute top-32 right-4 w-20 md:top-44 md:right-16 md:w-32"
          />
        </div>
      </section>

      <CitySelector />

      <section className="grain relative overflow-hidden bg-charcoal px-4 py-20 text-on-dark md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="display-tight text-[clamp(2.5rem,7vw,5rem)]">
              More cities.
              <br />
              <span className="text-brand-yellow">More cravings.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed opacity-80">
              We only list counters we actually run. Vadodara is home — Surat and Ahmedabad are
              next on the map.
            </p>
            <ul className="mt-8 space-y-3 font-display tracking-widest uppercase">
              {locations.map((loc) => (
                <li key={loc.name} className="flex items-center gap-3">
                  <MapPin className="size-4 text-brand-yellow" aria-hidden="true" />
                  {loc.name}
                </li>
              ))}
              <li className="flex items-center gap-3 opacity-60">
                <MapPin className="size-4" aria-hidden="true" /> Surat — Coming Soon
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <MapPin className="size-4" aria-hidden="true" /> Ahmedabad — Coming Soon
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={assets.promo}
              alt="Bread Pakodawala brand artwork"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[26rem] drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-red px-4 py-20 text-center text-on-dark md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="display-tight text-[clamp(2.25rem,7vw,4.5rem)]">
            Don&rsquo;t see your city?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Maybe you should bring the craving there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="cream" size="pillLg">
              <Link to="/franchise">Franchise With Us</Link>
            </Button>
            <Button asChild variant="outlineDark" size="pillLg">
              <a href={brand.phoneHref}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

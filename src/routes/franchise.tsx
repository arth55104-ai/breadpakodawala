import { createFileRoute } from "@tanstack/react-router";
import { assets, brand, foodImages, franchiseBenefits, franchiseFaqs, franchiseIntro } from "@/lib/brand";
import { SectionHeader, Eyebrow } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Sticker } from "@/components/site/Sticker";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise — Bring Bread Pakodawala To Your City" },
      {
        name: "description",
        content:
          "Partner with Jalaram Nasta House: an established Vadodara brand since 1987, a proven business model and growth opportunities. Enquire today.",
      },
      { property: "og:title", content: "Franchise — Bread Pakodawala" },
      {
        property: "og:description",
        content: "Bring the craving to your city. Franchise enquiries for Bread Pakodawala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breadpakodawala.com/franchise" }],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  return (
    <main>
      <section className="grain relative overflow-hidden bg-cream px-4 pt-32 pb-16 md:px-8 md:pt-44">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow className="text-primary">Franchise Opportunity</Eyebrow>
            <h1 className="mt-5 display-tight text-[clamp(2.5rem,8vw,6rem)]">
              Bring the craving
              <br />
              <span className="text-brand-red">to your city.</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed opacity-80">{franchiseIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="order" size="pillLg">
                <a href="#enquiry">Become a Franchise Partner</a>
              </Button>
              <Button asChild variant="cream" size="pillLg">
                <a href={brand.phoneHref}>Know More</a>
              </Button>
            </div>
          </div>
          <Reveal delay={100} className="relative">
            <img
              src={assets.promo}
              alt="Bread Pakodawala promotional artwork"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[24rem] drop-shadow-2xl"
            />
            <Sticker
              src={assets.badgeTasty}
              alt="Tasty"
              tilt={-9}
              className="absolute -bottom-3 left-0 w-20 md:w-28"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-20 text-on-dark md:px-8 md:py-28">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeader
            eyebrow="Why Partner"
            title={
              <>
                A brand people
                <br />
                <span className="text-brand-yellow">already crave.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {franchiseBenefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-on-dark/15 p-7 transition-colors duration-300 hover:border-brand-yellow/60">
                  <span className="font-display text-4xl text-brand-yellow">0{i + 1}</span>
                  <h3 className="mt-3 display-tight text-2xl">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">{b.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Your city. Our craving. */}
      <section className="bg-cream px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={foodImages.frying}
              alt="Bread pakoda frying in a hot kadhai"
              loading="lazy"
              decoding="async"
              className="w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow className="text-primary">The Model</Eyebrow>
            <h2 className="mt-4 display-tight text-[clamp(2.25rem,7vw,4.5rem)]">
              Your city.
              <br />
              <span className="text-brand-red">Our craving.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed opacity-80">
              A compact counter, a tight menu and one thing done better than anyone else. Small
              footprint, fast service, high repeat — the same format that has kept Chokhandi queuing
              since 1987.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Compact Format", "Kiosk to small store — low fit-out, quick to open."],
                ["Tight Menu", "Focused, fast, easy to train and consistent."],
                ["Fried To Order", "Nothing pre-made. Crunch is the product."],
                ["Brand Support", "Recipes, training, packaging and marketing kit."],
              ].map(([t, c]) => (
                <li key={t} className="rounded-2xl border border-charcoal/12 bg-white/60 p-5">
                  <h3 className="font-display tracking-wide uppercase">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">{c}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* The craving is moving. */}
      <section className="grain relative overflow-hidden bg-brand-yellow px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[90rem] text-center">
          <Eyebrow className="text-charcoal/70">Expansion</Eyebrow>
          <h2 className="mt-4 display-tight text-[clamp(2.25rem,8vw,5rem)] text-charcoal">
            The craving is moving.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              ["Vadodara", "Available"],
              ["Surat", "Coming Soon"],
              ["Ahmedabad", "Coming Soon"],
              ["More Cities", "Coming Soon"],
            ].map(([city, status], i) => (
              <Reveal key={city} delay={i * 70}>
                <div className="rounded-full bg-charcoal px-6 py-4 text-on-dark">
                  <span className="font-display text-lg tracking-widest uppercase">{city}</span>
                  <span className="ml-3 text-xs tracking-widest uppercase opacity-70">
                    {status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-charcoal/80">
            Territories are limited and allotted city by city. If your city isn&rsquo;t on the map
            yet, it could be yours.
          </p>
        </div>
      </section>



      <section id="enquiry" className="bg-cream px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Enquire" title="Let's talk franchise." />
            <p className="mt-5 max-w-md leading-relaxed opacity-75">
              Investment figures aren&rsquo;t published online. Call us and our team will walk you
              through the current numbers for your city.
            </p>
            <div className="mt-8 space-y-2 font-display tracking-widest uppercase">
              <a href={brand.phoneHref} className="block text-2xl hover:text-primary">
                {brand.phoneDisplay}
              </a>
              <p className="text-sm opacity-60">{brand.hours}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="order" size="pillLg">
                <a href={brand.phoneHref}>Call Now</a>
              </Button>
              <Button asChild variant="cream" size="pillLg">
                <a href={brand.whatsappHref} target="_blank" rel="noreferrer noopener">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <Reveal delay={100}>
            <h2 className="display-tight text-3xl">Questions</h2>
            <Accordion type="single" collapsible className="mt-4">
              {franchiseFaqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display tracking-wide uppercase">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed opacity-80">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

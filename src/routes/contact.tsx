import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { brand } from "@/lib/brand";
import { Eyebrow } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bread Pakodawala, Chokhandi Vadodara" },
      {
        name: "description",
        content:
          "Call +91 81281 93143 or visit Jalaram Nasta House, Chokhandi, Vadodara. Open everyday 8:00 am – 10:00 pm.",
      },
      { property: "og:title", content: "Contact — Bread Pakodawala" },
      {
        property: "og:description",
        content: "Let's talk — phone, address and opening hours for Bread Pakodawala, Vadodara.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breadpakodawala.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="grain bg-cream px-4 pt-32 pb-14 md:px-8 md:pt-44">
        <div className="mx-auto max-w-[90rem]">
          <Eyebrow className="text-primary">Contact</Eyebrow>
          <h1 className="mt-5 display-tight text-[clamp(2.5rem,8vw,6rem)]">
            Let&rsquo;s <span className="text-brand-red">talk.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed opacity-80">
            Orders, directions, franchise or just a craving question — the fastest way to reach us
            is the phone.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 pb-24 md:px-8">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grain h-full rounded-3xl bg-charcoal p-8 text-on-dark md:p-10">
              <h2 className="display-tight text-3xl text-brand-yellow">Come over</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <span className="opacity-85">{brand.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <a href={brand.phoneHref} className="opacity-85 hover:text-brand-yellow">
                    {brand.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <span className="opacity-85">{brand.hours}</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="yellow" size="pill">
                  <a href={brand.phoneHref}>Call Now</a>
                </Button>
                <Button asChild variant="outlineDark" size="pill">
                  <a href={brand.mapsUrl} target="_blank" rel="noreferrer noopener">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border-2 border-charcoal/10 bg-card p-8 md:p-10"
            >
              <h2 className="display-tight text-3xl">Send a message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="order" size="pillLg">
                  Send Message
                </Button>
                <p className="text-xs leading-relaxed opacity-60">
                  This form isn&rsquo;t connected to a mailbox yet — please call or WhatsApp us for
                  a quick reply.
                </p>
              </div>
              {sent ? (
                <p className="mt-5 rounded-2xl bg-brand-yellow/40 p-4 text-sm">
                  Thanks! Nothing was sent — reach us on{" "}
                  <a href={brand.phoneHref} className="font-semibold underline">
                    {brand.phoneDisplay}
                  </a>
                  .
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

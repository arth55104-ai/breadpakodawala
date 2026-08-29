import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { assets, brand, nav } from "@/lib/brand";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="grain bg-charcoal text-on-dark">
      <div className="mx-auto grid max-w-[90rem] gap-9 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12 md:px-8 md:py-16">
        <div>
          <img
            src={assets.logo}
            alt={`${brand.name} — ${brand.legalName}`}
            className="h-16 w-auto rounded-lg bg-cream p-2"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-75">
            {brand.legalName}. {brand.tagline}. Serving {brand.city} since {brand.since}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={brand.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-on-dark/30 transition-colors hover:bg-brand-yellow hover:text-charcoal focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none"
            >
              <Instagram className="size-5" aria-hidden="true" />
            </a>
            <a
              href={brand.socials.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-on-dark/30 transition-colors hover:bg-brand-yellow hover:text-charcoal focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none"
            >
              <Facebook className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-lg tracking-widest text-brand-yellow">Explore</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="font-display text-sm tracking-widest uppercase opacity-80 transition-colors hover:text-brand-yellow hover:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg tracking-widest text-brand-yellow">Come Over</h2>
          <ul className="mt-5 space-y-4 text-sm">
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
          <Button asChild variant="yellow" size="pill" className="mt-6">
            <a href={brand.whatsappHref} target="_blank" rel="noreferrer noopener">
              Order Now
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-on-dark/15 px-4 py-6 text-center text-xs opacity-60 md:px-8">
        © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
      </div>
    </footer>
  );
}

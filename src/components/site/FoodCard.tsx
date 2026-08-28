import { useState } from "react";
import { brand, type MenuItem } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";

export function FoodCard({ item, delay = 0 }: { item: MenuItem; delay?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-charcoal/10 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative aspect-4/3 w-full cursor-pointer overflow-hidden bg-muted"
          aria-label={`View details for ${item.name}`}
        >
          <div
            aria-hidden
            className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {item.featured ? (
            <span className="absolute top-4 left-4 rounded-full bg-brand-red px-3 py-1 font-display text-xs tracking-widest text-primary-foreground uppercase">
              Signature
            </span>
          ) : null}
        </button>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl">{item.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed opacity-75">{item.description}</p>
          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="font-display text-lg tracking-wide">{item.priceLabel}</span>
            <Button asChild variant="order" size="pill">
              <a href={brand.phoneHref}>Order Now</a>
            </Button>
          </div>
          {item.placeholder ? (
            <p className="mt-3 text-xs tracking-wide uppercase opacity-50">
              Awaiting official menu data
            </p>
          ) : null}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg rounded-3xl">
          <div className="overflow-hidden rounded-2xl bg-muted">
            <img src={item.image} alt={item.name} className="mx-auto h-56 w-auto object-contain p-4" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-3xl">{item.name}</DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              {item.description}
            </DialogDescription>
          </DialogHeader>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="opacity-60">Price</dt>
              <dd className="font-display text-lg">{item.priceLabel}</dd>
            </div>
            <div>
              <dt className="opacity-60">Availability</dt>
              <dd className="font-display text-lg">
                {item.available === false ? "Unavailable today" : "Fresh, all day"}
              </dd>
            </div>
          </dl>
          <Button asChild variant="order" size="pillLg" className="w-full">
            <a href={brand.phoneHref}>Call to Order · {brand.phoneDisplay}</a>
          </Button>
        </DialogContent>
      </Dialog>
    </Reveal>
  );
}

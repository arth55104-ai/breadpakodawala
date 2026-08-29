import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { assets, brand, nav } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-[380ms] ease-out",
          scrolled
            ? "border-b border-charcoal/10 bg-cream/90 shadow-lift backdrop-blur-md supports-[backdrop-filter]:bg-cream/75"
            : "border-b border-transparent bg-cream/40 backdrop-blur-[2px]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 transition-all duration-[380ms] ease-out md:px-8",
            scrolled ? "py-2 md:py-2.5" : "py-3.5 md:py-5",
          )}
        >
          <Link to="/" aria-label={`${brand.name} home`} className="shrink-0">
            <img
              src={assets.logo}
              alt={`${brand.name} — ${brand.legalName}, since ${brand.since}`}
              className={cn(
                "w-auto origin-left transition-all duration-[380ms] ease-out",
                scrolled ? "h-12 md:h-[64px]" : "h-14 md:h-[86px]",
              )}
            />
          </Link>

          <nav
            className={cn(
              "hidden items-center transition-all duration-[380ms] ease-out lg:flex",
              scrolled ? "gap-6" : "gap-8",
            )}
            aria-label="Main"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary after:scale-x-100" }}
                className="relative font-display text-sm tracking-widest uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="order"
              size={scrolled ? "pill" : "pillLg"}
              className="hidden transition-all duration-[380ms] sm:inline-flex"
            >
              <a href={brand.whatsappHref} target="_blank" rel="noreferrer noopener">
                <Phone aria-hidden="true" /> Order Now
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-charcoal lg:hidden"
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-charcoal text-on-dark lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-brand-red/15"
            aria-hidden="true"
          />
          <div className="relative flex items-center justify-between px-4 py-4">
            <img src={assets.logo} alt="" className="h-14 w-auto rounded-xl bg-cream p-1.5" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-on-dark/50 text-on-dark transition-colors hover:border-brand-yellow hover:text-brand-yellow focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <nav
            className="relative flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6"
            aria-label="Mobile"
          >
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand-yellow" }}
                style={{ animationDelay: `${80 + i * 55}ms` }}
                className="anim-rise display-tight border-b border-on-dark/12 py-4 text-[2.1rem] leading-none tracking-wide uppercase transition-colors hover:text-brand-yellow focus-visible:text-brand-yellow focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className="anim-rise relative space-y-3 px-6 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            style={{ animationDelay: `${80 + nav.length * 55}ms` }}
          >
            <Button asChild variant="order" size="pillLg" className="w-full">
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
              >
                <Phone aria-hidden="true" /> Order Now
              </a>
            </Button>
            <p className="text-center text-sm opacity-70">{brand.hours}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

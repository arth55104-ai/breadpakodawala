import { cn } from "@/lib/utils";

export function Marquee({
  words,
  className,
  tone = "dark",
}: {
  words: string[];
  className?: string;
  tone?: "dark" | "red" | "yellow";
}) {
  const toneClass =
    tone === "red"
      ? "bg-brand-red text-on-dark"
      : tone === "yellow"
        ? "bg-brand-yellow text-charcoal"
        : "bg-charcoal text-on-dark";

  const row = (
    <span className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="flex items-center gap-8">
          <span
            className={cn(
              "display-tight text-3xl md:text-5xl",
              i % 3 === 1 && "text-stroke-cream",
              i % 3 === 2 && "opacity-80",
            )}
          >
            {w}
          </span>
          <span className="text-xl opacity-60">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={cn("group overflow-hidden border-y-2 border-charcoal/20 py-4", toneClass, className)}
    >
      <div className="marquee-track group-hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
      <span className="sr-only">{words.join(", ")}</span>
    </div>
  );
}

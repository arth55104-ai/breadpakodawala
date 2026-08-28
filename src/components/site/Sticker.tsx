import { cn } from "@/lib/utils";

/**
 * Official Tasty / Delicious / Yummy badges used as editorial stickers.
 * Never distorted — width only, height auto, original proportions kept.
 */
export function Sticker({
  src,
  alt,
  className,
  tilt = -8,
  float = true,
}: {
  src: string;
  alt: string;
  className?: string;
  tilt?: number;
  float?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn("pointer-events-none h-auto select-none", float && "float-slow", className)}
      style={{ ["--tilt" as string]: `${tilt}deg`, transform: float ? undefined : `rotate(${tilt}deg)` }}
    />
  );
}

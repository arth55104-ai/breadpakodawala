import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.28em] uppercase",
        className,
      )}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? <Eyebrow className="text-primary">{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-4 text-[clamp(2.5rem,7vw,5.5rem)] display-tight",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed opacity-80 md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}

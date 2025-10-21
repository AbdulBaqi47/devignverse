import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col gap-4",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
    >
      {eyebrow ? <span className="pill inline-flex px-5 py-1 text-[11px] tracking-[0.5em]">{eyebrow}</span> : null}
      <h2 className="headline text-3xl font-bold text-[var(--foreground)] md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-[var(--muted)] md:text-lg">{description}</p> : null}
    </div>
  );
}

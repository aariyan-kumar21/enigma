import { Pill } from "./Pill";
import { Button } from "./Button";

export interface SectionTitleProps {
  eyebrow?: string;
  headline: {
    plain: string;
    accent: string;
  };
  description?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  align?: "left" | "center" | "between";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  headline,
  description,
  action,
  align = "between",
  theme = "dark",
  className = "",
}: SectionTitleProps) {
  const isLight = theme === "light";
  const textColor = isLight ? "text-[var(--text-primary)]" : "text-white";
  const mutedTextColor = isLight ? "text-[var(--text-muted)]" : "text-[var(--text-muted)]";

  return (
    <div
      className={`w-full flex flex-col gap-4 ${
        align === "between"
          ? "md:flex-row md:items-end md:justify-between"
          : align === "center"
          ? "items-center text-center"
          : "items-start text-left"
      } ${className}`}
    >
      <div className="flex flex-col gap-2 max-w-2xl">
        {eyebrow && (
          <div>
            <Pill variant="violet" size="sm">
              {eyebrow}
            </Pill>
          </div>
        )}
        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${textColor}`}
        >
          <span>{headline.plain} </span>
          <span className="font-accent italic font-normal tracking-normal text-[var(--violet-400)]">
            {headline.accent}
          </span>
        </h2>
        {description && (
          <p className={`text-base sm:text-lg ${mutedTextColor} mt-1 leading-relaxed`}>
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="pt-2 md:pt-0 shrink-0">
          <Button
            variant={isLight ? "dark" : "secondary"}
            size="sm"
            href={action.href}
            onClick={action.onClick}
            showArrow
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
}

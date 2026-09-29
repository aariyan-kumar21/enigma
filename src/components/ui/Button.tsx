import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  icon,
  showArrow = false,
  className = "",
  disabled = false,
}: ButtonProps) {
  const isTodo = href === "TODO";
  const isDisabled = disabled || isTodo;

  if (isTodo && typeof window !== "undefined" && import.meta.env.DEV) {
    console.warn(`[Button] Link destination is set to TODO for label: "${children}"`);
  }

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-950)] group cursor-pointer disabled:pointer-events-none disabled:opacity-40";

  const sizeStyles = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3 font-semibold",
    lg: "text-base px-8 py-4 font-semibold",
  }[size];

  const variantStyles = {
    primary:
      "bg-[var(--yellow-400)] text-[var(--ink-950)] hover:bg-[#FFE14D] active:scale-[0.98] shadow-lg shadow-yellow-400/10",
    secondary:
      "bg-transparent text-white border border-white/30 hover:border-[var(--violet-400)] hover:bg-white/5 active:scale-[0.98]",
    ghost:
      "bg-transparent text-[var(--text-muted)] hover:text-white hover:bg-white/5 active:scale-[0.98]",
    dark:
      "bg-[var(--ink-900)] text-white border border-[var(--line)] hover:border-[var(--violet-400)] hover:bg-[var(--ink-800)] active:scale-[0.98]",
  }[variant];

  const content = (
    <>
      {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href && !isDisabled) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
}

import type { ReactNode } from "react";

export interface PillProps {
  children: ReactNode;
  variant?: "default" | "blue" | "dark" | "outline" | "glass";
  size?: "sm" | "md";
  icon?: ReactNode;
  className?: string;
}

export function Pill({
  children,
  variant = "default",
  size = "sm",
  icon,
  className = "",
}: PillProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full font-mono font-medium uppercase tracking-wider select-none";

  const sizeStyles = {
    sm: "text-[11px] px-3 py-1",
    md: "text-xs px-4 py-1.5",
  }[size];

  const variantStyles = {
    default: "bg-white/10 text-white/90 border border-white/10",
    blue: "bg-[var(--blue-500)]/15 text-[var(--blue-500)] border border-[var(--blue-500)]/30",
    dark: "bg-[var(--ink-900)] text-white/80 border border-white/10",
    outline: "bg-transparent text-white/70 border border-white/20",
    glass: "bg-white/5 backdrop-blur-md text-white/90 border border-white/10",
  }[variant];

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
      {icon && <span className="opacity-80">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

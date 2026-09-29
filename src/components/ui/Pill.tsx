import type { ReactNode } from "react";

export interface PillProps {
  children: ReactNode;
  variant?: "default" | "violet" | "dark" | "outline" | "glass";
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
    violet: "bg-[var(--violet-500)]/15 text-[var(--violet-400)] border border-[var(--violet-500)]/30",
    dark: "bg-[var(--ink-800)] text-[var(--text-muted)] border border-[var(--line)]",
    outline: "bg-transparent text-[var(--text-muted)] border border-[var(--line)]",
    glass: "bg-white/5 backdrop-blur-md text-white/90 border border-[var(--line)]",
  }[variant];

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
      {icon && <span className="opacity-80">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

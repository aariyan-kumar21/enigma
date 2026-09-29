import { useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { site } from "../../content/site";
import type { NavId } from "../../content/types";
import { useLiveClock } from "../../hooks/useLiveClock";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: NavId;
}

export function MobileMenu({ isOpen, onClose, activeId }: MobileMenuProps) {
  const clock = useLiveClock(site.meta.timezone);
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and trap focus
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto focus close button on open
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.25,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.25,
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-b from-[var(--violet-950)] via-[var(--ink-950)] to-[var(--ink-950)] text-white overflow-y-auto"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between w-full border-b border-[var(--line)] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center shadow-md shadow-purple-950/50">
                <img
                  src={site.brand.logoSrc}
                  alt=""
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight">
                  {site.brand.name}
                  {site.brand.suffix && (
                    <sub className="text-xs text-[var(--yellow-400)] ml-0.5 font-mono">
                      {site.brand.suffix}
                    </sub>
                  )}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[var(--text-faint)] uppercase">
                  {site.brand.tag}
                </span>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-3 rounded-full border border-[var(--line)] bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-white focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 my-auto py-8">
            {site.nav.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <motion.div key={item.id} variants={itemVariants}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(`#${item.id}`);
                    }}
                    className={`group flex items-center justify-between text-3xl sm:text-5xl font-display font-bold tracking-tight transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] rounded-lg py-1 px-2 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white hover:translate-x-2"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-mono text-[var(--violet-400)] opacity-70">
                        0{index + 1}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--yellow-400)] shadow-lg shadow-yellow-400/50" />
                    )}
                  </a>
                </motion.div>
              );
            })}
          </nav>

          {/* Footer Meta Strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-xs font-mono text-[var(--text-muted)]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span>
                LAT: {site.meta.lat} · LONG: {site.meta.long}
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="text-[var(--text-faint)]">V_ID: {site.meta.vId}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tabular-nums font-semibold">{clock} IST</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

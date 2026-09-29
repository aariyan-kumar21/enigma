import { useState } from "react";
import { HelpCircle, X, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "../../content/site";

export function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <aside aria-label="Quick Support Help" className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close help popover" : "Open help popover"}
          className="w-13 h-13 rounded-full bg-[var(--violet-600)] text-white flex items-center justify-center shadow-2xl shadow-violet-900/40 hover:bg-[var(--violet-500)] active:scale-95 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] border border-[var(--line)] cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
        </button>
      </aside>

      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-22 right-6 z-40 w-80 rounded-[24px] bg-[var(--ink-900)]/95 backdrop-blur-xl border border-[var(--line)] p-6 shadow-2xl shadow-violet-950/50 text-white select-none"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
              <span className="font-display font-bold text-base tracking-tight text-[var(--text-primary)]">
                ENIGMA Support
              </span>
              <span className="text-[10px] font-mono text-[var(--yellow-400)] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--yellow-400)] animate-pulse" />
                ACTIVE
              </span>
            </div>

            <div className="py-4 space-y-3 font-mono text-xs text-[var(--text-muted)]">
              <a
                href="mailto:enigmaclub5@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[var(--text-primary)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--violet-400)]" />
                <span className="truncate">enigmaclub5@gmail.com</span>
              </a>

              <a
                href="https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[var(--text-primary)] transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
                </svg>
                <span>Join WhatsApp Group</span>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--violet-400)]" />
                <span className="truncate">{site.meta.lat} · {site.meta.long}</span>
              </div>
            </div>

            <p className="text-[10px] font-mono text-[var(--text-faint)] text-center pt-1 uppercase tracking-wider">
              {site.brand.tag} // PROTOCOL.HELP
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

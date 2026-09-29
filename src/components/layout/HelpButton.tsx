import { useState } from "react";
import { HelpCircle, X, Mail, MessageCircle, MapPin } from "lucide-react";
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
          className="w-13 h-13 rounded-full bg-[var(--blue-500)] text-white flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:bg-blue-600 active:scale-95 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/20"
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
            className="fixed bottom-22 right-6 z-40 w-80 rounded-[24px] bg-[var(--ink-900)]/95 backdrop-blur-xl border border-white/15 p-6 shadow-2xl text-white select-none"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-display font-bold text-base tracking-tight">
                ENIGMA Support
              </span>
              <span className="text-[10px] font-mono text-[var(--blue-500)] uppercase tracking-wider">
                ACTIVE
              </span>
            </div>

            <div className="py-4 space-y-3 font-mono text-xs text-white/70">
              <a
                href="mailto:enigmaclub5@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--blue-500)]" />
                <span className="truncate">enigmaclub5@gmail.com</span>
              </a>

              <a
                href="https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Join WhatsApp Group</span>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 text-white/60">
                <MapPin className="w-4 h-4 text-[var(--blue-500)]" />
                <span className="truncate">{site.meta.lat} · {site.meta.long}</span>
              </div>
            </div>

            <p className="text-[10px] font-mono text-white/40 text-center pt-1 uppercase tracking-wider">
              {site.brand.tag} // PROTOCOL.HELP
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

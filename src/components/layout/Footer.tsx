import { ArrowUp } from "lucide-react";
import { site } from "../../content/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "whatsapp":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.86 11.86 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.95.51 3.87 1.47 5.54L.5 23l6.71-2.1A11.9 11.9 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-1.98-.52-3.84-1.48-5.52zM12 20.5c-1.36 0-2.69-.34-3.86-.98l-.28-.16-3.99 1.25 1.3-3.86-.18-.31A8.01 8.01 0 014 11c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-[var(--ink-950)] text-white pt-24 pb-16 px-6 lg:px-10 border-t border-[var(--line)] overflow-hidden select-none">
      {/* Huge Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] font-display font-extrabold text-[22vw] flex items-center justify-center select-none overflow-hidden leading-none tracking-tighter text-white"
      >
        {site.brand.name}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Column 1: Brand & Socials (Cols 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-purple-950/60 border border-[var(--line)]">
                <img
                  src={site.brand.logoSrc}
                  alt=""
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
              </div>
              <span className="font-display font-bold text-3xl tracking-tight text-white flex items-baseline">
                {site.brand.name}.
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-faint)] leading-relaxed max-w-sm">
              {site.footer.tagline}
            </p>

            {/* Social Buttons Row */}
            <div className="flex items-center gap-2 pt-2">
              {site.secure.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-[var(--ink-900)] border border-[var(--line)] flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--violet-600)] hover:text-white hover:border-[var(--violet-600)] transition-all duration-300 hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)]"
                >
                  {renderSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Tree (Cols 6-8) */}
          <div className="md:col-span-3 space-y-6">
            <span className="text-[10px] font-mono text-[var(--violet-400)] tracking-widest uppercase font-semibold block">
              Navigation_Tree
            </span>

            <ul className="space-y-3.5">
              {site.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display font-bold text-lg text-white/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 uppercase tracking-tight"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Communication Log (Cols 9-12) */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[10px] font-mono text-[var(--violet-400)] tracking-widest uppercase font-semibold block">
              Communication_Log
            </span>

            <ul className="space-y-5 font-mono text-xs uppercase text-[var(--text-muted)]">
              <li className="flex flex-col gap-1">
                <span className="text-[var(--text-faint)] text-[10px] tracking-widest">LOCATION</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=12.638143296188357,77.44063386876661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[var(--violet-400)] transition-colors"
                >
                  JCVR+27P, Karnataka 562112
                </a>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-[var(--text-faint)] text-[10px] tracking-widest">UPLINK_EMAIL</span>
                <a
                  href="mailto:enigmaclub5@gmail.com"
                  className="text-white/80 hover:text-[var(--violet-400)] transition-colors"
                >
                  enigmaclub5@gmail.com
                </a>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-[var(--text-faint)] text-[10px] tracking-widest">COMMS_LINE</span>
                <a
                  href="tel:+919696724664"
                  className="text-white/80 hover:text-[var(--violet-400)] transition-colors"
                >
                  +91 96967 24664
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[11px] tracking-widest text-[var(--text-faint)] uppercase text-center sm:text-left">
            {site.footer.copyright}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="w-12 h-12 rounded-full bg-[var(--ink-900)] border border-[var(--line)] hover:bg-[var(--violet-600)] hover:border-[var(--violet-600)] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] shadow-lg cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

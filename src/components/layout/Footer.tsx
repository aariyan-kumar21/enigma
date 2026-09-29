import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "../../content/site";

export function Footer() {
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
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer id="secure" className="relative bg-[var(--ink-950)] text-white pt-20 pb-12 px-6 lg:px-12 border-t border-[var(--line)] select-none">
      <div className="max-w-[1380px] mx-auto w-full">
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 pb-16">
          {/* Column 1: Brand & Tagline & Socials */}
          <div className="md:col-span-5 md:pr-10 lg:pr-14 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={site.brand.logoSrc}
                  alt=""
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>
              <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white">
                ENIGMA
              </span>
            </div>

            <p className="font-mono text-xs sm:text-[13px] text-zinc-400 uppercase tracking-wide leading-relaxed max-w-sm">
              STUDENT-LED COLLECTIVE DEDICATED TO TECHNICAL REBELLION AND INNOVATIVE DEPLOYMENT.
            </p>

            {/* Social Buttons Row (tightly aligned under paragraph) */}
            <div className="flex items-center gap-3 pt-1">
              {site.secure.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[var(--violet-500)] hover:bg-[var(--violet-600)] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)]"
                >
                  {renderSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 md:px-8 lg:px-12 md:border-l border-white/10 space-y-6">
            <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase font-semibold block">
              NAVIGATION
            </span>

            <ul className="space-y-4">
              {site.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans font-bold text-sm tracking-wide text-zinc-400 hover:text-white inline-flex items-center gap-2 transition-colors uppercase"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4 md:pl-8 lg:pl-12 md:border-l border-white/10 space-y-6">
            <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase font-semibold block">
              CONTACT
            </span>

            <ul className="space-y-5 font-mono text-xs sm:text-[13px] text-zinc-300">
              <li>
                <a
                  href="mailto:enigmaclub5@gmail.com"
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-[var(--violet-400)] shrink-0" />
                  <span>enigmaclub5@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919696724664"
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-zinc-400 group-hover:text-[var(--violet-400)] shrink-0" />
                  <span>+91 96967 24664</span>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/ayCMZQEgqs1VRjXn9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 text-zinc-300 hover:text-white transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-[var(--violet-400)] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5 leading-snug">
                    <span>JAIN (Deemed-to-be-University)</span>
                    <span className="text-zinc-400">Faculty of Engineering and Technology (FET)</span>
                    <span className="text-zinc-400">Bengaluru - Kanakapura Rd, Bengaluru, Karnataka 562112</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400 uppercase tracking-widest">
          <div className="text-center sm:text-left w-full">
            © 2026 ENIGMA &nbsp;|&nbsp; ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}

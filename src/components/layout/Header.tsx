import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "../../content/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = site.nav.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, "home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 sm:px-10 lg:px-16 ${
          isScrolled ? "py-3.5 bg-[#07070A]/85 backdrop-blur-md border-b border-white/5" : "py-5 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Left: Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            aria-label="ENIGMA Home"
            className="flex items-center gap-2.5 group outline-none"
          >
            <div className="w-7 h-7 rounded-md overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={site.brand.logoSrc}
                alt=""
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>
            <span className="font-display font-bold text-base tracking-wider text-white">
              {site.brand.name}
            </span>
          </a>

          {/* Center: Nav Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium"
          >
            {site.nav.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative py-1 text-xs sm:text-[13px] font-mono uppercase tracking-wider transition-colors duration-200 outline-none ${
                    isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9B6DFF] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-white/20 hover:border-[#9B6DFF] hover:text-[#9B6DFF] bg-transparent text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95"
            >
              <span>JOIN COMMUNITY</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Right: Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open Navigation Menu"
              className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-xs font-mono font-medium text-white"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeId={activeSection}
      />
    </>
  );
}

import { useState, useEffect } from "react";
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
      setIsScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-10 ${
          isScrolled ? "pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <div
          className={`max-w-[1440px] mx-auto transition-all duration-500 ease-in-out flex items-center justify-between ${
            isScrolled
              ? "bg-[var(--ink-950)]/75 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-5 sm:px-6 py-2.5"
              : "bg-transparent border border-transparent px-2 py-2"
          }`}
        >
          {/* Left: Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            aria-label={`${site.brand.name} Home`}
            className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-500)] rounded-full px-2 py-1"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--blue-500)] transition-transform group-hover:scale-105">
              <img
                src={site.brand.logoSrc}
                alt=""
                className="w-7 h-7 filter brightness-200"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white flex items-baseline">
                {site.brand.name}
                {site.brand.suffix && (
                  <sub className="text-xs text-[var(--blue-500)] font-mono ml-0.5">
                    {site.brand.suffix}
                  </sub>
                )}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase leading-none">
                {site.brand.tag}
              </span>
            </div>
          </a>

          {/* Right: Nav Links (Desktop lg+) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium"
          >
            {site.nav.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex items-center gap-1.5 py-1.5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-500)] rounded-md font-mono text-[13px] tracking-wide ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[var(--blue-500)] shadow-sm shadow-blue-500"
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Right: Menu Button (< lg) */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open Navigation Menu"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-xs font-mono font-medium uppercase tracking-wider text-white outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-500)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-500)]" />
              <span>Menu</span>
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

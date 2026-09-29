import { useEffect } from "react";
import Lenis from "lenis";
import { site } from "./content/site";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { SectionTitle } from "./components/ui/SectionTitle";
import { Button } from "./components/ui/Button";
import { Reveal } from "./components/ui/Reveal";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--ink-950)] text-white selection:bg-[var(--blue-500)] selection:text-white">
      {/* Global Header */}
      <Header />

      {/* 1. HOME.EXE (Hero Section) */}
      <Hero />

      {/* 2. ABOUT.LOG (About Section) */}
      <About />

      {/* 3. MISSIONS.ARC (Dark / Ink-950) */}
      <section
        id={site.nav[2].id}
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 bg-[var(--ink-950)] text-white border-b border-white/10 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto w-full space-y-12">
          <Reveal>
            <SectionTitle
              eyebrow="SECTOR.MISSIONS"
              headline={site.missions.headline}
              description="Review archived operations, projects, and technical initiatives."
              theme="dark"
              action={{ label: "VIEW ALL", href: `#${site.nav[2].id}` }}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="p-8 rounded-[var(--radius-card)] bg-[var(--ink-900)] border border-white/10 flex flex-col gap-4">
              <span className="font-mono text-xs text-[var(--text-muted-dark)] uppercase tracking-wider">
                [Token Check: --ink-950 &amp; --ink-900]
              </span>
              <p className="text-[var(--text-muted-dark)]">
                Missions data status: {site.missions.items.length === 0 ? "Empty (Phase 0 Placeholder)" : `${site.missions.items.length} items`}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. OPERATIVES.LST (Light / Mist) */}
      <section
        id={site.nav[3].id}
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 bg-[var(--mist)] text-[var(--ink-950)] border-b border-black/5 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto w-full space-y-12">
          <Reveal>
            <SectionTitle
              eyebrow="SECTOR.ROSTER"
              headline={site.operatives.headline}
              description="Student innovators, core developers, and leads powering ENIGMA."
              theme="light"
              action={{ label: "ROSTER LOG", href: `#${site.nav[3].id}` }}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="p-8 rounded-[var(--radius-card)] bg-[var(--paper)] border border-black/5 flex flex-col gap-4">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                [Token Check: --mist background with --paper card]
              </span>
              <p className="text-neutral-600">
                Operatives roster status: {site.operatives.items.length === 0 ? "Empty (Phase 0 Placeholder)" : `${site.operatives.items.length} items`}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECURE.CON (Dark / Ink-900) */}
      <section
        id={site.nav[4].id}
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 bg-[var(--ink-900)] text-white scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto w-full space-y-12">
          <Reveal>
            <SectionTitle
              eyebrow="SECTOR.COMMUNICATIONS"
              headline={site.secure.headline}
              description="Direct channels, frequency links, and secure transmissions."
              theme="dark"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="p-8 rounded-[var(--radius-card)] bg-[var(--ink-950)] border border-white/10 flex flex-col gap-6">
              <span className="font-mono text-xs text-[var(--text-muted-dark)] uppercase tracking-wider">
                [Token Check: --ink-900 section with --ink-950 card]
              </span>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="#home" showArrow>
                  BACK TO TOP
                </Button>
                <Button variant="secondary" href="TODO">
                  JOIN DISCORD
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Events } from "./components/sections/Events";
import { Operatives } from "./components/sections/Operatives";
import { Footer } from "./components/layout/Footer";

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
    <div className="min-h-screen bg-[var(--ink-950)] text-white selection:bg-[var(--violet-500)] selection:text-white relative">
      {/* Global Fixed Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* 1. HOME (Hero Section) */}
        <Hero />

        {/* 2. ABOUT (About Section) */}
        <About />

        {/* 3. EVENTS (Events Section) */}
        <Events />

        {/* 4. OPERATIVES (Operatives Section) */}
        <Operatives />
      </main>

      {/* Global Footer with Contact & Navigation */}
      <Footer />
    </div>
  );
}


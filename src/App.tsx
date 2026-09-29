import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Events } from "./components/sections/Events";
import { Operatives } from "./components/sections/Operatives";
import { SecureCon } from "./components/sections/SecureCon";
import { Footer } from "./components/layout/Footer";
import { HelpButton } from "./components/layout/HelpButton";

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
        {/* 1. HOME.EXE (Hero Section) */}
        <Hero />

        {/* 2. ABOUT.LOG (About Section) */}
        <About />

        {/* 3. EVENTS.ARC (Events Carousel Section) */}
        <Events />

        {/* 4. OPERATIVES.LST (Operatives Section) */}
        <Operatives />

        {/* 5. SECURE.CON (Secure Uplink / Contact Section) */}
        <SecureCon />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Support Help Action */}
      <HelpButton />
    </div>
  );
}

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "../../content/site";
import { GrainOverlay } from "../ui/GrainOverlay";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const headlineVariant: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.8,
        delay: shouldReduceMotion ? 0 : custom * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.65,
        delay: shouldReduceMotion ? 0 : custom * 0.1 + 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id={site.nav[0].id}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#07070A] text-[#F5F5F5] pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 px-6 sm:px-10 lg:px-16 select-none"
    >
      {/* ----------------- SUBTLE AMBIENT BACKGROUND LIGHTING ----------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Top-Right Ambient Purple Radial Glow */}
        <div className="absolute -top-[10%] -right-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-[radial-gradient(circle,rgba(155,109,255,0.18)_0%,transparent_70%)] blur-2xl" />

        {/* Bottom-Left Ambient Purple Radial Glow */}
        <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(155,109,255,0.15)_0%,transparent_70%)] blur-2xl" />

        {/* 64px Faint Grid */}
        <div
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]"
          style={{
            backgroundSize: "64px 64px",
            backgroundImage:
              "linear-gradient(to right, rgba(155, 109, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(155, 109, 255, 0.04) 1px, transparent 1px)",
          }}
        />
      </div>

      {/* Grain noise overlay */}
      <GrainOverlay opacity={0.06} />

      {/* ----------------- MAIN HERO CONTENT (TWO COLUMNS) ----------------- */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center my-auto pt-4 lg:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Eyebrow + Massive Headline + Paragraph + CTAs (Cols 1-7, ~58%) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-zinc-500 shrink-0" />
              <span className="font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                {site.hero.eyebrow}
              </span>
            </motion.div>

            {/* Massive Editorial Headline */}
            <h1 className="font-display font-extrabold tracking-tight text-white flex flex-col leading-[0.88] select-none">
              <span className="overflow-hidden block py-1">
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={headlineVariant}
                  className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] xl:text-[7.8rem] font-extrabold text-white tracking-[-0.03em] uppercase"
                >
                  {site.hero.headline.plain}
                </motion.span>
              </span>
              <span className="overflow-hidden block py-1 -mt-1 sm:-mt-2 lg:-mt-3">
                <motion.span
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={headlineVariant}
                  className="block font-accent italic font-normal tracking-normal text-[#9B6DFF] text-5xl sm:text-7xl md:text-8xl lg:text-[6.6rem] xl:text-[8.3rem]"
                >
                  {site.hero.headline.accent}
                </motion.span>
              </span>
            </h1>

            {/* Paragraph Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="text-base sm:text-lg lg:text-[19px] text-[#A1A1AA] font-normal leading-relaxed max-w-[580px] font-sans"
            >
              A student-led collective building, experimenting, and deploying
              ideas that challenge the ordinary and create{" "}
              <span className="text-[#9B6DFF] font-medium">
                real-world impact.
              </span>
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Button */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#9B6DFF] hover:bg-[#8B5CF6] text-white text-sm sm:text-base font-medium transition-all duration-300 shadow-[0_0_20px_rgba(155,109,255,0.35)] hover:shadow-[0_0_25px_rgba(155,109,255,0.5)] active:scale-95"
              >
                <span>Explore Enigma</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Button */}
              <a
                href="https://chat.whatsapp.com/KUe221OJGsd63Hs5grwUMS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 hover:border-[#9B6DFF] hover:text-[#9B6DFF] bg-transparent text-white text-sm sm:text-base font-medium transition-all duration-300 active:scale-95"
              >
                <span>Join the Collective</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Typographic Mission Block + Stats (Cols 8-12, ~42%) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-6">
            {/* Philosophy & Mission Stack */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="space-y-4"
            >
              <div className="font-mono text-base sm:text-lg lg:text-xl font-bold tracking-wider text-zinc-300 space-y-1.5 select-none">
                <div>[ IDEAS ]</div>
                <div>[ PEOPLE ]</div>
                <div>[ SYSTEMS ]</div>
                <div className="text-[#9B6DFF]">[ REAL IMPACT ]</div>
              </div>

              <p className="text-sm sm:text-[15px] text-[#96969F] leading-relaxed max-w-md pt-2 font-sans font-normal">
                We bring together curious minds, fearless builders, and creative
                problem-solvers to learn, build, and break new ground in
                technology.
              </p>
            </motion.div>

            {/* Three Stats */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex items-center gap-6 sm:gap-8 pt-2"
            >
              {/* Stat 1 */}
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                  20+
                </div>
                <div className="font-mono text-[11px] text-zinc-400 tracking-wider uppercase mt-1">
                  MEMBERS
                </div>
              </div>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="w-[1px] h-9 bg-white/10 shrink-0"
              />

              {/* Stat 2 */}
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                  5+
                </div>
                <div className="font-mono text-[11px] text-zinc-400 tracking-wider uppercase mt-1">
                  INITIATIVES
                </div>
              </div>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="w-[1px] h-9 bg-white/10 shrink-0"
              />

              {/* Stat 3 */}
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                  ∞
                </div>
                <div className="font-mono text-[11px] text-zinc-400 tracking-wider uppercase mt-1">
                  POSSIBILITIES
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { site } from "../../content/site";
import { Button } from "../ui/Button";
import { GrainOverlay } from "../ui/GrainOverlay";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const watermarkY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "25%"]
  );

  const headlineVariant: Variants = {
    hidden: { y: "115%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.85,
        delay: shouldReduceMotion ? 0 : custom * 0.15,
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
        duration: shouldReduceMotion ? 0.1 : 0.7,
        delay: shouldReduceMotion ? 0 : custom * 0.12 + 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id={site.nav[0].id}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0A0B3D] via-[#12236E] to-[#FFFFFF] text-white pt-28 sm:pt-36 lg:pt-40 pb-28 sm:pb-36 lg:pb-48 px-6 sm:px-10 lg:px-16 select-none"
    >
      {/* Grain noise overlay */}
      <GrainOverlay opacity={0.06} />

      {/* Parallax Background Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 z-0 flex items-center justify-center select-none overflow-hidden"
      >
        <span className="font-display font-extrabold text-[20vw] tracking-tighter uppercase text-white/[0.035] leading-none whitespace-nowrap">
          {site.brand.name}
        </span>
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Eyebrow + Huge Editorial Headline (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-white/40" />
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                {site.hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[8rem] font-bold leading-[0.92] tracking-tight text-white flex flex-col">
              <span className="overflow-hidden block py-1">
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={headlineVariant}
                  className="block"
                >
                  {site.hero.headline.plain}
                </motion.span>
              </span>
              <span className="overflow-hidden block py-1">
                <motion.span
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={headlineVariant}
                  className="block font-accent italic font-normal tracking-normal text-white"
                >
                  {site.hero.headline.accent}
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Right: Lead Paragraph + Dual CTA Buttons (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pt-8 xl:pt-10">
            {/* Paragraph */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="text-base sm:text-lg lg:text-xl text-white/85 font-normal leading-relaxed max-w-xl"
            >
              {site.hero.paragraph}
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href={site.hero.primaryCta.href}
                showArrow
                className="w-full sm:w-auto min-h-[48px]"
              >
                {site.hero.primaryCta.label}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={site.hero.secondaryCta.href}
                className="w-full sm:w-auto min-h-[48px]"
              >
                {site.hero.secondaryCta.label}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Caption */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full pt-8 border-t border-white/10">
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono uppercase tracking-wider text-white/60"
        >
          <div className="flex items-center gap-4">
            <span className="text-white/80 font-medium">V_ID: {site.meta.vId}</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span>
              LAT: {site.meta.lat} · LONG: {site.meta.long}
            </span>
          </div>

          <div className="text-[11px] text-white/40 tracking-widest hidden md:block">
            [SYSTEM: ACTIVE // SECTOR.ALPHA]
          </div>
        </motion.div>
      </div>
    </section>
  );
}

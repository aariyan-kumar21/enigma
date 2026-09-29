import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { site } from "../../content/site";
import { Button } from "../ui/Button";
import { GrainOverlay } from "../ui/GrainOverlay";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const headlineVariant: Variants = {
    hidden: { y: "115%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.85,
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
        duration: shouldReduceMotion ? 0.05 : 0.7,
        delay: shouldReduceMotion ? 0 : custom * 0.12 + 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id={site.nav[0].id}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[var(--ink-950)] text-white pt-28 sm:pt-36 lg:pt-36 pb-20 sm:pb-28 lg:pb-32 px-6 sm:px-10 lg:px-16 select-none"
    >
      {/* ----------------- TECHNICAL BACKGROUND LAYER ----------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Violet Haze concentrated along 54% width band */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_80%_at_54%_45%,rgba(91,33,182,0.22),transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_25%_60%_at_54%_45%,rgba(20,9,46,0.6),transparent_80%)]" />

        {/* 64px Faint Technical Grid with Radial Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 1.2, delay: 0.3 }}
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,#000_65%,transparent_100%)]"
          style={{
            backgroundSize: "64px 64px",
            backgroundImage:
              "linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)",
          }}
        />

        {/* Main Bright Vertical Hairline at 54% width with drawing animation and subtle glow pulse */}
        <motion.div
          initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.05 : 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute inset-y-0 left-[54%] w-[1px] bg-[var(--violet-400)]/70 shadow-[0_0_12px_rgba(139,92,246,0.6)] z-0"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.5, 0.95, 0.5],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-[var(--violet-300)] shadow-[0_0_16px_var(--violet-500)]"
          />
        </motion.div>

        {/* Secondary Vertical Hairlines (Desktop) */}
        <div className="hidden lg:block absolute inset-y-0 left-[4%] w-[1px] bg-[var(--violet-500)]/18 z-0" />
        <div className="hidden lg:block absolute inset-y-0 left-[61%] w-[1px] bg-[var(--violet-500)]/18 z-0" />
        <div className="hidden lg:block absolute inset-y-0 left-[82%] w-[1px] bg-[var(--violet-500)]/18 z-0" />

        {/* Secondary Horizontal Hairlines (Desktop) */}
        <div className="hidden lg:block absolute inset-x-0 top-[47%] h-[1px] bg-[var(--violet-500)]/18 z-0" />
        <div className="hidden lg:block absolute inset-x-0 top-[80%] h-[1px] bg-[var(--violet-500)]/18 z-0" />
        <div className="hidden lg:block absolute inset-x-0 top-[96%] h-[1px] bg-[var(--violet-500)]/18 z-0" />

        {/* Crosshair "+" Marks at line intersections */}
        <div className="absolute top-[47%] left-[54%] -translate-x-1/2 -translate-y-1/2 text-[var(--violet-400)]/60 text-2xl font-light select-none z-0">
          +
        </div>
        <div className="hidden lg:block absolute top-[80%] left-[82%] -translate-x-1/2 -translate-y-1/2 text-[var(--violet-400)]/60 text-2xl font-light select-none z-0">
          +
        </div>
        <div className="hidden lg:block absolute top-[80%] left-[4%] -translate-x-1/2 -translate-y-1/2 text-[var(--violet-400)]/60 text-2xl font-light select-none z-0">
          +
        </div>
        <div className="hidden lg:block absolute top-[12%] left-[54%] -translate-x-1/2 -translate-y-1/2 text-[var(--violet-400)]/60 text-2xl font-light select-none z-0">
          +
        </div>

        {/* Tiny Marker Dots on intersecting lines */}
        <span className="hidden lg:block absolute top-[47%] left-[4%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--violet-300)] shadow-[0_0_6px_var(--violet-500)]" />
        <span className="hidden lg:block absolute top-[80%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--violet-300)] shadow-[0_0_6px_var(--violet-500)]" />
        <span className="hidden lg:block absolute top-[80%] left-[61%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--violet-300)] shadow-[0_0_6px_var(--violet-500)]" />

        {/* Large Partial Circle Arc in Bottom-Left Corner (Desktop) */}
        <div className="hidden lg:block absolute -bottom-[120px] -left-[140px] w-[420px] h-[420px] rounded-full border border-[var(--violet-500)]/45 z-0">
          {/* Arc tangent dot markers */}
          <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--violet-300)] shadow-[0_0_8px_var(--violet-500)]" />
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--violet-300)] shadow-[0_0_8px_var(--violet-500)]" />
        </div>

        {/* Giant Outlined ENIGMA Watermark across upper-middle */}
        <div className="absolute inset-x-0 top-[12%] lg:top-[8%] z-0 flex items-center justify-center select-none overflow-hidden opacity-20 lg:opacity-22 pointer-events-none">
          <span
            className="font-accent italic font-normal text-[28vw] lg:text-[24vw] text-transparent leading-none tracking-tighter whitespace-nowrap block"
            style={{
              WebkitTextStroke: "1.5px var(--violet-500)",
            }}
          >
            {site.brand.name}
          </span>
        </div>

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--ink-950)] to-transparent z-0" />
      </div>

      {/* Grain noise overlay */}
      <GrainOverlay opacity={0.07} />

      {/* ----------------- MAIN HERO CONTENT ----------------- */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-center my-auto pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Left Column: Eyebrow + Massive Headline (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* Eyebrow: 80px Violet Line + TECHNICAL REBELLION */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex items-center gap-4"
            >
              <span className="w-16 sm:w-20 h-[1px] bg-[var(--violet-500)] shrink-0" />
              <span className="font-mono text-xs sm:text-[14px] lg:text-[15px] font-semibold uppercase tracking-[0.45em] sm:tracking-[0.5em] text-white/90">
                {site.hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline (h1) */}
            <h1 className="font-display font-extrabold tracking-tighter text-white flex flex-col leading-[0.85] select-none">
              <span className="overflow-hidden block py-1">
                <motion.span
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={headlineVariant}
                  className="block text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[9.5rem] font-extrabold text-white tracking-[-0.04em]"
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
                  className="block font-accent italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[var(--violet-500)] via-[var(--violet-400)] to-[var(--violet-400)] text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[10rem]"
                  style={{
                    WebkitTextStroke: "1px var(--violet-500)",
                  }}
                >
                  {site.hero.headline.accent}
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Right Column: Paragraph + Dual CTA Buttons (Cols 8-12, aligned near UNKNOWN) */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-8 pb-2 lg:pb-3 lg:pl-4">
            {/* Paragraph with 2px Violet Left Accent Rule */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="pl-6 border-l-2 border-[var(--violet-500)] text-base sm:text-lg lg:text-[22px] text-white/80 font-normal leading-relaxed max-w-[520px] font-sans"
            >
              {site.hero.paragraph}
            </motion.p>

            {/* Buttons: Flat Yellow Primary + Outlined Secondary */}
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

      {/* ----------------- BOTTOM METADATA DETAILS ----------------- */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full pt-10 sm:pt-14">
        {/* Desktop Layout: Bottom-Left short line & Bottom-Right stacked meta */}
        <div className="hidden lg:flex items-end justify-between w-full">
          {/* Bottom-Left: 40px subtle white line */}
          <div className="w-10 h-[1px] bg-white/40" />

          {/* Bottom-Right: Stacked Metadata + short line */}
          <div className="flex flex-col items-end space-y-2">
            <div className="font-mono text-xs text-white/65 uppercase tracking-widest space-y-1 text-right">
              <div>LAT: {site.meta.lat}</div>
              <div>LONG: {site.meta.long}</div>
              <div>V_ID: {site.meta.vId}</div>
            </div>
            <div className="w-8 h-[1px] bg-[var(--violet-400)]" />
          </div>
        </div>

        {/* Mobile Layout: Compact bottom metadata */}
        <div className="lg:hidden flex items-center justify-between text-[11px] font-mono text-white/50 border-t border-white/10 pt-4">
          <span>{site.meta.lat} · {site.meta.long}</span>
          <span>V_ID: {site.meta.vId}</span>
        </div>
      </div>
    </section>
  );
}

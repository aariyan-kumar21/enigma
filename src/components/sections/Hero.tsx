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
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[var(--ink-950)] text-white pt-28 sm:pt-36 lg:pt-40 pb-28 sm:pb-36 lg:pb-48 px-6 sm:px-10 lg:px-16 select-none"
    >
      {/* Background Soft Purple Glows (diagonal layered radial gradients) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top-Right Violet Glow */}
        <div className="absolute -top-[15%] right-[-5%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full bg-[radial-gradient(circle,rgba(91,33,182,0.35)_0%,rgba(139,92,246,0.18)_40%,transparent_70%)] blur-[90px] sm:blur-[130px]" />
        {/* Mid-Left / Center Violet Glow */}
        <div className="absolute top-[28%] -left-[15%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,rgba(196,181,253,0.10)_45%,transparent_70%)] blur-[100px] sm:blur-[140px]" />
        {/* Subtle Ambient Violet-950 layer */}
        <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,9,46,0.7),transparent)]" />
        {/* Bottom edge fade to --ink-950 */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[var(--ink-950)] to-transparent" />
      </div>

      {/* Grain noise overlay */}
      <GrainOverlay opacity={0.05} />

      {/* Parallax Background Watermark */}
      <motion.div
        style={{ y: watermarkY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 z-0 flex items-center justify-center select-none overflow-hidden"
      >
        <span className="font-display font-extrabold text-[20vw] tracking-tighter uppercase text-white/[0.03] leading-none whitespace-nowrap">
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
              <span className="w-8 h-[1px] bg-[var(--yellow-400)]" />
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
                  className="block font-accent italic font-normal tracking-normal text-[var(--violet-400)]"
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
              className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] font-normal leading-relaxed max-w-xl"
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
    </section>
  );
}

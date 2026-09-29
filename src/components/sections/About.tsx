import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "../../content/site";
import { Reveal } from "../ui/Reveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );

  const { headline, lead, manifesto, pillars } = site.about;

  // Split manifesto safely at the first colon for display only
  const colonIndex = manifesto.indexOf(":");
  const manifestoLabel = colonIndex !== -1 ? manifesto.slice(0, colonIndex).trim() : "[SYSTEM_MANIFESTO]";
  const manifestoText = colonIndex !== -1 ? manifesto.slice(colonIndex + 1).trim() : manifesto;

  return (
    <section
      id={site.nav[1].id}
      className="relative z-10 bg-[var(--ink-950)] text-white rounded-t-[40px] md:rounded-t-[56px] -mt-14 md:-mt-20 pt-8 sm:pt-10 md:pt-12 pb-24 md:pb-32 px-6 lg:px-10 scroll-mt-20 overflow-hidden shadow-2xl border-t border-[var(--line)]"
    >
      {/* 64px Faint Violet Grid with Radial Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-100 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)",
        }}
      />

      {/* Huge Outlined ENIGMA Watermark at bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 sm:-bottom-12 -left-6 z-0 select-none overflow-hidden"
      >
        <span
          className="font-accent italic font-normal text-[22vw] sm:text-[18vw] lg:text-[16vw] text-transparent leading-none tracking-tighter whitespace-nowrap opacity-25 block"
          style={{
            WebkitTextStroke: "1.5px var(--violet-500)",
          }}
        >
          {site.brand.name}
        </span>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-start">
          {/* Left Column: Giant Heading, Lead & Manifesto (Cols 1-6, Sticky on LG) */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 space-y-8 sm:space-y-10">
            {/* Giant Heading */}
            <Reveal delay={0.08}>
              <h2 className="font-display font-bold tracking-tight text-white leading-[0.88] flex flex-col select-none">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[8.5rem] block font-bold">
                  {headline.plain}
                </span>
                <span
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[8.5rem] font-accent italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[var(--violet-500)] via-[var(--violet-400)] to-[var(--violet-300)] block mt-1"
                  style={{
                    WebkitTextStroke: "1px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  {headline.accent}
                </span>
              </h2>
            </Reveal>

            {/* Lead & Manifesto with vertical accent rules & crosshair */}
            <div className="space-y-8 pt-2 relative">
              {/* Decorative Crosshair Mark (Desktop) */}
              <div
                aria-hidden="true"
                className="hidden lg:flex absolute right-0 top-3 text-[var(--violet-500)]/60 text-2xl font-light select-none pointer-events-none items-center justify-center w-6 h-6"
              >
                +
              </div>

              {/* Lead Paragraph */}
              <Reveal delay={0.16}>
                <p className="pl-6 border-l-[3px] border-[var(--violet-500)] text-xl sm:text-2xl lg:text-[26px] font-medium leading-snug text-white max-w-lg">
                  {lead}
                </p>
              </Reveal>

              {/* Manifesto Paragraph */}
              <Reveal delay={0.24}>
                <div className="pl-6 border-l-[3px] border-[var(--violet-500)]/40 space-y-2 max-w-lg">
                  <div className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--violet-400)]">
                    {manifestoLabel}
                  </div>
                  <p className="text-[16px] sm:text-[17px] leading-relaxed text-[var(--text-muted)] font-sans">
                    {manifestoText}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Vertical Timeline of Pillars (Cols 7-12) */}
          <div ref={timelineRef} className="lg:col-span-6 relative pt-0 lg:pt-2">
            {/* Timeline Background Line (Faint track) */}
            <div
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-[7px] sm:left-[7px] md:left-[7px] w-[2px] bg-[var(--violet-500)]/20 pointer-events-none"
            />

            {/* Animated Dynamic Timeline Line */}
            <motion.div
              aria-hidden="true"
              style={{
                scaleY: lineHeight,
                originY: 0,
              }}
              className="absolute top-4 bottom-4 left-[7px] sm:left-[7px] md:left-[7px] w-[2px] bg-[var(--violet-500)]/70 shadow-[0_0_10px_rgba(139,92,246,0.6)] pointer-events-none"
            />

            {/* Ordered List of Pillars */}
            <ol className="relative z-10 flex flex-col gap-16 lg:gap-24">
              {pillars.map((pillar, index) => (
                <li
                  key={pillar.title}
                  className="group relative flex items-start"
                >
                  {/* Timeline Glowing Dot */}
                  <motion.div
                    initial={{ opacity: shouldReduceMotion ? 1 : 0.3, scale: shouldReduceMotion ? 1 : 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    aria-hidden="true"
                    className="absolute left-0 top-2 -translate-x-[0px] w-4 h-4 rounded-full bg-[var(--violet-300)] shadow-[0_0_12px_var(--violet-500)] ring-2 ring-[var(--violet-400)]/60 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_var(--violet-500)] group-hover:bg-white"
                  />

                  {/* Content Container */}
                  <div className="pl-8 md:pl-20 w-full">
                    <Reveal delay={shouldReduceMotion ? 0 : 0.1 + index * 0.08}>
                      {/* Title Row: Bold Title + Horizontal Gradient Accent Line */}
                      <div className="flex items-center gap-4 sm:gap-6 w-full">
                        <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl lg:text-[32px] text-white tracking-tight shrink-0">
                          {pillar.title}
                        </h3>
                        <div
                          aria-hidden="true"
                          className="flex-1 h-[1px] bg-gradient-to-r from-[var(--violet-500)]/60 via-[var(--violet-400)]/30 to-transparent transition-all duration-300 group-hover:from-[var(--violet-400)] group-hover:via-[var(--violet-300)]/50"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-base sm:text-[17px] text-[var(--text-muted)] leading-relaxed max-w-md pt-3 font-sans">
                        {pillar.description}
                      </p>
                    </Reveal>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { site } from "../../content/site";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface TimelineNodeProps {
  progress: MotionValue<number>;
  threshold: number;
  shouldReduceMotion: boolean;
}

function TimelineNode({
  progress,
  threshold,
  shouldReduceMotion,
}: TimelineNodeProps) {
  const fillOpacity = useTransform(progress, (v) => {
    if (shouldReduceMotion) return 1;
    // Exactly empty when line hasn't touched the dot
    if (v < threshold) return 0;
    // Smooth fast fill once the line reaches the dot
    return Math.min(1, (v - threshold) / 0.008);
  });

  const fillScale = useTransform(progress, (v) => {
    if (shouldReduceMotion) return 1;
    if (v < threshold) return 0.4;
    return 0.4 + 0.6 * Math.min(1, (v - threshold) / 0.008);
  });

  return (
    <div
      aria-hidden="true"
      className="absolute left-[16px] top-[7px] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#9B6DFF]/50 bg-[#08080C] ring-2 ring-[#08080C] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 pointer-events-none"
    >
      {/* Filled glowing core: strictly hidden until the line tip touches the dot */}
      <motion.div
        style={{
          opacity: fillOpacity,
          scale: fillScale,
        }}
        className="absolute inset-[-1px] rounded-full bg-[#EDE9FE] shadow-[0_0_10px_#9B6DFF,0_0_18px_rgba(155,109,255,0.9)] ring-2 ring-[#9B6DFF]"
      />
    </div>
  );
}

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Default calibrated ratios
  const [nodeThresholds, setNodeThresholds] = useState<number[]>([
    0.07, 0.33, 0.58, 0.84,
  ]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });

  const timelineScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );

  useEffect(() => {
    const calculateExactThresholds = () => {
      if (!timelineRef.current) return;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const lineTotalHeight = timelineRect.height + 32; // line goes from -16px to +16px
      const lineTop = timelineRect.top - 16;

      const computed = itemRefs.current.map((item, idx) => {
        if (!item) {
          const defaults = [0.07, 0.33, 0.58, 0.84];
          return defaults[idx] ?? 0.25 * idx;
        }
        const itemRect = item.getBoundingClientRect();
        const dotY = itemRect.top + 7; // Top of node dot
        const relativeY = dotY - lineTop;
        return Math.max(0, Math.min(1, relativeY / lineTotalHeight));
      });

      setNodeThresholds(computed);
    };

    calculateExactThresholds();
    window.addEventListener("resize", calculateExactThresholds);
    return () => window.removeEventListener("resize", calculateExactThresholds);
  }, []);

  const { eyebrow, headline, pillars } = site.about;

  return (
    <section
      id={site.nav[1].id}
      className="relative z-10 bg-[#08080C] text-[#F5F5F5] py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 scroll-mt-20 overflow-hidden border-t border-[#24242C]"
    >
      {/* Subtle Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, rgba(155, 109, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(155, 109, 255, 0.05) 1px, transparent 1px)",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Heading & Editorial Manifesto (~40%) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#9B6DFF]">
                {eyebrow || "01 / ABOUT"}
              </span>
              <div className="w-10 h-[1px] bg-[#9B6DFF]/50" />
            </div>

            {/* Editorial Heading */}
            <h2 className="font-display font-bold tracking-tight text-[#F5F5F5] leading-[0.95] flex flex-col select-none">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
                {headline.plain}
              </span>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-accent italic font-normal tracking-normal text-[#9B6DFF] mt-1">
                {headline.accent}
              </span>
            </h2>

            {/* Manifesto Statement with Left Purple Border */}
            <div className="border-l-2 border-[#9B6DFF] pl-5 py-1">
              <p className="text-base sm:text-lg lg:text-[1.125rem] font-normal leading-relaxed text-[#F5F5F5] max-w-md">
                We build without limits. We question what exists, create what
                doesn’t, and empower the next generation of technical minds to make
                a real impact.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Timeline (~60%) */}
          <div ref={timelineRef} className="lg:col-span-7 relative pt-2">
            {/* Base Vertical Timeline Line (Passes exactly through center of nodes) */}
            <div
              aria-hidden="true"
              className="absolute left-[16px] -translate-x-1/2 -top-4 -bottom-4 w-[2px] bg-gradient-to-b from-[#9B6DFF]/30 via-[#9B6DFF]/70 to-[#9B6DFF]/20 pointer-events-none shadow-[0_0_8px_rgba(155,109,255,0.4)]"
            />

            {/* Dynamic Interactive Glow Line */}
            <motion.div
              aria-hidden="true"
              style={{
                scaleY: timelineScale,
                originY: 0,
              }}
              className="absolute left-[16px] -translate-x-1/2 -top-4 -bottom-4 w-[2px] bg-[#9B6DFF] shadow-[0_0_12px_rgba(155,109,255,0.8)] pointer-events-none"
            />

            {/* Timeline Items */}
            <div className="relative z-10 flex flex-col gap-10 sm:gap-12">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 10 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative flex flex-col pl-[42px] sm:pl-[46px]"
                >
                  {/* Dynamic Circular Node (Fills only when the line reaches this dot) */}
                  <TimelineNode
                    progress={scrollYProgress}
                    threshold={nodeThresholds[index] ?? 0.25 * index}
                    shouldReduceMotion={shouldReduceMotion}
                  />

                  {/* Header Row: Number + Heading + Horizontal Divider */}
                  <div className="flex items-center gap-3 w-full">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#9B6DFF] shrink-0">
                      {pillar.index || `0${index + 1}`}
                    </span>
                    <span className="text-[#9B6DFF]/60 text-xs font-mono select-none">
                      —
                    </span>
                    <h3 className="font-display font-bold uppercase text-base sm:text-lg text-[#F5F5F5] tracking-tight shrink-0 transition-colors duration-200 group-hover:text-[#9B6DFF]">
                      {pillar.title}
                    </h3>
                    <div
                      aria-hidden="true"
                      className="flex-1 h-[1px] bg-gradient-to-r from-[#9B6DFF]/40 via-[#24242C] to-transparent"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[#96969F] leading-relaxed max-w-xl pt-2 font-sans font-normal">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

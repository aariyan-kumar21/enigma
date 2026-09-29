import { useRef } from "react";
import { motion } from "framer-motion";
import { site } from "../../content/site";
import { EventCard } from "../ui/EventCard";
import { CarouselControls } from "../ui/CarouselControls";
import { Reveal } from "../ui/Reveal";
import { useDragScroll } from "../../hooks/useDragScroll";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Events() {
  const shouldReduceMotion = useReducedMotion();
  const {
    containerRef,
    isDragging,
    canScrollLeft,
    canScrollRight,
    scrollProgress,
    activeIndex,
    scrollPrev,
    scrollNext,
    bind,
  } = useDragScroll<HTMLDivElement>();

  const scrollerWrapperRef = useRef<HTMLDivElement>(null);
  const items = site.events.items;
  const isEmpty = items.length === 0;

  return (
    <section
      id={site.nav[2].id}
      className="relative bg-[var(--ink-950)] text-white py-24 md:py-32 overflow-hidden scroll-mt-20 border-b border-[var(--line)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header Row: Eyebrow + Heading + Desktop Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div className="space-y-4 max-w-2xl">
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[0.95]">
                <span>{site.events.headline.plain} </span>
                <span className="font-accent italic font-normal tracking-normal text-[var(--violet-400)]">
                  {site.events.headline.accent}
                </span>
              </h2>
            </Reveal>
          </div>

          {/* Desktop Navigation Buttons */}
          {!isEmpty && (
            <div className="hidden md:block">
              <CarouselControls
                canScrollLeft={canScrollLeft}
                canScrollRight={canScrollRight}
                onPrev={scrollPrev}
                onNext={scrollNext}
                scrollProgress={scrollProgress}
                activeIndex={activeIndex}
                totalCount={items.length}
                showProgress={false}
                showButtons={true}
              />
            </div>
          )}
        </div>
      </div>

      {/* Carousel Scroller bleeding to right edge */}
      <div ref={scrollerWrapperRef} className="relative w-full">
        {isEmpty ? (
          /* Empty State: Single coming soon card aligned with container */
          <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
            <div className="w-[300px] sm:w-[340px] lg:w-[380px] aspect-[4/5.2] rounded-[28px] border border-dashed border-white/15 bg-[var(--ink-900)] flex items-center justify-center p-8 select-none">
              <span className="font-accent text-3xl sm:text-4xl text-white/50">
                Coming soon
              </span>
            </div>
          </div>
        ) : (
          <div
            ref={containerRef}
            tabIndex={0}
            role="region"
            aria-label="Events carousel"
            {...bind}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] pb-4 px-6 lg:px-10 scrollbar-none select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: shouldReduceMotion ? 0.1 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <EventCard
                  event={event}
                  index={index}
                  isDragging={isDragging}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Controls for Mobile */}
      {!isEmpty && (
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-6 md:hidden flex justify-end">
          <CarouselControls
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            onPrev={scrollPrev}
            onNext={scrollNext}
            scrollProgress={scrollProgress}
            activeIndex={activeIndex}
            totalCount={items.length}
            showProgress={false}
            showButtons={true}
          />
        </div>
      )}
    </section>
  );
}

import { site } from "../../content/site";
import { PillarCard } from "../ui/PillarCard";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section
      id={site.nav[1].id}
      className="relative z-10 bg-[var(--paper)] text-[var(--ink-950)] rounded-t-[40px] md:rounded-t-[56px] -mt-14 md:-mt-20 py-24 md:py-32 px-6 lg:px-10 scroll-mt-20 shadow-2xl"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Editorial Heading, Lead & Manifesto (Cols 1-5, Sticky on LG) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--ink-950)] leading-[0.95]">
                <span>{site.about.headline.plain} </span>
                <span className="font-accent italic font-normal tracking-normal text-[var(--blue-500)] block sm:inline">
                  {site.about.headline.accent}
                </span>
              </h2>
            </Reveal>

            <div className="space-y-6 pt-2">
              {/* Lead Paragraph with electric blue vertical accent rule */}
              <Reveal delay={0.2}>
                <p className="pl-5 border-l-2 border-[var(--blue-500)] text-lg sm:text-xl lg:text-[21px] font-medium leading-relaxed text-[var(--ink-950)]/80 max-w-md">
                  {site.about.lead}
                </p>
              </Reveal>

              {/* Manifesto Paragraph with subtle accent rule */}
              <Reveal delay={0.3}>
                <p className="pl-5 border-l-2 border-neutral-300 text-sm sm:text-base text-[var(--ink-950)]/55 leading-relaxed max-w-md">
                  {site.about.manifesto}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column: 2x2 Pillar Cards Grid (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {site.about.pillars.map((pillar, index) => (
                <PillarCard
                  key={pillar.index}
                  pillar={pillar}
                  delay={0.15 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

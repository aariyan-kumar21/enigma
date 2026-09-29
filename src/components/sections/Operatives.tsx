import { site } from "../../content/site";
import { OperativeCard } from "../ui/OperativeCard";
import { Reveal } from "../ui/Reveal";

export function Operatives() {
  const items = site.operatives.items;

  return (
    <section
      id={site.nav[3].id}
      className="relative bg-[var(--ink-950)] text-white py-24 md:py-32 px-6 lg:px-10 scroll-mt-20 border-b border-[var(--line)]"
    >
      <div className="max-w-[1440px] mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--line)]">
          <div className="space-y-4 max-w-2xl">
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[0.95]">
                <span>{site.operatives.headline.plain} </span>
                <span className="font-accent italic font-normal tracking-normal text-[var(--violet-400)]">
                  {site.operatives.headline.accent}
                </span>
              </h2>
            </Reveal>

            {site.operatives.description && (
              <Reveal delay={0.2}>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-xl pl-4 border-l-2 border-[var(--violet-500)] mt-2">
                  {site.operatives.description}
                </p>
              </Reveal>
            )}
          </div>
        </div>

        {/* 4-Column Responsive Operatives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((operative, index) => (
            <OperativeCard
              key={operative.id}
              operative={operative}
              index={index}
              delay={0.08 * (index % 4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

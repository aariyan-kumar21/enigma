import { Lightbulb, Users, Trophy, Target } from "lucide-react";
import type { Pillar } from "../../content/types";
import { Reveal } from "./Reveal";

export interface PillarCardProps {
  pillar: Pillar;
  delay?: number;
}

export function PillarCard({ pillar, delay = 0 }: PillarCardProps) {
  const getIcon = (iconName: Pillar["icon"]) => {
    const props = { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case "lightbulb":
        return <Lightbulb {...props} />;
      case "users":
        return <Users {...props} />;
      case "trophy":
        return <Trophy {...props} />;
      case "target":
        return <Target {...props} />;
    }
  };

  const isHighlighted = Boolean(pillar.highlighted);

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group relative h-full min-h-[300px] sm:min-h-[320px] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 select-none ${
          isHighlighted
            ? "bg-[var(--blue-500)] text-white shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 border border-blue-400/30"
            : "bg-[var(--mist)] text-[var(--ink-950)] hover:-translate-y-1 hover:shadow-lg border border-black/5 hover:border-black/10"
        }`}
      >
        {/* Top: Index & Icon */}
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
              isHighlighted
                ? "bg-white/15 text-white border border-white/20"
                : "bg-black/5 text-neutral-600 border border-black/5"
            }`}
          >
            {pillar.index}
          </span>

          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isHighlighted
                ? "bg-white/20 text-white group-hover:bg-white group-hover:text-[var(--blue-500)]"
                : "bg-white text-[var(--blue-500)] shadow-sm group-hover:bg-[var(--blue-500)] group-hover:text-white"
            }`}
          >
            {getIcon(pillar.icon)}
          </div>
        </div>

        {/* Bottom: Title & Description */}
        <div className="space-y-3 pt-8">
          <h3
            className={`font-display text-xl sm:text-2xl font-bold tracking-tight ${
              isHighlighted ? "text-white" : "text-[var(--ink-950)]"
            }`}
          >
            {pillar.title}
          </h3>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isHighlighted ? "text-white/90" : "text-neutral-600"
            }`}
          >
            {pillar.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

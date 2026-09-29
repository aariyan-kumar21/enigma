import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CarouselControlsProps {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onPrev: () => void;
  onNext: () => void;
  scrollProgress: number;
  activeIndex: number;
  totalCount: number;
  className?: string;
  showProgress?: boolean;
  showButtons?: boolean;
}

export function CarouselControls({
  canScrollLeft,
  canScrollRight,
  onPrev,
  onNext,
  scrollProgress,
  activeIndex,
  totalCount,
  className = "",
  showProgress = true,
  showButtons = true,
}: CarouselControlsProps) {
  const currentDisplay = String(Math.min(totalCount, activeIndex + 1)).padStart(2, "0");
  const totalDisplay = String(totalCount).padStart(2, "0");

  return (
    <div className={`flex items-center justify-between gap-6 ${className}`}>
      {/* Progress Track & Counter */}
      {showProgress && totalCount > 0 && (
        <div className="flex items-center gap-4 flex-1 max-w-xs">
          <span className="font-mono text-xs text-white/60 tabular-nums">
            {currentDisplay} <span className="text-white/30">/</span> {totalDisplay}
          </span>
          <div className="relative flex-1 h-[2px] bg-white/15 rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 left-0 bg-[var(--blue-500)] transition-all duration-200 ease-out"
              style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Prev / Next Circular Buttons */}
      {showButtons && (
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onPrev}
            disabled={!canScrollLeft}
            aria-label="Previous events"
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-[var(--ink-950)] hover:border-white disabled:opacity-30 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-500)] active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={!canScrollRight}
            aria-label="Next events"
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-[var(--ink-950)] hover:border-white disabled:opacity-30 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-500)] active:scale-95"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

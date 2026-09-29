import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { EventItem } from "../../content/types";
import { GrainOverlay } from "./GrainOverlay";

export interface EventCardProps {
  event: EventItem;
  index: number;
  isDragging?: boolean;
}

export function EventCard({ event, index, isDragging = false }: EventCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const formattedIndex = String(index + 1).padStart(2, "0");

  const metaText = [
    event.type.toUpperCase(),
    event.date.toUpperCase(),
    event.venue ? `VENUE: ${event.venue}` : null,
  ]
    .filter(Boolean)
    .join(" • ");

  const hasLink = Boolean(event.link?.href);
  const href = event.link?.href || "#";

  const cardContent = (
    <div className="group relative w-[300px] sm:w-[340px] lg:w-[380px] aspect-[4/5.2] shrink-0 snap-start rounded-[28px] overflow-hidden border border-[var(--line)] select-none bg-[var(--ink-900)] transition-all duration-300 hover:border-[var(--violet-400)]/40 focus-within:ring-2 focus-within:ring-[var(--violet-400)] outline-none">
      {/* Background Image / Fallback Gradient */}
      {event.image && !imageFailed ? (
        <>
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            width={380}
            height={494}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle Dark Gradient Overlay (Transparent at top to ink-950/90 at bottom) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[var(--ink-950)]/90 transition-opacity duration-300 group-hover:opacity-95" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--violet-950)] via-[var(--violet-700)] to-[var(--violet-600)] overflow-hidden">
          <GrainOverlay opacity={0.08} />
          {/* Huge Faint Index Number */}
          <span className="absolute -top-6 -right-6 font-display font-black text-8xl sm:text-9xl text-white/[0.07] select-none pointer-events-none">
            {formattedIndex}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-950)] via-[var(--ink-950)]/40 to-transparent" />
        </div>
      )}

      {/* Top Row: Status Pill & Action Arrow */}
      <div className="relative z-10 p-6 flex items-start justify-between">
        {event.status ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium uppercase tracking-wider text-white select-none">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                event.status === "upcoming"
                  ? "bg-[var(--yellow-400)] shadow-sm shadow-yellow-400/50 animate-pulse"
                  : "bg-white/40"
              }`}
            />
            <span>{event.status}</span>
          </span>
        ) : (
          <span />
        )}

        {hasLink && (
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 sm:group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-6 sm:p-7 flex flex-col justify-end space-y-2.5">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white/85 line-clamp-1">
          {metaText}
        </p>

        <h3 className="font-accent not-italic text-3xl sm:text-[32px] lg:text-[34px] leading-tight text-white line-clamp-3">
          {event.title}
        </h3>
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (isDragging) e.preventDefault();
        }}
        className="block focus:outline-none shrink-0"
        aria-label={`View event details: ${event.title}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className="shrink-0">
      {cardContent}
    </article>
  );
}

import { useState } from "react";
import { Mail, User, ArrowUpRight } from "lucide-react";
import type { Operative } from "../../content/types";
import { Reveal } from "./Reveal";

export interface OperativeCardProps {
  operative: Operative;
  index: number;
  delay?: number;
}

export function OperativeCard({ operative, index, delay = 0 }: OperativeCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const formattedOpId = `OP_${index + 101}`;

  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "email":
        return <Mail className="w-3.5 h-3.5" />;
      case "linkedin":
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full bg-[#0c0c11] rounded-[22px] p-4 sm:p-5 border border-white/5 hover:border-[var(--violet-500)]/40 shadow-sm hover:shadow-2xl hover:shadow-violet-950/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between select-none">
        <div>
          {/* Top: Photo Container */}
          <div className="relative w-full aspect-[4/3.3] rounded-xl overflow-hidden bg-zinc-900 mb-4 border border-white/5">
            {operative.photo && !imageFailed ? (
              <img
                src={operative.photo}
                alt={operative.name}
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-500">
                <User className="w-12 h-12 opacity-40 mb-1" />
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  {formattedOpId}
                </span>
              </div>
            )}

            {/* Top-Left: OP Tag */}
            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 tracking-wider">
              {formattedOpId}
            </div>

            {/* Top-Right: Arrow Action */}
            <div className="absolute top-2.5 right-2.5 p-1 rounded bg-black/40 backdrop-blur-sm border border-white/10 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Role Bar: Vertical Purple Indicator + Role */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-[3px] h-3.5 bg-[var(--violet-500)] rounded-full shrink-0" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              {operative.role}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight transition-colors duration-300 group-hover:text-[var(--violet-300)] mb-2">
            {operative.name}
          </h3>

          {/* Description Quote */}
          {operative.description && (
            <p className="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-3 min-h-[3rem]">
              "{operative.description}"
            </p>
          )}
        </div>

        {/* Bottom Social Icons Row */}
        {operative.socials && operative.socials.length > 0 && (
          <div className="pt-4 mt-2 flex items-center gap-2">
            {operative.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={`${social.label} of ${operative.name}`}
                className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[var(--violet-600)] hover:border-[var(--violet-600)] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] active:scale-95"
              >
                {renderSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}


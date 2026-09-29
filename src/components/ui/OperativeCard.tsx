import { useState } from "react";
import { Mail, User } from "lucide-react";
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
        return <Mail className="w-4 h-4" />;
      case "linkedin":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full bg-[var(--ink-900)] rounded-[28px] p-6 border border-[var(--line)] hover:border-[var(--violet-500)]/50 shadow-sm hover:shadow-xl hover:shadow-violet-950/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between select-none">
        {/* Top: Portrait Photo */}
        <div>
          <div className="relative w-full aspect-[4/4.5] rounded-[20px] overflow-hidden bg-[var(--ink-800)] mb-5 border border-[var(--line)]">
            {operative.photo && !imageFailed ? (
              <img
                src={operative.photo}
                alt={operative.name}
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--ink-800)] text-[var(--text-faint)]">
                <User className="w-16 h-16 opacity-40 mb-2" />
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                  {formattedOpId}
                </span>
              </div>
            )}

            {/* Top-Left: Operational Unit Tag */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/90 tracking-wider">
              {formattedOpId}
            </div>

            {/* Top-Right: Lead Badge if applicable */}
            {operative.group === "lead" && (
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--violet-600)] text-white text-[10px] font-mono font-semibold tracking-wider shadow-sm">
                COMMAND
              </div>
            )}
          </div>

          {/* Info: Role, Name, Bio */}
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--violet-400)] block">
              {operative.role}
            </span>

            <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] tracking-tight transition-colors duration-300 group-hover:text-[var(--violet-400)]">
              {operative.name}
            </h3>

            {operative.description && (
              <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3 pt-1 font-sans min-h-[4rem]">
                "{operative.description}"
              </p>
            )}
          </div>
        </div>

        {/* Bottom: Social Transmission Channels */}
        {operative.socials && operative.socials.length > 0 && (
          <div className="border-t border-[var(--line)] pt-4 mt-5 flex items-center gap-2">
            {operative.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={`${social.label} of ${operative.name}`}
                className="w-9 h-9 rounded-full bg-[var(--ink-800)] border border-[var(--line)] flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--violet-600)] hover:text-white hover:border-[var(--violet-600)] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--violet-400)] active:scale-95"
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

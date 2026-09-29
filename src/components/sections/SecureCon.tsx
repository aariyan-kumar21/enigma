import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "../../content/site";
import { Pill } from "../ui/Pill";
import { Reveal } from "../ui/Reveal";

export function SecureCon() {
  const { secure } = site;

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-5 h-5" />;
      case "phone":
        return <Phone className="w-5 h-5" />;
      case "location":
        return <MapPin className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section
      id={site.nav[4].id}
      className="relative bg-[var(--ink-950)] text-white py-24 md:py-32 px-6 lg:px-10 scroll-mt-20 border-b border-white/10"
    >
      <div className="max-w-[1440px] mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <Reveal direction="down">
              <Pill variant="blue" size="sm">
                {secure.eyebrow || "SECTOR.COMMUNICATIONS"}
              </Pill>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[0.95]">
                <span>{secure.headline.plain} </span>
                <span className="font-accent italic font-normal tracking-normal text-[var(--blue-500)]">
                  {secure.headline.accent}
                </span>
              </h2>
            </Reveal>

            {secure.description && (
              <Reveal delay={0.2}>
                <p className="text-sm sm:text-base text-[var(--text-muted-dark)] font-mono uppercase tracking-wider max-w-xl pl-4 border-l-2 border-[var(--blue-500)] mt-2">
                  {secure.description}
                </p>
              </Reveal>
            )}
          </div>

          <div className="hidden md:block">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              [ Protocol.Contact_v2.0 ]
            </span>
          </div>
        </div>

        {/* 3 Direct Uplink Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secure.channels.map((channel, index) => (
            <Reveal key={channel.title} delay={0.1 * index}>
              <a
                href={channel.href}
                target={channel.type === "location" ? "_blank" : undefined}
                rel={channel.type === "location" ? "noopener noreferrer" : undefined}
                className="group relative h-full bg-[var(--ink-900)] rounded-[24px] p-8 border border-white/10 hover:border-white/30 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-500)]"
              >
                {/* Channel Header */}
                <div className="flex items-center justify-between pb-8">
                  <div className="w-12 h-12 rounded-full bg-[var(--blue-500)] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/25">
                    {getChannelIcon(channel.type)}
                  </div>

                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    CHANNEL_0{index + 1}
                  </span>
                </div>

                {/* Channel Content */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white group-hover:text-[var(--blue-500)] transition-colors">
                    {channel.title}
                  </h3>
                  <p className="font-mono text-sm text-[var(--text-muted-dark)] leading-relaxed break-words">
                    {channel.value}
                  </p>
                </div>

                {/* Hover Connect Indicator */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[var(--blue-500)] uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                  <span>Establish Link</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

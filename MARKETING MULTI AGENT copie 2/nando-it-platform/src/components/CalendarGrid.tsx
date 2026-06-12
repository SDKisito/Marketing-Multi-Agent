import { CALENDAR_WEEK, CHANNELS, DAYS } from "@/data/calendar";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

export function CalendarGrid() {
  const byDayChannel = new Map<string, typeof CALENDAR_WEEK>();
  for (const slot of CALENDAR_WEEK) {
    const key = `${slot.day}::${slot.channel}`;
    const arr = byDayChannel.get(key) ?? [];
    arr.push(slot);
    byDayChannel.set(key, arr);
  }

  const channelMeta: Record<(typeof CHANNELS)[number], { icon: string; color: string }> = {
    LinkedIn:  { icon: "Linkedin",  color: "bg-[#0a1410] text-white" },
    Instagram: { icon: "Instagram", color: "bg-[var(--color-nude-200)] text-[#1e3a2c]" },
    YouTube:   { icon: "Youtube",   color: "bg-red-600 text-white" },
    Email:     { icon: "Mail",      color: "bg-[#0a1410] text-white" },
  };

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
      <div className="border-b border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3">
        <h2 className="text-sm font-semibold text-[#0a1410]">
          Semaine du 20 avril — Lancement Davide (S17)
        </h2>
        <p className="text-[11px] text-[var(--color-muted)]">
          9 publications planifiées · canaux primaires : LinkedIn et YouTube · basé sur le brief de campagne en cours
        </p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "120px repeat(7, minmax(0, 1fr))" }}>
        {/* Header row */}
        <div className="border-b border-r border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          Canal
        </div>
        {DAYS.map((day) => (
          <div
            key={day}
            className="border-b border-r border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-[11px] font-semibold text-[#1e3a2c]"
          >
            {day}
          </div>
        ))}

        {/* Rows par canal */}
        {CHANNELS.map((channel) => (
          <div key={channel} className="contents">
            <div className={cn(
              "border-b border-r border-[var(--color-line)] p-2 flex items-center gap-1.5 text-[11px] font-medium",
              channelMeta[channel].color
            )}>
              <Icon name={channelMeta[channel].icon} size={14} />
              {channel}
            </div>
            {DAYS.map((day) => {
              const slots = byDayChannel.get(`${day}::${channel}`) ?? [];
              return (
                <div
                  key={`${channel}-${day}`}
                  className="border-b border-r border-[var(--color-line)] p-1.5 min-h-[90px] align-top"
                >
                  {slots.map((s, i) => (
                    <div
                      key={i}
                      className={cn(
                        "mb-1 rounded-md border p-1.5 text-[10px] leading-snug",
                        s.status === "programmé"
                          ? "border-[var(--color-marine-200)] bg-[var(--color-marine-50)]"
                          : s.status === "publié"
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-[var(--color-nude-200)] bg-[var(--color-nude-50)]"
                      )}
                      title={s.title}
                    >
                      <div className="font-mono text-[9px] text-[var(--color-muted)]">{s.time} · {s.author}</div>
                      <div className="mt-0.5 font-medium text-[#0a1410] line-clamp-2">
                        {s.title}
                      </div>
                      <div className="mt-0.5 text-[9px] capitalize text-[var(--color-muted)]">
                        {s.status}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-[var(--color-line)] px-5 py-2 text-[11px] text-[var(--color-muted)]">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded bg-[var(--color-marine-200)]" /> Programmé
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded bg-[var(--color-nude-200)]" /> Brouillon
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded bg-emerald-200" /> Publié
        </span>
        <span className="ml-auto text-[10px]">Aperçu · l'édition et la publication automatique arrivent bientôt</span>
      </div>
    </div>
  );
}

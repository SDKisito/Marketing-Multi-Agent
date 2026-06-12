"use client";

import { useState } from "react";
import { CALENDAR_WEEK, CHANNELS, DAYS } from "@/data/calendar";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import type { CalendarSlot } from "@/lib/types";

export function CalendarGrid() {
  const [selected, setSelected] = useState<CalendarSlot | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  async function openSlot(slot: CalendarSlot) {
    setSelected(slot);
    setContent(null);

    if (!slot.deliverableRef) return;

    setLoading(true);
    const slug = slot.deliverableRef.replace(/\.md$/, "");
    try {
      const res = await fetch(`/api/deliverable?agent=createur-contenu&slug=${encodeURIComponent(slug)}`);
      if (res.ok) {
        const data = await res.json();
        setContent(data.content ?? null);
      }
    } catch {
      setContent(null);
    } finally {
      setLoading(false);
    }
  }

  function close() {
    setSelected(null);
    setContent(null);
    setLoading(false);
  }

  const statusColor = (s: CalendarSlot["status"]) =>
    s === "programmé"
      ? "border-[var(--color-marine-200)] bg-[var(--color-marine-50)]"
      : s === "publié"
      ? "border-emerald-200 bg-emerald-50"
      : "border-[var(--color-nude-200)] bg-[var(--color-nude-50)]";

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
        <div className="border-b border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3">
          <h2 className="text-sm font-semibold text-[#0a1410]">
            Semaine du 20 avril — Lancement Davide (S17)
          </h2>
          <p className="text-[11px] text-[var(--color-muted)]">
            9 publications planifiées · canaux primaires : LinkedIn et YouTube · cliquer sur un slot pour voir le contenu
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
                      <button
                        key={i}
                        onClick={() => openSlot(s)}
                        className={cn(
                          "mb-1 w-full rounded-md border p-1.5 text-left text-[10px] leading-snug transition-opacity hover:opacity-75 cursor-pointer",
                          statusColor(s.status)
                        )}
                        title={s.title}
                      >
                        <div className="font-mono text-[9px] text-[var(--color-muted)]">{s.time} · {s.author}</div>
                        <div className="mt-0.5 font-medium text-[#0a1410] line-clamp-2">{s.title}</div>
                        <div className="mt-0.5 text-[9px] capitalize text-[var(--color-muted)]">{s.status}</div>
                      </button>
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
          <span className="ml-auto text-[10px]">Cliquer sur un slot pour voir le contenu</span>
        </div>
      </div>

      {/* Modale */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modale */}
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-[var(--color-line)] bg-white px-6 py-4">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                  <span>{selected.channel}</span>
                  <span>·</span>
                  <span>{selected.day}</span>
                  <span>·</span>
                  <span>{selected.time}</span>
                </div>
                <h2 className="mt-1 text-base font-bold text-[#0a1410]">{selected.title}</h2>
                <div className="mt-1 flex items-center gap-2">
                  <span className={cn(
                    "inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize",
                    selected.status === "programmé" ? "bg-blue-100 text-blue-700"
                    : selected.status === "publié" ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                  )}>
                    {selected.status}
                  </span>
                  <span className="text-[11px] text-[var(--color-muted)]">par {selected.author}</span>
                </div>
              </div>
              <button
                onClick={close}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            {/* Contenu */}
            <div className="px-6 py-5">
              {loading && (
                <p className="text-sm text-[var(--color-muted)]">Chargement du contenu…</p>
              )}
              {!loading && !selected.deliverableRef && (
                <div className="rounded-xl border border-dashed border-[var(--color-line)] p-6 text-center">
                  <Icon name="PenLine" size={24} />
                  <p className="mt-2 text-sm font-medium text-[#0a1410]">Contenu à rédiger</p>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">Ce slot est en brouillon — demande au Créateur de contenu de le rédiger.</p>
                </div>
              )}
              {!loading && content && (
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#1e3a2c]">
                  {content}
                </pre>
              )}
              {!loading && selected.deliverableRef && !content && !loading && (
                <p className="text-sm text-[var(--color-muted)]">Fichier introuvable.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

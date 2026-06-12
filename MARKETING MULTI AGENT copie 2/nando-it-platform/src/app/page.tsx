import Link from "next/link";
import { listAgents } from "@/lib/agents";
import { countDeliverables } from "@/lib/deliverables";
import { AgentAvatar } from "@/components/AgentAvatar";
import { Icon } from "@/components/Icon";

export default async function HomePage() {
  const agents = await listAgents();
  const counts = await Promise.all(
    agents.map(async (a) =>
      a.status === "active" && a.slug !== "orchestrateur" ? await countDeliverables(a.slug) : 0
    )
  );
  const totalDeliverables = counts.reduce((s, c) => s + c, 0);
  const activeAgents = agents.filter((a) => a.status === "active").length;

  const orchestrateur = agents.find((a) => a.slug === "orchestrateur");
  const others = agents.filter((a) => a.slug !== "orchestrateur");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* ============ Header ============ */}
      <header className="sticky top-0 z-30">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_-8px_rgba(232,70,31,0.7)]">
              <img src="/favicon.png" alt="Nando IT" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <img src="/logo-nando-it.png" alt="Nando IT Solutions" className="h-5 object-contain object-left" />
              <div className="text-[10px] font-medium tracking-[0.14em] text-[var(--color-ink-dim)] uppercase">
                Multi-Agent Platform
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <HeaderLink href="/dashboard" label="Dashboard" icon="LayoutDashboard" />
            <HeaderLink href="/calendrier" label="Calendrier" icon="Calendar" hideOnMobile />
            <HeaderLink href="/settings" icon="Settings" compact />
          </nav>
        </div>
      </header>

      {/* ============ Hero ============ */}
      <section className="relative px-6 sm:px-10 pt-8 pb-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* Left : copy */}
          <div className="avatar-enter">
            <div className="chip">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {activeAgents} agents en ligne · 24/7
            </div>
            <h1 className="h-hero mt-6">
              Ton équipe IA,
              <br />
              <em className="italic text-[var(--color-accent)]">sous la main</em>.
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-[var(--color-ink-soft)] max-w-xl">
              Clique sur un agent pour ouvrir son panneau de contrôle.
              <br className="hidden sm:inline" />
              Stats, livrables, chat live, historique — tout au même endroit.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/agents/orchestrateur"
                className="btn-accent inline-flex items-center gap-2 text-sm"
              >
                Lancer l&apos;orchestrateur
                <Icon name="ArrowRight" size={14} />
              </Link>
              <Link href="/dashboard" className="btn-ghost inline-flex items-center gap-2 text-sm">
                <Icon name="Play" size={13} />
                Voir l&apos;activité
              </Link>
            </div>

            {/* Stats inline */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Stat value={activeAgents.toString()} label="Agents actifs" />
              <Divider />
              <Stat value={totalDeliverables.toString()} label="Livrables produits" />
              <Divider />
              <Stat value="24/7" label="Toujours en ligne" />
            </div>
          </div>

          {/* Right : featured avatar (Orchestrateur — grande card centrale) */}
          {orchestrateur && (
            <div className="relative flex justify-center lg:justify-end avatar-enter" style={{ animationDelay: "0.15s" }}>
              <FeaturedAgentCard agent={orchestrateur} count={counts[0]} />
            </div>
          )}
        </div>
      </section>

      {/* ============ Grille agents "Our Trendy agents" ============ */}
      <section className="px-6 sm:px-10 pt-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="chip mb-3">
                <span className="h-1 w-4 bg-[var(--color-accent)] rounded-full" />
                Notre équipe
              </div>
              <h2 className="h-section text-[32px] sm:text-[40px]">
                8 autres agents <em className="italic text-[var(--color-accent)]">prêts</em>.
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-[var(--color-ink-dim)] max-w-xs text-right">
              Chaque agent a son propre panneau de contrôle avec stats, outils et livrables.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {others.map((agent, i) => (
              <div
                key={agent.slug}
                className="avatar-enter"
                style={{ animationDelay: `${0.2 + i * 0.06}s` }}
              >
                <AgentCard agent={agent} count={counts[agents.indexOf(agent)]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Footer ============ */}
      <footer className="border-t border-white/10 px-6 sm:px-10 py-8">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 text-[11px] text-[var(--color-ink-dim)]">
          <div>Propulsée par Claude + n8n · Nando IT Solutions © 2026</div>
          <div className="flex gap-4">
            <Link href="/settings" className="hover:text-[var(--color-ink)]">Connexions</Link>
            <Link href="/dashboard" className="hover:text-[var(--color-ink)]">Tableau de bord</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= Composants UI ================= */

function HeaderLink({
  href,
  label,
  icon,
  hideOnMobile,
  compact,
}: {
  href: string;
  label?: string;
  icon: string;
  hideOnMobile?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 chip hover:bg-white/10 ${
        hideOnMobile ? "hidden sm:inline-flex" : ""
      } ${compact ? "px-2.5" : ""}`}
      aria-label={label}
    >
      <Icon name={icon} size={12} />
      {!compact && label && <span>{label}</span>}
    </Link>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[28px] sm:text-[32px] font-light text-[var(--color-ink)] tracking-tight h-display">
        {value}
      </div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-dim)]">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-8 w-px bg-white/10" />;
}

/* ================= Featured Agent Card (Orchestrateur) ================= */

function FeaturedAgentCard({
  agent,
  count: _count,
}: {
  agent: { slug: string; name: string; role?: string; tagline: string };
  count: number;
}) {
  return (
    <Link
      href={`/agents/${agent.slug}`}
      className="group relative block w-full max-w-md"
    >
      {/* Card */}
      <div className="relative glass-brutal rounded-[32px] p-8 pt-10 text-center glass-card-hover overflow-hidden">
        <div className="flex justify-center">
          <AgentAvatar slug={agent.slug} size={220} priority aura />
        </div>
        <div className="chip mt-6 mx-auto emerald">
          <Icon name="Crown" size={10} /> Pilote · en ligne
        </div>
        {agent.role && (
          <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink-dim)]">
            {agent.role}
          </div>
        )}
        <h3 className="h-display text-[40px] leading-none mt-1">{agent.name}</h3>
        <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-xs mx-auto">
          {agent.tagline}
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-[var(--color-accent)] group-hover:gap-3 transition-all">
          <span className="text-sm font-semibold">Ouvrir le panneau</span>
          <Icon name="ArrowRight" size={14} />
        </div>
      </div>
    </Link>
  );
}

/* ================= Agent Card (grid) ================= */

function AgentCard({
  agent,
  count,
}: {
  agent: { slug: string; name: string; role?: string; tagline: string; status: string };
  count: number;
}) {
  const disabled = agent.status === "coming-soon";

  const cardBody = (
    <div className="relative glass-brutal glass-card-hover rounded-3xl p-5 pb-6 h-full flex flex-col overflow-hidden">
      {/* Count badge */}
      {count > 0 && !disabled && (
        <div className="absolute top-3 right-3 z-10">
          <div className="chip emerald">
            <Icon name="FileText" size={10} />
            {count}
          </div>
        </div>
      )}
      {disabled && (
        <div className="absolute top-3 right-3 z-10">
          <div className="chip amber">SOON</div>
        </div>
      )}

      {/* Avatar centré avec aura verte */}
      <div className="relative flex justify-center pt-2 pb-1">
        <AgentAvatar slug={agent.slug} size={140} aura />
      </div>

      {/* Role + Nom */}
      <div className="mt-3 text-center flex-1 flex flex-col">
        {agent.role && (
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink-dim)]">
            {agent.role}
          </div>
        )}
        <h3 className="h-display text-[26px] leading-none mt-1 text-[var(--color-ink)]">
          {agent.name}
        </h3>
        <p className="mt-2 text-[11.5px] text-[var(--color-ink-dim)] leading-snug line-clamp-2">
          {agent.tagline}
        </p>
      </div>

      {/* CTA */}
      {!disabled && (
        <div className="mt-4 flex items-center justify-between text-[11px] pt-3 border-t border-white/8">
          <span className="flex items-center gap-1.5 text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            En ligne
          </span>
          <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold group-hover:gap-1.5 transition-all">
            Ouvrir
            <Icon name="ArrowUpRight" size={11} />
          </span>
        </div>
      )}
    </div>
  );

  if (disabled) {
    return <div className="opacity-50 cursor-not-allowed h-full">{cardBody}</div>;
  }

  return (
    <Link href={`/agents/${agent.slug}`} className="group block h-full outline-none">
      {cardBody}
    </Link>
  );
}

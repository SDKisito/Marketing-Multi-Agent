import { notFound } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { AgentAvatar } from "@/components/AgentAvatar";
import { AgentTabs } from "@/components/AgentTabs";
import { DeliverablesPanel } from "@/components/DeliverablesPanel";
import {
  InboxPreview,
  MeetingsPreview,
  CandidatesPreview,
} from "@/components/OpsContextPanels";
import { SyncButton } from "@/components/SyncButton";
import { Icon } from "@/components/Icon";
import { getAgentBySlug } from "@/lib/agents";
import { countDeliverables } from "@/lib/deliverables";
import { getAgentUsage } from "@/lib/analytics/usage";
import { getGoogleStatus } from "@/lib/integrations/google";
import type { AgentSlug } from "@/lib/types";

export const dynamic = "force-dynamic";

const SUGGESTIONS: Partial<Record<AgentSlug, string[]>> = {
  orchestrateur: [
    "Lance une campagne complète autour de Davide sur LinkedIn",
    "Analyse les résultats YouTube du mois de mars",
    "Deck interne 'Roadmap Q3 Nando IT Solutions' pour le board",
    "Brief pour le lancement de Lina (AI Content Creator)",
    "Post LinkedIn sur les 3 erreurs que font les PME avec ChatGPT",
  ],
  strategiste: [
    "Analyse ma niche et construis l'ICP pour un SaaS B2B francophone",
    "Brief de campagne notoriété Q2 2026 — cible DSI de PME",
    "Positionnement Blue Ocean face aux concurrents IA no-code",
    "Brief lancement offre Alex (AI Support)",
  ],
  "createur-contenu": [
    "Post LinkedIn long sur les 3 erreurs que font les PME avec ChatGPT",
    "Script Reel 30s : 'Davide travaille cette nuit'",
    "Carrousel LinkedIn 7 slides : ChatGPT vs agent IA autonome",
    "Script YouTube 12 min : démo live Davide en prod",
  ],
  designer: [
    "Hero image 16:9 pour le lancement de Davide",
    "Pack 8 visuels carrousel LinkedIn — style éditorial magazine",
    "Thumbnail YouTube avec chiffre 70 % en grand",
    "Fond décoratif crème pour stories Instagram",
  ],
  analyste: [
    "Rapport de performance LinkedIn + YouTube — mars 2026",
    "Plan d'optimisation 30 jours pour la chaîne YouTube",
    "Analyse vidéo par vidéo — top 3 performers du mois",
    "Benchmark concurrents IA sur LinkedIn — avril 2026",
  ],
  presentateur: [
    "Deck pitch prospect 'Audit IA' — 10 slides, 20 min",
    "Présentation roadmap Q3 pour l'équipe — 8 slides",
    "Deck onboarding client — de la signature au premier agent",
    "Pitch investisseur — 5 slides SCQA",
  ],
  gmail: [
    "Trie ma boîte et priorise les emails urgents",
    "Rédige une réponse à la dernière demande de démo",
    "Résume les 10 derniers emails non lus",
    "Génère un to-do liste depuis ma boîte de réception",
  ],
  fireflies: [
    "Analyse le dernier call client et extrais les actions",
    "Résume les décisions prises lors du weekly",
    "Identifie les objections récurrentes dans les calls de démo",
    "Plan d'action équipe issu du call du 20 avril",
  ],
  cv: [
    "Score les 5 dernières candidatures pour le poste de dev",
    "Rédige un email de refus courtois pour un profil junior",
    "Compare les 3 meilleurs profils pour le poste de CTO",
    "Génère une grille d'évaluation pour les entretiens",
  ],
};

const SYNC_CONFIG: Partial<Record<AgentSlug, { endpoint: string; label: string }>> = {
  gmail: { endpoint: "/api/integrations/gmail/sync", label: "Sync Gmail" },
  fireflies: { endpoint: "/api/integrations/fireflies/sync", label: "Sync Fireflies" },
};

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: slugParam } = await params;
  const agent = await getAgentBySlug(slugParam);
  if (!agent) notFound();

  const slug = agent.slug as AgentSlug;

  const [deliverablesCount, usageStats, google] = await Promise.all([
    countDeliverables(slug),
    getAgentUsage(slug).catch(() => null),
    getGoogleStatus(),
  ]);

  const suggestions = SUGGESTIONS[slug] ?? [];
  const disabled = agent.status === "coming-soon";
  const syncConfig = SYNC_CONFIG[slug];

  // Panneaux de contexte pour les agents OPS
  let contextPanel: React.ReactNode = null;
  if (slug === "gmail") contextPanel = <InboxPreview />;
  else if (slug === "fireflies") contextPanel = <MeetingsPreview />;
  else if (slug === "cv") contextPanel = <CandidatesPreview />;

  const filesPanel = <DeliverablesPanel agentSlug={slug} />;

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-bg)]">
      <Sidebar activeSlug={slug} />

      <main className="flex flex-1 flex-col overflow-hidden">
        {/* ── Header ── */}
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl px-6 py-4">
          <div className="flex items-center gap-4 min-w-0">
            <AgentAvatar slug={slug} size={52} aura />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-[20px] font-black tracking-tight text-[var(--color-ink)] truncate">
                  {agent.name}
                </h1>
                {agent.status === "active" && (
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-950/40 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-800/40 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    En ligne
                  </span>
                )}
                {disabled && (
                  <span className="rounded-full bg-[var(--color-nude-100)] px-2 py-0.5 text-[10px] font-black tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)] shrink-0">
                    BIENTÔT
                  </span>
                )}
              </div>
              <p className="text-[12px] text-[var(--color-muted)] truncate">
                {agent.role} · {agent.tagline}
              </p>
            </div>
          </div>

          {/* Actions header */}
          <div className="flex items-center gap-3 shrink-0">
            {usageStats && usageStats.messagesCount > 0 && (
              <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-4">
                <StatChip
                  label="Messages"
                  value={String(usageStats.messagesCount)}
                  icon="MessageCircle"
                />
                <StatChip
                  label="Coût estimé"
                  value={`$${usageStats.totalCostUsd.toFixed(3)}`}
                  icon="DollarSign"
                />
              </div>
            )}
            {syncConfig && (
              <SyncButton
                endpoint={syncConfig.endpoint}
                label={syncConfig.label}
                disabled={!google.connected}
                disabledReason="Connectez Google dans Paramètres"
              />
            )}
          </div>
        </header>

        {/* ── Corps ── */}
        <div className="flex-1 overflow-hidden p-4 sm:p-6">
          <AgentTabs
            agentSlug={slug}
            agentName={agent.name}
            accent={agent.accent}
            suggestions={suggestions}
            disabled={disabled}
            deliverablesCount={deliverablesCount}
            filesPanel={filesPanel}
            contextPanel={contextPanel ?? undefined}
          />
        </div>

        {/* ── Footer ── */}
        <footer className="shrink-0 border-t border-white/10 px-6 py-2.5 flex items-center justify-between text-[11px] text-[var(--color-muted)]">
          <div>Nando IT Solutions © 2026</div>
          <div className="flex items-center gap-1.5">
            <Icon name="Cpu" size={11} />
            {agent.model === "opus" ? "Claude Opus" : "Claude Sonnet"} · {agent.tools.length} outils
          </div>
        </footer>
      </main>
    </div>
  );
}

function StatChip({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center gap-1 text-[11px] text-[var(--color-muted)]">
        <Icon name={icon} size={10} />
        {label}
      </div>
      <div className="text-[14px] font-black text-[var(--color-ink)]">{value}</div>
    </div>
  );
}

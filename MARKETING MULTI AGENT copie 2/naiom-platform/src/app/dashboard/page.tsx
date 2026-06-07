import { Sidebar } from "@/components/Sidebar";
import { Icon } from "@/components/Icon";
import {
  StatCard,
  YouTubeWidget,
  FirefliesWidget,
  GmailWidget,
  DriveWidget,
  RecentDeliverablesWidget,
} from "@/components/dashboard/Widgets";
import {
  getInbox,
  getMeetings,
  getYouTubeSnapshot,
  getDriveSnapshot,
} from "@/lib/dataSources";
import { listAllDeliverables } from "@/lib/deliverables";
import { getGoogleStatus } from "@/lib/integrations/google";
import type { YTSnapshot } from "@/lib/integrations/youtube";
import type { DriveSnapshot } from "@/lib/integrations/drive";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [inbox, meetings, yt, drive, deliverables, google] = await Promise.all([
    getInbox(),
    getMeetings(),
    getYouTubeSnapshot(),
    getDriveSnapshot(),
    listAllDeliverables(),
    getGoogleStatus(),
  ]);

  const ytData = (yt.data as YTSnapshot | undefined) ?? null;
  const driveData = (drive.data as DriveSnapshot | undefined) ?? null;
  const pastMeetings = meetings.data.filter((m) => new Date(m.date) <= new Date());
  const urgentMails = inbox.data.filter((e) => e.urgency === "high").length;
  const deliverablesTotal = deliverables.length;
  const pdfsTotal = deliverables.filter((d) => d.filename.toLowerCase().endsWith(".pdf")).length;

  return (
    <div className="flex h-screen bg-[var(--color-surface)]">
      <Sidebar activeSlug="dashboard" />

      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-[var(--color-line)] bg-white px-8 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1410] text-white">
                <Icon name="LayoutDashboard" size={22} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-[#0a1410]">
                  Tableau de bord
                </h1>
                <p className="text-sm text-[var(--color-muted)]">
                  Vue d&apos;ensemble Nando IT Solutions · données {google.connected ? "live" : "mock"} · agents actifs
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                Dernière MAJ
              </div>
              <div className="text-sm font-medium text-[#1e3a2c]">
                {new Date().toLocaleString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6 max-w-[1400px]">
          {/* Hero stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icon="Youtube"
              label="Abonnés YouTube"
              value={ytData ? ytData.channel.subscribers.toLocaleString("fr-FR") : "—"}
              hint={ytData ? `+${ytData.analytics.totals.subscribersGained} sur 30j` : "Non connecté"}
              tint="orange"
              href="/agents/analyste"
            />
            <StatCard
              icon="Mic"
              label="Calls analysés"
              value={pastMeetings.length}
              hint={`${pastMeetings.filter((m) => m.sentiment === "positive").length} positifs`}
              tint="marine"
              href="/agents/fireflies"
            />
            <StatCard
              icon="Mail"
              label="Emails urgents"
              value={urgentMails}
              hint={`sur ${inbox.data.length} dans l'inbox`}
              tint="nude"
              href="/agents/gmail"
            />
            <StatCard
              icon="Files"
              label="Livrables produits"
              value={deliverablesTotal}
              hint={`${pdfsTotal} PDF · ${deliverablesTotal - pdfsTotal} fichiers texte`}
              tint="emerald"
              href="/agents/orchestrateur"
            />
          </div>

          {/* Main widgets grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <YouTubeWidget snapshot={ytData} live={yt.live} lastUpdated={yt.lastUpdated} />
            <FirefliesWidget meetings={meetings.data} live={meetings.live} lastUpdated={meetings.lastUpdated} />
            <GmailWidget emails={inbox.data} live={inbox.live} lastUpdated={inbox.lastUpdated} />
            <DriveWidget snapshot={driveData} live={drive.live} lastUpdated={drive.lastUpdated} />
          </div>

          {/* Livrables récents full width */}
          <RecentDeliverablesWidget items={deliverables} />
        </div>
      </main>
    </div>
  );
}

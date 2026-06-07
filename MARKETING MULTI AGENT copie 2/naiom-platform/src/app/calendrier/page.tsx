import { Sidebar } from "@/components/Sidebar";
import { CalendarGrid } from "@/components/CalendarGrid";
import { Icon } from "@/components/Icon";

export default function CalendrierPage() {
  return (
    <div className="flex h-screen bg-[var(--color-surface)]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-[var(--color-line)] bg-white px-8 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1410] text-white">
              <Icon name="Calendar" size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-[#0a1410]">
                Calendrier éditorial
              </h1>
              <p className="text-sm text-[var(--color-muted)]">
                Programmation des publications multi-canal · Aperçu en lecture seule
              </p>
            </div>
          </div>
        </header>

        <div className="p-6 max-w-[1400px]">
          <CalendarGrid />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard
              icon="Calendar"
              title="Publication automatique"
              body="Les publications marquées « Programmé » seront bientôt poussées automatiquement vers LinkedIn, YouTube et l'email."
            />
            <InfoCard
              icon="GitBranch"
              title="Cohérence campagne"
              body="Le calendrier reprend la cadence recommandée dans le brief de campagne produit par le Stratège — tout s'enchaîne."
            />
            <InfoCard
              icon="ClipboardCheck"
              title="Validation avant envoi"
              body="Rien ne part sans votre validation : chaque publication passe de « Brouillon » à « Programmé » sur approbation."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-line)] bg-white p-5">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
        <Icon name={icon} size={12} /> {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[#1e3a2c]">{body}</p>
    </div>
  );
}

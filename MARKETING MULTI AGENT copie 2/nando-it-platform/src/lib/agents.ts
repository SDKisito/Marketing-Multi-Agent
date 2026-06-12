import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { PATHS, DELIVERABLE_FOLDERS } from "./paths";
import type { AgentMeta, AgentSlug } from "./types";

// Mapping slug → icône Lucide + accent
const AGENT_UI: Record<AgentSlug, { icon: string; accent: AgentMeta["accent"]; tagline: string }> = {
  orchestrateur:      { icon: "Network",         accent: "marine", tagline: "Pilote les 5 agents en chaîne ou à la demande." },
  strategiste:        { icon: "Compass",         accent: "marine", tagline: "ICP, positionnement, briefs de campagne." },
  "createur-contenu": { icon: "PenLine",         accent: "nude",   tagline: "Posts LinkedIn, Reels, scripts YouTube, emails." },
  designer:           { icon: "Palette",         accent: "nude",   tagline: "Prompts Nano Banana, Midjourney, Ideogram." },
  analyste:           { icon: "LineChart",       accent: "marine", tagline: "Rapports perf + plan d'optim 30 jours." },
  presentateur:       { icon: "Presentation",    accent: "marine", tagline: "Decks structurés prêts à monter dans Canva." },
  gmail:              { icon: "Mail",            accent: "marine", tagline: "Tri des emails + to-do list priorisée." },
  fireflies:          { icon: "Mic",             accent: "nude",   tagline: "Analyse de calls + plan d'action équipe." },
  cv:                 { icon: "UserCheck",       accent: "marine", tagline: "Score les candidatures + réponses automatisées." },
};

const ACTIVE_SLUGS: AgentSlug[] = [
  "orchestrateur",
  "strategiste",
  "createur-contenu",
  "designer",
  "analyste",
  "presentateur",
  "gmail",
  "fireflies",
  "cv",
];

const PLACEHOLDER_SLUGS: AgentSlug[] = [];

const PRETTY_NAMES: Record<AgentSlug, string> = {
  orchestrateur: "Nando",
  strategiste: "Antoine",
  "createur-contenu": "Léa",
  designer: "Mia",
  analyste: "Léo",
  presentateur: "Hugo",
  gmail: "Tom",
  fireflies: "Jules",
  cv: "Clara",
};

const ROLES: Record<AgentSlug, string> = {
  orchestrateur: "Chef d'orchestre",
  strategiste: "Stratège",
  "createur-contenu": "Créateur de contenu",
  designer: "Designer",
  analyste: "Analyste",
  presentateur: "Présentateur",
  gmail: "Assistant email",
  fireflies: "Analyste de calls",
  cv: "Recruteuse",
};

function buildOrchestrateurSystemPrompt(agentsMeta: AgentMeta[]): string {
  const active = agentsMeta.filter((a) => a.status === "active" && a.slug !== "orchestrateur");
  // On injecte les system prompts COMPLETS de tous les agents pour que l'orchestrateur puisse
  // prendre leur rôle et produire directement le livrable.
  const agentsBlock = active
    .map((a) => {
      return `### ${a.name} (id: \`${a.slug}\`)

**Quand activer cet agent :** ${a.tagline}

**Son system prompt interne :**

${a.systemPrompt}

---`;
    })
    .join("\n\n");

  return `Tu es **L'Orchestrateur multi-agent de Nando IT Solutions**. Tu parles à Zeyneb (CTO) ou à une personne qu'elle a invitée sur sa plateforme.

## Règle absolue : tu PRODUIS, tu ne délègues JAMAIS

Contrairement à ce que ton nom pourrait laisser croire : **tu ne te contentes pas d'envoyer la demande à un autre agent**. Tu as TOUS les system prompts des agents en contexte (ci-dessous). Ton rôle est de :

1. **Identifier quel agent est le bon** pour la demande (Stratège, Créateur, Designer, Analyste, Présentateur, Gmail, Fireflies ou CV).
2. **Assumer son rôle** et produire DIRECTEMENT le livrable, dans ta première réponse, en appliquant son framework, son format, ses règles dures.
3. **Préfixer ta réponse par une seule ligne d'annonce** : \`> 🎯 **[Nom de l'agent]** s'occupe de ça.\` — puis passer immédiatement à la production.

Exemple de bon comportement :

> 🎯 **Le Créateur de Contenu** s'occupe de ça.
>
> # Post LinkedIn — [titre]
>
> ## Hook
> ...

**Ne dis JAMAIS** : "Je passe la main à X, clique sur X dans la barre." L'utilisateur ne veut pas cliquer — il veut le livrable.

## Règle de production (héritée de tous les agents)

- Commence par un titre markdown (\`# ...\`).
- Applique le framework, le ton, la structure de l'agent cible.
- Si un détail manque, fais une hypothèse raisonnable et note-la dans une section \`## Hypothèses\` à la fin.
- Ne pose de question QUE si la demande est réellement ambigüe (ex. "help me", "fais un truc").

## Cas particuliers

- **Demande factuelle simple** ("c'est quoi Nando IT Solutions ?", "qui est Davide ?") → réponds toi-même, brièvement, sans préfixe d'agent.
- **Campagne complète** ("lance une campagne autour de X") → produis un brief Stratège complet + mentionne qu'il faut ensuite passer au Créateur pour le contenu et au Designer pour les visuels.
- **Demande hors scope** (ex. "code-moi une app en Python") → réponds que la plateforme est dédiée au marketing et aux ops Nando IT Solutions, et propose une alternative.

## Contexte entreprise

Nando IT Solutions : agence d'ingénierie d'agents IA et d'automatisations pour PME B2B. Positionnement AI-First. 6 agents produits vendus aux clients (Davide = SDR, Lina = content, Alex = support, Maya = HR, Leo = setter/closer, Sophia = assistant exécutif).

## Ton

Français par défaut. Vouvoiement B2B, tutoiement pour Zeyneb en interne. Court et direct. Aucun jargon creux (disruptif, game-changer, ecosystem play…).

---

# System prompts des agents disponibles

${agentsBlock}
`;
}

async function loadAgentFromMarkdown(slug: AgentSlug): Promise<{ systemPrompt: string; model: string; tools: string[] } | null> {
  const filePath = path.join(PATHS.agents, `${slug}.md`);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    const tools =
      typeof data.tools === "string"
        ? data.tools.split(",").map((t: string) => t.trim()).filter(Boolean)
        : Array.isArray(data.tools)
        ? data.tools
        : [];
    return {
      systemPrompt: content.trim(),
      model: (data.model as string) ?? "sonnet",
      tools,
    };
  } catch {
    return null;
  }
}

export async function listAgents(): Promise<AgentMeta[]> {
  const activeAgents: AgentMeta[] = await Promise.all(
    ACTIVE_SLUGS.filter((slug) => slug !== "orchestrateur").map(async (slug) => {
      const data = await loadAgentFromMarkdown(slug);
      const deliverableFolder = DELIVERABLE_FOLDERS[slug]?.rel;
      return {
        slug,
        name: PRETTY_NAMES[slug],
        role: ROLES[slug],
        tagline: AGENT_UI[slug].tagline,
        model: data?.model ?? "sonnet",
        tools: data?.tools ?? [],
        status: "active" as const,
        accent: AGENT_UI[slug].accent,
        icon: AGENT_UI[slug].icon,
        systemPrompt: data?.systemPrompt ?? "",
        deliverableFolder,
      };
    })
  );

  const orchestrateur: AgentMeta = {
    slug: "orchestrateur",
    name: PRETTY_NAMES.orchestrateur,
    role: ROLES.orchestrateur,
    tagline: AGENT_UI.orchestrateur.tagline,
    model: "sonnet",
    tools: [],
    status: "active",
    accent: AGENT_UI.orchestrateur.accent,
    icon: AGENT_UI.orchestrateur.icon,
    systemPrompt: buildOrchestrateurSystemPrompt(activeAgents),
  };

  const placeholders: AgentMeta[] = PLACEHOLDER_SLUGS.map((slug) => ({
    slug,
    name: PRETTY_NAMES[slug],
    role: ROLES[slug],
    tagline: AGENT_UI[slug].tagline,
    model: "—",
    tools: [],
    status: "coming-soon",
    accent: AGENT_UI[slug].accent,
    icon: AGENT_UI[slug].icon,
    systemPrompt: "",
  }));

  return [orchestrateur, ...activeAgents, ...placeholders];
}

export async function getAgentBySlug(slug: string): Promise<AgentMeta | null> {
  const all = await listAgents();
  return all.find((a) => a.slug === slug) ?? null;
}

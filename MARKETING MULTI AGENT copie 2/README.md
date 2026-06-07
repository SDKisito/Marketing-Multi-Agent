# Nando IT Solutions — Multi-Agent Marketing

Système multi-agent IA pour Nando IT Solutions. Un orchestrateur (Claude Code) pilote 5 sous-agents spécialisés qui produisent des campagnes marketing end-to-end.

> **Rappel positionnement Nando IT Solutions** : agence d'ingénierie d'agents IA + automations n8n (pas une agence marketing). Voir [clients/nando-it/brand.md](clients/nando-it/brand.md).

## Les 5 sous-agents

| Agent | Modèle | Rôle | Slash command |
|---|---|---|---|
| Stratège | Opus | Analyse niche, ICP, brief campagne | `/brief` |
| Créateur de Contenu | Sonnet | Posts LinkedIn, Reels, YouTube | `/post` |
| Designer | Sonnet | Prompts Midjourney, Gemini, Ideogram | `/visuel` |
| Analyste | Opus | Rapports perf + plan d'optim 30j | `/analyse` |
| Présentateur | Sonnet | Decks Canva structurés | `/deck` |
| **Chaîne complète** | — | Stratège → Créateur → Designer → Présentateur | `/campagne` |

## Arborescence

```
.
├── CLAUDE.md                   # Instructions orchestrateur (source de vérité)
├── .claude/
│   ├── agents/                 # 5 sous-agents natifs
│   ├── commands/               # 6 slash commands
│   └── settings.json           # Permissions (Bash scopé à api/*.py)
├── api/                        # 8 stubs API (LinkedIn, YT, IG, TikTok, Canva, Gemini, Ideogram, Midjourney)
├── clients/nando-it/              # brand.md, icp.md, historique.md (remplis avec données réelles)
├── briefs/                     # Livrables Stratège
├── content/                    # Livrables Créateur
├── prompts-images/             # Livrables Designer
├── analytics/                  # Livrables Analyste
│   └── raw/                    # Exports CSV/JSON bruts (gitignored)
├── decks/                      # Livrables Présentateur
├── .env.example                # Template variables d'environnement
└── .gitignore                  # Protège .env et analytics/raw
```

## Démarrage

```bash
# 1. Ouvrir Claude Code dans ce répertoire
cd "MARKETING MULTI AGENT"
claude

# 2. (Optionnel) Configurer les APIs pour Phase 2 analytics réelles
cp .env.example .env
# Éditer .env avec les tokens réels (LinkedIn, YouTube, etc.)
```

Puis formuler une demande. Exemples :

| Intention | Slash command | Résultat |
|---|---|---|
| Brief de campagne | `/brief Lancement de Davide sur LinkedIn — 4 semaines, 0 € budget` | Fichier dans `briefs/` |
| 1 post LinkedIn long | `/post post LinkedIn long sur les 3 erreurs que font les PME avec ChatGPT` | Fichier dans `content/` |
| 3 prompts image hero | `/visuel hero image offre Davide — 16:9 + 1:1 + 9:16` | Fichier dans `prompts-images/` |
| Rapport analytics | `/analyse rapport LinkedIn + YouTube mois de mars` | Fichiers dans `analytics/` |
| Deck client | `/deck pitch prospect "Audit IA" — 10 slides` | Fichier dans `decks/` |
| Campagne complète | `/campagne lancement offre Lina (AI Content Creator)` | Chaîne 4 agents séquentielle |

L'orchestrateur peut aussi router automatiquement sans slash command (ex : « écris-moi un post LinkedIn sur X » déclenche le Créateur).

## Phase 2 — APIs

Les 8 scripts `api/*.py` sont des stubs cohérents qui :
- Chargent `.env` via le helper `api/_common.py` (parseur minimal, pas de dépendance)
- Exigent les variables d'env documentées dans `.env.example`
- Sortent une erreur claire si la config manque (exit code 2)
- Exposent un CLI standardisé `--period`, `--output`, etc. utilisable par l'Analyste / Designer / Présentateur via Bash

Pour brancher une API réelle, remplacer le `raise NotImplementedError` par les appels HTTP correspondants (doc URL en tête de chaque script).

## Avancement

- [x] **Phase 1** — Infrastructure (CLAUDE.md + arborescence)
- [x] **Phase 2** — APIs stubs + `.env.example` + `settings.json` + `.gitignore`
- [x] **Phase 3** — 5 sous-agents + 6 slash commands
- [x] **Client Nando IT Solutions** — `brand.md`, `icp.md`, `historique.md` remplis avec données réelles sourcées (site + PDF + logo)
- [x] **Test end-to-end** — Stratège validé sur campagne réelle (brief Davide)
- [ ] **Brancher APIs** — remplacer stubs par appels réels quand tokens dispos

Voir [CLAUDE.md](CLAUDE.md) pour la doc complète du système.

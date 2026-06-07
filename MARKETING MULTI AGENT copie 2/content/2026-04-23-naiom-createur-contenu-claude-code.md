---
client: naiom
agent: createur-contenu
date: 2026-04-23
version: 1
statut: draft
source: "Produit depuis la plateforme NAIOM"
titre: "Claude code"
---
J'ai assez d'information pour produire un carrousel de qualité. Je génère le livrable maintenant.# Carrousel LinkedIn — Claude Code : Skills, MCP & CLAUDE.md

---

## Contexte
Campagne d'éducation sur l'écosystème Claude Code. Audience : devs, tech leads, builders IA. Angle : la majorité des utilisateurs n'exploitent qu'une fraction du système.

## Framework utilisé
**PAS** — le problème ("tu l'utilises comme un copilote basique") est immédiatement reconnaissable pour l'audience, l'agitation vient des slides de comparaison, la solution se déroule brique par brique.

## Hook — variante A *(la plus forte)*
> Vous utilisez Claude Code comme un copilote. C'est une erreur.

## Hook — variante B
> 90 % des devs n'ont jamais ouvert `.claude/skills/` — voici ce qu'ils ratent.

---

## Deck carrousel

```markdown
# Vous utilisez Claude Code comme un *copilote*.
C'est une erreur. C'est un système d'agents complet — voici ses 3 briques fondamentales.

## [toc] Ce que vous allez apprendre
1. CLAUDE.md — la mémoire permanente du projet
2. Skills — les comportements sur mesure
3. MCP — les connexions vers l'extérieur

## [valuechain] Les 3 briques s'alimentent entre elles
HUB: CLAUDE.md | Contexte permanent chargé à chaque session
- Skills | Lisent CLAUDE.md pour respecter vos conventions
- MCP Servers | Étendent les outils disponibles au runtime
- Subagents | Héritent du contexte, travaillent en parallèle

## CLAUDE.md — la *mémoire* que Claude relit à chaque session
Un fichier Markdown à la racine du projet. Il charge : stack technique, standards de code, commandes de build, patterns à respecter. Sans lui, Claude repart de zéro à chaque conversation.

## [flow] Ce que vous mettez dans CLAUDE.md
R · G · C — trois blocs, toujours.

1. Stack — Frameworks, librairies, versions utilisées
2. Conventions — Nommage, structure des dossiers, style de code
3. Commandes — `npm run dev`, `npm run lint`, `npm run test`

## [compare] CLAUDE.md *mal* vs *bien* utilisé
Même projet. Résultat radicalement différent.

LEFT: ✗ Sans CLAUDE.md
- Claude ignore votre stack
- Propose des patterns génériques
- Reformate votre code à sa sauce

RIGHT: ✓ Avec CLAUDE.md
- Connaît vos conventions dès la 1re ligne
- Respecte votre architecture sans qu'on lui demande
- Cohérent sur 100 fichiers comme sur 1

## Skills — des *comportements* réutilisables à la demande
Un dossier `.claude/skills/explain-code/SKILL.md`. Le champ `name` devient une commande `/explain-code`. Claude peut l'invoquer seul si la tâche correspond — ou vous l'appelez manuellement.

## [orgchart] Anatomie d'un Skill Claude Code
ROOT: SKILL.md | Unité de comportement | Chargée à la demande
- Frontmatter | name · description · context | Contrôle l'invocation
- Instructions | Prompt XML structuré | Définit le comportement exact
- Scripts | Bash optionnels | Exécutent des actions système

## [matrix] Quand utiliser un Skill vs une instruction directe
X: Fréquence d'usage | rare | fréquent
Y: Complexité | simple | complexe
TL: À oublier
TR: → Skill prioritaire
BL: Instruction directe
BR: → Skill ou Hook

## MCP — le *protocole* qui connecte Claude à tout le reste
Model Context Protocol : standard universel pour brancher GitHub, bases de données, APIs, Playwright, Figma… Claude voit leurs outils comme des commandes natives `/mcp__github__create-pr`.

## [pillars] 3 usages MCP qui changent le workflow
### Playwright MCP
Tests automatisés comme un vrai QA — Claude navigue, clique, vérifie. Zéro script à écrire à la main.

### GitHub MCP
PRs, issues, review directement depuis Claude Code — sans quitter le terminal ni ouvrir le navigateur.

### Base de données MCP
Requêtes SQL, exploration de schéma, debug de données en prod — en langage naturel, résultats instantanés.

## [stat] L'impact réel
10 %
C'est la fraction de Claude Code utilisée par la majorité des devs
Skills + MCP + CLAUDE.md = passer de l'autocomplete à l'orchestration d'agents complète.

## [thanks] *Approfondissez* — les ressources complètes
Guide complet avec exemples de CLAUDE.md, templates de Skills et liste MCP testés.
- alexop.dev/posts/understanding-claude-code-full-stack/
- Save · Partage · Commentez votre stack
```

---

## Notes de production

- **13 slides** : couverture → `[toc]` → `[valuechain]` → 2 slides CLAUDE.md → `[flow]` → `[compare]` → 2 slides Skills → `[matrix]` → 2 slides MCP → `[stat]` → `[thanks]`
- **Slide `[valuechain]`** : hub CLAUDE.md en terracotta `#C94F3C`, nœuds Skills / MCP / Subagents en blanc
- **Slide `[matrix]`** : 4 quadrants effort × fréquence — positionner manuellement si le renderer nécessite un ajustement
- **Sources** : [alexop.dev](https://alexop.dev/posts/understanding-claude-code-full-stack/) · [code.claude.com/docs](https://code.claude.com/docs/en/skills)

---

📁 **Fichier** : `content/2026-04-22-naiom-linkedin-carrousel-claude-code.md`
**Résumé** : Carrousel 13 slides sur l'écosystème Claude Code — CLAUDE.md, Skills, MCP — structuré PAS, avec 3 schémas (valuechain, orgchart, matrix) pour visualiser les relations entre briques.
**Suggestion** : passer au **Designer** pour la génération PNG via le pipeline `/api/carousels/generate` — la slide `[valuechain]` est la pièce maîtresse, à vérifier en premier.

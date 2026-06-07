---
description: Lance une campagne marketing complète — chaîne Stratège → Créateur → Designer → Présentateur
argument-hint: [objectif et contraintes, ex. "lancement offre IA pour PME, budget 3k€, T2 2026, LinkedIn + YT"]
---

Lance une **campagne complète** en enchaînant les 4 sous-agents dans l'ordre défini par CLAUDE.md §5.

**Demande du user** : $ARGUMENTS

## Workflow à exécuter — séquentiel (les étapes sont dépendantes)

### Étape 1 — Stratège
Invoque `strategiste` avec la demande du user. Il produit le brief dans `briefs/{AAAA-MM-JJ}-{client}-{slug}.md`.

**→ Résume au user (1-2 phrases) + chemin du brief + demande validation avant étape 2** (sur campagnes stratégiques, cf. CLAUDE.md §5).

### Étape 2 — Créateur de Contenu
Une fois le brief validé, invoque `createur-contenu` en lui passant le chemin du brief. Lui demander **3 à 5 pièces de contenu** couvrant les canaux définis dans le brief (typiquement : 1 post LinkedIn long + 1 Reel + 1 carrousel + 1 email ou thread).

**→ Résume : liste des fichiers créés dans `content/`.**

### Étape 3 — Designer
Invoque `designer` en lui passant le brief + la liste des contenus produits. Il couvre les visuels nécessaires à chaque pièce de contenu (hero campagne + visuels individuels si pertinent).

**→ Résume : chemin du fichier `prompts-images/...md` + nb total de variantes.**

### Étape 4 — Présentateur
Invoque `presentateur` en consolidant brief + contenus + prompts images pour produire un **deck de présentation client** dans `decks/`. Audience par défaut : client externe (à confirmer auprès du user si ambigu).

**→ Résume : chemin du deck + nb de slides + durée estimée.**

## Règles orchestrateur

- **Un agent à la fois**, séquentiel. Les étapes sont dépendantes — aucune parallélisation.
- **Ne jamais produire de contenu toi-même** — seulement router et consolider.
- Demander validation du user **entre chaque étape** pour les campagnes stratégiques.
- Si un agent pose une question (input manquant), la relayer au user et attendre sa réponse avant de continuer.
- **Post-lancement** : rappeler au user qu'à J+30 il pourra lancer `/analyse` pour obtenir rapport + plan 30j.

## Livrable final de l'orchestrateur

À la fin de la chaîne, poster un récapitulatif :
- 4 chemins de fichiers produits (brief, content(s), prompts, deck)
- Prochaine étape suggérée (production créatifs → publication → analyse à J+30)

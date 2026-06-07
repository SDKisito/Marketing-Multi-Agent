---
description: Invoque l'Analyste pour produire un rapport de performance + plan 30 jours
argument-hint: [période + plateformes, ex. "rapport mois de mars — LinkedIn + YouTube"]
---

Invoque le sous-agent `analyste` pour produire un rapport de performance et un plan d'optimisation 30 jours.

**Demande du user** : $ARGUMENTS

Rappels orchestrateur :
- Les données brutes doivent se trouver dans `analytics/raw/{plateforme}/`. Si absentes, l'agent **doit demander** au user où sont les exports — **ne jamais inventer de chiffres**.
- Lire `clients/nando-it/historique.md` pour baseline & benchmarks internes.
- Deux livrables obligatoires :
  1. `analytics/{AAAA-MM-JJ}-{client}-rapport-{periode}.md`
  2. `analytics/{AAAA-MM-JJ}-{client}-plan-optim-30j.md`
- Comparaison à une baseline obligatoire. Variations ≥ ±15 % mises en évidence.
- Plan 30j = 4 semaines × 2-3 actions **SMART** chacune.

Résume au user : 2 chemins de fichiers + 3 insights majeurs en bullets + 1 reco prioritaire pour cette semaine.

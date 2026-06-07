---
description: Invoque le Présentateur pour produire un deck slide-par-slide prêt pour Canva
argument-hint: [sujet + audience + nb slides, ex. "deck pitch client lancement offre IA — 10 slides"]
---

Invoque le sous-agent `presentateur` pour produire un deck slide-par-slide.

**Demande du user** : $ARGUMENTS

Inputs à passer au Présentateur :
- Source(s) : brief(s) de `briefs/`, rapport(s) de `analytics/`, ou contenu(s) de `content/` selon ce qui est pertinent.
- `clients/nando-it/brand.md` pour palette, typo et interdictions.
- Si audience ou nb de slides non précisés, l'agent doit poser la question.

Rappels orchestrateur :
- Livrable : `decks/{AAAA-MM-JJ}-{client}-{slug-sujet}.md`
- Structure narrative explicitée (SCQA / Minto / BAB / 5-slide / StoryBrand).
- Un bloc par slide : **Copy** + **Layout** + **Visuel** (référence prompt Designer ou template Canva) + **Durée** + **Notes orateur**.
- Max 15-30 mots par slide (hors notes orateur).
- Checklist export Canva en fin de fichier.

Résume au user : chemin du deck + nb de slides + durée totale estimée à l'oral + 1 reco.

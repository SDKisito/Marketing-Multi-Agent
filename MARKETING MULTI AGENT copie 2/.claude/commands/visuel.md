---
description: Invoque le Designer pour produire des prompts d'images Midjourney / Gemini / Ideogram
argument-hint: [sujet + formats souhaités, ex. "hero image lancement offre IA — 16:9 + 1:1 + 9:16"]
---

Invoque le sous-agent `designer` pour produire des prompts d'images prêts à l'emploi.

**Demande du user** : $ARGUMENTS

Inputs à passer au Designer :
- Lire obligatoirement `clients/nando-it/brand.md` (palette, typo, interdictions).
- Si un brief existe dans `briefs/` ou un contenu dans `content/`, le passer en contexte pour aligner le visuel au message.
- Si le format ou le nombre de variantes n'est pas précisé par le user, le Designer doit poser la question.

Rappels orchestrateur :
- Livrable : `prompts-images/{AAAA-MM-JJ}-{client}-{slug-campagne}.md`
- 3+ variantes par outil (Midjourney, Gemini, Ideogram)
- `--ar` précisé pour chaque variante Midjourney
- Si le visuel contient du texte → privilégier Ideogram et le signaler

Résume au user : chemin du fichier + nombre de variantes + reco de celle à tester en priorité.

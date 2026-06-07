---
description: Invoque le Créateur de Contenu pour rédiger un post, script ou copy
argument-hint: [format + angle, ex. "post LinkedIn long sur l'automatisation IA"]
---

Invoque le sous-agent `createur-contenu` pour rédiger un contenu social media.

**Demande du user** : $ARGUMENTS

Si un brief Stratège existe déjà (présent dans `briefs/`), le passer en input à l'agent. Sinon, l'agent lira `clients/nando-it/brand.md` et `icp.md` a minima — et posera une question au user si l'angle ou le format sont ambigus.

Rappels orchestrateur :
- Formats gérés : LinkedIn long, LinkedIn carrousel, Reel, TikTok, YouTube long, YouTube Short, thread, email.
- L'agent doit citer le framework utilisé (AIDA, PAS, BAB, Hook-Story-Offer, FAB…) et produire **2 variantes de hook** minimum.
- Livrable : `content/{AAAA-MM-JJ}-{client}-{format}-{slug}.md` avec frontmatter YAML complet.
- Respecter les interdictions de `brand.md` (ton, jargon interdit).

Résume au user : chemin du fichier + framework retenu + suggestion d'étape suivante (ex. « passer au Designer pour le visuel »).

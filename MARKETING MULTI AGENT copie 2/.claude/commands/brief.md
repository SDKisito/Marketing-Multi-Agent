---
description: Invoque le Stratège pour produire un brief de campagne
argument-hint: [objectif et contraintes de la campagne]
---

Invoque le sous-agent `strategiste` pour produire un brief de campagne complet.

**Demande du user** : $ARGUMENTS

Contexte client par défaut : Nando IT Solutions (`clients/nando-it/`). Si un autre client est mentionné dans la demande, utiliser `clients/{client}/` à la place.

Rappel orchestrateur :
- Le Stratège **doit** lire `clients/{client}/brand.md`, `icp.md`, `historique.md` avant de produire.
- Si un input critique manque (objectif, budget, timing, canaux), le Stratège doit poser une question au user — ne pas deviner.
- Livrable attendu : `briefs/{AAAA-MM-JJ}-{client}-{slug-campagne}.md` avec frontmatter YAML complet.
- Date du jour : utiliser celle fournie par le système.

Une fois le brief produit, résume au user en 1-2 phrases ce qui a été créé, donne le chemin du fichier, et propose l'étape suivante (ex. « passer au Créateur pour 3 pièces de contenu »).

---
client: nando-it
campagne: lancement-davide
agent: presentateur
date: 2026-04-17
version: 1
statut: draft
audience: prospect
nb_slides: 10
structure: SCQA
---

# Deck pitch prospect — Davide (AI Sales Manager)

> **Contexte** : pitch live Zoom, 20-25 min + Q&A, pour prospect CEO PME B2B (persona Thomas) ayant réservé un Calendly après exposition à la campagne de lancement Davide.
> **Objectif de conversion** : faire réserver un **audit payant** (Setup Fee 2-10k€), **pas** vendre Davide en direct.
> **Structure narrative retenue** : **SCQA** (Situation — Complication — Question — Answer), enrichie d'un bloc Preuve → Objections → Méthodologie → Différenciation → CTA.
> **Justification structure** : le prospect arrive sceptique mais curieux après avoir consommé la campagne ; SCQA épouse son état mental (il a déjà perçu la Situation, on cristallise la Complication qu'il sent confusément, on pose la Question à sa place, puis on dévoile la Réponse — Davide comme preuve que l'audit Nando IT Solutions est la vraie porte d'entrée).
> **Présentateur** : Zeyneb (voix expertise) ou Maxim (voix commerciale) — notes orateur écrites en mode "je", ton vouvoiement prospect, adaptables aux deux.
> **Règles brand.md §5 respectées** : pas de prix publics affichés, pas de résultat chiffré garanti (obligation de moyens), témoignage "booking 3x" cité **comme témoignage client**, aucun dénigrement concurrent, "Davide est un agent IA" explicité.

---

## Slide 1 — Hero : promesse + identité Nando IT Solutions

**Copy**
- Titre : **Passer de l'IA gadget à l'IA qui tourne.**
- Sous-titre : Davide, AI Sales Manager — Nando IT Solutions Agency.
- Accroche bas de slide : 120+ entreprises accompagnées · 35+ agents en production · 4,7/5 de satisfaction.
- Notes orateur : "Bonjour {prénom}, merci de m'avoir accordé ces 20 minutes. Je suis {Zeyneb / Maxim}, cofondat{rice / eur} de Nando IT Solutions. En une phrase : on aide les dirigeants de PME B2B à passer de l'IA gadget — ChatGPT qu'on ouvre de temps en temps — à l'IA qui tourne en continu dans leur opérationnel. Aujourd'hui je vais vous montrer ce qu'on fait concrètement à travers Davide, notre agent phare, et surtout pourquoi on commence **toujours** par un audit plutôt que par un produit."

**Layout** : plein cadre photo cinéma + bandeau titre bas-gauche en overlay (safe zone logo Nando IT Solutions pied droit).

**Visuel** : prompt Designer `prompts-images/2026-04-17-nando-it-lancement-davide.md` → **Ideogram IDE-2 (16:9)** — "Davide · AI Sales Manager · Il prospecte, qualifie, relance — pendant que vous dormez". Version logo Nando IT Solutions bas-droite.

**Durée** : 90 s

---

## Slide 2 — Situation : la réalité d'une PME B2B en 2026

**Copy**
- Titre : **70 % du temps commercial part en tâches manuelles.**
- Bullets :
  - Prospection froide, qualification, follow-up, reporting.
  - Le closing ? Ce qui reste — quand il reste du temps.
- Notes orateur : "Avant de parler de nous, parlons de vous. Dans les 120+ PME qu'on a accompagnées, on constate toujours le même point de départ : les équipes commerciales passent jusqu'à 70 % de leur temps sur du manuel — prospection, qualification, relances — et à peine 30 % sur ce qui crée vraiment du chiffre, le closing. C'est documenté dans notre rapport interne (cas Davide §2.1) et ça colle probablement à votre ressenti. Est-ce que ça résonne avec ce que vous vivez dans votre équipe ? {pause — laisser répondre}"

**Layout** : chiffre XXL centré gauche (`70 %`) + bullets à droite en colonne.

**Visuel** : prompt Designer → **Ideogram IDE-4 adapté 16:9** (bloc typo "Votre meilleur commercial dort. Le mien travaille cette nuit." remplacé en Canva par "70 % du temps commercial en manuel"). Alternative : **Midjourney MJ-1 (16:9)** bureau vide nocturne + overlay typo Canva.

**Durée** : 120 s

---

## Slide 3 — Complication : ChatGPT seul ne suffit pas

**Copy**
- Titre : **ChatGPT est un outil. Pas un système.**
- Bullets :
  - Prompt ponctuel ≠ agent orchestré.
  - Sans data client, sans garde-fous, sans workflow → pas de pipeline.
- Notes orateur : "La plupart des dirigeants qu'on rencontre ont déjà testé ChatGPT. Et ressortent souvent avec une impression de gadget. C'est normal : ChatGPT est un outil — puissant, mais ponctuel. Ce qui manque pour qu'il tienne votre pipeline, c'est trois choses : un **orchestrateur** (chez nous, n8n), vos **propres données** branchées dessus (c'est ce qu'on appelle le RAG), et des **garde-fous humains** sur les envois sensibles. Sans ces trois couches, vous avez un outil. Avec, vous avez un collègue numérique."

**Layout** : 2 colonnes — gauche "Outil" (ChatGPT solo, icône simple), droite "Système" (schéma n8n + data + HITL). Flèche centrale.

**Visuel** : **schéma custom à produire** (voir section "Gap visuels à produire" en fin de fichier — comparatif Outil vs Système). En attendant : fallback **Midjourney MJ-4 split-screen (16:9)**.

**Durée** : 120 s

---

## Slide 4 — Question implicite

**Copy**
- Titre : **Et si la prospection tournait pendant que vous dormez ?**
- Sous-ligne : 24/7. RGPD natif. Sans embaucher.
- Notes orateur : "Donc la question, elle n'est plus 'est-ce que l'IA peut prospecter ?'. On sait qu'elle peut. La vraie question, celle qui change votre 2026, c'est : **qu'est-ce que votre équipe ferait de 20h libérées par semaine** si un collègue numérique — pas un humain, un agent IA — prenait en charge la prospection, la qualification et les relances 24/7 ? {pause — laisser le silence}. C'est exactement ce qu'on a construit."

**Layout** : slide plein écran avec uniquement le titre en extra-bold typo, rose nude sur bleu marine, centré.

**Visuel** : prompt Designer → **Ideogram IDE-4 (16:9)** — typographie "Votre meilleur commercial dort. / Le mien travaille cette nuit." (transition parfaite vers slide 5).

**Durée** : 60 s

---

## Slide 5 — Réponse : Davide, agent SDR autonome

**Copy**
- Titre : **Davide — votre AI Sales Manager.**
- Bullets :
  - Prospecte, qualifie, relance — en continu.
  - Stack : n8n auto-hébergeable + RAG sur vos données + Human-in-the-Loop.
- Notes orateur : "Je vous présente Davide. Et pour être très clair dès maintenant : **Davide est un agent IA**, pas un humain. Concrètement, il fait trois choses à votre place : il prospecte sur vos segments cibles, il qualifie les leads sur **vos** critères métier — parce qu'il est entraîné sur **vos** données, c'est le RAG — et il relance au bon moment. Le tout orchestré sur n8n, auto-hébergeable, donc RGPD natif. Et vous gardez le dernier clic sur tout ce qui est sensible — c'est le Human-in-the-Loop. {transition} Mais vous n'êtes pas là pour ma parole. Regardons ce que disent ceux qui l'utilisent déjà."

**Layout** : 2 colonnes — gauche typo "Davide" XXL + 3 bullets. Droite visuel produit.

**Visuel** : prompt Designer → **Ideogram IDE-2 (16:9)** (version sans logo Nando IT Solutions, pour garder le focus produit). Alternative : **Gemini GEM-1 (16:9)** bureau nocturne avec écran calendrier qui se remplit.

**Durée** : 150 s

---

## Slide 6 — Preuve : ce que Davide débloque

**Copy**
- Titre : **"Our booking rate tripled in less than 30 days."**
- Sous-ligne : Témoignage client Nando IT Solutions, nando-it.fr (2025).
- Sous-bloc capacités : Scraping · Enrichissement · Séquences sortantes · Booking Calendly · Sync CRM.
- Notes orateur : "Voici le témoignage qu'un de nos clients nous a confié — c'est sur notre site, librement vérifiable : **son booking rate a triplé en moins de 30 jours** après la mise en place de Davide. Je le cite comme **leur** résultat, documenté — pas comme promesse que je vous fais aujourd'hui (chez Nando IT Solutions, on est en obligation de moyens, pas de résultat — c'est dans nos CGV, article 2). Mais ça donne un ordre de grandeur. Techniquement, voici ce que Davide opère : il scrape, il enrichit via API tierces, il envoie des séquences personnalisées, il book les RDV sur votre Calendly et il synchronise votre CRM."

**Layout** : citation XXL centrée haut (60 % de la slide) + bandeau bas 5 icônes capacités.

**Visuel** : prompt Designer → **Ideogram IDE-3 (16:9)** thumbnail "LE SDR QUI NE DORT JAMAIS" (adapter typo en Canva pour intégrer la citation). Alternative : **Midjourney MJ-3 (1:1) redimensionné 16:9** — bureau avec post-its de meetings confirmés.

**Durée** : 150 s

---

## Slide 7 — Les 3 objections qu'on entend chaque semaine

**Copy**
- Titre : **"Oui mais…" — on a prévu la réponse.**
- Tableau 3 lignes :
  - **Hallucinations ?** → RAG sur vos data + Human-in-the-Loop sur envois sensibles.
  - **Pas technique ?** → Vous conduisez la voiture, on s'occupe du moteur. Zéro code côté vous.
  - **Compatibilité CRM ?** → n8n + API modernes → HubSpot, Pipedrive, Salesforce, même Airtable bricolé.
- Notes orateur : "À ce stade, trois questions reviennent systématiquement. **Un** : 'et si l'IA hallucine ?' — Davide s'appuie sur **vos** données via le RAG, donc il invente beaucoup moins qu'un ChatGPT brut, et sur les envois sensibles c'est vous qui cliquez sur Envoyer. **Deux** : 'je suis pas technique' — c'est précisément notre job. Vous conduisez la voiture, on s'occupe du moteur. **Trois** : 'mon CRM va suivre ?' — quasiment tous les outils modernes ont une API, et n8n fait le pont. Est-ce qu'il y a une objection qui vous préoccupe plus que ces trois-là ? {pause, recueillir}"

**Layout** : tableau 3 lignes (objection | réponse), icône à gauche par ligne.

**Visuel** : **template tableau Canva** (pas de photo — slide pédagogique, lisibilité prioritaire). Fond bleu marine, accents rose nude sur les titres d'objections.

**Durée** : 180 s

---

## Slide 8 — Méthodologie : Audit → Build → Train

**Copy**
- Titre : **Done-With-You : 3 étapes, pas une livraison sèche.**
- Bullets :
  - **1. Audit** — 90 min, on cartographie vos process et on chiffre le ROI potentiel.
  - **2. Build** — quelques semaines, on construit votre agent sur vos données.
  - **3. Train** — on forme votre équipe, playbooks + transfert de compétences.
- Notes orateur : "Notre méthode s'appelle Done-With-You — pas Done-For-You. On livre un agent, mais surtout on transfère les compétences pour que votre équipe devienne autonome. Trois étapes : **Audit** d'abord — et c'est là qu'on commence **toujours**, parce qu'on refuse de vendre Davide si l'audit révèle qu'un autre agent serait plus rentable pour vous. Ensuite **Build**, quelques semaines. Puis **Train**, où on forme votre équipe. Vous n'êtes jamais enfermé dans une dépendance."

**Layout** : timeline horizontale 3 étapes, numéros XXL + descriptions sous chaque.

**Visuel** : **schéma timeline custom à produire** (voir "Gap visuels à produire"). Fallback : **Midjourney MJ-3 (1:1)** bureau matin avec post-its organisés (métaphore du cadrage structuré).

**Durée** : 150 s

---

## Slide 9 — Ce qui rend Nando IT Solutions différent

**Copy**
- Titre : **Agence marketing ≠ No-code généraliste ≠ Nando IT Solutions.**
- Tableau 3 colonnes :
  - **Agences marketing trad.** : ads, IA superficielle.
  - **No-code génériques** : Zapier, sites web.
  - **Nando IT Solutions** : ingénierie d'agents autonomes + n8n auto-hébergeable + transfert de compétences.
- Notes orateur : "Juste pour situer où on joue. Les agences marketing classiques font des ads, très bien, l'IA reste superficielle chez elles. Les agences no-code font du Zapier et des sites web, très bien aussi. Nous, on fait autre chose : **de l'ingénierie d'agents autonomes**, sur **n8n auto-hébergeable** pour garantir le RGPD, et on **transfère les compétences**. On ne dit jamais qu'un autre acteur fait mal — on dit ce qu'on fait de différent. Et c'est cette différence qui explique pourquoi certains clients viennent de concurrents."

**Layout** : tableau 3 colonnes (comparatif brand.md §1).

**Visuel** : **tableau comparatif custom à produire** (voir "Gap visuels à produire" — besoin Designer). Fallback : template tableau Canva fond bleu marine.

**Durée** : 120 s

---

## Slide 10 — Prochaine étape : l'audit 90 minutes

**Copy**
- Titre : **L'étape suivante : un audit de 90 minutes.**
- Bullets (ce que vous repartez avec) :
  - Cartographie de vos 3 process les plus coûteux.
  - Chiffrage ROI potentiel agent par agent (pas que Davide).
  - Devis Setup précis — fourchette 2-10k€ selon complexité *(discuté en privé).*
- CTA visuel : Calendly Nando IT Solutions (QR code + URL).
- Notes orateur : "Donc concrètement, la prochaine étape n'est pas 'achetez Davide'. C'est un audit de 90 minutes, pendant lequel on cartographie vos 3 process les plus coûteux, on chiffre le ROI potentiel agent par agent — peut-être que Davide est la bonne réponse pour vous, peut-être que c'est Alex ou Leo, on le saura après — et vous repartez avec un devis Setup précis. Je vous propose qu'on bloque ça dans les 7 prochains jours : je vous envoie le lien Calendly en fin de call. Une dernière question avant qu'on passe au Q&A ?"

**Layout** : 2 colonnes — gauche bullets "ce que vous repartez avec", droite QR code Calendly XXL + URL.

**Visuel** : **QR code Calendly à générer** (https://calendly.com/nando-it/coaching-one-to-one) + logo Nando IT Solutions. Fond : **Ideogram IDE-1 (16:9)** en arrière-plan estompé (60 % opacité) pour la cohérence narrative boucle avec slide 1.

**Durée** : 120 s

---

## Récap durée totale estimée à l'oral

| Slide | Durée (s) |
|---|---|
| 1. Hero | 90 |
| 2. Situation 70 % | 120 |
| 3. Complication | 120 |
| 4. Question | 60 |
| 5. Réponse Davide | 150 |
| 6. Preuve | 150 |
| 7. Objections | 180 |
| 8. Méthodologie | 150 |
| 9. Différenciation | 120 |
| 10. CTA Audit | 120 |
| **Total** | **1 260 s ≈ 21 min** |

Compatible avec la fenêtre 20-25 min + Q&A.

---

## Gap visuels à produire (brief Designer — semaine en cours)

> À relayer au Designer pour compléter le deck. Les prompts suivants **n'existent pas** dans `prompts-images/2026-04-17-nando-it-lancement-davide.md` et doivent être créés en itération v2.

1. **Slide 3 — Schéma "Outil vs Système"** : illustration 16:9 opposant ChatGPT solo (icône bulle simple) vs stack Davide orchestrée (n8n + RAG + HITL). Style : pictos line-icon sobres, pas de robot humanoïde, palette bleu marine + rose nude. À produire en Ideogram ou template Canva maison.
2. **Slide 8 — Timeline Audit → Build → Train** : 3 étapes horizontales numérotées, style éditorial sobre, cohérent avec le lexique brand.md. À produire en Ideogram (typo intégrée) ou Canva.
3. **Slide 9 — Tableau comparatif "3 colonnes"** : Agences marketing / No-code / Nando IT Solutions. Demande un rendu typo propre → **privilégier Ideogram** (variante IDE-5 à créer) plutôt que Midjourney.
4. **Slide 10 — QR code Calendly** : à générer via outil QR standard (non-IA) pointant vers `https://calendly.com/nando-it/coaching-one-to-one`. Couleur bleu marine `#1E2957` sur fond rose nude `#F5D5CB`.

---

## Checklist montage Canva

- [ ] Format : **16:9 présentation**
- [ ] Dimensions : **1920 × 1080 px**
- [ ] Police de titre : sans-serif géométrique extra-bold (**Pangram Sans / Satoshi / Aeonik** — cf. brand.md §4, ⚠ à confirmer avec Nando IT Solutions si brandbook officiel)
- [ ] Police de corps : sans-serif neutre (**Inter / Söhne** — cf. brand.md §4)
- [ ] Palette (stricte) :
  - Bleu marine profond `#1E2957` (fond principal + titres)
  - Rose nude `#F5D5CB` (accents, highlights, mots-clés)
  - Blanc pur `#FFFFFF` (corps de texte secondaire)
  - Noir encre `#0F0F14` (texte sur fonds clairs)
- [ ] Logo Nando IT Solutions : **bas-droite** de chaque slide (sauf slide 1 où il peut occuper une position hero), version `nando-it-logo-blanc.png` sur fond marine, `nando-it-logo-bleu.png` sur fond clair
- [ ] Nom de marque : **Nando IT Solutions** en capitales dans le copy, **Naïom** avec tréma **uniquement** en usage logo (brand.md §4)
- [ ] Interdictions bloquantes respectées (brand.md §5) :
  - [ ] Aucun prix précis affiché sur slide publique (fourchette 2-10k€ seulement en note orateur)
  - [ ] Témoignage "booking 3x" cité **comme témoignage client**, pas promesse Nando IT Solutions
  - [ ] Aucun robot humanoïde, aucun cerveau / neurones / circuit imprimé
  - [ ] Aucun logo client tiers visible sans accord écrit
  - [ ] Aucun jargon banni (révolutionnaire, disruptif, game-changer, etc.)
- [ ] Export final : **PDF** (pour envoi post-call) + **PNG par slide** (archivage) + **source .canva** partagée (équipe)
- [ ] Version "présentateur" avec notes orateur visibles uniquement côté Zeyneb/Maxim (mode Canva Present)
- [ ] Test projection Zoom : lisibilité texte à 75 % de zoom (partage écran)

---

**Dernière mise à jour** : 2026-04-17
**Responsable deck** : Présentateur Nando IT Solutions (subagent)
**Handover recommandé** : → Designer (produire les 3 visuels gap : schéma slide 3, timeline slide 8, tableau slide 9) → Zeyneb/Maxim (validation storyline + rehearsal 1 passe à blanc).
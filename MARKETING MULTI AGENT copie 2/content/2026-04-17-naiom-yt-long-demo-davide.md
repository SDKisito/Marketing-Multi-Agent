---
client: naiom
campagne: lancement-davide
agent: createur-contenu
format: yt-long
framework: StoryBrand + AIDA
date: 2026-04-17
version: 1
statut: draft
---

# Script YouTube longue — Angle C "Démo live : je vous montre Davide en prod"

## 1. Contexte

Campagne "Lancement de Davide", semaine 17 (publication prévue **vendredi 24 avril**, cf. brief §8). Chaîne **Zeyneb Madi** (YouTube — voix technique didactique, audience pairs + dirigeants en veille IA). Tutoiement autorisé (brand §3 + brief §9-8 — audience communauté YouTube de Zeyneb, pas prospect B2B direct). Pièce pivot de la campagne : seule pièce vidéo longue + source des 3-4 shorts dérivés S18-S20.

**Durée cible** : 12-18 minutes (format "je montre Davide en prod + explique le workflow n8n").

## 2. Framework utilisé

**StoryBrand (narration)** + **AIDA (description + hook)**.
- **StoryBrand** structure la vidéo : Thomas (héros) → problème pipeline → Zeyneb (guide) → plan Audit/Build/Train → CTA Calendly → enjeu évité / succès visé.
- **AIDA** structure le hook scripté 30-60s (Attention-Intérêt-Désir-Action) et la description YouTube (SEO + conversion).

Choix justifié : la vidéo longue demande une colonne narrative solide (StoryBrand) pour tenir 12-18 min ; le hook + la description demandent une mécanique de conversion courte (AIDA) pour scroll-stop et CTR.

## 3. Hook vidéo — variante A (recommandée, scriptée mot-à-mot)

> **On m'a demandé 100 fois à quoi ressemble vraiment un AI Sales Manager. Aujourd'hui je vous montre.**

*(18 mots — promesse + preuve sociale implicite + cadrage "je montre")*

## 4. Hook vidéo — variante B

> **Pendant que tu regardes cette vidéo, Davide envoie 12 messages LinkedIn. Je te montre comment.**

*(15 mots — urgence + preuve d'activité en temps réel)*

---

## 5. Hook scripté 30-60s (0:00 → 0:50) — mot-à-mot

### [0:00 — 0:03] — SCROLL-STOP ABSOLU (3 secondes)

**Plan** : gros plan écran — workflow n8n en exécution, badge **"RUNNING"** qui clignote.
**Voix Zeyneb (face caméra, ton direct)** :
> *"Pendant que tu regardes, lui, il travaille."*

**Texte à l'écran** (gros, centré) : **RUNNING — 12 messages envoyés ce matin.**

*(7 mots — les 3 premières secondes DOIVENT cadrer l'activité de Davide live. Pas d'intro, pas de logo, pas de "salut c'est Zeyneb" — on retarde tout ça.)*

### [0:03 — 0:15] — INTÉRÊT (promesse + preuve sociale)

> *"On m'a demandé 100 fois cette année : 'À quoi ressemble vraiment un AI Sales Manager ? Pas le concept, le truc qui tourne.'"*
>
> *"Aujourd'hui je vous montre. On va ouvrir n8n, je vais vous faire voir Davide en prod — c'est l'agent qu'on a construit chez NAIOM pour tripler le pipeline sans embaucher. Un de nos clients nous a dit que son booking rate avait triplé en moins de 30 jours. Je vous montre ce qu'il y a derrière."*

### [0:15 — 0:35] — DÉSIR (preview du pay-off)

> *"Dans les 15 prochaines minutes, tu vas voir :"*
>
> - *"Le workflow n8n complet, nœud par nœud."*
> - *"Un message LinkedIn envoyé par Davide en live — son vrai copy, pas un exemple fake."*
> - *"Le garde-fou Human-in-the-Loop qui empêche les conneries."*
> - *"Et comment on branche ça sur un CRM en 3 clics."*

### [0:35 — 0:50] — ACTION (promesse de payoff + contrat avec le viewer)

> *"Si tu es dirigeant de PME et que tu as testé ChatGPT sans savoir comment systématiser : cette vidéo est faite pour toi. Reste jusqu'au bout, je t'ai mis en description un formulaire si tu veux qu'on te construise un Davide-like."*
>
> *"On commence."*

**[TRANSITION — jingle court 2s + titre vidéo à l'écran]**

---

## 6. Structure chapitrée — 5 chapitres avec timestamps

> Les timestamps sont des cibles de montage. À ajuster après captation.

### Chapitre 1 — `[00:50]` "C'est quoi exactement Davide ?" (90-120s)

**Objectif** : cadrer la catégorie "agent" vs "chatbot" sans jargon.

**Points à couvrir** :
- Définition simple : *"Davide est un agent IA. C'est un programme qui a un objectif (prospecter, qualifier, relancer), des outils (LinkedIn, email, CRM), et des règles (ne jamais envoyer sans garde-fou)."*
- Rappel brand : *"Ce n'est pas un humain. C'est pas ChatGPT non plus. C'est un agent orchestré sur n8n."* **[interdiction personnification §5-5 respectée]**
- Métaphore "collègue, pas outil" (reprend Angle B du carrousel Maxim — cohérence campagne).
- Carton texte à l'écran : **"Agent = objectif + outils + garde-fous."**

### Chapitre 2 — `[02:30]` "Démo live : le workflow n8n de Davide" (4-5 min, cœur de la vidéo)

**Objectif** : ouvrir n8n, dérouler le workflow Davide nœud par nœud.

**Démo à l'écran** (enregistrement écran commenté) :
1. **Trigger** : cron quotidien 6h30 → "Davide se réveille."
2. **Node 1 — Fetch leads** : connexion CRM (HubSpot/Pipedrive dans l'exemple) → récupère les leads nouveaux ou à relancer.
3. **Node 2 — Qualification RAG** : Davide interroge la base de données client (offres, cas d'usage, tarifs) pour scorer le lead sur les critères fournis par Thomas. Montrer le prompt système à l'écran.
4. **Node 3 — Génération message** : LLM (GPT-4o ou Claude) rédige un premier touch personnalisé basé sur le profil LinkedIn + la donnée RAG.
5. **Node 4 — Human-in-the-Loop** : le message est envoyé dans un Slack `#davide-review` où Zeyneb (ou le client) valide d'un clic avant envoi. **Montrer le slack en live avec un message en attente.**
6. **Node 5 — Envoi LinkedIn** : une fois validé, Davide poste via API + tag dans le CRM "touché par Davide - 2026-04-24".
7. **Node 6 — Follow-up scheduler** : si pas de réponse J+3, relance auto (avec validation humaine à nouveau).

**Voice-over Zeyneb** (extraits) :
> *"Tu vois le nœud 4 ? C'est le Human-in-the-Loop. Davide prépare, mais c'est le dirigeant qui clique sur Envoyer. Ça, c'est le garde-fou qui fait qu'on n'a pas d'hallucination catastrophique chez un vrai client."*

> *"Le RAG — je vais faire une vidéo dédiée là-dessus plus tard — c'est ce qui fait que Davide parle comme ton entreprise, pas comme un ChatGPT générique."*

**Timestamp pinné** : `[02:30]` en épingle, c'est là que l'audience "workflow n8n" vient.

### Chapitre 3 — `[07:30]` "Un vrai message envoyé par Davide" (2-3 min)

**Objectif** : montrer un cas concret, sans fake.

**Démo à l'écran** :
- Capture d'écran LinkedIn d'un message réel envoyé par Davide (profil anonymisé si pas d'accord client — **brand §5-6**).
- Décomposition : hook personnalisé (nom + contexte entreprise), corps court, CTA clair.
- Comparaison avec un message ChatGPT "brut" (même input, mais sans RAG, sans workflow) → montrer la différence qualitative.

**Voice-over** :
> *"Regarde la différence. Le message de gauche, c'est ChatGPT en solo avec un prompt générique. Celui de droite, c'est Davide avec le RAG branché sur la data du client. Devine lequel obtient des réponses."*

> *"Important : je ne te dis pas que Davide va tripler TON booking. Un de nos clients l'a dit — c'est son résultat à lui, on est en obligation de moyens, pas de résultat. Mais tu vois la mécanique."*

**[règle brand §5-2 respectée — témoignage attribué + disclaimer obligation de moyens]**

### Chapitre 4 — `[10:30]` "Les 3 objections que j'entends tout le temps" (2-3 min)

**Objectif** : traiter O1/O2/O4 en mode franc.

1. **"L'IA va halluciner et nuire à mon image."** → Réponse : RAG + HITL + supervision continue. Montrer à l'écran un log de messages bloqués par HITL.
2. **"Je ne suis pas technique."** → Réponse : *"Tu n'as pas besoin de coder. On fait l'Audit, on Build, on te Train. Tu pilotes via tes outils (email, Slack). Vous conduisez la voiture, nous on s'occupe du moteur."* **[citation brand §3 — PDF §4.2]**
3. **"Compatible avec mon CRM ?"** → *"n8n + API : quasi tout CRM moderne se branche. Pour les cas tordus (ERP legacy), on a des contournements CSV/email."*

**Pas de traitement O3 "combien ça coûte"** en vidéo publique (brand §5-1). Mention neutre : *"Pour le pricing, c'est en conversation — 30 min sur le Calendly."*

### Chapitre 5 — `[13:00]` "Comment ça se passe si tu veux un Davide-like" (2 min)

**Objectif** : cadrer la méthode DWY + CTA.

**Plan Audit → Build → Train** (StoryBrand) :
1. **Audit** — on regarde ton CRM, ton process, ton pipeline actuel. 1 call, 30-45 min.
2. **Build** — on construit TON agent (pas un template). Quelques semaines selon complexité.
3. **Train** — on te forme. Toi + ton équipe. Transfert de compétences, pas dépendance.

**Fourchette mentionnée** : *"Setup entre 2k€ et 10k€ selon complexité, plus un retainer mensuel maintenance. Le chiffrage précis, c'est en call de découverte."* **[brand §5-1 — fourchette OK car déjà publique sur PDF §4.1]**

**Enjeu évité / succès visé (StoryBrand clôture)** :
> *"Si tu continues à laisser mourir les leads dans l'inbox, dans 6 mois tu seras au même point avec 2 SDR de plus à payer. Si tu prends 30 min pour regarder si Davide peut tenir ton outbound, tu sauras au moins si c'est pour toi ou pas."*

---

## 7. CTA fin de vidéo `[15:00]` — 30-45s

**Script mot-à-mot** :

> *"Trois actions, par ordre d'engagement :"*
>
> *"1. **Si tu veux qu'on te construise un Davide-like**, le formulaire est en description. Tu remplis, Maxim (notre CEO) te rappelle."*
>
> *"2. **Si tu veux 30 min pour qu'on regarde ton pipeline ensemble**, le Calendly NAIOM est aussi en description."*
>
> *"3. **Si t'es là pour apprendre** : like, abonne-toi, et lâche-moi en commentaire sur quel agent tu veux que je fasse la prochaine démo — Lina (content), Alex (support), Maya (RH) ? Je fais le plus demandé."*
>
> *"Merci d'avoir regardé. On se retrouve sur le prochain."*

**[Outro 5s : logo NAIOM + jingle + carte "S'abonner" + carte "Calendly"]**

---

## 8. Titres YouTube A/B (2 variantes optimisées CTR)

### Titre A (recommandé)

> **Je vous montre Davide en prod : le workflow n8n qui a triplé le booking d'un client**

*(86 caractères — mots-clés forts "workflow n8n", "booking", "prod", chiffre attribué au client)*

**Pourquoi A > B** : chiffre ancré (CTR historiquement supérieur), mots-clés SEO denses ("workflow n8n" + "booking"), cadrage "en prod" = promesse démo live.

### Titre B

> **AI Sales Manager : ce qu'il y a vraiment dans un agent IA de prospection (démo n8n)**

*(82 caractères — SEO "AI Sales Manager" + "agent IA prospection" + "n8n")*

### Miniature suggérée (brief designer)

**Concept** : split-screen 16:9 — à gauche écran n8n avec workflow visible (nœuds + flèches) ; à droite Zeyneb plan américain regardant caméra, expression "regarde ça". Texte overlay bleu marine + jaune contrasté : **"DAVIDE EN PROD"** en gros, sous-titre **"workflow n8n complet"**. Pas de robot humanoïde, pas de photo-stock. **[brand §5-7/8]**

---

## 9. Description YouTube (~280 mots, SEO-optimisée)

---

**Davide, c'est l'agent IA SDR qu'on a construit chez NAIOM pour automatiser la prospection LinkedIn et email de nos clients PME B2B.** Dans cette vidéo, je t'ouvre n8n et je te montre le workflow complet : comment Davide qualifie les leads avec du RAG, comment le Human-in-the-Loop empêche les hallucinations, et comment on branche ça sur un CRM comme HubSpot ou Pipedrive.

Un de nos clients nous a confié que son booking rate avait triplé en moins de 30 jours — c'est son résultat, documenté. On est en obligation de moyens chez NAIOM, pas de résultat. Mais la mécanique derrière, c'est ce que je te montre ici.

**Au programme :**
- [00:00] Hook — Davide travaille pendant que tu regardes
- [00:50] C'est quoi un agent IA SDR (vs ChatGPT)
- [02:30] Démo live du workflow n8n de Davide
- [07:30] Un vrai message envoyé par Davide
- [10:30] Les 3 objections que j'entends tout le temps
- [13:00] Comment on te construit un Davide-like
- [15:00] CTA + prochaines vidéos

**Liens utiles** :
- Formulaire "Je veux un Davide-like" : https://naiomagency.com/davide (à vérifier)
- Calendly NAIOM (30 min découverte) : https://calendly.com/naiom/coaching-one-to-one?utm_source=yt&utm_campaign=davide&utm_medium=demo-long
- Site NAIOM : https://naiomagency.com

**À propos** : Zeyneb Madi, CTO chez NAIOM Agency. On construit des agents IA autonomes et des workflows n8n pour PME B2B — audit, build, train (Done-With-You).

**Mots-clés** : agent IA SDR, automatisation prospection, n8n, agent LinkedIn, AI Sales Manager, workflow n8n, RAG, Human-in-the-Loop, agent IA prospection, IA pour PME.

#AgentIA #n8n #SalesAutomation #PME #AIAgents

---

## 10. Pinned comment suggéré

> **Épinglé — Zeyneb Madi** :
>
> Quelques infos qui reviennent souvent en commentaire, je mets tout ici :
>
> **1. Le chiffre "booking triplé"** : c'est le résultat d'UN client, documenté. Pas une promesse NAIOM. On est en obligation de moyens, pas de résultat (nos CGV le précisent).
>
> **2. Le prix** : setup entre 2k€ et 10k€ selon complexité + retainer mensuel. Chiffrage précis en call de découverte, pas en commentaire.
>
> **3. Compatible avec quel CRM ?** : HubSpot, Pipedrive, Salesforce, Airtable — et globalement tout ce qui a une API. Pour les cas tordus, on trouve (CSV, emails).
>
> **4. Et si je veux un Davide-like ?** : formulaire en description. Maxim (CEO) vous rappelle.
>
> **5. La prochaine vidéo** : vous voulez que je montre **Lina** (content), **Alex** (support) ou **Maya** (RH) ? Votez en commentaire, je fais le plus demandé.
>
> Merci pour les vues 🙏

## 11. Notes de production

### Tournage

- **Setup** : 2 caméras (face + plan écran) OU 1 caméra face + enregistrement écran séparé monté en split.
- **Durée brute à capter** : viser 25-30 min bruts pour monter 12-18 min nets.
- **Matériel montré à l'écran** : n8n en live, Slack `#davide-review`, capture LinkedIn d'un message Davide (anonymisé si pas d'accord client — **brand §5-6**), CRM démo.
- **Disclaimers visuels obligatoires** :
  - Carton 2s au chapitre 3 : *"Témoignage client — résultats variables. Obligation de moyens."*
  - Carton 2s au chapitre 5 : *"Fourchettes indicatives — chiffrage précis en call."*

### Règles dures respectées

- **Français, tutoiement YouTube autorisé** (brand §3 + brief §9-8).
- **Pas de dénigrement ChatGPT** — on différencie par la mécanique (chapitre 1 + chapitre 3), pas en cassant l'outil (brand §5-3).
- **Pas de prix fixe public** — fourchette 2k-10k€ OK car déjà publique sur PDF §4.1 (brand §5-1).
- **Pas de résultat garanti** — le "booking triplé" est cité 3 fois dans la vidéo, toujours attribué au client + disclaimer obligation de moyens (brand §5-2).
- **Personnification** — chapitre 1 cadre explicitement "Davide = agent IA" + rappel chapitre 2 (brand §5-5).
- **Pas de logo client ni témoignage nominatif** sans accord — les captures sont anonymisées (brand §5-6/9).
- **Pas de jargon creux** — aucun usage de *révolutionnaire, disruptif, game-changer* (vérifié).

### Réutilisations prévues (brief §5)

3-4 shorts YouTube 30-60s à dériver pour S18-S20 :
- **Short #1** (S18) : extrait chapitre 2 — "1 workflow n8n en 45s" (démo accélérée).
- **Short #2** (S19) : extrait chapitre 4 — "'L'IA va halluciner' — ma réponse en 60s".
- **Short #3** (S20) : extrait hook 0:00-0:30 — "Pendant que tu regardes, lui, il travaille."
- **Short #4** (bonus) : extrait chapitre 3 — comparaison message ChatGPT vs Davide.

## 12. Recommandations visuel (à transmettre au Designer)

### Miniature YouTube (16:9 — 1280×720)

**Concept principal** : split-screen —
- Gauche (60 %) : capture n8n workflow en exécution, nœuds visibles, badge **"RUNNING"** en rose nude (`#F5D5CB`) sur fond bleu marine (`#1E2957`).
- Droite (40 %) : Zeyneb plan américain, expression engagée, pointant vers le workflow.

**Texte overlay** (extra-bold, sans-serif) :
- **Ligne 1 (grand)** : "DAVIDE EN PROD"
- **Ligne 2 (moyen)** : "workflow n8n complet"
- Couleurs : texte blanc `#FFFFFF` + contour rose nude, surligneur bleu marine.

**Interdictions** : pas de visage robot, pas de "cerveau IA" stock, pas de chiffre "3x" en gros (risque de promesse). **[brand §5-7/8 + §5-2]**

### Cards / end screens YouTube

- **Card chapitre 2** (`[02:30]`) : pop vers ressource externe "workflow n8n template" (à créer ou à retirer si non dispo).
- **End screen** : 2 vignettes — "Calendly NAIOM" + "Prochaine vidéo (Lina, Alex ou Maya selon votes)".

### Intro/outro animée

- **Intro 2s** : logo NAIOM (bulle rose + bleu) qui pulse + son bref.
- **Outro 5s** : logo + CTA "S'abonner" + "Calendly".

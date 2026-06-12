---
client: nando-it
campagne: lancement-davide
agent: designer
date: 2026-04-17
version: 2
statut: draft
formats: [4:5, 16:9, 9:16]
type: complements
outils: [ideogram, midjourney]
---

# Prompts visuels v2 — Compléments campagne "Lancement de Davide"

> **À lire en complément du v1** : `prompts-images/2026-04-17-nando-it-lancement-davide.md` (hero campagne — 11 variantes Midjourney/Gemini/Ideogram sur les 3 formats).
> Ce fichier **ne remplace pas** le v1. Il comble **4 gaps visuels** identifiés par le Créateur (carrousel Angle B + YouTube longue Angle C) et le Présentateur (deck pitch prospect) :
> 1. **Carrousel LinkedIn 8 slides** (4:5) — Angle B "ChatGPT vs Davide" pour Maxim
> 2. **Miniature YouTube** (16:9) — Vidéo démo longue Zeyneb "Davide en prod"
> 3. **3 covers Shorts YouTube / Reels** (9:16) — dérivés chapitres 2/3/4 de la vidéo longue
> 4. **4 schémas deck** (16:9) — slide 3 Outil-vs-Système, slide 8 Timeline, slide 9 Tableau concurrentiel, slide 10 QR Calendly

---

## 1. Direction artistique — rappel strict *(source `clients/nando-it/brand.md` §4 + §5)*

- **Palette binaire stricte** (bloquante sur tous les visuels de ce fichier) : bleu marine `#1E2957` + rose nude `#F5D5CB`. Appoint autorisé : blanc pur `#FFFFFF`, noir encre `#0F0F14`. **Toute dérive saumon/corail/magenta est à relancer** (cf. v1 Notes §6).
- **Typographie (Ideogram)** : sans-serif géométrique extra-bold (Pangram Sans / Satoshi / Aeonik-like), tracking resserré, aucun effet (pas de bevel, pas de drop shadow, pas de gradient).
- **Interdictions bloquantes** *(brand.md §5.7 + §5.8 + §5.2 + §5.3)* :
  - PAS de robot humanoïde, android, cyborg.
  - PAS de cerveau IA, neurones, synapses, réseau de nœuds "IA-cloud", circuit imprimé, matrix rain, hologramme.
  - PAS de photo-stock visible, corporate handshake, shutterstock lookalike.
  - PAS de chiffre "3x", "tripled", "booking triplé" en géant — le témoignage existe **dans le corps**, jamais en titre (risque promesse Nando IT Solutions).
  - PAS de dénigrement ChatGPT (on différencie, on ne casse pas).
  - PAS de logo client tiers visible.
- **Règle anti-personnification visuelle** : Davide n'est jamais représenté comme une personne ou une silhouette humaine. On représente son **activité** (workflow, messages, calendrier qui se remplit), pas son corps.

---

## Bloc 1 — Carrousel LinkedIn 8 slides (4:5, 1080×1350) — Angle B "ChatGPT vs Davide"

> **Source contenu** : `content/2026-04-17-nando-it-linkedin-carrousel-chatgpt-vs-davide.md`
> **Outil prioritaire** : **Ideogram** (texte intégré, typographie lisible, contrôle palette). `magic prompt: off` systématique.
> **Fallback Midjourney** : uniquement pour slides 4-5-6 si besoin d'un pictogramme stylisé (pas de texte). À éviter si le rendu typo Ideogram est propre.
> **Cadence visuelle** : rythme binaire bleu marine / rose nude (alterne scroll-stop vs respiration), pas d'image intérieure sauf 4-5-6 (3 blocs verticaux Feature-Avantage-Bénéfice avec un picto minimal).

### Slide 1 — HOOK (fond bleu marine plein, typo géante)

**Texte à afficher** : *"ChatGPT est un outil."* (ligne 1) / *"Davide est un collègue."* (ligne 2) / *"Pourquoi la différence change tout pour votre pipeline."* (sous-ligne fine)

#### Ideogram — IDE-C1

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid deep navy blue background #1E2957, no image, no photograph, no decoration. Extra-bold geometric sans-serif typography, tight tracking, centered vertically. Line 1 in white: "ChatGPT est un outil." (large, ~12% frame height). Line 2 in nude pink #F5D5CB: "Davide est un collègue." (same size, same weight, directly under line 1). Below with 60px gap, small thin sans-serif caption in white at 40% opacity: "Pourquoi la différence change tout pour votre pipeline." Very small wordmark "Nando IT Solutions" uppercase in white, bottom-center, tracking 200. typography: Pangram Sans or Aeonik extra-bold, flat, no shadow, no bevel, no gradient. text style: high contrast, editorial. magic prompt: off. No humanoid robot, no brain, no neural network, no stock photo, no logo decoration.
```

---

### Slide 2 — STORY 1 "L'outil" (fond rose nude, typo bleu marine)

**Texte à afficher** : *"Un outil, ça attend qu'on l'ouvre."* (titre) / corps 3 lignes : *"Vous ouvrez ChatGPT."* / *"Vous tapez un prompt."* / *"Vous obtenez une réponse."* / *"Utile. Ponctuel. Dépendant de vous."* (ligne finale, petit)

#### Ideogram — IDE-C2

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid nude pink background #F5D5CB, no photography, editorial typography layout. Title top-left area, extra-bold geometric sans-serif, color deep navy #1E2957: "Un outil, ça attend qu'on l'ouvre." (wraps on 2 lines, tight tracking). Below with 80px gap, three short body lines stacked, medium-bold sans-serif in navy: "Vous ouvrez ChatGPT." / "Vous tapez un prompt." / "Vous obtenez une réponse." Below with 40px gap, thin italic line: "Utile. Ponctuel. Dépendant de vous." Generous negative space. Small "2/8" slide counter top-right in navy, small "Nando IT Solutions" wordmark bottom-right in navy. typography: Pangram Sans or Aeonik. No images, no pictograms, no decoration. magic prompt: off. No humanoid robot, no brain, no stock photo.
```

---

### Slide 3 — STORY 2 "Le collègue" (fond bleu marine, typo blanc + rose nude)

**Texte à afficher** : *"Un collègue, ça travaille sans qu'on demande."* (titre) / *"Davide prospecte à 7h."* / *"Qualifie à 11h."* / *"Relance à 22h."* / *"Sur vos données. Avec vos critères. Selon votre process."*

#### Ideogram — IDE-C3

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid deep navy background #1E2957. Title top area, extra-bold geometric sans-serif in white, 2 lines, tight tracking: "Un collègue, ça travaille sans qu'on demande." Below with 100px gap, three body lines stacked, heavy weight sans-serif, color nude pink #F5D5CB: "Davide prospecte à 7h." / "Qualifie à 11h." / "Relance à 22h." Below with 60px gap, smaller white text at 80% opacity, lighter weight: "Sur vos données. Avec vos critères. Selon votre process." No image, no photography, no icon. Small "3/8" counter top-right in white, small "Nando IT Solutions" wordmark bottom-right in white. typography: Pangram Sans or Aeonik extra-bold. magic prompt: off. No humanoid robot, no brain, no neural network, no silhouette, no person, no stock photo.
```

---

### Slide 4 — FAB #1 "Orchestration n8n" (fond rose nude, 3 blocs verticaux)

**Texte à afficher** : *"FEATURE"* / *"Un agent orchestré sur n8n."* · *"AVANTAGE"* / *"Il tourne 24/7, branché sur votre CRM."* · *"BÉNÉFICE"* / *"Un client nous a confié : booking rate triplé en moins de 30 jours."*

> **Note brand-safety** : la citation témoignage reste **dans le corps** en taille modérée, jamais en titre géant. Les 3 en-têtes FEATURE/AVANTAGE/BÉNÉFICE sont les vrais titres.

#### Ideogram — IDE-C4

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid nude pink background #F5D5CB. Three stacked horizontal sections, equal thirds, separated by thin navy horizontal lines. Section 1 (top): small caps label "FEATURE" in navy #1E2957 with tight letter-spacing, followed by a medium extra-bold heading in navy: "Un agent orchestré sur n8n.". Section 2 (middle): label "AVANTAGE" small caps navy, heading extra-bold navy: "Il tourne 24/7, branché sur votre CRM.". Section 3 (bottom): label "BÉNÉFICE" small caps navy, body medium-weight navy in two lines, with the word "témoignage" italicized, reading: "Un client nous a confié : booking rate triplé en moins de 30 jours." (kept as body text, not a headline). Tiny "4/8" counter top-right, small "Nando IT Solutions" wordmark bottom-right. typography: extra-bold geometric sans-serif for headings, lighter weight for labels and body. magic prompt: off. No image, no photography, no icon, no pictogram, no humanoid robot, no brain, no chart.
```

#### Fallback Midjourney — MJ-C4 *(optionnel, si Ideogram typo pas propre — pictogramme à composer en Canva par-dessus)*

```
Minimal editorial illustration, aspect ratio 4:5, flat design, ultra-clean, single line-icon of three simple abstract workflow nodes connected by thin lines, centered, color deep navy #1E2957 line on nude pink background #F5D5CB, no text, no labels, no decoration, generous negative space, vector style. --ar 4:5 --v 6.1 --s 50 --no text, letters, humanoid robot, brain, circuit board, cyberpunk
```

---

### Slide 5 — FAB #2 "Human-in-the-Loop" (fond bleu marine, 3 blocs verticaux)

**Texte à afficher** : *"FEATURE"* / *"Human-in-the-Loop sur les envois sensibles."* · *"AVANTAGE"* / *"L'agent prépare. Vous cliquez sur Envoyer."* · *"BÉNÉFICE"* / *"Zéro message envoyé sans votre validation sur ce qui compte."*

#### Ideogram — IDE-C5

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid deep navy background #1E2957. Three stacked horizontal sections, equal thirds, separated by thin nude pink horizontal lines. Section 1 (top): small caps label "FEATURE" in nude pink #F5D5CB, heading extra-bold white: "Human-in-the-Loop sur les envois sensibles.". Section 2 (middle): label "AVANTAGE" nude pink, heading extra-bold white: "L'agent prépare. Vous cliquez sur Envoyer.". Section 3 (bottom): label "BÉNÉFICE" nude pink, body medium-weight white in two lines: "Zéro message envoyé sans votre validation sur ce qui compte.". Tiny "5/8" counter top-right in nude pink, small "Nando IT Solutions" wordmark bottom-right in nude pink. typography: Pangram Sans or Aeonik extra-bold for headings, lighter weight for labels. flat, no effects. magic prompt: off. No image, no photo, no icon, no pictogram, no humanoid robot, no brain, no hand, no person.
```

#### Fallback Midjourney — MJ-C5

```
Minimal editorial illustration, aspect ratio 4:5, flat vector, single thin line-icon: a simple checkmark inscribed in a square, centered, color nude pink #F5D5CB on deep navy #1E2957 background, no text, no decoration, generous negative space, clean geometric style, premium editorial feel. --ar 4:5 --v 6.1 --s 50 --no text, letters, humanoid robot, hand, stock icon, 3d render
```

---

### Slide 6 — FAB #3 "RAG data client" (fond rose nude, 3 blocs verticaux)

**Texte à afficher** : *"FEATURE"* / *"RAG auto-entraîné sur vos données."* · *"AVANTAGE"* / *"Davide lit votre CRM, vos offres, vos emails."* · *"BÉNÉFICE"* / *"Ses réponses ressemblent aux vôtres, pas à du ChatGPT générique."*

#### Ideogram — IDE-C6

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid nude pink background #F5D5CB. Three stacked horizontal sections, equal thirds, separated by thin navy horizontal lines. Section 1 (top): small caps label "FEATURE" in navy #1E2957, heading extra-bold navy: "RAG auto-entraîné sur vos données.". Section 2 (middle): label "AVANTAGE" small caps navy, heading extra-bold navy: "Davide lit votre CRM, vos offres, vos emails.". Section 3 (bottom): label "BÉNÉFICE" small caps navy, body medium-weight navy in two lines: "Ses réponses ressemblent aux vôtres, pas à du ChatGPT générique.". Tiny "6/8" counter top-right, small "Nando IT Solutions" wordmark bottom-right. typography: Pangram Sans or Aeonik. flat, no effects. magic prompt: off. No image, no photography, no humanoid, no brain, no database icon cliche, no server stack.
```

#### Fallback Midjourney — MJ-C6

```
Minimal editorial illustration, aspect ratio 4:5, flat vector, single thin line-icon: a simple document page with three horizontal lines and a small magnifier overlapping, centered, navy #1E2957 line on nude pink #F5D5CB background, clean geometric style, generous negative space, premium editorial. --ar 4:5 --v 6.1 --s 50 --no text, letters, humanoid robot, brain, neural network, stock photo
```

---

### Slide 7 — Objection (fond bleu marine, accent rose sur la réponse)

**Texte à afficher** : *"« Et si l'IA hallucine sur mon client ? »"* (citation entre guillemets, tête de slide) / *"Réponse honnête : sans garde-fous, oui, ça arrive."* / *"Avec RAG + Human-in-the-Loop + supervision continue, le risque devient marginal."* / *"Ce n'est pas magique. C'est de l'ingénierie."*

#### Ideogram — IDE-C7

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid deep navy background #1E2957. Top 35% of slide: large curly quote mark in nude pink #F5D5CB, followed by italic medium-weight quote in white: "Et si l'IA hallucine sur mon client ?". Horizontal thin nude pink line separator. Middle 50%: three stacked body lines, heavy weight sans-serif in white for first two lines, and the third line "Avec RAG + Human-in-the-Loop + supervision continue, le risque devient marginal." with the three technical terms "RAG", "Human-in-the-Loop", "supervision continue" highlighted in nude pink. Bottom 15%: tagline extra-bold in nude pink: "Ce n'est pas magique. C'est de l'ingénierie.". Tiny "7/8" counter top-right in nude pink, small "Nando IT Solutions" wordmark bottom-right in nude pink. typography: Pangram Sans or Aeonik, tight tracking. flat, no effects, no gradient. magic prompt: off. No image, no photo, no icon, no humanoid robot, no brain imagery.
```

---

### Slide 8 — CTA (fond rose nude, focus lien + signature)

**Texte à afficher** : *"On vous montre Davide en prod ?"* (titre) / *"30 minutes. Votre use case. Son workflow."* / *"DM « Davide » ou Calendly →"* / *"calendly.com/nando-it/coaching-one-to-one"* / *"— Maxim, CEO Nando IT Solutions"*

#### Ideogram — IDE-C8

```
Vertical LinkedIn carousel slide, aspect ratio 4:5 (1080x1350). Solid nude pink background #F5D5CB. Title top area, extra-bold geometric sans-serif in deep navy #1E2957, 2 lines, centered-left: "On vous montre Davide en prod ?". Below with 80px gap, medium-weight navy line: "30 minutes. Votre use case. Son workflow.". Below with 60px gap, navy solid button-like bar with white text: "DM « Davide » ou Calendly →". Below, URL in navy monospace-leaning weight: "calendly.com/nando-it/coaching-one-to-one". Bottom-right signature: "— Maxim, CEO Nando IT Solutions" in navy italic, small. Tiny "8/8" counter top-right. typography: Pangram Sans or Aeonik extra-bold for title, clean sans for URL. flat, no shadow, no gradient. magic prompt: off. No image, no photograph, no QR code, no humanoid robot.
```

---

**Récap Bloc 1** : **8 prompts Ideogram principaux** (1 par slide) + **3 fallbacks Midjourney** optionnels (slides 4-5-6) = **11 variantes**.

---

## Bloc 2 — Miniature YouTube (16:9, 1280×720) — 3 variantes A/B/C pour test CTR

> **Source contenu** : `content/2026-04-17-nando-it-yt-long-demo-davide.md` §12 + recommandation Créateur (split n8n + Zeyneb + overlay "DAVIDE EN PROD / workflow n8n complet").
> **Outil prioritaire** : **Ideogram** pour l'overlay texte lisible. **Midjourney** pour une base photo Zeyneb stylisée (fallback / test).
> **Enjeu CTR** : le texte doit être lisible à 240×135 px (preview mobile YouTube). Limiter à 3-5 mots grande taille + 1 ligne secondaire.
> **Zeyneb** : on ne génère pas son visage via IA (risque ressemblance + brand §5.9). On prévoit de **compositer sa photo réelle en post-production** dans Canva par-dessus le fond généré. Les prompts ci-dessous produisent donc le **fond + overlay texte**, pas Zeyneb elle-même. Une variante MJ stylisée est proposée pour référence de compo uniquement.

### Variante YT-1 — Split-screen n8n + espace Zeyneb (recommandée A)

#### Ideogram — IDE-YT1

```
YouTube thumbnail, aspect ratio 16:9 (1280x720). Left 55% of frame: stylized editorial illustration of an n8n workflow editor view, visible abstract workflow nodes connected by curved lines on a dark canvas, deep navy blue #1E2957 background, nodes drawn as rounded rectangles in nude pink #F5D5CB outlines, one node visibly highlighted with a small green "RUNNING" badge and a nude pink glow. Right 45% of frame: solid deep navy panel with stacked bold typography, extra-bold geometric sans-serif, tight tracking. Line 1 (largest, ~22% frame height), white: "DAVIDE". Line 2 (same size), nude pink #F5D5CB: "EN PROD". Line 3 (small, thin), white: "workflow n8n complet". Bottom-right corner: a reserved rectangular empty zone (roughly 180x200px) for post-production headshot insert — keep this area as a subtle lighter navy gradient. Small "Nando IT Solutions" wordmark top-right in white, small. No photograph of any person. No humanoid robot, no brain, no neural network, no generic AI illustration. magic prompt: off.
```

### Variante YT-2 — Full typo scroll-stop (recommandée B)

#### Ideogram — IDE-YT2

```
YouTube thumbnail, aspect ratio 16:9 (1280x720). Solid deep navy #1E2957 background with a subtle abstract blurred n8n workflow pattern in the background at 20% opacity (node shapes, no letters, no specific UI labels). Foreground: massive extra-bold geometric sans-serif typography, three lines stacked, tight leading, centered-left. Line 1 (largest), white: "LE SDR". Line 2, nude pink #F5D5CB (same size): "QUI NE DORT". Line 3, white (same size): "JAMAIS.". Small curiosity subline bottom-left, lighter weight white: "Je vous montre Davide en prod." Small "Nando IT Solutions" wordmark top-right in white, small. Reserved safe zone 10% bottom-right for YouTube duration badge. typography: Pangram Sans or Aeonik extra-bold. flat, no shadow, no gradient. magic prompt: off. No person, no face, no humanoid robot, no brain, no stock photo.
```

### Variante YT-3 — Question scroll-stop (test C)

#### Ideogram — IDE-YT3

```
YouTube thumbnail, aspect ratio 16:9 (1280x720). Left 40%: editorial photograph-style illustration of a single computer monitor in a dark office, screen displaying an abstract calendar grid with meeting tiles auto-filling, warm nude pink #F5D5CB lamp glow on the desk, deep navy ambient light. Right 60%: solid deep navy #1E2957 panel. Large typography, extra-bold geometric sans-serif in white, 2 lines stacked: "À QUOI RESSEMBLE" (line 1, medium size) / "UN AI SALES MANAGER ?" (line 2, larger). Below with 40px gap, a single line in nude pink, italic bold: "Je te montre. En prod. Sur n8n." Small "Nando IT Solutions" wordmark top-right in white. Reserved zone bottom-right for headshot insert (lighter navy gradient). typography: Pangram Sans / Aeonik. flat, no effects. magic prompt: off. No face, no humanoid robot, no brain, no stock photo.
```

### Fallback Midjourney — MJ-YT (base photo stylisée, composition de référence)

```
Cinematic YouTube thumbnail composition, aspect ratio 16:9, left half: dramatic dark home office shot with a single monitor displaying an abstract workflow editor, warm nude pink desk lamp glow, deep navy ambient mood, shallow DOF, 35mm editorial photography, film grain. Right half: solid deep navy #1E2957 panel reserved for typography overlay (empty). Color palette strictly #1E2957 and #F5D5CB. --ar 16:9 --v 6.1 --style raw --s 200 --no text, letters, typography, logo, watermark, humanoid robot, android, brain, neural network, circuit board, hologram, stock photo, shutterstock, plastic 3d render
```

**Récap Bloc 2** : **3 variantes Ideogram** (YT-1, YT-2, YT-3) + **1 fallback Midjourney base photo** = **4 variantes** pour A/B test CTR. Recommandation A/B/C : YT-1 (split-screen, le plus proche de la suggestion Créateur) vs YT-2 (full-typo, plus scroll-stopper en preview mobile).

---

## Bloc 3 — Covers Shorts YouTube / Reels (9:16, 1080×1920) — 3 shorts dérivés

> **Source contenu** : `content/2026-04-17-nando-it-yt-long-demo-davide.md` §11 (shorts dérivés S18-S20).
> **Outil prioritaire** : **Ideogram** (texte lisible sur 9:16, palette contrôlée).
> **Règle hook** : ≤ 6 mots de texte overlay, centre-bas de l'écran (éviter zone UI supérieure YouTube Shorts + Instagram Reels).
> **Safe zones** : 220 px top (UI compteur + titre YT Shorts), 280 px bottom (caption + icônes side-bar Reels).

### Short #1 — "Comment Davide écrit ses messages (RAG)" — chapitre 2

**Hook texte** (≤ 6 mots) : *"IL LIT VOTRE CRM."*

#### Ideogram — IDE-S1

```
Vertical video cover for YouTube Shorts and Instagram Reels, aspect ratio 9:16 (1080x1920). Top 60% of frame: cinematic editorial illustration of an abstract document view with three stylized horizontal text lines and a small magnifier icon hovering, nude pink #F5D5CB accents on deep navy #1E2957 background, clean geometric vector style. Middle section (around 55-70% vertical): horizontal thin nude pink separator line. Bottom-middle 30% (safe zone respected, 280px from bottom edge): massive extra-bold geometric sans-serif typography, tight tracking, 2 stacked lines, centered: "IL LIT" (line 1, white) / "VOTRE CRM." (line 2, nude pink #F5D5CB). Below the typography with 40px gap: small subline in white, lighter weight: "Le RAG de Davide, en 60s." Small "Nando IT Solutions" wordmark top-right in white, respecting the 220px top safe zone. typography: Pangram Sans or Aeonik extra-bold. flat, no shadow, no gradient. magic prompt: off. No humanoid robot, no brain, no face, no stock photo, no generic AI icon.
```

### Short #2 — "Le moment où Davide passe la main à un humain" — chapitre 4 (objection hallucination)

**Hook texte** (≤ 6 mots) : *"IL ATTEND VOTRE CLIC."*

#### Ideogram — IDE-S2

```
Vertical video cover for YouTube Shorts and Instagram Reels, aspect ratio 9:16 (1080x1920). Top 55%: editorial illustration on solid nude pink #F5D5CB background, single clean line-icon of a hand cursor hovering over a square button, navy #1E2957 line art, minimal, centered, generous negative space. Thin navy horizontal separator around 58% vertical. Bottom 35% (safe zone respected, 280px from bottom edge): solid deep navy #1E2957 panel with extra-bold geometric sans-serif typography, tight tracking, 2 stacked lines, centered: "IL ATTEND" (line 1, white) / "VOTRE CLIC." (line 2, nude pink). Below typography with 40px gap: small subline in white, lighter weight: "Human-in-the-Loop, expliqué." Small "Nando IT Solutions" wordmark top-right in navy (top zone) or white (bottom-right). typography: Pangram Sans or Aeonik. flat, no effects. magic prompt: off. No humanoid robot, no human hand skin texture, no face, no stock photo.
```

### Short #3 — "Le workflow n8n en 60 secondes" — chapitre 2

**Hook texte** (≤ 6 mots) : *"N8N EN 60 SECONDES."*

#### Ideogram — IDE-S3

```
Vertical video cover for YouTube Shorts and Instagram Reels, aspect ratio 9:16 (1080x1920). Top 60%: stylized editorial illustration of an n8n workflow on a deep navy #1E2957 background — abstract rounded-rectangle nodes connected by curved lines, nodes in nude pink #F5D5CB outlines, one node with a small nude pink glow and a "RUNNING" mini badge, no legible UI labels, clean vector style, generous negative space. Thin nude pink horizontal separator around 62% vertical. Bottom 32% (safe zone respected, 280px from bottom edge): massive extra-bold geometric sans-serif typography, tight tracking, 2 stacked lines, centered: "N8N" (line 1, largest, white) / "EN 60 SECONDES." (line 2, nude pink). Below typography with 40px gap: small subline in white, lighter weight: "Workflow complet, démonté." Small "Nando IT Solutions" wordmark top-right in white, top safe zone respected (220px). typography: Pangram Sans or Aeonik extra-bold. flat, no shadow, no gradient. magic prompt: off. No humanoid robot, no brain, no face, no photo-stock office, no generic AI visual.
```

**Récap Bloc 3** : **3 covers Ideogram** (IDE-S1, IDE-S2, IDE-S3) = **3 variantes** — 1 par short. Possibilité de relancer 2 seeds par cover pour affiner typo.

---

## Bloc 4 — Schémas deck (16:9, 1920×1080) — 4 visuels techniques

> **Source contenu** : `decks/2026-04-17-nando-it-pitch-prospect-davide.md` — section "Gap visuels à produire" (slides 3, 8, 9, 10).
> **Outil prioritaire** : **Ideogram** pour #1, #2, #3 (schémas + texte). **#4** (QR Calendly) = **outil standard non-IA** (qrcode-monkey.com ou équivalent).
> **⚠ Avertissement risque rendu** : Ideogram est excellent sur les **posters textés** mais **limite sur les diagrammes techniques structurés** (flèches propres, alignements de nœuds, tableaux à colonnes strictes). Les 2 variantes par schéma ci-dessous sont à considérer comme des **moodboards/directions** — un montage propre dans **Figma ou Canva** (à partir des éléments typographiques générés + formes vectorielles natives) reste **fortement recommandé** pour la version finale présentée au prospect.

### Schéma #1 — Slide 3 "Outil vs Système"

**Direction** : comparatif visuel clair. Gauche = "Outil" = une bulle isolée labellisée "ChatGPT" (ou "Prompt ponctuel"). Droite = "Système" = un nœud central "Davide" connecté à 4 satellites (LinkedIn / Email / Calendar / CRM). Flèche centrale ou séparation verticale nette.

#### Variante #1A — Ideogram IDE-D1A (recommandée — à retoucher Canva/Figma)

```
Horizontal editorial diagram illustration, aspect ratio 16:9 (1920x1080). Solid deep navy #1E2957 background. Left 40% of frame: label "OUTIL" top-left in small caps nude pink #F5D5CB, extra-bold. Below centered in that left panel: one isolated rounded rectangle node (white outline, hollow), medium size, labeled inside with extra-bold white text "ChatGPT". No connections, visually floating alone, generous negative space around it. Thin vertical nude pink separator line at 45% width. Right 55% of frame: label "SYSTÈME" top-right in small caps nude pink, extra-bold. Below, a central large rounded rectangle node filled with nude pink #F5D5CB, labeled in extra-bold navy text: "Davide". Four smaller outlined rounded rectangles positioned top, right, bottom-right and bottom-left of the central node, each connected to it by thin nude pink lines (clean straight or gently curved). The four satellite nodes labeled in white extra-bold: "LinkedIn" (top), "Email" (right), "Calendar" (bottom-right), "CRM" (bottom-left). Small "Nando IT Solutions" wordmark bottom-right in white. typography: Pangram Sans or Aeonik extra-bold, tight tracking, all text perfectly horizontal. style: clean flat vector diagram, no 3d, no shadow, no gradient, no decoration. magic prompt: off. No humanoid robot, no brain, no neurons, no circuit board, no cloud icon, no server rack, no stock tech illustration.
```

#### Variante #1B — Ideogram IDE-D1B (version fond clair)

```
Horizontal editorial diagram illustration, aspect ratio 16:9 (1920x1080). Solid nude pink #F5D5CB background. Left 40%: small caps label "OUTIL" top-left in deep navy #1E2957. Below centered, one isolated rounded rectangle node with a thin navy outline, medium size, labeled inside in extra-bold navy: "ChatGPT". No connection lines, floating alone. Thin vertical navy separator at 45%. Right 55%: small caps label "SYSTÈME" top-right in navy. Central large rounded rectangle node filled solid navy #1E2957 with white extra-bold label "Davide" inside. Four smaller outlined navy rectangles around it, each connected by thin navy lines, labeled in navy extra-bold: "LinkedIn", "Email", "Calendar", "CRM". Small "Nando IT Solutions" wordmark bottom-right in navy. typography: Pangram Sans / Aeonik. flat, no 3d, no shadow. magic prompt: off. No humanoid robot, no brain, no neural network imagery.
```

> **Recommandation** : générer les deux pour comparer lisibilité en présentation Zoom. Si flèches/alignements dérivent (Ideogram fréquent), **reconstruire en Figma/Canva** à partir des labels générés — forme native + typographie cohérente.

---

### Schéma #2 — Slide 8 "Timeline Audit → Build → Train"

**Direction** : 3 étapes horizontales numérotées 1-2-3, connectées par une ligne horizontale. Chaque étape = rectangle + numéro + titre + durée indicative. Palette stricte.

> **Rappel brand-safety** : afficher *"Audit 2 sem."*, *"Build 4-6 sem."*, *"Train ongoing"* uniquement si le Présentateur et Nando IT Solutions valident ces durées comme publiques. Sinon, retirer les durées et ne garder que les étapes. **Par défaut prudent, je génère AVEC les durées** (comme demandé par l'orchestrateur) mais **flagger** pour validation Maxim avant export final.

#### Variante #2A — Ideogram IDE-D2A (recommandée)

```
Horizontal editorial timeline illustration, aspect ratio 16:9 (1920x1080). Solid deep navy #1E2957 background. Centered horizontal thin nude pink #F5D5CB line spanning roughly 80% of frame width, positioned at 55% vertical. Three equidistant circular nodes on this line (left, center, right), each filled solid nude pink with a large navy extra-bold number inside: "1", "2", "3". Above each node, small caps label in nude pink: "ÉTAPE 01", "ÉTAPE 02", "ÉTAPE 03". Below each node (with 60px gap), heading in extra-bold white typography: "Audit." (left), "Build." (center), "Train." (right). Below each heading, a smaller italic medium-weight white line: "2 semaines" (left), "4 à 6 semaines" (center), "en continu" (right). Top of frame: title extra-bold white, tight tracking, centered: "Audit → Build → Train". Subtitle below in nude pink, lighter weight, centered: "Notre méthode Done-With-You." Small "Nando IT Solutions" wordmark bottom-right in white. typography: Pangram Sans or Aeonik extra-bold. style: flat minimal vector diagram, no 3d, no shadow, no gradient. magic prompt: off. No humanoid robot, no brain, no gears, no stopwatch icon, no stock roadmap illustration.
```

#### Variante #2B — Ideogram IDE-D2B (version numérotée par cards)

```
Horizontal editorial layout, aspect ratio 16:9 (1920x1080). Solid nude pink #F5D5CB background. Title top-center: "Audit → Build → Train" in extra-bold deep navy #1E2957, tight tracking. Subtitle below in lighter navy: "Notre méthode Done-With-You.". Three equidistant rectangular cards across the middle of the frame, each card has a solid navy header band with a large white number "1", "2", "3", and below (inside the card on a white or light body) a bold navy heading: "Audit", "Build", "Train", and a smaller italic navy duration: "2 semaines", "4 à 6 semaines", "en continu". Thin navy arrow chevrons between cards. Small "Nando IT Solutions" wordmark bottom-right in navy. typography: Pangram Sans / Aeonik. flat, no 3d, no shadow. magic prompt: off. No humanoid robot, no stock timeline clipart, no gears, no lightbulb.
```

---

### Schéma #3 — Slide 9 "Tableau comparatif concurrentiel"

**Direction** : tableau 3 colonnes (Agences marketing trad. / Agences no-code / **Nando IT Solutions**) × 5 lignes (Cœur de métier / Approche IA / Technologie / Personnalisation / Accompagnement), source `brand.md` §1.

**Cellules (source brand.md §1)** :

| | Agences marketing trad. | Agences no-code | **Nando IT Solutions** |
|---|---|---|---|
| Cœur de métier | Ads / campagnes | Zapier + sites web | **Ingénierie d'agents autonomes** |
| Approche IA | Superficielle | Outil parmi d'autres | **Moteur central de l'opérationnel** |
| Technologie | Standards marché | Airtable / Make | **n8n auto-hébergeable + LLM Ops** |
| Personnalisation | Faible (templates) | Moyenne | **Haute — agents sur data client** |
| Accompagnement | Prestation externe | Livraison projet | **Partenariat + transfert (DWY)** |

#### Variante #3A — Ideogram IDE-D3A (recommandée — à retoucher Canva/Figma quasi certain)

```
Horizontal editorial comparison table, aspect ratio 16:9 (1920x1080). Solid deep navy #1E2957 background. Title top-left, extra-bold white, tight tracking: "Ce qui nous rend différents.". Below title, a clean three-column table, 6 rows total (1 header row + 5 content rows), thin nude pink #F5D5CB horizontal and vertical dividers. Header row (row 1): empty first cell, then three centered column headers in small caps: "AGENCES MARKETING" (white, medium weight), "NO-CODE GÉNÉRIQUES" (white, medium weight), "Nando IT Solutions" (nude pink, extra-bold, highlighted). Row 2 — first cell label in nude pink small caps "Cœur de métier", then three cells in white body text: "Ads / campagnes" | "Zapier + sites web" | "Ingénierie d'agents autonomes" (last one in nude pink extra-bold). Row 3 — label "Approche IA": "Superficielle" | "Outil parmi d'autres" | "Moteur central" (last in nude pink bold). Row 4 — label "Technologie": "Standards marché" | "Airtable / Make" | "n8n auto-hébergeable" (last in nude pink bold). Row 5 — label "Personnalisation": "Faible" | "Moyenne" | "Haute — data client" (last in nude pink bold). Row 6 — label "Accompagnement": "Prestation externe" | "Livraison projet" | "Partenariat + transfert" (last in nude pink bold). The entire Nando IT Solutions column (rightmost) has a subtle highlight — a slightly lighter navy background band behind it. Small "Nando IT Solutions" wordmark bottom-right in white. typography: Pangram Sans or Aeonik, extra-bold headers, medium body. flat, no shadow, no gradient, all text perfectly horizontal, cells clean rectangles. magic prompt: off. No humanoid robot, no brain, no stock infographic, no chart, no 3d, no gradient fill.
```

#### Variante #3B — Ideogram IDE-D3B (version fond clair, Nando IT Solutions colonne surlignée navy plein)

```
Horizontal editorial comparison table, aspect ratio 16:9 (1920x1080). Solid nude pink #F5D5CB background. Title top-left, extra-bold deep navy #1E2957: "Ce qui nous rend différents.". Clean three-column comparison table below, 6 rows (1 header + 5 content), thin navy dividers. Header row in navy small caps: empty first cell, "AGENCES MARKETING", "NO-CODE GÉNÉRIQUES", "Nando IT Solutions". The entire third column (Nando IT Solutions) has a solid navy fill background with white text inside; other cells have navy text on the pink background. Content rows as follows (row label in left stub in navy bold small caps, then three cells across): "Cœur de métier" — "Ads / campagnes" | "Zapier + sites web" | "Ingénierie d'agents autonomes" (white bold). "Approche IA" — "Superficielle" | "Outil parmi d'autres" | "Moteur central" (white bold). "Technologie" — "Standards marché" | "Airtable / Make" | "n8n auto-hébergeable" (white bold). "Personnalisation" — "Faible" | "Moyenne" | "Haute — data client" (white bold). "Accompagnement" — "Prestation externe" | "Livraison projet" | "Partenariat + transfert" (white bold). Small "Nando IT Solutions" wordmark bottom-right in navy. typography: Pangram Sans / Aeonik, flat, no 3d. magic prompt: off. No humanoid robot, no chart icon, no stock infographic, no gradient.
```

> **⚠ Recommandation forte** : ce visuel est le **plus à risque** côté Ideogram (alignements de cellules fréquemment cassés, caractères accentués parfois corrompus). **Prévoir systématiquement un montage Canva/Figma natif** en backup — Ideogram sert alors de moodboard pour la palette et les proportions, pas de rendu final.

---

### Schéma #4 — Slide 10 "QR code Calendly" *(non-IA)*

**Direction** : QR code standard pointant vers `https://calendly.com/nando-it/coaching-one-to-one`, palette stricte.

**Génération recommandée** (hors IA) :
- **Outil** : [qrcode-monkey.com](https://www.qrcode-monkey.com/) ou [qr.io](https://qr.io) ou [QRCode Generator](https://www.qr-code-generator.com/).
- **URL** : `https://calendly.com/nando-it/coaching-one-to-one?utm_source=deck&utm_campaign=davide&utm_medium=pitch-prospect`
- **Couleur code** : `#1E2957` (bleu marine plein).
- **Couleur fond** : `#F5D5CB` (rose nude).
- **Niveau correction erreur** : **H (High, ~30%)** pour autoriser un logo centré sans casser le scan.
- **Logo centré** : `nando-it-logo-bleu.png` (petit, ~15-20% de la taille du QR, laisser ~15% padding autour).
- **Taille export** : 1200×1200 px PNG transparent (pour intégration Canva avec fond personnalisé).
- **Test scan obligatoire** : iPhone + Android, de près (30 cm) et de loin (2 m projection Zoom), AVANT export deck final.

#### Composition Canva recommandée pour slide 10

- Slide 16:9 fond **bleu marine `#1E2957`** (ou arrière-plan IDE-1 v1 à 60% opacité pour boucle narrative avec slide 1 du deck).
- **Colonne gauche 50%** : texte deck (source `decks/2026-04-17-nando-it-pitch-prospect-davide.md` slide 10).
- **Colonne droite 50%** : QR code centré sur une **card rose nude `#F5D5CB`** arrondie (radius ~40 px), padding 80 px autour du QR. Sous la card : URL lisible en white extra-bold centrée : `calendly.com/nando-it/coaching-one-to-one`.

**Récap Bloc 4** : **2 variantes Ideogram par schéma × 3 schémas IA (#1, #2, #3)** = **6 variantes Ideogram** + **1 QR à générer hors IA** (#4). **Total Bloc 4 : 7 livrables** (dont 6 prompts IA + 1 instruction QR).

---

## Negative prompts communs (à réutiliser sur tous les outils quand supporté)

*(Complète et réaffirme les negatives du v1.)*

- `humanoid robot, android, mechanical humanoid, C-3PO, cyborg`
- `brain, neurons, synapses, neural network, glowing blue brain, brain with circuit`
- `circuit board, motherboard, binary code, matrix rain, holograms, cyberpunk city`
- `stock photo, shutterstock, getty images, generic office, corporate handshake, business meeting cliche`
- `distorted text, gibberish letters, misspelled words, warped typography, duplicated characters` *(Midjourney / Gemini, moins prégnant sur Ideogram mais à garder)*
- `watermark, logo decoration, signature, frame border, decorative swirls`
- `deformed hands, extra fingers, human faces in focus, recognizable celebrity`
- `plastic 3d render, videogame CGI look, gradient mesh, drop shadow, bevel, glossy reflection`
- `saturated pink, magenta, hot pink, coral, salmon, fuchsia, neon pink` *(anti-dérive palette signalée v1)*
- `chart, graph, infographic cliche, roadmap clipart, gears, lightbulb idea icon`

---

## Notes de risque & recommandations d'itération *(spécifiques v2)*

### Carrousel (Bloc 1)
- **Ideogram sur 4:5** : très fiable sur la typographie. Risque mineur = accents français (é, è, ç) parfois rendus en caractère générique. **Relancer 2-3 seeds par slide** et retenir celle où *"prépare"*, *"données"*, *"ça"*, *"résultats"* sont propres.
- **Palette rose nude** : même vigilance qu'en v1 (dérive saumon). Si Ideogram ramène un `#F5D5CB` vers `#F7A99C`, relancer avec `pale dusty pink, skin-tone pink, desaturated nude, not salmon, not coral`.
- **Slides 4-5-6 (FAB)** : si les 3 blocs verticaux s'écrasent en largeur, préciser `3 equally stacked horizontal sections, each taking one third of the vertical height`.
- **Slide 4 brand-safety** : vérifier **visuellement** que la ligne *"booking rate triplé en moins de 30 jours"* reste en corps de texte (pas en titre géant) — sinon, relancer avec contrainte explicite.

### Miniature YouTube (Bloc 2)
- **Composition Zeyneb** : prompts IDE-YT1 et IDE-YT3 laissent une **zone réservée** pour compositer la photo réelle de Zeyneb en post (Canva/Figma). **Ne jamais générer le visage de Zeyneb en IA** — brand §5.9 + risque ressemblance.
- **Test preview mobile** : exporter en 240×135 px et vérifier que le mot-clé principal (*"DAVIDE EN PROD"* ou *"JAMAIS."*) reste lisible au pouce. Sinon, repasser au variant full-typo YT-2.
- **Recommandation A/B/C live** : publier YT-1 sur la vidéo originale, conserver YT-2 et YT-3 comme alternatives à tester via YouTube Studio (test miniature natif, dispo pour chaînes > 1000 abonnés — à vérifier éligibilité chaîne Zeyneb).

### Covers Shorts (Bloc 3)
- **Safe zones** : respecter 220 px top + 280 px bottom (testé UI YouTube Shorts + Instagram Reels). Si typo Ideogram dépasse, régénérer en précisant explicitement les zones.
- **Hook ≤ 6 mots** : tenu sur les 3 covers (IL LIT VOTRE CRM / IL ATTEND VOTRE CLIC / N8N EN 60 SECONDES). Ne pas ajouter de subline en tournage pour rester scroll-stopper.
- **Cohérence thématique** : IDE-S1 et IDE-S3 sont sur fond navy (tech-forward) ; IDE-S2 sur fond nude (respiration / humain). Variation volontaire pour marquer les 3 shorts comme trois temps différents.

### Schémas deck (Bloc 4) — **risques spécifiques techniques**
- **Ideogram & diagrammes** : Ideogram est **excellent pour la typographie** mais **limité pour les diagrammes structurés** (flèches précises, alignements de nœuds, cellules de tableau, connecteurs courbes). Attentes réalistes :
  - Schéma #1 (Outil vs Système) : **Ideogram rendra les labels correctement** mais les connecteurs entre nœuds seront approximatifs. **Acceptable comme moodboard**.
  - Schéma #2 (Timeline) : bon taux de réussite attendu (structure linéaire simple). Ideogram livrable direct probable.
  - Schéma #3 (Tableau 3×5) : **risque élevé d'échec** — alignements de cellules, caractères accentués, cohérence largeurs de colonnes. **Prévoir impérativement une reconstruction Canva/Figma** à partir des cellules textuelles.
- **Recommandation de production** pour #1 et #3 :
  1. Générer 2-3 seeds Ideogram pour avoir une direction palette+compo.
  2. **Reconstruire en Figma ou Canva** avec les formes natives (rectangles, connecteurs) + la typographie Pangram/Aeonik importée.
  3. Gain : cohérence visuelle parfaite sur Zoom + modifiable post-call si le prospect soulève une objection.
- **Fallback outil hors IA** : pour #1 (Outil vs Système), outil recommandé = **Figma** (diagrammes précis) ou **Whimsical** (graph rapide avec style). Pour #3 (tableau), **Canva tableau natif** ou **Figma** avec auto-layout.
- **QR code #4** : non-IA, hors scope Ideogram. Flux qrcode-monkey → import PNG Canva.

---

## Récap livrables v2

| Bloc | Outil principal | Nb variantes IA | Fallback | Total |
|---|---|---|---|---|
| 1. Carrousel 8 slides | Ideogram | 8 (IDE-C1→C8) | 3 MJ (slides 4-5-6) | **11** |
| 2. Miniature YouTube | Ideogram | 3 (IDE-YT1/2/3) | 1 MJ base photo | **4** |
| 3. Covers Shorts | Ideogram | 3 (IDE-S1/2/3) | — | **3** |
| 4. Schémas deck | Ideogram | 6 (2 par schéma ×3) + QR non-IA | Figma/Canva pour #1 #3 | **7** |
| **TOTAL v2** | | | | **25 variantes** |

**Cumul campagne Davide (v1 + v2)** : 11 (v1) + 25 (v2) = **36 variantes**, couvrant hero + carrousel + miniature YT + shorts + schémas deck.

---

## Priorités de test (reco orchestrateur)

| Bloc | Prompt à tester en premier | Pourquoi |
|---|---|---|
| 1. Carrousel | **IDE-C1** (Slide 1 hook) | Valide dès le premier prompt la maîtrise palette + typo extra-bold sur 4:5. Si propre, les 7 autres slides suivront sur le même registre. |
| 2. Miniature YT | **IDE-YT1** (split-screen) | C'est le concept explicitement demandé par le Créateur ; s'il rend, on tient la miniature principale. YT-2 full-typo = backup scroll-stopper si lisibilité mobile insuffisante. |
| 3. Covers Shorts | **IDE-S3** (N8N EN 60 SECONDES) | Le plus visuellement dense (workflow stylisé + texte) — si Ideogram tient cette compo, les 2 autres (S1, S2) passent sans risque. |
| 4. Schémas deck | **IDE-D2A** (Timeline Audit→Build→Train) | Structure linéaire simple = meilleur taux de succès Ideogram. Valide d'abord qu'on peut livrer un schéma propre sans fallback, avant d'attaquer #1 et surtout #3 (risques). |

---

**Dernière mise à jour** : 2026-04-17
**Responsable prompts v2** : Designer Nando IT Solutions (subagent)
**Handover recommandé** : → Zeyneb/Maxim (run prompts Ideogram, valider palette/typo sur 2-3 seeds par slide) → Canva/Figma (reconstruction schémas deck #1 et #3 en natif, à partir des moodboards Ideogram) → Créateur (relecture slide 4 du carrousel pour confirmation placement "booking triplé" en corps et pas en titre).

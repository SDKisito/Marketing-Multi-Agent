---
client: naiom
campagne: lancement-davide
agent: designer
date: 2026-04-17
version: 1
statut: draft
formats: [16:9, 1:1, 9:16]
outils: [midjourney, gemini, ideogram]
---

# Prompts visuels — Hero campagne "Lancement de Davide"

> Usage prévu : couverture LinkedIn page NAIOM + thumbnail YouTube (16:9), posts feed LinkedIn/Instagram (1:1), Reels Instagram + Shorts YouTube (9:16).
> Concepts retenus (2 sur 3 demandés) : **C1 — Poste de travail SDR la nuit** et **C2 — Bureau d'agence au petit matin**. C3 (split-screen avant/après) conservé comme piste alternative pour 1 variante par outil.

---

## 1. Direction artistique appliquée *(source : `clients/naiom/brand.md` §4 + §5)*

- **Palette** : bleu marine profond `#1E2957` (ambiance nuit, écrans, lumière bleutée) + rose nude `#F5D5CB` (highlights chaleureux — lampe de bureau, horizon matinal, post-its, détail typographique). Touche blanc pur `#FFFFFF` et noir encre `#0F0F14` en appoint.
- **Mood** : cinématographique, éditorial, premium sobre — référence Linear / Stripe / Perplexity (tech-premium, pas "fintech startup"). Lumière naturelle ou pratique (lampes de bureau, écrans), pas de rendu 3D futuriste.
- **Typographie (Ideogram uniquement)** : sans-serif géométrique extra-bold (Pangram Sans / Satoshi / Aeonik-like), tracking resserré, bloc titre bas-gauche ou centré.
- **Composition** : plans larges avec vide négatif intentionnel → métaphore du "poste humain libéré" ; l'agent IA Davide n'est **jamais** représenté directement.
- **Interdictions bloquantes (brand.md §5.7 + §5.8)** : PAS de robot humanoïde, PAS de cerveau bleu / neurones / réseau de noeuds / "IA = cloud + circuit imprimé", PAS de photo-stock identifiable, PAS de visage de personne reconnaissable, PAS de logo client visible.

---

## 2. Midjourney *(4 variantes — photoréalisme cinéma, sans texte)*

> **Usage** : hero visuels sans texte → feed 1:1, Reels/Shorts 9:16, déclinaisons cover 16:9 (version "sans typo" à compléter par overlay Canva si besoin).
> Version recommandée : `--v 6.1 --style raw`. Stylization 150-300 pour garder le réalisme.

### Variante MJ-1 — Concept C1 "SDR la nuit" — format 16:9 (cover LinkedIn)

```
cinematic wide shot of an empty modern sales desk at 2am, single practical desk lamp casting warm nude-pink glow on a cold cup of coffee and a closed notebook, large ultrawide monitor in the background showing a calendar app filling itself with confirmed meeting slots in soft green and blue, reflections on the glass, deep navy blue ambient light through the window, Scandinavian minimalist office, shallow depth of field, 35mm film grain, editorial photography, mood of "someone's digital colleague is working while they sleep", negative space on the right, color palette deep navy 1E2957 and nude pink F5D5CB, no people, no humanoid robot, no holograms, no neural network visuals --ar 16:9 --v 6.1 --style raw --s 200
```

### Variante MJ-2 — Concept C1 "SDR la nuit" — format 9:16 (Reels / Shorts)

```
vertical cinematic photograph of an empty workspace at night, tall framing, top half: ceiling shadows and a glowing monitor showing a CRM pipeline and a calendar filling itself with booked meetings, bottom half: a cooled cup of coffee, an open Moleskine, a phone face down, the chair pushed away as if someone just left, warm nude-pink desk lamp light mixing with deep navy blue window light from a city skyline, quiet atmosphere, editorial moody lighting, 35mm anamorphic, film grain, shallow DOF, color grade: navy 1E2957 shadows, nude F5D5CB highlights, no people visible, no robots, no sci-fi UI --ar 9:16 --v 6.1 --style raw --s 200
```

### Variante MJ-3 — Concept C2 "Bureau d'agence au petit matin" — format 1:1 (feed)

```
square editorial photograph, modern minimalist agency office at sunrise, soft pink-orange light spilling through floor-to-ceiling windows, empty chairs pushed in, one large glass wall covered in neatly stacked yellow and pink sticky notes showing confirmed client meetings with times and dates, clean desks with closed laptops, plants, polished concrete floor, the feeling of arriving first and finding that work has already been done overnight, wide-angle but centered composition, navy and nude pink color palette 1E2957 F5D5CB, shot on Fuji GFX, shallow depth of field, cinematic color grade, documentary feel, no visible people, no robots, no holograms --ar 1:1 --v 6.1 --style raw --s 250
```

### Variante MJ-4 — Concept C3 "Split avant/après" — format 16:9 (alt)

```
cinematic split-screen composition 50/50, left side: messy sales desk, overflowing Kanban board on the wall with dozens of post-its labelled "follow-up", empty CRM dashboard on the monitor, cold coffee, scattered papers, warm tungsten light, slightly desaturated ; right side: the same desk cleaned and minimal, a single monitor showing a calendar full of confirmed meetings in navy and nude pink, a plant, morning daylight, orderly, cool cinematic grade ; clear vertical seam in the middle, editorial photography, 35mm, color palette anchored on deep navy 1E2957 and nude pink F5D5CB, no text, no people, no robots --ar 16:9 --v 6.1 --style raw --s 200
```

**Negative prompt commun Midjourney** : `--no text, letters, typography, logo, watermark, humanoid robot, android, mechanical hand, brain visualization, neural network, circuit board, glowing hologram, stock photo lookalike, generic office shutterstock, cheap CGI, plastic skin, 3d render look, deformed hands, extra fingers`

---

## 3. Gemini (Imagen) *(3 variantes — éditorial rapide, itérable)*

> Prompts en phrases longues descriptives. Préciser l'aspect ratio via UI ("set aspect ratio to X") ou instruction.

### Variante GEM-1 — Concept C1 "SDR la nuit" — format 16:9

```
Editorial cinematic photograph, aspect ratio 16:9. An empty modern sales workstation photographed at roughly 2 a.m. A single warm desk lamp emits a soft nude-pink glow, illuminating a cold half-full cup of coffee and a closed leather notebook. In the background, a wide monitor displays a weekly calendar that is visibly auto-populating with confirmed meeting slots; the interface is abstract, clean, deep navy with pink accents. Blue city light leaks through a large window. The chair is slightly turned, as if the human just stepped away. Shot on 35mm, shallow depth of field, subtle film grain. The intended emotional narrative: a digital colleague working through the night. Color palette strictly anchored on #1E2957 navy shadows and #F5D5CB nude-pink highlights. No people. No robots. No neural-network or circuit-board imagery. No on-screen text other than generic calendar tiles.
```

### Variante GEM-2 — Concept C2 "Bureau au petit matin" — format 1:1

```
Square editorial photograph, aspect ratio 1:1. A minimalist agency office at 7 a.m., pink-orange dawn light pouring through tall windows. Chairs are pushed in, desks are clean. A full glass wall is covered in neatly arranged pink and yellow sticky notes listing meeting times with anonymous first names and companies. The composition conveys that a team is about to arrive and discover the meetings were booked overnight. Color grade biased toward deep navy blue #1E2957 and nude pink #F5D5CB. Documentary style, no staged people in frame, no logos, no humanoid robots, no sci-fi UI elements, no stock photography cliches. Shot as if on a medium-format camera.
```

### Variante GEM-3 — Concept C1 "SDR la nuit" — format 9:16

```
Vertical cinematic frame, aspect ratio 9:16. Tight composition on an empty workstation at night. Top third: a widescreen monitor shows a CRM pipeline on the left side and a calendar auto-filling with confirmed meetings on the right; UI kept abstract and clean. Middle third: a cooled cup of coffee and a phone placed face down next to a closed notebook. Bottom third: the empty office chair pushed slightly back, soft shadows on polished concrete. Navy blue ambient light mixed with a single warm nude-pink desk lamp. Feeling: "your best SDR is asleep, the digital one is working." Palette #1E2957 and #F5D5CB. No people, no humanoid robot, no brain or neuron imagery, no text.
```

---

## 4. Ideogram *(4 variantes — avec texte intégré, pour cover LinkedIn + thumbnail YouTube)*

> **Pourquoi Ideogram** : lisibilité du texte dans l'image (Midjourney et Gemini rendent mal la typographie).
> `magic prompt: off` recommandé pour garder le contrôle typographique.

### Variante IDE-1 — Cover LinkedIn 16:9 — baseline "SDR jamais en congés"

```
Editorial cinematic wide photograph, empty modern sales desk at night with a warm nude-pink desk lamp and a monitor in the background showing an abstract calendar filling with booked meetings, deep navy blue ambient light. Large bold typography overlay on the left third: "Le SDR qui ne prend jamais de congés." Small secondary line below in lighter weight: "Davide — AI Sales Manager · NAIOM". typography: extra-bold geometric sans-serif similar to Pangram Sans or Aeonik, tracking tight, white and nude-pink #F5D5CB text on navy #1E2957 backdrop. text style: high contrast, flat, no bevel, no drop shadow. Layout: title left-aligned, photography right 60%. aspect ratio 16:9. magic prompt: off. No humanoid robots, no brain imagery, no stock photo feel.
```

### Variante IDE-2 — Cover LinkedIn 16:9 — baseline produit "Davide · AI Sales Manager"

```
Editorial cinematic wide photograph, minimalist agency office at sunrise with a glass wall covered in neatly arranged pink sticky notes showing confirmed meeting times, chairs pushed in, soft morning light. Large typography overlay centered: "Davide" in extra-bold geometric sans-serif, 40% of the frame height, color nude pink #F5D5CB on navy #1E2957 panel. Below in smaller bold caps: "AI SALES MANAGER". Below in light weight: "Il prospecte, qualifie, relance — pendant que vous dormez." small NAIOM wordmark bottom-left in white, no logo graphic. typography: Aeonik / Satoshi extra-bold, tight tracking. text style: flat, high legibility, no effects. aspect ratio 16:9. magic prompt: off. No humanoid robot, no brain, no neural network, no stock photo.
```

### Variante IDE-3 — Thumbnail YouTube 16:9 — curiosité forte

```
Bold YouTube thumbnail composition, aspect ratio 16:9. Left 55%: cinematic photograph of a single monitor in a dark office displaying a calendar auto-filling with meeting tiles; warm nude-pink lamp glow on the desk. Right 45%: solid deep navy #1E2957 panel with stacked typography reading "LE SDR" / "QUI NE DORT" / "JAMAIS." in extra-bold geometric sans-serif caps, color white with the word "JAMAIS" in nude pink #F5D5CB. Small line at the bottom-right: "Je vous montre Davide en prod." typography: Pangram Sans / Aeonik extra-bold, tight leading, no shadows, no gradients. magic prompt: off. Avoid humanoid robots, brain illustrations, generic AI cliches.
```

### Variante IDE-4 — Cover 1:1 / Reels 9:16 — version sociale courte

```
Square editorial composition, aspect ratio 1:1 (also provide 9:16 version). Top 60%: cinematic photograph of an empty SDR desk at night, cold coffee, a monitor showing an abstract filling calendar, navy blue mood with one warm nude-pink lamp. Bottom 40%: solid navy panel #1E2957 with large extra-bold geometric sans-serif typography reading: "Votre meilleur commercial dort." Below, smaller line in nude pink #F5D5CB: "Le mien travaille cette nuit." Very small wordmark "NAIOM" in white caps bottom-right. typography: Aeonik / Satoshi extra-bold, tight tracking, flat. No drop shadow, no bevel. magic prompt: off. No humanoid robot, no brain imagery, no stock photo cliche.
```

---

## 5. Negative prompts communs *(à réutiliser sur tous les outils quand supporté)*

- `humanoid robot, android, mechanical humanoid, C-3PO, cyborg`
- `brain, neurons, neural network, synapses, glowing blue brain`
- `circuit board, motherboard, binary code, matrix rain, holograms`
- `stock photo, shutterstock, generic office, corporate handshake, business meeting cliche`
- `distorted text, gibberish letters, misspelled words, warped typography` (Midjourney / Gemini)
- `watermark, logo, signature, frame border`
- `deformed hands, extra fingers, human faces in focus` (on ne veut **pas** de personnes reconnaissables)
- `plastic 3d render, videogame CGI look`

---

## 6. Notes & recommandations d'itération

- **Texte dans l'image** : Midjourney et Gemini rendront la baseline *"Le SDR qui ne prend jamais de congés"* de façon illisible dans ~80 % des cas → **utiliser Ideogram** pour toutes les covers avec typo, et réserver Midjourney/Gemini aux hero sans texte (à typographier ensuite dans Canva si besoin d'un plan B).
- **Palette** : sur Midjourney, le rose nude `#F5D5CB` a tendance à dériver vers saumon/corail → si le rendu est trop saturé, remplacer `nude pink F5D5CB` par `pale dusty pink, desaturated, warm skin-tone pink` dans le prompt, et ajouter `--no saturated pink, magenta, hot pink`.
- **Interdiction robot humanoïde** : bloquante. Si une variante fait apparaître une silhouette humaine en arrière-plan, la relancer avec `no people visible, empty workspace, nobody in the room` renforcé.
- **Concept C3 (split-screen)** : plus difficile à garder propre en 9:16 (la couture verticale casse la lisibilité) → le limiter au 16:9.
- **Déclinaison 9:16 des Ideogram** : relancer IDE-1 et IDE-4 en `aspect ratio 9:16` avec la typo repositionnée centre-bas (éviter les bords supérieurs coupés par l'UI Instagram/YouTube Shorts).
- **Safe zones réseaux** : sur cover LinkedIn page, éviter toute typo dans les 15 % du bord gauche (logo de la page vient se superposer). Sur thumbnail YouTube, laisser 10 % en bas-droite pour la durée de la vidéo.
- **Cohérence marque** : dans toutes les typos Ideogram, écrire **"NAIOM"** en capitales (jamais "Naïom" avec tréma en dehors du logo officiel — cf. brand.md §4).
- **Itération recommandée** : générer 4 seeds par variante Ideogram pour obtenir un rendu typo propre ; pour Midjourney, utiliser `--seed` fixe une fois qu'une compo plaît pour décliner proprement en 1:1 et 9:16.

---

**Récap variantes** : Midjourney 4 · Gemini 3 · Ideogram 4 — total **11 variantes**, couvrant les 3 formats demandés (16:9 / 1:1 / 9:16) et les 2 concepts principaux C1 + C2 (plus 1 piste C3 en alt).

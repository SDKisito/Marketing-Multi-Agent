# Guide de production & mise en ligne — Nando IT Solutions Multi-Agent Platform

> Version 1.0 · 2026-06-12 · À jour avec l'architecture Next.js 16 + Railway + Claude API

---

## 1. Architecture de la plateforme

```
nando-it-platform/          ← Application Next.js 16 (App Router + Turbopack)
├── src/app/                ← Pages : /, /agents/[slug], /calendrier, /dashboard, /settings
├── src/api/                ← Routes API : chat, integrations, deliverables, reports…
├── src/components/         ← UI : Sidebar, CalendarGrid, AgentChat, DeliverableModal…
├── src/lib/                ← Logique : agents, deliverables, integrations Google/Gmail/YouTube
├── src/data/               ← Données live (JSON) + tokens Google
└── railway.toml            ← Config déploiement Railway (build + start + healthcheck)

Dossiers livrables (à la racine du repo, hors nando-it-platform/) :
├── .claude/agents/         ← System prompts des 9 agents (lus au runtime)
├── briefs/                 ← Livrables Stratège
├── content/                ← Livrables Créateur
├── prompts-images/         ← Livrables Designer
├── decks/                  ← Livrables Présentateur
├── analytics/              ← Livrables Analyste
├── gmail/                  ← Livrables Agent Gmail
├── hiring/                 ← Livrables Agent CV
└── meetings/               ← Livrables Agent Fireflies
```

**Point critique** : `REPO_ROOT = path.resolve(process.cwd(), "..")` — le serveur Next.js doit être lancé depuis `nando-it-platform/` pour que les chemins vers les livrables soient corrects.

---

## 2. Prérequis

| Outil | Version minimum | Vérification |
|---|---|---|
| Node.js | 20 LTS | `node -v` |
| npm | 10+ | `npm -v` |
| Git | 2.40+ | `git --version` |
| Compte Railway | — | railway.app |
| Clé API Anthropic | Claude Sonnet ou Opus | console.anthropic.com |
| Compte Google Cloud (optionnel) | — | console.cloud.google.com |

---

## 3. Variables d'environnement

Créer `.env.local` dans `nando-it-platform/` (jamais commité — vérifier `.gitignore`).

### 3.1 Variables obligatoires

```bash
# Anthropic — moteur de tous les agents
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx

# URL de base (modifier selon l'environnement)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3.2 Variables Google (optionnelles — débloquent YouTube / Gmail / Drive)

```bash
# Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 Client ID
GOOGLE_CLIENT_ID=xxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxxxxxxxxxxxxx

# En local :
GOOGLE_REDIRECT_URI=http://localhost:3000/api/integrations/google/callback
# En production (Railway) :
# GOOGLE_REDIRECT_URI=https://votre-domaine.railway.app/api/integrations/google/callback
```

### 3.3 Variables Fireflies (optionnel — transcription calls)

```bash
FIREFLIES_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

### 3.4 Récapitulatif pour Railway

Dans Railway → Service → Variables, ajouter :

| Variable | Valeur |
|---|---|
| `ANTHROPIC_API_KEY` | votre clé Anthropic |
| `NEXT_PUBLIC_BASE_URL` | `https://votre-app.railway.app` |
| `GOOGLE_CLIENT_ID` | *(si Google activé)* |
| `GOOGLE_CLIENT_SECRET` | *(si Google activé)* |
| `GOOGLE_REDIRECT_URI` | `https://votre-app.railway.app/api/integrations/google/callback` |
| `NODE_ENV` | `production` *(auto via railway.toml)* |

---

## 4. Lancement en local (développement)

```bash
# 1. Cloner le repo
git clone <url-du-repo>
cd "MARKETING MULTI AGENT copie 2"

# 2. Installer les dépendances
cd nando-it-platform
npm ci

# 3. Créer le fichier .env.local
cp .env.example .env.local   # si .env.example existe
# ou créer manuellement avec les variables §3

# 4. Lancer le serveur de développement
npm run dev
# → http://localhost:3000

# En cas d'erreur Turbopack (cache corrompu) :
# Windows : cmd /c "rd /s /q .next"
# Mac/Linux : rm -rf .next
# puis relancer npm run dev
```

---

## 5. Build de production (vérification locale)

```bash
cd nando-it-platform

# Build complet (vérifie les erreurs TypeScript + compilation Next.js)
npm run build

# Lancer en mode production local
npm start
# → http://localhost:3000
```

**Avant de pousser en production**, vérifier :
- [ ] `npm run build` passe sans erreur
- [ ] La page `/` charge correctement
- [ ] `/agents/orchestrateur` répond au chat
- [ ] `/calendrier` s'ouvre
- [ ] `/settings` affiche le statut des intégrations

---

## 6. Déploiement Railway — étape par étape

### 6.1 Première mise en ligne

```bash
# Installer la CLI Railway (une fois)
npm install -g @railway/cli

# Authentification
railway login

# Depuis la racine du repo (pas nando-it-platform/)
railway init          # crée un nouveau projet Railway
railway up            # déclenche le premier déploiement
```

### 6.2 Configuration du service dans Railway

1. Railway dashboard → votre projet → **New Service** → **GitHub Repo**
2. **Root Directory** : laisser vide (le `railway.toml` est à la racine de `nando-it-platform/`)

   > Attention : si Railway détecte la racine du repo parent, configurer le **Root Directory** sur `nando-it-platform` dans les settings du service.

3. **Build Command** : `npm ci && npm run build` *(déjà dans railway.toml)*
4. **Start Command** : `npm start` *(déjà dans railway.toml)*
5. **Healthcheck Path** : `/` *(déjà dans railway.toml)*

### 6.3 Variables d'environnement Railway

Railway dashboard → Service → **Variables** → ajouter toutes les variables du §3.4.

### 6.4 Domaine personnalisé

Railway dashboard → Service → **Settings** → **Domains** :
- Domaine Railway gratuit : `votre-app.up.railway.app`
- Domaine personnalisé : ajouter `app.nando-it.fr` + configurer le CNAME chez votre registrar

### 6.5 Déploiements suivants

```bash
# Pousser sur la branche main déclenche le redéploiement automatique
git push origin main
```

---

## 7. Configuration Google OAuth (pour Gmail / YouTube / Drive)

### 7.1 Créer le projet Google Cloud

1. console.cloud.google.com → **Nouveau projet** : "Nando IT Platform"
2. **APIs & Services** → **Bibliothèque** → activer :
   - Google Drive API
   - Gmail API
   - YouTube Data API v3
   - YouTube Analytics API
3. **APIs & Services** → **Écran de consentement OAuth** :
   - Type : Externe
   - Nom : "Nando IT Solutions"
   - Email de support : s.diedhiou@nando-it.fr
   - Scopes : ajouter les scopes Gmail + YouTube + Drive
4. **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID** :
   - Type : Web application
   - Authorized redirect URIs :
     - `http://localhost:3000/api/integrations/google/callback` (dev)
     - `https://votre-domaine.railway.app/api/integrations/google/callback` (prod)

### 7.2 Connexion via la plateforme

1. Ouvrir `/settings` sur la plateforme
2. Cliquer **Connecter Google** → écran de consentement Google
3. Les tokens sont persistés dans `src/data/google-tokens.json` (gitignore)
4. En production Railway : les tokens sont en mémoire par déploiement — reconnecter après chaque redéploiement OU configurer un stockage persistant (Redis / base de données)

---

## 8. Onboarding d'un nouveau client

### 8.1 Déploiement dédié (instance client)

Chaque client a son instance Railway séparée :

```bash
# Depuis la racine du repo
railway init --name "client-nom"
railway up
```

Configurer les variables d'environnement spécifiques au client.

### 8.2 Personnalisation de la plateforme pour un client

1. **Agents** : modifier les system prompts dans `.claude/agents/` (client, ton, langue)
2. **Livrables** : les dossiers `briefs/`, `content/`, etc. sont vides au départ — les agents les remplissent
3. **Sidebar** : le nom "Nando IT" dans `Sidebar.tsx` peut être paramétré via une variable d'env `NEXT_PUBLIC_BRAND_NAME`

### 8.3 Checklist de livraison client

```
Pré-livraison :
[ ] npm run build passe sans erreur
[ ] ANTHROPIC_API_KEY valide (tester le chat sur /agents/orchestrateur)
[ ] Domaine personnalisé configuré et HTTPS actif
[ ] Google OAuth connecté (si intégrations Gmail/YouTube activées)
[ ] Livrables de démo dans briefs/ et content/ (optionnel)

À la livraison :
[ ] Démonstration sur /agents/orchestrateur (chat live)
[ ] Démonstration sur /calendrier
[ ] Démonstration sur /dashboard
[ ] Accès settings → montrer la connexion Google
[ ] Remettre le .env.local (jamais par email — utiliser 1Password ou Bitwarden)
[ ] Former le client : 30 min max — focus sur le chat orchestrateur

Post-livraison (J+7) :
[ ] Vérifier les logs Railway (pas d'erreurs 5xx)
[ ] S'assurer que les tokens Google ne sont pas expirés
[ ] Vérifier que les livrables générés sont dans les bons dossiers
```

---

## 9. Surveillance et maintenance

### 9.1 Logs Railway

Railway dashboard → Service → **Logs** : surveiller les erreurs 5xx et les panics Turbopack.

**Erreur fréquente** : `Turbopack FATAL — Next.js package not found`
→ Cause : cache `.next` corrompu
→ Fix : forcer un redéploiement Railway (qui repart d'un cache propre)

### 9.2 Vérification de santé

```bash
# Healthcheck manuel
curl -I https://votre-app.railway.app/
# Attendre HTTP/1.1 200 OK

# Test de l'API chat
curl -X POST https://votre-app.railway.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Bonjour, tu es qui ?"}],"agentSlug":"orchestrateur"}'
```

### 9.3 Renouvellement des tokens Google

Les tokens OAuth Google expirent. Si les intégrations Gmail/YouTube ne répondent plus :
1. Ouvrir `/settings`
2. Cliquer **Déconnecter** puis **Reconnecter Google**

### 9.4 Mise à jour de la plateforme

```bash
git pull origin main
cd nando-it-platform
npm ci
npm run build    # vérifier localement avant de pousser
git push origin main   # déclenche Railway
```

---

## 10. Sécurité — points de vigilance

| Risque | Mitigation |
|---|---|
| `.env.local` commité | Vérifier `.gitignore` : `**/.env.local`, `**/google-tokens.json` |
| Clé Anthropic exposée | Ne jamais la mettre dans `NEXT_PUBLIC_*` (côté client) |
| Tokens Google en clair | `google-tokens.json` est dans `.gitignore` — ne pas le commiter |
| Accès non authentifié | La plateforme n'a pas d'auth pour l'instant — déployer en réseau privé ou ajouter Basic Auth Railway |
| Paths traversal | `REPO_ROOT` résolu via `path.resolve` — ne pas exposer les endpoints de lecture de fichier sans validation |

---

## 11. Stack technique complète

| Couche | Technologie | Version |
|---|---|---|
| Framework | Next.js | 16.2.4 |
| Runtime | Node.js | 20 LTS |
| Bundler | Turbopack | (intégré Next.js 16) |
| UI | React | 19.2.4 |
| Styles | Tailwind CSS | 4 |
| Icônes | Lucide React | 1.8.0 |
| IA | Anthropic SDK (`@ai-sdk/anthropic`) | 3.0.71 |
| Streaming | Vercel AI SDK (`ai`) | 6.0.168 |
| Markdown | gray-matter + react-markdown | — |
| PDF | Puppeteer | 24.41.0 |
| Déploiement | Railway (Nixpacks) | — |
| Intégrations | Google OAuth 2.0 natif (pas de SDK tiers) | — |

---

*Maintenu par Nando IT Solutions · s.diedhiou@nando-it.fr · 07 68 04 81 36 · nando-it.fr*

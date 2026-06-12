# Guide déploiement client — Option A : Une instance par client

> Nando IT Solutions · 2026-06-12
> Deux options couvertes : **Railway** (démarrage rapide) et **VPS Hostinger** (économique en volume)

---

## Principe

Chaque client = un déploiement indépendant avec :
- Sa propre URL (`agence-dupont.nando-it.fr` ou `app.agence-dupont.fr`)
- Sa propre clé Anthropic (ou la tienne, refacturée)
- Ses propres agents personnalisés (ton, secteur, persona)
- Ses propres livrables (briefs, content, decks)
- Son propre `.env` (isolation totale)

---

# OPTION 1 — RAILWAY

## Tarifs Railway

| Usage | Prix |
|---|---|
| 1 instance active | ~5 $/mois |
| 5 clients | ~25 $/mois |
| 10 clients | ~50 $/mois |
| Domaine personnalisé | Inclus |
| HTTPS automatique | Inclus |

## Prérequis

- Compte Railway : railway.app
- CLI installée : `npm install -g @railway/cli`
- Repo GitHub du projet (1 repo = source commune pour tous les clients)

---

## Étape 1 — Préparer le repo source

Le repo contient la plateforme. Chaque client est un **déploiement séparé** du même repo, différencié uniquement par ses variables d'environnement et ses fichiers agents.

```
MARKETING MULTI AGENT copie 2/
├── nando-it-platform/      ← code source commun
├── .claude/agents/         ← agents par défaut
├── clients/
│   ├── nando-it/           ← config interne
│   ├── agence-dupont/      ← nouveau client
│   └── agence-martin/      ← nouveau client
└── docs/
```

---

## Étape 2 — Créer un projet Railway par client

```bash
# Authentification (une seule fois)
railway login

# Pour chaque nouveau client :
railway init --name "client-agence-dupont"
# Railway demande : "Link to existing repo?" → Yes → sélectionner le repo GitHub

# Déployer
railway up
```

Ou depuis l'interface Railway :
1. railway.app → **New Project**
2. **Deploy from GitHub repo** → sélectionner le repo
3. **Service name** : `agence-dupont`
4. **Root Directory** : `nando-it-platform`

---

## Étape 3 — Variables d'environnement par client

Dans Railway dashboard → Service `agence-dupont` → **Variables** :

```
ANTHROPIC_API_KEY        = sk-ant-CLE_DU_CLIENT_OU_LA_TIENNE
NEXT_PUBLIC_BASE_URL     = https://agence-dupont.up.railway.app
NEXT_PUBLIC_BRAND_NAME   = Agence Dupont
NODE_ENV                 = production

# Si Google activé pour ce client :
GOOGLE_CLIENT_ID         = xxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET     = GOCSPX-xxxxxxxxxxxxxxxx
GOOGLE_REDIRECT_URI      = https://agence-dupont.up.railway.app/api/integrations/google/callback
```

**Règle de facturation de la clé Anthropic :**
- **Option A** : le client fournit sa propre clé → il paie Anthropic directement
- **Option B** : tu utilises ta clé → tu factures la consommation avec marge (coût Anthropic ~2-5$/mois pour usage normal)

---

## Étape 4 — Domaine personnalisé Railway

Railway dashboard → Service → **Settings** → **Domains** :

### Sous-domaine Nando IT (rapide)
```
agence-dupont.nando-it.fr
```
Chez ton registrar (ex. OVH) → DNS → ajouter :
```
Type : CNAME
Nom  : agence-dupont
Valeur : <url-fournie-par-railway>.up.railway.app
TTL  : 3600
```

### Domaine propre au client (premium)
```
app.agence-dupont.fr
```
Le client configure chez son registrar :
```
Type : CNAME
Nom  : app
Valeur : <url-fournie-par-railway>.up.railway.app
TTL  : 3600
```
Railway active le HTTPS automatiquement (Let's Encrypt).

---

## Étape 5 — Personnaliser les agents pour le client

Avant de déployer, adapter les fichiers agents dans le repo :

```bash
# Créer une branche client (optionnel mais propre)
git checkout -b client/agence-dupont

# Modifier les system prompts pour ce client
# dans .claude/agents/strategiste.md → adapter le secteur, l'ICP, le ton
# dans .claude/agents/createur-contenu.md → adapter la voix, les formats
```

Ou gérer via les variables d'env en ajoutant un champ `CLIENT_CONTEXT` injecté dans les prompts (évolution future).

---

## Étape 6 — Déploiements suivants

Mise à jour de la plateforme pour TOUS les clients :
```bash
git push origin main
# Railway redéploie automatiquement tous les services liés à ce repo
```

Mise à jour pour UN seul client :
```bash
git checkout client/agence-dupont
# faire les modifications
git push origin client/agence-dupont
# Railway redéploie uniquement ce service
```

---

## Checklist Railway par client

```
Pré-déploiement :
[ ] Repo GitHub à jour (npm run build passe en local)
[ ] Variables d'env saisies dans Railway
[ ] Root Directory = nando-it-platform
[ ] Agents personnalisés pour ce client

Déploiement :
[ ] railway up OU push sur la branche liée
[ ] Vérifier les logs Railway (pas d'erreur build)
[ ] Tester l'URL Railway (.up.railway.app)
[ ] Configurer le domaine personnalisé
[ ] Vérifier HTTPS actif (cadenas dans le navigateur)

Livraison client :
[ ] Tester /agents/orchestrateur (chat fonctionnel)
[ ] Tester /calendrier
[ ] Tester /dashboard
[ ] Former le client 30 min
[ ] Remettre les credentials via canal sécurisé (1Password, Bitwarden)
```

---

---

# OPTION 2 — VPS HOSTINGER

## Quand choisir Hostinger vs Railway

| Critère | Railway | Hostinger VPS |
|---|---|---|
| Facilité | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Prix (1 client) | 5$/mois | 4-8€/mois (mais 1 VPS = N clients) |
| Prix (5 clients) | 25$/mois | ~8€/mois (même VPS) |
| Prix (10 clients) | 50$/mois | ~15€/mois (VPS plus grand) |
| Contrôle | Limité | Total |
| Maintenance | Automatique | Manuelle (updates, sécurité) |
| Seuil de rentabilité | < 5 clients | > 5 clients |

**Conclusion** : Hostinger devient rentable à partir de 5-6 clients actifs.

---

## Tarifs Hostinger VPS

| Plan | RAM | vCPU | Stockage | Prix | Clients estimés |
|---|---|---|---|---|---|
| KVM 1 | 4 Go | 2 | 50 Go NVMe | ~4€/mois | 3-4 instances |
| KVM 2 | 8 Go | 4 | 100 Go NVMe | ~8€/mois | 6-8 instances |
| KVM 4 | 16 Go | 8 | 200 Go NVMe | ~15€/mois | 12-15 instances |

Choisir Ubuntu 22.04 LTS comme OS.

---

## Architecture sur VPS Hostinger

```
VPS Hostinger (Ubuntu 22.04)
├── Nginx (reverse proxy + SSL)
│   ├── agence-dupont.nando-it.fr → localhost:3001
│   ├── agence-martin.nando-it.fr → localhost:3002
│   └── agence-lebrun.nando-it.fr → localhost:3003
├── PM2 (gestionnaire de processus Node)
│   ├── app-dupont  (port 3001)
│   ├── app-martin  (port 3002)
│   └── app-lebrun  (port 3003)
└── Certbot (HTTPS Let's Encrypt automatique)
```

---

## Étape 1 — Configurer le VPS Hostinger

### 1.1 Commander le VPS
1. hostinger.fr → VPS → choisir KVM 2 (recommandé)
2. OS : **Ubuntu 22.04 LTS**
3. Région : Europe (Frankfurt ou Amsterdam)
4. Récupérer l'IP du VPS dans le panel Hostinger

### 1.2 Connexion SSH
```bash
# Depuis ton terminal (Windows : utiliser Git Bash ou WSL)
ssh root@<IP_VPS>
# Mot de passe : celui défini lors de la commande
```

### 1.3 Sécurisation de base
```bash
# Mettre à jour le système
apt update && apt upgrade -y

# Créer un utilisateur non-root
adduser nando
usermod -aG sudo nando

# Désactiver le login root SSH (sécurité)
nano /etc/ssh/sshd_config
# Modifier : PermitRootLogin no
systemctl restart sshd

# Se connecter avec le nouvel utilisateur
su - nando
```

---

## Étape 2 — Installer Node.js et PM2

```bash
# Installer Node.js 20 LTS via NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
node -v  # vérifier : v20.x.x

# Installer PM2 (gestionnaire de processus)
npm install -g pm2

# Démarrer PM2 au boot
pm2 startup
# Copier-coller la commande affichée, puis :
pm2 save
```

---

## Étape 3 — Installer Nginx et Certbot

```bash
# Nginx (reverse proxy)
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx

# Certbot (HTTPS gratuit Let's Encrypt)
sudo apt install certbot python3-certbot-nginx -y
```

---

## Étape 4 — Déployer une instance client

### 4.1 Cloner le repo pour ce client

```bash
# Créer un dossier par client
mkdir -p /home/nando/apps
cd /home/nando/apps

# Cloner le repo
git clone <url-du-repo> agence-dupont
cd agence-dupont/nando-it-platform

# Installer les dépendances
npm ci

# Créer le .env.local
nano .env.local
```

Contenu du `.env.local` :
```bash
ANTHROPIC_API_KEY=sk-ant-CLE_DU_CLIENT
NEXT_PUBLIC_BASE_URL=https://agence-dupont.nando-it.fr
NEXT_PUBLIC_BRAND_NAME=Agence Dupont
NODE_ENV=production
```

### 4.2 Builder l'application

```bash
npm run build
```

### 4.3 Lancer avec PM2

```bash
# Depuis nando-it-platform/
pm2 start npm --name "agence-dupont" -- start -- -p 3001

# Vérifier que ça tourne
pm2 status
pm2 logs agence-dupont
```

**Attribution des ports** (tenir un registre) :

| Client | PM2 name | Port |
|---|---|---|
| agence-dupont | agence-dupont | 3001 |
| agence-martin | agence-martin | 3002 |
| agence-lebrun | agence-lebrun | 3003 |
| client-4 | client-4 | 3004 |

---

## Étape 5 — Configurer Nginx pour ce client

```bash
sudo nano /etc/nginx/sites-available/agence-dupont
```

Coller :
```nginx
server {
    listen 80;
    server_name agence-dupont.nando-it.fr;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/agence-dupont /etc/nginx/sites-enabled/
sudo nginx -t         # vérifier la config
sudo systemctl reload nginx
```

---

## Étape 6 — Activer le HTTPS

### DNS d'abord (chez ton registrar)
```
Type : A
Nom  : agence-dupont
Valeur : <IP_VPS_HOSTINGER>
TTL  : 3600
```
Attendre 5-15 min que le DNS se propage.

### Générer le certificat SSL
```bash
sudo certbot --nginx -d agence-dupont.nando-it.fr
# Entrer l'email pour les alertes d'expiration
# Accepter les conditions
# Choisir "Redirect" pour forcer HTTPS
```

Certbot renouvelle automatiquement les certificats tous les 90 jours.

---

## Étape 7 — Mises à jour

### Mettre à jour UN client
```bash
cd /home/nando/apps/agence-dupont
git pull origin main
cd nando-it-platform
npm ci
npm run build
pm2 restart agence-dupont
```

### Mettre à jour TOUS les clients (script)

Créer `/home/nando/update-all.sh` :
```bash
#!/bin/bash
CLIENTS=("agence-dupont" "agence-martin" "agence-lebrun")

for client in "${CLIENTS[@]}"; do
  echo "=== Mise à jour $client ==="
  cd /home/nando/apps/$client
  git pull origin main
  cd nando-it-platform
  npm ci
  npm run build
  pm2 restart $client
  echo "=== $client OK ==="
done

pm2 save
```

```bash
chmod +x /home/nando/update-all.sh
# Lancer :
./update-all.sh
```

---

## Étape 8 — Ajouter un nouveau client (procédure complète)

```bash
# 1. Cloner
cd /home/nando/apps
git clone <url-repo> agence-martin
cd agence-martin/nando-it-platform

# 2. Configurer
npm ci
nano .env.local   # adapter ANTHROPIC_API_KEY, BASE_URL, BRAND_NAME

# 3. Builder
npm run build

# 4. Lancer sur le port suivant disponible (ex: 3002)
pm2 start npm --name "agence-martin" -- start -- -p 3002
pm2 save

# 5. Nginx
sudo nano /etc/nginx/sites-available/agence-martin
# (copier le template Nginx en changeant server_name et proxy_pass port)
sudo ln -s /etc/nginx/sites-available/agence-martin /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 6. DNS : ajouter l'entrée A chez le registrar

# 7. HTTPS
sudo certbot --nginx -d agence-martin.nando-it.fr

# 8. Tester
curl -I https://agence-martin.nando-it.fr
```

---

## Checklist VPS Hostinger par client

```
Installation initiale (une seule fois) :
[ ] VPS commandé Ubuntu 22.04
[ ] Node.js 20 + PM2 installés
[ ] Nginx + Certbot installés
[ ] Utilisateur nando créé

Par nouveau client :
[ ] Repo cloné dans /home/nando/apps/<client>
[ ] .env.local configuré
[ ] npm run build OK
[ ] PM2 lancé sur le bon port
[ ] PM2 save (persistance au reboot)
[ ] Config Nginx créée et activée
[ ] DNS enregistrement A configuré (attendre propagation)
[ ] Certbot HTTPS activé
[ ] Test curl -I https://<domaine> → 200 OK
[ ] Test /agents/orchestrateur (chat fonctionnel)
```

---

## Comparatif final Railway vs Hostinger VPS

| | Railway | Hostinger VPS KVM 2 |
|---|---|---|
| **Prix mensuel (5 clients)** | ~25$ | ~8€ |
| **Prix mensuel (10 clients)** | ~50$ | ~8€ |
| **Temps de déploiement** | 5 min | 30 min la 1ère fois, 10 min ensuite |
| **Maintenance** | Aucune | Mises à jour OS, monitoring |
| **Compétences requises** | Aucune | SSH, Linux basique |
| **Scalabilité** | Illimitée | Limité par la RAM du VPS |
| **Support** | Railway support | Hostinger support |
| **Idéal** | 1-5 clients | 5+ clients |

**Stratégie recommandée** :
1. Démarrer sur Railway (0 maintenance, rapide)
2. Migrer sur Hostinger VPS quand tu as 5-6 clients payants (économie ~30€/mois)

---

## Modèle de tarification suggéré

| Offre | Ce que tu fournis | Prix client |
|---|---|---|
| **Starter** | Plateforme + 3 agents + 1 domaine | 199€/mois |
| **Pro** | Plateforme + 9 agents + domaine + Google OAuth | 399€/mois |
| **Custom** | Agents sur-mesure + formation + SLA | 699€/mois |

Coût réel par client sur VPS : ~1-2€/mois + clé Anthropic (~3-5€/mois d'usage normal).
Marge brute : >95% sur l'infrastructure.

---

*Nando IT Solutions · s.diedhiou@nando-it.fr · 07 68 04 81 36 · nando-it.fr*

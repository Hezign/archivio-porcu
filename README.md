# Archivio Porcu — Site culturel & généalogique

Site Astro + Tailwind consacré au patronyme **Porcu**, à ses racines sardes, à la diaspora lorraine et au contexte historique du banditisme sarde.

---

## 📦 Stack

- **Astro 4** (statique, SSG)
- **Tailwind CSS 3**
- **TypeScript** pour les données structurées
- **SVG natif** pour la cartographie et le drapeau Quattro Mori (zéro dépendance externe)
- Fonts via Google Fonts : Cormorant Garamond, EB Garamond, Inter Tight, JetBrains Mono

---

## 🚀 Mise en route

```bash
# Installation
npm install

# Développement
npm run dev
# → http://localhost:4321

# Build production
npm run build

# Preview du build
npm run preview
```

---

## 📁 Architecture

```
src/
├── pages/
│   ├── index.astro                    # I · Accueil
│   ├── le-nom-porcu/index.astro       # II · Étymologie + carto
│   ├── sardaigne/index.astro          # III · Identité + Quattro Mori
│   ├── banditisme-sarde/index.astro   # IV · Contexte historique
│   ├── anonima-sarda/index.astro      # V · Enlèvements + frise
│   └── genealogie/index.astro         # VI · Arbre + méthode + contrib
├── layouts/
│   └── Layout.astro                   # Nav sticky + footer
├── components/
│   ├── MapSardegna.astro              # Carte SVG interactive (9 communes)
│   ├── Timeline.astro                 # Frise chronologique zigzag
│   ├── FamilyTree.astro               # Arbre généalogique vertical
│   └── ContribForm.astro              # Formulaire contribution
├── data/
│   ├── communes.ts                    # 9 communes + coordonnées + diaspora
│   ├── chronologie.ts                 # 9 jalons 1800-2026
│   └── arbre.ts                       # Structure arbre éditable
└── styles/
    └── global.css                     # Palette + typo + animations
```

---

## 🎨 Système de design

### Palette
- `parchemin` #f1e8d4 — fond principal
- `encre` #1f1a14 — texte, fonds sombres
- `rouge` #9a1b1f — accents (drapeau sarde / Saint-Georges)
- `sepia` #8a6a3e — éléments secondaires, lignes topo
- `pierre-*` — nuances granit

### Typographie
- **Display** : Cormorant Garamond (titres patrimoniaux)
- **Corps** : EB Garamond (lecture longue, éditorial)
- **UI** : Inter Tight (navigation, eyebrows)
- **Mono** : JetBrains Mono (coordonnées, dates techniques)

### Composants visuels signature
- Drop caps rouges sur paragraphes d'ouverture
- Lignes topographiques diagonales (`.topo-lines`)
- Grain de papier en overlay (SVG noise)
- Ornements typographiques `✦ ✦ ✦`
- Animations fade-up staggered au chargement

---

## ✏️ Édition du contenu

### Ajouter une commune
Éditer `src/data/communes.ts` :
```ts
{
  nom: 'Nouvelle commune',
  province: 'Province',
  lat: 40.0,
  lng: 9.0,
  notes: "Description...",
  priorite: false,
}
```
Le point apparaîtra automatiquement sur la carte (page II).

### Ajouter un événement à la frise
Éditer `src/data/chronologie.ts`. Catégories disponibles : `contexte`, `anonima`, `figure`.

### Remplir l'arbre généalogique
Éditer `src/data/arbre.ts`. **Règle d'or : ne jamais passer `verifie: true` sans acte probant.**

---

## 📮 Formulaire de contribution

Actuellement en mode placeholder (alert). À brancher :
- **Option 1 — Formspree** : remplacer `action="#"` par l'URL Formspree
- **Option 2 — Resend API** : créer `src/pages/api/contrib.ts` comme sur les-eclaires
- **Option 3 — n8n webhook** : POST JSON vers le webhook n8n

Fichier à modifier : `src/components/ContribForm.astro` (bas du fichier, `<script>`).

---

## 🚢 Déploiement

Configuration compatible Vercel prête à l'emploi :
```bash
vercel --prod
```
Ou auto-deploy via push GitHub (stack Hezign standard).

---

## ⚖️ Positionnement éditorial

> *« Ce site explore l'histoire culturelle du nom Porcu et le contexte du banditisme sarde, sans présumer de lien criminel pour l'ensemble des porteurs du nom. »*

Cette formule apparaît en clôture de la page Généalogie et dans le footer de toutes les pages.

---

## 📚 Sources documentées

- **Geneanet**, **FamilySearch**, **Antenati** — généalogie
- **Emeroteca Sarda**, **Le Monde** — presse historique
- **DIA** (Direzione Investigativa Antimafia), **Portale Antimafia** — archives judiciaires
- **Casalunga**, **Domenech** — historiographie spécialisée

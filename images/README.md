# 📸 Dossier Images APIzen

Ce dossier contient toutes les images utilisées sur le site APIzen.

## 🎨 Images à ajouter

Voici les images que vous devez créer ou ajouter dans ce dossier :

### Logos

1. **logo-noir.png** (recommandé : 200x60px, format PNG transparent)
   - Logo APIzen pour fond clair
   - Couleurs : Bleu (#0F4C81) + Vert (#4CAF88)

2. **logo-blanc.png** (recommandé : 200x60px, format PNG transparent)
   - Logo APIzen pour fond sombre (footer)
   - Couleur : Blanc

### Photos de projets

3. **projet-avath.jpg** (recommandé : 1200x800px, format JPG optimisé)
   - Photo du banc de test automatisé AVATH
   - Peut être remplacée par un schéma technique

4. **projet-email-api.jpg** (optionnel : 1200x800px)
   - Visuel représentant l'API d'emails
   - Peut être une illustration ou un screenshot

5. **projet-manufacturia.jpg** (optionnel : 1200x800px)
   - Visuel représentant ManufacturIA
   - Peut être une illustration d'usine ou dashboard

### Favicon

6. **favicon.ico** (16x16, 32x32, 48x48px)
   - Icône du site pour l'onglet du navigateur

7. **favicon-192.png** et **favicon-512.png**
   - Pour PWA et mobile

## 🛠️ Comment créer vos logos

### Option 1 : Canva (gratuit)
1. Allez sur [Canva.com](https://www.canva.com)
2. Créez un design "Logo" (taille personnalisée : 200x60px)
3. Utilisez les couleurs APIzen :
   - Bleu : #0F4C81
   - Vert : #4CAF88
4. Texte suggéré : "API" en bleu + "zen" en vert
5. Téléchargez en PNG transparent

### Option 2 : Figma (gratuit)
1. Créez un fichier Figma
2. Ajoutez du texte avec les polices Poppins
3. Colorez selon la charte
4. Exportez en PNG 2x

### Option 3 : Logo Maker en ligne
- [LogoMakr](https://logomakr.com/)
- [Hatchful by Shopify](https://hatchful.shopify.com/)
- [Looka](https://looka.com/)

## 📐 Spécifications techniques

### Formats recommandés
- **Logos** : PNG avec transparence
- **Photos** : JPG optimisé (qualité 80-85%)
- **Illustrations** : SVG ou PNG haute résolution

### Tailles recommandées
```
Logo navigation     : 200x60px (ou 150x45px)
Logo footer        : 200x60px
Photos projets     : 1200x800px (ratio 3:2)
Favicon            : 32x32px
Open Graph image   : 1200x630px (pour réseaux sociaux)
```

### Optimisation
Utilisez des outils comme :
- [TinyPNG](https://tinypng.com/) - Compression PNG/JPG
- [Squoosh](https://squoosh.app/) - Compression et conversion
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimisation SVG

## 🎭 Images placeholders

En attendant vos vraies images, vous pouvez utiliser des placeholders :

### Services de placeholder
```html
<!-- Logo temporaire -->
<img src="https://via.placeholder.com/200x60/0F4C81/FFFFFF?text=APIzen" alt="Logo APIzen">

<!-- Photo projet temporaire -->
<img src="https://via.placeholder.com/1200x800/4CAF88/FFFFFF?text=Projet+AVATH" alt="Projet AVATH">
```

### Illustrations gratuites
- [unDraw](https://undraw.co/) - Illustrations SVG personnalisables
- [Storyset](https://storyset.com/) - Illustrations animées
- [Icons8](https://icons8.com/illustrations) - Illustrations variées

### Photos libres de droits
- [Unsplash](https://unsplash.com/) - Photos haute qualité
- [Pexels](https://www.pexels.com/) - Photos et vidéos
- [Pixabay](https://pixabay.com/) - Images et illustrations

## 🔗 Utilisation dans le code

Une fois vos images ajoutées, référencez-les dans `index.html` :

```html
<!-- Logo dans le header -->
<a href="#" class="nav__logo">
    <img src="images/logo-noir.png" alt="APIzen Logo" width="150" height="45">
</a>

<!-- Photo de projet -->
<div class="projet__image">
    <img src="images/projet-avath.jpg" alt="Banc de test AVATH" loading="lazy">
</div>

<!-- Favicon dans le <head> -->
<link rel="icon" type="image/x-icon" href="images/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
```

## ✅ Checklist

- [ ] Logo principal (logo-noir.png)
- [ ] Logo footer (logo-blanc.png)
- [ ] Photo projet AVATH
- [ ] Favicon (plusieurs tailles)
- [ ] Open Graph image (pour partages sociaux)
- [ ] Optimisation de toutes les images

## 💡 Conseils

1. **Toujours optimiser** vos images avant de les ajouter
2. **Utiliser le lazy loading** pour les images sous la ligne de flottaison
3. **Fournir plusieurs résolutions** pour les écrans Retina
4. **Ajouter des attributs alt** descriptifs pour l'accessibilité
5. **Format WebP** en complément pour meilleure performance

---

*Ce dossier fait partie du projet APIzen Portfolio*

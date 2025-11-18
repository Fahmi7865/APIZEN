# 🧘 APIzen - Portfolio Professionnel

Site web portfolio moderne et responsive pour **APIzen**, entreprise de développement d'API sur mesure fondée par Fahmi.

![APIzen](https://img.shields.io/badge/APIzen-Portfolio-0F4C81?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Vue d'ensemble

Ce site portfolio présente l'expertise d'APIzen en développement d'API sur mesure, avec un design élégant inspiré de la philosophie "Zen" du code : simplicité, robustesse et élégance.

### ✨ Fonctionnalités principales

- **Hero Section dynamique** avec effet de typing animé
- **Navigation fixe** qui se réduit au scroll avec menu hamburger mobile
- **Animations fluides** au défilement (scroll reveal)
- **Sections interactives** :
  - 🛠️ Compétences avec cartes flip effect
  - 📍 Réalisations en timeline verticale
  - 🧘 Philosophie d'entreprise
  - 🚀 Parcours professionnel
  - 📧 Formulaire de contact avec validation
- **Design 100% responsive** (mobile, tablette, desktop)
- **Accessibilité optimisée** (ARIA labels, navigation clavier)
- **Performance élevée** (animations optimisées, lazy loading)

## 🎨 Design System

### Palette de couleurs

```css
--bleu-confiance: #0F4C81;    /* Couleur principale - Confiance */
--vert-harmonie: #4CAF88;     /* Couleur secondaire - Harmonie */
--blanc-pure: #ffffff;        /* Fond principal */
--noir-professionnel: #1a1a1a;/* Texte principal */
--gris-elegant: #f8f9fa;      /* Fond alternatif */
```

### Typographie

- **Titres** : Poppins (600, 700, 800)
- **Corps** : Inter (300, 400, 500, 600, 700)
- Système de fallback robuste pour compatibilité maximale

## 📁 Structure du projet

```
apizen-site/
├── index.html          # Page HTML principale
├── style.css           # Styles CSS avec variables
├── script.js           # Interactions JavaScript
├── images/             # Dossier pour les images
│   ├── logo-noir.png   # Logo principal (à ajouter)
│   ├── logo-blanc.png  # Logo pour fond sombre (à ajouter)
│   └── projet-*.jpg    # Photos des projets (à ajouter)
└── README.md           # Documentation du projet
```

## 🚀 Installation et déploiement

### Installation locale

1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. Aucune dépendance externe requise !

### Déploiement GitHub Pages

1. **Créer un repository GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - APIzen Portfolio"
   git branch -M main
   git remote add origin https://github.com/[votre-username]/apizen-portfolio.git
   git push -u origin main
   ```

2. **Activer GitHub Pages** :
   - Allez dans les Settings du repository
   - Section "Pages"
   - Source : `main` branch, dossier `/` (root)
   - Cliquez sur "Save"

3. **Votre site sera accessible à** :
   ```
   https://[votre-username].github.io/apizen-portfolio/
   ```

### Personnalisation domaine personnalisé

Pour utiliser un domaine comme `www.apizen.fr` :

1. Ajoutez un fichier `CNAME` à la racine avec votre domaine
2. Configurez les DNS chez votre registrar :
   ```
   Type  : CNAME
   Nom   : www
   Valeur: [votre-username].github.io
   ```

## ⚙️ Personnalisation

### Modifier les textes

Tous les textes sont directement dans `index.html`. Sections principales :
- **Hero** : lignes 55-75
- **Compétences** : lignes 90-180
- **Réalisations** : lignes 195-320
- **Contact** : lignes 450-550

### Modifier les couleurs

Variables CSS dans `style.css` (lignes 8-20) :
```css
:root {
    --bleu-confiance: #0F4C81;  /* Modifiez ici */
    --vert-harmonie: #4CAF88;   /* Modifiez ici */
    /* ... */
}
```

### Ajouter des images

1. Placez vos images dans le dossier `images/`
2. Référencez-les dans `index.html` :
   ```html
   <img src="images/votre-image.jpg" alt="Description">
   ```

### Configurer le formulaire de contact

Le formulaire est actuellement en mode simulation. Pour le connecter à un backend :

**Option 1 : Formspree (gratuit)**
```html
<form action="https://formspree.io/f/[votre-id]" method="POST">
```

**Option 2 : Votre API**
Modifiez la fonction `submit` dans `script.js` (ligne 250) :
```javascript
const response = await fetch('https://api.apizen.fr/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

Le site s'adapte automatiquement à toutes les tailles d'écran.

## ♿ Accessibilité

- Navigation complète au clavier (Tab, Enter, Espace)
- Labels ARIA pour les éléments interactifs
- Contrastes de couleurs vérifiés WCAG 2.1
- Support des lecteurs d'écran
- Mode "Préférence de mouvement réduit" respecté

## 🎯 Performance

### Optimisations incluses

- ✅ CSS et JavaScript optimisés
- ✅ Animations performantes (GPU accelerated)
- ✅ Intersection Observer pour les animations scroll
- ✅ Debounce sur les événements scroll
- ✅ Images responsive (à compléter avec vos images)

### Score cible Lighthouse

- **Performance** : > 90
- **Accessibilité** : > 95
- **Meilleures pratiques** : > 90
- **SEO** : > 95

## 🐛 Fonctionnalités JavaScript

### Typing Effect
Animation de texte qui tape et efface automatiquement plusieurs phrases.

### Scroll Animations
Éléments qui apparaissent progressivement lors du défilement.

### Menu Mobile
Menu hamburger animé avec overlay pour mobile/tablette.

### Validation Formulaire
Validation en temps réel avec messages d'erreur personnalisés.

### Scroll to Top
Bouton pour remonter en haut de page (apparaît après 400px de scroll).

### Easter Egg
Konami Code (↑↑↓↓←→←→BA) pour une surprise ! 🎉

## 📞 Support & Contact

**Fahmi - Fondateur APIzen**
- 📧 Email : contact@apizen.fr
- 💼 LinkedIn : [Votre profil LinkedIn]
- 💻 GitHub : [Votre profil GitHub]

## 📄 Licence

© 2025 APIzen - Tous droits réservés

---

## 🎓 Pour les développeurs

### Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox, Animations
- **JavaScript Vanilla** : Aucune dépendance externe
- **Fonts** : Google Fonts (Inter, Poppins)

### Bonnes pratiques implémentées

- ✅ Code commenté en français
- ✅ Variables CSS pour maintenance facile
- ✅ Noms de classes BEM-like
- ✅ Separation of concerns (HTML/CSS/JS)
- ✅ Mobile-first approach
- ✅ Progressive enhancement
- ✅ Graceful degradation

### Extensions recommandées (VS Code)

- Live Server : pour le développement local
- Prettier : formatage automatique
- CSS Peek : navigation rapide dans les styles

## 🚀 Roadmap futures améliorations

- [ ] Mode sombre / clair
- [ ] Multilingue (FR/EN)
- [ ] Blog intégré
- [ ] PWA (Progressive Web App)
- [ ] Backend API pour le formulaire
- [ ] Système de cache
- [ ] Analytics intégrés
- [ ] Chatbot de support

## 🙏 Remerciements

Inspiré par les meilleures pratiques de design moderne et les portfolios de développeurs talentueux.

---

**Développé avec ❤️ et beaucoup de ☕ par Fahmi**

*"Je ne vends pas du code, je vends de la sérénité technologique."*

# Portfolio — Dieudonné Houndagnon

Portfolio personnel de **Dieudonné Houndagnon**, Frontend Developer basé à Cotonou (Bénin), spécialisé dans la conception d'interfaces web rapides, accessibles et orientées résolution de problèmes (dashboards, back-offices, plateformes internes, produits SaaS).

🔗 **Live** : [dieudonne-dev.vercel.app](https://dieudonne-dev.vercel.app)

---

## ✨ Aperçu

Ce site présente mon parcours, mes compétences techniques et une sélection de projets réels avec un support bilingue complet FR / EN.

## 🛠️ Stack technique

- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Style** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Déploiement** : Vercel

## 📁 Structure du projet

landing-page/
├── app/
│ ├── layout.tsx # Layout global, polices, metadata
│ └── page.tsx # Assemblage des sections de la page
├── components/
│ ├── layout/
│ │ └── Navbar.tsx
│ ├── Hero.tsx
│ ├── About.tsx
│ ├── TechStack.tsx
│ ├── ProcessSteps.tsx # Timeline du processus de travail
│ ├── Contact.tsx
│ ├── Footer.tsx
│ └── Languagecontext.tsx # Contexte i18n FR / EN
├── public/
│ └── images/
├── tailwind.config.ts
├── tsconfig.json
└── package.json


## 🌍 Internationalisation

Le contenu FR / EN est géré via un contexte React custom (`useLanguage`), sans dépendance externe type `next-intl` — chaque composant définit son propre objet `content` avec les clés `FR` et `EN`, résolu dynamiquement selon la langue active.

## 🚀 Lancer le projet en local

```bash
# Cloner le repo
git clone https://github.com/rolnelh/landing-page.git
cd landing-page

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## 📦 Build de production

```bash
npm run build
npm run start
```

## 📬 Contact

- **GitHub** : [github.com/rolnelh](https://github.com/rolnelh)
- **LinkedIn** : [Dieudonné Houndagnon](https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250)
- **Email** : houndagnondieudonne4@gmail.com

## 📄 Licence

Ce projet est un portfolio personnel — le code est visible à titre de démonstration mais n'est pas destiné à être réutilisé tel quel sans autorisation.




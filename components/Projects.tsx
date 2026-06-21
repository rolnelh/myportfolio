


"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
    // Les autres champs (problem, solution, etc.) sont conservés dans la donnée 
    // mais ne sont plus affichés dans l'UI ici.
}

const projectsData: Record<"EN" | "FR", Project[]> = {
    EN: [
        {
            title: "ANIP Bénin – E-services Redesign",
            description: "Complete UI/UX overhaul of the National Identification Agency — mobile-first, simplified citizen journeys.",
            outcome: "Task completion rate improved · National e-services platform",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
            role: "UI/UX Designer & Frontend Developer",
            duration: "4 weeks",
            problem: "Benin's National Identification Agency portal had a high drop-off rate on core citizen tasks, especially on mobile, where most users were not comfortable with digital tools. Too many screens and steps stood between a citizen and a completed request.",
            solution: "I redesigned the entire platform with a mobile-first approach. I simplified the service access flow, built a clean dashboard for tracking request status, and reduced the number of screens required to complete core tasks.",
            results: [
                "Fully mobile-responsive redesign",
                "Core task completion steps reduced significantly",
                "Clean dashboard for request tracking",
                "Support call volume reduced by simplifying key flows",
            ],
        },
        {
            title: "Mefolio Platform",
            description: "The first African platform for creative talent — professional portfolios & project management in one ecosystem.",
            outcome: "Launched & live · African-first creator platform",
            image: "/images/mefolio.webp",
            link: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
            role: "Full-stack Developer & UI Designer",
            duration: "6 weeks",
            problem: "African creative professionals had no dedicated platform to showcase their work professionally. Existing solutions like Behance were not tailored to the African market, lacked local context, and were inaccessible to many due to connectivity constraints.",
            solution: "I designed and built a full-stack platform from scratch — a clean, fast, and mobile-optimized ecosystem where creatives can build their portfolio, manage client projects, and get discovered. I optimized the app for low-bandwidth connections common in West Africa.",
            results: [
                "Platform launched and live with real users",
                "Portfolio creation reduced from hours to under 10 minutes",
                "Mobile-first — works on 3G connections",
                "First African-dedicated creative portfolio platform",
            ],
        },
        {
            title: "L'Expo Platform",
            description: "Digital showcase for African artisans enabling professional catalog creation in minutes.",
            outcome: "Catalog creation time: 2 hrs → 8 min",
            image: "/images/lexpo-deskop.png",
            link: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
            role: "Frontend Developer & UX Designer",
            duration: "3 weeks",
            problem: "African artisans had no simple way to create a professional digital catalog. Using Shopify or building a website took hours and required technical skills most of them didn't have.",
            solution: "I designed a streamlined flow where artisans can create a professional catalog in under 10 minutes — no technical knowledge required. The interface uses simple language, large touch targets, and a step-by-step guided process.",
            results: [
                "Catalog creation time: 2 hours → 8 minutes",
                "Zero technical knowledge required to use",
                "Mobile-first — designed for smartphone users",
                "Clean shareable catalog link for each artisan",
            ],
        },
        {
            title: "Gozem Web Experience",
            description: "A strategic UI overhaul focused on restructuring the web platform for a seamless and premium user experience.",
            outcome: "Visual hierarchy and structure fully rebuilt",
            image: "/images/bbbb.png",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
            role: "Frontend Developer & UI Designer",
            duration: "2 weeks",
            problem: "The original Gozem web platform lacked a clear structure and a strong visual identity. The navigation was unintuitive, and the iconography failed to reflect the 'Super App' status, impacting the interface's credibility on modern screens.",
            solution: "I completely redesigned the platform, focusing on a logical section architecture and full responsiveness for a predominantly mobile audience. I implemented a new typographic hierarchy, integrated realistic icons for better immersion, and optimized every component to ensure a 'Pixel-Perfect' finish.",
            results: [
                "Fully restructured information architecture",
                "Realistic iconography integrated for enhanced immersion",
                "Responsiveness rebuilt for a mobile-majority audience",
                "Clarified navigation, significantly reducing user friction",
            ],
        },
        {
            title: "Admin Dashboard",
            description: "Intuitive admin interface for performance tracking, product management, and real-time sales analytics.",
            outcome: "50% faster data reading vs previous tool",
            image: "/images/dash.webp",
            link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
            role: "Frontend Developer & UI Designer",
            duration: "2 weeks",
            problem: "The client's team was spending 30+ minutes per day navigating a cluttered, outdated admin interface. Key metrics were buried under multiple clicks, and the tool wasn't usable on mobile — a major issue for managers on the go.",
            solution: "I rebuilt the dashboard UI from scratch with a focus on information hierarchy. The most critical KPIs are visible immediately on load. I used Shadcn components for consistency and built a responsive layout that works perfectly on tablets and phones.",
            results: [
                "Data reading time cut by 50%",
                "All key metrics visible without scrolling",
                "Fully responsive — works on mobile and tablet",
                "Real-time updates without page refresh",
            ],
        },
        {
            title: "My Portfolio",
            description: "Minimalist, high-speed showcase — 100% Lighthouse score for SEO & Best Practices.",
            outcome: "Perf 80 · SEO 100 · Best Practices 100",
            image: "/images/myportfolio.webp",
            link: "https://dieudonne-dev.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
            role: "Designer & Developer",
            duration: "3 weeks",
            problem: "My previous portfolio was generic, didn't communicate value clearly, and had a 75%+ bounce rate. Visitors came from multiple countries but nothing converted — no calls booked, no messages sent.",
            solution: "I completely redesigned it with a conversion-first mindset. New headline focused on client benefit, added social proof, clear service packages, a direct contact flow, and bilingual support. Every section was built to answer the visitor's unspoken question: 'why should I hire you?'",
            results: [
                "SEO score: 100/100 Lighthouse",
                "Best Practices: 100/100",
                "Bilingual EN/FR with context-aware translation",
                "Conversion-focused hero, services, and contact sections",
            ],
        },
    ],
    FR: [
        {
            title: "ANIP Bénin – Refonte E-services",
            description: "Refonte complète UI/UX du portail de l'Agence Nationale d'Identification — mobile-first.",
            outcome: "Taux de complétion amélioré · Portail national d'e-services",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
            role: "Designer UI/UX & Développeur Frontend",
            duration: "4 semaines",
            problem: "Le portail de l'Agence Nationale d'Identification du Bénin souffrait d'un taux d'abandon élevé sur les démarches essentielles, surtout sur mobile, où la majorité des usagers étaient peu à l'aise avec le numérique. Trop d'écrans et d'étapes séparaient un citoyen d'une démarche aboutie.",
            solution: "J'ai redesigné toute la plateforme en mobile-first. Simplifié l'accès aux services, construit un dashboard propre pour le suivi des demandes, et réduit le nombre d'écrans nécessaires pour les tâches essentielles.",
            results: [
                "Refonte entièrement responsive mobile",
                "Étapes pour tâches principales réduites significativement",
                "Dashboard propre pour le suivi des demandes",
                "Réduction des appels support par simplification des parcours",
            ],
        },
        {
            title: "Mefolio Platform",
            description: "La première plateforme africaine dédiée aux créatifs — portfolios professionnels & gestion de projets.",
            outcome: "Lancée & en ligne · Plateforme 100% africaine",
            image: "/images/mefolio.webp",
            link: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
            role: "Développeur Full-stack & Designer UI",
            duration: "6 semaines",
            problem: "Les professionnels créatifs africains n'avaient aucune plateforme dédiée pour présenter leur travail. Les solutions existantes comme Behance n'étaient pas adaptées au marché africain et mal optimisées pour les connexions lentes.",
            solution: "J'ai conçu et développé une plateforme full-stack from scratch — rapide, mobile-optimisée, permettant aux créatifs de construire leur portfolio et de gérer leurs projets clients. J'ai optimisé l'app pour les connexions faibles courantes en Afrique de l'Ouest.",
            results: [
                "Plateforme lancée et en ligne avec de vrais utilisateurs",
                "Création de portfolio réduite à moins de 10 minutes",
                "Mobile-first — fonctionne sur connexions 3G",
                "Première plateforme portfolio dédiée aux créatifs africains",
            ],
        },
        {
            title: "L'Expo Plateforme",
            description: "Vitrine digitale pour artisans africains permettant la création d'un catalogue pro en quelques minutes.",
            outcome: "Création catalogue : 2h → 8 min",
            image: "/images/lexpo-deskop.png",
            link: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
            role: "Développeur Frontend & Designer UX",
            duration: "3 semaines",
            problem: "Les artisans africains n'avaient aucun moyen simple de créer un catalogue digital professionnel. Utiliser Shopify ou créer un site prenait des heures et nécessitait des compétences techniques que la plupart n'avaient pas.",
            solution: "J'ai conçu un parcours simplifié où les artisans créent un catalogue professionnel en moins de 10 minutes — sans aucune compétence technique. Interface guidée étape par étape, en langage simple.",
            results: [
                "Création catalogue : 2 heures → 8 minutes",
                "Aucune compétence technique requise",
                "Mobile-first — conçu pour smartphones",
                "Lien de catalogue partageable propre",
            ],
        },
        {
            title: "Gozem Web Experience",
            description: "Modernisation et restructuration complète de l'interface web pour une expérience utilisateur fluide et premium.",
            outcome: "Hiérarchie visuelle et structure entièrement reconstruites",
            image: "/images/goze.png",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
            role: "Développeur Frontend & UI Designer",
            duration: "2 semaines",
            problem: "L'ancienne plateforme web de Gozem manquait de structure claire et d'une identité visuelle forte. La navigation était confuse et l'iconographie ne reflétait pas le standing de 'Super App', nuisant à la crédibilité de l'interface sur les écrans modernes.",
            solution: "J'ai entièrement redesigné la plateforme en me concentrant sur une structure de sections logique et une responsivité pensée pour une audience majoritairement mobile. J'ai intégré une nouvelle hiérarchie typographique, des icônes réalistes pour améliorer l'immersion, et optimisé chaque composant pour garantir un rendu 'Pixel-Perfect'.",
            results: [
                "Architecture de l'information totalement restructurée",
                "Iconographie réaliste intégrée pour une meilleure immersion",
                "Responsivité reconstruite pour une audience majoritairement mobile",
                "Navigation clarifiée et temps de compréhension réduit",
            ],
        },
        {
            title: "Dashboard Admin",
            description: "Interface admin intuitive pour le suivi des performances, la gestion des produits et l'analytique temps réel.",
            outcome: "Lecture des données 50% plus rapide",
            image: "/images/dash.webp",
            link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
            role: "Développeur Frontend & Designer UI",
            duration: "2 semaines",
            problem: "L'équipe du client passait plus de 30 minutes par jour à naviguer dans une interface admin encombrée et obsolète. Les métriques clés étaient enfouies sous plusieurs clics, et l'outil ne fonctionnait pas sur mobile.",
            solution: "J'ai reconstruit l'UI du dashboard from scratch en mettant l'accent sur la hiérarchie de l'information. Les KPIs les plus critiques sont visibles immédiatement au chargement. Interface responsive qui fonctionne sur tablettes et téléphones.",
            results: [
                "Temps de lecture des données réduit de 50%",
                "Toutes les métriques clés visibles sans scroller",
                "Entièrement responsive — mobile et tablette",
                "Mises à jour en temps réel sans rechargement",
            ],
        },
        {
            title: "Mon Portfolio",
            description: "Vitrine minimaliste et rapide — score Lighthouse 100% en SEO & Bonnes Pratiques.",
            outcome: "Perf 80 · SEO 100 · Bonnes pratiques 100",
            image: "/images/myportfolio.webp",
            link: "https://dieudonne-dev.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
            role: "Designer & Développeur",
            duration: "3 semaines",
            problem: "Mon ancien portfolio était générique, ne communiquait pas clairement ma valeur, et avait un taux de rebond de 75%+. Des visiteurs venaient de nombreux pays mais rien ne convertissait.",
            solution: "J'ai entièrement redesigné avec une approche conversion-first. Nouveau titre axé sur le bénéfice du visiteur, preuve sociale, packs de services clairs, parcours de contact direct, et support bilingue EN/FR.",
            results: [
                "SEO : 100/100 Lighthouse",
                "Bonnes pratiques : 100/100",
                "Bilingual EN/FR avec traduction contextuelle",
                "Sections hero, services et contact orientées conversion",
            ],
        },
    ],
};
export default function Projects() {
    const { language } = useLanguage();
    const lang = language === "EN" ? "EN" : "FR";
    const projects = projectsData[lang];

    return (
        <section id="projects" className="py-24 px-6 bg-[#09090B] text-white transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                <div className="mb-16 text-center space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                        {language === "EN" ? "Portfolio" : "Projets"}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {language === "EN" ? "Projects I've Shipped" : "Mes Projets Réalisés"}
                    </h2>
                    <p className="text-zinc-400 max-w-lg mx-auto">
                        {language === "EN"
                            ? "A range of projects demonstrating how I turn ideas into functional experiences"
                            : "Une sélection de projets illustrant ma capacité à transformer des idées en expériences fonctionnelles"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-[#111] border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
                        >

                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors"
                                    >
                                        {language === "EN" ? "Live Website" : "Voir le site"} <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Github, X, ExternalLink } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
    role: string;
    duration?: string;
    problem: string;
    solution: string;
    outcome: string;
    results: string[];
    hasBeforeAfter?: boolean;
}

// Les données restent strictement identiques (inchangées)
const projectsData: Record<"EN" | "FR", Project[]> = {
    EN: [
        {
            title: "Mefolio Platform",
            description: "The first African platform for creative talent — professional portfolios & project management in one ecosystem.",
            outcome: "Launched & live · African-first creator platform",
            image: "/images/mefolio.webp",
            link: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
            role: "Full-stack Developer & UI Designer",
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
            title: "Admin Dashboard",
            description: "Intuitive admin interface for performance tracking, product management, and real-time sales analytics.",
            outcome: "50% faster data reading vs previous tool",
            image: "/images/dash.webp",
            link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
            role: "Frontend Developer & UI Designer",
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
            title: "L'Expo Platform",
            description: "Digital showcase for African artisans enabling professional catalog creation in minutes.",
            outcome: "Catalog creation time: 2 hrs → 8 min",
            image: "/images/lexpo-deskop.png",
            link: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
            role: "Frontend Developer & UX Designer",
            problem: "",
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
            outcome: "Visual hierarchy and layout structure 100% optimized",
            image: "/images/goze.png",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
            role: "Frontend Developer & UI Designer",
            problem: "The original Gozem web platform lacked a clear structure and a strong visual identity. The navigation was unintuitive, and the iconography failed to reflect the 'Super App' status, impacting the interface's credibility on modern screens.",
            solution: "I completely redesigned the platform, focusing on a logical section architecture and full responsiveness. I implemented a new typographic hierarchy, integrated realistic icons for better immersion, and optimized every component to ensure a 'Pixel-Perfect' finish.",
            results: [
                "Fully restructured information architecture",
                "Realistic iconography integrated for enhanced immersion",
                "Optimized responsiveness (targeting your 73% mobile traffic)",
                "Clarified navigation, significantly reducing user friction",
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
            problem: "My previous portfolio was generic, didn't communicate value clearly, and had a 75%+ bounce rate. Visitors came from multiple countries but nothing converted — no calls booked, no messages sent.",
            solution: "I completely redesigned it with a conversion-first mindset. New headline focused on client benefit, added social proof, clear service packages, a Calendly booking button, and bilingual support. Every section was built to answer the client's unspoken question: 'why should I hire you?'",
            results: [
                "SEO score: 100/100 Lighthouse",
                "Best Practices: 100/100",
                "Bilingual EN/FR with context-aware translation",
                "Conversion-focused hero, services, and contact sections",
            ],
        },
        {
            title: "ANIP Bénin – E-services Redesign",
            description: "Complete UI/UX overhaul of the National Identification Agency — mobile-first, simplified citizen journeys.",
            outcome: "Task completion rate improved · Mobile-first redesign",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
            role: "UI/UX Designer & Frontend Developer",
            problem: "",
            solution: "I redesigned the entire platform with a mobile-first approach. I simplified the service access flow, built a clean dashboard for tracking request status, and reduced the number of screens required to complete core tasks.",
            results: [
                "Fully mobile-responsive redesign",
                "Core task completion steps reduced significantly",
                "Clean dashboard for request tracking",
                "Support call volume reduction by simplifying key flows",
            ]
        },
    ],
    FR: [
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
            outcome: "Hiérarchie visuelle et structure optimisées à 100%",
            image: "/images/goze.png",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
            role: "Développeur Frontend & UI Designer",
            duration: "2 semaines",
            problem: "L'ancienne plateforme web de Gozem manquait de structure claire et d'une identité visuelle forte. La navigation était confuse et l'iconographie ne reflétait pas le standing de 'Super App', nuisant à la crédibilité de l'interface sur les écrans modernes.",
            solution: "J'ai entièrement redesigné la plateforme en me concentrant sur une structure de sections logique et une responsivité totale. J'ai intégré une nouvelle hiérarchie typographique, des icônes réalistes pour améliorer l'immersion, et optimisé chaque composant pour garantir un rendu 'Pixel-Perfect'.",
            results: [
                "Architecture de l'information totalement restructurée",
                "Iconographie réaliste intégrée pour une meilleure immersion",
                "Responsivité optimisée (73% de ton trafic est mobile)",
                "Navigation clarifiée et temps de compréhension réduit",
            ],
        },
        {
            title: "Mon Portfolio",
            description: "Vitrine minimaliste et rapide — score Lighthouse 100% en SEO & Bonnes Pratiques.",
            outcome: "Perf 80 · SEO 100 · Bonnes pratiques 100",
            image: "/images/myportfolio.webp",
            link: "https://myportfolio-eta-eosin.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
            role: "Designer & Développeur",
            duration: "3 semaines",
            problem: "Mon ancien portfolio était générique, ne communiquait pas clairement ma valeur, et avait un taux de rebond de 75%+. Des visiteurs venaient de nombreux pays mais rien ne convertissait.",
            solution: "J'ai entièrement redesigné avec une approche conversion-first. Nouveau titre axé sur le bénéfice client, preuve sociale, packs de services clairs, bouton Calendly, et support bilingue EN/FR.",
            results: [
                "SEO : 100/100 Lighthouse",
                "Bonnes pratiques : 100/100",
                "Bilingual EN/FR avec traduction contextuelle",
                "Sections hero, services et contact orientées conversion",
            ],
        },
        {
            title: "ANIP Bénin – Refonte E-services",
            description: "Refonte complète UI/UX du portail de l'Agence Nationale d'Identification — mobile-first.",
            outcome: "Taux de complétion amélioré · Design mobile-first",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
            role: "Designer UI/UX & Développeur Frontend",
            duration: "4 semaines",
            problem: "",
            solution: "J'ai redesigné toute la plateforme en mobile-first. Simplifié l'accès aux services, construit un dashboard propre pour le suivi des demandes, et réduit le nombre d'écrans nécessaires pour les tâches essentielles.",
            results: [
                "Refonte entièrement responsive mobile",
                "Étapes pour tâches principales réduites significativement",
                "Dashboard propre pour le suivi des demandes",
                "Réduction des appels support par simplification des parcours",
            ],
        },
    ],
};

export default function Projects() {
    const { language } = useLanguage();
    const projects = projectsData[language === "EN" ? "EN" : "FR"];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 px-6 bg-[#FDFDFD] dark:bg-[#09090B] transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                {/* En-tête de section */}
                <div className="mb-20 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
                        {language === "EN" ? "Selected Work" : "Projets Sélectionnés"}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {language === "EN" ? "Digital Experiences." : "Expériences Digitales."}
                    </h2>
                </div>

                {/* Liste des projets */}
                <div className="border-t border-zinc-900/5 dark:border-zinc-850">
                    {projects.map((project, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="w-full group relative border-b border-zinc-900/5 dark:border-zinc-850 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer overflow-hidden text-left transition-colors duration-300"
                        >
                            {/* Même design qu'avant pour la liste */}
                            <div className="relative z-10 flex items-start gap-6 md:w-1/2">
                                <span className="text-[11px] font-mono text-zinc-300 dark:text-zinc-600 pt-1.5">0{index + 1}</span>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        {project.outcome.split('·')[0]}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center justify-between md:justify-end gap-8 md:w-1/2">
                                <p className="text-[12px] md:text-[13px] text-zinc-400 dark:text-zinc-500 font-normal max-w-[280px] md:max-w-[240px] text-left md:text-right leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="h-10 w-10 rounded-full border border-zinc-900/10 dark:border-zinc-800 flex items-center justify-center bg-transparent group-hover:bg-zinc-950 dark:group-hover:bg-white text-zinc-900 dark:text-white transition-all duration-300">
                                    <Plus size={16} className={`transition-transform duration-500 ${hoveredIndex === index ? 'rotate-45' : ''}`} />
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Modal Detail */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white dark:bg-[#111] p-8 md:p-12 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
                        >
                            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                                <X size={20} className="dark:text-white" />
                            </button>

                            <h2 className="text-3xl font-bold mb-6 dark:text-white">{selectedProject.title}</h2>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-2">Problem</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{selectedProject.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-2">Solution</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{selectedProject.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-4">Results</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.results.map((res, i) => (
                                            <li key={i} className="flex gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                                                <span>—</span> {res}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t dark:border-zinc-800">
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform">
                                        Visit Live Site <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, ChevronRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

interface Project {
    title: string;
    description: string;
    outcome: string;
    image: string;
    url: string;
    technologies: string[];

    problem: string;
    solution: string;
    results: string[];
    role: string;
    duration: string;
    beforeImage?: string;
    afterImage?: string;
    hasBeforeAfter?: boolean;
}

const projectsData: Record<"EN" | "FR", Project[]> = {
    EN: [
        {
            title: "Mefolio Platform",
            description: "The first African platform for creative talent — professional portfolios & project management in one ecosystem.",
            outcome: "Launched & live · African-first creator platform",
            image: "/images/mefolio.webp",
            url: "https://mefolio-z6n9.onrender.com/",
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
            hasBeforeAfter: false,
        },
        {
            title: "Admin Dashboard",
            description: "Intuitive admin interface for performance tracking, product management, and real-time sales analytics.",
            outcome: "50% faster data reading vs previous tool",
            image: "/images/dash.webp",
            url: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
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
            hasBeforeAfter: false,
        },
        {
            title: "L'Expo Platform",
            description: "Digital showcase for African artisans enabling professional catalog creation in minutes.",
            outcome: "Catalog creation time: 2 hrs → 8 min",
            image: "/images/lexpo-deskop.png",
            url: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
            role: "Frontend Developer & UX Designer",
            duration: "3 weeks",
            problem: "African artisans and small creators had no simple way to create a professional digital catalog. Setting up a website or using complex tools like Shopify took hours and required technical knowledge most artisans didn't have.",
            solution: "I designed a streamlined flow where artisans can create a professional catalog in under 10 minutes — no technical knowledge required. The interface uses simple language, large touch targets, and a step-by-step guided process.",
            results: [
                "Catalog creation time: 2 hours → 8 minutes",
                "Zero technical knowledge required to use",
                "Mobile-first — designed for smartphone users",
                "Clean shareable catalog link for each artisan",
            ],
            hasBeforeAfter: false,
        },
        {
            title: "Gozem Optimizer",
            description: "Strategic UI redesign to optimize the booking and tracking experience for Africa's leading super-app.",
            outcome: "Booking flow steps reduced by 40%",
            image: "/images/goze.png",
            url: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["UI Design", "UX Research", "Figma", "Tailwind CSS"],
            role: "UI/UX Designer & Frontend Developer",
            duration: "2 weeks",
            problem: "Gozem's booking flow required too many steps to complete a ride request. Users were dropping off mid-booking due to confusing navigation, redundant screens, and unclear CTAs — directly impacting revenue.",
            solution: "I conducted a UX audit of the existing flow, identified the friction points, and redesigned the critical booking screens. I reduced the booking from 7 steps to 4, clarified the visual hierarchy, and made the primary CTA unmissable on every screen.",
            results: [
                "Booking flow steps reduced by 40% (7 → 4 steps)",
                "CTA clarity score improved significantly",
                "Cleaner visual hierarchy throughout",
                "Redesign validated and presented to stakeholders",
            ],
            hasBeforeAfter: true,
            beforeImage: "/images/goze.png",
            afterImage: "/images/goze.png",
        },
        {
            title: "My Portfolio",
            description: "Minimalist, high-speed showcase — 100% Lighthouse score for SEO & Best Practices.",
            outcome: "Perf 80 · SEO 100 · Best Practices 100",
            image: "/images/myportfolio.webp",
            url: "https://dieudonne-dev.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
            role: "Designer & Developer",
            duration: "3 weeks",
            problem: "My previous portfolio was generic, didn't communicate value clearly, and had a 75%+ bounce rate. Visitors came from multiple countries but nothing converted — no calls booked, no messages sent.",
            solution: "I completely redesigned it with a conversion-first mindset. New headline focused on client benefit, added social proof, clear service packages, a Calendly booking button, and bilingual support. Every section was built to answer the client's unspoken question: 'why should I hire you?'",
            results: [
                "SEO score: 100/100 Lighthouse",
                "Best Practices: 100/100",
                "Bilingual EN/FR with context-aware translation",
                "Conversion-focused hero, services, and contact sections",
            ],
            hasBeforeAfter: false,
        },
        {
            title: "ANIP Bénin – E-services Redesign",
            description: "Complete UI/UX overhaul of the National Identification Agency — mobile-first, simplified citizen journeys.",
            outcome: "Task completion rate improved · Mobile-first redesign",
            image: "/images/anip_refonte.webp",
            url: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
            role: "UI/UX Designer & Frontend Developer",
            duration: "4 weeks",
            problem: "The ANIP platform was inaccessible on mobile, had confusing navigation, and required citizens to call support just to complete basic identification requests. The interface was designed for desktop in an era when 80%+ of users were on phones.",
            solution: "I redesigned the entire platform with a mobile-first approach. I simplified the service access flow, built a clean dashboard for tracking request status, and reduced the number of screens required to complete core tasks.",
            results: [
                "Fully mobile-responsive redesign",
                "Core task completion steps reduced significantly",
                "Clean dashboard for request tracking",
                "Support call volume reduction by simplifying key flows",
            ],
            hasBeforeAfter: true,
            beforeImage: "/images/anip_refonte.webp",
            afterImage: "/images/anip_refonte.webp",
        },
    ],
    FR: [
        {
            title: "Mefolio Platform",
            description: "La première plateforme africaine dédiée aux créatifs — portfolios professionnels & gestion de projets.",
            outcome: "Lancée & en ligne · Plateforme 100% africaine",
            image: "/images/mefolio.webp",
            url: "https://mefolio-z6n9.onrender.com/",
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
            hasBeforeAfter: false,
        },
        {
            title: "Dashboard Admin",
            description: "Interface admin intuitive pour le suivi des performances, la gestion des produits et l'analytique temps réel.",
            outcome: "Lecture des données 50% plus rapide",
            image: "/images/dash.webp",
            url: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
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
            hasBeforeAfter: false,
        },
        {
            title: "L'Expo Plateforme",
            description: "Vitrine digitale pour artisans africains permettant la création d'un catalogue pro en quelques minutes.",
            outcome: "Création catalogue : 2h → 8 min",
            image: "/images/lexpo-deskop.png",
            url: "https://lexpo-gallery.vercel.app",
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
            hasBeforeAfter: false,
        },
        {
            title: "Gozem Optimizer",
            description: "Refonte stratégique de l'UI pour optimiser l'expérience de réservation du super-app leader en Afrique.",
            outcome: "Étapes du tunnel de réservation réduites de 40%",
            image: "/images/goze.png",
            url: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["UI Design", "UX Research", "Figma", "Tailwind CSS"],
            role: "Designer UI/UX & Développeur Frontend",
            duration: "2 semaines",
            problem: "Le tunnel de réservation de Gozem nécessitait trop d'étapes pour compléter une demande de trajet. Les utilisateurs abandonnaient en cours de route à cause d'une navigation confuse et des CTA peu clairs — impactant directement le chiffre d'affaires.",
            solution: "J'ai conduit un audit UX du parcours existant, identifié les points de friction, et redesigné les écrans de réservation critiques. Le tunnel est passé de 7 à 4 étapes, avec une hiérarchie visuelle clarifiée.",
            results: [
                "Étapes de réservation réduites de 40% (7 → 4)",
                "Clarté des CTA améliorée significativement",
                "Hiérarchie visuelle clarifiée",
                "Refonte validée et présentée aux stakeholders",
            ],
            hasBeforeAfter: true,
            beforeImage: "/images/goze.png",
            afterImage: "/images/goze.png",
        },
        {
            title: "Mon Portfolio",
            description: "Vitrine minimaliste et rapide — score Lighthouse 100% en SEO & Bonnes Pratiques.",
            outcome: "Perf 80 · SEO 100 · Bonnes pratiques 100",
            image: "/images/myportfolio.webp",
            url: "https://myportfolio-eta-eosin.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
            role: "Designer & Développeur",
            duration: "3 semaines",
            problem: "Mon ancien portfolio était générique, ne communiquait pas clairement ma valeur, et avait un taux de rebond de 75%+. Des visiteurs venaient de nombreux pays mais rien ne convertissait.",
            solution: "J'ai entièrement redesigné avec une approche conversion-first. Nouveau titre axé sur le bénéfice client, preuve sociale, packs de services clairs, bouton Calendly, et support bilingue EN/FR.",
            results: [
                "SEO : 100/100 Lighthouse",
                "Bonnes pratiques : 100/100",
                "Bilingue EN/FR avec traduction contextuelle",
                "Sections hero, services et contact orientées conversion",
            ],
            hasBeforeAfter: false,
        },
        {
            title: "ANIP Bénin – Refonte E-services",
            description: "Refonte complète UI/UX du portail de l'Agence Nationale d'Identification — mobile-first.",
            outcome: "Taux de complétion amélioré · Design mobile-first",
            image: "/images/anip_refonte.webp",
            url: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
            role: "Designer UI/UX & Développeur Frontend",
            duration: "4 semaines",
            problem: "La plateforme ANIP était inaccessible sur mobile, avait une navigation confuse, et obligeait les citoyens à appeler le support pour compléter des demandes basiques. L'interface était conçue pour desktop alors que 80%+ des utilisateurs étaient sur téléphone.",
            solution: "J'ai redesigné toute la plateforme en mobile-first. Simplifié l'accès aux services, construit un dashboard propre pour le suivi des demandes, et réduit le nombre d'écrans nécessaires pour les tâches essentielles.",
            results: [
                "Refonte entièrement responsive mobile",
                "Étapes pour tâches principales réduites significativement",
                "Dashboard propre pour le suivi des demandes",
                "Réduction des appels support par simplification des parcours",
            ],
            hasBeforeAfter: true,
            beforeImage: "/images/anip_refonte.webp",
            afterImage: "/images/anip_refonte.webp",
        },
    ],
};

const sectionLabels = {
    EN: {
        label: "Our Work",
        heading: "Explore Projects",
        viewCase: "View case study",
        viewLive: "View live",
        close: "Close",
        problem: "The Problem",
        solution: "My Solution",
        results: "Results",
        role: "My Role",
        duration: "Duration",
        before: "Before",
        after: "After",
        beforeAfterTitle: "Before / After",
    },
    FR: {
        label: "Nos Travaux",
        heading: "Voir les Projets",
        viewCase: "Voir le case study",
        viewLive: "Voir en ligne",
        close: "Fermer",
        problem: "Le Problème",
        solution: "Ma Solution",
        results: "Résultats",
        role: "Mon Rôle",
        duration: "Durée",
        before: "Avant",
        after: "Après",
        beforeAfterTitle: "Avant / Après",
    },
};

const Projects = () => {
    const { language } = useLanguage();
    const projects = projectsData[language];
    const labels = sectionLabels[language];
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
                <div className="flex flex-col mb-14">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-black" />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
                            {labels.label}
                        </span>
                    </div>
                    <h2
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-black"
                    >
                        {labels.heading}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative flex flex-col"
                        >

                            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 mb-5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                                {/* Hover arrow */}
                                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight size={22} />
                                </div>

                                {/* Outcome badge */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200">
                                    ✦ {project.outcome}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                    className="text-2xl font-bold text-black"
                                >
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 line-clamp-2 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 mt-4">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-2 text-sm font-bold text-black border-b-2 border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all"
                                    >
                                        {labels.viewCase}
                                        <ChevronRight size={14} />
                                    </button>
                                    <span className="text-gray-300">·</span>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-black transition-colors"
                                    >
                                        {labels.viewLive}
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
                        onClick={() => setSelectedProject(null)}
                    >

                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 60 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative bg-white w-full md:max-w-3xl max-h-[92vh] md:max-h-[85vh] rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div className="relative h-48 md:h-64 flex-shrink-0 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all"
                                >
                                    <X size={18} />
                                </button>

                                <div className="absolute bottom-4 left-5 right-16">
                                    <h2
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                        className="text-2xl md:text-3xl font-bold text-white leading-tight"
                                    >
                                        {selectedProject.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        <span className="text-white/70 text-xs font-medium">
                                            {labels.role}: {selectedProject.role}
                                        </span>
                                        <span className="text-white/40">·</span>
                                        <span className="text-white/70 text-xs font-medium">
                                            {labels.duration}: {selectedProject.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-y-auto flex-1 p-5 md:p-8 space-y-8">

                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-black text-white rounded-full text-xs font-bold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs font-bold">!</span>
                                        <h3
                                            style={{ fontFamily: "'Syne', sans-serif" }}
                                            className="text-lg font-bold text-black"
                                        >
                                            {labels.problem}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {selectedProject.problem}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-xs font-bold">→</span>
                                        <h3
                                            style={{ fontFamily: "'Syne', sans-serif" }}
                                            className="text-lg font-bold text-black"
                                        >
                                            {labels.solution}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {selectedProject.solution}
                                    </p>
                                </div>

                                {selectedProject.hasBeforeAfter && (
                                    <div>
                                        <h3
                                            style={{ fontFamily: "'Syne', sans-serif" }}
                                            className="text-lg font-bold text-black mb-4"
                                        >
                                            {labels.beforeAfterTitle}
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">{labels.before}</p>
                                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-red-100">
                                                    <img
                                                        src={selectedProject.beforeImage}
                                                        alt="Before"
                                                        className="w-full h-full object-cover grayscale"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2">{labels.after}</p>
                                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-green-100">
                                                    <img
                                                        src={selectedProject.afterImage}
                                                        alt="After"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2 text-center">
                                            ← Remplace les images par les vraies captures avant/après
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-xs font-bold">✓</span>
                                        <h3
                                            style={{ fontFamily: "'Syne', sans-serif" }}
                                            className="text-lg font-bold text-black"
                                        >
                                            {labels.results}
                                        </h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {selectedProject.results.map((result, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm md:text-base font-medium">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-gray-100 pt-6">
                                    <a
                                        href={selectedProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all w-full"
                                    >
                                        {labels.viewLive}
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Projects;
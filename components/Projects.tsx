


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
}

const projectsData: Record<"EN" | "FR", Project[]> = {
    EN: [
        {
            title: "ANIP Bénin – E-services Redesign",
            description: "Complete UI/UX overhaul of the National Identification Agency — mobile-first, simplified citizen journeys. I redesigned the entire platform with a mobile-first approach. I simplified the service access flow, built a clean dashboard for tracking request status, and reduced the number of screens required to complete core tasks.",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],

        },
        {
            title: "Mefolio Platform",
            description: "The first African platform for creative talent — professional portfolios & project management in one ecosystem. I designed and built a full-stack platform from scratch — a clean, fast, and mobile-optimized ecosystem where creatives can build their portfolio, manage client projects, and get discovered. I optimized the app for low-bandwidth connections common in West Africa.",
            image: "/images/mefolio.webp",
            link: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
        },
        {
            title: "L'Expo Platform",
            description: "Digital showcase for African artisans enabling professional catalog creation in minutes. I designed a streamlined flow where artisans can create a professional catalog in under 10 minutes — no technical knowledge required. The interface uses simple language, large touch targets, and a step-by-step guided process.",
            image: "/images/lexpo-deskop.png",
            link: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        },
        {
            title: "Gozem Web Experience",
            description: "A strategic UI overhaul focused on restructuring the web platform for a seamless and premium user experience. I completely redesigned the platform, focusing on a logical section architecture and full responsiveness for a predominantly mobile audience. I implemented a new typographic hierarchy, integrated realistic icons for better immersion, and optimized every component to ensure a 'Pixel-Perfect' finish.",
            image: "/images/bbbb.png",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
        },
        {
            title: "Admin Dashboard",
            description: "Intuitive admin interface for performance tracking, product management, and real-time sales analytics. I rebuilt the dashboard UI from scratch with a focus on information hierarchy. The most critical KPIs are visible immediately on load. I used Shadcn components for consistency and built a responsive layout that works perfectly on tablets and phones.",
            image: "/images/dash.webp",
            link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
        },
        {
            title: "My Portfolio",
            description: "Minimalist, high-speed showcase — 100% Lighthouse score for SEO & Best Practices. I completely redesigned it with a conversion-first mindset. New headline focused on client benefit, added social proof, clear service packages, a direct contact flow, and bilingual support. Every section was built to answer the visitor's unspoken question: 'why should I hire you?'",
            image: "/images/pp.webp",
            link: "https://dieudonne-dev.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
    ],
    FR: [
        {
            title: "ANIP Bénin – Refonte E-services",
            description: "Refonte complète UI/UX du portail de l'Agence Nationale d'Identification — mobile-first. J'ai redesigné toute la plateforme en mobile-first. Simplifié l'accès aux services, construit un dashboard propre pour le suivi des demandes, et réduit le nombre d'écrans nécessaires pour les tâches essentielles.",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
        },
        {
            title: "Mefolio Platform",
            description: "La première plateforme africaine dédiée aux créatifs — portfolios professionnels & gestion de projets. J'ai conçu et développé une plateforme full-stack from scratch — rapide, mobile-optimisée, permettant aux créatifs de construire leur portfolio et de gérer leurs projets clients. J'ai optimisé l'app pour les connexions faibles courantes en Afrique de l'Ouest.",
            image: "/images/mefolio.webp",
            link: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
        },
        {
            title: "L'Expo Plateforme",
            description: "Vitrine digitale pour artisans africains permettant la création d'un catalogue pro en quelques minutes. J'ai conçu un parcours simplifié où les artisans créent un catalogue professionnel en moins de 10 minutes — sans aucune compétence technique. Interface guidée étape par étape, en langage simple.",
            image: "/images/lexpo-deskop.png",
            link: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        },
        {
            title: "Gozem Web Experience",
            description: "Modernisation et restructuration complète de l'interface web pour une expérience utilisateur fluide et premium. J'ai entièrement redesigné la plateforme en me concentrant sur une structure de sections logique et une responsivité pensée pour une audience majoritairement mobile. J'ai intégré une nouvelle hiérarchie typographique, des icônes réalistes pour améliorer l'immersion, et optimisé chaque composant pour garantir un rendu 'Pixel-Perfect'.",
            image: "/images/goze.png",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
        },
        {
            title: "Dashboard Admin",
            description: "Interface admin intuitive pour le suivi des performances, la gestion des produits et l'analytique temps réel. J'ai reconstruit l'UI du dashboard from scratch en mettant l'accent sur la hiérarchie de l'information. Les KPIs les plus critiques sont visibles immédiatement au chargement. Interface responsive qui fonctionne sur tablettes et téléphones.",
            image: "/images/dash.webp",
            link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
        },
        {
            title: "Mon Portfolio",
            description: "Vitrine minimaliste et rapide — score Lighthouse 100% en SEO & Bonnes Pratiques. J'ai entièrement redesigné avec une approche conversion-first. Nouveau titre axé sur le bénéfice du visiteur, preuve sociale, packs de services clairs, parcours de contact direct, et support bilingue EN/FR.",
            image: "/images/pp.webp",
            link: "https://dieudonne-dev.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
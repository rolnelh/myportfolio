"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
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
            title: "L'Expo",
            description: "A SaaS platform & digital showcase for African artisans and creators. It allows users to generate a professional, interactive, and optimized catalog in under 2 minutes, with no technical skills required. Designed with a guided, smooth, and responsive user journey.",
            image: "/images/lexpo-desktop.png",
            link: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        },
        {
            title: "Mefolio Platform",
            description: "The first African platform for creative talent — professional portfolios & project management in one ecosystem. I designed and built a full-stack platform from scratch — a clean, fast, and mobile-optimized ecosystem where creatives can build their portfolio, manage client projects, and get discovered, optimized for low-bandwidth connections.",
            image: "/images/mefolio.webp",
            link: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
        },

        {
            title: "Gozem Web Experience",
            description: "A strategic UI overhaul focused on restructuring the web platform for a seamless and premium user experience. I completely redesigned the platform, focusing on a logical section architecture and full responsiveness, integrating a new typographic hierarchy and a 'Pixel-Perfect' finish.",
            image: "/images/bbbb.png",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
        },
        {
            title: "Admin Dashboard",
            description: "Intuitive admin interface for performance tracking, product management, and real-time sales analytics. Rebuilt from scratch with a focus on information hierarchy where the most critical KPIs are visible immediately on load.",
            image: "/images/dash.webp",
            link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
        },
        {
            title: "My Portfolio",
            description: "Minimalist, high-speed showcase — 100% Lighthouse score for SEO & Best Practices. Redesigned with a conversion-first mindset featuring clear service packages, social proof, and bilingual support.",
            image: "/images/pp.webp",
            link: "https://dieudonne-dev.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            title: "ANIP Bénin – E-services Redesign",
            description: "Complete UI/UX overhaul of the National Identification Agency — mobile-first, simplified citizen journeys. I redesigned the entire platform with a mobile-first approach, simplified the service access flow, built a clean dashboard for tracking request status, and reduced the number of screens required to complete core tasks.",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
        },
    ],
    FR: [

        {
            title: "L'Expo",
            description: "Plateforme SaaS & vitrine digitale dédiée aux artisans et créateurs africains. Permet de générer un catalogue professionnel interactif et optimisé en moins de 2 minutes sans compétences techniques requises.",
            image: "/images/expo.webp",
            link: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "Next.js", "Tailwind CSS", "Laravel", "REST API", "PostgreSQL"],
        },
        {
            title: "Mefolio Platform",
            description: "La première plateforme africaine dédiée aux créatifs — portfolios professionnels & gestion de projets. Application full-stack conçue from scratch, rapide, mobile-optimisée et adaptée aux connexions faibles en Afrique de l'Ouest.",
            image: "/images/mefolio.webp",
            link: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
        },
        {
            title: "Gozem Web Experience",
            description: "Modernisation et restructuration complète de l'interface web pour une expérience utilisateur fluide et premium. Structure logique, responsivité mobile-first et rendu Pixel-Perfect.",
            image: "/images/zemgo.webp",
            link: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["React", "Tailwind CSS", "Figma", "UI Design"],
        },
        {
            title: "Dashboard Admin",
            description: "Interface admin intuitive pour le suivi des performances, la gestion des produits et l'analytique temps réel. KPIs critiques visibles immédiatement au chargement.",
            image: "/images/dash.webp",
            link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
        },
        {
            title: "Mon Portfolio",
            description: "Vitrine minimaliste et rapide — score Lighthouse 100% en SEO & Bonnes Pratiques. Approche conversion-first, packs de services clairs et support bilingue EN/FR.",
            image: "/images/pp.webp",
            link: "https://dieudonne-dev.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            title: "ANIP Bénin – Refonte E-services",
            description: "Refonte complète UI/UX du portail de l'Agence Nationale d'Identification — mobile-first. Redesign complet de la plateforme avec simplification de l'accès aux services, dashboard propre pour le suivi et réduction du nombre d'écrans.",
            image: "/images/anip_refonte.webp",
            link: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
        },
    ],
};

export default function Projects() {
    const { language } = useLanguage();
    const lang = language === "EN" ? "EN" : "FR";
    const projects = projectsData[lang];

    return (
        <section id="projects" className="py-28 px-6 bg-slate-50/60 text-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 border border-slate-300/60 text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                        {language === "EN" ? "Our Work" : "Nos Projets"}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {language === "EN" ? "Projects We've Shipped" : "Mes Réalisations & Projets"}
                    </h2>
                    <p className="text-slate-600 max-w-2xl text-base leading-relaxed">
                        {language === "EN"
                            ? "A curated selection of high-impact web apps, SaaS products, and digital experiences built for scale."
                            : "Une sélection rigoureuse d'applications web à fort impact, de produits SaaS et d'expériences digitales conçues pour performer."}
                    </p>
                </div>

                {/* Projects Grid matching Agency Card Style */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Top Content: Title & Action Link */}
                            <div>
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-[#ff2a4d] transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#ff2a4d] group-hover:text-white group-hover:border-[#ff2a4d] transition-all shrink-0"
                                        aria-label="View project link"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>

                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Technologies Badges */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech, techIdx) => (
                                        <span
                                            key={techIdx}
                                            className="text-[11px] font-semibold tracking-wide bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200/60"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Image Preview Container inside Card */}
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 relative group/img">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#ff2a4d] transition-colors"
                                    >
                                        <span>{language === "EN" ? "See Project" : "Voir le projet"}</span>
                                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
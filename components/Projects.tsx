"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const projectsData = {
    EN: [
        {
            title: "Mefolio Platform",
            description:
                "The first African platform for creative talent — professional portfolios & project management in one ecosystem.",
            outcome: "Launched & live · African-first creator platform",
            image: "/images/mefolio.webp",
            url: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
        },
        {
            title: "Admin Dashboard",
            description:
                "Intuitive admin interface for performance tracking, product management, and real-time sales analytics.",
            outcome: "50% faster data reading vs previous tool",
            image: "/images/dash.webp",
            url: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
        },
        {
            title: "L'Expo Platform",
            description:
                "Digital showcase for African artisans enabling professional catalog creation in minutes.",
            outcome: "Catalog creation time: 2 hrs → 8 min",
            image: "/images/lexpo-deskop.png",
            url: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        },
        {
            title: "Gozem Optimizer",
            description:
                "Strategic UI redesign to optimize the booking and tracking experience for Africa's leading super-app.",
            outcome: "Booking flow steps reduced by 40%",
            image: "/images/goze.png",
            url: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["UI Design", "UX Research", "Figma"],
        },
        {
            title: "My Portfolio",
            description:
                "Minimalist, high-speed showcase — 100% Lighthouse score for SEO & Best Practices.",
            outcome: "Perf 80 · SEO 100 · Best Practices 100",
            image: "/images/myportfolio.webp",
            url: "https://myportfolio-eta-eosin.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            title: "ANIP Bénin – E-services Redesign",
            description:
                "Complete UI/UX overhaul of the National Identification Agency — mobile-first, simplified citizen journeys.",
            outcome: "Task completion rate improved · Mobile-first redesign",
            image: "/images/anip_refonte.webp",
            url: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
        },
    ],
    FR: [
        {
            title: "Mefolio Platform",
            description:
                "La première plateforme africaine dédiée aux créatifs — portfolios professionnels & gestion de projets en un seul écosystème.",
            outcome: "Lancée & en ligne · Plateforme 100% africaine",
            image: "/images/mefolio.webp",
            url: "https://mefolio-z6n9.onrender.com/",
            technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
        },
        {
            title: "Dashboard Admin",
            description:
                "Interface admin intuitive pour le suivi des performances, la gestion des produits et l'analytique temps réel.",
            outcome: "Lecture des données 50% plus rapide",
            image: "/images/dash.webp",
            url: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
            technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
        },
        {
            title: "L'Expo Plateforme",
            description:
                "Vitrine digitale pour artisans africains permettant la création d'un catalogue pro en quelques minutes.",
            outcome: "Création catalogue : 2h → 8 min",
            image: "/images/lexpo-deskop.png",
            url: "https://lexpo-gallery.vercel.app",
            technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        },
        {
            title: "Gozem Optimizer",
            description:
                "Refonte stratégique de l'UI pour optimiser l'expérience de réservation du super-app leader en Afrique.",
            outcome: "Étapes du tunnel de réservation réduites de 40%",
            image: "/images/goze.png",
            url: "https://rolnelh.github.io/gozem-refonte/",
            technologies: ["UI Design", "UX Research", "Figma"],
        },
        {
            title: "Mon Portfolio",
            description:
                "Vitrine minimaliste et rapide — score Lighthouse 100% en SEO & Bonnes Pratiques.",
            outcome: "Perf 80 · SEO 100 · Bonnes pratiques 100",
            image: "/images/myportfolio.webp",
            url: "https://myportfolio-eta-eosin.vercel.app/",
            technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            title: "ANIP Bénin – Refonte E-services",
            description:
                "Refonte complète UI/UX du portail de l'Agence Nationale d'Identification — mobile-first, parcours simplifié.",
            outcome: "Taux de complétion amélioré · Design mobile-first",
            image: "/images/anip_refonte.webp",
            url: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard Architecture"],
        },
    ],
};

const sectionLabels = {
    EN: { label: "Our Work", heading: "Explore Projects" },
    FR: { label: "Nos Travaux", heading: "Voir les Projets" },
};

const Projects = () => {
    const { language } = useLanguage();
    const projects = projectsData[language];
    const labels = sectionLabels[language];

    return (
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
                        className="group relative flex flex-col cursor-pointer"
                        onClick={() => window.open(project.url, "_blank")}
                    >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 mb-5">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Hover arrow */}
                            <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight size={22} />
                            </div>
                            {/* Outcome badge — key differentiator */}
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
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Cpu } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

interface ProjectCaseStudy {
    id: string;
    badgeImage: string;
    title: { EN: string; FR: string };
    subtitle: { EN: string; FR: string };
    problem: { EN: string; FR: string };
    solution: { EN: string; FR: string };
    techStack: string[];
    link: string;
    mainImage: string;
}

const projectsData: ProjectCaseStudy[] = [
    {
        id: "mefolio",
        badgeImage: "/images/ampoule.png",
        title: { EN: "MeFolio Platform", FR: "Plateforme MeFolio" },
        subtitle: { EN: "A modern developer portfolio and management tool.", FR: "Un portfolio de développeur moderne et outil de gestion." },
        problem: {
            EN: "Developers struggle to showcase their projects, experience, and custom branding seamlessly in one fast, maintainable web interface.",
            FR: "Les développeurs ont du mal à présenter leurs projets, expériences et image de marque de manière fluide dans une interface web rapide."
        },
        solution: {
            EN: "Migrated to a robust decoupled architecture utilizing a Laravel API backend hosted on Render and a high-performance Next.js frontend deployed on Vercel.",
            FR: "Migration vers une architecture découplée robuste utilisant une API Laravel hébergée sur Render et un frontend Next.js haute performance."
        },
        techStack: ["Next.js", "Laravel API", "Tailwind CSS", "Render", "Vercel"],
        link: "https://your-mefolio-link.com",
        mainImage: "/images/mefolio.webp"
    },
    {
        id: "lexpo",
        badgeImage: "/images/artisanal.png",
        title: { EN: "L'Expo Digital Gallery", FR: "Galerie Numérique L'Expo" },
        subtitle: { EN: "A digital exhibition showcasing talented local artisans.", FR: "Une exposition numérique mettant en valeur les artisans locaux." },
        problem: {
            EN: "Local artisans lack a modern digital gallery space to exhibit their product catalogs and reach a wider audience online.",
            FR: "La coordination de la participation aux événements locaux et l'engagement communautaire manquent de fluidité numérique."
        },
        solution: {
            EN: "Platform SaaS & digital showcase dedicated to African artisans and creators. Allows generating a professional interactive and optimized catalog in under 2 minutes without technical skills required.",
            FR: "Plateforme SaaS & vitrine digitale dédiée aux artisans et créateurs africains. Permet de générer un catalogue professionnel interactif et optimisé en moins de 2 minutes sans compétences techniques requises."
        },
        techStack: ["React", "Tailwind CSS", "Node.js", "Vercel"],
        link: "https://lexpo-gallery.vercel.app/",
        mainImage: "/images/expo.webp"
    },
    {
        id: "Refonte",
        badgeImage: "/images/refonte.png",
        title: { EN: "Redesign of the Gozem Platform", FR: "Refonte de la plateforme Gozem" },
        subtitle: { EN: "A digital exhibition showcasing talented local artisans.", FR: "Une exposition numérique mettant en valeur les artisans locaux." },
        problem: {
            EN: "Local artisans lack a modern digital gallery space to exhibit their product catalogs and reach a wider audience online.",
            FR: "Les artisans locaux manquent d'un espace de galerie numérique moderne pour exposer leurs catalogues de produits en ligne."
        },
        solution: {
            EN: "Built a sleek React and Tailwind CSS digital exhibition platform featuring high-fidelity product cards and seamless deployment.",
            FR: "Conception d'une plateforme d'exposition numérique épurée en React et Tailwind CSS avec des fiches produits haute fidélité."
        },
        techStack: ["React", "Tailwind CSS", "Vercel Analytics", "Formspree"],
        link: "https://rolnelh.github.io/gozem-refonte/",
        mainImage: "/images/zemgo.webp"
    },
    {
        id: "Dashboard",
        badgeImage: "/images/donnes.png",
        title: { EN: "Dashboard Admin", FR: "Tableau de bord administratif" },
        subtitle: { EN: "Interactive admin dashboard for performance tracking and analytics.", FR: "Interface admin interactive pour le suivi des performances et l'analytique." },
        problem: {
            EN: "Local artisans lack a modern digital gallery space to exhibit their product catalogs and reach a wider audience online.",
            FR: "Les artisans locaux manquent d'un espace de galerie numérique moderne pour exposer leurs catalogues de produits en ligne."
        },
        solution: {
            EN: "Interactive admin dashboard for performance tracking, product management, and real-time analytics. Critical KPIs visible immediately upon loading.",
            FR: "Interface admin intuitive pour le suivi des performances, la gestion des produits et l'analytique temps réel. KPIs critiques visibles immédiatement au chargement.."
        },
        techStack: ["React", "Tailwind CSS", "Vercel Analytics", "Formspree"],
        link: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
        mainImage: "/images/dash.webp"
    }
];

export default function FeaturedProjects() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";
    const [activeTab, setActiveTab] = useState(projectsData[0].id);

    const currentProject = projectsData.find(p => p.id === activeTab) || projectsData[0];

    return (
        <section id="projects" className="py-28 px-6 bg-slate-50/60 text-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* En-tête */}
                <div className="mb-14 text-center space-y-4">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/60 border border-slate-300/60 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 shadow-2xs">
                        {langKey === "EN" ? "Portfolio" : "Réalisations"}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-serif">
                        {langKey === "EN" ? "Backed by real work." : "Soutenu par des projets concrets."}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
                        {langKey === "EN"
                            ? "A curated collection of websites designed with care."
                            : "Une collection soignée de sites web conçus avec attention."}
                    </p>

                    {/* Onglets */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                        {projectsData.map((proj) => (
                            <button
                                key={proj.id}
                                onClick={() => setActiveTab(proj.id)}
                                className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 border ${activeTab === proj.id
                                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                                    }`}
                            >
                                {proj.title[langKey]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Conteneur principal */}
                <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProject.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Titre et description du projet sélectionné */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center shadow-2xs overflow-hidden p-1.5">
                                    <img
                                        src={currentProject.badgeImage}
                                        alt="Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-serif">
                                    {currentProject.title[langKey]}
                                </h3>
                            </div>

                            <p className="text-slate-600 text-sm sm:text-base font-light max-w-3xl mb-10 leading-relaxed">
                                {currentProject.subtitle[langKey]}
                            </p>

                            {/* Grille de 4 cartes distinctes côte à côte */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">

                                {/* Carte 1 : Image du projet */}
                                <div className="bg-slate-50/80 border border-slate-200/70 rounded-3xl p-5 flex flex-col justify-between overflow-hidden group shadow-2xs">
                                    <div className="w-full aspect-[16/11] rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner mb-3">
                                        <img
                                            src={currentProject.mainImage}
                                            alt={currentProject.title[langKey]}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">
                                        {langKey === "EN" ? "Project Preview" : "Aperçu"}
                                    </span>
                                </div>

                                {/* Carte 2 : Le Problème */}
                                <div className="bg-slate-50/80 border border-slate-200/70 rounded-3xl p-6 flex flex-col justify-between shadow-2xs">
                                    <div>
                                        <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs uppercase tracking-wider mb-4">
                                            <AlertCircle size={16} />
                                            <span>{langKey === "EN" ? "The Problem" : "Le Problème"}</span>
                                        </div>
                                        <p className="text-slate-600 text-sm font-light leading-relaxed">
                                            {currentProject.problem[langKey]}
                                        </p>
                                    </div>
                                </div>

                                {/* Carte 3 : La Solution */}
                                <div className="bg-slate-50/80 border border-slate-200/70 rounded-3xl p-6 flex flex-col justify-between shadow-2xs">
                                    <div>
                                        <div className="flex items-center gap-2 text-emerald-600 font-semibold text-xs uppercase tracking-wider mb-4">
                                            <CheckCircle2 size={16} />
                                            <span>{langKey === "EN" ? "The Solution" : "La Solution"}</span>
                                        </div>
                                        <p className="text-slate-600 text-sm font-light leading-relaxed">
                                            {currentProject.solution[langKey]}
                                        </p>
                                    </div>
                                </div>

                                {/* Carte 4 : Stack Technique */}
                                <div className="bg-slate-50/80 border border-slate-200/70 rounded-3xl p-6 flex flex-col justify-between shadow-2xs">
                                    <div>
                                        <div className="flex items-center gap-2 text-amber-600 font-semibold text-xs uppercase tracking-wider mb-4">
                                            <Cpu size={16} />
                                            <span>{langKey === "EN" ? "Tech Stack" : "Technologies"}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {currentProject.techStack.map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 text-xs font-medium shadow-2xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* Bouton "View Live" centré avec ta couleur */}
                    <div className="flex justify-center pt-2">
                        <a
                            href={currentProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FDE08D] hover:bg-[#fcd34d] text-slate-900 font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow group"
                        >
                            <span>{langKey === "EN" ? "View Live" : "Voir le projet en direct"}</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Sparkles, Zap, Globe, Brain, Cpu, Database, Server, ShieldCheck } from 'lucide-react';
import { useLanguage } from "../components/Languagecontext";

export default function Hero() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    // Textes multilingues avec vos services exacts
    const content = {
        EN: {
            badge: "FRONTEND & MOBILE DEVELOPER",
            title: "I build your custom web and mobile application",
            description: "Hi, I'm Dieudonné Houndagnon. I build your custom web and mobile application to deliver seamless experiences, maximize performance, and accelerate your growth.",
            cta1: "Book a Call",
            cta2: "Explore Projects",
            orbitTags: [
                { label: "Web Design & Redesign", icon: Zap },
                { label: "Optimization & Web Performance", icon: Sparkles },
                { label: "Optimized SEO", icon: Globe },
                { label: "Technical Audit", icon: ShieldCheck },
            ]
        },
        FR: {
            badge: "DÉVELOPPEUR FRONTEND & MOBILE",
            title: "Je crée votre application web et mobile sur mesure",
            description: "Bonjour, je suis Dieudonné Houndagnon. Je crée votre application web et mobile sur-mesure pour offrir des expériences fluides, maximiser vos performances et accélérer votre croissance.",
            cta1: "Prendre rendez-vous",
            cta2: "Voir les projets",
            orbitTags: [
                { label: "Création / Refonte site web", icon: Zap },
                { label: "Optimisation & Performance web", icon: Sparkles },
                { label: "SEO Optimisé", icon: Globe },
                { label: "Audit technique", icon: ShieldCheck },
            ]
        }
    };

    const t = content[langKey];

    return (
        <section className="relative flex flex-col items-center justify-center px-6 md:px-6 max-w-7xl mx-auto pt-22 pb-20 overflow-hidden bg-white text-slate-900">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* COLONNE GAUCHE : Textes et CTA */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">

                    {/* Badge Supérieur Rouge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full bg-red-50 border border-red-200/60 w-fit"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                            {t.badge}
                        </span>
                    </motion.div>

                    {/* Grand Titre Sombre */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 max-w-2xl"
                    >
                        {t.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
                    >
                        {t.description}
                    </motion.p>

                    {/* Boutons d'Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
                    >
                        <a
                            href="https://calendar.app.google/XwfDAm67pz7uL7pV8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#ff2a4d] hover:bg-[#e02041] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg shadow-red-500/25 hover:scale-[1.02]"
                        >
                            {t.cta1} <ArrowRight size={16} />
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-sm px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 transition-all shadow-sm"
                        >
                            {t.cta2}
                        </a>
                    </motion.div>
                </div>

                {/* COLONNE DROITE : Graphique Orbital Interactif */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] sm:min-h-[520px]"
                >

                    <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-indigo-100/80 pointer-events-none" />
                    <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-indigo-200/60 pointer-events-none" />
                    <div className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border border-indigo-50/50 pointer-events-none" />


                    <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/40">
                        <Brain size={48} className="animate-pulse" />
                    </div>


                    <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute top-20 left-[22%] z-20 p-2.5 rounded-full bg-white shadow-lg text-indigo-600 border border-slate-100">
                        <Code size={16} />
                    </motion.div>
                    <motion.div animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }} className="absolute top-24 right-[22%] z-20 p-2.5 rounded-full bg-white shadow-lg text-purple-600 border border-slate-100">
                        <Cpu size={16} />
                    </motion.div>
                    <motion.div animate={{ y: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="absolute bottom-40 right-[25%] z-20 p-2.5 rounded-full bg-white shadow-lg text-blue-600 border border-slate-100">
                        <Database size={16} />
                    </motion.div>
                    <motion.div animate={{ y: [4, -6, 4] }} transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-40 left-[25%] z-20 p-2.5 rounded-full bg-white shadow-lg text-amber-600 border border-slate-100">
                        <Server size={16} />
                    </motion.div>


                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                        {/* Badge 1 (Haut Gauche - Audit) */}
                        <motion.div
                            animate={{ y: [-6, 6, -6] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-8 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/60 px-4 py-2.5 rounded-2xl flex items-center gap-3 pointer-events-auto"
                        >
                            <span className="p-1.5 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                                {React.createElement(t.orbitTags[3].icon, { size: 16 })}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">{t.orbitTags[3].label}</span>
                        </motion.div>

                        {/* Badge 2 (Haut Droite - Création / Refonte) */}
                        <motion.div
                            animate={{ y: [6, -6, 6] }}
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                            className="absolute top-30 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/60 px-4 py-2.5 rounded-2xl flex items-center gap-3 pointer-events-auto"
                        >
                            <span className="p-1.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                                {React.createElement(t.orbitTags[0].icon, { size: 16 })}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">{t.orbitTags[0].label}</span>
                        </motion.div>

                        {/* Badge 3 (Bas Droite - Optimisation & Performance) */}
                        <motion.div
                            animate={{ y: [-5, 8, -5] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-24 right-1 sm:right-2 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/60 px-4 py-2.5 rounded-2xl flex items-center gap-3 pointer-events-auto"
                        >
                            <span className="p-1.5 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                                {React.createElement(t.orbitTags[1].icon, { size: 16 })}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">{t.orbitTags[1].label}</span>
                        </motion.div>

                        {/* Badge 4 (Bas Gauche - SEO Optimisé) */}
                        <motion.div
                            animate={{ y: [5, -8, 5] }}
                            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-50 left-1 sm:left-2 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl shadow-slate-200/60 px-4 py-2.5 rounded-2xl flex items-center gap-3 pointer-events-auto"
                        >
                            <span className="p-1.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                                {React.createElement(t.orbitTags[2].icon, { size: 16 })}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">{t.orbitTags[2].label}</span>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
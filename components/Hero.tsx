"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from "../components/Languagecontext";

export default function Hero() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    // Textes multilingues adaptés à votre profil
    const content = {
        EN: {
            badge: "FRONTEND & MOBILE DEVELOPER",
            title: "I build your custom web and mobile application",
            description: "Hi, I'm Dieudonné Houndagnon. I build your custom web and mobile application to deliver seamless experiences, maximize performance, and accelerate your growth.",
            cta1: "Book a Call",
            cta2: "Explore Projects"
        },
        FR: {
            badge: "DÉVELOPPEUR FRONTEND & MOBILE",
            title: "Je crée votre application web et mobile sur mesure",
            description: "Bonjour, je suis Dieudonné Houndagnon. Je crée votre application web et mobile sur-mesure pour offrir des expériences fluides, maximiser vos performances et accélérer votre croissance.",
            cta1: "Prendre rendez-vous",
            cta2: "Voir les projets"
        }
    };

    const t = content[langKey];

    return (
        <section className="relative flex flex-col items-center justify-center px-6 md:px-12 max-w-7xl mx-auto pt-22 pb-16 text-center bg-white text-slate-900 overflow-hidden">

            {/* Arrière-plan avec motif en grille subtil */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

            <div className="relative z-10 space-y-8 w-full flex flex-col items-center">

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
                    className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-slate-900 max-w-4xl"
                >
                    {t.title}
                </motion.h1>

                {/* Description Neutre Mignon */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
                >
                    {t.description}
                </motion.p>

                {/* Boutons d'Action (CTA Rouge Vif & Bouton Secondaire Blanc) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 pt-2"
                >
                    {/* Lien vers votre Google Calendar de réservation (Option A) */}
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

            {/* Mockup de l'application / navigateur inférieur au style épuré */}
            {/* <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full mt-16 max-w-5xl bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 relative z-10"
            >

                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-100">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                    </div>
                    <div className="w-48 h-5 bg-slate-100 rounded-md" />
                    <div className="w-4" />
                </div>


                <div className="relative aspect-[16/9] w-full bg-slate-100 flex items-center justify-center overflow-hidden">
                    <img
                        src="/images/cmp.jpeg"
                        alt="Portfolio Preview"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </motion.div> */}

        </section>
    );
}
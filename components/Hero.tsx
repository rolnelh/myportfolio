"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from "../components/Languagecontext";

export default function Hero() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    const content = {
        EN: {
            // badge: "FRONTEND & MOBILE DEVELOPER",
            titlePart1: "Building code is easy. Scaling a product,",
            titleItalic: " that's my craft.",
            description: "Hi, I'm Dieudonné Houndagnon. I build your custom web and mobile application to deliver seamless experiences, maximize performance, and accelerate your growth.",
            cta1: "Book a Call",
            cta2: "See My Case Studies",
        },
        FR: {
            // badge: "DÉVELOPPEUR FRONTEND & MOBILE",
            titlePart1: "Créer du code, c'est facile. Faire scaler un produit,",
            titleItalic: " c'est mon métier.",
            description: "Bonjour, je suis Dieudonné Houndagnon. Je crée votre application web et mobile sur-mesure pour offrir des expériences fluides, maximiser vos performances et accélérer votre croissance.",
            cta1: "Prendre rendez-vous",
            cta2: "Voir mes études de cas",
        }
    };

    const t = content[langKey];

    return (
        <section className="relative flex flex-col items-center justify-center px-6 max-w-5xl mx-auto pt-36 pb-20 text-center bg-white text-slate-900">

            {/* Contenu Centré Style Éditorial */}
            <div className="relative z-10 w-full mt-2 flex flex-col items-center space-y-6">

                {/* Petit Badge supérieur */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
                        {t.badge}
                    </span>
                </motion.div> */}

                {/* Grand Titre Centré (Style Éditorial avec partie en italique) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.15] tracking-tight text-slate-900 max-w-4xl"
                >
                    {t.titlePart1}
                    <span className="italic font-serif text-slate-800">
                        {t.titleItalic}
                    </span>
                </motion.h1>

                {/* Description centrée */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
                >
                    {t.description}
                </motion.p>

                {/* Boutons d'Action centrés */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 pt-4"
                >
                    <a
                        href="https://calendar.app.google/XwfDAm67pz7uL7pV8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#FDE08D] hover:bg-[#ffecb7] text-gray-800 font-semibold text-xs px-7 py-3.5 rounded-full transition-all"
                    >
                        {t.cta1} <ArrowRight size={14} />
                    </a>

                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-xs px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 transition-all"
                    >
                        {t.cta2}
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
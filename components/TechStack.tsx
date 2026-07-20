"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        status: "Available for work",
        title: "I turn slow and frustrating interfaces into fast, smooth, and delightful experiences.",
        description: "I specialize in B2B frontend development — dashboards, internal tools, landing pages, and redesigns.",
        cta1: "See my projects in detail",
        cta2: "Contact Me"
    },
    FR: {
        status: "Disponible pour travailler",
        title: "Je transforme vos interfaces lentes et frustrantes en expériences rapides, fluides et agréables à utiliser.",
        description: "Spécialisé en développement frontend B2B — dashboards, outils internes, landing pages et refontes",
        cta1: "Voir mes projets en détail",
        cta2: "Me contacter"
    }
};


const Hero = () => {
    const { language } = useLanguage();
    const t = content[language === "EN" ? "EN" : "FR"];

    return (
        <section className="relative h-full flex items-center px-4 md:px-12 max-w-6xl mx-auto pt-14 pb-10">
            <div className="flex flex-col items-center text-center space-y-8 w-full">

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-zinc-900/10 dark:border-zinc-800 w-fit mx-auto">

                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-600 dark:text-zinc-400">{t.status}</span>

                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-white dark:text-white max-w-4xl mx-auto" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {t.title}
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    {t.description}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 justify-center">
                    <a href="#projects" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all">
                        {t.cta1} <ArrowRight size={16} />
                    </a>
                    <a href="#contact" className="inline-flex items-center border border-zinc-900/10 text-gray-900 font-bold text-sm px-6 py-3 rounded-full bg-zinc-100 transition-all">
                        {t.cta2}
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
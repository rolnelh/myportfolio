"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveDown } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        intro: "Frontend Engineer · Based in Benin",
        title: "Building performant interfaces & web products built to last.",
        offer: "Helping startups and businesses launch ultra-fast, beautiful websites designed to grow smoothly as their business expands.",
        cta1: "Get in touch",
        cta2: "View work",
    },
    FR: {
        intro: "Ingénieur Frontend · Basé au Bénin",
        title: "Je conçois des interfaces rapides et des sites web bâtis pour durer.",
        offer: "J'aide les startups et les entreprises à lancer des sites web ultra-rapides, magnifiques et faciles à faire évoluer avec leur croissance.",
        cta1: "Me contacter",
        cta2: "Voir mes projets",
    },
};

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 15 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1] // Custom ease out chic
        }
    }
});

const Hero = () => {
    const { language } = useLanguage();
    const t = content[language === "EN" ? "EN" : "FR"];

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto bg-white dark:bg-[#09090B] transition-colors duration-300">

            <div className="w-full max-w-4xl space-y-8">

                {/* Rôle / Statut minimaliste */}
                <motion.div
                    {...fadeUp(0.1)}
                    className="flex items-center gap-3"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-900/20 dark:bg-white/20 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-900 dark:bg-white" />
                    </span>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-[0.2em]">
                        {t.intro}
                    </p>
                </motion.div>

                {/* Titre Typographique Puissant */}
                <motion.h1
                    {...fadeUp(0.2)}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {t.title}
                </motion.h1>

                {/* Description allégée (Focus Client) */}
                <motion.p
                    {...fadeUp(0.3)}
                    className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal"
                >
                    {t.offer}
                </motion.p>

                
                <motion.div
                    {...fadeUp(0.4)}
                    className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-[11px] uppercase tracking-widest h-12 px-8 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto"
                    >
                        <span>{t.cta1}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center text-zinc-900 dark:text-white font-bold text-[11px] uppercase tracking-widest h-12 px-8 rounded-full border border-zinc-900/10 dark:border-zinc-800 hover:border-zinc-950 dark:hover:border-white transition-all duration-300 w-full sm:w-auto box-border"
                    >
                        {t.cta2}
                    </a>
                </motion.div>
            </div>

            {/* Indicateur de défilement discret en bas à droite */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute right-6 md:right-12 bottom-12 hidden sm:flex items-center gap-3 text-zinc-400 dark:text-zinc-600"
            >
                <span className="text-[10px] font-bold uppercase tracking-widest">{language === "EN" ? "Scroll" : "Défiler"}</span>
                <MoveDown size={14} className="animate-bounce" />
            </motion.div>

        </section>
    );
};

export default Hero;
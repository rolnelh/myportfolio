"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveDown, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        intro: "Frontend Engineer · Based in Benin",
        title: "Need a modern website for your business?",
        offer: "I design and build modern websites that help your business stand out and grow.",
        cta1: "Start a Project",
        cta2: "View My Work",
    },
    FR: {
        intro: "Frontend Engineer · Basé au Bénin",
        title: "Besoin d'un site web moderne pour votre entreprise ?",
        offer: "Je conçois et développe des sites web modernes qui aident votre entreprise à se démarquer et à croître.",
        cta1: "Démarrer un projet",
        cta2: "Voir mes réalisations",
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

                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-3"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-900/20 dark:bg-white/20 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-900 dark:bg-white" />
                    </span>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-[0.2em]">
                        {t.intro}
                    </p>
                </motion.div> */}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {t.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal"
                >
                    {t.offer}
                </motion.p>


                <div className="flex flex-row gap-4">
                    <a href="https://github.com/rolnelh" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-900/10 dark:border-zinc-800 hover:text-white hover:bg-zinc-900 dark:hover:text-white dark:hover:bg-white transition-colors duration-300 rounded-full p-3">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-900/10 dark:border-zinc-800 hover:text-white hover:bg-zinc-900 dark:hover:text-white dark:hover:bg-white transition-colors duration-300 rounded-full p-3">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/Dsquare_15" target="_blank" rel="noopener noreferrer" className="bg-white border border-zinc-900/10 dark:border-zinc-800 hover:text-white hover:bg-zinc-900 dark:hover:text-white dark:hover:bg-white transition-colors duration-300 rounded-full p-3">
                        <Twitter size={20} />
                    </a>
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";
// import Image from "next/image";

const content = {
    EN: {
        status: "Hi, I'm Dieudonné",
        title: "Frontend Engineer",
        description: "Digital product designer & frontend developer, I craft performant web architectures and intuitive user interfaces to convert your users, maximize performance, and support your business growth.",
        cta1: "See my works",
        cta2: "Start a project"
    },
    FR: {
        status: "Salut, je suis Dieudonné Houndagnon",
        title: "Frontend Engineer",
        description: "Développeur front-end & concepteur de produits digitaux, je conçois des architectures web performantes et des interfaces utilisateur intuitives pour convertir vos utilisateurs, maximiser les performances et accompagner la croissance de votre entreprise.",
        cta1: "Voir mes réalisations",
        cta2: "Démarrer un projet"
    }
};
const Hero = () => {
    const { language } = useLanguage();
    const t = content[language === "EN" ? "EN" : "FR"];

    return (
        <section className="relative h-auto flex items-center px-6 md:px-12 max-w-7xl mx-auto pt-24 pb-16">

            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full">

                {/* Colonne de Gauche : Texte & Action */}
                <div className="space-y-8">
                    {/* Badge Disponible */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-white/5 border border-zinc-900/10 dark:border-zinc-800 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-[15px] font-medium uppercase tracking-widest text-zinc-700 dark:text-zinc-400">Hello, Je suis Dieudonné Houndagnon</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
                        {t.title}
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-lg">
                        {t.description}
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
                        <a href="#projects" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all">
                            {t.cta1} <ArrowRight size={16} />
                        </a>
                        <a href="#contact" className="inline-flex items-center border border-zinc-900/10 dark:border-zinc-800 text-black font-bold text-sm px-6 py-3 rounded-full bg-zinc-100 transition-all">
                            {t.cta2}
                        </a>
                    </motion.div>
                </div>

                {/* Colonne de Droite : Image + Stack */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="h-full space-y-6" // Ajout de h-full ici
                >
                    {/* Remplacement de aspect-square par aspect-[4/5] pour un rendu portrait */}
                    <div className="w-[450px] h-[400px] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 dark:border-zinc-800 flex items-center justify-center">
                        <img
                            src="/images/cmp.jpeg"
                            alt="Ton Avatar"
                            className="w-[450px] h-full object-cover"
                        />
                        {/* <Image src="/images/cmp.jpeg" alt="Ton Avatar" className="w-full h-full object-cover" /> */}
                    </div>

                    {/* Stack Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="h-9 w-9 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-lg transition-all hover:scale-105"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href="https://github.com/rolnelh"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="h-9 w-9 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-lg transition-all hover:scale-105"
                        >
                            <Github size={18} />
                        </a>

                        {/* <a
                            href="https://twitter.com/votre-profil"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="h-9 w-9 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-lg transition-all hover:scale-105"
                        >
                            <Twitter size={18} />
                        </a> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
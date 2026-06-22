"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        status: "Available for work",
        title: "Frontend Engineer.",
        description: "Hi, I'm Dieudonné Houndagnon, a frontend engineer in Benin building fast, accessible web experiences. I focus on modern JavaScript frameworks and clean, scalable interfaces.",
        cta1: "See my works",
        cta2: "Contact Me"
    },
    FR: {
        status: "Disponible pour travailler",
        title: "Frontend Engineer.",
        description: "Salut, je suis Dieudonné Houndagnon, ingénieur frontend basé au Bénin, spécialisé dans la création d'expériences web rapides et accessibles. Je me concentre sur les frameworks JavaScript modernes et les interfaces épurées et scalables.",
        cta1: "Voir mes réalisations",
        cta2: "Me contacter"
    }
};


const Hero = () => {
    const { language } = useLanguage();
    const t = content[language === "EN" ? "EN" : "FR"];

    return (
        <section className="relative h-auto flex items-center px-6 md:px-12 max-w-6xl mx-auto pt-14 pb-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full">

                <div className="space-y-8">

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-zinc-900/10 dark:border-zinc-800 w-fit">

                        <span className="relative flex h-2 w-2 ">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-600 dark:text-zinc-400">Available for work</span>

                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight text-white dark:text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {t.title}
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-lg">
                        {t.description}
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
                        <a href="#contact" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all">
                            {t.cta1} <ArrowRight size={16} />
                        </a>
                        <a href="#projects" className="inline-flex items-center border border-zinc-900/10 text-gray-900 font-bold text-sm px-6 py-3 rounded-full bg-zinc-100 transition-all">
                            {t.cta2}
                        </a>
                    </motion.div>
                </div>


                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="space-y-6">

                    <div className="aspect-square rounded-3xl overflow-hidden flex items-center justify-center">
                        <img src="/images/cmp.jpeg" alt="Ton Avatar" className="w-[360px] h-[360px] object-cover rounded-3xl" />

                    </div>

                    {/* Stack Icons (Comme dans image_08afd7.png) */}
                    <div className="flex gap-4 opacity-50">
                        {/* Remplace par tes icônes de technos (Next, React, TS, etc) */}
                        <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
                        <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
                        <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
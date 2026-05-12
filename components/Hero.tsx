"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveDown } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        intro: "Dieudonné — Frontend Engineer & UI Designer",
        title1: "High-performance interfaces",
        title2: "crafted for growth.",
        offer: "I build ultra-fast web experiences that help entrepreneurs turn visitors into loyal customers.",
        cta1: "Get in touch",
        cta2: "View work",
        waNumber: "https://wa.me/22901663745865",
    },
    FR: {
        intro: "Dieudonné — Développeur Frontend & UI Designer",
        title1: "Des interfaces haute performance",
        title2: "conçues pour la croissance.",
        offer: "Je construis des expériences web ultra-rapides qui aident les entrepreneurs à transformer leurs visiteurs en clients.",
        cta1: "Me contacter",
        cta2: "Voir projets",
        waNumber: "https://wa.me/22901663745865",
    },
};

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.215, 0.61, 0.355, 1] as const 
        }
    }
});

const Hero = () => {
    const { language } = useLanguage();
    const t = content[language === "EN" ? "EN" : "FR"];

    return (
        <section className="relative min-h-[85vh] flex items-center px-6 py-20 max-w-7xl mx-auto bg-white">

            <div className="relative z-10 w-full max-w-5xl">

                <motion.div {...fadeUp(0.1)} viewport={{ once: true }} className="flex items-center gap-3 mb-8">
                    <div className="h-px w-8 bg-gray-900/20" />
                    <p className="text-gray-900 text-xs font-bold uppercase tracking-[0.2em]">
                        {t.intro}
                    </p>
                </motion.div>

                <motion.h1
                    {...fadeUp(0.2)} viewport={{ once: true }}
                    className="text-4xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8 text-gray-900"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {t.title1}
                    <br />
                    <span className="text-gray-900/30 italic font-medium">{t.title2}</span>
                </motion.h1>

                <motion.p
                    {...fadeUp(0.3)} viewport={{ once: true }}
                    className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl font-medium"
                >
                    {t.offer}
                </motion.p>

                <motion.div
                    {...fadeUp(0.4)} viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 sm:items-center"
                >
                    <a
                        href={t.waNumber}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-all duration-300 shadow-sm"
                    >
                        {t.cta1}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#projects"
                        className="flex items-center justify-center text-gray-900 font-bold px-8 py-4 rounded-full border border-gray-900/10 hover:border-gray-900 transition-all duration-300"
                    >
                        {t.cta2}
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-6 hidden md:flex items-center gap-4 text-gray-400"
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gray-200 to-transparent" />
                    <span className="text-[10px] font-black uppercase tracking-widest vertical-text rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                </div>
            </motion.div>

            <motion.a
                href="#projects"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="hidden lg:flex absolute right-8 bottom-20 w-16 h-16 rounded-full border border-gray-900/5 hover:border-gray-900 items-center justify-center text-gray-900 transition-all duration-500 hover:bg-gray-900 hover:text-white"
            >
                <MoveDown size={24} className="animate-bounce" />
            </motion.a>

        </section>
    );
};

export default Hero;
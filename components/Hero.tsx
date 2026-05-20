"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MoveDown, Code2, Layers } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        intro:
            "Building fast, modern websites | React & Next.js Developer",

        title1:
            "I build fast, scalable web interfaces.",

        offer:
            "Helping startups and businesses launch modern web products focused on performance, clean architecture and premium user experience.",

        cta1: "Work with me",
        cta2: "View projects",

        badgeCode: "Frontend Engineering",
        badgeNoCode: "Performance • UX • SEO",

        waLink:
            "https://wa.me/2290166374586?text=Hello%20Dieudonné,%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you!",
    },

    FR: {
        intro:
            "Création de site web rapide et moderne | Développeur React & Next.js",

        title1:
            "Je conçois des interfaces web rapides et scalables.",

        offer:
            "J’aide startups et entreprises à lancer des produits web modernes axés sur la performance, une architecture propre et une expérience utilisateur premium.",

        cta1: "Travailler avec moi",
        cta2: "Voir mes projets",

        badgeCode: "Frontend Engineering",
        badgeNoCode: "Performance • UX • SEO",

        waLink:
            "https://wa.me/2290166374586?text=Bonjour%20Dieudonné,%20j’ai%20vu%20ton%20portfolio%20et%20je%20souhaite%20collaborer%20avec%20toi!",
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

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full">

                <div className="lg:col-span-2 w-full max-w-5xl">

                    <motion.div
                        {...fadeUp(0.1)}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="h-[1px] w-8 bg-gray-900/20" />
                        <p className="text-gray-900 text-xs font-bold uppercase tracking-[0.2em]">
                            {t.intro}
                        </p>
                    </motion.div>

                    <motion.h1
                        {...fadeUp(0.2)}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4 text-gray-900"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {t.title1}
                        <br />
                        {/* <span className="text-gray-900/40 font-medium text-xl">
                            {t.title2}
                        </span> */}
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.3)}
                        viewport={{ once: true }}
                        className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium"
                    >
                        {t.offer}
                    </motion.p>

                    <motion.div
                        {...fadeUp(0.4)}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 sm:items-center"
                    >
                        <a
                            href={t.waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-all duration-300 shadow-sm w-full sm:w-auto"
                        >
                            {t.cta1}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#projects"
                            className="flex items-center justify-center text-gray-900 font-bold px-8 py-4 rounded-full border border-gray-900/10 hover:border-gray-900 transition-all duration-300 w-full sm:w-auto"
                        >
                            {t.cta2}
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full flex flex-col justify-center items-center relative"
                >

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="absolute left-[-20px] top-[20%] z-20 hidden xl:flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-900/5 shadow-lg shadow-gray-100/50 px-4 py-2.5 rounded-2xl"
                    >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-900 text-white">
                            <Code2 size={14} />
                        </div>
                        <span className="text-xs font-bold tracking-wide text-gray-900">{t.badgeCode}</span>
                    </motion.div>

                    <div className="w-full aspect-square max-h-[320px] lg:max-h-[380px] flex justify-center items-center overflow-hidden rounded-2xl border border-gray-900/5 shadow-2xl shadow-gray-200/30 bg-gray-50/50 p-4">
                        <video
                            src="/images/Male Programmer.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            className="w-full h-full object-contain pointer-events-none"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="absolute right-[-20px] bottom-[20%] z-20 hidden xl:flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-900/5 shadow-lg shadow-gray-100/50 px-4 py-2.5 rounded-2xl"
                    >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 text-gray-900 border border-gray-900/5">
                            <Layers size={14} />
                        </div>
                        <span className="text-xs font-bold tracking-wide text-gray-900">{t.badgeNoCode}</span>
                    </motion.div>


                    <div className="flex xl:hidden items-center gap-3 mt-6">
                        <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-900/5 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-xl">
                            <Code2 size={12} /> {t.badgeCode}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-900/5 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-xl">
                            <Layers size={12} /> {t.badgeNoCode}
                        </span>
                    </div>

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
                    <span
                        className="text-[10px] font-black uppercase tracking-widest rotate-180"
                        style={{ writingMode: "vertical-rl" }}
                    >
                        Scroll
                    </span>
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
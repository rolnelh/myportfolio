"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        status: "Available for work",
        title:
            "I turn slow and frustrating interfaces into fast, intuitive experiences users actually enjoy.",
        description:
            "Specialized in B2B frontend development — dashboards, SaaS applications, internal tools, landing pages and redesigns.",
        cta1: "View my work",
        cta2: "Let's talk",
    },

    FR: {
        status: "Disponible pour travailler",
        title:
            "Je transforme vos interfaces lentes et frustrantes en expériences rapides, intuitives et agréables à utiliser.",
        description:
            "Spécialisé en développement frontend B2B — applications SaaS, dashboards, outils internes, landing pages et refontes.",
        cta1: "Voir mes projets",
        cta2: "Me contacter",
    },
};

export default function Hero() {
    const { language } = useLanguage();

    const t = content[language === "EN" ? "EN" : "FR"];

    return (
        <section className="relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#090909]" />

            <div
                className="
                    absolute
                    left-1/2
                    top-20
                    -translate-x-1/2
                    w-[700px]
                    h-[700px]
                    rounded-full
                    bg-white/5
                    blur-[140px]
                "
            />

            <div
                className="
                    relative
                    max-w-6xl
                    mx-auto
                    h-auto
                    flex
                    items-center
                    justify-center
                    px-6
                    pt-16
                    pb-20
                "
            >
                <div className="text-center max-w-6xl">

                    {/* <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-lg
                            border
                            border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            px-4
                            py-2
                            mb-8
                        "
                    >
                        <span className="relative flex h-2 w-2.5">

                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping" />

                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />

                        </span>

                        <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                            {t.status}
                        </span>

                    </motion.div> */}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .1 }}
                        className="
                            text-5xl
                            md:text-7xl
                            leading-[1.05]
                            tracking-tight
                            text-white
                            font-medium
                        "
                        style={{
                            fontFamily: "'Syne', sans-serif",
                        }}
                    >
                        {t.title}
                    </motion.h1>

                    {/* Description */}

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .2 }}
                        className="
                            mt-8
                            max-w-2xl
                            mx-auto
                            text-lg
                            leading-8
                            text-white/60
                        "
                    >
                        {t.description}
                    </motion.p>

                    {/* Buttons */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .3 }}
                        className="
                            mt-12
                            flex
                            flex-wrap
                            justify-center
                            gap-4
                        "
                    >
                        <a
                            href="#projects"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white
                                text-black
                                px-7
                                py-3.5
                                font-semibold
                                transition-all
                                hover:scale-[1.02]
                                hover:bg-neutral-200
                            "
                        >
                            {t.cta1}

                            <ArrowRight
                                size={18}
                            />
                        </a>

                        <a
                            href="#contact"
                            className="
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-white/15
                                bg-white/5
                                backdrop-blur-xl
                                px-7
                                py-3.5
                                text-white
                                font-semibold
                                transition-all
                                hover:bg-white/10
                            "
                        >
                            {t.cta2}
                        </a>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}
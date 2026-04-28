"use client";
import React from "react";
import { ArrowRight, Calendar, Linkedin, Github, DribbbleIcon } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        badge: "Available for new projects",
        heading1: "I build",
        heading2: "high-performance",
        heading3: "web products that convert.",
        sub: "Startups & businesses hire me to turn complex ideas into scalable platforms — from UX to deployment, in weeks, not months.",
        social: "Trusted by 10+ clients across Africa & Europe · Remote-friendly · Async-ready",
        cta1: "Book a free call",
        cta2: "View my work",
        stat1: "15+",
        stat1l: "Projects shipped",
        stat2: "3+",
        stat2l: "Years building",
        stat3: "100%",
        stat3l: "Client satisfaction",
    },
    FR: {
        badge: "Disponible pour de nouveaux projets",
        heading1: "Je bâtis des produits web qui",
        heading2: "performent",
        heading3: "& convertissent.",
        sub: "Startups & entreprises me font confiance pour transformer des idées complexes en plateformes scalables — du design au déploiement, en semaines.",
        social: "Clients en Afrique & Europe · 100% remote · Async-friendly",
        cta1: "Réserver un appel gratuit",
        cta2: "Voir mes projets",
        stat1: "15+",
        stat1l: "Projets livrés",
        stat2: "3+",
        stat2l: "Ans d'expérience",
        stat3: "100%",
        stat3l: "Satisfaction client",
    },
};

const Hero = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section className="relative flex flex-col items-start px-6 pt-2 pb-20 max-w-7xl mx-auto overflow-hidden">

            <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full mb-10 w-fit">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-green-700 whitespace-nowrap">
                    {t.badge}
                </span>
            </div>

            <h1
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-[0.997] mb-8 max-w-7xl"
            >
                {t.heading1}{" "}
                <span className="relative inline-block">
                    <span className="relative z-10">{t.heading2}</span>
                    {/* <span
                        className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-300 -z-0 opacity-60"
                        style={{ transform: "skewX(-3deg)" }}
                    /> */}
                </span>{" "}
                <br />
                <span className="text-gray-400">{t.heading3}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl leading-relaxed tracking-tight">
                {t.sub}
            </p>

            <p className="text-sm text-gray-400 font-medium mb-12 flex items-center gap-2">
                <span className="inline-block w-4 h-px bg-gray-300" />
                {t.social}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14 w-full">
                <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-black text-white rounded-full px-8 py-4 font-bold text-base transition-all hover:scale-[1.02] shadow-lg shadow-black/20 cursor-pointer"
                >
                    <Calendar size={18} />
                    {t.cta1}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                    href="#projects"
                    className="flex items-center gap-3 font-bold text-black border-2 border-black/10 rounded-full px-8 py-4 transition-all hover:bg-gray-100 cursor-pointer"
                >
                    {t.cta2}
                </a>
            </div>

            {/* Stats bar — quick credibility */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 w-full border-t border-gray-100 pt-10">
                {[
                    { v: t.stat1, l: t.stat1l },
                    { v: t.stat2, l: t.stat2l },
                    { v: t.stat3, l: t.stat3l },
                ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4">
                        {i > 0 && <span className="hidden sm:block w-px h-10 bg-gray-200" />}
                        <div>
                            <p style={{ fontFamily: "'Syne', sans-serif" }} className="text-3xl font-bold text-black leading-none">{s.v}</p>
                            <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">{s.l}</p>
                        </div>
                    </div>
                ))}

                <div className="sm:ml-auto flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:text-black hover:border-black hover:bg-white transition-all duration-300 group"
                    >
                        <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/rolnelh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:text-black hover:border-black hover:bg-white transition-all duration-300 group"
                    >
                        <Github size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm">GitHub</span>
                    </a>
                     <a
                        href="https://dribbble.com/dieudonnedev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:text-black hover:border-black hover:bg-white transition-all duration-300 group"
                    >
                        <DribbbleIcon size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm">Dribbble</span>
                    </a>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/3 right-0 -z-10 blur-[140px] opacity-15 pointer-events-none">
                <div className="w-[400px] h-[400px] bg-yellow-300 rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "../Languagecontext";

const content = {
    EN: {
        nav: [
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Work", href: "#projects" },
            { label: "Contact", href: "#contact" },
        ],
        cta: "Get in touch",
        switchTo: "FR",
    },
    FR: {
        nav: [
            { label: "À propos", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Projets", href: "#projects" },
            { label: "Contact", href: "#contact" },
        ],
        cta: "Prendre contact",
        switchTo: "EN",
    },
};

const Navbar = () => {
    const { language, setLanguage } = useLanguage();

    const lang = language === "EN" ? "EN" : "FR";
    const t = content[lang];

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(lang === "EN" ? "FR" : "EN");
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? "pt-4 px-4" : "p-4 w-full"
                }`}
        >
            <div
                className={`mx-auto w-full transition-all duration-300 ${scrolled
                        ? "max-w-4xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 py-2.5 px-6 rounded-full shadow-lg shadow-slate-900/5"
                        : "max-w-7xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-transparent py-4 px-6 rounded-2xl"
                    }`}
            >
                <div className="flex items-center justify-between">

                    {/* Logo (Gauche) */}
                    <a
                        href="#"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                            <img
                                src="/images/cmp.jpeg"
                                alt="Dieudonné"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <span className="font-bold text-slate-900 dark:text-white tracking-tight text-base font-serif">
                            Dieudonné<span className="text-[#FDE08D]">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation en capsule (Centre) */}
                    <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-full px-4 py-1">
                        {t.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="
                                    tracking-[0.1em]
                                    text-slate-700 
                                    dark:text-slate-300
                                    font-medium 
                                    text-xs
                                    hover:text-slate-900
                                    dark:hover:text-white
                                    transition-colors
                                    px-3 py-1
                                    rounded-full
                                    hover:bg-white
                                    dark:hover:bg-slate-700
                                "
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions (Droite) */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            className="
                                text-xs
                                font-bold
                                tracking-widest
                                text-slate-600
                                dark:text-slate-300
                                hover:text-slate-900
                                dark:hover:text-white
                                transition-colors
                                px-2.5 py-1.5
                                rounded-lg
                                hover:bg-slate-100
                                dark:hover:bg-slate-800
                            "
                        >
                            {t.switchTo}
                        </button>

                        <a
                            href="https://calendar.app.google/XwfDAm67pz7uL7pV8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-[#FDE08D]
                                text-slate-900
                                px-5
                                py-2
                                text-xs
                                font-semibold
                                hover:bg-[#fcd34d]
                                transition-all
                                shadow-2xs
                            "
                        >
                            {t.cta}

                            <ArrowRight
                                size={14}
                                className="
                                    transition-transform
                                    group-hover:translate-x-1
                                "
                            />
                        </a>
                    </div>

                    {/* Mobile Button & Langue */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            className="text-xs font-bold text-slate-700 dark:text-slate-300 px-2 py-1"
                        >
                            {t.switchTo}
                        </button>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-slate-900 dark:text-white p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="pt-5 pb-3 border-t border-slate-100 dark:border-slate-800 mt-4">
                                <div className="flex flex-col gap-2">
                                    {t.nav.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="
                                                text-slate-800
                                                dark:text-slate-200
                                                text-sm
                                                font-medium
                                                px-3 py-2
                                                rounded-lg
                                                hover:bg-slate-100
                                                dark:hover:bg-slate-800
                                                transition-colors
                                            "
                                        >
                                            {item.label}
                                        </a>
                                    ))}

                                    <a
                                        href="https://calendar.app.google/XwfDAm67pz7uL7pV8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMobileOpen(false)}
                                        className="
                                            mt-2
                                            inline-flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-full
                                            bg-[#FDE08D]
                                            text-slate-900
                                            py-2.5
                                            font-semibold
                                            text-xs
                                        "
                                    >
                                        {t.cta} <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
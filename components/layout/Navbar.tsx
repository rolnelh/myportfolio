"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "../Languagecontext";

const content = {
    EN: {
        nav: [
            { label: "About", href: "#about" },
            { label: "Work", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Contact", href: "#contact" },
        ],
        cta: "Contact Me",
        switchTo: "FR",
    },
    FR: {
        nav: [
            { label: "À propos", href: "#about" },
            { label: "Projets", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Contact", href: "#contact" },
        ],
        cta: "Me contacter",
        switchTo: "EN",
    },
};

const Header = () => {
    const { language, setLanguage } = useLanguage();
    const lang = language === "EN" ? "EN" : "FR";
    const t = content[lang];

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleLanguage = () => setLanguage(lang === "EN" ? "FR" : "EN");

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 inset-x-0 z-50 text-white transition-all duration-300 ${scrolled
                ? "bg-[#09090B]/80 backdrop-blur-md border-b border-white/[0.06] py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
                        <img src="/images/cmp.jpeg" alt="Dieudonné" className="w-8 h-8 object-cover" />
                        <div className="w-full h-full bg-gradient-to-tr from-zinc-700 to-zinc-600" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-white group-hover:text-white/80 transition-colors">
                        Dieudonné
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {t.nav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-[12px] font-medium tracking-[0.12em] uppercase text-white hover:text-white/30 transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-[10px] font-bold uppercase tracking-widest text-white transition-colors w-8"
                    >
                        {t.switchTo}
                    </button>

                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 bg-white text-black font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all"
                    >
                        {t.cta}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="flex items-center gap-4">

                    <button
                        onClick={toggleLanguage}
                        className="md:hidden text-[10px] font-bold uppercase tracking-widest text-white hover:text-white/30 transition-colors w-8"
                    >
                        {t.switchTo}
                    </button>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white p-1"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#09090B] border-b border-white/[0.06] overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {t.nav.map((item) => (
                                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-lg font-medium text-white">
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
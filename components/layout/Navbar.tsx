"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "../Languagecontext";

const content = {
    EN: {
        nav: [
            { label: "Work", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
        ],
        cta: "Get in touch",
        switchTo: "FR",
    },
    FR: {
        nav: [
            { label: "Projets", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
        ],
        cta: "Prendre contact",
        switchTo: "EN",
    },
};

const Navbar = () => {
    // Correction ici : on récupère aussi setLanguage depuis le hook
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
            className="fixed top-4 left-0 right-0 z-[9999] px-4"
        >
            <div
                className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl border
                ${scrolled
                        ? "bg-white/90 backdrop-blur-md border-slate-200/80 shadow-lg shadow-slate-200/50 py-3 px-6"
                        : "bg-white/70 backdrop-blur-sm border-slate-200/50 py-4 px-6"
                    }`}
            >
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-sm">
                            <img
                                src="/images/cmp.jpeg"
                                alt="Dieudonné"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <span className="font-bold text-slate-900 tracking-tight text-base">
                            Dieudonné
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {t.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.14em]
                                    font-bold
                                    text-slate-600
                                    hover:text-slate-900
                                    transition-colors
                                "
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-5">
                        <button
                            onClick={toggleLanguage}
                            className="
                                text-xs
                                font-bold
                                tracking-widest
                                text-slate-600
                                hover:text-slate-900
                                transition-colors
                                px-2 py-1
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
                                bg-[#ff2a4d]
                                text-white
                                px-6
                                py-2.5
                                text-sm
                                font-semibold
                                shadow-md
                                shadow-red-500/20
                                hover:bg-[#e02041]
                                transition-all
                                hover:scale-[1.02]
                            "
                        >
                            {t.cta}

                            <ArrowRight
                                size={15}
                                className="
                                    transition-transform
                                    group-hover:translate-x-1
                                "
                            />
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="
                                text-xs
                                font-bold
                                text-slate-700
                            "
                        >
                            {t.switchTo}
                        </button>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-slate-900 p-1"
                        >
                            {mobileOpen ? (
                                <X size={22} />
                            ) : (
                                <Menu size={22} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="
                                md:hidden
                                overflow-hidden
                            "
                        >
                            <div className="pt-6 pb-4 border-t border-slate-100 mt-4">
                                <div className="flex flex-col gap-4">
                                    {t.nav.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={() =>
                                                setMobileOpen(false)
                                            }
                                            className="
                                                text-slate-800
                                                text-base
                                                font-medium
                                                hover:text-[#ff2a4d]
                                                transition-colors
                                            "
                                        >
                                            {item.label}
                                        </a>
                                    ))}

                                    <a
                                        href="https://calendar.google.com/calendar/appointments/surtout_votre_lien_ici"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() =>
                                            setMobileOpen(false)
                                        }
                                        className="
                                            mt-2
                                            inline-flex
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-full
                                            bg-[#ff2a4d]
                                            text-white
                                            py-3
                                            font-semibold
                                            text-sm
                                            shadow-md
                                            shadow-red-500/20
                                        "
                                    >
                                        {t.cta} <ArrowRight size={15} />
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
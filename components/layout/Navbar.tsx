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
                className={`max-w-7xl mx-auto transition-all duration-300 rounded-md border
                ${scrolled
                        ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-2xl py-3"
                        : "bg-black/40 backdrop-blur-xl border-white/5 py-4"
                    }`}
            >
                <div className="px-6 flex items-center justify-between">

                    {/* Logo */}

                    <a
                        href="#"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10">
                            <img
                                src="/images/cmp.jpeg"
                                alt="Dieudonné"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <span className="font-semibold text-white tracking-tight">
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
                                    font-medium
                                    text-white/80
                                    hover:text-white
                                    transition-colors
                                "
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions */}

                    <div className="hidden md:flex items-center gap-4">

                        <button
                            onClick={toggleLanguage}
                            className="
                                text-xs
                                font-semibold
                                tracking-widest
                                text-white/70
                                hover:text-white
                                transition-colors
                            "
                        >
                            {t.switchTo}
                        </button>

                        <a
                            href="#contact"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white
                                text-black
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                hover:bg-zinc-200
                                transition-all
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

                    {/* Mobile */}

                    <div className="md:hidden flex items-center gap-4">

                        <button
                            onClick={toggleLanguage}
                            className="
                                text-xs
                                font-semibold
                                text-white/80
                            "
                        >
                            {t.switchTo}
                        </button>

                        <button
                            onClick={() =>
                                setMobileOpen(!mobileOpen)
                            }
                            className="text-white"
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
                            <div className="px-6 pt-6 pb-5 border-t border-white/10 mt-4">

                                <div className="flex flex-col gap-5">

                                    {t.nav.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={() =>
                                                setMobileOpen(false)
                                            }
                                            className="
                                                text-white
                                                text-lg
                                                font-medium
                                            "
                                        >
                                            {item.label}
                                        </a>
                                    ))}

                                    <a
                                        href="#contact"
                                        onClick={() =>
                                            setMobileOpen(false)
                                        }
                                        className="
                                            mt-2
                                            inline-flex
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white
                                            text-black
                                            py-3
                                            font-semibold
                                        "
                                    >
                                        {t.cta}
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

export default Header;
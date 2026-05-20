"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../Languagecontext";

const links = {
    EN: [
        { label: "Work", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" }, 
        { label: "Contact", href: "#contact" },
    ],
    FR: [
        { label: "Projets", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "À propos", href: "#about" },
        { label: "Articles", href: "#blog" }, 
        { label: "Contact", href: "#contact" },
    ],
};

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? "py-3 border-b border-black/5 bg-white/90 backdrop-blur-xl shadow-sm"
                : "py-6 bg-white/50 backdrop-blur-md"
                }`}>
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                    <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-600/20 group-hover:border-blue-600 transition-colors">
                            <Image src="/images/profil.webp" alt="Dieudonné" width={32} height={32} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                        <span className="text-[#070707] font-bold text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                            Dieudonné<span className="text-blue-600">.</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8 border-r border-black/5 pr-8">
                            {links[language === "EN" ? "EN" : "FR"].map((l) => (
                                <a key={l.label} href={l.href}
                                    className="text-[#070707]/60 hover:text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300">
                                    {l.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <button onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
                                className="text-black/40 hover:text-black text-[10px] font-black uppercase tracking-widest transition-colors">
                                {language === "EN" ? "FR" : "EN"}
                            </button>

                            <a href="#contact"
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-blue-600 hover:bg-black px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/10 hover:shadow-none">
                                {language === "EN" ? "Let's talk" : "Discutons"}
                            </a>
                        </div>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                        className="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center z-[110] fixed right-6 top-5"
                    >
                        <span className={`block h-[2px] transition-all duration-300 ease-out ${open
                            ? "w-6 rotate-45 translate-y-[4px] bg-white"
                            : scrolled ? "w-6 bg-black" : "w-6 bg-black"
                            }`} />

                        <span className={`block h-[2px] transition-all duration-300 ease-out ${open
                            ? "w-6 -rotate-45 -translate-y-[4px] bg-white"
                            : scrolled ? "w-4 self-end bg-black" : "w-4 self-end bg-black"
                            }`} />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }} viewport={{ once: true }}
                        className="fixed inset-0 z-[60] bg-[#070707] flex flex-col items-start justify-center px-10"
                    >
                        <div className="flex flex-col gap-4 w-full">
                            {links[language === "EN" ? "EN" : "FR"].map((l, i) => (
                                <motion.a key={l.label} href={l.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    onClick={() => setOpen(false)}
                                    className="text-white font-bold uppercase tracking-tighter hover:text-blue-500 transition-colors text-5xl md:text-7xl"
                                    style={{ fontFamily: "'Syne', sans-serif" }}>
                                    {l.label}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-12 flex flex-col gap-6"
                        >
                            <a href="#contact" onClick={() => setOpen(false)}
                                className="text-xs font-black uppercase tracking-widest text-black bg-white px-8 py-4 rounded-full w-fit">
                                {language === "EN" ? "Get in touch" : "Contactez-moi"}
                            </a>
                            <button onClick={() => { setLanguage(language === "EN" ? "FR" : "EN"); setOpen(false); }}
                                className="text-white/40 text-xs font-bold uppercase tracking-widest text-left">
                                Switch to {language === "EN" ? "French" : "English"}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
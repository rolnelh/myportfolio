"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../Languagecontext";

const navLinks = {
    EN: ["Projects", "Services", "About", "Contact"],
    FR: ["Projets", "Services", "À propos", "Contact"],
};

const navHrefs = ["#projects", "#services", "#about", "#contact"];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        // On active l'effet dès 20px de scroll
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLang = () => setLanguage(language === "EN" ? "FR" : "EN");

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "py-3 bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-sm"
                    : "py-7 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Section Logo - Sans Motion */}
                <div
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <div
                        className={`relative rounded-full border-2 border-black overflow-hidden bg-gray-200 flex-shrink-0 transition-all duration-300 ${isScrolled ? "w-9 h-9" : "w-11 h-11"
                            }`}
                    >
                        <Image
                            src="/images/profil.webp"
                            alt="Dieudonné"
                            width={48}
                            height={48}
                            priority
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        className="font-bold text-lg tracking-tight text-black transition-colors group-hover:text-gray-500"
                    >
                        Dieudonné
                    </span>
                </div>

                {/* Section Actions - Sans Motion */}
                <div className="flex items-center gap-3 md:gap-6">
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-black transition-colors"
                    >
                        <Globe size={15} />
                        <span>{language === "EN" ? "FR" : "EN"}</span>
                    </button>

                    <a
                        href="#contact"
                        className="hidden md:block font-bold text-sm border-b-2 border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all"
                    >
                        {language === "EN" ? "Let's Talk" : "Discutons"}
                    </a>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        className="relative w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform z-[60]"
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Menu mobile reste inchangé */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-3"
                    >
                        {navLinks[language].map((item, i) => (
                            <motion.a
                                key={item}
                                href={navHrefs[i]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="font-bold hover:italic transition-all text-black"
                                style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: "clamp(1.2rem, 4vw, 3rem)",
                                }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
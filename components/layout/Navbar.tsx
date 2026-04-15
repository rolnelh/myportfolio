"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState("EN");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "py-4 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm"
                : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className={`relative rounded-full border-2 border-black overflow-hidden bg-gray-200 flex-shrink-0 transition-all duration-300 group-hover:shadow-lg ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}>
                        <Image
                            src="/images/profil.webp"
                            alt="Dieudonné"
                            width={48}
                            height={48}
                            priority
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-syne font-bold text-xl tracking-tight text-black transition-colors duration-300 group-hover:text-gray-600">
                        Dieudonné
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    className="flex items-center gap-4 md:gap-8"
                >

                    <div className="flex items-center gap-2 group cursor-pointer relative">
                        <Globe size={18} className="text-black group-hover:rotate-12 transition-transform" />
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="appearance-none bg-transparent font-inter font-semibold text-sm cursor-pointer outline-none pr-4 text-black"
                        >
                            <option value="EN">EN</option>
                            <option value="FR">FR</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-0 pointer-events-none" />
                    </div>

                    <button className="hidden md:block font-inter font-bold text-sm border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
                        {language === "EN" ? "Let's Talk" : "Discutons"}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform z-[60]"
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
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {(language === "EN"
                            ? ["Home", "Projects", "Services", "Contact"]
                            : ["Accueil", "Projets", "Services", "Contact"]
                        ).map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="font-syne text-5xl md:text-7xl font-bold hover:italic transition-all text-black"
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
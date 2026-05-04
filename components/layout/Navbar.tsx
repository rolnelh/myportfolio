"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Menu } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../Languagecontext";

const navLinks = {
    FR: ["Projets", "Services", "Témoignages", "Contact"],
    EN: ["Projects", "Services", "Testimonials", "Contact"],
};
const navHrefs = ["#projects", "#services", "#testimonials", "#contact"];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    const toggleLang = () => setLanguage(language === "FR" ? "EN" : "FR");
    const goHome = () => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

    return (
        <>

            <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-5">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full max-w-5xl flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-500 ${isScrolled
                            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40"
                            : "bg-[#0a0a0a]/70 backdrop-blur-md border border-white/5"
                        }`}
                >

                    <a
                        href="/"
                        onClick={(e) => { e.preventDefault(); goHome(); }}
                        className="flex items-center gap-2.5 group"
                        aria-label="Accueil"
                    >
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0 group-hover:border-white/50 transition-all duration-300">
                            <Image
                                src="/images/profil.webp"
                                alt="Dieudonné"
                                width={36}
                                height={36}
                                priority
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span
                            style={{ fontFamily: "'Syne', sans-serif" }}
                            className="text-white font-bold text-base tracking-tight group-hover:text-white/70 transition-colors"
                        >
                            Dieudonné<span className="text-white/30">.</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks[language].map((item, i) => (
                            <a
                                key={item}
                                href={navHrefs[i]}
                                className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">

                        <button
                            onClick={toggleLang}
                            className="hidden md:flex text-xs font-bold text-white/40 hover:text-white transition-colors px-2 py-1"
                        >
                            {language === "EN" ? "FR" : "EN"}
                        </button>

                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-95"
                        >
                            {language === "EN" ? "Contact me" : "Me contacter"}
                            <ArrowRight size={14} />
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-[70]"
                            aria-label="Menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <X size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <Menu size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </motion.div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center gap-5"
                    >

                        <a
                            href="/"
                            onClick={(e) => { e.preventDefault(); goHome(); }}
                            className="absolute top-6 left-6 flex items-center gap-2.5"
                        >
                            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20">
                                <Image src="/images/profil.webp" alt="Dieudonné" width={36} height={36} className="w-full h-full object-cover" />
                            </div>
                            <span style={{ fontFamily: "'Syne', sans-serif" }} className="text-white font-bold text-base">
                                Dieudonné<span className="text-white/30">.</span>
                            </span>
                        </a>

                        {navLinks[language].map((item, i) => (
                            <motion.a
                                key={item}
                                href={navHrefs[i]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white font-bold hover:text-white/50 transition-colors"
                                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 8vw, 3.5rem)" }}
                            >
                                {item}
                            </motion.a>
                        ))}

                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.32 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-4 flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-base"
                        >
                            {language === "EN" ? "Contact me" : "Me contacter"}
                            <ArrowRight size={16} />
                        </motion.a>

                        <button onClick={toggleLang} className="absolute bottom-8 right-8 text-white/30 hover:text-white text-sm font-bold transition-colors">
                            {language === "EN" ? "FR" : "EN"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
"use client";
import React from "react";
import { Linkedin, Github, ArrowUp } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        tagline: "Building fast, scalable digital products.",
        remote: "Remote · Worldwide · Async-friendly",
        copy: `© ${new Date().getFullYear()} Dieudonné Houndagnon. All rights reserved.`,
        back: "Back to top",
    },
    FR: {
        tagline: "Je construis des produits digitaux rapides et scalables.",
        remote: "Remote · Partout dans le monde · Async-friendly",
        copy: `© ${new Date().getFullYear()} Dieudonné Houndagnon. Tous droits réservés.`,
        back: "Retour en haut",
    },
};

const Footer = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <footer className="max-w-7xl mx-auto px-6 py-16 mt-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                    <p
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-2xl font-bold text-black mb-1"
                    >
                        Dieudonné Houndagnon
                    </p>
                    <p className="text-gray-500 text-sm">{t.tagline}</p>
                    <p className="text-gray-400 text-xs mt-1">{t.remote}</p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="https://github.com/rolnelh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all"
                    >
                        <Github size={16} />
                    </a>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-500 hover:text-black hover:border-black transition-all text-sm font-medium"
                    >
                        <ArrowUp size={14} />
                        {t.back}
                    </button>
                </div>
            </div>

            <p className="text-gray-400 text-xs mt-10 text-center md:text-left">{t.copy}</p>
        </footer>
    );
};

export default Footer;
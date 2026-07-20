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
        <footer className="max-w-6xl mx-auto px-6 md:px-12 py-16 mt-20 border-t border-zinc-100 dark:border-zinc-900">

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12">
                <div>
                    <p style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2"
                    >
                        Dieudonné Houndagnon
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">{t.tagline}</p>
                    <p className="text-zinc-400 dark:text-zinc-500 text-[11px] font-medium tracking-wide mt-1">{t.remote}</p>
                </div>

                <div className="flex items-center gap-6 text-zinc-400 dark:text-zinc-600">
                    <a href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white dark:hover:text-white transition-colors p-1"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a href="https://github.com/rolnelh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white dark:hover:text-white transition-colors p-1"
                    >
                        <Github size={16} />
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
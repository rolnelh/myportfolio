"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useLanguage } from "../components/Languagecontext";

export default function Widget() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";
    const [isOpen, setIsOpen] = useState(false);

    const content = {
        EN: {
            title: "Want to build with AI?",
            description: "Download my digital guide: 10 ready-to-use prompts, even if you don't know how to code.",
            cta: "Download Ebook"
        },
        FR: {
            title: "Crée ton site avec l'IA",
            description: "Télécharge mon guide digital : 10 prompts prêts à l'emploi, même sans savoir coder.",
            cta: "Télécharger l'Ebook"
        }
    };

    const t = content[langKey];

    // Animation de vibration continue pour le bouton
    const shakeAnimation = {
        rotate: [0, -12, 12, -12, 12, 0],
        scale: [1, 1.05, 1, 1.05, 1],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Pop-up / Carte de message */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 pt-10 text-slate-900"
                    >
                        {/* Avatar superposé en haut au centre */}
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-slate-200">
                            <img
                                src="/images/cmp.jpeg"
                                alt="Dieudonné Houndagnon"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bouton de fermeture */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors p-1"
                            aria-label="Fermer"
                        >
                            <X size={18} />
                        </button>

                        {/* Corps du message */}
                        <div className="text-center sm:text-left mt-2 space-y-3">
                            <h4 className="text-slate-900 font-normal text-base tracking-tight">
                                {t.title}
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t.description}
                            </p>

                            {/* Bouton de téléchargement de l'Ebook */}
                            <a
                                href="/images/ton-ebook.pdf"
                                download
                                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors shadow-sm"
                            >
                                <img
                                    src="/images/download.png"
                                    alt="file"
                                    className="w-8 h-8 object-cover"
                                />
                                {t.cta}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Conteneur du bouton principal */}
            <div className="flex items-center gap-3">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    animate={shakeAnimation}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full overflow-hidden border-2 border-white bg-slate-100 flex items-center justify-center shadow-xl shadow-orange-500/30 transition-colors focus:outline-none"
                    aria-label="Ouvrir le menu"
                >
                    <img
                        src="/images/stationary.png"
                        alt="file"
                        className="w-full h-full object-cover"
                    />
                </motion.button>
            </div>
        </div>
    );
}
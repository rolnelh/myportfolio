"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { useLanguage } from "../components/Languagecontext";

export default function Widget() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";
    const [isOpen, setIsOpen] = useState(true);

    const content = {
        EN: {
            message: "Hello, how can I help you?"
        },
        FR: {
            message: "Bonjour, comment puis-je vous aider ?"
        }
    };

    const t = content[langKey];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
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
                        <div className="text-center sm:text-left mt-2">
                            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                                {t.message}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bouton flottant principal */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-[#ff2a4d] hover:bg-[#e02041] text-white flex items-center justify-center shadow-xl shadow-red-500/30 transition-colors focus:outline-none"
                aria-label="Ouvrir le chat"
            >
                <MessageSquare size={24} />
            </motion.button>
        </div>
    );
}
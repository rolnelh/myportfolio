"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Link2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from "../components/Languagecontext";

export default function AuditPopup() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    const [isOpen, setIsOpen] = useState(false);
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Affichage automatique après 2 secondes
    useEffect(() => {
        const timer = setTimeout(() => {
            const hasClosedPopup = sessionStorage.getItem('audit_popup_closed');
            if (!hasClosedPopup) {
                setIsOpen(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('audit_popup_closed', 'true');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!websiteUrl) return;

        setIsLoading(true);

        try {
            const response = await fetch("https://formspree.io/f/xojybgwq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ websiteUrl, type: "Demande d'audit gratuit" })
            });

            if (response.ok) {
                setIsLoading(false);
                setIsSubmitted(true);

                setTimeout(() => {
                    setIsOpen(false);
                    sessionStorage.setItem('audit_popup_closed', 'true');
                }, 3000);
            } else {
                setIsLoading(false);
                alert("Une erreur est survenue, veuillez réessayer.");
            }

        } catch (error) {
            console.error("Erreur lors de l'envoi", error);
            setIsLoading(false);
        }
    };

    const content = {
        EN: {
            badge: "Free Offer",
            title: "Want a Free Website Audit?",
            description: "Enter your website link below. I will analyze your performance, UI/UX, and SEO, and send the report directly to my inbox.",
            placeholder: "https://your-website.com",
            send: "Send Request",
            sending: "Sending...",
            success: "Thank you! Your request has been sent successfully."
        },
        FR: {
            badge: "Offre Gratuite",
            title: "Envie d'un audit gratuit pour votre site ?",
            description: "Entrez le lien de votre site ci-dessous. J'analyserai vos performances, votre UI/UX et votre SEO, et recevrai votre demande directement.",
            placeholder: "https://votre-site.com",
            send: "Envoyer",
            sending: "Envoi en cours...",
            success: "Merci ! Votre demande a bien été envoyée."
        }
    };

    const t = content[langKey];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 text-slate-900 overflow-hidden"
                    >
                        {/* Gradient lumineux très subtil */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/80 rounded-full blur-2xl pointer-events-none -z-10" />

                        {/* Bouton de fermeture */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full transition-colors"
                            aria-label="Fermer"
                        >
                            <X size={16} />
                        </button>

                        {!isSubmitted ? (
                            <div>
                                {/* Badge */}
                                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200/60 text-red-500 text-[11px] font-bold uppercase tracking-wider mb-3">
                                    <ShieldCheck size={13} />
                                    {t.badge}
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-1.5">
                                    {t.title}
                                </h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5">
                                    {t.description}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-3.5">
                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                            {langKey === "EN" ? "Enter your link" : "Entrez votre lien"}
                                        </label>
                                        <div className="relative flex items-center">
                                            <span className="absolute left-3 text-slate-400">
                                                <Link2 size={16} />
                                            </span>
                                            <input
                                                type="url"
                                                required
                                                value={websiteUrl}
                                                onChange={(e) => setWebsiteUrl(e.target.value)}
                                                placeholder={t.placeholder}
                                                className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all shadow-2xs"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-[#ff2a4d] hover:bg-[#e02041] text-white font-medium text-xs sm:text-sm py-3 px-5 rounded-xl transition-all shadow-md shadow-red-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                                    >
                                        {isLoading ? (
                                            <span>{t.sending}</span>
                                        ) : (
                                            <>
                                                {t.send} <Send size={14} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="py-6 text-center space-y-3">
                                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h4 className="text-base font-bold text-slate-900">
                                    {langKey === "EN" ? "Request Sent!" : "Demande envoyée !"}
                                </h4>
                                <p className="text-slate-500 text-xs max-w-xs mx-auto">
                                    {t.success}
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
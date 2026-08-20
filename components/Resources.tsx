"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

export default function Resources() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    const content = {
        EN: {
            badge: "Resources",
            title: "Launch Your First Website Without Knowing How to Code",
            subtitle: "10 ready-to-use prompts to create your first website with AI.",
            cta: "Get the Ebook",
            link: "https://losrfvhm.mychariow.market/prd_p9cm1pqt"
        },
        FR: {
            badge: "Ressources",
            title: "Lance la première version de ton site sans savoir coder",
            subtitle: "10 prompts prêts à copier-coller pour créer ton premier site avec l’IA.",
            cta: "Obtenir l'Ebook",
            link: "https://losrfvhm.mychariow.market/prd_p9cm1pqt"
        }
    };

    const t = content[langKey];

    return (
        <section id="resources" className="py-10 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200/85 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden text-center max-w-4xl mx-auto"
            >
                {/* Petit badge supérieur avec icône livre / boîte */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-2xs">
                        <img
                            src="/images/ebook.png"
                            alt="Book Icon"
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                </div>

                {/* Contenu textuel centré */}
                <div className="max-w-5xl mx-auto my-auto py-2">
                    <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif text-slate-900 tracking-relaxed mb-3 font-normal leading-snug">
                        {t.title}
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
                        {t.subtitle}
                    </p>

                    {/* Bouton avec effet de lueur subtil */}
                    <div className="inline-block relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-md opacity-70"></div>
                        <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FDE08D] text-gray-800 font-medium text-sm transition-all shadow-md group"
                        >
                            <span>{t.cta}</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
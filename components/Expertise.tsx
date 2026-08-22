"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../components/Languagecontext";

export default function Expertise() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    const content = {
        EN: {
            badge: "Expertise",
            title: "Design support with clear direction",
            subtitle: "A focused mix of strategy, design, and execution to help ideas become clear, refined, and ready to launch with confidence.",
            cards: [
                {
                    title: "SEO Optimization",
                    description: "Boost your visibility on search engines with clean semantic code and optimal structure.",
                    icon: "/images/sseo.png",
                    special: false,
                },
                {
                    title: "High Performance",
                    description: "Lightning-fast load times and optimized Core Web Vitals for an exceptional user experience.",
                    icon: "/images/croissance.png",
                    special: false,
                },
                {
                    title: "Code Optimization",
                    description: "Clean, maintainable, and lightweight code structures built with modern best practices.",
                    icon: "/images/fusee.png",
                    special: false,
                },
                {
                    title: "Responsive Design",
                    description: "Seamless user interfaces that adapt perfectly to all screens, from mobile phones to large desktops.",
                    icon: "/images/responsive.png",
                    special: true, // Carte mise en avant avec ta couleur bg-[#FDE08D]
                },
                {
                    title: "Security & Reliability",
                    description: "Robust security standards implemented to protect user data and ensure stable application workflows.",
                    icon: "/images/security.png",
                    special: false,
                },
                {
                    title: "Accessibility (a11y)",
                    description: "Inclusive web applications designed to be easily usable by everyone, meeting global web standards.",
                    icon: "/images/accessibility.png",
                    special: false,
                    wide: true, // Carte large (span 2 colonnes)
                },
                {
                    title: "Scalability",
                    description: "Scalable architectures ready to expand effortlessly as your traffic and business requirements grow.",
                    icon: "/images/scalability.png",
                    special: false,
                },
            ]
        },
        FR: {
            badge: "Expertise",
            title: "Un accompagnement avec une vision claire",
            subtitle: "Un mélange ciblé de stratégie, de design et d'exécution pour donner vie à vos idées avec clarté, raffinement et confiance.",
            cards: [
                {
                    title: "Optimisation SEO",
                    description: "Améliorez votre visibilité sur les moteurs de recherche grâce à un code sémantique et structuré.",
                    icon: "/images/sseo.png",
                    special: false,
                },
                {
                    title: "Haute Performance",
                    description: "Des temps de chargement ultra-rapides et des Core Web Vitals optimisés pour une expérience fluide.",
                    icon: "/images/croissance.png",
                    special: false,
                },
                {
                    title: "Optimisation du Code",
                    description: "Des architectures de code propres, maintenables et légères basées sur les meilleures pratiques.",
                    icon: "/images/fusee.png",
                    special: false,
                },
                {
                    title: "Design Adaptatif",
                    description: "Des interfaces fluides qui s'adaptent parfaitement à tous les écrans, du mobile aux grands moniteurs.",
                    icon: "/images/responsive.png",
                    special: true, // Carte mise en avant avec ta couleur bg-[#FDE08D]
                },
                {
                    title: "Sécurité & Fiabilité",
                    description: "Des standards de sécurité robustes pour protéger vos données et garantir des flux stables.",
                    icon: "/images/security.png",
                    special: false,
                },
                {
                    title: "Accessibilité (a11y)",
                    description: "Des applications inclusives conçues pour être facilement utilisables par tous, respectant les standards du web.",
                    icon: "/images/accessibility.png",
                    special: false,
                    wide: true, // Carte large (span 2 colonnes)
                },
                {
                    title: "Évolutivité",
                    description: "Des architectures prêtes à évoluer sans effort à mesure que votre trafic et vos besoins grandissent.",
                    icon: "/images/scalability.png",
                    special: false,
                },
            ]
        }
    };

    const t = content[langKey];

    return (
        <section id="expertise" className="py-28 px-6 bg-slate-50/60 text-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                {/* En-tête centré */}
                <div className="mb-20 text-center space-y-4 max-w-2xl mx-auto">
                    {/* <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-200/60 border border-slate-300/60 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 shadow-2xs">
                        {t.badge}
                    </div> */}
                    <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 font-serif">
                        {t.title}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Grille Bento structurée */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {t.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 shadow-sm ${card.special
                                    ? "bg-[#FDE08D] text-slate-900 border-[#fcd34d] shadow-md lg:col-span-1"
                                    : card.wide
                                        ? "bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 lg:col-span-2"
                                        : "bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 lg:col-span-1"
                                }`}
                        >
                            <div>
                                {/* Icône Image */}
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border shadow-xs ${card.special
                                        ? "bg-white/80 border-white/60"
                                        : "bg-slate-50 border-slate-200/60"
                                    }`}>
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold tracking-tight mb-3 font-serif">
                                    {card.title}
                                </h3>

                                {/* Description fine */}
                                <p className={`text-sm font-light leading-relaxed ${card.special ? "text-slate-800 font-normal" : "text-slate-600"}`}>
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
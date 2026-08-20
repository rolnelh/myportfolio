"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

export default function Services() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    const content = {
        EN: {
            badge: "Services",
            title: "Expert web development tailored to your ambition",
            subtitle: "From scratch creation to rescuing AI-generated prototypes, I turn your digital ideas into high-performing web experiences.",
            cta: "All Services",
            services: [
                {
                    title: "Web Development",
                    description: "Custom, modern, and responsive websites built from the ground up using React, Next.js, and Tailwind CSS.",
                    image: "/images/website.png",
                },
                {
                    title: "Website Redesign",
                    description: "Give your existing platform a fresh, professional, and conversion-focused interface that aligns with modern standards.",
                    image: "/images/service.png",
                },
                {
                    title: "Optimization & Performance",
                    description: "Lightning-fast loading times, SEO structuring, and Core Web Vitals optimization to maximize your reach.",
                    image: "/images/seo.png",
                },
                {
                    title: "Bug Fixing & Maintenance",
                    description: "Quick diagnosis and resolution of layout glitches, script errors, or backend misbehaviors to ensure flawless stability.",
                    image: "/images/maintenance.jpg",
                },
            ],
            aiTakeover: {
                badge: "Need Help?",
                title: "Built your site with AI? Let a developer take control.",
                description: "AI tools are great for fast prototyping, but often leave messy code, security gaps, and scaling limits. I take your AI-generated project (v0, Bolt, Lovable, etc.) and turn it into a clean, robust, and production-ready application.",
                stats: ["Clean Code", "Fully Customized", "Responsive & Optimized"],
                whatsappCta: "Let's discuss"
            }
        },
        FR: {
            badge: "Services",
            title: "Des solutions web expertes adaptées à vos ambitions",
            subtitle: "De la création sur mesure à la reprise en main de prototypes générés par IA, je transforme vos idées en expériences web ultra-performantes.",
            cta: "Tous les services",
            services: [
                {
                    title: "Création de site web",
                    description: "Sites web modernes, réactifs et personnalisés, construits de A à Z avec React, Next.js et Tailwind CSS.",
                    image: "/images/website.png",
                },
                {
                    title: "Refonte de site",
                    description: "Donnez à votre plateforme existante une interface fraîche, professionnelle et axée sur la conversion.",
                    image: "/images/service.png",
                },
                {
                    title: "Optimisation & Performance",
                    description: "Temps de chargement éclair, structure sémantique SEO et optimisation des Core Web Vitals.",
                    image: "/images/seo.png",
                },
                {
                    title: "Corrections & Maintenance",
                    description: "Diagnostic rapide et résolution des anomalies d'affichage, erreurs de script ou instabilités.",
                    image: "/images/maintenance.jpg",
                },
            ],
            aiTakeover: {
                badge: "Besoin d'aide ?",
                title: "Votre site a été généré par IA ?",
                description: "Votre site a été généré par un outil d'IA (v0, Bolt, Lovable, etc.) ? Le résultat ne correspond pas à vos attentes ? Je peux reprendre votre projet et le transformer en une application propre, robuste et prête pour la production.",
                stats: ["Code propre", "Entièrement personnalisé", "Responsif et optimisé"],
                whatsappCta: "Discutons-en"
            }
        }
    };

    const t = content[langKey];

    return (
        <section id="services" className="py-24 px-6 bg-[#f9fafb] text-slate-900">
            <div className="max-w-[1200px] mx-auto">

                {/* En-tête de section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-5 max-w-2xl">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-transparent border border-amber-600/30 text-sm font-medium text-amber-700">
                            {t.badge}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mt-2">
                            {t.title}
                        </h2>
                    </div>

                    <a
                        href="https://calendar.app.google/XwfDAm67pz7uL7pV8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium transition-colors self-start md:self-end group"
                    >
                        {t.cta}
                        <ArrowUpRight size={16} className="text-slate-600 group-hover:text-slate-900 transition-colors" />
                    </a>
                </div>

                {/* Grille des 4 services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {t.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-[28px] p-4 border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
                        >
                            <div className="h-44 w-full rounded-2xl bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-100/60 border border-slate-100 relative overflow-hidden flex items-center justify-center p-4">
                                <div className="rounded-2xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
                            </div>

                            <div className="p-3 pt-5 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-normal mb-2 font-serif text-slate-900 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-[1.6]">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Section Reprise de code IA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-[32px] border border-slate-200/80 p-8 md:p-12 shadow-[0_2px_20px_-3px_rgba(0,0,0,0.03)] relative overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/50 border border-amber-200/50 text-xs font-bold text-amber-800">
                                <Bot size={14} />
                                {t.aiTakeover.badge}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 tracking-tight">
                                {t.aiTakeover.title}
                            </h3>
                            <p className="text-slate-500 text-base leading-relaxed max-w-xl">
                                {t.aiTakeover.description}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {t.aiTakeover.stats.map((stat, i) => (
                                    <span key={i} className="text-sm font-medium bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full border border-slate-100 flex items-center gap-2">
                                        {stat}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-3">
                                <a
                                    href="https://wa.me/22966374586"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#FDE08D] hover:bg-[#ffecb7] text-gray-800 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md group"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    {t.aiTakeover.whatsappCta}
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[300px] mt-8 lg:mt-0">
                            <div className="w-22 h-22 rounded-full bg-[#FDE08D] shadow-lg flex flex-col items-center justify-center text-center z-10 p-4 border-[6px] border-white overflow-hidden relative">
                                <img src="/images/qualite.png" alt="Dieudonné" className="w-18 h-18 object-cover rounded-full" />
                            </div>

                            <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-slate-200 animate-[spin_25s_linear_infinite]" />

                            {/* Logos IA en orbite */}
                            <div className="absolute top-2 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 animate-[bounce_4s_ease-in-out_infinite]">
                                <img src="/images/chatgpt.png" alt="ChatGPT" className="w-full h-full object-contain" />
                            </div>

                            <div className="absolute right-6 top-16 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 animate-[bounce_5s_ease-in-out_infinite_reverse]">
                                <img src="/images/v0.png" alt="v0" className="w-full h-full object-contain" />
                            </div>


                            <div className="absolute bottom-4 right-16 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 animate-[bounce_4.5s_ease-in-out_infinite]">
                                <img src="/images/claude.png" alt="Claude" className="w-full h-full object-contain" />
                            </div>

                            <div className="absolute left-4 bottom-16 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.08)] flex items-center justify-center p-3 animate-[bounce_5.5s_ease-in-out_infinite_reverse]">
                                <img src="/images/bolt.png" alt="Bolt" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
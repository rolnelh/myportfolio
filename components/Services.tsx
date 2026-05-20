"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        label: "What I do",
        title: "Services designed to grow your business.",
        services: [
            { num: "01", title: "Business Websites", desc: "Modern websites built to attract clients, secure trust, and drive revenue.", tags: ["Next.js", "SEO", "Responsive"] },
            { num: "02", title: "Conversion Landing Pages", desc: "High-performance landing pages engineered to transform traffic into sales.", tags: ["UI/UX", "Tailwind", "Speed"] },
            { num: "03", title: "Web Applications", desc: "Custom software, SaaS platforms, and internal dashboards tailored to your processes.", tags: ["React", "Laravel", "APIs"] },
            { num: "04", title: "Premium Redesigns", desc: "Turning outdated websites into fast, modern, and beautiful digital products.", tags: ["UX Refonte", "Performance"] },
            { num: "05", title: "Speed Optimization", desc: "Fine-tuning architecture to unlock peak Lighthouse scores and clean Google positioning.", tags: ["Lighthouse", "Core Vitals"] },
            { num: "06", title: "Integrations & APIs", desc: "Connecting ecosystems with secure payment bridges, automation, and CRMs.", tags: ["Stripe", "Auth", "REST"] },
        ],
        cta: "Start a project",
        wa: "https://wa.me/2290166374586",
    },
    FR: {
        label: "Ce que je fais",
        title: "Des services conçus pour faire grandir votre activité.",
        services: [
            { num: "01", title: "Sites Web Professionnels", desc: "Des architectures modernes pour attirer des clients, inspirer confiance et générer des ventes.", tags: ["Next.js", "SEO", "Responsive"] },
            { num: "02", title: "Landing Pages de Conversion", desc: "Des interfaces optimisées pour transformer efficacement vos visiteurs en clients payants.", tags: ["UI/UX", "Tailwind", "Performance"] },
            { num: "03", title: "Applications Web", desc: "Des outils métiers, plateformes SaaS et dashboards sur mesure pour automatiser votre gestion.", tags: ["React", "Laravel", "APIs"] },
            { num: "04", title: "Refontes Premium", desc: "Métamorphosez vos interfaces existantes en produits digitaux rapides, fluides et esthétiques.", tags: ["UX", "Refonte", "Vercel"] },
            { num: "05", title: "Optimisation de Performance", desc: "Ajustements techniques pointus pour flirter avec les 100/100 Lighthouse et maximiser le SEO.", tags: ["Lighthouse", "Core Vitals"] },
            { num: "06", title: "Intégrations & APIs", desc: "Interconnexion sécurisée avec des passerelles de paiement, systèmes CRM et automatisations.", tags: ["Stripe", "Auth", "REST"] },
        ],
        cta: "Démarrer un projet",
        wa: "https://wa.me/2290166374586",
    }
};

export default function Services() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="services" className="bg-white dark:bg-[#09090B] py-28 px-6 md:px-12 border-t border-slate-100 dark:border-zinc-900 max-w-6xl mx-auto">
            <div className="w-full max-w-4xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
                    <div className="max-w-xl">
                        <p className="text-zinc-400 dark:text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
                            {t.label}
                        </p>
                        <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                            className="text-4xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight leading-none">
                            {t.title}
                        </h2>
                    </div>

                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href={t.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-full hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-colors duration-300 w-fit"
                    >
                        {t.cta} <ArrowUpRight size={14} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                    {t.services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group flex flex-col items-start border-b border-zinc-100 dark:border-zinc-900 pb-8 relative"
                        >
                            <div className="flex items-baseline gap-4 mb-3 w-full">
                                <span className="text-zinc-300 dark:text-zinc-700 font-medium text-sm font-mono">
                                    {s.num}
                                </span>
                                <h3 className="text-zinc-900 dark:text-zinc-100 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {s.title}
                                </h3>
                                <ArrowUpRight
                                    size={16}
                                    className="ml-auto text-zinc-300 dark:text-zinc-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                />
                            </div>

                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-md mb-4">
                                {s.desc}
                            </p>

                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                                {s.tags.map((tag, ti) => (
                                    <span key={ti} className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 tracking-wide">
                                        #{tag.toLowerCase()}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {

    EN: {

        label: "What I do",

        title: "Services.",

        services: [

            {

                num: "01",

                title: "Landing Pages",

                desc: "High-converting, pixel-perfect landing pages built to turn visitors into customers. Fast, SEO-ready, and mobile-first.",

                tags: ["Next.js", "Tailwind", "SEO", "Framer Motion", "HTML", "CSS", "JavaScript"],

            },

            {

                num: "02",

                title: "Web Applications",

                desc: "Full-featured web apps and admin dashboards — clean architecture, scalable code, intuitive UX.",

                tags: ["React", "Next.js", "TypeScript", "API Integration"],

            },

            {

                num: "03",

                title: "UI/UX Design & Integration",

                desc: "From Figma to production — pixel-perfect integration with attention to every detail, animation, and interaction.",

                tags: ["Figma", "Design System", "Responsive", "Animations"],

            },

            {

                num: "04",

                title: "API & Third-party Integration",

                desc: "Connect your product to any service — payment gateways, CRMs, maps, analytics, authentication providers.",

                tags: ["REST API", "Stripe", "Google Maps", "Auth", "Webhooks"],

            },

            {

                num: "05",

                title: "Performance Audit",

                desc: "I diagnose and fix what's slowing down your site — Core Web Vitals, image optimization, Lighthouse 90+.",

                tags: ["Lighthouse", "Core Web Vitals", "WebP", "Caching"],

            },

            {

                num: "06",

                title: "Website Redesign",

                desc: "Transform an outdated interface into a modern, fast, and conversion-focused digital product.",

                tags: ["UX Audit", "Redesign", "Migration", "Performance"],

            },

        ],

        cta: "Start a project",

        wa: "https://wa.me/22901663745865",

    },

    FR: {

        label: "Ce que je fais",

        title: "Services.",

        services: [

            {

                num: "01",

                title: "Landing Pages",

                desc: "Des landing pages pixel-perfect et orientées conversion — rapides, SEO-ready et mobile-first.",

                tags: ["Next.js", "Tailwind", "SEO", "Framer Motion", "HTML", "CSS", "JavaScript"],

            },

            {

                num: "02",

                title: "Applications Web",

                desc: "Apps web complètes et dashboards admin — architecture propre, code scalable, UX intuitive.",

                tags: ["React", "Next.js", "TypeScript", "Intégration API"],

            },

            {

                num: "03",

                title: "Design UI/UX & Intégration",

                desc: "De Figma à la production — intégration pixel-perfect avec attention aux détails, animations et interactions.",

                tags: ["Figma", "Design System", "Responsive", "Animations"],

            },

            {

                num: "04",

                title: "Intégration API & Services Tiers",

                desc: "Connectez votre produit à n'importe quel service — paiement, CRM, maps, analytics, authentification.",

                tags: ["REST API", "Stripe", "Google Maps", "Auth", "Webhooks"],

            },

            {

                num: "05",

                title: "Audit de Performance",

                desc: "Je diagnostique et corrige ce qui ralentit votre site — Core Web Vitals, images, Lighthouse 90+.",

                tags: ["Lighthouse", "Core Web Vitals", "WebP", "Cache"],

            },

            {

                num: "06",

                title: "Refonte de Site",

                desc: "Transformez une interface obsolète en produit digital moderne, rapide et orienté conversion.",

                tags: ["Audit UX", "Refonte", "Migration", "Performance"],

            },

        ],

        cta: "Démarrer un projet",

        wa: "https://wa.me/22901663745865",

    },

};
export default function Services() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="services" className="bg-white py-16 px-6 md:px-10">
            <div className="max-w-[1400px] mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 border-b border-black/[0.05] pb-12">
                    <div className="max-w-2xl">
                        <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                            {t.label}
                        </p>
                        <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                            className="text-6xl md:text-8xl font-bold text-black leading-tight tracking-tighter">
                            {t.title}
                        </h2>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
                        whileTap={{ scale: 0.98 }}
                        href={t.wa} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white bg-black px-8 py-4 rounded-full transition-all w-fit shadow-xl shadow-black/5"
                    >
                        {t.cta} <ArrowUpRight size={14} strokeWidth={3} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.services.map((s, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                            className="relative bg-[#f9f9f9] border border-black/[0.03] p-10 flex flex-col gap-4 group overflow-hidden rounded-3xl hover:shadow-2xl hover:shadow-black/[0.02] transition-all duration-500"
                        >

                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-start justify-between relative z-10">
                                <span className="text-black/[0.05] font-bold text-5xl tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
                                    {s.num}
                                </span>
                                <div className="p-2 rounded-full border border-black/[0.05] group-hover:border-black/10 transition-colors">
                                    <ArrowUpRight size={18} className="text-black/20 group-hover:text-black transition-transform duration-500 group-hover:rotate-45" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 style={{ fontFamily: "'Syne', sans-serif" }}
                                    className="text-black text-2xl font-bold mb-4 tracking-tight">
                                    {s.title}
                                </h3>
                                <p className="text-black/50 text-sm leading-relaxed font-medium">
                                    {s.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-2 relative z-10">
                                {s.tags.map((tag, ti) => (
                                    <span key={ti} className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/40 bg-black/[0.03] border border-black/[0.05] px-3 py-1.5 rounded-lg">
                                        {tag}
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
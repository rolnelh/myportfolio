"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {

    EN: {
        label: "What I do",
        title: "Services that grow your business.",

        services: [
            {
                num: "01",
                title: "Business Websites",
                desc: "Modern websites designed to help your business attract clients, build trust and increase sales.",
                tags: ["Next.js", "React", "SEO", "Responsive"],
            },
            {
                num: "02",
                title: "Landing Pages that Convert",
                desc: "High-performance landing pages focused on turning visitors into paying customers.",
                tags: ["Conversion", "UI/UX", "Tailwind", "Speed"],
            },
            {
                num: "03",
                title: "Web Applications",
                desc: "Custom web apps and dashboards to manage your business and automate processes.",
                tags: ["React", "Next.js", "Laravel", "API"],
            },
            {
                num: "04",
                title: "Website Redesign",
                desc: "Transform your old website into a modern, fast and professional digital product.",
                tags: ["UX", "Redesign", "Performance"],
            },
            {
                num: "05",
                title: "Performance Optimization",
                desc: "I make your website faster, smoother and optimized for Google ranking.",
                tags: ["Lighthouse", "SEO", "Speed"],
            },
            {
                num: "06",
                title: "API & Integrations",
                desc: "Connect your website to payment systems, CRMs, maps and external services.",
                tags: ["Stripe", "Auth", "REST API"],
            },
        ],

        cta: "Start your project",
        wa: "https://wa.me/2290166374586",
    },

    FR: {
        label: "Ce que je fais",
        title: "Des services qui font grandir votre business.",

        services: [
            {
                num: "01",
                title: "Sites Web professionnels",
                desc: "Des sites modernes conçus pour attirer des clients, renforcer votre crédibilité et augmenter vos ventes.",
                tags: ["Next.js", "React", "SEO", "Responsive"],
            },
            {
                num: "02",
                title: "Landing Pages qui convertissent",
                desc: "Des pages optimisées pour transformer vos visiteurs en clients payants.",
                tags: ["Conversion", "UI/UX", "Tailwind", "Performance"],
            },
            {
                num: "03",
                title: "Applications Web",
                desc: "Applications web et dashboards sur mesure pour gérer et automatiser votre activité.",
                tags: ["React", "Next.js", "Laravel", "API"],
            },
            {
                num: "04",
                title: "Refonte de site web",
                desc: "Transformez votre ancien site en une plateforme moderne, rapide et professionnelle.",
                tags: ["UX", "Refonte", "Performance"],
            },
            {
                num: "05",
                title: "Optimisation de performance",
                desc: "J’améliore la vitesse et le référencement de votre site pour plus de visibilité.",
                tags: ["Lighthouse", "SEO", "Speed"],
            },
            {
                num: "06",
                title: "Intégration API",
                desc: "Connexion de votre site à des services externes : paiement, CRM, maps, etc.",
                tags: ["Stripe", "Auth", "REST API"],
            },
        ],

        cta: "Démarrer un projet",
        wa: "https://wa.me/2290166374586",
    }

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
                            className="text-5xl md:text-6xl font-bold text-black leading-tight tracking-tighter">
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
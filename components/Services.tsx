"use client";
import React from "react";
import { ArrowUpRight, Monitor, Smartphone, Layers, Gauge } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        label: "What I offer",
        title1: "My",
        title2: "Services",
        sub: "Clear, results-oriented services",
        cta: "Start a project",
        services: [
            {
                icon: <Monitor size={22} />,
                title: "Landing Page & Website",
                description:
                    "I design and build fast, modern websites centered on user experience — built to engage, convert, and support your business growth.",
                image: "/images/anip_refonte.webp",
                featured: true,
            },
            {
                icon: <Layers size={22} />,
                title: "UI/UX Redesign",
                description:
                    "I audit your existing interface and transform it into a clean, high-performing product your users will love.",
                featured: false,
            },
            {
                icon: <Gauge size={22} />,
                title: "Performance Audit",
                description:
                    "I optimize your app for speed, SEO, and Core Web Vitals — Lighthouse 90+ guaranteed.",
                featured: false,
            },
            {
                icon: <Smartphone size={22} />,
                title: "Web App / Dashboard",
                description:
                    "Custom web applications and admin dashboards — scalable, clean, and maintainable.",
                featured: false,
            },
        ],
    },
    FR: {
        label: "Ce que je propose",
        title1: "Mes",
        title2: "Services",
        sub: "Des services clairs et orientés résultats",
        cta: "Démarrer un projet",
        services: [
            {
                icon: <Monitor size={22} />,
                title: "Landing Page & Site Web",
                description:
                    "Je conçois et développe des sites rapides et modernes centrés utilisateur, pensés pour engager, convertir et soutenir la croissance de votre activité.",
                image: "/images/anip_refonte.webp",
                featured: true,
            },
            {
                icon: <Layers size={22} />,
                title: "Refonte UI/UX",
                description:
                    "J'audite votre interface existante et la transforme en un produit propre et performant que vos utilisateurs adoreront.",
                featured: false,
            },
            {
                icon: <Gauge size={22} />,
                title: "Audit de Performance",
                description:
                    "J'optimise votre app pour la vitesse, le SEO et les Core Web Vitals — Lighthouse 90+ garanti.",
                featured: false,
            },
            {
                icon: <Smartphone size={22} />,
                title: "Application Web & Dashboard",
                description:
                    "Applications web sur mesure et dashboards admin — scalables, propres et maintenables.",
                featured: false,
            },
        ],
    },
};

const Services = () => {
    const { language } = useLanguage();
    const t = content[language];
    const featured = t.services[0];
    const others = t.services.slice(1);

    return (
        <section id="services" className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                            {t.label}
                        </p>
                        <h2
                            style={{ fontFamily: "'Syne', sans-serif" }}
                            className="text-5xl md:text-7xl font-bold leading-none tracking-tight"
                        >
                            <span className="text-gray-950">{t.title1} </span>
                            <span className="text-gray-300">{t.title2}</span>
                        </h2>
                        <p className="text-gray-400 text-base mt-4">{t.sub}</p>
                    </div>

                    <a
                        href="#contact"
                        className="flex items-center gap-2 bg-gray-950 text-white font-bold px-7 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-95 whitespace-nowrap w-fit"
                    >
                        {t.cta}
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div className="bg-gray-950 rounded-3xl overflow-hidden flex flex-col group cursor-pointer hover:ring-1 hover:ring-white/10 transition-all duration-300">

                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                        </div>

                        <div className="p-8 flex flex-col gap-4 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                    {featured.icon}
                                </div>
                                <h3
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                    className="text-white text-2xl font-bold"
                                >
                                    {featured.title}
                                </h3>
                            </div>
                            <p className="text-white/50 leading-relaxed text-base">
                                {featured.description}
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-white/30 text-sm font-medium group-hover:text-white/60 transition-colors">
                                <span>En savoir plus</span>
                                <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {others.map((service, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 border border-gray-100 rounded-3xl p-7 flex flex-col gap-3 group cursor-pointer hover:bg-white hover:border-gray-950 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                        className="text-gray-950 text-xl font-bold"
                                    >
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
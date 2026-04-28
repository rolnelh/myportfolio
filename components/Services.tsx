"use client";
import React from "react";
import { ArrowUpRight, Layout, Smartphone, Layers, Gauge } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        label: "Services & Expertise",
        heading: "High-performance digital solutions.",
        cta: "Start a project",
        services: [
            {
                title: "Web Development",
                category: "Next.js 15 / SSR Architecture",
                description:
                    "Scalable, SEO-optimized platforms with a focus on speed, reliability, and clean code.",
                icon: <Layout className="text-black" size={24} />,
            },
            {
                title: "Mobile Solutions",
                category: "React Native / Expo",
                description:
                    "Cross-platform apps delivering native performance on iOS and Android.",
                icon: <Smartphone className="text-black" size={24} />,
            },
            {
                title: "UI/UX Integration",
                category: "Tailwind CSS / Design Systems",
                description:
                    "Translating Figma designs into pixel-perfect, highly interactive interfaces.",
                icon: <Layers className="text-black" size={24} />,
            },
            {
                title: "Performance Audits",
                category: "Core Web Vitals / Speed",
                description:
                    "Optimizing loading times and accessibility to achieve 90+ Lighthouse scores.",
                icon: <Gauge className="text-black" size={24} />,
            },
        ],
    },
    FR: {
        label: "Services & Expertise",
        heading: "Des solutions digitales hautes performances.",
        cta: "Démarrer un projet",
        services: [
            {
                title: "Développement Web",
                category: "Next.js 15 / Architecture SSR",
                description:
                    "Plateformes scalables, optimisées SEO, avec un focus sur la vitesse et la fiabilité.",
                icon: <Layout className="text-black" size={24} />,
            },
            {
                title: "Solutions Mobile",
                category: "React Native / Expo",
                description:
                    "Applications cross-platform offrant des performances natives sur iOS et Android.",
                icon: <Smartphone className="text-black" size={24} />,
            },
            {
                title: "Intégration UI/UX",
                category: "Tailwind CSS / Design Systems",
                description:
                    "Transformation de maquettes Figma en interfaces interactives pixel-perfect.",
                icon: <Layers className="text-black" size={24} />,
            },
            {
                title: "Audits Performance",
                category: "Core Web Vitals / Vitesse",
                description:
                    "Optimisation des temps de chargement et accessibilité pour atteindre 90+ Lighthouse.",
                icon: <Gauge className="text-black" size={24} />,
            },
        ],
    },
};

const Services = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="services" className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
                            {t.label}
                        </span>
                    </div>
                    <h2
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-4xl md:text-6xl font-bold text-black leading-tight"
                    >
                        {t.heading}
                    </h2>
                </div>
                <a
                    href="#contact"
                    className="group flex items-center gap-3 bg-black text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
                >
                    {t.cta} <ArrowUpRight size={20} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.services.map((service, index) => (
                    <div
                        key={index}
                        className="group p-8 bg-gray-50 border border-gray-100 rounded-[32px] hover:bg-white hover:border-black transition-all duration-500 flex flex-col h-full"
                    >
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                            {service.icon}
                        </div>
                        <div className="mt-auto">
                            <p className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                {service.category}
                            </p>
                            <h3
                                style={{ fontFamily: "'Syne', sans-serif" }}
                                className="text-xl font-bold text-gray-900 mb-3"
                            >
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
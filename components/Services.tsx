"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Plus,
    ArrowUpRight,
    Zap,
    Target,
    ShieldCheck,
    Layout,
    Smartphone,
    Layers,
    Gauge
} from "lucide-react";

const services = [
    {
        title: "Développement Web",
        category: "Next.js 15 / Architecture SSR",
        description: "Conception de plateformes robustes et scalables. Optimisation SEO pour une visibilité maximale.",
        icon: <Layout className="text-blue-600" size={25} />,
    },
    {
        title: "Solutions Mobiles",
        category: "React Native / Expo",
        description: "Applications iOS et Android fluides avec une base de code unique, réduisant vos coûts de 40%.",
        icon: <Smartphone className="text-purple-600" size={25} />,
    },
    {
        title: "Intégration UI/UX",
        category: "Tailwind CSS / Framer Motion",
        description: "Transformation de maquettes en interfaces interactives, animées et parfaitement responsives.",
        icon: <Layers className="text-pink-600" size={25} />,
    },
    {
        title: "Optimisation Performance",
        category: "Core Web Vitals",
        description: "Audit et accélération pour atteindre l'excellence (99/100). Idéal pour booster vos conversions.",
        icon: <Gauge className="text-green-600" size={25} />,
    },
];

const Services = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="lg:sticky lg:top-32 h-fit">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                    <span className="font-inter text-xs font-bold uppercase tracking-widest text-gray-500">
                        Mes Services & Expertises
                    </span>
                    <span className="ml-auto font-inter text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                        99/100 Performance Score
                    </span>
                </div>

                <h2 className="font-syne text-4xl md:text-5xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
                    Des Solutions qui <span className="text-gray-400">propulsent</span> votre Business.
                </h2>

                <p className="font-inter text-lg text-gray-600 max-w-md leading-relaxed mb-10">
                    Je ne me contente pas de coder. Je bâtis des outils numériques optimisés pour la croissance, la vitesse et l'expérience utilisateur.
                </p>

                <div className="space-y-5 mb-10">
                    {[
                        { text: "Boost de Conversion & Rétention", icon: <Target size={14} className="text-blue-500" /> },
                        { text: "Vitesse de chargement ultra-rapide", icon: <Zap size={14} className="text-yellow-500" /> },
                        { text: "Code scalable et maintenable", icon: <ShieldCheck size={14} className="text-green-500" /> }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 font-inter font-semibold text-[15px] text-gray-800">
                            <div className="w-6 h-6 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                                {item.icon}
                            </div>
                            {item.text}
                        </div>
                    ))}
                </div>

                <button className="group flex items-center gap-3 bg-[#1A1A1A] text-white rounded-2xl px-10 py-5 font-inter font-bold hover:bg-black transition-all shadow-xl shadow-gray-200">
                    Démarrer mon projet <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col sm:flex-row items-start sm:items-center bg-[#F9F9F9] rounded-3xl p-6 border border-transparent hover:border-gray-200 transition-all"
                    >

                        <div className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 sm:mb-0 group-hover:scale-105 group-hover:shadow-md transition-all duration-500">
                            {service.icon}
                        </div>

                        <div className="flex-1 sm:ml-6">
                            <h3 className="font-syne text-lg md:text-xl font-bold text-gray-900 mb-1">
                                {service.title}
                            </h3>
                            <p className="font-inter text-[11px] font-bold text-gray-400 tracking-widest mb-2">
                                {service.category}
                            </p>
                            <p className="font-inter text-sm text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Décoration Plus (visible sur Desktop) */}
                        <div className="hidden lg:flex ml-4">
                            <Plus size={20} className="text-gray-300 group-hover:text-black group-hover:rotate-90 transition-all duration-300" />
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Services;
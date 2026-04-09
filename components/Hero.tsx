"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github, Instagram, MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-start px-6 pt-18 pb-20 max-w-7xl mx-auto overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full mb-6"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-inter text-xs font-bold uppercase tracking-wider text-green-700">
                    Disponible pour de nouveaux projets
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    fontFamily: "'Syne', sans-serif",
                }}
                className="text-4xl md:text-8xl font-600 tracking-tighter text-black leading-[0.90] mb-8 max-w-7xl mt-12 md:mt-0"
            >
                I build high-performance interfaces that turn visitors into customers.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl font-medium text-gray-600 mb-12 max-w-2xl leading-relaxed tracking-tight"
            >
                Bridging the gap between <span className="text-black italic">complex design</span> and seamless code.
                I specialize in building high-end Front-End experiences using <span className="text-black font-semibold">Next.js</span> and <span className="text-black font-semibold">Tailwind CSS</span>.
            </motion.p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">

                <div className="flex flex-wrap gap-4">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-3 bg-black text-white rounded-full px-8 py-4 font-inter font-bold transition-all shadow-lg shadow-black/10 cursor-pointer"
                    >
                        Démarrer un projet
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ backgroundColor: "#f3f4f6" }}
                        className="font-inter font-bold text-black border-2 border-black/5 rounded-full px-8 py-4 transition-all cursor-pointer"
                    >
                        Voir mes réalisations
                    </motion.button>
                </div>

                <div className="hidden md:block w-px h-12 bg-gray-200" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3"
                >
                    {[
                        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250", label: "LinkedIn" },
                        { icon: <Github size={20} />, href: "https://github.com/rolnelh", label: "GitHub" },
                        { icon: <MessageCircle size={20} />, href: "https://wa.me/+2290166374586", label: "WhatsApp" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-400 hover:text-black hover:border-black hover:bg-white transition-all duration-300"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>
            </div>

            <div className="absolute top-1/2 right-0 -z-10 blur-[120px] opacity-20 pointer-events-none">
                <div className="w-[300px] h-[300px] bg-blue-400 rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
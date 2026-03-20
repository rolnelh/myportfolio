"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

const Hero = () => {

    const expertise = [
        "High-Performance Web Apps",
        "Native Mobile Experience",
        "Scalable Architecture",
    ];

    return (
        <section className="flex flex-col items-start px-6 pt-24 pb-20 max-w-7xl mx-auto">

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-6 mb-8"
            >
                {expertise.map((text, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-black" />
                        <span className="font-inter text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-600">
                            {text}
                        </span>
                    </div>
                ))}
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    fontFamily: "'Syne', sans-serif",
                }}
                className="text-5xl md:text-8xl font-600 tracking-tighter text-black leading-[0.95] mb-8 max-w-5xl"
            >
                Turning complex ideas into digital products
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                }}
                className="text-lg md:text-2xl font-medium text-gray-900 mb-12 max-w-2xl leading-relaxed"
            >
                I build intuitive and high-performance web and mobile apps — <span className="font-bold text-black">bridging the gap between clean code and premium UI.</span>
            </motion.p>


            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1 }} 
                className="flex items-center gap-4 mb-12"
            >
                {[
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250", label: "LinkedIn" },
                    { icon: <Github size={20} />, href: "https://github.com/rolnelh", label: "GitHub" },
                    { icon: <Instagram size={20} />, href: "https://instagram.com/ton-insta", label: "Instagram" },
                    { icon: <MessageCircle size={20} />, href: "https://wa.me/+22966374586", label: "WhatsApp" },
                ].map((social, i) => (
                    <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-12 h-12 rounded-full bg-black border border-black transition-all duration-300 hover:bg-white hover:shadow-lg"
                        whileHover={{ y: -3 }}
                        aria-label={social.label}
                    >

                        <div className="text-white group-hover:text-black transition-colors duration-300">
                            {social.icon}
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            <div className="flex flex-wrap gap-4">
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="group flex items-center gap-3 cursor-pointer bg-black text-white rounded-full px-5 py-3 transition-all duration-300"
                >
                    <span className="font-syne font-normal text-sm">Start a Project</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "#f1f1f1" }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="font-syne font-normal cursor-pointer text-sm border-2 border-black rounded-full px-5 py-3 transition-all"
                >
                    View my work
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
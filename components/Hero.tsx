"use client";
import React from "react";
import { ArrowRight, Linkedin, Github, MessageCircle } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-start px-6 pt-14 pb-20 max-w-7xl mx-auto overflow-hidden">

            <div className="flex items-center gap-2 bg-green-50/50 border border-green-100/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-2 mt-3 w-fit">
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-green-500"></span>
                </span>
                <span className="font-inter text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-green-700 whitespace-nowrap">
                    Available for hire
                </span>
            </div>

            <h1
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-4xl md:text-7xl font-normal tracking-tight md:tracking-tighter text-black leading-tight md:leading-[0.90] mb-10 md:mb-8 max-w-7xl mt-12 md:mt-6"
            >
                I design and build digital platforms that simplify complex experiences.
            </h1>

            <p className="text-lg md:text-xl font-medium text-gray-700 mb-12 max-w-2xl leading-relaxed tracking-tight">
                Product Designer & Digital Product Builder focused on scalable platforms, dashboards, and modern digital services — combining UX thinking, interface design, and front-end expertise.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">


                <div className="flex flex-wrap gap-4">
                    <button className="group flex items-center gap-3 bg-black text-white rounded-full px-8 py-4 font-inter font-bold transition-transform active:scale-95 shadow-lg shadow-black/10 cursor-pointer hover:scale-[1.02]">
                        Start a project
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="font-inter font-bold text-black border-2 border-black/5 rounded-full px-8 py-4 transition-colors cursor-pointer hover:bg-gray-100">
                        View my work
                    </button>
                </div>

                <div className="hidden md:block w-px h-12 bg-gray-200" />

                <div className="flex flex-wrap items-center gap-3">
                    {[
                        { icon: <Linkedin size={18} />, name: "LinkedIn", href: "https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250" },
                        { icon: <Github size={18} />, name: "GitHub", href: "https://github.com/rolnelh" },
                        { icon: <MessageCircle size={18} />, name: "WhatsApp", href: "https://wa.me/+2290166374586" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-500 hover:text-black hover:border-black hover:bg-white transition-all duration-300 group"
                        >
                            <span className="group-hover:scale-110 transition-transform duration-300">
                                {social.icon}
                            </span>
                            <span className="font-inter font-semibold text-sm tracking-tight">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 right-0 -z-10 blur-[120px] opacity-20 pointer-events-none">
                <div className="w-[300px] h-[300px] bg-blue-400 rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
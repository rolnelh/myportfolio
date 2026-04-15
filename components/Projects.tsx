"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";


const projects = [
    {
        title: "Mefolio Platform",
        description: "An innovative portfolio platform for creative professionals to showcase their work with a minimalist aesthetic and a comprehensive management dashboard.",
        image: "/images/mefolio-deskop.webp",
        url: "https://github.com/rolnelh/mefolio.git",
        technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    },
    {
        title: "Dashboard",
        description: "Intuitive admin interface designed for performance tracking, product management, and real-time sales analytics.",
        image: "/images/dash.webp",
        url: "https://dashboard-nextjs-pi-ten.vercel.app/dashboard",
        technologies: ["Next.js 15", "Lucide React", "Shadcn", "Tailwind CSS"],
    },
    {
        title: "L'Expo Plateforme",
        description: "A digital showcase for African artisans and creators, enabling professional catalog creation in minutes.",
        image: "/images/lexpo-deskop.png",
        url: "https://lexpo-gallery.vercel.app",
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    },
    {
        title: "Gozem Optimizer",
        description: "Strategic UI redesign to optimize the booking and tracking experience for Africa's leading super-app.",
        image: "/images/goze.png",
        url: "https://rolnelh.github.io/gozem-refonte/",
        technologies: ["UI Design", "UX Research", "Tailwind CSS"],
    },
    {
        title: "Mon Portfolio",
        description: "Design and development of my digital showcase: a minimalist, high-speed experience highlighting my projects, technical expertise (Clean Code, Premium UI), and product-driven mindset.",
        image: "/images/myportfolio.webp",
        url: "https://myportfolio-eta-eosin.vercel.app/",
        technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "UI Design"],
    },
    {
        title: "ANIP Bénin – E-services Redesign",
        description: "A complete UI/UX overhaul of the National Identification Agency platform. Focused on simplifying citizen administrative journeys through a high-performance dashboard, intuitive service access, and a mobile-first approach to identification management.",
        image: "/images/anip_refonte.webp", 
        url: "https://anip-eservices-redesign-koy3.vercel.app/dashboard",
        technologies: ["Next.js 16", "TypeScript", "Tailwind CSS","E-services Redesign", "Dashboard Architecture"],
    },
];

const Projects = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col mb-12">
                <h2 className="font-syne text-5xl md:text-7xl font-bold tracking-tight text-black mb-2">
                    Explore Our Projects
                </h2>
                <div className="flex items-center gap-3">
                    <span className="font-inter mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                        OUR WORK
                    </span>
                    <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-[2px] h-3 bg-gray-300 animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col cursor-pointer"
                        onClick={() => window.open(project.url, "_blank")}
                    >

                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 mb-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />


                            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="font-syne text-2xl font-bold text-black mt-1 transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="font-inter text-gray-500 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

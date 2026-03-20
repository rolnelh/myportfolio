"use client";
import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Web Development",
        category: "Next.js / React / Laravel",
        image: "/images/web.png",
    },
    {
        title: "Mobile Solutions",
        category: "React Native / Expo",
        image: "/images/phone.png",
    },
    {
        title: "UI/UX Design",
        category: "Figma / Modern Interfaces",
        image: "/images/design.png",
    },
    {
        title: "API & Backend",
        category: "Scalable Architectures",
        image: "/images/backend.png",
    },
];

const Services = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="lg:sticky lg:top-32 h-fit">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-2 h-2 rounded-full bg-black" />
                    <span className="font-inter text-xs font-bold uppercase tracking-widest text-gray-500">
                        Our Services
                    </span>
                    <span className="ml-auto font-inter text-xs text-gray-400 italic">
                        +15 projects completed
                    </span>
                </div>

                <h2 className="font-syne text-6xl md:text-7xl font-bold tracking-tight text-black mb-8">
                    Creative Solutions
                </h2>

                <p className="font-inter text-lg text-gray-500 max-w-md leading-relaxed mb-10">
                    Elevate your business with tailored digital strategies and impactful, high-performance applications.
                </p>

                <div className="space-y-4 mb-10">
                    {["Boost Engagement & Results", "Built for Tomorrow's Growth"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 font-inter font-bold text-sm">
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                <Plus size={12} />
                            </div>
                            {item}
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 bg-[#1A1A1A] text-white rounded-xl px-8 py-4 font-inter font-bold hover:bg-black transition-all">
                    Get Started <ArrowUpRight size={18} />
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex items-center bg-[#F9F9F9] rounded-2xl p-4 border border-transparent hover:border-gray-200 transition-all cursor-pointer"
                    >

                        <div className="w-24 h-24 md:w-32 md:h-20 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <div className="w-full h-full bg-gray-300" />
                            <img src={service.image} className="object-cover w-full h-full" />
                        </div>

                        <div className="flex-1 ml-6">
                            <h3 className="font-syne text-xl md:text-2xl font-bold text-black">
                                {service.title}
                            </h3>
                            <p className="font-inter text-sm text-gray-400 uppercase tracking-wide">
                                {service.category}
                            </p>
                        </div>

                        <div className="hidden md:flex gap-1 pr-4">
                            {[1, 2, 3, 4].map((dot) => (
                                <div
                                    key={dot}
                                    className={`w-1.5 h-1.5 rounded-full ${dot <= (index + 1) ? 'bg-black' : 'bg-gray-200'}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Services;
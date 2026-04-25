import React from "react";
import { ArrowUpRight, Layout, Smartphone, Layers, Gauge } from "lucide-react";

const services = [
    {
        title: "Web Development",
        category: "Next.js 15 / SSR Architecture",
        description: "Building scalable, SEO-optimized platforms with a focus on speed and reliability.",
        icon: <Layout className="text-black" size={24} />,
    },
    {
        title: "Mobile Solutions",
        category: "React Native / Expo",
        description: "Crafting seamless cross-platform apps that deliver native performance on iOS and Android.",
        icon: <Smartphone className="text-black" size={24} />,
    },
    {
        title: "UI/UX Integration",
        category: "Tailwind CSS / Design Systems",
        description: "Translating complex Figma designs into pixel-perfect, highly interactive interfaces.",
        icon: <Layers className="text-black" size={24} />,
    },
    {
        title: "Performance Audits",
        category: "Core Web Vitals / Speed",
        description: "Optimizing loading times and accessibility to achieve 90+ Lighthouse scores and boost conversions.",
        icon: <Gauge className="text-black" size={24} />,
    },
];

const Services = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="font-inter text-xs font-bold uppercase tracking-widest text-gray-400">
                            Services & Expertise
                        </span>
                    </div>
                    <h2 className="font-syne text-4xl md:text-6xl font-bold text-black leading-tight">
                        High-performance <br /> digital solutions.
                    </h2>
                </div>
                <button className="group flex items-center gap-3 bg-black text-white rounded-full px-8 py-4 font-inter font-bold hover:scale-105 transition-all cursor-pointer">
                    Start a project <ArrowUpRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group p-8 bg-gray-50 border border-gray-100 rounded-[32px] hover:bg-white hover:border-black transition-all duration-500 flex flex-col h-full"
                    >
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-500">
                            {service.icon}
                        </div>

                        <div className="mt-auto">
                            <p className="font-inter text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                {service.category}
                            </p>
                            <h3 className="font-syne text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="font-inter text-sm text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
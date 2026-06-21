import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
    { num: "01", title: "Business Websites", desc: "Modern websites built to attract clients, secure trust, and drive revenue.", tags: ["Next.js", "SEO", "Responsive"] },
    { num: "02", title: "Conversion Landing Pages", desc: "High-performance landing pages engineered to transform traffic into sales.", tags: ["UI/UX", "Tailwind", "Speed"] },
    { num: "03", title: "Web Applications", desc: "Custom software, SaaS platforms, and internal dashboards tailored to your processes.", tags: ["React", "Laravel", "APIs"] },
    { num: "04", title: "Premium Redesigns", desc: "Turning outdated websites into fast, modern, and beautiful digital products.", tags: ["UX Refonte", "Performance"] },
    { num: "05", title: "Speed Optimization", desc: "Fine-tuning architecture to unlock peak Lighthouse scores and clean Google positioning.", tags: ["Lighthouse", "Core Vitals"] },
    { num: "06", title: "Integrations & APIs", desc: "Connecting ecosystems with secure payment bridges, automation, and CRMs.", tags: ["Stripe", "Auth", "REST"] },
];

export default function Services() {
    return (
        <section className="bg-neutral-950 py-24 px-6 text-neutral-200">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Services</h2>
                        <p className="text-neutral-400 text-lg">Comprehensive digital solutions to scale your business.</p>
                    </div>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center gap-2">
                        Contact Now <ArrowRight size={18} />
                    </button>
                </div>

                {/* Grid Layout (3 colonnes pour 6 items = parfait) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-neutral-600 font-mono text-3xl font-bold">{service.num}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            {/* Tags intégrés à chaque carte */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 text-[10px] uppercase tracking-wider font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
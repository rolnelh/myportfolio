import React from 'react';
import Image from 'next/image';
import { ArrowRight, Monitor, Code, Zap, Layers, Palette, Search } from 'lucide-react';

const myServices = [
    { icon: <Monitor className="w-6 h-6" />, title: "Business Websites", desc: "Modern websites built to attract clients, secure trust, and drive revenue." },
    { icon: <Code className="w-6 h-6" />, title: "Web Applications", desc: "Custom software, SaaS platforms, and internal dashboards tailored to your processes." },
    { icon: <Zap className="w-6 h-6" />, title: "Speed Optimization", desc: "Fine-tuning architecture to unlock peak Lighthouse scores and clean Google positioning." },
    { icon: <Layers className="w-6 h-6" />, title: "Integrations & APIs", desc: "Connecting ecosystems with secure payment bridges, automation, and CRMs." },
];

const tags = ["Next.js", "SEO", "Responsive", "UI/UX", "Tailwind", "Speed", "React", "Laravel", "APIs", "Lighthouse", "Stripe", "Auth"];

export default function ServicesSection() {
    return (
        <section className="bg-neutral-950 py-24 px-6 text-neutral-200">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
                    <div>
                        <span className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4 block">Design services</span>
                        <h2 className="text-5xl font-bold text-white mb-6">Services</h2>
                        <p className="text-neutral-400 text-lg mb-8 max-w-lg">
                            Helping businesses standout with brand identity packaging that captivates and converts effectively.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all">Book a Free Call</button>
                            <button className="border border-neutral-700 px-6 py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">See Projects</button>
                        </div>
                    </div>

                    <div className="relative h-80 bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden">
                        <Image
                            src="/images/pp.webp"
                            alt="Service Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {myServices.map((service, idx) => (
                        <div key={idx} className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-all">
                            <div className="text-white mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tag Cloud */}
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm hover:border-neutral-600 transition-colors cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
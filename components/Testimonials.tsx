"use client";
import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        label: "Client Testimonials",
        heading: "What clients say.",
        note: "Real feedback from real projects.",
        testimonials: [
            {
                name: "Tine KEITA",
                role: "Founder, KILALY",
                text: "Thank you for the excellent work you did in analyzing and proposing the redesign of my website. I will keep your contact information safe and will not hesitate to request or recommend your services if needed.",
                country: "FR France",
            },
            {
                name: "Anziz Adéyèmi ADEHAN",
                role: "Expert eGov & Project management",
                text: "The work is clean, the PageSpeed ​​scores speak for themselves, and the choice of the bottom nav for mobile shows that you're thinking about the user before thinking about the technology. It's the right approach.",
                country: "BJ Bénin",
            },
            // {
            //     name: "Adrien B.",
            //     role: "CEO, Digital Agency",
            //     text: "The UI/UX work on our dashboard transformed how our team reads data. Clean, fast, and built to scale. Dieudonné thinks like a product designer, not just a developer.",
            //     country: "🇧🇪 Belgium",
            // },
        ],
    },
    FR: {
        label: "Témoignages clients",
        heading: "Ce que disent les clients.",
        note: "Retours réels de projets réels.",
        testimonials: [
            {
                name: "Kofi A.",
                role: "Fondateur, Mefolio",
                text: "Dieudonné a livré une plateforme prête pour la production en quelques semaines. La qualité du design et la rapidité d'exécution étaient remarquables. Je le recommande sans hésitation.",
                country: "🇬🇭 Ghana",
            },
            {
                name: "Marie L.",
                role: "Product Manager",
                text: "Travailler à distance avec Dieudonné était fluide. Communication claire, zéro retard, et le résultat final a dépassé nos attentes. Exactement ce dont une startup a besoin.",
                country: "🇫🇷 France",
            },
            // {
            //     name: "Adrien B.",
            //     role: "CEO, Agence Digitale",
            //     text: "Le travail UI/UX sur notre dashboard a transformé la façon dont notre équipe lit les données. Propre, rapide et conçu pour scaler. Dieudonné pense comme un product designer.",
            //     country: "🇧🇪 Belgique",
            // },
        ],
    },
};

const Testimonials = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="testimonials" className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
                    {t.label}
                </span>
            </div>
            <h2
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-4xl md:text-6xl font-bold text-black mb-3"
            >
                {t.heading}
            </h2>
            <p className="text-gray-400 text-sm mb-14">{t.note}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.testimonials.map((t_, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-5 p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:border-black hover:bg-white transition-all duration-300"
                    >
                        {/* Stars */}
                        <div className="flex gap-1">
                            {Array(5)
                                .fill(0)
                                .map((_, j) => (
                                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                        </div>

                        {/* Quote */}
                        <p className="text-gray-700 leading-relaxed text-base">"{t_.text}"</p>

                        {/* Author */}
                        <div className="mt-auto flex items-center justify-between">
                            <div>
                                <p
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                    className="font-bold text-black text-sm"
                                >
                                    {t_.name}
                                </p>
                                <p className="text-gray-400 text-xs">{t_.role}</p>
                            </div>
                            <span className="text-xs">{t_.country}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
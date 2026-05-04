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
            {
                name: "Fiacre K.",
                role: "web developer",
                text: "Beyond his technical skills, Dieudonné possesses a rare product vision. His code is clean and structured, and he knows how to transform complex UX challenges into seamless interfaces. A valuable collaborator.",
                country: "BJ Bénin",
            },
        ],
    },
    FR: {
        label: "Témoignages clients",
        heading: "Ce que disent les clients.",
        note: "Retours réels de projets réels.",
        testimonials: [
            {
                name: "Tine KEITA",
                role: "Fondatrice, KILALY",
                text: "Merci pour l'excellent travail d'analyse et de proposition de refonte de mon site web. Je garde précieusement votre contact et n'hésiterai pas à solliciter ou recommander vos services au besoin.",
                country: "🇫🇷 France",
            },
            {
                name: "Fiacre K.",
                role: "Développeur web",
                text: "Au-delà de ses compétences techniques, Dieudonné possède une vision produit rare. Son code est propre, structuré et il sait transformer des défis UX complexes en interfaces fluides. Un collaborateur précieux.",
                country: "BJ Bénin",
            },

            {
                name: "Anziz Adéyèmi ADEHAN",
                role: "Expert eGov & Project Management",
                text: "Le travail est propre, les scores PageSpeed parlent d'eux-mêmes, et le choix de la barre de navigation basse pour mobile prouve que vous pensez à l'utilisateur avant de penser à la technologie. C'est exactement la bonne approche.",
                country: "🇧🇯 Bénin",
            },
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

                        <p className="text-gray-700 leading-relaxed text-base">"{t_.text}"</p>

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
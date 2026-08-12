"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
    EN: {
        label: "Client Testimonials",
        heading: "Trusted by visionaries.",
        testimonials: [
            {
                name: "Tine KEITA",
                role: "Founder, KILALY",
                text: "Thank you for the excellent work you did in analyzing and proposing the redesign of my website. I will keep your contact information safe and will not hesitate to request or recommend your services.",
                country: "🇫🇷 France",
            },
            {
                name: "Anziz Adéyèmi ADEHAN",
                role: "eGov Expert & Project Manager",
                text: "The work is clean, the PageSpeed scores speak for themselves, and the choice of a bottom nav for mobile shows you think about the user before the technology. It's exactly the right approach.",
                country: "🇧🇯 Benin",
            },
            {
                name: "Fiacre K.",
                role: "Web Developer",
                text: "Beyond his technical skills, Dieudonné possesses a rare product vision. His code is structured, clean, and he flawlessly transforms complex UX challenges into seamless interfaces. A valuable collaborator.",
                country: "🇧🇯 Benin",
            },
        ],
    },
    FR: {
        label: "Témoignages",
        heading: "Ils me font confiance.",
        testimonials: [
            {
                name: "Tine KEITA",
                role: "Fondatrice, KILALY",
                text: "Merci pour l'excellent travail d'analyse et de proposition de refonte de mon site web. Je garde précieusement votre contact et n'hésiterai pas à solliciter ou recommander vos services au besoin.",
                country: "🇫🇷 France",
            },
            {
                name: "Anziz Adéyèmi ADEHAN",
                role: "Expert eGov & Project Management",
                text: "Le travail est propre, les scores PageSpeed parlent d'eux-mêmes, et le choix de la barre de navigation basse pour mobile prouve que vous pensez à l'utilisateur avant de penser à la technologie. C'est la bonne approche.",
                country: "🇧🇯 Bénin",
            },
            {
                name: "Fiacre K.",
                role: "Développeur Web",
                text: "Au-delà de ses compétences techniques, Dieudonné possède une vision produit rare. Son code est propre, structuré et il sait transformer des défis UX complexes en interfaces fluides. Un collaborateur précieux.",
                country: "🇧🇯 Bénin",
            },
        ],
    },
};

const Testimonials = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="testimonials" className="bg-white py-28 px-6 md:px-12 text-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Header de section */}
                <div className="mb-20 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                        <Sparkles size={14} className="text-[#ff2a4d]" /> {t.label}
                    </div>
                    <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        {t.heading}
                    </h2>
                    <p className="text-slate-600 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                        {language === "EN"
                            ? "Words from people who've worked with me and experienced my process and results firsthand"
                            : "Des retours de personnes ayant travaillé avec moi et expérimenté mon processus et mes résultats"}
                    </p>
                </div>

                {/* Grille des témoignages */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.testimonials.map((t_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-slate-50/80 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 rounded-full bg-[#ff2a4d]/10 text-[#ff2a4d] flex items-center justify-center font-bold text-xs border border-[#ff2a4d]/20">
                                            {t_.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="text-xs font-medium text-slate-500 px-2.5 py-1 rounded-full bg-slate-200/60">
                                            {t_.country}
                                        </span>
                                    </div>
                                    <Quote className="text-slate-300 group-hover:text-[#ff2a4d]/40 transition-colors" size={28} />
                                </div>

                                <p className="text-slate-700 leading-relaxed text-sm mb-6 font-normal">
                                    “{t_.text}”
                                </p>
                            </div>

                            <div className="border-t border-slate-200/60 pt-4">
                                <h4 className="font-bold text-slate-900 text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                                    {t_.name}
                                </h4>
                                <p className="text-slate-500 text-[11px] uppercase tracking-wider mt-0.5 font-medium">
                                    {t_.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
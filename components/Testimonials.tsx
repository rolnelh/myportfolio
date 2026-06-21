"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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
        <section id="testimonials" className="bg-[#09090B] py-28 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        {t.label}
                    </p>
                    <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {t.heading}
                    </h2>
                    <p className="text-zinc-400 mt-4 max-w-lg mx-auto text-sm">
                        {language === "EN"
                            ? "Words from people who've worked with me and experienced my process and results firsthand"
                            : "Des retours de personnes ayant travaillé avec moi et expérimenté mon processus et mes résultats"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.testimonials.map((t_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-[#111] border border-zinc-800 p-8 rounded-2xl flex flex-col hover:border-zinc-700 transition-colors duration-300 group"
                        >
                            {/* Icône de citation en haut à droite comme dans image_085222.png */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-xs">
                                    {t_.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <Quote className="text-zinc-800 group-hover:text-zinc-700 transition-colors" size={32} />
                            </div>

                            <div className="flex-grow">
                                <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                                    “{t_.text}”
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-white text-sm">
                                    {t_.name}
                                </h4>
                                <p className="text-zinc-500 text-[11px] uppercase tracking-wider mt-0.5">
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


"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // Import optionnel pour un petit icône discret
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
        <section id="testimonials" className="bg-white py-16 px-6 md:px-10">
            <div className="max-w-[1400px] mx-auto">

                <div className="flex flex-col mb-20">
                    {/* <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span className="text-black/30 text-[10px] font-bold uppercase tracking-[0.3em]">
                            {t.label}
                        </span>
                    </motion.div> */}

                    <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-4xl md:text-5xl font-bold text-black leading-[0.9] tracking-tighter">
                        {t.heading.split('.')[0]}<span className="text-black/5 italic font-light">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.testimonials.map((t_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative flex flex-col justify-between p-10 bg-[#f9f9f9] border border-black/[0.03] rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-black/[0.02] transition-all duration-500"
                        >

                            <Quote className="absolute top-10 right-10 text-black/[0.02] group-hover:text-black/[0.05] transition-colors" size={60} />

                            <div className="relative z-10">
                                <p className="text-black/70 leading-relaxed text-md font-medium mb-6">
                                    "{t_.text}"
                                </p>
                            </div>

                            <div className="relative z-10 flex items-end justify-between border-t border-black/[0.05] pt-2">
                                <div>
                                    <p style={{ fontFamily: "'Syne', sans-serif" }}
                                        className="font-bold text-black text-lg tracking-tight">
                                        {t_.name}
                                    </p>
                                    <p className="text-black/30 text-xs font-semibold uppercase tracking-wider mt-1">
                                        {t_.role}
                                    </p>
                                </div>
                                <span className="text-xl grayscale group-hover:grayscale-0 transition-all">
                                    {t_.country.split(' ')[0]}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


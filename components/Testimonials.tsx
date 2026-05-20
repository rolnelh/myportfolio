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
        <section id="testimonials" className="bg-white dark:bg-[#09090B] py-28 px-6 md:px-12 border-t border-slate-100 dark:border-zinc-900">
            <div className="max-w-6xl mx-auto">

                <div className="mb-24">
                    <p className="text-zinc-400 dark:text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
                        {t.label}
                    </p>
                    <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-none">
                        {t.heading}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {t.testimonials.map((t_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group flex flex-col justify-between border-t border-zinc-100 dark:border-zinc-900 pt-8 relative"
                        >
                            <Quote className="text-zinc-100 dark:text-zinc-900 absolute right-0 top-6 transition-colors duration-300 group-hover:text-blue-50 dark:group-hover:text-blue-950/30" size={32} strokeWidth={1} />

                            <div className="relative z-10 mb-8">
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm font-medium">
                                    “{t_.text}”
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center justify-between mt-auto">
                                <div>
                                    <h4 style={{ fontFamily: "'Syne', sans-serif" }}
                                        className="font-bold text-zinc-900 dark:text-zinc-100 text-base tracking-tight transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {t_.name}
                                    </h4>
                                    <p className="text-zinc-400 dark:text-zinc-500 text-[11px] font-medium uppercase tracking-wider mt-0.5">
                                        {t_.role}
                                    </p>
                                </div>
                                <span className="text-lg grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105">
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
"use client";

import React from "react";
import { useLanguage } from "../components/Languagecontext";

export default function Footer() {
    const { language } = useLanguage();
    const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

    const content = {
        EN: {
            brand: "Dieudonné.",
            tagline: "Ready to create with purpose? If you're looking for a design partner who listens, understands, and creates with intention, let's start the conversation.",
            location: "Cotonou, Benin",
            navTitle: "Navigation",
            nav: [
                { name: "Home", href: "#home" },
                { name: "About", href: "#services" },
                { name: "Works", href: "#works" },
                { name: "Contact", href: "#contact" },
            ],
            contactTitle: "Get in touch",
            email: "houndagnondieudonne4@gmail.com",
            phone: "+229 01 66 37 45 86",
            socialTitle: "Socials",
            socials: [
                { name: "GitHub", href: "https://github.com/rolnelh" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250" },
                { name: "Twitter", href: "https://twitter.com" },
            ],
            rights: "© 2026 Dieudonné Houndagnon. All rights reserved."
        },
        FR: {
            brand: "Dieudonné.",
            tagline: "Prêt à créer avec un but? Si vous cherchez un partenaire de design qui écoute, comprend et crée avec intention, commençons la conversation",
            location: "Cotonou, Bénin",
            navTitle: "Navigation",
            nav: [
                { name: "Accueil", href: "#home" },
                { name: "À propos", href: "#services" },
                { name: "Projets", href: "#works" },
                { name: "Contact", href: "#contact" },
            ],
            contactTitle: "Contact",
            email: "houndagnondieudonne4@gmail.com",
            phone: "+229 01 66 37 45 86",
            socialTitle: "Réseaux",
            socials: [
                { name: "GitHub", href: "https://github.com/rolnelh" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250" },
                { name: "Twitter", href: "https://twitter.com" },
            ],
            rights: "© 2026 Dieudonné Houndagnon."
        }
    };

    const t = content[langKey];

    return (
        <footer className="bg-[#121214] text-zinc-300 py-20 px-6 border-t border-white/[0.05] relative overflow-hidden rounded-xl">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Colonne 1 : Marque et Tagline */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-white font-normal tracking-tight">
                        {t.brand}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                        {t.tagline}
                    </p>
                    <p className="text-zinc-500 text-sm font-medium">
                        {t.location}
                    </p>
                </div>

                {/* Colonne 2 : Navigation */}
                <div className="space-y-4">
                    <h4 className="text-lg font-serif text-white font-normal tracking-tight">
                        {t.navTitle}
                    </h4>
                    <ul className="space-y-2.5">
                        {t.nav.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 inline-block"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Colonne 3 : Get in touch */}
                <div className="space-y-4">
                    <h4 className="text-lg font-serif text-white font-normal tracking-tight">
                        {t.contactTitle}
                    </h4>
                    <div className="space-y-2.5">
                        <a
                            href={`mailto:${t.email}`}
                            className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 block"
                        >
                            {t.email}
                        </a>
                        <a
                            href="tel:+2290166374586"
                            className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 block"
                        >
                            {t.phone}
                        </a>
                    </div>
                </div>

                {/* Colonne 4 : Socials */}
                <div className="space-y-4">
                    <h4 className="text-lg font-serif text-white font-normal tracking-tight">
                        {t.socialTitle}
                    </h4>
                    <ul className="space-y-2.5">
                        {t.socials.map((social, idx) => (
                            <li key={idx}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 inline-block"
                                >
                                    {social.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Barre de bas de page */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 relative z-10">
                <p>{t.rights}</p>
            </div>
        </footer>
    );
}
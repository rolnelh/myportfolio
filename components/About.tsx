"use client";
import React from "react";
import { useLanguage } from "../components/Languagecontext";
import { Download, ChevronDown } from "lucide-react";

const content = {
  EN: {
    label: "Experience",
    title: "Where I've Worked",
    subtitle: "A summary of my professional journey and the impact I've made",
    bio: "I think in products, not just pages. Full-stack engineer who ships fast and measures impact — from startup MVPs to a national government platform serving an entire country.",
    journey: [
      { period: "June 2026", title: "Founders Live Winner", desc: "Won the startup competition with the Vibe & Go team — validated a product idea in front of investors and founders." },
      { period: "2026—Now", title: "Entrepreneurial Tech Program", desc: "Building digital products end-to-end: user research, product design, architecture, and Agile shipping." },
      { period: "2024—Now", title: "Full-Stack Engineer", desc: "Architected scalable web apps and SaaS products with Next.js, NestJS and Laravel — including a national e-services platform." },
      { period: "2022—2024", title: "Frontend Developer", desc: "Built pixel-perfect, high-converting interfaces — laid the technical foundation now powering every product I ship." },
    ],
  },
  FR: {
    label: "Expérience",
    title: "Mon parcours professionnel",
    subtitle: "Résumé de mon évolution et de l'impact généré",
    bio: "Je pense produit, pas seulement code. Ingénieur full-stack qui livre vite et mesure l'impact — des MVP de startups à une plateforme gouvernementale utilisée à l'échelle nationale.",
    journey: [
      { period: "Juin 2026", title: "Vainqueur Founders Live", desc: "Lauréats de la compétition startup avec l'équipe Vibe & Go — idée produit validée devant investisseurs et fondateurs." },
      { period: "2026—Pr", title: "Programme Entrepreneurial", desc: "Création de produits numériques de A à Z : recherche utilisateur, design, architecture et déploiement Agile." },
      { period: "2024—Pr", title: "Ingénieur Full-Stack", desc: "Architecture d'applications web et de plateformes SaaS avec Next.js, NestJS et Laravel — dont un portail national d'e-services." },
      { period: "2022—2024", title: "Développeur Frontend", desc: "Interfaces pixel-perfect et haute conversion — la base technique qui porte aujourd'hui chaque produit que je livre." },
    ],
  }
};

export default function Experience() {
  const { language } = useLanguage();
  const t = content[language === "EN" ? "EN" : "FR"];

  return (
    <section id="about" className="bg-[#09090B] py-24 px-6 text-white">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
            {t.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.title}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
            {t.bio}
          </p>
        </div>

        <div className="space-y-4">
          {t.journey.map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-white">{item.title}</h3>
                <span className="text-xs font-mono text-zinc-500">{item.period}</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-4 text-zinc-600">
                <ChevronDown size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors">
            {language === "EN" ? "Download My CV" : "Télécharger mon CV"} <Download size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
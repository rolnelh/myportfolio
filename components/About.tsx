"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    label: "Background",
    title: "Dieudonné — Frontend Engineer & UI Designer",
    bio: "Frontend Engineer focused on building performant interfaces and scalable web products. Currently expanding expertise in mobile development with React Native.",
    journey: [
      { period: "June", title: "Founders Live Winner", desc: "Won the startup competition with the Vibe & Go team." },
      { period: "26—Now", title: "Entrepreneurial Tech Program", desc: "Building digital products from scratch: user research, product design, architecture, and Agile deployment." },
      { period: "24—Now", title: "Full-Stack Developer", desc: "Architecting scalable web applications and premium SaaS products using Next.js, NestJS, and Laravel." },
      { period: "22—24", title: "Frontend Developer", desc: "Crafting pixel-perfect responsive interfaces, high-converting landing pages, and advanced SEO optimization." },
    ],
  },
  FR: {
    label: "Profil",
    title: "Dieudonné — Frontend Engineer & UI Designer",
    bio: "Développeur Frontend spécialisé dans la création d'interfaces performantes et de produits web scalables. Actuellement en expansion vers le développement mobile avec React Native.",
    journey: [
      { period: "Juin 2026", title: "Vainqueur Founders Live", desc: "Lauréats de la compétition startup avec l'équipe Vibe & Go." },
      { period: "26—Pr", title: "Programme Entrepreneurial", desc: "Création de produits numériques de A à Z : recherche utilisateur, design, architecture et déploiement Agile." },
      { period: "24—Pr", title: "Développeur Full-Stack", desc: "Architecture d'applications web évolutives et de plateformes SaaS modernes avec Next.js, NestJS et Laravel." },
      { period: "22—24", title: "Développeur Frontend", desc: "Création d'interfaces utilisateur premium pixel-perfect, landing pages haute conversion et optimisation SEO." },
    ],
  }
};

export default function About() {
  const { language } = useLanguage();
  const t = content[language === "EN" ? "EN" : "FR"];

  return (
    <section id="about" className="bg-[#FDFDFD] py-24 px-6 md:px-12 border-t border-black/[0.03]">
      <div className="max-w-4xl mx-auto">

        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/20 mb-20">
          {t.label}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden rounded-2xl border border-black/[0.03]">
              <Image
                src="/images/profil.webp"
                alt="Dieudonné"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-between py-2">
            <div className="space-y-8">
              <h2 className="text-xl font-medium tracking-tight text-black leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                {t.title}
              </h2>
              <p className="text-sm md:text-base text-black/60 leading-relaxed font-normal max-w-md">
                {t.bio}
              </p>
            </div>

            <div className="mt-16 space-y-6">
              {t.journey.map((item, i) => (
                <div key={i} className="flex items-baseline gap-6 border-b border-black/[0.04] pb-5 last:border-none">
                  <span className="text-[10px] font-bold tracking-wider text-black/30 w-16 shrink-0">{item.period}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-black/80 uppercase tracking-[0.15em] flex items-center gap-2">
                      {item.title}
                      {item.title.includes("Winner") || item.title.includes("Vainqueur") ? (
                        <span className="px-1.5 py-0.5 rounded-full bg-black text-[8px] text-white">★</span>
                      ) : null}
                    </span>
                    <span className="text-xs md:text-sm font-normal text-black/50 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-black hover:text-black/40 transition-colors w-fit border-b border-black/10 pb-1">
              Get in touch —
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    label: "Background",
    title: "Dieudonné — Frontend Engineer",
    bio: "I build high-performance digital products with a focus on speed and visual precision. Based in Benin, working globally.",
    journey: [
      { period: "26—Now", title: "Epitech Innovation", desc: "R&D on cutting-edge web technologies, building prototypes and production-ready solutions for clients across industries." },
      { period: "22—Now", title: "Freelance Engineer", desc: "Providing freelance frontend development services to clients worldwide." },
      { period: "2023", title: "AJS Partner", desc: "Collaborating with AJS to deliver high-quality web solutions for various clients." },
    ],
  },
  FR: {
    label: "Profil",
    title: "Dieudonné — Ingénieur Frontend",
    bio: "Je conçois des produits digitaux haute performance, avec un focus sur la vitesse et la précision visuelle. Basé au Bénin, je suis disponible pour toutes collaborations à distance pour relever vos défis UI/UX les plus complexes",
    journey: [
      { period: "26—Pr", title: "Programme Entrepreneurial - Epitech", desc: "Programme d’excellence en innovation technologique et entrepreneuriat" },
      { period: "22—Pr", title: "Ingénieur Freelance", desc: "Fourniture de services de développement frontend indépendants à des clients du monde entier." },
      { period: "22—24", title: "EIG-Bénin", desc: "Formation professionnelle en développement web." },
      { period: "2023", title: "AJS Partner", desc: "Collaboration avec AJS pour livrer des solutions web de qualité pour divers clients." },
      { period: "2019-2021", title: "FASEG - UAC", desc: "Etudes en Sciences Economiques et de Gestion" },
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
            <div className="relative aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
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
              <h2 className="text-xl font-medium tracking-tight text-black leading-tight">
                {t.title}
              </h2>
              <p className="text-md text-black/40 leading-relaxed font-light max-w-md">
                {t.bio}
              </p>
            </div>

            <div className="mt-20 space-y-6">
              {t.journey.map((item, i) => (
                <div key={i} className="flex items-baseline gap-6 border-b border-black/[0.05] pb-4">
                  <span className="text-[10px] font-medium text-black/20 w-12">{item.period}</span>
                  <div className="flex flex-col gap-1">

                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em]">
                      {item.title}
                    </span>

                    <span className="text-sm font-medium text-black/40 tracking-tight">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-black hover:text-black/40 transition-colors w-fit">
              Get in touch —
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
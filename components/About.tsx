"use client";
import React from "react";
import { Github, Linkedin, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    badge: "About Me",
    greeting: "Hi, I'm Dieudonné! 👋",
    location: "Based in Benin",
    bio1: "I'm a Frontend Engineer passionate about building high-performance web and mobile architectures and intuitive user interfaces.",
    bio2: "I focus on delivering seamless digital experiences that convert users, maximize performance, and accelerate business growth.",
    cta: "Get in touch",
  },
  FR: {
    badge: "À propos de moi",
    greeting: "Bonjour, je suis Dieudonné ! 👋",
    location: "Basé au Bénin",
    bio1: "Je suis Ingénieur Frontend passionné par la conception d'architectures web et mobiles performantes et d'interfaces utilisateur intuitives.",
    bio2: "Mon objectif est de créer des expériences fluides qui convertissent vos utilisateurs, maximisent les performances et accélèrent la croissance de votre entreprise.",
    cta: "Me contacter",
  },
};

const socialLinks = {
  github: "https://github.com/rolnelh",
  linkedin: "https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250",
};

export default function About() {
  const { language } = useLanguage();
  const t = content[language === "EN" ? "EN" : "FR"];

  return (
    <section id="about" className="py-28 px-6 bg-white text-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-8 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Colonne de gauche : Texte, Bio et Réseaux */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 shadow-xs">
                 {t.badge}
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                {t.greeting}
              </h2>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
                <MapPin size={14} className="text-[#ff2a4d]" />
                {t.location}
              </div>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>{t.bio1}</p>
                <p>{t.bio2}</p>
              </div>

              {/* Bouton de contact et Réseaux sociaux */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#ff2a4d] hover:bg-[#e02041] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>{t.cta}</span>
                  <ArrowRight size={16} />
                </a>

                <div className="flex items-center gap-2.5">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#ff2a4d] hover:text-white hover:border-[#ff2a4d] transition-all shadow-xs"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#ff2a4d] hover:text-white hover:border-[#ff2a4d] transition-all shadow-xs"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne de droite : Photo de profil */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src="/images/cmp.jpeg"
                  alt="Dieudonné Houndagnon"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Dieudonné Houndagnon
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
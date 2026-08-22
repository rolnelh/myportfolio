"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Code2, Wrench, ArrowUpRight } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  // SiPhp,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { useLanguage } from "../components/Languagecontext";

export default function About() {
  const { language } = useLanguage();
  const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

  const content = {
    EN: {
      badge: "PROFILE & EXPERTISE",
      title: "A complete overview of my work",
      about: {
        title: "About Me",
        desc: "Passionate Frontend & Mobile developer based in Benin. I turn ideas into high-performance, responsive, and seamless digital products.",
      },
      services: {
        title: "Services",
        desc: "Custom web applications, mobile cross-platform development (React Native), and scalable backend logic (Laravel).",
      },
      technologies: {
        title: "Technologies",
        desc: "Core stack and modern frameworks I use daily:",
      },
      tools: {
        title: "Tools & Workflow",
        desc: "Shadcn UI, Git/GitHub, Vercel, Render, and PhpMyAdmin.",
      }
    },
    FR: {
      badge: "PROFIL & EXPERTISE",
      title: "Un aperçu complet de mon parcours",
      about: {
        title: "À propos",
        desc: "Développeur Frontend & Mobile passionné basé au Bénin. Je transforme vos idées en produits numériques performants et fluides.",
      },
      services: {
        title: "Services",
        desc: "Création d'applications web sur-mesure, développement mobile multiplateforme (React Native) et API robustes.",
      },
      technologies: {
        title: "Technologies",
        desc: "Stack principale et frameworks modernes utilisés au quotidien :",
      },
      tools: {
        title: "Outils & Workflow",
        desc: "Shadcn UI, Git/GitHub, Vercel, Render, Wampserver et PhpMyAdmin.",
      }
    }
  };

  const t = content[langKey];

  const techList = [
    { name: "React", icon: <SiReact size={13} className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs size={13} className="text-slate-900" /> },
    { name: "React Native", icon: <SiReact size={13} className="text-indigo-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={13} className="text-cyan-500" /> },
    { name: "Laravel", icon: <SiLaravel size={13} className="text-red-500" /> },
    // { name: "PHP", icon: <SiPhp size={13} className="text-indigo-600" /> },
    { name: "TypeScript", icon: <SiTypescript size={13} className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql size={13} className="text-blue-500" /> },
    { name: "HTML", icon: <SiHtml5 size={13} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss size={13} className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* En-tête de section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 mb-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
            {t.badge}
          </span>
        </motion.div> */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight"
        >
          {t.title}
        </motion.h2>
      </div>

      {/* Grille Bento 3 colonnes : 2 cartes à gauche, Photo au centre, 2 cartes à droite */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

        {/* Colonne de Gauche (2 cartes) */}
        <div className="flex flex-col gap-6">

          {/* 1. Carte ABOUT avec fond plein bg-[#FDE08D] */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDE08D] text-slate-900 p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="w-11 h-11 rounded-2xl bg-slate-900/10 flex items-center justify-center text-slate-900 mb-6">
              <User size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">
                {t.about.title}
              </h3>
              <p className="text-slate-800 text-sm leading-relaxed font-medium">
                {t.about.desc}
              </p>
            </div>
          </motion.div>

          {/* 2. Carte SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div className="w-11 h-11 rounded-2xl bg-slate-900/5 border border-slate-200 flex items-center justify-center text-slate-900 mb-6">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                {t.services.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.services.desc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Colonne Centrale (Photo professionnelle) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100"
        >
          <img
            src="/images/cmp.jpeg"
            alt="Dieudonné Houndagnon"
            className="w-full h-full object-cover object-top"
          />
          {/* Badge de disponibilité en bas */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Disponible
              </span>
            </div>
            <a
              href="https://calendar.app.google/XwfDAm67pz7uL7pV8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Colonne de Droite (2 cartes) */}
        <div className="flex flex-col gap-6">

          {/* 3. Carte TECHNOLOGIES avec les logos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div className="w-11 h-11 rounded-2xl bg-slate-900/5 border border-slate-200 flex items-center justify-center text-slate-900 mb-4">
              <Code2 size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                {t.technologies.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {t.technologies.desc}
              </p>

              {/* Grille des logos de techno */}
              <div className="flex flex-wrap gap-1.5">
                {techList.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-2xs"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4. Carte OUTILS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div className="w-11 h-11 rounded-2xl bg-slate-900/5 border border-slate-200 flex items-center justify-center text-slate-900 mb-6">
              <Wrench size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                {t.tools.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.tools.desc}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
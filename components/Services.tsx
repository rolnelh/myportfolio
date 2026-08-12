"use client";

import React, { useState } from 'react';
import {
  Monitor, Layers, Code2, Rocket, Search, Smartphone,
  ArrowUpRight, ArrowRight
} from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiExpo,
  SiLaravel,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    servicesHeading: "Services",
    servicesSub: "Explore our comprehensive suite of design and development services.",
    techHeading: "Technologies",
    techSub: "Discover the cutting-edge tools we use to craft exceptional websites and apps.",
    allTech: "VIEW ALL PROJECTS",
    servicesList: [
      {
        title: "Modern Websites",
        description: "Creation of showcase sites, landing pages, and fast web experiences with React, Next.js, and Tailwind CSS."
      },
      {
        title: "Interface Redesign",
        description: "Modernization of existing sites to improve design, user experience, and conversion."
      },
      {
        title: "Web Applications",
        description: "Development of platforms, dashboards, and digital products tailored to business needs."
      },
      {
        title: "UI Engineering",
        description: "Transforming your Figma mockups into pixel-perfect, clean, and high-performance interfaces."
      },
      {
        title: "SEO & Performance",
        description: "Technical optimization to improve Google visibility, speed, and user experience."
      },
      {
        title: "Mobile Applications",
        description: "Creation of modern mobile applications with React Native and Expo."
      }
    ],
    techList: [
      {
        title: "React & Next.js",
        description: "High-performance server-side rendered web applications and modern user interfaces."
      },
      {
        title: "Tailwind CSS",
        description: "Clean, responsive, and custom high-end styling inspired by modern design systems."
      },
      {
        title: "Laravel",
        description: "Robust backend architecture, secure APIs, and reliable business logic handling."
      },
      {
        title: "MySQL",
        description: "Structured relational database design for reliable and scalable data management."
      },
      {
        title: "React Native & Expo",
        description: "Cross-platform mobile applications with native performance and smooth navigation."
      },
      {
        title: "TypeScript & Git",
        description: "Type-safe robust codebase and collaborative version control workflows."
      }
    ]
  },
  FR: {
    servicesHeading: "Services",
    servicesSub: "Explorez notre gamme complète de services de design et de développement.",
    techHeading: "Technologies",
    techSub: "Découvrez les outils de pointe que nous utilisons pour concevoir des sites et applications d'exception.",
    allTech: "VOIR TOUS LES PROJETS",
    servicesList: [
      {
        title: "Sites Web Modernes",
        description: "Création de sites vitrines, landing pages et expériences web rapides avec React, Next.js et Tailwind CSS."
      },
      {
        title: "Refonte d'Interfaces",
        description: "Modernisation de sites existants pour améliorer design, expérience utilisateur et conversion."
      },
      {
        title: "Applications Web",
        description: "Développement de plateformes, dashboards et produits digitaux adaptés aux besoins métier."
      },
      {
        title: "UI Engineering",
        description: "Transformation de vos maquettes Figma en interfaces pixel-perfect, propres et performantes."
      },
      {
        title: "SEO & Performance",
        description: "Optimisation technique pour améliorer visibilité Google, vitesse et expérience utilisateur."
      },
      {
        title: "Applications Mobiles",
        description: "Création d'applications mobiles modernes avec React Native et Expo."
      }
    ],
    techList: [
      {
        title: "React & Next.js",
        description: "Applications web ultra-performantes avec rendu côté serveur et interfaces modernes."
      },
      {
        title: "Tailwind CSS",
        description: "Design system sur mesure, propre et responsive inspiré des standards SaaS."
      },
      {
        title: "Laravel",
        description: "Architecture backend robuste, création d'API sécurisées et logique métier solide."
      },
      {
        title: "MySQL",
        description: "Conception de bases de données relationnelles structurées et gestion fiable des données."
      },
      {
        title: "React Native & Expo",
        description: "Applications mobiles multiplateformes fluides avec des performances proches du natif."
      },
      {
        title: "TypeScript & Git",
        description: "Typage strict du code source et gestion rigoureuse des versions et collaborations."
      }
    ]
  }
};

const serviceIcons = [Monitor, Layers, Code2, Rocket, Search, Smartphone];
const techIcons = [SiNextdotjs, SiTailwindcss, SiLaravel, SiMysql, SiExpo, SiTypescript];

export default function Services() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('services'); // 'services' ou 'technologies'

  const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";
  const t = content[langKey];

  const currentItems = activeTab === 'services' ? t.servicesList : t.techList;
  const currentIcons = activeTab === 'services' ? serviceIcons : techIcons;

  return (
    <section
      id="services"
      className="bg-slate-50/60 py-28 px-6 text-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Colonne de Gauche : Les 2 cartes cliquables (Onglets) */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Carte 1 : Services */}
            <div
              onClick={() => setActiveTab('services')}
              className={`cursor-pointer rounded-3xl p-8 flex flex-col justify-between relative transition-all border ${activeTab === 'services'
                  ? 'bg-white border-slate-300 shadow-xl shadow-slate-200/50 scale-[1.01]'
                  : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
            >
              <div className={`absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeTab === 'services' ? 'bg-[#ff2a4d] text-white shadow-md shadow-red-500/20' : 'bg-slate-100 text-slate-700'
                }`}>
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {t.servicesHeading}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  {t.servicesSub}
                </p>
              </div>
            </div>

            {/* Carte 2 : Technologies */}
            <div
              onClick={() => setActiveTab('technologies')}
              className={`cursor-pointer rounded-3xl p-8 flex flex-col justify-between relative transition-all border ${activeTab === 'technologies'
                  ? 'bg-white border-slate-300 shadow-xl shadow-slate-200/50 scale-[1.01]'
                  : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
            >
              <div className={`absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeTab === 'technologies' ? 'bg-[#ff2a4d] text-white shadow-md shadow-red-500/20' : 'bg-slate-100 text-slate-700'
                }`}>
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {t.techHeading}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  {t.techSub}
                </p>
              </div>
            </div>

          </div>

          {/* Colonne de Droite : Grille dynamique selon l'onglet actif */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-sm transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {currentItems.map((item, index) => {
                const IconComponent = currentIcons[index];

                return (
                  <div
                    key={`${activeTab}-${index}`}
                    className="flex items-start gap-4 group animate-fadeIn"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800 shrink-0 group-hover:border-[#ff2a4d] group-hover:text-[#ff2a4d] transition-all shadow-sm">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bas de la grille */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                {activeTab === 'services' ? 'Expertise & Solutions' : 'Tech Stack & Outils'}
              </span>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-slate-900 hover:text-[#ff2a4d] transition-colors"
              >
                {t.allTech} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
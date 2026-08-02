"use client";

import React from 'react';
import { Monitor, Layers, Code2, Rocket, Search, Smartphone } from 'lucide-react';
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    title: "Services",
    subtitle: "I help businesses and startups create modern, high-performance, and result-driven digital experiences.",
    services: [
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
    ]
  },
  FR: {
    title: "Services",
    subtitle: "J'aide les entreprises et startups à créer des expériences digitales modernes, performantes et orientées résultats.",
    services: [
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
    ]
  }
};

const serviceIcons = [Monitor, Layers, Code2, Rocket, Search, Smartphone];

export default function Services() {
  // Correction : on extrait 'language' de l'objet renvoyé par le hook
  const { language } = useLanguage();

  const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";
  const t = content[langKey];

  return (
    <section
      id="services"
      className="bg-neutral-950 py-24 px-6 text-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t.title}
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <div
                key={content.EN.services[index].title}
                className="
                  bg-neutral-900 
                  border border-neutral-800
                  rounded-3xl
                  p-8
                  hover:border-neutral-600
                  transition-all
                "
              >
                <Icon className="w-8 h-8 text-white mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
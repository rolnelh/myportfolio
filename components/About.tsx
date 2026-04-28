"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    label: "About Me",
    heading: "Building products with purpose and precision.",
    para1:
      "I help startups and businesses turn ideas into functional, user-friendly digital products. With a strong focus on performance, simplicity, and scalability, I create solutions that make an impact.",
    para2:
      "Based in Cotonou, Bénin — working fully remote with clients in Europe, North America & across Africa. Async-friendly, deadline-driven, and fluent in English and French.",
    bullets: [
      "Deliverables in weeks, not months",
      "Clean, documented, maintainable code",
      "Design-first & performance-obsessed",
      "Transparent communication throughout",
    ],
    stats: [
      { value: "15+", label: "Projects Shipped" },
      { value: "10+", label: "Happy Clients" },
      { value: "3+", label: "Years Building" },
      { value: "100%", label: "Client Satisfaction" },
    ],
  },
  FR: {
    label: "À propos",
    heading: "Je construis des produits avec rigueur et intention.",
    para1:
      "J'aide startups et entreprises à transformer leurs idées en produits digitaux fonctionnels, performants et centrés utilisateur.",
    para2:
      "Basé à Cotonou, Bénin — je travaille 100% à distance avec des clients en Europe, Amérique du Nord & Afrique. Async-friendly, ponctuel et bilingue.",
    bullets: [
      "Livraison en semaines, pas en mois",
      "Code propre, documenté et maintenable",
      "Design-first & obsédé par la performance",
      "Communication transparente en permanence",
    ],
    stats: [
      { value: "15+", label: "Projets livrés" },
      { value: "10+", label: "Clients satisfaits" },
      { value: "3+", label: "Ans d'expérience" },
      { value: "100%", label: "Satisfaction client" },
    ],
  },
};

const About = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="py-24 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Top label */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-black inline-block" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            {t.label}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tight mb-8"
            >
              {t.heading}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              {t.para1}
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 border-l-2 border-gray-200 pl-4">
              {t.para2}
            </p>

            <ul className="space-y-3">
              {t.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col gap-2 hover:border-black hover:bg-white transition-all duration-300 group"
              >
                <span
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-4xl font-bold text-black"
                >
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
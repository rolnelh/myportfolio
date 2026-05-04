"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    sectionLabel: "My Professional Journey",
    sectionSub: "An overview of my background and expertise",
    badge: "Available",
    name: "Hello I'm Dieudonné",
    role: "Next.js Developer & UI Designer based in Benin",
    bio: "I'm Dieudonné Houndagnon, Next.js developer and UI designer based in Benin. With 3+ years of experience, I transform complex ideas into fast, intuitive interfaces — built to convert and grow your business.",
    skills: [
      {
        category: "Development",
        items: ["HTML5","CSS3","JavaScript", "Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
      },
      {
        category: "Design & UX",
        items: ["UI Design", "UX Research", "Figma", "Wireframing", "Design System", "Prototyping"],
      },
      {
        category: "Performance & Deploy",
        items: ["Lighthouse 90+", "SEO", "Vercel", "Core Web Vitals", "Mobile-first"],
      },
    ],
    bullets: [
      "Clean, documented & maintainable code",
      "Design-first & performance-obsessed",
      "Transparent communication throughout",
    ],
  },
  FR: {
    sectionLabel: "Mon parcours professionnel",
    sectionSub: "Un aperçu de mon parcours et de mes expériences",
    badge: "Disponible",
    name: "Hello I'm Dieudonné",
    role: "Développeur Next.js & Designer UI basé au Bénin",
    bio: "Je suis Dieudonné Houndagnon, développeur Next.js et designer UI basé au Bénin. Avec plus de 3 ans d'expérience, je transforme des idées complexes en interfaces rapides et intuitives, conçues pour convertir et faire croître votre business.",
    skills: [
      {
        category: "Développement",
        items: ["HTML5","CSS3","JavaScript","Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
      },
      {
        category: "Design & UX",
        items: ["UI Design", "UX Research", "Figma", "Wireframing", "Design System", "Prototypage"],
      },
      {
        category: "Performance & Déploiement",
        items: ["Lighthouse 90+", "SEO", "Vercel", "Core Web Vitals", "Mobile-first"],
      },
    ],
    bullets: [
      "Code propre, documenté et maintenable",
      "Design-first & obsédé par la performance",
      "Communication transparente en permanence",
    ],
  },
};

const About = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="bg-[#050505] py-24 px-6 rounded-2xl">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8">
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-4xl md:text-6xl font-bold mb-3"
          >
            <span className="text-white">{t.sectionLabel.split(" ").slice(0, -1).join(" ")} </span>
            <span className="text-white/30">{t.sectionLabel.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-white/40 text-base">{t.sectionSub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-6 flex flex-col gap-5">

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/profil.webp"
                alt="Dieudonné"
                fill
                className="object-cover object-top"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-white text-sm font-semibold">{t.badge}</span>
                </div>
              </div>
            </div>

            <div>
              <h3
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-white text-2xl font-bold mb-1"
              >
                {t.name}
              </h3>
              <p className="text-white/40 text-sm font-medium">{t.role}</p>
            </div>

            <ul className="space-y-2.5 border-t border-white/5 pt-5">
              {t.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                  <span className="text-white/60 text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 flex flex-col gap-8">

            <p className="text-white/70 text-lg leading-relaxed border-b border-white/5 pb-8">
              {t.bio}
            </p>

            <div className="flex flex-col gap-7">
              {t.skills.map((group, gi) => (
                <div key={gi}>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, si) => (
                      <span
                        key={si}
                        className="px-3 py-1.5 bg-white/5 border border-white/8 text-white/60 text-sm font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
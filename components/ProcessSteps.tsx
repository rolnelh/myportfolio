"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../components/Languagecontext";

const content = {
  FR: {
    eyebrow: "Ma méthode",
    title: "De l'interface existante à une expérience meilleure.",
    description:
      "Chaque projet commence par comprendre le problème avant d'écrire une seule ligne de code. L'objectif : une interface qui sert réellement vos utilisateurs.",
    steps: [
      {
        number: "01",
        label: "Diagnostic",
        title: "Repérer ce qui bloque vos utilisateurs",
        description:
          "J'audite votre produit pour identifier les frictions réelles — pas supposées — qui freinent l'expérience.",
        Icon: SearchIcon,
      },
      {
        number: "02",
        label: "Résolution",
        title: "Concevoir des parcours qui fonctionnent",
        description:
          "Je restructure les flux, la hiérarchie visuelle et les composants pour que chaque interaction ait un sens.",
        Icon: LayersIcon,
      },
      {
        number: "03",
        label: "Livraison",
        title: "Construire une interface qui tient dans le temps",
        description:
          "Je développe avec React et Next.js une interface rapide, maintenable et prête à évoluer avec votre produit.",
        Icon: ShipIcon,
      },
    ],
  },
  EN: {
    eyebrow: "My process",
    title: "From existing interface to a better experience.",
    description:
      "Every project starts with understanding the problem before writing a single line of code. The goal: an interface that actually serves your users.",
    steps: [
      {
        number: "01",
        label: "Diagnosis",
        title: "Find what's actually blocking users",
        description:
          "I audit your product to surface real friction — not assumed friction — slowing down the experience.",
        Icon: SearchIcon,
      },
      {
        number: "02",
        label: "Resolution",
        title: "Design flows that actually work",
        description:
          "I restructure journeys, visual hierarchy, and components so every interaction has a purpose.",
        Icon: LayersIcon,
      },
      {
        number: "03",
        label: "Delivery",
        title: "Ship an interface built to last",
        description:
          "I build with React and Next.js — fast, maintainable, and ready to scale with your product.",
        Icon: ShipIcon,
      },
    ],
  },
};

export default function ProcessSection() {
  const { language } = useLanguage();
  const t = content[language as "FR" | "EN"] ?? content.FR;

  return (
    <section className="relative py-28 md:py-36 px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20 md:mb-28">
          <span
            className="inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {t.eyebrow}
          </span>

          <h2
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-400 max-w-xl">
            {t.description}
          </p>
        </div>

        {/* Timeline — vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* connecting line: vertical on mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="md:hidden absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800"
          />

          {/* connecting line: horizontal on desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-neutral-800"
          />

          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-10">
            {t.steps.map((step, i) => {
              const Icon = step.Icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-10 md:pl-0 pt-0 md:pt-14 pb-14 md:pb-0"
                >
                  {/* giant background number */}
                  <span
                    aria-hidden
                    className="pointer-events-none select-none absolute -top-4 right-0 md:top-6 md:right-2 text-[96px] md:text-[140px] leading-none font-semibold text-white/[0.035]"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.number}
                  </span>

                  {/* dot on the line */}
                  <span className="absolute left-0 top-[3px] md:top-[3px] md:left-auto w-[15px] h-[15px] rounded-full bg-black border border-neutral-700 flex items-center justify-center">
                    <span className="w-[5px] h-[5px] rounded-full bg-white" />
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <Icon />
                      <span
                        className="text-xs text-neutral-500 tracking-widest uppercase"
                      >
                        {step.label}
                      </span>
                    </div>

                    <h3
                      className="text-xl md:text-2xl font-semibold text-white mb-4 max-w-xs"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[15px] leading-relaxed text-neutral-400 max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Icônes en ligne, monochromes --- */

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="white" strokeWidth="1.5" />
      <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 L21 8 L12 13 L3 8 Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 13 L12 18 L21 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

function ShipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 12 L14 4 L20 4 L20 10 L12 20 Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="1.4" fill="white" />
    </svg>
  );
}
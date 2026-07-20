"use client";

import { Zap, LayoutDashboard, Code2 } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    eyebrow: "Problems I solve",
    title: "Great products fail when the experience gets in the way.",
    description:
      "Users rarely abandon a product because of its technology. They leave because it's slow, confusing or difficult to use.",

    items: [
      {
        icon: Zap,
        number: "01",
        title: "Slow interfaces",
        description:
          "Slow loading times and sluggish interactions frustrate users and reduce engagement.",
        solution:
          "Performance optimization, smoother interactions and faster rendering.",
      },
      {
        icon: LayoutDashboard,
        number: "02",
        title: "Complex user experiences",
        description:
          "Poor navigation and overloaded dashboards make products harder to adopt.",
        solution:
          "Clear information hierarchy and intuitive user flows.",
      },
      {
        icon: Code2,
        number: "03",
        title: "Designs poorly implemented",
        description:
          "Great designs deserve pixel-perfect implementation across every device.",
        solution:
          "Modern frontend development with React, Next.js and Tailwind CSS.",
      },
    ],
  },

  FR: {
    eyebrow: "Les problèmes que je résous",
    title:
      "Un excellent produit peut échouer si son interface devient un obstacle.",
    description:
      "Les utilisateurs abandonnent rarement une solution à cause de sa technologie. Ils partent parce qu'elle est lente, complexe ou difficile à utiliser.",

    items: [
      {
        icon: Zap,
        number: "01",
        title: "Interfaces lentes",
        description:
          "Des temps de chargement longs et des interactions peu réactives créent de la frustration.",
        solution:
          "Optimisation des performances et expérience plus fluide.",
      },
      {
        icon: LayoutDashboard,
        number: "02",
        title: "Interfaces trop complexes",
        description:
          "Une navigation confuse ou un dashboard surchargé ralentit l'adoption du produit.",
        solution:
          "Hiérarchie claire et parcours utilisateur intuitif.",
      },
      {
        icon: Code2,
        number: "03",
        title: "Des designs mal exécutés",
        description:
          "Une excellente maquette mérite une implémentation fidèle sur tous les écrans.",
        solution:
          "Développement frontend moderne avec React, Next.js et Tailwind.",
      },
    ],
  },
};

export default function ProblemsSection() {
  const { language } = useLanguage();

  const t = content[language === "EN" ? "EN" : "FR"];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl">

          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            {t.eyebrow}
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl tracking-tight font-medium text-neutral-950">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-500">
            {t.description}
          </p>

        </div>

        <div className="mt-24 border-t border-neutral-200">

          {t.items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.number}
                className="
                                    grid
                                    md:grid-cols-12
                                    gap-8
                                    py-10
                                    border-b
                                    border-neutral-200
                                    transition-colors
                                    hover:bg-neutral-50/60
                                "
              >

                <div className="md:col-span-2 flex items-center gap-4">

                  <span className="text-neutral-400 text-sm w-8">
                    {item.number}
                  </span>

                  <Icon
                    size={18}
                    className="text-neutral-500"
                  />

                </div>

                <div className="md:col-span-4">

                  <h3 className="text-xl font-medium text-neutral-950">
                    {item.title}
                  </h3>

                </div>

                <div className="md:col-span-4">

                  <p className="text-neutral-600 leading-7">
                    {item.description}
                  </p>

                </div>

                <div className="md:col-span-2">

                  <p className="text-sm text-neutral-400 leading-6">
                    {item.solution}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
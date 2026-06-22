"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiExpo,
  SiLaravel,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiCss,
  SiOpenai,
  SiFigma
} from "react-icons/si";
import { useLanguage } from "../components/Languagecontext";

const technologies = [
  { name: "Next.js", icon: <SiNextdotjs size={16} /> },
  { name: "React Native", icon: <SiReact size={16} /> },
  { name: "Expo", icon: <SiExpo size={16} /> },
  { name: "Laravel", icon: <SiLaravel size={16} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={16} /> },
  { name: "TypeScript", icon: <SiTypescript size={16} /> },
  { name: "MySQL", icon: <SiMysql size={16} /> },
  { name: "React", icon: <SiReact size={16} /> },
  { name: "HTML5", icon: <SiHtml5 size={16} /> },
  { name: "CSS3", icon: <SiCss size={16} /> },
  { name: "OpenAI", icon: <SiOpenai size={16} /> },
  { name: "Figma", icon: <SiFigma size={16} /> },
];

const content = {
  EN: {
    title: "Tools I Build With",
    subtitle: "A curated set of technologies I rely on to build modern web experiences",
  },
  FR: {
    title: "Ma stack technique",
    subtitle: "Un ensemble de technologies que j'utilise pour concevoir des expériences web modernes",
  },
};

const TechStack = () => {
  const { language } = useLanguage();
  const t = content[language === "EN" ? "EN" : "FR"];

  return (
    <section className="py-24 bg-[#09090B] border-t border-white/[0.05]" id="techstack">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.title}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-colors duration-300"
            >
              <div className="text-white/70">{tech.icon}</div>
              <span className="text-xs font-medium text-white/80">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
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
  SiFramer,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { useLanguage } from "../components/Languagecontext";

const technologies = [
  { name: "Next.js", icon: <SiNextdotjs size={28} /> },
  { name: "React Native", icon: <SiReact size={28} /> },
  { name: "Expo", icon: <SiExpo size={28} /> },
  { name: "Laravel", icon: <SiLaravel size={28} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
  { name: "TypeScript", icon: <SiTypescript size={28} /> },
  { name: "MySQL", icon: <SiMysql size={28} /> },
  { name: "Framer", icon: <SiFramer size={28} /> },
  { name: "HTML5", icon: <SiHtml5 size={28} /> },
  { name: "CSS3", icon: <SiCss size={28} /> },
];

const labels = {
  EN: "Main Tech Stack & Tools",
  FR: "Stack technique principale",
};

const TechStack = () => {
  const { language } = useLanguage();
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="w-full py-8 border-y border-gray-100 bg-white/50 overflow-hidden rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          {labels[language]}
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 grayscale opacity-25 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <div className="text-black">{tech.icon}</div>
              <span
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-xl font-bold tracking-tighter text-black"
              >
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
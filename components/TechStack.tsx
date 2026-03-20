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
  SiFramer
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "React Native", icon: <SiReact size={32} /> },
  { name: "Expo", icon: <SiExpo size={32} /> },
  { name: "Laravel", icon: <SiLaravel size={32} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "MySQL", icon: <SiMysql size={32} /> },
  { name: "Framer", icon: <SiFramer size={32} /> },
];

const TechStack = () => {
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="w-full py-8 border-y border-gray-100 bg-white/50 overflow-hidden rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          Main Tech Stack & Tools
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-20 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <div className="text-black">
                {tech.icon}
              </div>
              <span className="font-syne text-xl md:text-2xl font-bold tracking-tighter text-black">
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
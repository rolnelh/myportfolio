"use client";
import React from "react";
import { Github, Twitter, Linkedin, ArrowRight, Send } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    hero: {
      title: "Curious about what we can create together? ",
      sub: "Let’s bring something extraordinary to life!",
      cta: "Contact Me"
    },
    profile: {
      name: "Dieudonné Houndagnon",
      bio: "I build fast, polished, and user-friendly products that deliver real value.",
      links: ["Skills", "Projects", "Experience", "Testimonials"]
    }
  },
  FR: {
    hero: {
      title: "Curieux de ce que nous pouvons créer ensemble ? ",
      sub: "Donnons vie à quelque chose d'extraordinaire !",
      cta: "Me contacter"
    },
    profile: {
      name: "Dieudonné Houndagnon",
      bio: "Je construis des produits rapides, soignés et conviviaux qui apportent une réelle valeur.",
      links: ["Compétences", "Projets", "Expérience", "Témoignages"]
    }
  }
};

export default function ContactCTA() {
  const { language } = useLanguage();
  const t = content[language === "EN" ? "EN" : "FR"];

  return (
    <section className="bg-[#09090B] py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[32px] overflow-hidden border border-neutral-800 p-12 md:p-24 text-center">

          <img
            src="https://www.nfbuk.org/wp-content/uploads/2016/09/contact-bg.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight">
              {t.hero.title}
            </h2>
            <p className="text-neutral-300 text-lg md:text-xl">
              {t.hero.sub}
            </p>
            <a
              href="mailto:houndagnondieudonne4@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all duration-300"
            >
              {t.hero.cta} <Send size={18} />
            </a>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start border-t border-neutral-900 pt-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-800" />
              <h3 className="text-white font-bold">{t.profile.name}</h3>
            </div>
            <p className="text-neutral-500 max-w-sm text-sm">
              {t.profile.bio}
            </p>
            <div className="flex gap-4 text-neutral-500 pt-2">
              <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
              <Twitter size={18} className="hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={18} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            {t.profile.links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-neutral-500 hover:text-white transition-colors text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
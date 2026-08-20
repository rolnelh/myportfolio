"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Dribbble } from "lucide-react";
import { SiGooglecalendar } from "react-icons/si";
import { useLanguage } from "../components/Languagecontext";

export default function Contact() {
  const { language } = useLanguage();
  const langKey = language?.toUpperCase() === "EN" ? "EN" : "FR";

  const content = {
    EN: {
      cardBadge: "Contact",
      title: "I'm not just here to design products; I'm here to connect with people.",
      subtitle: "Feel free to contact me for any questions, feedback, or further assistance.",
      cta: "Let's talk",
      coordinatesTitle: "Contact Information",
      coordinatesDesc: "Feel free to reach out directly through any of these channels.",
      emailLabel: "Email me",
      phoneLabel: "Call / WhatsApp",
      locationLabel: "Location",
      locationVal: "Benin / Remote",
      socialLabel: "Social Networks"
    },
    FR: {
      cardBadge: "Contact",
      title: "Je ne suis pas seulement là pour concevoir des produits ; je suis là pour tisser des liens.",
      subtitle: "N'hésitez pas à me contacter pour toute question, retour ou collaboration.",
      cta: "Discutons-en",
      coordinatesTitle: "Mes Coordonnées",
      coordinatesDesc: "N'hésitez pas à me contacter directement via l'un de ces canaux.",
      emailLabel: "Écrivez-moi",
      phoneLabel: "Téléphone / WhatsApp",
      locationLabel: "Localisation",
      locationVal: "Bénin / À distance",
      socialLabel: "Réseaux Sociaux"
    }
  };

  const t = content[langKey];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Grille de 2 divisions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* Division 1 : Style minimaliste et lumineux inspiré de la maquette */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#18181b] border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden"
        >
          {/* Petit badge supérieur */}
          <div className="flex justify-center mb-6">
            <span className="px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-gray-600 tracking-wide">
              {t.cardBadge}
            </span>
          </div>

          {/* Contenu textuel centré */}
          <div className="text-center my-auto py-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight mb-4 font-normal leading-snug">
              {t.title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
              {t.subtitle}
            </p>

            {/* Bouton avec effet de lueur subtil */}
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-md opacity-70"></div>
              <a
                href="https://calendar.app.google/XwfDAm67pz7uL7pV8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-medium text-sm hover:bg-slate-100 transition-all shadow-2xs"
              >
                <img
                      src="/images/calendar.jpeg"
                      alt="file"
                      className="w-6 h-6 object-cover"
                    />
                <span>{t.cta}</span>
              </a>
            </div>
          </div>

        </motion.div>

        {/* Division 2 : Coordonnées et canaux de contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
              {t.coordinatesTitle}
            </h3>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              {t.coordinatesDesc}
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:houndagnondieudonne4@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/5 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    {t.emailLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    houndagnondieudonne4@gmail.com
                  </span>
                </div>
              </a>

              {/* Téléphone / WhatsApp */}
              <a
                href="https://wa.me/22966374586"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/5 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    {t.phoneLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    +229 01 66 37 45 86
                  </span>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-slate-900/5 flex items-center justify-center text-slate-900">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    {t.locationLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {t.locationVal}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">
              {t.socialLabel}
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/rolnelh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://dribbble.com/dieudonnedev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <Dribbble size={18} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
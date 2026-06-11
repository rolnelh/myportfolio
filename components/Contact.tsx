"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Linkedin, Github, Mail, MessageSquare, ArrowUpRight, Send } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    line1: "Let's build",
    line2: "something great.",
    sub: "Have a project in mind? Select your focus area and drop your contact details. I'll get back to you within 24 hours.",
    wa: "WhatsApp",
    email: "houndagnondieudonne4@gmail.com",
    available: "Available for new projects",
    fields: { contact: "Your Email or Phone", send: "Send request", sending: "Sending..." },
    options: ["Landing Page", "Web App", "UI/UX Redesign", "Performance Audit"],
    ok: "Message received!", okSub: "I'll be in touch shortly.", okBtn: "Send another",
  },
  FR: {
    line1: "Construisons",
    line2: "ensemble.",
    sub: "Un projet en tête ? Sélectionnez votre domaine et laissez vos coordonnées. Je vous recontacte sous 24h.",
    wa: "WhatsApp",
    email: "houndagnondieudonne4@gmail.com",
    available: "Disponible pour de nouveaux projets",
    fields: { contact: "Votre Email ou Téléphone", send: "Envoyer", sending: "Envoi..." },
    options: ["Landing Page", "Application Web", "Refonte UI/UX", "Audit Performance"],
    ok: "C'est noté !", okSub: "Je vous recontacte rapidement.", okBtn: "Envoyer un autre",
  },
};

export default function Contact() {
  const [status, setStatus] = useState("");
  const [selected, setSelected] = useState("");
  const { language } = useLanguage();
  const t = content[language === "EN" ? "EN" : "FR"];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xojybgwq", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        setSelected("");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-[#09090B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* COLONNE GAUCHE: Informations */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">{t.available}</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[1] tracking-tighter">
                {t.line1} <br /> <span className="text-zinc-400 dark:text-zinc-600">{t.line2}</span>
              </h2>

              <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-lg leading-relaxed">
                {t.sub}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/2290166374586" target="_blank" className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <MessageSquare size={16} className="text-zinc-400" />
                <span className="text-sm font-medium dark:text-zinc-300">{t.wa}</span>
              </a>
              <a href={`mailto:${t.email}`} className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <Mail size={16} className="text-zinc-400" />
                <span className="text-sm font-medium dark:text-zinc-300">{t.email}</span>
              </a>
            </div>
          </div>

          {/* COLONNE DROITE: Formulaire */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <AnimatePresence mode="wait">
              {status === "ok" ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                  <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{t.ok}</h3>
                  <p className="text-zinc-500 mb-6 text-sm">{t.okSub}</p>
                  <button onClick={() => setStatus("")} className="text-sm font-bold text-blue-600 hover:underline">{t.okBtn}</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Quel est votre projet ?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {t.options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSelected(option)}
                          className={`text-left text-sm px-4 py-3 rounded-xl border transition-all ${selected === option
                              ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900"
                              : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:text-zinc-300"
                            }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="project_type" value={selected} />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Vos coordonnées</label>
                    <div className="relative group">
                      <input
                        required
                        name="contact_info"
                        placeholder={t.fields.contact}
                        className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-zinc-900 dark:focus:border-zinc-500 transition-colors"
                      />
                      <button
                        disabled={status === "sending"}
                        className="absolute right-2 top-2 bottom-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                      >
                        {status === "sending" ? t.fields.sending : <><Send size={14} /> {t.fields.send}</>}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
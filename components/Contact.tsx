"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Linkedin, Github, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    label: "Contact",
    line1: "Let's build",
    line2: "something great.",
    sub: "Have a project or a mission in mind? Drop your contact — I will handle the rest within 24h.",
    wa: "Chat on WhatsApp",
    waNum: "https://wa.me/2290166374586?text=Bonjour%20Dieudonn%C3%A9%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20discuter%20d%27un%20projet%20!",
    email: "houndagnondieudonne4@gmail.com",
    available: "Available for new projects",
    fields: { contact: "Your Email or Phone number", send: "Get in touch", sending: "Sending…" },
    options: ["Landing Page", "Web App", "UI/UX Redesign", "Performance Audit"],
    ok: "Got it!", okSub: "I will reach out to you within 24 hours.", okBtn: "Send another",
    err: "Something went wrong. Try again.",
  },
  FR: {
    label: "Contact",
    line1: "Construisons",
    line2: "ensemble.",
    sub: "Un besoin, une mission freelance ou une idée ? Laissez simplement votre contact — je m'occupe du reste.",
    wa: "Me contacter sur WhatsApp",
    waNum: "https://wa.me/2290166374586?text=Bonjour%20Dieudonn%C3%A9%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20discuter%20d%27un%20projet%20!",
    email: "houndagnondieudonne4@gmail.com",
    available: "Disponible pour de nouveaux projets",
    fields: { contact: "Votre Email ou Téléphone", send: "Être recontacté", sending: "Envoi…" },
    options: ["Landing Page", "Application Web", "Refonte UI/UX", "Audit Performance"],
    ok: "C'est noté !", okSub: "Je vous recontacte sous 24 heures.", okBtn: "Envoyer un autre",
    err: "Une erreur est survenue. Réessayez.",
  },
};

export default function Contact() {
  const [status, setStatus] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(""); // Stocke le tag cliqué
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
        setSelectedBudget("");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-[#09090B] py-28 px-6 md:px-12 border-t border-slate-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
              >
                {t.line1} <span className="text-zinc-300 dark:text-zinc-700 font-medium">{t.line2}</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm">
                {t.sub}
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 px-4 py-1.5 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/30 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-xs font-medium tracking-tight">{t.available}</span>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 space-y-3 max-w-sm">
              <a href={t.waNum} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between text-xs font-bold tracking-wider text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              >
                <span className="flex items-center gap-2.5">
                  <MessageSquare size={14} className="text-zinc-400" />
                  {t.wa}
                </span>
                <ArrowUpRight size={14} className="text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a href={`mailto:${t.email}`}
                className="group flex items-center justify-between text-xs font-bold tracking-wider text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              >
                <span className="flex items-center gap-2.5">
                  <Mail size={14} className="text-zinc-400" />
                  {t.email}
                </span>
                <ArrowUpRight size={14} className="text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="flex items-center gap-4 pt-4 text-zinc-300 dark:text-zinc-700">
                <a href="https://www.linkedin.com/in/dieudonné-houndagnon-093387250" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="https://github.com/rolnelh" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-zinc-100 dark:border-zinc-900 pt-12 lg:pt-0 lg:pl-16">
            {status === "ok" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center lg:text-left">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/30 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <CheckCircle size={20} className="text-emerald-600" />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif" }} className="text-zinc-900 dark:text-white text-xl font-bold mb-1">{t.ok}</h3>
                <p className="text-zinc-400 text-sm mb-6">{t.okSub}</p>
                <button onClick={() => setStatus("")} className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:underline">
                  {t.okBtn}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="space-y-3">
                  <p className="text-zinc-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                    {language === "EN" ? "I need assistance with:" : "J'ai besoin de :"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedBudget(selectedBudget === option ? "" : option)}
                        className={`text-xs px-4 py-2 rounded-xl transition-all duration-200 border font-medium ${selectedBudget === option
                            ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-950 dark:border-white"
                            : "bg-transparent text-zinc-600 border-zinc-200 dark:text-zinc-400 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <input type="hidden" name="project_type" value={selectedBudget} />
                </div>

                <div className="space-y-2">
                  <div className="relative flex items-center border-b border-zinc-200 dark:border-zinc-800 focus-within:border-zinc-900 dark:focus-within:border-white transition-colors py-2">
                    <input
                      name="contact_info"
                      type="text"
                      required
                      className="w-full bg-transparent text-sm text-zinc-900 dark:text-white outline-none placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium pr-12"
                      placeholder={t.fields.contact}
                    />

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === "sending"}
                      className="absolute right-0 text-zinc-900 dark:text-white disabled:opacity-40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                    >
                      {status === "sending" ? (
                        <span className="text-xs font-bold uppercase">{t.fields.sending}</span>
                      ) : (
                        <Send size={16} />
                      )}
                    </motion.button>
                  </div>
                </div>

                {status === "err" && (
                  <p className="text-xs font-bold text-red-500 tracking-tight">{t.err}</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
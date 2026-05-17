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
    sub: "A project in mind, a freelance mission, or a quick question? Write to me — I respond within 24h.",
    wa: "Chat on WhatsApp",
    waNum: "https://wa.me/2290166374586?text=Bonjour%20Dieudonn%C3%A9%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20discuter%20d%27un%20projet%20!",
    email: "houndagnondieudonne4@gmail.com",
    available: "Available for new projects",
    fields: { fn: "Your Name", em: "Email Address", type: "What do you need?", msg: "Tell me about your project...", send: "Send Message", sending: "Sending…" },
    options: ["Landing Page", "Web Application", "UI/UX Redesign", "Performance Audit", "Other"],
    ok: "Message sent!", okSub: "I'll get back to you within 24 hours.", okBtn: "Send another",
    err: "Something went wrong. Try again.",
  },
  FR: {
    label: "Contact",
    line1: "Construisons",
    line2: "ensemble.",
    sub: "Un projet en tête, une mission freelance ou une simple question ? Écrivez-moi — je réponds sous 24h.",
    wa: "Me contacter sur WhatsApp",
    waNum: "https://wa.me/2290166374586?text=Bonjour%20Dieudonn%C3%A9%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20souhaite%20discuter%20d%27un%20projet%20!",
    email: "houndagnondieudonne4@gmail.com",
    available: "Disponible pour de nouveaux projets",
    fields: { fn: "Votre Nom", em: "Adresse Email", type: "Quel est votre besoin ?", msg: "Décrivez votre projet en quelques mots...", send: "Envoyer le message", sending: "Envoi en cours…" },
    options: ["Landing Page", "Application Web", "Refonte UI/UX", "Audit Performance", "Autre"],
    ok: "Message envoyé !", okSub: "Je vous réponds sous 24 heures.", okBtn: "Envoyer un autre",
    err: "Une erreur est survenue. Réessayez.",
  },
};

export default function Contact() {
  const [status, setStatus] = useState("");
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
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="bg-white py-32 px-6 md:px-12 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto">

        {/* <div className="mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">
            // {t.label}
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-5xl md:text-5xl font-bold text-black leading-[1.05] tracking-tight"
              >
                {t.line1} <span className="text-black/30 font-medium">{t.line2}</span>
              </h2>
              <p className="text-black/50 text-base md:text-lg leading-relaxed max-w-md font-normal">
                {t.sub}
              </p>
            </div>

            <div className="inline-flex items-center gap-3 bg-neutral-50 border border-black/[0.04] px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/30 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-black/70 text-xs font-bold tracking-tight">{t.available}</span>
            </div>

            <div className="pt-6 border-t border-black/[0.05] space-y-4 max-w-sm">
              <a
                href={t.waNum}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between text-sm font-bold text-black hover:text-black/60 transition-colors py-2"
              >
                <span className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-black/40" />
                  {t.wa}
                </span>
                <ArrowUpRight size={14} className="text-black/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${t.email}`}
                className="group flex items-center justify-between text-sm font-bold text-black hover:text-black/60 transition-colors py-2"
              >
                <span className="flex items-center gap-3">
                  <Mail size={16} className="text-black/40" />
                  {t.email}
                </span>
                <ArrowUpRight size={14} className="text-black/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-6 pt-4 text-black/30">
                <a href="https://www.linkedin.com/in/dieudonné-houndagnon-093387250" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/rolnelh" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FBFBFB] border border-black/[0.03] rounded-3xl p-8 md:p-12 shadow-sm shadow-black/[0.01]">
            {status === "ok" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={24} className="text-emerald-600" />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif" }} className="text-black text-2xl font-bold mb-2">{t.ok}</h3>
                <p className="text-black/40 text-sm mb-8">{t.okSub}</p>
                <button
                  onClick={() => setStatus("")}
                  className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-sm"
                >
                  {t.okBtn}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div className="flex flex-col gap-2">
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black outline-none focus:border-black transition-colors placeholder:text-black/20 font-medium"
                      placeholder={t.fields.fn}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black outline-none focus:border-black transition-colors placeholder:text-black/20 font-medium"
                      placeholder={t.fields.em}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <select
                    name="project_type"
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black/40 focus:text-black outline-none focus:border-black transition-colors appearance-none cursor-pointer font-medium"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>{t.fields.type}</option>
                    {t.options.map((o) => (
                      <option key={o} value={o} className="text-black bg-white">{o}</option>
                    ))}
                  </select>
                  <div className="absolute right-2 bottom-4 pointer-events-none text-black/20 text-[10px]">▼</div>
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    name="message"
                    rows={3}
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 text-sm text-black outline-none focus:border-black transition-colors resize-none placeholder:text-black/20 font-medium leading-relaxed"
                    placeholder={t.fields.msg}
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ gap: "20px" }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-900 transition-all disabled:opacity-40"
                  >
                    <span>{status === "sending" ? t.fields.sending : t.fields.send}</span>
                    <Send size={12} />
                  </motion.button>
                </div>

                {status === "err" && (
                  <p className="text-xs font-bold text-red-500 tracking-tight mt-2">{t.err}</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {

  EN: {

    label: "Contact",

    line1: "Let's build",

    line2: "something.",

    sub: "A project in mind? A quick question? Write to me — I respond within 24h.",

    wa: "Chat on WhatsApp",

    waNum: "https://wa.me/22901663745865",

    email: "houndagnondieudonne4@gmail.com",

    available: "Available for new projects",

    remote: "Remote · Worldwide · GMT+1",

    fields: { fn: "First Name", ln: "Last Name", em: "Email", type: "Project type", msg: "Tell me about your project...", send: "Send", sending: "Sending…" },

    options: ["Landing Page", "Web Application", "UI/UX Redesign", "Performance Audit", "Other"],

    ok: "Message sent!", okSub: "I'll get back to you within 24 hours.", okBtn: "Send another",

    err: "Something went wrong. Try again.",

  },

  FR: {

    label: "Contact",

    line1: "Construisons",

    line2: "ensemble.",

    sub: "Un projet ? Une question ? Écrivez-moi — je réponds sous 24h.",

    wa: "Me contacter sur WhatsApp",

    waNum: "https://wa.me/22901663745865",

    email: "houndagnondieudonne4@gmail.com",

    available: "Disponible pour de nouveaux projets",

    remote: "Remote · Monde entier · GMT+1",

    fields: { fn: "Prénom", ln: "Nom", em: "Email", type: "Type de projet", msg: "Décrivez votre projet...", send: "Envoyer", sending: "Envoi…" },

    options: ["Landing Page", "Application Web", "Refonte UI/UX", "Audit Performance", "Autre"],

    ok: "Message envoyé !", okSub: "Je vous réponds sous 24 heures.", okBtn: "Envoyer un autre",

    err: "Une erreur est survenue. Réessayez.",

  },

};
export default function Contact() {
  const [status, setStatus] = useState("");
  const { language } = useLanguage();
  const t = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xojybgwq", {
        method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("ok"); form.reset(); } else setStatus("err");
    } catch { setStatus("err"); }
  };

  return (
    <section id="contact" className="bg-white py-18 px-6 md:px-10 border-t border-black/[0.03]">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col gap-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-black/30 text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            {t.label}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-5xl md:text-6xl font-normal text-black leading-[0.9] tracking-tighter mb-8">
                  {t.line1}<br />
                  <span className="text-blue-500 font-light">{t.line2}</span>
                </h2>
                <p className="text-black/40 text-lg leading-relaxed max-w-md font-medium">
                  {t.sub}
                </p>
              </div>

              <div className="mt-16 flex flex-col gap-6">

                <div className="flex items-center gap-4 py-5 border-b border-black/[0.05]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500/20 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-black/60 text-sm font-bold tracking-tight">{t.available}</span>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <a href="#" className="text-black/20 hover:text-black transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="text-black/20 hover:text-black transition-colors"><Github size={20} /></a>
                  <a href={`mailto:${t.email}`} className="text-black/20 hover:text-black transition-colors"><Mail size={20} /></a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#fbfbfb] rounded-[2rem] p-8 md:p-14 border border-black/[0.03]">
              {status === "ok" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif" }} className="text-black text-3xl font-bold mb-3">{t.ok}</h3>
                  <p className="text-black/40 mb-10">{t.okSub}</p>
                  <button onClick={() => setStatus("")} className="bg-black text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black/80 transition-all">
                    {t.okBtn}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-xl space-y-8">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div className="group flex flex-col">
                      <input
                        name="first_name"
                        required
                        className="bg-transparent border-b border-black/10 py-2 text-sm text-black outline-none focus:border-black transition-colors placeholder:text-black/20"
                        placeholder={t.fields.fn}
                      />
                    </div>
                    <div className="group flex flex-col">
                      <input
                        name="email"
                        type="email"
                        required
                        className="bg-transparent border-b border-black/10 py-2 text-sm text-black outline-none focus:border-black transition-colors placeholder:text-black/20"
                        placeholder={t.fields.em}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <select
                      name="project_type"
                      className="w-full bg-transparent border-b border-black/10 py-2 text-sm text-black/40 outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">{t.fields.type}</option>
                      {t.options.map((o) => <option key={o} value={o} className="text-black">{o}</option>)}
                    </select>
                  </div>

                  <div className="group">
                    <textarea
                      name="message"
                      rows={1}
                      required
                      className="w-full bg-transparent border-b border-black/10 py-2 text-sm text-black outline-none focus:border-black transition-colors resize-none placeholder:text-black/20"
                      placeholder={t.fields.msg}
                    />
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={status === "sending"}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-black font-bold text-[10px] uppercase tracking-[0.3em] pt-4 group disabled:opacity-30"
                  >
                    <span className="border-b-2 border-black pb-1">
                      {status === "sending" ? t.fields.sending : t.fields.send}
                    </span>
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
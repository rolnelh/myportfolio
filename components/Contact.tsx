"use client";
import React, { useState } from "react";
import { Send, CheckCircle, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

interface FormOption { v: string; l: string; }

const content = {
  EN: {
    label: "Contact",
    title1: "Let's build",
    title2: "something great.",
    sub: "A project in mind? A quick question? Write to me — I respond within 24h.",
    whatsapp: "Chat on WhatsApp",
    waNumber: "https://wa.me/22901663745865",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      selectDefault: "Project type",
      options: [
        { v: "landing", l: "Landing Page" },
        { v: "webapp", l: "Web App / Dashboard" },
        { v: "redesign", l: "UI/UX Redesign" },
        { v: "audit", l: "Performance Audit" },
        { v: "other", l: "Other" },
      ],
      message: "Tell me about your project...",
      send: "Send",
      sending: "Sending…",
    },
    successTitle: "Message sent!",
    successSub: "I'll get back to you within 24 hours.",
    successBtn: "Send another",
    errorMsg: "Something went wrong. Try again.",
    availability: "Available for new projects",
    remote: "Remote · Worldwide · GMT+1",
  },
  FR: {
    label: "Contact",
    title1: "Construisons",
    title2: "quelque chose ensemble.",
    sub: "Un projet ? Une question ? Écrivez-moi — je réponds sous 24h.",
    whatsapp: "Me contacter sur WhatsApp",
    waNumber: "https://wa.me/22901663745865",
    form: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      selectDefault: "Type de projet",
      options: [
        { v: "landing", l: "Landing Page" },
        { v: "webapp", l: "Application Web / Dashboard" },
        { v: "redesign", l: "Refonte UI/UX" },
        { v: "audit", l: "Audit Performance" },
        { v: "other", l: "Autre" },
      ],
      message: "Décrivez votre projet...",
      send: "Envoyer",
      sending: "Envoi…",
    },
    successTitle: "Message envoyé !",
    successSub: "Je vous réponds sous 24 heures.",
    successBtn: "Envoyer un autre",
    errorMsg: "Une erreur est survenue. Réessayez.",
    availability: "Disponible pour de nouveaux projets",
    remote: "Remote · Monde entier · GMT+1",
  },
};

const Contact = () => {
  const [status, setStatus] = useState("");
  const { language } = useLanguage();
  const t = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xojybgwq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="bg-[#050505] py-18 px-4 rounded-4xl">
      <div className="max-w-5xl mx-auto">

        <div className="mb-6">
          <p className="text-white text-xs font-bold uppercase tracking-widest mb-5">
            {t.label}
          </p>
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-5xl md:text-6xl font-bold leading-[0.92] tracking-tight mb-6"
          >
            <span className="text-white">{t.title1}</span><br />
            <span className="text-white/20">{t.title2}</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md leading-relaxed">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2 flex flex-col gap-5">

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-white text-sm font-semibold">{t.availability}</span>
              </div>
              <p className="text-white text-xs font-medium">{t.remote}</p>
            </div>

            <a
              href={t.waNumber}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white text-black font-bold py-5 px-6 rounded-2xl hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <div className="flex items-center gap-3">

                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-base">{t.whatsapp}</span>
              </div>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="mailto:houndagnondieudonne4@gmail.com"
              className="flex items-center justify-between bg-white/[0.03] border border-white/5 text-white/50 hover:text-white hover:border-white/20 font-medium py-4 px-6 rounded-2xl transition-all duration-200 text-sm group"
            >
              <span>houndagnondieudonne4@gmail.com</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-2" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-white hover:text-white hover:border-white/20 transition-all duration-200 group"
              >
                <Linkedin size={16} />
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>

              <a
                href="https://github.com/rolnelh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-white hover:text-white hover:border-white/20 transition-all duration-200 group"
              >
                <Github size={16} />
                <span className="text-sm font-semibold">GitHub</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white/[0.03] border border-white/5 rounded-2xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center gap-5">
                <CheckCircle size={52} className="text-green-500" />
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif" }} className="text-2xl font-bold text-white mb-2">
                    {t.successTitle}
                  </h3>
                  <p className="text-white/40">{t.successSub}</p>
                </div>
                <button
                  onClick={() => setStatus("")}
                  className="text-white hover:text-white text-sm font-medium border-b border-white/20 pb-0.5 transition-colors"
                >
                  {t.successBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">{t.form.firstName}</label>
                    <input
                      name="first_name"
                      placeholder="Dieudonné"
                      required
                      className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-colors text-white placeholder-white/20 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white text-xs font-bold uppercase tracking-wider">{t.form.lastName}</label>
                    <input
                      name="last_name"
                      placeholder="Houndagnon"
                      required
                      className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-colors text-white placeholder-white/20 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-xs font-bold uppercase tracking-wider">{t.form.email}</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    required
                    className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-colors text-white placeholder-white/20 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-xs font-bold uppercase tracking-wider">{t.form.selectDefault}</label>
                  <select
                    name="project_type"
                    defaultValue=""
                    className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-colors appearance-none text-white/60 text-sm cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0d0d0d]">—</option>
                    {t.form.options.map((opt: FormOption) => (
                      <option key={opt.v} value={opt.v} className="bg-[#0d0d0d] text-white">{opt.l}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-xs font-bold uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    placeholder={t.form.message}
                    rows={4}
                    required
                    className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-colors resize-none text-white placeholder-white/20 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="self-end flex items-center gap-2 bg-white text-black font-bold py-3 px-5 rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-40 text-sm"
                >
                  {status === "sending" ? t.form.sending : t.form.send}
                  <Send size={15} />
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-right">{t.errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
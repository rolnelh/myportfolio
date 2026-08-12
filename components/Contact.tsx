"use client";
import React, { useState } from "react";
import { Github, Linkedin, Send, Mail, Copy, Check, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

const content = {
  EN: {
    badge: "Get In Touch",
    title: "Let's create something extraordinary together",
    sub: "Fill out the form or reach out directly. I usually respond within 24 hours.",
    form: {
      title: "Send a message",
      name: "Your Name",
      namePlaceholder: "Enter your full name",
      email: "Your Email",
      emailPlaceholder: "Enter your email address",
      service: "Service needed",
      servicesList: ["Web App", "Mobile App", "UI/UX Design", "Full-Stack Dev"],
      message: "Project Details",
      messagePlaceholder: "Describe your goals, timeline, or scope...",
      submit: "Send message",
      success: "Message sent successfully! I'll get back to you soon.",
    },
    direct: {
      desc: "Prefer sending an email directly? Copy my address or open your mail app.",
      emailLabel: "Email Address",
      copyBtn: "Copy Email",
      copied: "Copied!",
      emailBtn: "Open Mail App",
      status: "Available for new projects",
    },
    profile: {
      name: "Dieudonné Houndagnon",
      bio: "I build your custom web and mobile applications to deliver seamless experiences and accelerate your growth.",
    }
  },
  FR: {
    badge: "Contactez-moi",
    title: "Créons ensemble quelque chose d'extraordinaire",
    sub: "Remplissez le formulaire ou contactez-moi directement. Je réponds généralement sous 24h.",
    form: {
      title: "Envoyer un message",
      name: "Votre Nom",
      namePlaceholder: "Entrez votre nom complet",
      email: "Votre Email",
      emailPlaceholder: "Entrez votre adresse email",
      service: "Service souhaité",
      servicesList: ["App Web", "App Mobile", "UI/UX Design", "Dev Full-Stack"],
      message: "Détails du projet",
      messagePlaceholder: "Décrivez vos objectifs, votre calendrier ou vos besoins...",
      submit: "Envoyer le message",
      success: "Message envoyé avec succès ! Je vous recontacterai rapidement.",
    },
    direct: {
      desc: "Vous préférez envoyer un email directement ? Copiez mon adresse ou ouvrez votre client mail.",
      emailLabel: "Adresse Email",
      copyBtn: "Copier l'email",
      copied: "Copié !",
      emailBtn: "Ouvrir l'application mail",
      status: "Disponible pour de nouveaux projets",
    },
    profile: {
      name: "Dieudonné Houndagnon",
      bio: "Je crée votre application web et mobile sur-mesure pour offrir des expériences fluides et accélérer votre croissance.",
    }
  },
};

const socialLinks = {
  github: "https://github.com/rolnelh",
  linkedin: "https://www.linkedin.com/in/dieudonn%C3%A9-houndagnon-093387250",
  email: "houndagnondieudonne4@gmail.com",
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = content[language === "EN" ? "EN" : "FR"];

  const [selectedService, setSelectedService] = useState("App Web");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${socialLinks.email}?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AEmail: ${formData.email}%0AService: ${selectedService}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-28 px-6 bg-slate-50/60 text-slate-900 transition-colors duration-300" id="contact">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
         
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* SECTION EN DEUX DIV CÔTE À CÔTE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* DIV 1 : Le Formulaire (7 colonnes sur 12) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                {t.form.title}
              </h3>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">{language === "EN" ? "Thank you!" : "Merci !"}</h4>
                <p className="text-slate-600 text-sm">{t.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.form.name}</label>
                    <input
                      type="text"
                      required
                      placeholder={t.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4.5 py-3 text-slate-900 text-sm focus:outline-none focus:border-[#ff2a4d] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.form.email}</label>
                    <input
                      type="email"
                      required
                      placeholder={t.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4.5 py-3 text-slate-900 text-sm focus:outline-none focus:border-[#ff2a4d] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.form.service}</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {t.form.servicesList.map((service, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedService(service)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${selectedService === service
                            ? "bg-[#ff2a4d] text-white border-[#ff2a4d] shadow-md shadow-red-500/20"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.form.message}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 text-sm focus:outline-none focus:border-[#ff2a4d] transition-colors resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 w-full bg-[#ff2a4d] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-red-500/20 hover:bg-[#e02041] transition-all duration-300 hover:scale-[1.01]"
                  >
                    <span>{t.form.submit}</span>
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* DIV 2 : Email Direct & Profil (5 colonnes sur 12) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Carte Contact Direct */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-[#ff2a4d]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t.direct.status}
                </div>

                <div>
                  {/* <h3 className="text-xl font-bold tracking-tight mb-2">
                    {t.direct.title}
                  </h3> */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t.direct.desc}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">{t.direct.emailLabel}</span>
                  <div className="font-mono text-white text-sm font-semibold break-all">
                    {socialLinks.email}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 px-4 py-3 rounded-full font-bold text-xs transition-all"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copied ? t.direct.copied : t.direct.copyBtn}</span>
                  </button>

                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#ff2a4d] hover:bg-[#e02041] text-white px-4 py-3 rounded-full font-bold text-xs shadow-lg shadow-red-500/20 transition-all"
                  >
                    <Mail size={14} />
                    <span>{t.direct.emailBtn}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Carte Profil & Réseaux sociaux */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <img
                    src="/images/cmp.jpeg"
                    alt="Dieudonné Houndagnon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">
                    {t.profile.name}
                  </h4>
                  <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">
                    {t.profile.bio}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#ff2a4d] hover:text-white hover:border-[#ff2a4d] transition-all"
                >
                  <Github size={16} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#ff2a4d] hover:text-white hover:border-[#ff2a4d] transition-all"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
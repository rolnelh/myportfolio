"use client";
import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Calendar, Clock, Globe2 } from "lucide-react";
import { useLanguage } from "../components/Languagecontext";

interface FormOption {
    v: string;
    l: string;
}

interface FormContent {
    firstName: string;
    lastName: string;
    email: string;
    selectDefault: string;
    options: FormOption[];
    message: string;
    send: string;
    sending: string;
}

interface LangContent {
    label: string;
    heading: string;
    headingAccent: string;
    headingSuffix: string;
    sub: string;
    remote: string;
    timezone: string;
    callBtn: string;
    callSub: string;
    form: FormContent;
    successTitle: string;
    successSub: string;
    successBtn: string;
    errorMsg: string;
    emailLabel: string;
    locationLabel: string;
}

const content: Record<"EN" | "FR", LangContent> = {
    EN: {
        label: "Get in Touch",
        heading: "Share your",
        headingAccent: "ideas",
        headingSuffix: "with me.",
        sub: "Whether you have a project in mind or want to explore possibilities, I'll build the right solution for you.",
        remote: "🌍 Working remotely with clients worldwide — async-friendly, responsive within 24h.",
        timezone: "GMT+1 (Cotonou) — available for calls Mon–Fri, 9am–6pm",
        callBtn: "Book a free 30-min call",
        callSub: "No commitment · Zoom or Google Meet",
        form: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email Address",
            selectDefault: "Select project type",
            options: [
                { v: "web_app", l: "Web Application (Front-end)" },
                { v: "redesign", l: "Website Redesign (UI/UX)" },
                { v: "mobile", l: "Mobile App (React Native)" },
                { v: "performance", l: "Performance Audit" },
                { v: "other", l: "Other Inquiry" },
            ],
            message: "Tell me about your project",
            send: "Send Message",
            sending: "Sending…",
        },
        successTitle: "Message sent!",
        successSub: "I'll get back to you within 24 hours.",
        successBtn: "Send another message",
        errorMsg: "Something went wrong. Please try again.",
        emailLabel: "Email",
        locationLabel: "Location",
    },
    FR: {
        label: "Me contacter",
        heading: "Partagez vos",
        headingAccent: "idées",
        headingSuffix: "avec moi.",
        sub: "Que vous ayez un projet ou souhaitiez explorer des possibilités, je construirai la bonne solution pour vous.",
        remote: "🌍 Travail 100% remote avec des clients du monde entier — async-friendly, réponse sous 24h.",
        timezone: "GMT+1 (Cotonou) — disponible Lun–Ven, 9h–18h",
        callBtn: "Réserver un appel gratuit de 30 min",
        callSub: "Sans engagement · Zoom ou Google Meet",
        form: {
            firstName: "Prénom",
            lastName: "Nom",
            email: "Adresse email",
            selectDefault: "Type de projet",
            options: [
                { v: "web_app", l: "Application Web (Front-end)" },
                { v: "redesign", l: "Refonte de site (UI/UX)" },
                { v: "mobile", l: "Application Mobile (React Native)" },
                { v: "performance", l: "Audit de performance" },
                { v: "other", l: "Autre demande" },
            ],
            message: "Décrivez votre projet",
            send: "Envoyer le message",
            sending: "Envoi en cours…",
        },
        successTitle: "Message envoyé !",
        successSub: "Je vous réponds sous 24 heures.",
        successBtn: "Envoyer un autre message",
        errorMsg: "Une erreur est survenue. Veuillez réessayer.",
        emailLabel: "Email",
        locationLabel: "Localisation",
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
            const response = await fetch("https://formspree.io/f/xojybgwq", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="bg-black text-white py-24 px-6 mt-20 rounded-2xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">
                            {t.label}
                        </span>
                    </div>
                    <h2
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        {t.heading} <span className="text-gray-500">{t.headingAccent}</span> {t.headingSuffix}
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">{t.sub}</p>

                    {/* Remote reassurance */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-8">
                        <p className="text-gray-300 text-sm leading-relaxed">{t.remote}</p>
                        <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
                            <Clock size={12} />
                            <span>{t.timezone}</span>
                        </div>
                    </div>

                    {/* Calendly CTA */}
                    <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all w-full md:w-fit mb-2 justify-center md:justify-start"
                    >
                        <Calendar size={18} />
                        {t.callBtn}
                    </a>
                    <p className="text-gray-600 text-xs mb-10">{t.callSub}</p>

                    {/* Contact info */}
                    <div className="space-y-5">
                        {[
                            { icon: <Mail size={16} className="text-gray-400" />, label: t.emailLabel, value: "houndagnondieudonne4@gmail.com", href: "mailto:houndagnondieudonne4@gmail.com" },
                            { icon: <MapPin size={16} className="text-gray-400" />, label: t.locationLabel, value: "Cotonou, Bénin 🇧🇯", href: null },
                            { icon: <Globe2 size={16} className="text-gray-400" />, label: "Availability", value: "Worldwide · Remote only", href: null },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-0.5">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">{item.value}</a>
                                    ) : (
                                        <p className="text-gray-300 text-sm">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Form */}
                <div className="relative">
                    {status === "success" ? (
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                            <CheckCircle size={56} className="text-green-500 mb-6" />
                            <h3 style={{ fontFamily: "'Syne', sans-serif" }} className="text-3xl font-bold mb-3">
                                {t.successTitle}
                            </h3>
                            <p className="text-gray-400 mb-8">{t.successSub}</p>
                            <button onClick={() => setStatus("")} className="text-white border-b border-white pb-1 font-bold hover:text-gray-400 transition-colors">
                                {t.successBtn}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input name="first_name" placeholder={t.form.firstName} required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors placeholder-gray-600" />
                                <input name="last_name" placeholder={t.form.lastName} required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors placeholder-gray-600" />
                            </div>
                            <input name="email" type="email" placeholder={t.form.email} required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors placeholder-gray-600" />
                            <select name="project_type" defaultValue="" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors appearance-none text-gray-400">
                                <option value="" disabled className="text-gray-700">{t.form.selectDefault}</option>
                                {t.form.options.map((opt: FormOption) => (
                                    <option key={opt.v} value={opt.v} className="text-gray-700">{opt.l}</option>
                                ))}
                            </select>
                            <textarea name="message" placeholder={t.form.message} rows={4} required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors resize-none placeholder-gray-600" />
                            <button type="submit" disabled={status === "sending"} className="w-full md:w-fit flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-12 rounded-xl hover:bg-gray-200 transition-all ml-auto disabled:opacity-50">
                                {status === "sending" ? t.form.sending : t.form.send}
                                <Send size={16} />
                            </button>
                            {status === "error" && <p className="text-red-400 text-sm text-right">{t.errorMsg}</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
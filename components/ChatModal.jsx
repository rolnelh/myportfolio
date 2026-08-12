"use client";
import React, { useRef, useEffect, useState } from "react";
import { X, Send, Sparkles, Bot, User, Maximize2, Minimize2 } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { useLanguage } from "./Languagecontext";

const content = {
    EN: {
        title: "Dieudonné's AI Agent",
        status: "Online",
        greeting: "Hey, I'm Dieudonné's Assistant!",
        subtitle: "Ask me about my experience, projects, tech stack, or anything else.",
        placeholder: "Type a message...",
    },
    FR: {
        title: "Agent IA de Dieudonné",
        status: "En ligne",
        greeting: "Salut, c'est l'assistant de Dieudonné !",
        subtitle: "Posez-moi des questions sur mon expérience, mes projets, ma stack ou autre.",
        placeholder: "Écrivez un message...",
    },
};

export default function ChatModal({ isOpen, onClose }) {
    const { language } = useLanguage();
    const t = content[language === "EN" ? "EN" : "FR"];
    const [isExpanded, setIsExpanded] = useState(false);

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if (!isOpen) return null;

    return (
        <div className={`fixed z-50 transition-all duration-300 flex flex-col bg-white shadow-2xl border border-slate-200/80 overflow-hidden ${isExpanded
                ? "inset-4 sm:inset-10 rounded-3xl"
                : "bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[400px] h-[380px] rounded-3xl"
            }`}>

            {/* En-tête */}
            <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-[#ff2a4d]/20 text-[#ff2a4d] flex items-center justify-center font-bold text-xs border border-[#ff2a4d]/30">
                            DH
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
                    </div>
                    <div>
                        <h3 className="text-xs sm:text-sm font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                            {t.title}
                        </h3>
                        <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {t.status}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-7 h-7 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all hidden sm:flex"
                    >
                        {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                    </button>
                    <button
                        onClick={onClose}
                        className="w-7 h-7 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Corps de la conversation */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
                {messages.length === 0 && (
                    <div className="text-center py-10 space-y-3">
                        <div className="w-16 h-16 rounded-full bg-[#ff2a4d]/10 text-[#ff2a4d] flex items-center justify-center mx-auto border-2 border-[#ff2a4d]/30 shadow-lg shadow-red-500/10">
                            <Sparkles size={28} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                                {t.greeting}
                            </h4>
                            <p className="text-xs text-slate-500 max-w-[280px] mx-auto leading-relaxed">
                                {t.subtitle}
                            </p>
                        </div>
                    </div>
                )}

                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex items-start gap-2.5 ${m.role === "user" ? "flex-row-reverse" : "flex-row"
                            }`}
                    >
                        <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${m.role === "user"
                                    ? "bg-slate-900 text-white text-[10px] font-bold"
                                    : "bg-[#ff2a4d] text-white shadow-md shadow-red-500/20"
                                }`}
                        >
                            {m.role === "user" ? <User size={13} /> : <Bot size={13} />}
                        </div>

                        <div
                            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${m.role === "user"
                                    ? "bg-slate-900 text-white rounded-tr-none"
                                    : "bg-white text-slate-800 border border-slate-200/80 shadow-sm rounded-tl-none"
                                }`}
                        >
                            {m.content}
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#ff2a4d] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Bot size={13} />
                        </div>
                        <div className="bg-white text-slate-500 border border-slate-200/80 px-4 py-2.5 rounded-2xl rounded-tl-none text-xs flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a4d] animate-bounce" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a4d] animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a4d] animate-bounce [animation-delay:0.4s]" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Barre de saisie */}
            <form onSubmit={handleSubmit} className="p-3.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder={t.placeholder}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#ff2a4d] transition-colors"
                />
                <button
                    type="submit"
                    disabled={isLoading || !input?.trim()}
                    className="w-10 h-10 rounded-full bg-[#ff2a4d] hover:bg-[#e02041] disabled:opacity-50 text-white flex items-center justify-center transition-all shadow-md shadow-red-500/20 shrink-0"
                >
                    <Send size={15} />
                </button>
            </form>

        </div>
    );
}
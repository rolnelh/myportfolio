"use client";
import React from "react";
import { ChevronDown } from "lucide-react"; // On retire Bot car on utilise une image
// Note : Si vous utilisez Next.js, vous pouvez importer Image : import Image from 'next/image';

export default function Widget({ onOpenChat, isOpen }) {
    return (
        <div className="fixed bottom-4 right-4 sm:right-6 z-50 group">
            <button
                onClick={onOpenChat}
                className="bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-900/10 rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff2a4d]/20 hover:border-[#ff2a4d]/30 active:scale-95 group"
                title="Ouvrir l'assistant"
            >

                <div className="relative transition-transform duration-300 group-hover:-translate-y-0.5">
                    {/* --- MODIFICATION ICI --- */}
                    <img
                        src="/images/cmp.jpeg"
                        alt="Dieudonné"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-inner ring-2 ring-[#ff2a4d]/20"
                    />
                    {/* ------------------------ */}

                    <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>

                <div className={`absolute -bottom-1 bg-white p-0.5 rounded-full border border-slate-200 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <ChevronDown
                        size={14}
                        className={`text-slate-500 transition-transform duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                </div>
            </button>

            {/* Tooltip */}
            <span className="absolute -top-10 right-1/2 translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                Besoin d'aide ?
            </span>
        </div>
    );
}
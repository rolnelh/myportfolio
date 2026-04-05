"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section className="bg-black text-white py-24 px-6 mt-20 rounded-t-[3rem]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                <div>
                    <h2 className="font-syne text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Share your ideas with me
                    </h2>
                    <p className="font-inter text-gray-400 text-lg mb-12 max-w-md">
                        Whether you have a project in mind or want to learn more, I am here to listen and support you.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Mail size={20} className="text-gray-300" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                                <a
                                    href="mailto:houndagnondieudonne4@gmail.com"
                                    className="font-inter text-lg hover:text-blue-600 transition-colors"
                                >
                                    houndagnondieudonne4@gmail.com
                                </a>                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Phone size={20} className="text-gray-300" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Téléphone</p>
                                <p className="font-inter text-lg">(229) 0166374586</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <MapPin size={20} className="text-gray-300" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Adresse</p>
                                <p className="font-inter text-lg">Cotonou, Bénin</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative">
                            <input type="text" placeholder="Prénom" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors" />
                        </div>
                        <div className="relative">
                            <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-color" />
                        </div>
                    </div>

                    <div className="relative">
                        <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors" />
                    </div>

                    <div className="relative">
                        <select className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors appearance-none text-gray-400">
                            <option>Sélectionner un type de projet</option>
                            <option>Application Web</option>
                            <option>Application Mobile</option>
                            <option>UI/UX Design</option>
                        </select>
                    </div>

                    <div className="relative">
                        <textarea placeholder="Détails de votre projet" rows={4} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors resize-none" />
                    </div>

                    <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-white/30 transition-colors cursor-pointer">
                        <p className="font-inter text-sm text-gray-400">
                            Joindre un fichier (PDF, DOC, DOCX) Facultatif
                        </p>
                        <p className="font-inter font-bold mt-2">Cliquez ou glissez-déposez votre fichier ici</p>
                    </div>

                    <button className="w-full md:w-fit flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-12 rounded-xl hover:bg-gray-200 transition-all ml-auto">
                        Envoyer <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
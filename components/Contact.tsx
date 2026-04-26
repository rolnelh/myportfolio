"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xojybgwq", {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus("success");
                form.reset(); 
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="bg-black text-white py-24 px-6 mt-20 rounded-2xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                <div>
                    <h2 className="font-syne text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Share your <span className="text-gray-500">ideas</span> with me.
                    </h2>
                    <p className="font-inter text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                        Whether you have a project in mind or want to explore new possibilities, I'm here to build high-performance solutions for you.
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
                                    className="font-inter text-lg hover:text-white transition-colors"
                                >
                                    houndagnondieudonne4@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Phone size={20} className="text-gray-300" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                                <p className="font-inter text-lg">(229) 0166374586</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <MapPin size={20} className="text-gray-300" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Location</p>
                                <p className="font-inter text-lg">Cotonou, Benin</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {status === "success" ? (
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                            <CheckCircle size={60} className="text-green-500 mb-6" />
                            <h3 className="font-syne text-3xl font-bold mb-4">Message sent!</h3>
                            <p className="text-gray-400 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                            <button
                                onClick={() => setStatus("")}
                                className="text-white border-b border-white pb-1 font-bold hover:text-gray-400 transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <input name="first_name" placeholder="First Name" required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors" />
                                <input name="last_name" placeholder="Last Name" required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors" />
                            </div>

                            <input name="email" type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors" />

                            <select
                                name="project_type"
                                className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors appearance-none text-gray-400 font-inter"
                            >
                                <option value="" disabled selected className="text-gray-700">Select project type</option>
                                <option value="web_app" className="text-gray-700">Web Application (Front-end)</option>
                                <option value="redesign" className="text-gray-700">Website Redesign (UI/UX Update)</option>
                                <option value="new_sections" className="text-gray-700">Adding New Features / Sections</option>
                                <option value="responsive" className="text-gray-700">Responsive Design Adaptation</option>
                                <option value="performance" className="text-gray-700">Speed & Performance Optimization</option>
                                <option value="other" className="text-gray-700">Other Inquiry</option>
                            </select>

                            <textarea name="message" placeholder="Project Details" rows={4} required className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors resize-none" />

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full md:w-fit flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-12 rounded-xl hover:bg-gray-200 transition-all ml-auto disabled:opacity-50"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"} <Send size={18} />
                            </button>

                            {status === "error" && (
                                <p className="text-red-500 text-sm mt-4 text-right">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section className="bg-black text-white py-24 px-6 mt-20 rounded-t-[3rem]">
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

                <form
                    action="https://formspree.io/f/xojybgwq"
                    method="POST"
                    className="space-y-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors font-inter"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors font-inter"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors font-inter"
                        />
                    </div>

                    <div className="relative">
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
                    </div>

                    <div className="relative">
                        <textarea
                            name="message"
                            placeholder="Project Details"
                            rows={4}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors resize-none font-inter"
                        />
                    </div>

                    <button
                        type="submit"
                        aria-label="Submit contact form and send message"
                        className="w-full md:w-fit flex items-center justify-center gap-3 bg-white text-black font-bold py-4 px-12 rounded-xl hover:bg-gray-200 transition-all ml-auto cursor-pointer"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
"use client";

import { useState } from "react";
import { LanguageProvider } from "../components/Languagecontext";
import Navbar from "@/components/layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Widget from "@/components/Widget";
import ChatModal from "@/components/ChatModal";
import AuditPopup from "@/components/AuditPopup";
import Footer from "@/components/Footer";
import Resources from "@/components/Resources";
import Expertise from "@/components/Expertise";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#F4F5F7] antialiased py-4 sm:py-6 px-3 sm:px-6">

        {/* Grand bloc arrondi englobant la Navbar et le Hero */}
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/70 shadow-xl overflow-hidden mb-12">
          <Navbar />
          <Hero />
        </div>

        {/* Sections principales de la page */}
        <div className="space-y-12">
          <About />
          <Projects />
          <Services />
          <Expertise />
          <Contact />
          <Resources />
          <Footer />
        </div>

        <Widget />

        <ChatModal
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />

        <AuditPopup />

      </main>
    </LanguageProvider>
  );
}
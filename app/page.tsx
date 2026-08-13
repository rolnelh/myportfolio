"use client";

import { LanguageProvider } from "../components/Languagecontext";
import Navbar from "@/components/layout/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
// import TechStack from "@/components/TechStack";
import Widget from "@/components/Widget";
import ChatModal from "@/components/ChatModal";
import AuditPopup from "@/components/AuditPopup";
import { useState } from "react";
// import Footer from "../components/Footer";
export default function Home() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <main className="antialiased">
        <Navbar />
        <div className="pt-16">
          <Hero />
          <Services />
          <About />
          {/* <TechStack /> */}
          <Projects />
          {/* <Testimonials /> */}
          <Contact />
          {/* <Footer /> */}

          {/* 2. On transmet la fonction qui met l'état à true lorsqu'on clique */}
          <Widget />

          {/* Le modal de chat */}
          <ChatModal
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />

           <AuditPopup /> 
        </div>
      </main>
    </LanguageProvider>
  );
}
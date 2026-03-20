import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Page() {
  return (

    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <Hero />
      <TechStack />
      <Projects />
      <Services />
      <Contact />


    </main>
  );
}
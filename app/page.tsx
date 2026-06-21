import { LanguageProvider } from "../components/Languagecontext";
import Navbar from "@/components/layout/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Process from "@/components/Process";
// import Footer from "../components/Footer";
export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-[#000] text-white antialiased">
        <Navbar />
        <div className="pt-16">
          <Hero />
          <TechStack />
          <About />
          <Projects />
          <Services />
          <Testimonials />
          <Process />
          <Contact />
          {/* <Footer /> */}
        </div>
      </main>
    </LanguageProvider>
  );
}
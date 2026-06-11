import { LanguageProvider } from "../components/Languagecontext";
import Navbar from "@/components/layout/Navbar";
import Hero from "../components/Hero";
// import TechStack from "../components/TechStack";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import BlogSection from "../components/BlogSection"; 
export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white text-black antialiased">
        <Navbar />
        <div className="pt-16">
          <Hero />
          {/* <TechStack /> */}
          <About />
          <Projects />
          <Services />
          <Testimonials />
          {/* <BlogSection /> */}
          <Contact />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
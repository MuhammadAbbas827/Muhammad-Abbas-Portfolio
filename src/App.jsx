import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060A] text-white">
      <ScrollProgress />
      <Background />
      <Navbar />

      <AnimatePresence>
        {loading && (
          <motion.section
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-50 grid place-items-center bg-[#05060A]"
          >
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0F111A]/95 px-6 py-4 shadow-[0_25px_80px_rgba(255,132,49,0.18)] backdrop-blur-xl">
              <div className="h-4 w-4 animate-pulse rounded-full bg-orange-500" />
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Loading portfolio</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

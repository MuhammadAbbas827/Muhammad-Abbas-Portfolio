import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaArrowRight, FaDownload } from "react-icons/fa";

import IntroVideo from "../assets/videos/intro.mp4";

export default function Hero() {
  const typedRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "React Developer", "UI Designer", "Software Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    if (videoRef.current) {
      videoRef.current.muted = muted;
    }

    return () => typed.destroy();
  }, [muted]);

  const toggleSound = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused || videoRef.current.ended) {
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0;
      }
      videoRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-transparent pt-24">
      <div className="absolute left-[-120px] top-[-220px] h-[550px] w-[550px] rounded-full bg-orange-500/20 blur-[180px]" />
      <div className="absolute bottom-[-180px] right-[-90px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        <motion.div initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-500">
            Welcome To My Portfolio
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl">
            Muhammad
            <br />
            <span className="text-orange-500">Abbas</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 h-16 text-2xl font-semibold text-zinc-100 sm:text-3xl">
            <span ref={typedRef} />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Passionate full-stack developer focused on building modern, responsive, and scalable web applications and thoughtful UI systems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-3 rounded-2xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-[0_18px_45px_rgba(255,107,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600">
              View Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="/resume.pdf" download className="group flex items-center gap-3 rounded-2xl border border-zinc-700 bg-white/5 px-7 py-4 font-semibold text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/10">
              Download CV
              <FaDownload className="transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-black text-orange-500">20+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-500">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-black text-orange-500">10+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-500">Technologies</p>
            </div>
            <div>
              <p className="text-4xl font-black text-orange-500">1+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-500">Years of growth</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative z-10 flex items-center justify-center">
          <div className="absolute h-[480px] w-[480px] rounded-full bg-orange-500/20 blur-[170px]" />

          <div className="relative w-full max-w-[720px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <video
              ref={videoRef}
              src={IntroVideo}
              className="aspect-[16/10] h-full w-full object-cover"
              muted={muted}
              autoPlay
              playsInline
              preload="metadata"
              loop={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="absolute right-3 top-3 z-30 flex gap-2 rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur-xl">
              <button onClick={togglePlayPause} className="h-8 w-8 rounded-full bg-white/10 text-xs text-orange-500 transition hover:bg-white/20">
                {isPlaying ? "❚❚" : "▶"}
              </button>
              <button onClick={toggleSound} className="h-8 w-8 rounded-full bg-white/10 text-xs text-orange-500 transition hover:bg-white/20">
                {muted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
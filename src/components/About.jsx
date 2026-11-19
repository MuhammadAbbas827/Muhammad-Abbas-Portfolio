import { motion } from "framer-motion";
import Avatar from "../assets/images/avatar.jpeg";
import { aboutHighlights } from "../utils/content.jsx";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 -translate-x-6 -translate-y-6 rounded-[2rem] border border-orange-500/20 bg-orange-500/10 blur-3xl" />
            <img src={Avatar} alt="Muhammad Abbas" className="relative w-full max-w-[420px] rounded-[2rem] border border-white/10 object-cover shadow-[0_30px_90px_rgba(0,0,0,0.45)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">About Me</p>
            <h2 className="text-4xl font-black sm:text-5xl">Crafting thoughtful digital experiences.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I am Muhammad Abbas, a Frontend Developer focused on building premium, responsive, and interactive web applications with React, JavaScript, and modern design systems. I bring together performance, storytelling, and elegant interfaces to create experiences that feel effortless and memorable.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <p className="text-sm uppercase tracking-[0.26em] text-zinc-500">{item.title}</p>
                  <p className="mt-3 text-lg font-semibold text-zinc-100">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-orange-500 px-7 py-3 font-semibold transition hover:bg-orange-600">Let&apos;s Connect</a>
              <a href="#projects" className="rounded-full border border-white/10 px-7 py-3 font-semibold text-zinc-100 transition hover:border-orange-500 hover:text-orange-500">Explore Projects</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
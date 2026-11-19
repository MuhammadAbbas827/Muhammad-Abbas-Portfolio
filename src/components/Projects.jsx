import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../utils/content.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">Projects</p>
          <h2 className="text-4xl font-black sm:text-5xl">Selected work with premium polish.</h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                <div className="p-7">
                  <p className="text-sm uppercase tracking-[0.25em] text-orange-500">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-zinc-300">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-semibold transition hover:bg-orange-600"><FaExternalLinkAlt /> Live Demo</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-zinc-100 transition hover:border-orange-500 hover:text-orange-500"><FaGithub /> GitHub</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
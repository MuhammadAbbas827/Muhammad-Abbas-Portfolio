import { motion } from "framer-motion";
import { skills } from "../utils/content.jsx";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">Skills</p>
          <h2 className="text-4xl font-black sm:text-5xl">Tools and technologies I use daily.</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">{skill.icon}</div>
                  <span className="text-sm font-semibold text-zinc-400">{skill.level}%</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{skill.name}</h3>
                <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
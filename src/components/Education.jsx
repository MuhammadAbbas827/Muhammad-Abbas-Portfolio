import { motion } from "framer-motion";
import { education } from "../utils/content.jsx";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">Education</p>
          <h2 className="text-4xl font-black sm:text-5xl">Learning path and academic growth.</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.div
                key={`${item.school}-${item.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">{item.board}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.school}</h3>
                  </div>
                  <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm text-orange-400">{item.year}</span>
                </div>

                <p className="mt-5 text-lg font-medium text-orange-400">{item.degree}</p>
                <p className="mt-4 text-base leading-7 text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

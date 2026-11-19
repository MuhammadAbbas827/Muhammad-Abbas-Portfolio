import { motion } from "framer-motion";
import { timeline } from "../utils/content.jsx";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">Timeline</p>
          <h2 className="text-4xl font-black sm:text-5xl">A path shaped by curiosity and craft.</h2>

          <div className="mt-14 space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                className="relative rounded-[1.6rem] border border-white/10 bg-white/5 p-7 pl-12 backdrop-blur-xl"
              >
                <div className="absolute left-5 top-8 h-4 w-4 rounded-full bg-orange-500" />
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">{item.type}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm text-orange-400">{item.year}</span>
                </div>
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { testimonials } from "../utils/content.jsx";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">Testimonials</p>
          <h2 className="text-4xl font-black sm:text-5xl">Feedback that reflects a premium client experience.</h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-[1.7rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <p className="text-lg leading-8 text-zinc-300">“{item.quote}”</p>
                <div className="mt-8">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
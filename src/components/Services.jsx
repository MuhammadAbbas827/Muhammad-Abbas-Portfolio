import { motion } from "framer-motion";
import { services } from "../utils/content.jsx";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">Services</p>
          <h2 className="text-4xl font-black sm:text-5xl">Premium solutions for modern brands.</h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/12 text-orange-500">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
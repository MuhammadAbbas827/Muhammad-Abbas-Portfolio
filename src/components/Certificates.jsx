import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { certificates } from "../utils/content.jsx";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">Certificates</p>
          <h2 className="text-4xl font-black sm:text-5xl">Credentials that reflect continuous growth.</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {certificates.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[1.7rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">{item.year}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.issuer}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-orange-500 transition hover:text-orange-400">View Certificate <FaArrowRight /></a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
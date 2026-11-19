import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-[#111111] text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-orange-500 uppercase tracking-[6px] mb-3">
            Resume
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Download My CV
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-12">
            Download my resume to learn more about my education,
            technical skills, projects and experience.
          </p>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            <FaFilePdf />
            Download Resume
            <FaDownload />
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}
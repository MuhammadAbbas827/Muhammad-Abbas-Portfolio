
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactDetails, socialLinks } from "../utils/content.jsx";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("Send Message");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        "service_po5uw7d",
        "template_g6ll3pp",
        formRef.current,
        {
          publicKey: "X2_RWMzcfKWLp4bPe",
        }
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Unable to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">
            Contact
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Let&apos;s build something exceptional.
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-semibold text-white">
                Available for freelance work and collaborations.
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                If you have a product idea, a redesign challenge, or a launch
                you want to elevate, I&apos;d love to hear about it.
              </p>

              <div className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
                        {item.title}
                      </p>
                      <p className="mt-1 text-base text-zinc-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/20 text-zinc-100 transition hover:border-orange-500 hover:text-orange-500"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              whileHover={{ scale: 1.01 }}
              className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-zinc-500"
                />

                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-zinc-500"
                />
              </div>

              <input
                name="subject"
                required
                type="text"
                placeholder="Subject"
                className="mt-5 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-zinc-500"
              />

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Your Message"
                className="mt-5 min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white placeholder:text-zinc-500"
              />

              <button
                type="submit"
                disabled={isSending}
                className="mt-7 w-full rounded-2xl bg-orange-500 px-5 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

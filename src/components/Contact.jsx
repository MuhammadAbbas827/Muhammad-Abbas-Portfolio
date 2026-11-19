
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contactDetails, socialLinks } from "../utils/content.jsx";

export default function Contact() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("Send Message");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

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
    <section
      id="contact"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
            Contact
          </p>

          <h2 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s build something exceptional.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Have a project in mind or want to work together?
            Feel free to reach out. I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="mt-10 grid min-w-0 grid-cols-1 gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[1.8rem] sm:p-8"
          >
            <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Available for freelance work and collaborations.
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
              If you have a product idea, a redesign challenge,
              or a project you want to bring to life, I&apos;d
              love to hear about it.
            </p>

            {/* Contact Details */}
            <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-5">
              {contactDetails.map((item, index) => (
                <div
                  key={item.title || item.label || index}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-4 sm:gap-4 sm:rounded-2xl sm:px-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-500 sm:h-12 sm:w-12">
                    {item.icon ||
                      (item.title === "Email" ? <FaEnvelope /> :
                      item.title === "Phone" ? <FaPhoneAlt /> :
                      <FaMapMarkerAlt />)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 sm:text-sm sm:tracking-[0.24em]">
                      {item.title || item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block break-all text-sm text-zinc-200 transition hover:text-orange-400 sm:text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words text-sm text-zinc-200 sm:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-7 border-t border-white/10 pt-6 sm:mt-8 sm:pt-7">
              <p className="mb-4 text-sm font-medium text-zinc-400">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label || index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label || "Social media link"}
                    title={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-zinc-100 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500 sm:h-12 sm:w-12"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[1.8rem] sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Send me a message
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Fill out the form below and I&apos;ll get back to you.
            </p>

            {/* Name and Email */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <input
                name="name"
                required
                type="text"
                autoComplete="name"
                placeholder="Your Name"
                className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:rounded-2xl sm:py-4 sm:text-base"
              />

              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:rounded-2xl sm:py-4 sm:text-base"
              />
            </div>

            {/* Subject */}
            <input
              name="subject"
              required
              type="text"
              placeholder="Subject"
              className="mt-4 min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:mt-5 sm:rounded-2xl sm:py-4 sm:text-base"
            />

            {/* Message */}
            <textarea
              name="message"
              required
              rows="6"
              placeholder="Your Message"
              className="mt-4 min-h-[150px] w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:mt-5 sm:min-h-[180px] sm:rounded-2xl sm:py-4 sm:text-base"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="mt-5 w-full rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:mt-7 sm:rounded-2xl sm:py-4 sm:text-base"
            >
              {status}
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-zinc-500">
              Your information will only be used to respond to your message.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

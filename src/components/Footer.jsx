import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { socialLinks } from "../utils/content.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Muhammad <span className="text-orange-500">Abbas</span></h2>
            <p className="mt-3 max-w-xl text-zinc-400">Frontend Developer crafting premium digital experiences with React, motion, and thoughtful design systems.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-100 transition hover:border-orange-500 hover:text-orange-500">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Muhammad Abbas. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS, Framer Motion, and care.</p>
        </div>
      </div>
    </footer>
  );
}
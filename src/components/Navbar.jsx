import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Services",
      to: "services",
    },
    {
      name: "Skills",
      to: "skills",
    },
    {
      name: "Projects",
      to: "projects",
    },
    {
      name: "Education",
      to: "education",
    },
    {
      name: "Contact",
      to: "contact",
    },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0bcc] backdrop-blur-xl border-b border-zinc-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black tracking-widest"
          >
            <span className="text-orange-500">
              M
            </span>
            A
          </motion.a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (

              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                activeClass="text-orange-500"
                className="cursor-pointer text-gray-300 hover:text-orange-500 transition font-medium"
              >
                {item.name}
              </Link>

            ))}

          </nav>

          {/* Download CV */}

          <a
            href="/resume.pdf"
            download
            className="hidden lg:flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(255,115,0,.35)] hover:scale-105"
          >
            <FaDownload />
            Download CV
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
                  {/* ================= MOBILE MENU ================= */}

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-[#111111] border-t border-zinc-800 rounded-b-2xl shadow-2xl"
              >
                <div className="flex flex-col py-6 px-6 gap-6">

                  {links.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={600}
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer text-lg text-gray-300 hover:text-orange-500 transition"
                      activeClass="text-orange-500"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <a
                    href="/resume.pdf"
                    download
                    onClick={() => setMenuOpen(false)}
                    className="mt-4 flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <FaDownload />
                    Download CV
                  </a>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

      </div>
    </motion.header>
  );
}
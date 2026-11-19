import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotns,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiGithub,
} from "react-icons/si";

export const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Timeline", to: "timeline" },
  { name: "Certificates", to: "certificates" },
  { name: "Contact", to: "contact" },
];

export const services = [
  {
    icon: <FaCode className="text-3xl" />,
    title: "Frontend Development",
    description: "Crafting polished interfaces with modern React architecture and performance-first UX.",
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "React Development",
    description: "Building scalable React applications with reusable components and smooth interactions.",
  },
  {
    icon: <FaMobileAlt className="text-3xl" />,
    title: "Responsive Design",
    description: "Creating fluid experiences that feel refined on every screen size and device.",
  },
  {
    icon: <FaPaintBrush className="text-3xl" />,
    title: "UI Design",
    description: "Designing premium visual systems with subtle motion, depth, and luxury aesthetics.",
  },
];

export const skills = [
  { name: "React", icon: <SiReact className="text-3xl" />, level: 92, color: "from-cyan-500 to-sky-500" },
  { name: "JavaScript", icon: <SiJavascript className="text-3xl" />, level: 90, color: "from-yellow-500 to-amber-500" },
  { name: "HTML", icon: <SiHtml5 className="text-3xl" />, level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS", icon: <SiCss3 className="text-3xl" />, level: 93, color: "from-blue-500 to-indigo-500" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-3xl" />, level: 94, color: "from-sky-500 to-cyan-500" },
  { name: "Bootstrap", icon: <SiBootstrap className="text-3xl" />, level: 86, color: "from-purple-500 to-fuchsia-500" },
  { name: "Git", icon: <FaGithub className="text-3xl" />, level: 88, color: "from-zinc-400 to-zinc-600" },
  { name: "GitHub", icon: <SiGithub className="text-3xl" />, level: 89, color: "from-zinc-200 to-zinc-400" },
  { name: "Node", icon: <SiNodedotns className="text-3xl" />, level: 80, color: "from-emerald-500 to-green-500" },
  { name: "Python", icon: <SiPython className="text-3xl" />, level: 78, color: "from-yellow-400 to-yellow-600" },
  { name: "PHP", icon: <SiPhp className="text-3xl" />, level: 72, color: "from-violet-500 to-indigo-500" },
  { name: "C++", icon: <SiCplusplus className="text-3xl" />, level: 76, color: "from-blue-600 to-cyan-500" },
];

export const projects = [
  {
    title: "Aether Studio",
    category: "Design System",
    description: "A premium product landing experience crafted with motion-rich storytelling and high-conversion UI detail.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    title: "Northstar Commerce",
    category: "E-commerce",
    description: "A refined shopping experience with elegant product presentation, motion cues, and mobile-first layouts.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Vite", "CSS"],
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    title: "Lumen Analytics",
    category: "Dashboard",
    description: "An immersive analytics interface featuring modular cards, polished charts, and premium visual hierarchy.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Charting", "Tailwind"],
    github: "https://github.com/",
    live: "https://example.com/",
  },
];

export const timeline = [
  {
    year: "2024 - Present",
    title: "Frontend Developer",
    type: "Professional",
    description: "Building premium interfaces with React, Tailwind, and modern animation systems.",
  },
  {
    year: "2022 - 2024",
    title: "Web Development Learner",
    type: "Education",
    description: "Expanded into JavaScript, UI architecture, and responsive design best practices.",
  },
  {
    year: "2020 - 2022",
    title: "Computer Science Foundations",
    type: "Education",
    description: "Studied core programming concepts, problem-solving, and software fundamentals.",
  },
];

export const certificates = [
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Academy",
    year: "2024",
    link: "https://example.com/",
  },
  {
    title: "UI/UX Design System",
    issuer: "Design Lab",
    year: "2023",
    link: "https://example.com/",
  },
  {
    title: "Modern JavaScript",
    issuer: "CodeCraft",
    year: "2023",
    link: "https://example.com/",
  },
];

export const stats = [
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 1, suffix: "+", label: "Years of Growth" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: <FaLinkedin /> },
  { label: "Instagram", href: "https://instagram.com/", icon: <FaInstagram /> },
];

export const aboutHighlights = [
  { title: "Experience", value: "Frontend Development" },
  { title: "Education", value: "BS Student" },
  { title: "Focus", value: "Modern UI Systems" },
  { title: "Location", value: "Karachi, Pakistan" },
];

export const contactDetails = [
  { icon: <FaEnvelope />, title: "Email", value: "muhammadabbas@example.com" },
  { icon: <FaPhoneAlt />, title: "Phone", value: "+92 300 1234567" },
  { icon: <FaMapMarkerAlt />, title: "Location", value: "Karachi, Pakistan" },
];

export const testimonials = [
  {
    quote: "Every detail felt premium and intentional. The motion language is subtle yet powerful.",
    name: "Ayesha Khan",
    role: "Product Designer",
  },
  {
    quote: "The interface is not just beautiful; it is thoughtfully structured and incredibly fast.",
    name: "Bilal Ahmed",
    role: "Startup Founder",
  },
  {
    quote: "A rare balance of elegance and usability. This portfolio feels like a high-end product.",
    name: "Sara Ali",
    role: "Creative Developer",
  },
];

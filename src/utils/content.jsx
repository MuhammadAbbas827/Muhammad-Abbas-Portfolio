import { FaCode, FaServer, FaMobileAlt, FaPalette, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiHtml5, SiCss, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiFlutter } from "react-icons/si";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "24+", label: "Projects shipped" },
  { value: "8", label: "Tech stacks" },
  { value: "3", label: "Years experience" },
];

export const services = [
  {
    icon: <FaCode className="text-3xl text-orange-400" />,
    title: "Interface Craft",
    description: "Design and build polished frontends with intuitive layouts, deep interaction polish, and accessibility-first structure.",
  },
  {
    icon: <FaServer className="text-3xl text-orange-400" />,
    title: "Server & API",
    description: "Architect RESTful services with Node.js, Express, and MongoDB to support secure, high-performance applications.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-orange-400" />,
    title: "Responsive Web",
    description: "Create flexible layouts that adapt beautifully across desktop, tablet, and mobile without losing elegance.",
  },
  {
    icon: <FaPalette className="text-3xl text-orange-400" />,
    title: "Product polish",
    description: "Elevate interfaces with refined typography, premium spacing, subtle motion, and modern visual hierarchy.",
  },
];

export const skills = [
  { name: "React", icon: <SiReact className="text-3xl" />, level: 92, color: "from-cyan-400 to-sky-500" },
  { name: "JavaScript", icon: <SiJavascript className="text-3xl" />, level: 94, color: "from-amber-400 to-yellow-500" },
  { name: "HTML", icon: <SiHtml5 className="text-3xl" />, level: 96, color: "from-orange-400 to-red-500" },
  { name: "CSS", icon: <SiCss className="text-3xl" />, level: 93, color: "from-sky-500 to-indigo-500" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-3xl" />, level: 90, color: "from-cyan-400 to-sky-500" },
  { name: "Node.js", icon: <SiNodedotjs className="text-3xl" />, level: 88, color: "from-emerald-500 to-green-400" },
  { name: "Express", icon: <SiExpress className="text-3xl" />, level: 84, color: "from-stone-300 to-stone-500" },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl" />, level: 82, color: "from-emerald-600 to-emerald-400" },
  { name: "Flutter", icon: <SiFlutter className="text-3xl" />, level: 80, color: "from-amber-400 to-yellow-500" },
  
];

export const projects = [
  {
    title: "Atlas Market",
    category: "E-commerce platform",
    description: "An enterprise-grade shopping experience with dynamic product filtering, checkout flow, and performance-first detail.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Pulse Studio",
    category: "Creative workspace",
    description: "A modern collaboration dashboard for teams to align on tasks, timelines, and content production in one system.",
    tech: ["React", "Express", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Apex Analytics",
    category: "Data dashboard",
    description: "A premium analytics experience with live charts, custom reports, and refined interface patterns.",
    tech: ["React", "API", "Design System"],
    live: "#",
    github: "#",
  },
];

export const timeline = [
  {
    period: "2024",
    title: "Full Stack Developer",
    description: "Shipping production applications with fast load times and elegant interaction.",
  },
  {
    period: "2024",
    title: "Freelance Product Apps",
    description: "Delivered polished web products for startups, focusing on responsive UX and performance.",
  },
  {
    period: "2024",
    title: "UI Systems Specialist",
    description: "Built reusable component systems, motion patterns, and design systems for modern brands.",
  },
];

export const education = [
  {
    school: "AL-Murtaza School",
    degree: "Matriculation",
    board: "AKUEB",
    year: "2024",
    description: "Completed matriculation from AL-Murtaza School under AKUEB in 2024.",
  },
  {
    school: "The Pace College",
    degree: "Intermediate",
    board: "AKUEB",
    year: "2026",
    description: "Completed intermediate studies from The Pace College under AKUEB in 2026.",
  },
  {
    school: "Salim Habib University",
    degree: "Bachelor's in Computer Science",
    board: "University",
    year: "2026 - Present",
    description: "Currently pursuing a Bachelor of Science in Computer Science at Salim Habib University, beginning in 2026 and continuing to the present.",
  },
  {
    school: "Aptech",
    degree: "Professional Training",
    board: "Current Course",
    year: "2024 - Present",
    description: "Currently studying at Aptech and presently in the 5th semester of the program.",
  },
];

export const contactDetails = [
  { icon: <FaEnvelope className="text-2xl text-orange-400" />, label: "Email", value: "mohdabbas9337@gmail.com", href: "mailto:mohdabbas9337@gmail.com" },
  { icon: <FaPhoneAlt className="text-2xl text-orange-400" />, label: "Phone", value: "03188872882", href: "tel:03188872882" },
  { icon: <FaMapMarkerAlt className="text-2xl text-orange-400" />, label: "Location", value: "Karachi, Pakistan", href: "https://maps.google.com" },
];

export const socialLinks = [
  { icon: <FaGithub className="text-xl" />, href: "https://github.com/MuhammadAbbas827" },
  { icon: <FaLinkedin className="text-xl" />, href: "https://linkedin.com/in/muhammad-abbas-659b32450" },
  { icon: <FaInstagram className="text-xl" />, href: "https://www.instagram.com/muhammad._.abbas._.110?igsi=djE3dnhzdzltNWM2" },
];

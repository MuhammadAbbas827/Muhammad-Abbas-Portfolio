import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-40"
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-orange-500/20 blur-[120px]" />
    </motion.div>
  );
}
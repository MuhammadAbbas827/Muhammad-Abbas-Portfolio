import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-[120] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/60 bg-orange-500/10 transition duration-150 md:block ${hidden ? "opacity-0" : "opacity-100"}`}
      style={{ left: position.x, top: position.y }}
    />
  );
}

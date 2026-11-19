import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500 text-white shadow-[0_14px_40px_rgba(255,107,0,0.28)] transition hover:scale-105"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}

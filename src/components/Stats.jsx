import { useEffect, useState } from "react";
import { stats } from "../utils/content.jsx";

function AnimatedNumber({ value, duration = 1800 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame;
    let startTime;

    const updateValue = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setDisplayValue(Math.round(value * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export default function Stats() {
  return (
    <section className="-mt-6 pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-black text-orange-500 sm:text-5xl">
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
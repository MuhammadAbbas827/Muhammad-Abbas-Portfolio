export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[10%] top-[15%] h-40 w-40 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute right-[8%] top-[30%] h-56 w-56 rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="absolute bottom-[10%] left-[20%] h-44 w-44 rounded-full bg-orange-400/10 blur-[130px]" />
      <div className="absolute bottom-[20%] right-[20%] h-32 w-32 rounded-full bg-white/5 blur-[90px]" />
    </div>
  );
}

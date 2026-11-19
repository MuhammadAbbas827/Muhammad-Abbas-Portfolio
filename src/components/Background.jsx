export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0f0f0f]">
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-orange-500/16 blur-[150px]" />
      <div className="absolute -bottom-24 -right-24 h-[480px] w-[480px] rounded-full bg-red-600/12 blur-[170px]" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[200px]" />
    </div>
  );
}
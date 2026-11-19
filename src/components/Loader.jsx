import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.06 }}
        transition={{ duration: 0.55 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-[#090909]"
      >
        <div className="flex flex-col items-center gap-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-orange-500/20 border-t-orange-500"
          />
          <div className="text-center">
            <p className="text-2xl font-semibold tracking-[0.28em] text-white">M.A</p>
            <p className="mt-2 text-sm uppercase tracking-[0.32em] text-zinc-500">Loading portfolio</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
import { Activity } from "lucide-react";
import { motion } from "framer-motion";

export function LoadingProposal({ message }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-violet-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <Activity className="w-16 h-16 text-violet-600 animate-spin relative z-10" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        ASMA AI Sedang Bekerja...
      </h3>
      <motion.p
        key={message}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-slate-500 text-lg"
      >
        {message}
      </motion.p>
    </div>
  );
}

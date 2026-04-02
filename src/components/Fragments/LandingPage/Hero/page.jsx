import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const words = ["Skala", "Konten", "Finansial", "Proposal"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-6xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in-up"
      >
        Assisten marketing cerdas untuk <br className="hidden md:block" />
        <span className="inline-block relative text-purple-600 min-w-[200px] md:min-w-[300px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-0 bottom-0 text-center"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
          <span className="invisible">Proposal</span>{" "}
        </span>
        <br className="hidden md:block" /> UMKM Anda.
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-md md:text-xl text-zinc-500 mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
      >
        Pangkas waktu berjam-jam menjadi hitungan detik. Biarkan AI kami yang
        mengurus copywriting, analisis finansial, dan proposal bisnis anda
        menggunakan model AI canggih dari Gemini.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400"
      >
        <Link href={"#features"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="cursor-pointer w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-bold text-xs md:text-sm transition-all shadow-lg shadow-purple-500/30 hover:-translate-y-1">
              Mulai Gratis Sekarang
            </button>
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in-up animation-delay-600"
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>1933+ UMKM Aktif</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>10,000+ Konten Dibuat</span>
        </div>
      </motion.div>
    </>
  );
}

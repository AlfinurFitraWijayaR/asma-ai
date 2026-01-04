import { Button } from "@/components/ui/button";
import ProtectedLink from "@/components/ui/protected-link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MousePointer2,
  ChevronDown,
  Utensils,
} from "lucide-react";
import { useEffect, useState } from "react";

export const ProposalFeature = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Step 0: Reset / Show Form
      setAnimationStep(0);
      await new Promise((r) => setTimeout(r, 2000)); // Hold form view

      // Step 1: Cursor Moves
      setAnimationStep(1);
      await new Promise((r) => setTimeout(r, 1200)); // Cursor travel time

      // Step 2: Click
      setAnimationStep(2);
      await new Promise((r) => setTimeout(r, 300)); // Click duration

      // Step 3: Transformation
      setAnimationStep(3);
      await new Promise((r) => setTimeout(r, 6000)); // Hold PDF view

      // Loop
      setAnimationStep(0);
    };

    sequence();

    const totalDuration = 2000 + 1200 + 300 + 6000;
    const interval = setInterval(sequence, totalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative h-[460px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
        {/* CARD A: Form */}
        <motion.div
          className="absolute z-20 w-[340px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{
            opacity: animationStep >= 3 ? 0 : 1,
            scale: animationStep >= 3 ? 0.9 : 1,
            y: animationStep >= 3 ? 40 : 0,
            filter: animationStep >= 3 ? "blur(4px)" : "blur(0px)",
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100">
            <div className="h-full bg-purple-600 w-1/4 rounded-r-full" />
          </div>

          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                1 Dari 4 Langkah
              </span>
              <h3 className="text-xl font-bold text-slate-800 mt-1 flex items-center gap-2">
                <span>🏠</span> Profil Usaha
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Ceritakan sedikit tentang identitas usaha Anda untuk kelengkapan
                administrasi.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-600">
                  Nama Usaha
                </label>
                <div className="relative">
                  <div className="w-full h-9 pl-3 pr-3 rounded-md border border-slate-200 bg-white text-xs text-slate-500 flex items-center shadow-sm">
                    Contoh: Keripik Basreng Teuas
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-600">
                  Nama Pemilik
                </label>
                <div className="relative">
                  <div className="w-full h-9 pl-3 pr-3 rounded-md border border-slate-200 bg-white text-xs text-slate-500 flex items-center shadow-sm">
                    Contoh: Mang Toha
                  </div>
                </div>
              </div>

              {/* Fake Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-600">
                  Jenis Usaha
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div className="w-full h-9 pl-9 pr-3 rounded-md border border-slate-200 bg-white text-xs text-slate-800 flex items-center justify-between shadow-sm">
                    <span>Kuliner</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Button */}
            <div className="mt-8 flex justify-end">
              <div id="target-button" className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <button className="relative bg-black text-white text-xs font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 hover:bg-slate-900 transition-colors">
                  Lanjut <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- FAKE CURSOR --- */}
        <motion.div
          className="absolute z-50 pointer-events-none"
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{
            x: animationStep >= 1 ? 120 : 100, // Move towards button relative to center
            y: animationStep >= 1 ? 180 : 100, // Approximate button location
            opacity: animationStep >= 3 ? 0 : 1, // Hide when form hides
            scale: animationStep === 2 ? 0.8 : 1, // Click scale
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.2 },
          }}
        >
          <MousePointer2
            className="w-6 h-6 text-slate-900 fill-white drop-shadow-md"
            strokeWidth={1.5}
          />
          {/* Click Ripple */}
          {animationStep === 2 && (
            <span className="absolute -top-2 -left-2 w-10 h-10 bg-purple-500/30 rounded-full animate-ping" />
          )}
        </motion.div>

        {/* --- MAGIC SPARKLE TRANSITION --- */}
        <AnimatePresence>
          {animationStep === 3 && (
            <motion.div
              className="absolute z-40"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0], scale: 1.5 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <Sparkles className="w-20 h-20 text-purple-500 fill-purple-200" />
                <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- CARD B: PDF --- */}
        <motion.div
          className="absolute z-30 w-[300px] h-[420px] bg-white rounded-sm shadow-2xl border border-slate-100 overflow-hidden flex flex-col items-center"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{
            opacity: animationStep >= 3 ? 1 : 0,
            y: animationStep >= 3 ? 0 : 50,
            scale: animationStep >= 3 ? 1 : 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            delay: 0.2,
          }}
        >
          {/* PDF Header - Formal Letterhead Style */}
          <div className="w-full p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-slate-700 tracking-wider">
                KEMENTERIAN UMKM INDONESIA
              </span>
              <span className="text-[6px] text-slate-400">
                Jalan Jenderal Sudirman No. 1, Jakarta
              </span>
            </div>
            <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center">
              <FileText className="w-4 h-4 text-slate-500" />
            </div>
          </div>

          {/* PDF Body */}
          <div className="w-full p-6 flex-1 bg-white relative">
            <div className="flex justify-center mb-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase border-b border-black pb-0.5">
                Proposal Pengajuan Dana
              </h4>
            </div>

            {/* Simulated Content */}
            <div className="space-y-3">
              {/* Paragraph 1 */}
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-slate-800 rounded-full opacity-10" />
                <div className="h-1.5 w-[90%] bg-slate-800 rounded-full opacity-10" />
                <div className="h-1.5 w-[95%] bg-slate-800 rounded-full opacity-10" />
              </div>
              {/* Paragraph 2 - The Focus */}
              <div className="space-y-1.5 pt-2">
                <div className="flex gap-1 items-center">
                  <span className="text-[6px] font-serif font-bold text-slate-800">
                    Latar Belakang:
                  </span>
                </div>
                <p className="text-[6px] leading-[1.6] font-serif text-slate-600 text-justify">
                  Sehubungan dengan rencana pengembangan usaha{" "}
                  <span className="font-bold text-slate-900 bg-yellow-100 px-0.5">
                    Keripik Basreng Teuas
                  </span>{" "}
                  yang berlokasi di wilayah strategis, kami mengajukan
                  permohonan modal kerja guna meningkatkan kapasitas produksi
                  harian...
                </p>
              </div>
              {/* Paragraph 3 */}
              <div className="space-y-1.5 pt-2">
                <div className="h-1.5 w-full bg-slate-800 rounded-full opacity-10" />
                <div className="h-1.5 w-[80%] bg-slate-800 rounded-full opacity-10" />
              </div>
            </div>

            {/* Stamp */}
            <div className="absolute bottom-8 right-8 rotate-[-15deg] opacity-80">
              <div className="border-2 border-emerald-500 text-emerald-600 rounded-md px-2 py-1 text-[8px] font-bold uppercase tracking-widest flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Ready to Print
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ProtectedLink href="/smart-proposal">
        <Button className="mt-6.5 w-2/3 mx-auto cursor-pointer bg-slate-900 h-10 rounded-md transition-colors flex items-center justify-center group shadow-md">
          Coba Sekarang
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </ProtectedLink>
    </>
  );
};

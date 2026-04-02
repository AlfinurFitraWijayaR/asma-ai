import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MousePointer2,
  Sparkles,
  Image as ImageIcon,
  UploadCloud,
  ScanLine,
  CheckCircle2,
} from "lucide-react";

export default function DigitalContentFeatures() {
  const [animationStep, setAnimationStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => {
        if (prev >= 4) return 0;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[420px] w-100 flex items-center justify-center order-1 lg:order-2 perspective-1000">
      {/* --- CARD A: UPLOAD INPUT --- */}
      <motion.div
        className="absolute z-20 w-[340px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={{
          opacity: animationStep >= 3 ? 0 : 1,
          scale: animationStep >= 3 ? 0.9 : 1,
          y: animationStep >= 3 ? 40 : 0,
          filter: animationStep >= 3 ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center justify-center gap-2">
              <UploadCloud className="w-6 h-6 text-blue-500" /> Upload Produk
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              Unggah foto produk Anda, AI akan otomatis membuatkan konten
              promosi yang menarik.
            </p>
          </div>

          {/* Dropzone Area */}
          <div
            className={`relative w-full h-[240px] rounded-xl border-2 border-dashed transition-colors duration-300 flex flex-col items-center justify-center overflow-hidden
                ${animationStep >= 1 ? "border-blue-400 bg-blue-50/30" : "border-slate-300 bg-slate-50"}`}
          >
            <AnimatePresence mode="wait">
              {animationStep === 0 ? (
                // State 0: Empty Dropzone
                <motion.div
                  key="empty"
                  className="flex flex-col items-center justify-center text-slate-400"
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                  <span className="text-sm font-medium">
                    Tarik & lepas gambar ke sini
                  </span>
                  <span className="text-xs mt-1">atau klik untuk browse</span>
                </motion.div>
              ) : (
                // State 1 & 2: Image Uploaded & Scanning
                <motion.div
                  key="filled"
                  className="absolute inset-0 w-full h-full p-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-full h-full bg-[#f8f9ff] rounded-lg border border-slate-200 flex items-center justify-center relative overflow-hidden">
                    {/* Fake Product Image */}
                    <ImageIcon
                      className="w-20 h-20 text-slate-800"
                      strokeWidth={1.5}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />

                    {/* AI Scanning Effect (Step 2) */}
                    {animationStep === 2 && (
                      <>
                        <motion.div
                          className="absolute left-0 right-0 h-1 bg-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.6)] z-10"
                          initial={{ top: "0%" }}
                          animate={{ top: "100%" }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                          }}
                        />
                        <div className="absolute inset-0 bg-blue-500/10 z-0 mix-blend-overlay animate-pulse" />
                        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md flex items-center gap-1">
                          <ScanLine className="w-3 h-3 animate-spin-slow" />{" "}
                          Menganalisis...
                        </div>
                      </>
                    )}

                    {/* Upload Success Badge (Step 1) */}
                    {animationStep === 1 && (
                      <motion.div
                        className="absolute bottom-3 right-3 bg-emerald-500 text-white text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1 shadow-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <CheckCircle2 className="w-3 h-3" /> Foto Dimuat
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* --- FAKE CURSOR --- */}
      <AnimatePresence>
        {animationStep < 2 && (
          <motion.div
            className="absolute z-50 pointer-events-none flex flex-col items-center"
            initial={{ x: 250, y: 250, opacity: 0 }}
            animate={{
              x: animationStep === 0 ? 150 : 0,
              y: animationStep === 0 ? 200 : 0,
              opacity: 1,
              scale: animationStep === 1 ? 0.8 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {animationStep === 0 && (
              <div className="w-12 h-12 bg-white rounded shadow-xl border border-slate-200 mb-[-10px] flex items-center justify-center -rotate-12 opacity-80">
                <ImageIcon className="w-6 h-6 text-slate-400" />
              </div>
            )}
            <MousePointer2
              className="w-6 h-6 text-slate-900 fill-white drop-shadow-md z-10"
              strokeWidth={1.5}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAGIC SPARKLE TRANSITION --- */}
      <AnimatePresence>
        {animationStep === 3 && (
          <motion.div
            className="absolute z-40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: 1.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative flex items-center justify-center">
              <Sparkles className="w-24 h-24 text-blue-500 fill-blue-200" />
              <div className="absolute inset-0 bg-blue-400/30 blur-2xl rounded-full scale-150" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CARD B: GENERATED CONTENT OUTPUT --- */}
      <motion.div
        className="absolute z-30 w-[340px] bg-white rounded-xl shadow-2xl border border-slate-100 flex p-6 gap-8 overflow-hidden"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{
          opacity: animationStep >= 3 ? 1 : 0,
          y: animationStep >= 3 ? 0 : 50,
          scale: animationStep >= 3 ? 1 : 0.95,
          pointerEvents: animationStep >= 3 ? "auto" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          delay: 0.2,
        }}
      >
        {/* Background subtle gradient similar to image */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-white to-fuchsia-50/10 pointer-events-none" />
        <div className="relative flex-1 flex flex-col py-2 justify-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationStep >= 3 ? 1 : 0 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <h4 className="text-[17px] font-bold text-slate-700 mb-2.5">
                Rekomendasi Deskripsi Produk
              </h4>
              <div className="w-[85%] h-3 bg-slate-100 rounded-full mb-2"></div>
              <div className="w-[85%] h-3 bg-slate-100 rounded-full mb-2"></div>
              <div className="w-[45%] h-3 bg-slate-100 rounded-full mb-6"></div>
            </div>

            {/* Section 2: Social Media */}
            <div>
              <h4 className="text-[17px] font-bold text-slate-700 mb-2.5">
                Rekomendasi Caption Media Sosial
              </h4>
              <div className="w-[85%] h-3 bg-slate-100 rounded-full mb-2"></div>
              <div className="w-[75%] h-3 bg-slate-100 rounded-full mb-6"></div>
            </div>

            {/* Section 3: Content Ideas */}
            <div>
              <h4 className="text-[17px] font-bold text-slate-700 mb-2.5">
                Rekomendasi Ide Konten
              </h4>
              <div className="w-[85%] h-3 bg-slate-100 rounded-full mb-2"></div>
              <div className="w-[45%] h-3 bg-slate-100 rounded-full mb-6"></div>
              <div className="w-[85%] h-3 bg-slate-100 rounded-full mb-2"></div>
              <div className="w-[45%] h-3 bg-slate-100 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

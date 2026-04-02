import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MousePointer2,
  TrendingUp,
  Info,
  CreditCard,
  ChevronDown,
  Activity,
  Calculator,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

export default function HealthCheckFeature() {
  const [step, setStep] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let timeout;
    if (step === 0) timeout = setTimeout(() => setStep(1), 1000);
    else if (step === 1) timeout = setTimeout(() => setStep(2), 1200);
    else if (step === 2) timeout = setTimeout(() => setStep(3), 1500);
    else if (step === 3) timeout = setTimeout(() => setStep(4), 1000);
    else if (step === 4) timeout = setTimeout(() => setStep(0), 2500);

    return () => clearTimeout(timeout);
  }, [step]);

  useEffect(() => {
    if (step === 3 || step === 4) {
      let current = 0;
      const interval = setInterval(() => {
        current += 3;
        if (current >= 90) {
          current = 90;
          clearInterval(interval);
        }
        setDisplayScore(current);
      }, 30);
      return () => clearInterval(interval);
    } else {
      setDisplayScore(0);
    }
  }, [step]);

  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - circumference * 0.9;

  return (
    <div className="relative h-[460px] w-100 flex items-center justify-center order-1 lg:order-2 perspective-1000">
      <motion.div
        className="relative w-full w-[340px] h-[450px] bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {/* --- VIEW 1: INPUT FORMS (Step 0 & 1) --- */}
          {step < 2 && (
            <motion.div
              key="form-view"
              className="absolute inset-0 p-6 flex flex-col bg-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-500" />
                  Health Check
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Masukkan data finansial bulanan Anda.
                </p>
              </div>

              {/* Form Fields - Dibuat lebih compact */}
              <div className="space-y-3.5 flex-1">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 mb-1 block">
                    Total Omzet
                  </label>
                  <div className="relative">
                    <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <div
                      className={`w-full h-10 pl-9 pr-3 rounded-lg border flex items-center transition-all duration-500
                      ${step >= 1 ? "bg-indigo-50/50 border-indigo-100 text-slate-800" : "bg-slate-50 border-slate-200 text-slate-400"}`}
                    >
                      <span className="text-xs font-medium">
                        {step >= 1 ? "Rp 50.000.000" : "0"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600 mb-1 block">
                    Biaya Operasional
                  </label>
                  <div className="relative">
                    <Info className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <div
                      className={`w-full h-10 pl-9 pr-3 rounded-lg border flex items-center transition-all duration-500
                      ${step >= 1 ? "bg-indigo-50/50 border-indigo-100 text-slate-800" : "bg-slate-50 border-slate-200 text-slate-400"}`}
                    >
                      <span className="text-xs font-medium">
                        {step >= 1 ? "Rp 20.000.000" : "0"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600 mb-1 block">
                    Total Hutang
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <div
                      className={`w-full h-10 pl-9 pr-3 rounded-lg border flex items-center transition-all duration-500
                      ${step >= 1 ? "bg-indigo-50/50 border-indigo-100 text-slate-800" : "bg-slate-50 border-slate-200 text-slate-400"}`}
                    >
                      <span className="text-xs font-medium">
                        {step >= 1 ? "Rp 6.000.000" : "0"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="text-[11px] font-semibold text-slate-600 mb-1 block">
                      Arus Kas
                    </label>
                    <div
                      className={`w-full h-10 px-3 rounded-lg border flex items-center justify-between transition-all duration-500
                      ${step >= 1 ? "bg-indigo-50/50 border-indigo-100 text-slate-800" : "bg-slate-50 border-slate-200 text-slate-400"}`}
                    >
                      <span className="text-xs font-medium">
                        {step >= 1 ? "Lancar" : "-"}
                      </span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="text-[11px] font-semibold text-slate-600 mb-1 block">
                      Pencatatan
                    </label>
                    <div
                      className={`w-full h-10 px-3 rounded-lg border flex items-center justify-between transition-all duration-500
                      ${step >= 1 ? "bg-indigo-50/50 border-indigo-100 text-slate-800" : "bg-slate-50 border-slate-200 text-slate-400"}`}
                    >
                      <span className="text-xs font-medium truncate">
                        {step >= 1 ? "Rapi & Rutin" : "-"}
                      </span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger Button */}
              <div className="mt-4">
                <button
                  className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300
                   ${step >= 2 ? "bg-slate-100 text-slate-400" : "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"}`}
                >
                  <Calculator className="w-4 h-4" /> Cek Kesehatan
                </button>
              </div>
            </motion.div>
          )}

          {/* --- VIEW 2: PROCESSING (Step 2) --- */}
          {step === 2 && (
            <motion.div
              key="loading-view"
              className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-50/40 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-20 h-20 mb-5">
                <motion.div
                  className="absolute inset-0 border-4 border-indigo-100 border-t-indigo-600 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-indigo-500 animate-pulse" />
                </div>
              </div>
              <h4 className="text-[15px] font-bold text-slate-800">
                Mengkalkulasi Matriks...
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Menganalisis rasio kesehatan bisnis
              </p>
            </motion.div>
          )}

          {/* --- VIEW 3: RESULT WIDGET (Step 3 & 4) --- */}
          {step >= 3 && (
            <motion.div
              key="result-view"
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-50/40 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Small back header simulation */}
              <div className="absolute top-6 left-6 flex items-center gap-2 text-slate-400">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs font-medium">Kembali</span>
              </div>

              <div className="mt-8 text-center mb-8">
                <h3 className="text-lg font-bold text-slate-800">
                  Skor Bisnis Anda
                </h3>
              </div>

              {/* SVG Gauge Chart */}
              <div className="relative flex items-center justify-center mb-8">
                <svg
                  width="160"
                  height="160"
                  className="-rotate-90 transform drop-shadow-sm"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="12"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>

                {/* Inside Gauge Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                  <div className="flex items-baseline text-slate-800">
                    <span className="text-[38px] font-extrabold tracking-tighter leading-none">
                      {displayScore}
                    </span>
                    <span className="text-sm font-bold text-slate-400 ml-1">
                      /100
                    </span>
                  </div>
                  <motion.div
                    className="mt-1 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border border-emerald-200"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                  >
                    Bisnis Sehat
                  </motion.div>
                </div>
              </div>

              {/* Insight Card */}
              <AnimatePresence>
                {step === 4 && (
                  <motion.div
                    className="w-full bg-white px-4 py-3.5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0"></div>
                    <div className="w-[100%] h-3 bg-slate-100 rounded-full mb-2"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- FAKE CURSOR SIMULATION (Diskalakan untuk kontainer 400px) --- */}
        <AnimatePresence>
          {step < 2 && (
            <motion.div
              className="absolute z-50 pointer-events-none"
              initial={{ x: 250, y: 400, opacity: 0 }}
              animate={{
                x: step === 0 ? 150 : 200,
                y: step === 0 ? 250 : 410,
                opacity: 1,
                scale: step === 1 ? 1 : 0.85,
              }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
            >
              <MousePointer2
                className="w-6 h-6 text-slate-900 fill-white drop-shadow-md"
                strokeWidth={1.5}
              />
              {/* Click Ripple Effect */}
              {step === 1 && (
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-indigo-500/30 rounded-full animate-ping" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

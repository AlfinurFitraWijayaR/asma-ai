import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  FileText,
  Sparkles,
} from "lucide-react";
import { ProposalFeature } from "./ProposalFeatures";
import DigitalContentFeatures from "./DigitalContentFeatures";
import HealthCheckFeature from "./HealthCheckFeature";
import { Button } from "@/components/ui/button";
import ProtectedLink from "@/components/ui/protected-link";

export default function ProblemSolution() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-15 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center"
          >
            Satu platform, tiga solusi cerdas.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl text-center m-auto"
          >
            Infrastruktur AI yang dirancang spesifik untuk mengeliminasi
            hambatan operasional dan finansial bisnis skala menengah.
          </motion.p>
        </div>

        <div className="flex flex-col border-y border-black/20 divide-y divide-zinc-300">
          {/* Content Generator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between py-2 gap-12 md:gap-24"
          >
            {/* Title */}
            <div className="flex-1 md:pr-5">
              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" /> IMAGE-TO-TEXT
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-zinc-700">
                AI Content Digital Generator
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
                Ubah foto produk menjadi deskripsi e-commerce, ide video, dan
                caption media sosial dengan storytelling otomatis secara
                presisi.
              </p>
              <div className="mt-4 flex items-center">
                <ProtectedLink href="/content-digital">
                  <Button className="mx-auto cursor-pointer bg-slate-800 h-10 rounded-md transition-colors flex items-center justify-center group shadow-md">
                    Coba Sekarang
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ProtectedLink>
              </div>
            </div>

            {/* Vector */}
            <div className="w-full md:w-[400px] flex items-center justify-center">
              <DigitalContentFeatures />
            </div>
          </motion.div>

          {/* Health Check */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center justify-between py-2 gap-12 md:gap-24"
          >
            {/* Title */}
            <div className="flex-1 md:pl-8 md:text-right flex flex-col md:items-end">
              <div className="mt-8 flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-wide">
                <Activity className="w-4 h-4" /> TEXT-TO-TEXT
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-700 mb-4">
                AI Business Health Check
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
                Analisis finansial secara instan. Dapatkan skor kesehatan bisnis
                dan rekomendasi langsung dari metrik operasional, spesialis
                senior konsultan bisnis, dan perhitungan margin Anda.
              </p>
              <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-wide">
                <ProtectedLink href="/business-health">
                  <Button className="mx-auto cursor-pointer bg-slate-800 h-10 rounded-md transition-colors flex items-center justify-center group shadow-md">
                    <ArrowLeft className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    Coba Sekarang
                  </Button>
                </ProtectedLink>
              </div>
            </div>
            {/* Vector */}
            <div className="w-full md:w-[400px] flex items-center justify-center">
              <HealthCheckFeature />
            </div>
          </motion.div>

          {/* Proposal Generator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between py-2 gap-12 md:gap-24"
          >
            {/* Title */}
            <div className="flex-1 md:pr-5">
              <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wide">
                <FileText className="w-4 h-4" /> TEXT-TO-DOCUMENT
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-700 mb-4">
                AI Smart Proposal Generator
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
                Draf proposal pendanaan terstruktur siap diajukan ke bank atau
                investor. Dibuat secara otomatis mengikuti standar industri
                berdasarkan input bisnis Anda.
              </p>
              <div className="mt-4 flex items-center">
                <ProtectedLink href="/smart-proposal">
                  <Button className="mx-auto cursor-pointer bg-slate-800 h-10 rounded-md transition-colors flex items-center justify-center group shadow-md">
                    Coba Sekarang
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ProtectedLink>
              </div>
            </div>

            {/* Vector */}
            <div className="w-full md:w-[400px] flex items-center justify-center">
              <ProposalFeature />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

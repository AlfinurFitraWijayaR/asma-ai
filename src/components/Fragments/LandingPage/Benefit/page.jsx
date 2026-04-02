import { Clock, Smile, Database, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefit() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center"
          >
            Mengapa memilih ASMA AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl text-center m-auto"
          >
            Didesain khusus untuk menjawab tantangan nyata para pelaku UMKM di
            Indonesia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1: Hemat Waktu (Dark Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#0f172a] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full"></div>
            <Clock className="w-12 h-12 text-purple-400 mb-6 relative z-10" />
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
              Otomatisasi & Hemat Waktu
            </h3>
            <p className="text-slate-400 max-w-md relative z-10">
              Pangkas waktu berjam-jam untuk membuat konten dan proposal.
              Biarkan AI yang bekerja, Anda fokus pada operasional.
            </p>
          </motion.div>

          {/* Card 2: Ramah Pemula */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-purple-100 to-pink-100 rounded-[2rem] p-8 md:p-10 relative overflow-hidden border border-white"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/50 blur-[40px] rounded-full"></div>
            <div className="h-full flex flex-col">
              <Smile className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Sangat Ramah Pemula
              </h3>
              <p className="text-slate-700">
                Tidak perlu keahlian prompt engineering atau latar belakang IT.
                Antarmuka kami semudah menggunakan media sosial.
              </p>

              {/* Visual Decorative Element */}
              <div className="mt-auto pt-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <Wand2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="h-3 w-24 bg-purple-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Data Driven */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <Database className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Akurat & Berbasis Data
            </h3>
            <p className="text-slate-600 max-w-md">
              Model AI kami dilatih dengan metrik standar industri UMKM,
              memberikan hasil analisis yang valid dan relevan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

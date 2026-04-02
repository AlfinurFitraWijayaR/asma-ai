import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Apa itu ASMA AI?",
    answer:
      "ASMA AI adalah platform Kecerdasan Buatan (AI) terpadu yang dirancang khusus untuk membantu UMKM Indonesia dalam mengotomatisasi pembuatan konten, menganalisis kesehatan finansial, dan merancang proposal bisnis secara instan.",
  },
  {
    question: "Bisakah saya menggunakan ASMA AI secara gratis?",
    answer:
      "Ya, tentu saja! untuk saat ini kami masih menggunakan paket 'Free Tier' yang memberikan Anda kuota bulanan untuk mencoba fitur Content Generator, Health Check, dan Proposal Generator tanpa perlu memasukkan kartu kredit.",
  },
  {
    question: "Bagaimana saya bisa mengakses ASMA AI?",
    answer:
      "Anda bisa langsung mengaksesnya melalui browser internet di laptop, PC, maupun smartphone (mobile-friendly) kapan saja tanpa perlu mengunduh aplikasi tambahan.",
  },
  {
    question:
      "Apakah data finansial dan privasi bisnis saya aman dengan ASMA AI?",
    answer:
      "Aman dong. Kami berhak untuk melindungi data Anda, dan kami tidak pernah membagikan informasi bisnis Anda dengan pihak manapun tanpa izin eksplisit dari Anda.",
  },
  {
    question: "Apakah konten atau dokumen dari ASMA AI mengandung watermark?",
    answer:
      "Untuk saat ini semua fitur tidak menggunakan watermark. Anda bisa mengunduh hasil konten dan dokumen yang dihasilkan oleh ASMA AI tanpa adanya tanda air, sehingga siap untuk langsung digunakan dalam berbagai keperluan bisnis Anda.",
  },
  {
    question:
      "Bisakah ASMA AI mengubah foto produk menjadi teks promosi atau skrip video?",
    answer:
      "Bisa! Dengan fitur AI Content Generator (Image-to-Text), Anda cukup mengunggah foto produk, dan AI kami akan langsung meracik deskripsi e-commerce, caption media sosial, hingga ide skrip video TikTok yang memikat.",
  },
  {
    question:
      "Apakah ASMA AI bisa mengaudit dan merangkum laporan finansial bisnis saya?",
    answer:
      "Melalui fitur Business Health Check, AI kami menganalisis angka operasional dasar yang Anda berikan untuk menghasilkan skor kesehatan bisnis secara instan, lengkap dengan rekomendasi langkah strategis yang perlu diambil.",
  },
  {
    question:
      "Apakah ASMA AI dapat membantu saya menyusun proposal pendanaan untuk investor?",
    answer:
      "Tentu. Fitur Smart Proposal Generator kami didesain dengan format standar perbankan dan investor. AI akan menyusun kalimat profesional dan struktur dokumen yang rapi, siap untuk Anda unduh dan ajukan.",
  },
  {
    question:
      "Bisakah saya mengobrol dengan asisten AI di dalam platform ASMA AI?",
    answer:
      "Ya, kami menyediakan asisten virtual cerdas bernama 'Ama'. Anda dapat bertanya kepadanya kapan saja seputar fitur, panduan penggunaan, hingga info paket harga langsung dari jendela chat.",
  },
];

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="max-w-3xl mx-auto border-t border-slate-200">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-slate-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-md font-semibold text-zinc-800 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-500"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-zinc-500 leading-relaxed text-md">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

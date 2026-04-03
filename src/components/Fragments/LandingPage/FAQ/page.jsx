import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    question: "Apa itu ASMA AI?",
    answer:
      "ASMA AI adalah platform Kecerdasan Buatan (AI) terpadu yang dirancang khusus untuk membantu UMKM Indonesia dalam mengotomatisasi pembuatan konten, menganalisis kesehatan finansial, dan merancang proposal bisnis secara instan.",
  },
  {
    value: "item-2",
    question: "Bisakah saya menggunakan ASMA AI secara gratis?",
    answer:
      "Ya, tentu saja! untuk saat ini kami masih menggunakan paket 'Free Tier' yang memberikan Anda kuota bulanan untuk mencoba fitur Content Generator, Health Check, dan Proposal Generator tanpa perlu memasukkan kartu kredit.",
  },
  {
    value: "item-3",
    question: "Bagaimana saya bisa mengakses ASMA AI?",
    answer:
      "Anda bisa langsung mengaksesnya melalui browser internet di laptop, PC, maupun smartphone (mobile-friendly) kapan saja tanpa perlu mengunduh aplikasi tambahan.",
  },
  {
    value: "item-4",
    question:
      "Apakah data finansial dan privasi bisnis saya aman dengan ASMA AI?",
    answer:
      "Aman dong. Kami berhak untuk melindungi data Anda, dan kami tidak pernah membagikan informasi bisnis Anda dengan pihak manapun tanpa izin eksplisit dari Anda.",
  },
  {
    value: "item-5",
    question: "Apakah konten atau dokumen dari ASMA AI mengandung watermark?",
    answer:
      "Untuk saat ini semua fitur tidak menggunakan watermark. Anda bisa mengunduh hasil konten dan dokumen yang dihasilkan oleh ASMA AI tanpa adanya tanda air, sehingga siap untuk langsung digunakan dalam berbagai keperluan bisnis Anda.",
  },
  {
    value: "item-6",
    question: "Bagaimana ASMA AI menghitung skor kesehatan bisnis saya?",
    answer:
      "ASMA AI menggunakan Sistem Penilaian Terbobot (Weighted Scoring) yang menganalisis kaitan antara omzet, margin laba, beban hutang, dan kelancaran arus kas. Kami membandingkan data Anda dengan tolok ukur industri UMKM Indonesia tahun 2024-2026 yang kami rangkum dari berbagai sumber terpercaya seperti OECD, Bank Indonesia, dan OJK untuk memberikan analisis yang akurat dan relevan dengan kondisi bisnis Anda.",
  },
  {
    value: "item-7",
    question:
      "Bisakah saya mengobrol dengan asisten AI di dalam platform ASMA AI?",
    answer:
      "Ya, kami menyediakan asisten virtual cerdas bernama 'Ama'. Anda dapat bertanya kepadanya kapan saja seputar fitur, panduan penggunaan, hingga info paket harga langsung dari jendela chat.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="max-w-3xl mx-auto border-t border-slate-200">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

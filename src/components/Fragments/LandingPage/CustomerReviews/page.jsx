import { ScrollingColumn } from "./ScrollingColumn";

const TESTIMONIALS = [
  {
    name: "Budi Sudarsono",
    handle: "@sudarsonobudi",
    text: "Sangat terkesan dengan ASMA AI.\n\nAI Tools + Bisnis = Magic 🪄\n\n• Bikin proposal hitungan menit\n• Prediksi margin sangat presisi\n• Interface gampang dimengerti",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Mark Antony Klok",
    handle: "@mark-klok",
    text: "Fitur AI content generator-nya bener-bener ngebantu bikin caption IG. Gak perlu lagi pusing mikirin kata-kata. Konversi penjualan naik 40% bulan ini! 😍",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Agus Pratama",
    handle: "Agus Pratama",
    text: "Sebagai konsultan UMKM, tools seperti ASMA AI ini sangat memberdayakan pelaku usaha. Dari analisis skor kesehatan bisnis hingga pembuatan laporan, semuanya enterprise-grade.",
    color: "from-indigo-500 to-blue-800",
  },
  {
    name: "Rina Rini",
    handle: "@rinaweh",
    text: "Satu dari platform AI favorit saya sekarang. Fitur Health Check nya ngasih rekomendasi yang realistis buat naikin profit margin bisnis craft saya.",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    name: "Deny Store",
    handle: "@denysneakers",
    text: "Gila sih ini, upload foto sepatu langsung jadi deskripsi e-commerce lengkap sama tag yang SEO friendly. Hemat waktu banget buat admin toko! 🔥",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "Tari Lestari",
    handle: "@tari_lestari",
    text: "Sering kesulitan jelasin ide bisnis ke investor. Kemarin coba generate proposal pakai ASMA AI, langsung dipuji rapi dan profesional sama pihak bank 😭✨",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Farhan Kopi",
    handle: "Farhan Roasters",
    text: "Kami menghemat biaya operasional dan konsultasi hingga puluhan juta. Infrastruktur AI-nya sangat intuitif bagi kami yang tidak punya latar belakang finansial yang kuat.",
    color: "from-slate-600 to-slate-800",
  },
  {
    name: "Maya Gingsul",
    handle: "@mayahijab.co",
    text: "Penyelamat banget pas lagi kehabisan ide ngonten. Tinggal masukin foto produk, langsung dikasih ide video Tiktok + Script nya! Keren ASMA AI 👏",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "Kevin Candra.",
    handle: "@kevin_c",
    text: "Automasi di level yang berbeda. Buat UMKM yang mau scale up tapi budget terbatas, ASMA AI adalah asisten virtual terbaik yang bisa kalian sewa.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function CustomerReviews() {
  const col1 = [TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[2]];
  const col2 = [TESTIMONIALS[3], TESTIMONIALS[4], TESTIMONIALS[5]];
  const col3 = [TESTIMONIALS[6], TESTIMONIALS[7], TESTIMONIALS[8]];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Apa kata pelanggan tentang kami
        </h2>
      </div>

      <div className="relative h-[600px] md:h-[800px] max-w-7xl mx-auto px-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          <div className="hidden md:block">
            <ScrollingColumn testimonials={col1} duration={40} />
          </div>
          <ScrollingColumn testimonials={col2} duration={40} />
          <div className="hidden md:block">
            <ScrollingColumn testimonials={col3} duration={40} />
          </div>
        </div>
      </div>
    </section>
  );
}

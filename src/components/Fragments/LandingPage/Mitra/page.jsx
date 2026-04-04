export default function Mitra() {
  const partners = [
    "Dapur Tukang",
    "Sagaya Thrift",
    "Esteler FOMO",
    "Sorabi Panyaweyan",
    "Zegen Shoes",
    "Ruang Ngopi",
  ];

  return (
    <div className="border-y border-white/[0.07] py-12 overflow-hidden">
      <style>{`
        .ticker-track { display: flex; gap: 64px; animation: ticker 22s linear infinite; width: max-content; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <p className="text-center text-[11px] text-gray-600 uppercase tracking-[0.16em] mb-8">
        Dipercaya oleh
      </p>
      <div className="overflow-hidden">
        <div className="ticker-track">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="font-display text-[17px] font-semibold text-slate-600 hover:text-slate-900 whitespace-nowrap"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

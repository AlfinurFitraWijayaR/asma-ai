export const MethodologySection = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-8">
      <div className="">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2 text-center">
          Sumber Data Referensi:
        </p>
        <div className="flex justify-center gap-x-4 gap-y-1 text-[10px] text-slate-500 italic">
          <ul className="flex justify-between gap-10 text-xs text-indigo-600 space-y-1">
            <li>
              <a
                href="https://www.oecd.org/en/publications/oecd-msme-and-entrepreneurship-outlook-2024_03c62657-en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                OECD MSME Outlook 2024 (Standard Resiliensi)
              </a>
            </li>
            <li>
              <a
                href="https://www.bi.go.id/id/umkm/penelitian/Default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                Bank Indonesia: Profil Bisnis UMKM & Benchmark Margin
              </a>
            </li>
            <li>
              <a
                href="https://ojk.go.id/id/regulasi/Pages/POJK-Nomor-11-Tahun-2023.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                OJK: Parameter Kesehatan Kredit & Solvabilitas Usaha
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

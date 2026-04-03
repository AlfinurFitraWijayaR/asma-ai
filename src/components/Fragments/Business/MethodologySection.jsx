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
                href="https://www.oecd.org/content/dam/oecd/id/publications/reports/2024/11/oecd-economic-surveys-indonesia-2024_e3ab8960/9d9fdbd2-id.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                OECD MSME Outlook 2024 (Standard Resiliensi)
              </a>
            </li>
            <li>
              <a
                href="https://www.bi.go.id/id/umkm/penelitian/Documents/Profil%20Bisnis%20UMKM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                Bank Indonesia: Profil Bisnis UMKM & Benchmark Margin
              </a>
            </li>
            <li>
              <a
                href="https://www.ojk.go.id/id/regulasi/Documents/Pages/Batas-Maksimum-Pemberian-Kredit-BPR-dan-Batas-Maksimum-Penyaluran-Dana-BPRS/ABSTRAK%20SEOJK%2011%20SEOJK.03%202023%20-%20Batas%20Maksimum%20Pemberian%20Kredit%20BPR%20dan%20Batas%20Maksimum%20Penyaluran%20Dana%20BPRS.pdf"
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

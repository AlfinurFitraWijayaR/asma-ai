import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatIDR } from "@/lib/utils";
import { Store, Target, TrendingUp, Wallet } from "lucide-react";

export function StepOne({ data, onChange, onSelectChange, errors }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <Store className="w-6 h-6 text-violet-500" />
        <h2 className="text-xl font-semibold text-slate-800">Profil Usaha</h2>
      </div>
      <p className="text-zinc-500 mb-6 text-sm">
        Ceritakan sedikit tentang identitas usaha Anda.
      </p>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="namaUsaha">Nama Usaha</Label>
          <Input
            id="namaUsaha"
            name="namaUsaha"
            placeholder="Keripik Basreng Teuas"
            value={data.namaUsaha}
            onChange={onChange}
            className={errors.namaUsaha ? "border-red-500" : ""}
          />
          {errors.namaUsaha && (
            <p className="text-red-500 text-sm">{errors.namaUsaha}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2 relative">
            <Label htmlFor="namaPemilik">Nama Pemilik Usaha</Label>
            <Input
              id="namaPemilik"
              name="namaPemilik"
              placeholder="Mang Toha"
              value={data.namaPemilik}
              onChange={onChange}
              className={errors.namaPemilik ? "border-red-500" : ""}
            />
            {errors.namaPemilik && (
              <p className="text-red-500 text-sm">{errors.namaPemilik}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="alamat">Alamat</Label>
            <Input
              id="alamat"
              name="alamat"
              placeholder="Cigondewah, Bandung"
              value={data.alamat}
              onChange={onChange}
              className={errors.alamat ? "border-red-500" : ""}
            />
            {errors.alamat && (
              <p className="text-red-500 text-sm">{errors.alamat}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2 relative">
            <Label htmlFor="alamat">Kontak</Label>
            <Input
              type="number"
              id="kontak"
              name="kontak"
              placeholder="08111111111"
              value={data.kontak}
              onChange={onChange}
              className={errors.kontak ? "border-red-500" : ""}
            />
            {errors.kontak && (
              <p className="text-red-500 text-sm">{errors.kontak}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lamaUsaha">Lama Usaha Berjalan</Label>
            <Input
              id="lamaUsaha"
              name="lamaUsaha"
              placeholder="2 Tahun"
              value={data.lamaUsaha}
              onChange={onChange}
              className={errors.lamaUsaha ? "border-red-500" : ""}
            />
            {errors.lamaUsaha && (
              <p className="text-red-500 text-sm">{errors.lamaUsaha}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StepTwo({ data, onChange, errors }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <TrendingUp className="w-6 h-6 text-violet-500" />
        <h2 className="text-xl font-semibold text-slate-800">
          Kondisi Saat Ini
        </h2>
      </div>
      <p className="text-zinc-500 mb-6">
        Jelaskan kondisi keuangan dan masalah yang sedang dihadapi.
      </p>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="omzet">Omzet Rata-rata Bulanan (Rp)</Label>
          <Input
            id="omzet"
            name="omzet"
            type="number"
            placeholder="5000000"
            value={data.omzet}
            onChange={onChange}
            className={errors.omzet ? "border-red-500" : ""}
          />
          {errors.omzet && (
            <p className="text-red-500 text-sm">{errors.omzet}</p>
          )}
          {data.omzet && (
            <p className="text-xs text-purple-600 font-medium text-right">
              {formatIDR(data.omzet)}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="kendala">Kendala / Masalah Utama</Label>
          <Textarea
            id="kendala"
            name="kendala"
            placeholder="Ceritakan kendala Anda.&#10;Alatnya masih manual jadi produksi lambat, sering nolak pesanan karena gak keburu."
            className={`h-32 ${errors.kendala ? "border-red-500" : ""}`}
            value={data.kendala}
            onChange={onChange}
          />
          {errors.kendala && (
            <p className="text-red-500 text-sm">{errors.kendala}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function StepThree({ data, onChange, errors }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <Wallet className="w-6 h-6 text-violet-500" />
        <h2 className="text-xl font-semibold text-slate-800">Kebutuhan Dana</h2>
      </div>
      <p className="text-zinc-500 mb-6">
        Berapa dana yang Anda butuhkan dan untuk apa saja?
      </p>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="dana">Total Dana yang Dibutuhkan (Rp)</Label>
          <Input
            id="dana"
            name="dana"
            type="number"
            placeholder="15.000.000"
            value={data.dana}
            onChange={onChange}
            className={errors.dana ? "border-red-500" : ""}
          />
          {errors.dana && <p className="text-red-500 text-sm">{errors.dana}</p>}
          {data.dana && (
            <p className="text-xs text-purple-600 font-medium text-right">
              {formatIDR(data.dana)}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="penggunaan">Rencana Penggunaan Dana</Label>
          <Textarea
            id="penggunaan"
            name="penggunaan"
            placeholder="Rincian kasar pembelian.&#10;Beli mesin packaging otomatis (5 juta), Stok bahan baku (3 juta), Renovasi ruko (7 juta)."
            className={`h-32 ${errors.penggunaan ? "border-red-500" : ""}`}
            value={data.penggunaan}
            onChange={onChange}
          />
          {errors.penggunaan && (
            <p className="text-red-500 text-sm">{errors.penggunaan}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function StepFour({ data, onChange, errors }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-2">
        <Target className="w-6 h-6 text-violet-500" />
        <h2 className="text-xl font-semibold text-slate-800">Target Harapan</h2>
      </div>
      <p className="text-zinc-500 mb-6">
        Apa dampak positif jika Anda mendapatkan dana tersebut?
      </p>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="target">Target Setelah Dapat Dana</Label>
          <Textarea
            id="target"
            name="target"
            placeholder="Bayangkan masa depan usaha Anda.&#10;Bisa produksi 2x lipat, nambah 1 karyawan dari tetangga, dan omzet menaik."
            className={`h-40 ${errors.target ? "border-red-500" : ""}`}
            value={data.target}
            onChange={onChange}
          />
          {errors.target && (
            <p className="text-red-500 text-sm">{errors.target}</p>
          )}
        </div>
      </div>
    </div>
  );
}

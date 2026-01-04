import z from "zod";

export const proposalSchema = z.object({
  namaUsaha: z.string().min(1, "Nama usaha wajib diisi"),
  namaPemilik: z.string().min(1, "Nama pemilik wajib diisi"),
  alamat: z.string().min(1, "Alamat wajib diisi"),
  jenisUsaha: z.string().min(1, "Jenis usaha wajib diisi"),
  lamaUsaha: z.string().min(1, "Lama usaha wajib diisi"),
  omzet: z.union([z.string(), z.number()]).transform((val) => String(val)),
  kendala: z
    .string()
    .min(1, "Deskripsi kendala minimal 10 karakter agar AI lebih akurat"),
  dana: z.union([z.string(), z.number()]).transform((val) => String(val)),
  penggunaan: z.string().min(1, "Rencana penggunaan dana minimal 10 karakter"),
  target: z.string().min(1, "Target harapan minimal 10 karakter"),
});

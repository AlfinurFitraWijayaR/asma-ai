import { ArrowRight, Image } from "lucide-react";
import { Card } from "@/components/ui/card";
import ProtectedLink from "@/components/ui/protected-link";
import { Button } from "@/components/ui/button";

export const AnalyzeImageFeature = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full p-2">
        {/* Left: Upload Area */}
        <div className="relative group">
          <div
            className={`h-full min-h-[250px] rounded-xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center space-y-4 bg-violet-50/30`}
          >
            <div className="p-4">
              <Image className="w-20 h-20" />
            </div>
          </div>
        </div>

        {/* Right: AI Result */}
        <div className="flex flex-col justify-center space-y-4">
          <Card className="p-4 bg-white/80 border-violet-100 shadow-lg shadow-violet-500/5 relative overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />

            <div className="space-y-3 relative z-10">
              <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
              <div className="space-y-1">
                <p className="text-xl text-slate-700 leading-relaxed font-bold">
                  Rekomendasi Deskripsi E-Commerce
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  🔥 Odading Mang Oleh! Camilan manis gurih yang bikin nagih.
                  Dibuat oleh ultramen yang....
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xl text-slate-700 leading-relaxed font-bold">
                  Rekomendasi Caption Media Sosial
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  Udah pada tau Odading Mang Oleh guys? kalo belum....
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs text-blue-500">
                    #OdadingMangOleh
                  </span>
                  <span className="text-xs text-blue-500">#CamilanEnak</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xl text-slate-700 leading-relaxed font-bold">
                  Rekomendasi Ide Konten
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  1. Buat konten....
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <ProtectedLink href="/content-digital">
        <Button className="mt-6.5 w-2/3 mx-auto cursor-pointer bg-slate-900 h-10 rounded-md transition-colors flex items-center justify-center group shadow-md">
          Coba Sekarang
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </ProtectedLink>
    </>
  );
};

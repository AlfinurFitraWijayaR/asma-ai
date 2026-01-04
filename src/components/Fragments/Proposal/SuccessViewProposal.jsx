import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, Eye, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function SuccessViewProposal({ onPreview, onDownload }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 flex items-center justify-center">
      <Card className="w-full max-w-md bg-white shadow-2xl overflow-hidden border-0">
        <div className="bg-violet-600 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg"
          >
            <CheckCircle2 className="w-10 h-10 text-violet-600" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white relative z-10">
            Proposal Siap!
          </h1>
          <p className="text-violet-100 mt-2 relative z-10">
            Dokumen Anda telah disusun rapi oleh ASMA AI.
          </p>
        </div>

        <div className="p-8 space-y-4">
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex items-start space-x-3">
            <FileText className="w-8 h-8 text-slate-400 mt-1" />
            <div>
              <h4 className="font-semibold text-slate-800">
                Proposal by ASMA AI.pdf
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onPreview}
              className="w-full border-slate-300 h-12 text-slate-700"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview Proposal
            </Button>
            <Button
              variant="success"
              onClick={onDownload}
              className="w-full h-12 shadow-lg shadow-violet-400"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print / Save as PDF
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

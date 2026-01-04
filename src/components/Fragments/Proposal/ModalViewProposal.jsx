import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, X } from "lucide-react";

export function ModalViewProposal({ content, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <Eye className="w-4 h-4" /> Preview Dokumen
          </h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-100 p-4 md:p-8">
          <div className="bg-white shadow-sm p-8 min-h-[297mm] mx-auto max-w-[210mm] text-slate-900">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 bg-white">
          <Button onClick={onClose} className="w-full">
            Tutup Preview
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

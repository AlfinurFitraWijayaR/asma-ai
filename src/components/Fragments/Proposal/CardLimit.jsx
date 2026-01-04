import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { X } from "lucide-react";

export default function CardLimit({ limitError, setLimitError }) {
  return (
    <>
      <AnimatePresence>
        {limitError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setLimitError(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-red-500 p-6 text-center relative">
                <button
                  onClick={() => setLimitError(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Batas Limit Tercapai
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {limitError}
                </p>
                <Button
                  onClick={() => setLimitError(null)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Mengerti
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

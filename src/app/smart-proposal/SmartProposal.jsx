"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";
import { LoadingProposal } from "@/components/Fragments/Proposal/LoadingProposal";
import { SuccessViewProposal } from "@/components/Fragments/Proposal/SuccessViewProposal";
import { ModalViewProposal } from "@/components/Fragments/Proposal/ModalViewProposal";
import { slideVariants } from "@/components/Fragments/Animation/SlideVariant";
import {
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
} from "@/components/Fragments/Proposal/FormProposal";
import CardLimit from "@/components/Fragments/Proposal/CardLimit";
import { Steps } from "@/components/Fragments/Proposal/Steps";

export default function SmartProposal() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedProposal, setGeneratedProposal] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState({});
  const [limitError, setLimitError] = useState(null);
  const [formData, setFormData] = useState({
    namaUsaha: "",
    namaPemilik: "",
    alamat: "",
    jenisUsaha: "Kuliner",
    lamaUsaha: "",
    omzet: "",
    kendala: "",
    dana: "",
    penggunaan: "",
    target: "",
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, jenisUsaha: value }));
    if (errors.jenisUsaha) {
      setErrors((prev) => ({ ...prev, jenisUsaha: "" }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.namaUsaha.trim())
        newErrors.namaUsaha = "Nama usaha wajib diisi";
      if (!formData.namaPemilik.trim())
        newErrors.namaPemilik = "Nama pemilik wajib diisi";
      if (!formData.alamat.trim()) newErrors.alamat = "Alamat wajib diisi";
      if (!formData.jenisUsaha)
        newErrors.jenisUsaha = "Jenis usaha wajib dipilih";
      if (!formData.lamaUsaha.trim())
        newErrors.lamaUsaha = "Lama usaha wajib diisi";
    } else if (currentStep === 2) {
      if (!formData.omzet) newErrors.omzet = "Omzet rata-rata wajib diisi";
      if (!formData.kendala.trim())
        newErrors.kendala = "Kendala utama wajib diisi";
    } else if (currentStep === 3) {
      if (!formData.dana) newErrors.dana = "Jumlah dana wajib diisi";
      if (!formData.penggunaan.trim())
        newErrors.penggunaan = "Rencana penggunaan dana wajib diisi";
    } else if (currentStep === 4) {
      if (!formData.target.trim())
        newErrors.target = "Target harapan wajib diisi";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  };

  const loadingMessages = [
    "Menganalisis profil usaha Anda...",
    "Menyusun latar belakang masalah...",
    "Menghitung proyeksi anggaran...",
    "Memperhalus bahasa menjadi formal...",
    "Menyiapkan dokumen akhir...",
  ];

  useEffect(() => {
    if (isLoading) {
      let i = 0;
      setLoadingMessage(loadingMessages[0]);
      const interval = setInterval(() => {
        i = (i + 1) % loadingMessages.length;
        setLoadingMessage(loadingMessages[i]);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleNext = async () => {
    if (!validateStep(step)) return;
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      try {
        const response = await fetch("/api/proposal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.status === 429) {
          setLimitError(data.error);
          return;
        }

        if (data.success) {
          setGeneratedProposal(data.data);
          setIsSuccess(true);
        } else {
          alert("Gagal membuat proposal: " + data.error);
        }
      } catch (error) {
        console.error(error);
        setLimitError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleDownloadPdf = () => {
    if (!generatedProposal) return;
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Proposal - ${formData.namaUsaha}</title>
            <style>
              @media print {
                @page { margin: 2cm; size: A4; }
                body { -webkit-print-color-adjust: exact; }
              }
              body { font-family: 'Times New Roman', serif; }
            </style>
          </head>
          <body>
            ${generatedProposal}
            <script>
              window.onload = function() { window.print(); }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  if (isSuccess) {
    return (
      <>
        <SuccessViewProposal
          onPreview={() => setShowPreview(true)}
          onDownload={handleDownloadPdf}
        />
        {showPreview && (
          <ModalViewProposal
            content={generatedProposal}
            onClose={() => setShowPreview(false)}
          />
        )}
      </>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-16 px-8 sm:px-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-4xl font-bold text-gray-900">
            Smart Proposal Generator - Buat Proposal Pengajuan Dana dalam
            Hitungan Menit
          </h1>
        </div>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
          Transformasikan data mentah Anda menjadi proposal pendanaan yang solid
          dengan bantuan AI. Sistem kami akan memproses informasi utama secara
          instan, menghasilkan analisis prediktif dan rekomendasi narasi yang
          presisi untuk membantu Anda mengambil keputusan strategis demi
          memaksimalkan peluang persetujuan dana
        </p>
      </div>

      <Card className="mx-auto w-full max-w-2xl bg-white/80 backdrop-blur-xl border-white/40 shadow-xl overflow-hidden relative">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <motion.div
            className="h-full bg-violet-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="p-6 md:p-8">
          {isLoading ? (
            <LoadingProposal message={loadingMessage} />
          ) : (
            <>
              {/* Step Indicator */}
              <div className="flex items-center space-x-2 mb-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm">
                  {step}
                </span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Dari {totalSteps} Langkah
                </span>
              </div>

              {/* Form Content */}
              <AnimatePresence mode="wait" custom={step}>
                <motion.div
                  key={step}
                  custom={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="min-h-[320px]"
                >
                  {step === 1 && (
                    <StepOne
                      data={formData}
                      onChange={handleInputChange}
                      onSelectChange={handleSelectChange}
                      errors={errors}
                    />
                  )}
                  {step === 2 && (
                    <StepTwo
                      data={formData}
                      onChange={handleInputChange}
                      errors={errors}
                    />
                  )}
                  {step === 3 && (
                    <StepThree
                      data={formData}
                      onChange={handleInputChange}
                      errors={errors}
                    />
                  )}
                  {step === 4 && (
                    <StepFour
                      data={formData}
                      onChange={handleInputChange}
                      errors={errors}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>

        {/* Button Navigation */}
        {!isLoading && (
          <div className="p-6 border-t border-slate-100 bg-white/50 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className={`${
                step === 1 ? "invisible" : "visible"
              } text-slate-500 cursor-pointer`}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Kembali
            </Button>

            <Button
              onClick={handleNext}
              className={
                step === 4
                  ? "bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-200 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              {step === 4 ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  Buat Proposal Sekarang
                </>
              ) : (
                <>
                  Lanjut
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        )}
      </Card>

      <Steps />
      <CardLimit limitError={limitError} setLimitError={setLimitError} />
    </div>
  );
}

"use client";

import { Check } from "lucide-react";
import AdminModal from "@/components/molecules/AdminModal";

interface AdminModalSuksesProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function AdminModalSukses({
  isOpen,
  message,
  onClose,
}: AdminModalSuksesProps) {
  return (
    <AdminModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
      <div className="flex flex-col items-center px-2 py-2 text-center sm:px-6 sm:py-4">
        {/* Icon centang hijau */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-600 sm:mb-5 sm:h-14 sm:w-14">
          <Check className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" strokeWidth={3} />
        </div>

        {/* Teks */}
        <p className="mb-5 text-base font-bold text-black sm:mb-6 sm:text-lg">
          {message}
        </p>

        {/* Tombol OK — gradient ungu */}
        <button
          onClick={onClose}
          className="rounded-[10px] border border-[#5A0FB6] bg-linear-to-r from-[#5A0FB6] via-[#6912DA] to-[#670AD7]/60 px-8 py-2.5 text-sm font-bold text-white transition hover:opacity-90 sm:px-10 sm:text-base"
        >
          OK
        </button>
      </div>
    </AdminModal>
  );
}
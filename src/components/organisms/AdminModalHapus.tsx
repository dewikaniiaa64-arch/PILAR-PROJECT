"use client";

import AdminModal from "@/components/molecules/AdminModal";

interface AdminModalHapusProps {
  isOpen: boolean;
  data: any;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AdminModalHapus({
  isOpen,
  data,
  onClose,
  onConfirm,
}: AdminModalHapusProps) {
  if (!data) return null;

  return (
    <AdminModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="text-center">
        {/* Judul */}
        <h2 className="mb-2 text-xl font-bold text-black sm:mb-3 sm:text-2xl">
          Hapus?
        </h2>

        {/* Deskripsi */}
        <p className="mb-5 text-sm font-medium text-black sm:mb-6 sm:text-base">
          Apakah kamu yakin ingin menghapusnya?
        </p>

        {/* Garis horizontal */}
        <div className="mx-auto mb-5 max-w-xs border-t border-black sm:mb-6" />

        {/* Tombol Batal & Hapus — dipisah garis vertikal */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onClose}
            className="text-base font-medium text-black transition hover:opacity-70 sm:text-xl"
          >
            Batal
          </button>

          {/* Garis vertikal */}
          <div className="h-6 border-l border-black sm:h-8" />

          <button
            onClick={onConfirm}
            className="text-base font-medium text-red-500 transition hover:opacity-70 sm:text-xl"
          >
            Hapus
          </button>
        </div>
      </div>
    </AdminModal>
  );
}
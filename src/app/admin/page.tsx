"use client";

import { useState } from "react";
import AdminTable from "@/components/organisms/AdminTable";
import AdminModalTambah from "@/components/organisms/AdminModalTambah";
import AdminModalSukses from "@/components/organisms/AdminModalSukses";

export default function AdminDashboard() {
  const [tambahOpen, setTambahOpen] = useState(false);
  const [suksesMessage, setSuksesMessage] = useState<string | null>(null);

  const handleTambah = (newData: any) => {
    // ⭐ Ambil data dari localStorage
    const saved = localStorage.getItem("tempatData");
    const existingData = saved ? JSON.parse(saved) : [];

    // ⭐ Bikin ID baru
    const newId =
      existingData.length > 0
        ? Math.max(...existingData.map((t: any) => t.id)) + 1
        : 1;

    // ⭐ Tambah data baru
    const updatedData = [...existingData, { ...newData, id: newId }];

    // ⭐ Simpan ke localStorage
    localStorage.setItem("tempatData", JSON.stringify(updatedData));

    // ⭐ Trigger event — biar AdminTable reload
    window.dispatchEvent(new Event("tempatDataUpdated"));

    // ⭐ Tutup modal & tampilkan sukses
    setTambahOpen(false);
    setSuksesMessage("Data berhasil ditambahkan");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header — judul kiri, tombol kanan */}
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-900 sm:text-3xl md:text-4xl">
            Hallo, Admin!
          </h1>
          <p className="mt-1 text-sm text-purple-900">
            Semoga hari ini penuh dengan hal baik.
            <br />
            Kelola informasi perusahaan dan peluang praktik kerja lapangan.
          </p>
        </div>

        <button
          onClick={() => setTambahOpen(true)}
          className="w-full rounded-[10px] border border-[#5A0FB6] bg-linear-to-r from-[#5A0FB6] via-[#6912DA] to-[#670AD7]/60 px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:px-8"
        >
          + Tambah Tempat PKL
        </button>
      </div>

      {/* Tabel */}
      <AdminTable />

      {/* Modal Tambah */}
      <AdminModalTambah
        isOpen={tambahOpen}
        onClose={() => setTambahOpen(false)}
        onSimpan={handleTambah}
      />

      {/* Modal Sukses */}
      <AdminModalSukses
        isOpen={!!suksesMessage}
        message={suksesMessage || ""}
        onClose={() => setSuksesMessage(null)}
      />
    </div>
  );
}
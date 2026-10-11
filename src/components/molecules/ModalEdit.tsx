"use client";

import { useState, useEffect } from "react";

type ModalEditKategoriProps = {
    buka: boolean;
    nilaiAwal: string;
    onClose: () => void;
    onSimpan: (nilaiBaru: string) => void;
};

export default function ModalEdit({
    buka,
    nilaiAwal,
    onClose,
    onSimpan,
}: ModalEditKategoriProps) {
    const [nilai, setNilai] = useState(nilaiAwal);

    // Update nilai kalau nilaiAwal berubah (saat modal dibuka untuk kategori berbeda)
    useEffect(() => {
        setNilai(nilaiAwal);
    }, [nilaiAwal, buka]);

    if (!buka) return null;

    const handleSimpan = () => {
        if (nilai.trim() === "") return;
        onSimpan(nilai);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
                {/* Judul */}
                <h2 className="text-lg font-bold text-purple-900 mb-1">
                    Edit Kategori
                </h2>

                {/* Garis pemisah */}
                <div className="border-t border-gray-300 mb-4" />

                {/* Label & Input */}
                <label className="text-sm text-gray-500 mb-2 block">
                    Nama Kategori
                </label>
                <input
                    type="text"
                    value={nilai}
                    onChange={(e) => setNilai(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500 mb-6"
                />

                {/* Tombol */}
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-lg border border-purple-300 text-purple-700 font-semibold py-2.5 hover:bg-purple-50 transition"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={handleSimpan}
                        className="flex-1 rounded-lg bg-linear-to-r from-[#5A0FB6] to-[#8B5CF6] text-white font-semibold py-2.5 hover:opacity-90 transition"
                    >
                        Simpan Perubahan
                    </button>
                </div>
            </div>
        </div>
    );
}
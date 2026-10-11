"use client";

import { useState } from "react";
import ModalHapus from "@/components/molecules/ModalHapus";
import ModalSukses from "@/components/molecules/ModalSukses";
import ModalEdit from "@/components/molecules/ModalEdit";

export default function AdminKategoriPage() {
    const [modalHapusBuka, setModalHapusBuka] = useState(false);
    const [modalSuksesBuka, setModalSuksesBuka] = useState(false);
    const [modalEditBuka, setModalEditBuka] = useState(false);
    const [kategoriDipilih, setKategoriDipilih] = useState<string>("");



    const handleKonfirmasiHapus = () => {
        setModalHapusBuka(false);
        setModalSuksesBuka(true);
    };
    const handleBukaEdit = (namaKategori: string) => {
        setKategoriDipilih(namaKategori);
        setModalEditBuka(true);
    };

    const handleSimpanEdit = (nilaiBaru: string) => {
        console.log("Kategori diubah jadi:", nilaiBaru);
        // TODO: nanti update data di sini
        setModalEditBuka(false);
        setModalSuksesBuka(true);
    };

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <p className="text-xs text-gray-500 mb-1">PENGELOMPOKAN DATA</p>
                <h1 className="text-3xl font-bold text-purple-900 mb-1">Kategori</h1>
                <p className="text-sm text-gray-600">
                    Atur kategori bidang industri untuk memudahkan pencarian tempat PKL.
                </p>
            </div>

            {/* Grid: Form Tambah (kiri) + Daftar Kategori (kanan) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Kolom Kiri: Form Tambah */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="font-semibold text-purple-900 mb-4">
                            Tambah Kategori
                        </h2>
                        <p className="text-xs text-gray-500 mb-4">
                            Masukan Nama Kategori Bidang Industri Baru
                        </p>

                        <div className="flex flex-col gap-3">
                            <div>
                                <label className="text-xs font-medium text-gray-700 mb-1 block">
                                    Nama Kategori
                                </label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Kesehatan"
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>
                            <button
                                type="button"
                                className="rounded bg-purple-700 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-800"
                            >
                                + Tambah Kategori
                            </button>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Daftar Kategori */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="mb-4">
                            <h2 className="font-semibold text-purple-900">
                                Daftar Kategori
                            </h2>
                            <p className="text-xs text-gray-500">4 Kategori tersedia</p>
                        </div>

                        <ul className="flex flex-col gap-3">
                            <li className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                                    <div>
                                        <p className="font-medium text-sm">Teknologi & Industri</p>
                                        <p className="text-xs text-gray-500">10 perusahaan</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-gray-400">
                                    <button
                                        onClick={() => handleBukaEdit("Teknologi & Industri")}
                                        className="hover:text-purple-700"
                                    >
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.4317 4.73793L5.57 11.5996C4.69917 12.4704 4.26333 12.9063 3.7325 13.2029C3.20167 13.4996 1.94833 13.7979 0.75 14.0829C1.035 12.8838 1.33333 11.6313 1.63 11.1004C1.92667 10.5696 2.3625 10.1346 3.23333 9.26293L10.095 2.40127L11.2633 1.23377C11.5731 0.924016 11.9932 0.75 12.4312 0.75C12.8693 0.75 13.2894 0.924016 13.5992 1.23377C13.9089 1.54352 14.0829 1.96363 14.0829 2.40168C14.0829 2.83974 13.9089 3.25985 13.5992 3.5696L12.4317 4.73793ZM10.095 2.40127L12.4317 4.73793" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.58337 14.083H11.5834" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" />
                                        </svg>

                                    </button>
                                    {/* TOMBOL HAPUS — buka modal */}
                                    <button
                                        onClick={() => setModalHapusBuka(true)}
                                        className="hover:text-red-500"
                                    >
                                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00005 7.2002H8.80005V13.6002H8.00005V7.2002ZM9.60005 7.2002H10.4V13.6002H9.60005V7.2002ZM11.2 7.2002H12V13.6002H11.2V7.2002ZM4.80005 4.8002H15.2V5.6002H4.80005V4.8002ZM12 4.8002H11.2V4.4002C11.2 4.1602 11.04 4.0002 10.8 4.0002H9.20005C8.96005 4.0002 8.80005 4.1602 8.80005 4.4002V4.8002H8.00005V4.4002C8.00005 3.7202 8.52005 3.2002 9.20005 3.2002H10.8C11.48 3.2002 12 3.7202 12 4.4002V4.8002Z" fill="#9CA3AF" />
                                            <path d="M12.4 16.0002H7.59998C6.95998 16.0002 6.39998 15.4802 6.31998 14.8402L5.59998 5.24016L6.39998 5.16016L7.11998 14.7602C7.11998 15.0002 7.35998 15.2002 7.59998 15.2002H12.4C12.64 15.2002 12.84 15.0002 12.88 14.7602L13.6 5.16016L14.4 5.24016L13.68 14.8402C13.6 15.4802 13.04 16.0002 12.4 16.0002Z" fill="#9CA3AF" />
                                        </svg>

                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ModalHapus
                buka={modalHapusBuka}
                onClose={() => setModalHapusBuka(false)}
                onKonfirmasi={handleKonfirmasiHapus}
            />

            <ModalSukses
                buka={modalSuksesBuka}
                onClose={() => setModalSuksesBuka(false)}
            />

            {/* Modal Edit — baru */}
            <ModalEdit
                buka={modalEditBuka}
                nilaiAwal={kategoriDipilih}
                onClose={() => setModalEditBuka(false)}
                onSimpan={handleSimpanEdit}
            />
        </div>
    );
}
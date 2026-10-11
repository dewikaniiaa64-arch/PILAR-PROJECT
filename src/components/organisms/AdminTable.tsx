"use client";

import { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import AdminTableRow from "@/components/molecules/AdminTableRow";
import AdminModalTambah from "@/components/organisms/AdminModalTambah";
import AdminModalEdit from "@/components/organisms/AdminModalEdit";
import AdminModalHapus from "@/components/organisms/AdminModalHapus";
import AdminModalSukses from "@/components/organisms/AdminModalSukses";

const initialData = [
  {
    id: 1,
    nama: "Alfamart",
    logo: "/logos/alfamart.png",
    kategori: "Bisnis, Keuangan & Retail",
    posisi: "Stok Keeper, Kasir, Pramuniaga",
    kuota: 3,
    lokasi: "Sumedang, Jawa Barat",
    alamat: "Jl. Raya Sumedang No. 12",
    maps: "https://maps.app.goo.gl/xxxxx",
    durasi: "3 bulan",
    jam: "08.00 - 17.00",
    email: "alfamart@email.com",
    website: "https://alfamart.id",
    instagram: "https://instagram.com/alfamart",
    telepon: "+62 812 3456 7890",
    deskripsi: "Alfamart toko retail...",
    kegiatan: "Menyusun produk di display",
  },
  {
    id: 2,
    nama: "Disdik",
    logo: "/logos/Disdikk.png",
    kategori: "Pemerintahan & Pelayanan Publik",
    posisi: "Administrasi, Pengelolaan Data",
    kuota: 24,
    lokasi: "Sumedang, Jawa Barat",
    alamat: "Jl. Prabu Geusan Ulun No. 1",
    maps: "https://maps.app.goo.gl/yyyyy",
    durasi: "3 bulan",
    jam: "08.00 - 16.00",
    email: "diskominfo@email.com",
    website: "https://diskominfo.go.id",
    instagram: "https://instagram.com/diskominfo",
    telepon: "+62 812 1111 2222",
    deskripsi: "Dinas Komunikasi dan Informatika",
    kegiatan: "Administrasi umum",
  },
  {
    id: 3,
    nama: "PT.Chlorine Digital",
    logo: "/logos/CHLORINE.jpeg",
    kategori: "Teknologi & Industri",
    posisi: "Content Creator, Talent/Host, Videografer",
    kuota: 5,
    lokasi: "Bandung, Jawa Barat",
    alamat: "Jl. Asia Afrika No. 100",
    maps: "https://maps.app.goo.gl/zzzzz",
    durasi: "6 bulan",
    jam: "09.00 - 18.00",
    email: "cahaya@email.com",
    website: "https://cahayadigital.id",
    instagram: "https://instagram.com/cahayadigital",
    telepon: "+62 812 3333 4444",
    deskripsi: "Perusahaan digital kreatif",
    kegiatan: "Produksi konten digital",
  },
  {
    id: 4,
    nama: "Bank Bjb",
    logo: "/logos/Bank BJB.jpeg",
    kategori: "Bisnis, Keuangan & Retail",
    posisi: "Customer Service Assistant, Administrasi",
    kuota: 4,
    lokasi: "Sumedang, Jawa Barat",
    alamat: "Jl. Mayor Abdurahman No. 5",
    maps: "https://maps.app.goo.gl/wwwww",
    durasi: "3 bulan",
    jam: "08.00 - 17.00",
    email: "bankbjb@email.com",
    website: "https://bankbjb.co.id",
    instagram: "https://instagram.com/bankbjb",
    telepon: "+62 812 5555 6666",
    deskripsi: "Bank Pembangunan Daerah Jawa Barat",
    kegiatan: "Pelayanan nasabah",
  },
];

const KATEGORI_LIST = [
  "Teknologi & Industri",
  "Pemerintahan & Pelayanan Publik",
  "Bisnis, Keuangan & Retail",
  "Pendidikan & Administrasi",
];

export default function AdminTable() {
  const [tempatData, setTempatData] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [hapusItem, setHapusItem] = useState<any>(null);
  const [tambahOpen, setTambahOpen] = useState(false);
  const [suksesMessage, setSuksesMessage] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem("tempatData");
      if (saved) {
        try {
          setTempatData(JSON.parse(saved));
        } catch {
          setTempatData(initialData);
        }
      } else {
        setTempatData(initialData);
        localStorage.setItem("tempatData", JSON.stringify(initialData));
      }
    };

    loadData();

    const handleUpdate = () => loadData();
    window.addEventListener("tempatDataUpdated", handleUpdate);

    setIsLoaded(true);

    return () => {
      window.removeEventListener("tempatDataUpdated", handleUpdate);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && tempatData.length > 0) {
      localStorage.setItem("tempatData", JSON.stringify(tempatData));
    }
  }, [tempatData, isLoaded]);

  const filtered = tempatData.filter(
    (t) =>
      t.nama.toLowerCase().includes(search.toLowerCase()) ||
      t.kategori.toLowerCase().includes(search.toLowerCase()) ||
      t.lokasi.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = 100;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleSimpanEdit = (updatedData: any) => {
    setTempatData((prev) =>
      prev.map((t) => (t.id === updatedData.id ? updatedData : t))
    );
    setEditItem(null);
    setSuksesMessage("Perubahan Tersimpan");
  };

  const handleHapus = () => {
    setTempatData((prev) => prev.filter((t) => t.id !== hapusItem.id));
    setHapusItem(null);
    setSuksesMessage("Data berhasil dihapus");
  };

  const handleTambah = (newData: any) => {
    const newId =
      tempatData.length > 0
        ? Math.max(...tempatData.map((t) => t.id)) + 1
        : 1;
    setTempatData((prev) => [...prev, { ...newData, id: newId }]);
    setTambahOpen(false);
    setSuksesMessage("Data berhasil ditambahkan");
  };

  return (
    <>
      <div className="rounded-xl border border-gray-300 bg-white sm:rounded-[13px]">
        
        {/* FILTER — search KIRI, dropdown KANAN */}
        <div className="flex flex-col gap-3 border-b border-gray-200 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          {/* Search — KIRI */}
          <div className="flex h-10 w-full items-center gap-2 rounded-[4] border border-[#A78BC9] bg-white px-4 py-2 text-[#582A86] focus-within:border-[#5A0FB6] sm:max-w-md">
            <Search className="h-4 w-4 shrink-0 text-[#A78BC9]" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari perusahaan, lokasi, posisi"
              className="h-full w-full text-sm text-[#5B2A86] outline-none placeholder:text-[#5B2A86]"
            />
          </div>

          {/* Dropdown — KANAN */}
          <select className="h-10 w-full rounded-[4] border border-[#A78BC9] bg-white px-4 py-2 text-sm text-[#582A86] focus:border-[#5A0FB6] focus:outline-none sm:w-56">
            <option>Semua Kategori</option>
            {KATEGORI_LIST.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>

        {/* TABEL */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs font-medium text-gray-400">
              <tr>
                <th className="px-3 py-3 md:px-4">Perusahaan</th>
                <th className="px-3 py-3 md:px-4">Kategori</th>
                <th className="px-3 py-3 md:px-4">Posisi</th>
                <th className="px-3 py-3 md:px-4">Kuota</th>
                <th className="px-3 py-3 md:px-4">Lokasi</th>
                <th className="px-3 py-3 md:px-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((t) => (
                  <AdminTableRow
                    key={t.id}
                    data={t}
                    onEdit={() => setEditItem(t)}
                    onHapus={() => setHapusItem(t)}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-sm text-gray-500"
                  >
                    Belum ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION — responsive */}
        <div className="flex items-center justify-center gap-2 border-t border-gray-200 p-3 text-sm sm:gap-4 sm:p-4">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#5B2A86] transition hover:bg-purple-100 disabled:opacity-30 disabled:hover:bg-transparent sm:h-9 sm:w-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* 1, 2, 3 */}
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition sm:h-9 sm:w-9 sm:text-base ${
                currentPage === page
                  ? "text-white"
                  : "text-[#2D015C] hover:bg-purple-100"
              }`}
              style={
                currentPage === page
                  ? {
                      backgroundImage:
                        "radial-gradient(circle at center, #6912DA 0%, #5B2A86 100%)",
                    }
                  : undefined
              }
            >
              {page}
            </button>
          ))}

          {/* Titik-titik */}
          <span className="text-[#2D015C]">...</span>

          {/* 100 */}
          <button
            onClick={() => setCurrentPage(100)}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition sm:h-9 sm:w-9 sm:text-base ${
              currentPage === 100
                ? "text-white"
                : "text-[#2D015C] hover:bg-purple-100"
            }`}
            style={
              currentPage === 100
                ? {
                    backgroundImage:
                      "radial-gradient(circle at center, #6912DA 0%, #5B2A86 100%)",
                  }
                : undefined
            }
          >
            100
          </button>

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#5B2A86] transition hover:bg-purple-100 disabled:opacity-30 disabled:hover:bg-transparent sm:h-9 sm:w-9"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Chevrons Right */}
          <button
            onClick={() => setCurrentPage(100)}
            disabled={currentPage === 100}
            className="hidden h-8 w-8 items-center justify-center rounded-full text-[#5B2A86] transition hover:bg-purple-100 disabled:opacity-30 disabled:hover:bg-transparent sm:flex sm:h-9 sm:w-9"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* MODALS */}
      <AdminModalTambah
        isOpen={tambahOpen}
        onClose={() => setTambahOpen(false)}
        onSimpan={handleTambah}
      />

      <AdminModalEdit
        isOpen={!!editItem}
        data={editItem}
        onClose={() => setEditItem(null)}
        onSimpan={handleSimpanEdit}
      />

      <AdminModalHapus
        isOpen={!!hapusItem}
        data={hapusItem}
        onClose={() => setHapusItem(null)}
        onConfirm={handleHapus}
      />

      <AdminModalSukses
        isOpen={!!suksesMessage}
        message={suksesMessage || ""}
        onClose={() => setSuksesMessage(null)}
      />
    </>
  );
}
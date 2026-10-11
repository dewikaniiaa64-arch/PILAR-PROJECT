"use client";

import { useState } from "react";
import { X } from "lucide-react";
import AdminModal from "@/components/molecules/AdminModal";

interface AdminModalTambahProps {
  isOpen: boolean;
  onClose: () => void;
  onSimpan: (newData: any) => void;
}

const KATEGORI_LIST = [
  "Teknologi & Industri",
  "Pemerintahan & Pelayanan Publik",
  "Bisnis, Keuangan & Retail",
  "Pendidikan & administrasi",
];

export default function AdminModalTambah({
  isOpen,
  onClose,
  onSimpan,
}: AdminModalTambahProps) {
  const [form, setForm] = useState<any>({
    nama: "",
    kategori: "",
    lokasi: "",
    maps: "",
    posisi: "",
    kuota: "",
    durasi: "",
    kegiatan: "",
    telepon: "",
    email: "",
    website: "",
    foto: "",
    deskripsi: "",
  });

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSimpan = () => {
    onSimpan(form);

    setForm({
      nama: "",
      kategori: "",
      lokasi: "",
      maps: "",
      posisi: "",
      kuota: "",
      durasi: "",
      kegiatan: "",
      telepon: "",
      email: "",
      website: "",
      foto: "",
      deskripsi: "",
    });
  };

  return (
    <AdminModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      {/* ===== HEADER ===== */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-black sm:mb-3 sm:text-xs">
            Data Baru
          </p>
          <h2 className="text-lg font-bold text-purple-900 sm:text-xl">
            Tambah tempat PKL
          </h2>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-700 transition hover:bg-gray-200"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>

      {/* Garis pemisah */}
      <div className="mb-4 border-t border-gray-300 sm:mb-5" />

      {/* ===== FORM — 2 KOLOM ===== */}
      <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 md:grid-cols-2">
        <Field
          label="Nama perusahaan"
          placeholder="Contoh: Alfamart"
          value={form.nama}
          onChange={(v) => handleChange("nama", v)}
        />
        <Field
          label="Kategori"
          placeholder="Pilih kategori"
          value={form.kategori}
          onChange={(v) => handleChange("kategori", v)}
          select
        />
        <Field
          label="Lokasi"
          placeholder="Contoh: Sumedang, Jawa Barat"
          value={form.lokasi}
          onChange={(v) => handleChange("lokasi", v)}
        />
        <Field
          label="Link Google Maps"
          placeholder="https://maps.app.goo.gl/..."
          value={form.maps}
          onChange={(v) => handleChange("maps", v)}
        />
        <Field
          label="Role/ Posisi"
          placeholder="Contoh: Kasir, Pramuniaga"
          value={form.posisi}
          onChange={(v) => handleChange("posisi", v)}
        />
        <Field
          label="Kuota"
          placeholder="Contoh: 3"
          value={form.kuota}
          onChange={(v) => handleChange("kuota", v)}
        />
        <Field
          label="Jurusan yang sesuai"
          placeholder="Contoh: PPLG"
          value={form.durasi}
          onChange={(v) => handleChange("durasi", v)}
        />
        <Field
          label="Kegiatan"
          placeholder="Contoh: Menyusun produk"
          value={form.kegiatan}
          onChange={(v) => handleChange("kegiatan", v)}
        />
        <Field
          label="Telepon"
          placeholder="+62 812 ..."
          value={form.telepon}
          onChange={(v) => handleChange("telepon", v)}
        />
        <Field
          label="Email"
          placeholder="email@perusahaan.com"
          value={form.email}
          onChange={(v) => handleChange("email", v)}
        />
        <Field
          label="Website"
          placeholder="https://..."
          value={form.website}
          onChange={(v) => handleChange("website", v)}
        />
        <Field
          label="Url Foto Perusahaan"
          placeholder="https://..."
          value={form.foto}
          onChange={(v) => handleChange("foto", v)}
        />
      </div>

      {/* Tentang Perusahaan */}
      <div className="mt-4">
        <Field
          label="Tentang Perusahaan"
          placeholder="Deskripsi singkat perusahaan..."
          value={form.deskripsi}
          onChange={(v) => handleChange("deskripsi", v)}
          textarea
        />
      </div>

      {/* ===== ACTIONS ===== */}
      <div className="mt-5 flex flex-col-reverse gap-3 border-t border-gray-300 pt-4 sm:mt-6 sm:flex-row sm:justify-end sm:pt-5">
        <button
          onClick={onClose}
          className="w-full rounded-[10px] border border-[#A78BC9] bg-white px-6 py-2.5 text-sm font-medium text-[#582A86] transition hover:bg-gray-50 sm:w-auto sm:px-8"
        >
          Batal
        </button>
        <button
          onClick={handleSimpan}
          className="w-full rounded-[10px] border border-[#5A0FB6] bg-linear-to-r from-[#5A0FB6] via-[#6912DA] to-[#670AD7]/60 px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:px-8"
        >
          Simpan
        </button>
      </div>
    </AdminModal>
  );
}

/* ===== FIELD REUSABLE ===== */
function Field({
  label,
  placeholder,
  value,
  onChange,
  select,
  textarea,
}: {
  label: string;
  placeholder?: string;
  value: string | number;
  onChange: (v: string) => void;
  select?: boolean;
  textarea?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-gray-700">{label}</label>
      {select ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 rounded-[6] border border-gray-300 bg-white px-3 text-sm text-black focus:border-[#5A0FB6] focus:outline-none"
        >
          <option value="">{placeholder}</option>
          {KATEGORI_LIST.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="rounded-[6] border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:border-[#5A0FB6] focus:outline-none"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 rounded-[6] border border-gray-300 bg-white px-3 text-sm text-black focus:border-[#5A0FB6] focus:outline-none"
        />
      )}
    </div>
  );
}
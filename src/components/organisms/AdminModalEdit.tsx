"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import AdminModal from "@/components/molecules/AdminModal";

const KATEGORI_LIST = [
  "Teknologi & Industri",
  "Pemerintahan & Pelayanan Publik",
  "Bisnis, Keuangan & Retail",
  "Pendidikan & administrasi",
];

interface AdminModalEditProps {
  isOpen: boolean;
  data: any;
  onClose: () => void;
  onSimpan: (updatedData: any) => void;
}

export default function AdminModalEdit({
  isOpen,
  data,
  onClose,
  onSimpan,
}: AdminModalEditProps) {
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    if (data) setForm({ ...data });
  }, [data]);

  if (!data) return null;

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSimpan = () => {
    onSimpan(form);
  };

  return (
    <AdminModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      {/* ===== HEADER ===== */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-black sm:mb-3 sm:text-xs">
            Perubahan Data
          </p>
          <h2 className="text-lg font-bold text-purple-900 sm:text-xl">
            Edit tempat PKL
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
          value={form.nama || ""}
          onChange={(v) => handleChange("nama", v)}
        />
        <Field
          label="Kategori"
          value={form.kategori || ""}
          onChange={(v) => handleChange("kategori", v)}
          select
        />
        <Field
          label="Lokasi"
          value={form.lokasi || ""}
          onChange={(v) => handleChange("lokasi", v)}
        />
        <Field
          label="Link Google Maps"
          value={form.maps || ""}
          onChange={(v) => handleChange("maps", v)}
        />
        <Field
          label="Role/ Posisi"
          value={form.posisi || ""}
          onChange={(v) => handleChange("posisi", v)}
        />
        <Field
          label="Kuota"
          value={form.kuota || ""}
          onChange={(v) => handleChange("kuota", v)}
        />
        <Field
          label="Jurusan yang sesuai"
          value={form.durasi || ""}
          onChange={(v) => handleChange("durasi", v)}
        />
        <Field
          label="Kegiatan"
          value={form.kegiatan || ""}
          onChange={(v) => handleChange("kegiatan", v)}
        />
        <Field
          label="Telepon"
          value={form.telepon || ""}
          onChange={(v) => handleChange("telepon", v)}
        />
        <Field
          label="Email"
          value={form.email || ""}
          onChange={(v) => handleChange("email", v)}
        />
        <Field
          label="Website"
          value={form.website || ""}
          onChange={(v) => handleChange("website", v)}
        />
        <Field
          label="Url Foto Perusahaan"
          value={form.foto || ""}
          onChange={(v) => handleChange("foto", v)}
        />
      </div>

      {/* Tentang Perusahaan */}
      <div className="mt-4">
        <Field
          label="Tentang Perusahaan"
          value={form.deskripsi || ""}
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
          Simpan Perubahan
        </button>
      </div>
    </AdminModal>
  );
}

/* ===== FIELD REUSABLE ===== */
function Field({
  label,
  value,
  onChange,
  select,
  textarea,
}: {
  label: string;
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
          <option value="">Pilih kategori</option>
          {KATEGORI_LIST.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="rounded-[6] border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:border-[#5A0FB6] focus:outline-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 rounded-[6] border border-gray-300 bg-white px-3 text-sm text-black focus:border-[#5A0FB6] focus:outline-none"
        />
      )}
    </div>
  );
}
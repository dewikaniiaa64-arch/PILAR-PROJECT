// src/app/tempat/[id]/page.tsx
import Link from 'next/link';
import { places } from '@/data/places';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

type Props = {
    params: Promise<{ id: string }>;
};

export default async function DetailTempatPage({ params }: Props) {
    const { id } = await params;

    const place = places.find((p) => p.id === Number(id));

    if (!place) {
        notFound();
    }

    return (
        <main className="w-full mx-auto bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Tombol Kembali */}
                <Link
                    href="/pencarian"
                    className="inline-flex items-center text-purple-700 font-medium mb-8 hover:underline"
                >
                    <span className="mr-2">←</span> Kembali
                </Link>

                {/* Grid Layout: 2 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10">

                    {/* KOLOM KIRI: Gambar & Card Info */}
                    <div className="flex flex-col gap-6">
                        {/* Gambar Utama */}
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                            {place.foto && place.foto[0] ? (
                                <img
                                    src={place.foto[0]}
                                    alt={`Foto ${place.nama}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Tidak ada foto
                                </div>
                            )}
                        </div>

                        {/* Card Info (Kuota, Kontak) */}
                        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                            <div className="mb-6">
                                <p className="text-sm text-gray-500 mb-1">Kuota</p>
                                <p className="text-xl font-bold text-purple-900">
                                    {place.kuota} Siswa
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-600">
                                {/* Telepon */}
                                {place.telepon && (
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-purple-700" />
                                        <a
                                            href={`tel:${place.telepon}`}
                                            className="hover:text-purple-700"
                                        >
                                            {place.telepon}
                                        </a>
                                    </div>
                                )}

                                {/* Email */}
                                {place.email && (
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-purple-700" />
                                        <a
                                            href={`mailto:${place.email}`}
                                            className="hover:text-purple-700"
                                        >
                                            {place.email}
                                        </a>
                                    </div>
                                )}

                                {/* Website */}
                                {place.website && (
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-5 h-5 text-purple-700" />
                                        <a
                                            href={place.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-purple-700"
                                        >
                                            {place.website}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* KOLOM KANAN: Detail Teks */}
                    <div className="flex flex-col pt-2">
                        {/* Judul & Kategori */}
                        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-3">
                            {place.nama}
                        </h1>
                        <div className="inline-block bg-gray-100 text-[#370389] px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-6">
                            {place.kategori}
                        </div>

                        {/* Lokasi & Maps */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-purple-900 font-semibold mb-1">
                                <MapPin className="w-8 h-8" />
                                <span>{place.lokasi}</span>
                            </div>
                            {place.linkMaps && (
                                <a
                                    href={place.linkMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-purple-600 underline break-all ml-8"
                                >
                                    {place.linkMaps}
                                </a>
                            )}
                        </div>

                        {/* Tentang */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-[#370389] mb-2">
                                Tentang
                            </h2>
                            <p className="text-[#370389] leading-relaxed text-justify">
                                {place.tentang}
                            </p>
                        </div>

                        {/* Kegiatan */}
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold text-[#370389] mb-2">
                                Kegiatan
                            </h2>
                            <ul className="list-disc list-inside text-[#370389] space-y-1 ml-2">
                                {place.daftarKegiatan.map((kegiatan, index) => (
                                    <li key={index}>{kegiatan}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Jurusan yang Sesuai */}
                        <div className="mb-6">
                            <h2 className="text-lg font-bold text-[#370389] mb-3">
                                Jurusan Yang Sesuai
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {place.jurusan.map((jur, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-1.5 border border-purple-300 text-purple-700 rounded-full text-sm font-medium"
                                    >
                                        {jur}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Role */}
                        <div>
                            <h2 className="text-lg font-bold text-[#370389] mb-3">Role</h2>
                            <div className="flex flex-wrap gap-3">
                                {place.role.map((r, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-1.5 border border-purple-300 text-purple-700 rounded-full text-sm font-medium"
                                    >
                                        {r}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ↓ Ini penutup kolom kanan */}
                </div>
                {/* ↓ Ini penutup grid 2 kolom */}

                {/* ============================================ */}
                {/* SECTION CABANG — Full width, di luar grid    */}
                {/* ============================================ */}
                {place.cabang && place.cabang.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-[#370389] mb-4">
                            Cabang yang Bisa Dipilih
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {place.cabang.map((c, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
                                >
                                    <h3 className="font-semibold text-purple-900 mb-2">{c.nama}</h3>
                                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                        {c.alamat}
                                    </p>
                                    <div className="flex flex-col gap-1 text-sm">
                                        {c.linkMaps && (
                                            <a
                                                href={c.linkMaps}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-600 hover:text-purple-800 underline flex items-center gap-2"
                                            >
                                                <MapPin className="w-4 h-4" /> Lihat di Maps
                                            </a>
                                        )}
                                        {c.telepon && (
                                            <a
                                                href={`tel:${c.telepon}`}
                                                className="text-purple-600 hover:text-purple-800 flex items-center gap-2"
                                            >
                                                <Phone className="w-4 h-4" /> {c.telepon}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}